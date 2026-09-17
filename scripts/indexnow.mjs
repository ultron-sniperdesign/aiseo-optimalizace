#!/usr/bin/env node
/**
 * IndexNow — podání URL, které se v tomhle nasazení skutečně změnily.
 *
 * PROČ TENHLE SKRIPT EXISTUJE
 * Balíček `astro-indexnow` určoval „co se změnilo“ podle sha256 **zbuildovaného
 * index.html** a hashe držel v `.astro-indexnow-cache.json`. Na tomhle projektu
 * to nefungovalo ze dvou nezávislých důvodů (obojí změřeno 17. 9. 2026):
 *
 *  1. `PUBLIC_GSC_VERIFICATION` a `PUBLIC_GA4_MEASUREMENT_ID` jsou Secrets. Lokální
 *     build je nemá, CI ano, takže se liší `<head>` KAŽDÉ stránky. Baseline z lokálního
 *     buildu proto nikdy nemohla sednout na CI — odtud „submitting 261 changed URLs“
 *     u commitu, který neměnil jedinou stránku.
 *  2. Každá stránka odkazuje na `/_astro/*.HASH.css`. Změna jedné hodnoty v
 *     `global.css` překlopila hash u **268 z 284** stránek (ověřeno pokusem).
 *
 * Bod 2 znamená, že commitování cache z CI (varianta „bot commit“) problém NEŘEŠÍ —
 * fungovalo by do prvního zásahu do CSS. Detekce se proto neopírá o build vůbec.
 *
 * JAK TO FUNGUJE TEĎ
 * Zdrojem pravdy je git: seznam souborů změněných mezi minulým a současným commitem.
 * Ty se namapují na URL a každá se ověří proti `dist/` — co v buildu neexistuje,
 * se nepodá. Mapování se **odvozuje z kódu** (šablony v `src/pages/` samy říkají,
 * který datový modul čtou), takže nová stránka mapování aktualizuje sama.
 *
 * Sdílené soubory (i18n, komponenty, layouty, styly, konfigurace) vědomě NEgenerují
 * žádné URL. Globální změna není důvod hlásit stovky stránek jako čerstvé; radši
 * podat míň než zaplavit koncový bod.
 *
 * POUŽITÍ
 *   node scripts/indexnow.mjs --base <sha> --head <sha>     # výpis, nepodává
 *   INDEXNOW_ENABLED=1 node scripts/indexnow.mjs --base … --head …   # podá
 *   node scripts/indexnow.mjs --files "a.mdx b.ts"          # bez gitu, pro test
 *
 * Bez `INDEXNOW_ENABLED=1` skript jen vypíše, co by podal. To je záměr: do vyřešení
 * tiketu u Bingu (403 UserForbiddedToAccessSite, UCM000007490076) zůstává podání
 * vypnuté, ale detekce běží a je vidět v logu CI.
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const SITE = "https://aiseo-optimalizace.cz";
const DIST = path.join(ROOT, "dist");
/** Nad tenhle počet URL se nepodává nic — pojistka proti chybě v mapování. */
const MAX_URLS = 60;

/* ---------- argumenty ---------- */
const args = process.argv.slice(2);
const arg = (name) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : undefined;
};
const enabled = process.env.INDEXNOW_ENABLED === "1";
const key = process.env.INDEXNOW_KEY || "929226a175c657aac3ba73a765ee364d";

/* ---------- 1. seznam změněných souborů ---------- */
function changedFiles() {
  const explicit = arg("files");
  if (explicit) return explicit.split(/\s+/).filter(Boolean);

  const base = arg("base");
  const head = arg("head") || "HEAD";
  if (!base || /^0+$/.test(base)) {
    console.log("[indexnow] bez výchozího commitu (nová větev nebo ruční spuštění) — nepodávám nic");
    return [];
  }
  try {
    const out = execFileSync("git", ["diff", "--name-only", `${base}..${head}`], {
      cwd: ROOT,
      encoding: "utf8",
    });
    return out.split("\n").map((s) => s.trim()).filter(Boolean);
  } catch (err) {
    console.log(`[indexnow] git diff selhal (${err.message.split("\n")[0]}) — nepodávám nic`);
    return [];
  }
}

/* ---------- 2. mapování zdroj → URL (odvozené z kódu) ---------- */
/** `src/pages/foo/index.astro` → `/foo/`, `src/pages/foo.astro` → `/foo/`. */
function routeFromPageFile(rel) {
  let r = rel.replace(/^src\/pages\//, "").replace(/\.astro$/, "");
  if (r.includes("[")) return null;            // dynamická routa — řeší se přes obsah
  r = r.replace(/\/index$/, "").replace(/^index$/, "");
  return r ? `/${r}/` : "/";
}

/** Projde šablony a zjistí, který datový modul která routa čte. */
function dataModuleRoutes() {
  const map = new Map();
  const walk = (dir) => {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) { walk(full); continue; }
      if (!e.name.endsWith(".astro")) continue;
      const rel = path.relative(ROOT, full).replace(/\\/g, "/");
      const route = routeFromPageFile(rel);
      if (!route) continue;
      for (const m of fs.readFileSync(full, "utf8").matchAll(/content\/pages\/([a-z0-9-]+)/g)) {
        const list = map.get(m[1]) || [];
        if (!list.includes(route)) list.push(route);
        map.set(m[1], list);
      }
    }
  };
  walk(path.join(ROOT, "src", "pages"));
  return map;
}

function mapToPaths(files) {
  const modules = dataModuleRoutes();
  const paths = new Set();
  let articleAdded = false;

  for (const f of files) {
    let m;
    if ((m = f.match(/^src\/content\/articles\/(.+)\.mdx$/))) {
      paths.add(`/blog/${m[1]}/`);
      articleAdded = true;                     // výpis blogu se mění i při úpravě (datum)
    } else if ((m = f.match(/^src\/content\/sections\/(.+)\.mdx$/))) {
      paths.add(`/${m[1]}/`);
    } else if ((m = f.match(/^src\/content\/services\/(.+)\.mdx$/))) {
      paths.add(`/sluzby/${m[1]}/`);
    } else if (f.startsWith("src/content/pillar/")) {
      paths.add("/seo-vs-geo-vs-aeo-vs-aio/");
    } else if ((m = f.match(/^src\/content\/pages\/([a-z0-9-]+)\.ts$/))) {
      for (const r of modules.get(m[1]) || []) paths.add(r);
    } else if (f.startsWith("src/pages/")) {
      const r = routeFromPageFile(f);
      if (r) paths.add(r);
    }
    // vše ostatní (i18n, komponenty, layouty, styly, config, blogger/, _source/,
    // public/) vědomě nemapuje na žádnou URL — viz hlavička
  }
  if (articleAdded) paths.add("/blog/");
  return [...paths].sort();
}

/* ---------- 3. ověření proti buildu ---------- */
function existsInBuild(p) {
  const file = path.join(DIST, p.replace(/^\//, ""), "index.html");
  return fs.existsSync(file);
}

/* ---------- 4. podání ---------- */
async function submit(urls) {
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      host: new URL(SITE).host,
      key,
      keyLocation: `${SITE}/${key}.txt`,
      urlList: urls,
    }),
  });
  const body = await res.text().catch(() => "");
  if (res.ok) {
    console.log(`[indexnow] podáno ${urls.length} URL — HTTP ${res.status}`);
    return 0;
  }
  // 4xx je naše chyba (klíč, oprávnění, formát) → tvrdé selhání kroku.
  // 5xx a síť jsou výpadek na druhé straně → hlasitě, ale bez shození buildu.
  const level = res.status >= 400 && res.status < 500 ? "CHYBA" : "VAROVÁNÍ";
  console.error(`[indexnow] ${level}: podání selhalo — HTTP ${res.status} ${body.slice(0, 200)}`);
  return res.status >= 400 && res.status < 500 ? 1 : 0;
}

/* ---------- běh ---------- */
const files = changedFiles();
const candidates = mapToPaths(files);
const live = candidates.filter(existsInBuild);
const missing = candidates.filter((p) => !live.includes(p));

console.log(`[indexnow] změněných souborů: ${files.length}`);
console.log(`[indexnow] namapováno na URL: ${candidates.length}`);
if (missing.length) console.log(`[indexnow] není v buildu, vynecháno: ${missing.join(", ")}`);
for (const p of live) console.log(`[indexnow]   ${SITE}${p}`);

if (live.length === 0) {
  console.log("[indexnow] nic k podání");
  process.exit(0);
}
if (live.length > MAX_URLS) {
  console.error(`[indexnow] CHYBA: ${live.length} URL je nad limitem ${MAX_URLS} — nepodávám nic. Zkontroluj mapování nebo rozsah commitů.`);
  process.exit(1);
}
if (!enabled) {
  console.log("[indexnow] vypnuto (INDEXNOW_ENABLED != 1) — výše je výpis, nic se neodeslalo");
  process.exit(0);
}
process.exit(await submit(live.map((p) => SITE + p)));
