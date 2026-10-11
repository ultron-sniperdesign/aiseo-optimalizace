/**
 * kontrola-komponent-sablony.mjs — která jména kód komponenty Astro skutečně čte.
 *
 * Pomocník pro `kontrola-komponent.py` (ten ho spouští sám). Komponentu převede stejným
 * překladačem, jaký používá `astro check` (`@astrojs/compiler` → TSX), výsledek rozparsuje
 * TypeScriptem a ze stromu vypíše, co kód čte. Ručně psaný lexer na to nestačil: regulární
 * výraz s uvozovkou, vnořený šablonový řetězec nebo apostrof v textu uvnitř výrazu ho
 * spolehlivě rozhodily a vznikaly falešné nálezy (recenze 11. 10. 2026).
 *
 * Klíče položek se smí prohlásit za nepoužité jen tam, kde vidíme každé použití položky.
 * Proto je únik výchozí stav: hodnota odvozená z vlastnosti nebo z položky pole „odchází
 * celá“, kdykoli se s ní udělá cokoli jiného než čtení klíče (`x.klíč`, `x["klíč"]`),
 * vykreslení, porovnání nebo test pravdivosti — přiřazení do proměnné, argument funkce,
 * rozbalení, prvek pole nebo objektu, atribut (komponenty i prvku HTML), dynamický klíč.
 *
 * Použití:  node blogger/kontrola-komponent-sablony.mjs <komponenta.astro> …
 * Výstup:   JSON {cesta: rozbor}; rozbor =
 *   ok          — false, když převod nebo syntaxe hlásí chybu (komponenta se pak nekontroluje)
 *   used        — jména, která kód čte: identifikátory v hodnotách, čtené klíče (`x.klíč`,
 *                 `x["klíč"]`, destrukturování, `"klíč" in x`, `hasOwnProperty("klíč")`),
 *                 dynamické prvky (`<Tag>`), kód klientských skriptů
 *   props       — {vlastnost: [lokální jména]} z destrukturování `Astro.props`
 *                 (null = vnořený vzor, bere se jako použitá)
 *   direct      — vlastnosti čtené přímo (`Astro.props.x`, `Astro.props["x"]`)
 *   topOpen     — `Astro.props` nebo `Astro` odchází celé → vlastnosti nesledovat
 *   itemOpen    — položka odchází způsobem, který nejde přiřadit (…rest) → klíče nesledovat
 *   whole       — lokální jména vlastností, jejichž hodnota odchází celá
 *   wholeItems  — jména nesoucí položku (parametr callbacku, proměnná for…of), která odcházejí
 *                 celá — vždy vypnou kontrolu klíčů, i když se jmenují stejně jako vlastnost
 *   wholeProps  — totéž pro `Astro.props.x` (jméno vlastnosti)
 *   wholeKeys   — klíče, jejichž hodnota odchází celá (`fn(item.image)` → "image",
 *                 destrukturování `({ image })` → "image"); Python rozhodne podle typu —
 *                 řetězec nebo číslo nevadí, objekt nebo pole vypne kontrolu klíčů
 *   why         — důvody pro ok=false, topOpen a itemOpen
 *   retry       — rozbor spadl s překladačem; Python komponentu zkusí znovu samostatně
 * Typy (interface, type, anotace) se nepočítají — jméno v typu není použití.
 */
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(resolve(ROOT, "package.json"));
const { convertToTSX } = require("@astrojs/compiler");
const ts = require("typescript");

const SK = ts.SyntaxKind;
const SEVERITY_ERROR = 1;

// Metody pole, jejichž callback dostává položky (první parametr; u reduce druhý).
const ITEM_CALLBACK_METHODS = new Set([
  "map", "flatMap", "forEach", "filter", "find", "findIndex", "findLast", "findLastIndex",
  "some", "every", "reduce", "reduceRight", "sort", "toSorted",
]);
// Metody, jejichž výsledek jsou pořád položky (ne hodnoty z nich odvozené).
const ITEM_RETURNING = new Set([
  "slice", "filter", "concat", "sort", "toSorted", "reverse", "toReversed", "flat", "find", "findLast", "at",
  "values", "entries", "with", "splice", "toSpliced",
]);
// Metody, jejichž výsledek není položka ani objekt z ní (pole hodnot, řetězec, číslo, logická
// hodnota). Neznámá metoda je únik — může vrátit položku (`pop`, `values().next()`…).
const SCALAR_METHODS = new Set([
  "map", "flatMap", "forEach", "some", "every", "findIndex", "findLastIndex", "indexOf", "lastIndexOf",
  "includes", "join", "reduce", "reduceRight", "keys", "push", "unshift", "toString", "toLocaleString",
  "trim", "trimStart", "trimEnd", "toUpperCase", "toLowerCase", "toLocaleUpperCase", "toLocaleLowerCase",
  "split", "replace", "replaceAll", "startsWith", "endsWith", "substring", "substr", "padStart", "padEnd",
  "charAt", "charCodeAt", "codePointAt", "normalize", "localeCompare", "match", "matchAll", "search",
  "repeat", "toFixed", "toPrecision", "toExponential", "getTime", "toISOString", "toLocaleDateString",
  "toLocaleTimeString", "toDateString", "toJSON",
]);
// Hodnota projde operátorem beze změny (může to být ona sama).
const PASS_THROUGH = new Set([SK.QuestionQuestionToken, SK.BarBarToken, SK.CommaToken]);
// Operátory, které hodnotu jen spotřebují (porovnání, výpočet, typ).
const CONSUMING = new Set([
  SK.EqualsEqualsEqualsToken, SK.ExclamationEqualsEqualsToken, SK.EqualsEqualsToken, SK.ExclamationEqualsToken,
  SK.LessThanToken, SK.GreaterThanToken, SK.LessThanEqualsToken, SK.GreaterThanEqualsToken,
  SK.PlusToken, SK.MinusToken, SK.AsteriskToken, SK.SlashToken, SK.PercentToken, SK.AsteriskAsteriskToken,
  SK.InstanceOfKeyword, SK.InKeyword,
]);
const KEY_READING_CALLS = new Set(["hasOwnProperty", "hasOwn", "has", "get", "propertyIsEnumerable"]);

const isWrapper = (n) =>
  ts.isParenthesizedExpression(n) || ts.isAsExpression(n) || ts.isNonNullExpression(n) ||
  ts.isTypeAssertionExpression(n) || ts.isSatisfiesExpression(n);

function unwrap(node) {
  while (isWrapper(node)) node = node.expression;
  return node;
}

/** Rodič přes obaly z `unwrap` a výraz v plném obalu. */
function outerParent(node) {
  let p = node.parent;
  while (p && isWrapper(p)) {
    node = p;
    p = p.parent;
  }
  return [p, node];
}

function propName(name) {
  if (ts.isIdentifier(name) || ts.isStringLiteral(name) || ts.isNumericLiteral(name) ||
      ts.isNoSubstitutionTemplateLiteral(name)) return name.text;
  return null; // počítaný klíč [x]
}

/** Klíč v hranatých závorkách, jen když je zapsaný řetězcem: x["a"] → "a"; x[k], x[0] → null. */
function bracketKey(arg) {
  arg = unwrap(arg);
  if (ts.isStringLiteral(arg) || ts.isNoSubstitutionTemplateLiteral(arg)) return arg.text;
  return null;
}

function isAstroProps(node) {
  return ts.isPropertyAccessExpression(node) && ts.isIdentifier(node.expression) &&
    node.expression.text === "Astro" && node.name.text === "props";
}

function isTypeOnly(node) {
  return ts.isTypeNode(node) || ts.isInterfaceDeclaration(node) || ts.isTypeAliasDeclaration(node) ||
    ts.isImportDeclaration(node) || ts.isExportDeclaration(node) ||
    (ts.isVariableStatement(node) && (node.modifiers || []).some((m) => m.kind === SK.DeclareKeyword));
}

async function analyze(file) {
  const src = readFileSync(file, "utf8");
  // jméno souboru jde do source mapy překladače bez escapování — uvozovka nebo řídicí znak
  // v cestě by ji rozbily; mapu nepotřebujeme, proto neutrální jméno
  const tsx = await convertToTSX(src, { filename: "component.astro" });
  if (!tsx || typeof tsx.code !== "string") return { ok: false, why: ["překladač Astro nevrátil TSX"] };
  if ((tsx.diagnostics || []).some((d) => d.severity === SEVERITY_ERROR)) {
    return { ok: false, why: ["překladač Astro hlásí chybu"] };
  }
  const sf = ts.createSourceFile("component.tsx", tsx.code, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  if ((sf.parseDiagnostics || []).length) {
    return { ok: false, why: ["TypeScript hlásí chybu syntaxe"] };
  }

  const used = new Set();
  const direct = new Set();
  const props = Object.create(null); // vlastnost se může jmenovat constructor nebo toString
  const why = new Set();
  const whole = new Set();
  const wholeProps = new Set();
  const wholeKeys = new Set();
  let topOpen = false;
  let itemOpen = false;
  const derived = new Set();          // lokální jména vlastností a položek polí z vlastností
  const indexes = new Set();          // indexové parametry callbacků (pole[i] čte prvek)
  const patternElements = new Set();  // prvky vzoru `{…} = Astro.props`
  const astroPropsKeys = [];          // uzly `Astro.props.x` — sledují se jako odvozené
  const itemNames = new Set();        // jména nesoucí položku (parametr callbacku, proměnná for…of)
  const wholeItems = new Set();

  const openTop = (reason) => { topOpen = true; itemOpen = true; why.add(reason); };
  const openItems = (reason) => { itemOpen = true; why.add(reason); };

  /** Kořen řetězu přístupů: {name}, {prop} pro `Astro.props.x`, nebo null. */
  function chainBase(expr) {
    expr = unwrap(expr);
    for (;;) {
      if (ts.isPropertyAccessExpression(expr) && isAstroProps(expr.expression)) return { prop: expr.name.text };
      if (ts.isIdentifier(expr)) return { name: expr.text };
      if (ts.isPropertyAccessExpression(expr) || ts.isElementAccessExpression(expr) || ts.isCallExpression(expr)) {
        expr = unwrap(expr.expression);
        continue;
      }
      return null;
    }
  }
  const isDerivedChain = (expr) => {
    const b = chainBase(expr);
    return !!b && (b.prop !== undefined || derived.has(b.name));
  };

  // --- 1. průchod (v pořadí zdroje): vlastnosti z Astro.props a položky polí z nich ---
  const first = (node) => {
    if (isTypeOnly(node)) return;
    if (isAstroProps(node)) {
      const [p, inner] = outerParent(node);
      if (p && ts.isVariableDeclaration(p) && p.initializer === inner && ts.isObjectBindingPattern(p.name)) {
        for (const el of p.name.elements) {
          patternElements.add(el);
          if (el.dotDotDotToken) { openTop("zbytek …rest z Astro.props"); continue; }
          const key = el.propertyName ? propName(el.propertyName) : (ts.isIdentifier(el.name) ? el.name.text : null);
          if (key === null) { openTop("počítaný klíč v destrukturování Astro.props"); continue; }
          if (ts.isIdentifier(el.name)) {
            if (props[key] !== null && !(props[key] || []).includes(el.name.text)) (props[key] ||= []).push(el.name.text);
            derived.add(el.name.text);
          } else {
            props[key] = null; // vnořený vzor { cta: { href } } — bere se jako použitá
            used.add(key);
            if (ts.isArrayBindingPattern(el.name)) openItems("pole ve vzoru Astro.props");
          }
        }
      } else if (p && ts.isPropertyAccessExpression(p) && p.expression === inner) {
        direct.add(p.name.text);
        if (!astroPropsKeys.includes(p)) astroPropsKeys.push(p);
      } else if (p && ts.isElementAccessExpression(p) && p.expression === inner) {
        const key = bracketKey(p.argumentExpression);
        if (key === null) openTop("Astro.props[výraz]");
        else direct.add(key);
      } else {
        openTop("Astro.props odchází celé");
      }
    }
    if (ts.isIdentifier(node) && node.text === "Astro") {
      const p = node.parent;
      const declared = p && (ts.isVariableDeclaration(p) || ts.isParameter(p)) && p.name === node;
      if (p && ts.isPropertyAccessExpression(p) && p.expression === node) {
        if (p.name.text === "self") openTop("Astro.self");
      } else if (!declared) {
        openTop("Astro odchází celé");
      }
    }
    // položky polí z vlastností: steps.map((step, i) => …), for (const e of entries)
    if (ts.isCallExpression(node) && ts.isPropertyAccessExpression(node.expression) &&
        ITEM_CALLBACK_METHODS.has(node.expression.name.text) && node.arguments.length &&
        isDerivedChain(node.expression.expression)) {
      const method = node.expression.name.text;
      const fn = unwrap(node.arguments[0]);
      if (ts.isArrowFunction(fn) || ts.isFunctionExpression(fn)) {
        const reduce = method.startsWith("reduce");
        const comparator = method === "sort" || method === "toSorted";
        fn.parameters.forEach((prm, i) => {
          const isItem = reduce ? i === 1 : (i === 0 || (comparator && i === 1));
          const isArray = reduce ? i === 3 : (!comparator && i === 2); // (položka, index, celé pole)
          const isIndex = !comparator && (reduce ? i === 2 : i === 1);
          if (ts.isIdentifier(prm.name)) {
            if (isItem || isArray) { derived.add(prm.name.text); itemNames.add(prm.name.text); }
            else if (isIndex) indexes.add(prm.name.text);
          } else if ((isItem && !ts.isObjectBindingPattern(prm.name)) || isArray) {
            openItems("položka v poli vzoru parametru");
          }
        });
      } else {
        openItems("položky zpracovává funkce předaná odkazem");
      }
    }
    if (ts.isForOfStatement(node) && isDerivedChain(node.expression)) {
      if (ts.isVariableDeclarationList(node.initializer)) {
        node.initializer.declarations.forEach((d) => {
          if (ts.isIdentifier(d.name)) { derived.add(d.name.text); itemNames.add(d.name.text); }
          else if (!ts.isObjectBindingPattern(d.name)) openItems("položka v poli vzoru for…of");
        });
      } else if (ts.isIdentifier(node.initializer)) {
        derived.add(node.initializer.text);  // let it; for (it of items)
        itemNames.add(node.initializer.text);
      } else {
        openItems("for…of bez deklarace");
      }
    }
    ts.forEachChild(node, first);
  };
  // do ustálení: pomocná funkce nad destrukturováním Astro.props se jinak přehlédne
  for (let round = 0, size = -1; round < 10 && size !== derived.size + indexes.size; round++) {
    size = derived.size + indexes.size;
    first(sf);
  }

  const isIndexLike = (arg) => {
    arg = unwrap(arg);
    if (ts.isNumericLiteral(arg)) return true;
    if (ts.isIdentifier(arg)) return indexes.has(arg.text);
    if (ts.isPrefixUnaryExpression(arg) || ts.isPostfixUnaryExpression(arg)) return isIndexLike(arg.operand);
    if (ts.isBinaryExpression(arg) && [SK.PlusToken, SK.MinusToken, SK.AsteriskToken, SK.SlashToken,
      SK.PercentToken].includes(arg.operatorToken.kind)) return isIndexLike(arg.left) && isIndexLike(arg.right);
    return false;
  };

  /** Hodnota opouští dohled: celá odvozená hodnota, nebo hodnota posledního čteného klíče. */
  const escape = (ref, lastKey) => {
    if (lastKey !== null) wholeKeys.add(lastKey);
    else if (ref.prop !== undefined) wholeProps.add(ref.prop);
    else if (itemNames.has(ref.name)) wholeItems.add(ref.name);
    else whole.add(ref.name);
  };

  /** Spotřebuje kontext p hodnotu `node`, aniž by odešla dál? */
  const consumes = (p, node) => {
    if (ts.isJsxExpression(p)) {
      // atribut je únik i u prvku HTML: objekt (style, class:list) Astro rozloží na klíče;
      // řetězec nebo číslo kontrolu nevypne — o tom rozhodne Python podle typu
      return !(p.parent && ts.isJsxAttribute(p.parent)); // potomek prvku — vykreslí se
    }
    if (ts.isTemplateSpan(p)) return !ts.isTaggedTemplateExpression(p.parent.parent);
    if (ts.isBinaryExpression(p)) {
      const op = p.operatorToken.kind;
      if (CONSUMING.has(op)) return true;
      if (op === SK.AmpersandAmpersandToken && p.left === node) return true; // test pravdivosti
      return false;
    }
    if (ts.isPrefixUnaryExpression(p) || ts.isPostfixUnaryExpression(p) || ts.isTypeOfExpression(p) ||
        ts.isVoidExpression(p) || ts.isDeleteExpression(p)) return true;
    if (ts.isConditionalExpression(p) && p.condition === node) return true;
    if ((ts.isIfStatement(p) || ts.isWhileStatement(p) || ts.isDoStatement(p) || ts.isSwitchStatement(p)) &&
        p.expression === node) return true;
    if (ts.isForStatement(p) && p.condition === node) return true;
    if (ts.isCaseClause(p) && p.expression === node) return true;
    if (ts.isExpressionStatement(p)) return true;
    if (ts.isCallExpression(p) && p.expression === node) return true; // hodnota se volá
    return false;
  };

  /** Projde, kam teče hodnota odvozená z vlastnosti nebo položky (`ref` = čí je). */
  const climb = (start, ref) => {
    let node = start;
    let lastKey = null;
    for (let guard = 0; guard < 10000; guard++) {
      const p = node.parent;
      if (!p) return;
      if (isWrapper(p) || ts.isAwaitExpression(p)) { node = p; continue; }
      if (ts.isConditionalExpression(p) && p.condition !== node) { node = p; continue; }
      if (ts.isBinaryExpression(p) && PASS_THROUGH.has(p.operatorToken.kind)) { node = p; continue; }
      if (ts.isBinaryExpression(p) && p.operatorToken.kind === SK.AmpersandAmpersandToken && p.right === node) {
        node = p;
        continue;
      }
      if (ts.isPropertyAccessExpression(p) && p.expression === node) {
        const name = p.name.text;
        if (ts.isCallExpression(p.parent) && p.parent.expression === p) {
          if (ITEM_RETURNING.has(name)) { node = p.parent; continue; } // pořád položky
          if (SCALAR_METHODS.has(name)) return; // map, join, trim… — výsledek už není položka
          escape(ref, lastKey); // neznámá metoda (pop, shift, next…) může vrátit položku
          return;
        }
        lastKey = name;
        node = p;
        continue;
      }
      if (ts.isElementAccessExpression(p) && p.expression === node) {
        const key = bracketKey(p.argumentExpression);
        if (key !== null) { lastKey = key; node = p; continue; }
        if (isIndexLike(p.argumentExpression)) { node = p; continue; } // prvek pole — dál položka
        escape(ref, lastKey); // dynamický klíč — čte se cokoli
        return;
      }
      if (ts.isElementAccessExpression(p) && p.argumentExpression === node) return; // použitá jako klíč
      if (consumes(p, node)) return;
      if (ts.isVariableDeclaration(p) && p.initializer === node && ts.isObjectBindingPattern(p.name)) {
        if (p.name.elements.some((el) => el.dotDotDotToken)) escape(ref, lastKey);
        return; // klíče čte vzor (návštěva BindingElement)
      }
      if (ts.isForOfStatement(p) && p.expression === node) return; // proměnná cyklu je sledovaná
      escape(ref, lastKey); // cokoli jiného: proměnná, argument, rozbalení, literál, return…
      return;
    }
  };

  // --- 2. průchod: co se čte a kam tečou odvozené hodnoty ---
  const second = (node) => {
    if (isTypeOnly(node)) return;
    const p = node.parent;

    if (ts.isIdentifier(node)) {
      const declName = p && (
        ((ts.isVariableDeclaration(p) || ts.isParameter(p) || ts.isFunctionDeclaration(p) ||
          ts.isFunctionExpression(p) || ts.isClassDeclaration(p) || ts.isClassExpression(p) ||
          ts.isMethodDeclaration(p) || ts.isPropertyDeclaration(p) || ts.isEnumDeclaration(p)) && p.name === node) ||
        (ts.isPropertyAssignment(p) && p.name === node) ||
        (ts.isJsxAttribute(p) && p.name === node) ||
        ts.isJsxNamespacedName(p) ||
        // jméno prvku HTML (<label>, <caption>) není čtení klíče
        ((ts.isJsxOpeningElement(p) || ts.isJsxClosingElement(p) || ts.isJsxSelfClosingElement(p)) &&
          p.tagName === node && /^[a-z]/.test(node.text)) ||
        ((ts.isLabeledStatement(p) || ts.isBreakStatement(p) || ts.isContinueStatement(p)) && p.label === node)
      );
      if (p && ts.isBindingElement(p)) {
        if (p.initializer === node) {
          used.add(node.text); // { title = heading }
          if (derived.has(node.text)) climb(node, { name: node.text });
        } else if (!patternElements.has(p) && (p.propertyName === node || (!p.propertyName && p.name === node))) {
          used.add(node.text); // vzor čte klíč a jeho hodnota odchází do nesledované proměnné
          wholeKeys.add(node.text);
        }
      } else if (!declName) {
        used.add(node.text);
        const isAccessName = p && ts.isPropertyAccessExpression(p) && p.name === node;
        const isShorthandValue = p && ts.isShorthandPropertyAssignment(p) && p.name === node;
        if (derived.has(node.text) && !isAccessName) {
          if (isShorthandValue) escape({ name: node.text }, null); // { entries } — odchází celé
          else climb(node, { name: node.text });
        }
      }
    }

    if (ts.isBindingElement(node) && node.dotDotDotToken && !patternElements.has(node)) {
      openItems("zbytek …rest v destrukturování");
    }
    // klíč ve vzoru zapsaný řetězcem, číslem nebo [výrazem] — { "label": l }, { ["label"]: l }
    if (ts.isBindingElement(node) && node.propertyName && !ts.isIdentifier(node.propertyName) &&
        !patternElements.has(node)) {
      let k = propName(node.propertyName);
      if (k === null && ts.isComputedPropertyName(node.propertyName)) k = bracketKey(node.propertyName.expression);
      if (k !== null) { used.add(k); wholeKeys.add(k); } else openItems("počítaný klíč ve vzoru");
    }

    if (ts.isElementAccessExpression(node)) {
      const key = bracketKey(node.argumentExpression);
      if (key !== null) used.add(key);
    }

    // "klíč" in x, x.hasOwnProperty("klíč"), Object.hasOwn(x, "klíč") — čtou klíč řetězcem
    if (ts.isBinaryExpression(node) && node.operatorToken.kind === SK.InKeyword) {
      const k = bracketKey(node.left);
      if (k !== null) used.add(k);
    }
    if (ts.isCallExpression(node)) {
      const callee = unwrap(node.expression);
      const name = ts.isPropertyAccessExpression(callee) ? callee.name.text : (ts.isIdentifier(callee) ? callee.text : "");
      if (KEY_READING_CALLS.has(name)) {
        for (const a of node.arguments) {
          const k = bracketKey(a);
          if (k !== null) used.add(k);
        }
      }
    }

    ts.forEachChild(node, second);
  };
  second(sf);
  for (const access of astroPropsKeys) climb(access, { prop: access.name.text });

  return {
    ok: true,
    used: [...used].sort(),
    props,
    direct: [...direct].sort(),
    topOpen,
    itemOpen,
    whole: [...whole].sort(),
    wholeItems: [...wholeItems].sort(),
    wholeProps: [...wholeProps].sort(),
    wholeKeys: [...wholeKeys].sort(),
    why: [...why].sort(),
  };
}

const out = {};
let compilerDied = false;
for (const file of process.argv.slice(2)) {
  try {
    out[file] = await analyze(file);
  } catch (err) {
    const message = String((err && err.message) || err);
    // překladač (Go ve WebAssembly) po pádu běhového prostředí odmítá každý další soubor;
    // nenulový kód a `retry` řeknou Pythonu, ať selhané komponenty zkusí znovu, každou zvlášť
    if (message.includes("Go program has already exited")) compilerDied = true;
    out[file] = { ok: false, retry: true, why: [`rozbor selhal: ${message.slice(0, 200)}`] };
  }
}
process.stdout.write(JSON.stringify(out));
if (compilerDied) process.exitCode = 3;
