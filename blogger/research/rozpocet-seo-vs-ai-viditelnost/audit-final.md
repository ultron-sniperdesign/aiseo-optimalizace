# VERDIKT: OPRAVIT PŘED PUBLIKACÍ

> **Vypořádáno 4. 10. 2026:** doporučený `seoTitle` byl převzat doslova; má 47 znaků
> a obsahuje celý hlavní cílový výraz. Po této jediné drobné opravě nezůstává otevřený nález.

Článek je věcně připravený k publikaci: podmínky platforem jsou úplné, tvrzení odpovídají aktuálním primárním zdrojům, CTA používá kanonický název i cenu a všechny dřívější věcné i jazykové nálezy jsou skutečně vypořádané. Před publikací zbývá jedna drobná oprava SEO titulku.

**Souhrn: 0 zásadních nálezů, 1 drobný nález.**
Závažnosti: 0 × [BLOCKER], 1 × [WARNING], 0 × [TIP].

## Nález

### 1. [WARNING] `seoTitle` vynechává část hlavního cílového výrazu

**Citace:**

> `seoTitle: "Rozpočet SEO a AI: jak peníze rozdělit"`

> `keywords: - "rozpočet SEO a AI viditelnosti"`

**Problém:** Hlavní cílový výraz je „rozpočet SEO a AI viditelnosti“, ale `seoTitle` obsahuje jen jeho zkrácenou podobu „Rozpočet SEO a AI“. Podle `blogger/auditor-system.md` má být klíčové slovo v SEO titulku vpředu. Tady není důvod vypouštět významové slovo „viditelnosti“, protože přesné znění se do limitu vejde.

**Důkaz:** Aktuální `seoTitle` má 38 znaků. Varianta shodná s titulkem stránky — „Rozpočet SEO a AI viditelnosti: jak ho rozdělit“ — má 47 znaků, začíná celým cílovým výrazem a zůstává pod limitem 60 znaků. Hlavní cílový výraz je uvedený ve frontmatteru článku a v `research.md`.

**Konkrétní oprava:**

```yaml
seoTitle: "Rozpočet SEO a AI viditelnosti: jak ho rozdělit"
```

## Kontrola vypořádání předchozích auditů

**Výsledek kontroly: VŠECHNY NÁLEZY JSOU SKUTEČNĚ VYPOŘÁDANÉ.** Ověřeno bylo 30 položek: 3 nálezy z `audit-fakta.md` a 27 nálezů z `audit-jazyk.md`. Ve `vyporadani.md` není žádné odmítnutí a kontrola aktuálního článku nenašla skrytou ani částečnou výjimku.

### Věcný audit

- **F1 Search Console — uzavřeno.** Článek nyní podmiňuje použití reportu jeho dostupností a dostatečným počtem zobrazení, uvádí možné vyloučení webu i absenci pokusů ze Search Labs. Stejná podmínka je v hlavním textu, FAQ i checklistu. To odpovídá [nápovědě Search Console](https://support.google.com/webmasters/answer/16984139?hl=en).
- **F2 GA4 AI Assistant — uzavřeno.** Text výslovně omezuje data na relace rozpoznané podle odkazujícího zdroje nebo média `ai-assistant`, připouští chybějící zdroj a správně řadí Přehled od AI a režim AI do organického vyhledávání. To odpovídá [definici výchozí skupiny kanálů GA4](https://support.google.com/analytics/answer/9756891?hl=en).
- **F3 Bing AI Performance — uzavřeno.** Článek uvádí veřejný náhled, podporovaná prostředí Microsoftu, konkrétně Copilot, AI souhrny Bingu a vybrané partnerské integrace, i omezení vzorku a významu citace. To odpovídá [oznámení Microsoftu](https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/).

### Jazykový audit

- **J1–J27 — uzavřeno.** Všechny citované původní formulace byly nahrazené deklarovanými opravami. Kontrola celého článku nenašla původní chybné vazby ani odmítnutou variantu.
- Mechanický průchod `python3 blogger/jazyk-check.py … --slovnik blogger/JAZYK_SLOVNIK.md` vrátil **0 nálezů z 275 pravidel** při 2 009 slovech.
- Nezávislé čtení nenašlo zakázaný termín, manipulativní naléhavost, garanci výsledku ani novou prokazatelně vadnou českou vazbu.

## Nezávislá věcná a redakční kontrola

### Platformy a aktuálnost 2026

- Google skutečně uvádí společný základ SEO pro Přehled od AI a režim AI, požadavek indexace a způsobilosti k úryvku, shodu strukturovaných dat s viditelným textem, aktuální údaje a absenci zvláštního AI souboru či zvláštního typu značení. Současně nic negarantuje. Článek tyto podmínky zachovává: [Google Search Central](https://developers.google.com/search/docs/appearance/ai-features).
- Samostatný report Search Console je report zobrazení pro Přehled od AI a režim AI; nabízí členění podle stránky, země, data a zařízení, rozlišuje textové a multimodální hledání a nezahrnuje Search Labs. Článek z něj nedělá report návštěv ani tržeb: [Search Console Help](https://support.google.com/webmasters/answer/16984139?hl=en).
- GA4 popisuje AI Assistant jako kanál pro služby typu ChatGPT, Gemini, DeepSeek, Copilot nebo Grok a funkce Googlu z něj vylučuje. Článek správně upozorňuje na podmínku rozpoznání zdroje: [Google Analytics Help](https://support.google.com/analytics/answer/9756891?hl=en).
- Microsoft popisuje citace jako výskyt zdroje, nikoli pořadí, návštěvu či obchodní výsledek; grounding queries jsou vzorek. Článek drží stejná omezení: [Bing Webmaster Blog](https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/).
- OpenAI 16. 9. 2026 skutečně oznámila zkoušku Sponsored Agents pro vybrané inzerenty v USA po kliknutí na reklamu. Článek z toho nevyvozuje dostupnost v Česku a odděluje placenou distribuci od organické viditelnosti: [OpenAI](https://openai.com/index/reimagining-advertising-with-ai/).

### Brand voice a citovatelnost

- Krátká odpověď má 53 slov, dává samostatný smysl a začíná přímým doporučením, nikoli negací.
- První odstavec těla sám vysvětluje hlavní odpověď: společný základ se neplatí dvakrát a samostatně se vede jen vyhodnotitelná práce navíc.
- FAQ odpovídá na reálné rozhodovací otázky a každá odpověď je srozumitelná bez okolního článku.
- Text neslibuje pozici, citaci ani návratnost a nepoužívá zakázané výrazy z auditorského zadání.

### Odkazy, komponenty a CTA

- Všech pět externích odkazů vede na primární zdroje Googlu, Microsoftu a OpenAI a význam odkazu odpovídá okolnímu tvrzení.
- Interní odkazy `/blog/reportovani-ai-viditelnosti/`, `/blog/ai-navstevnost-konverze/` a `/audit/` mají existující cíle a odpovídají popisu.
- Všech sedm importovaných komponent existuje a použité vlastnosti odpovídají jejich rozhraním. `npm run check` skončil s **0 chybami a 0 varováními**; tři hlášené hints jsou v jiných sdílených souborech. `npm run check:content` skončil bez nálezů.
- CTA používá kanonický produkt **Audit AI viditelnosti** a cenu **3 600 Kč bez DPH** podle `src/content/pages/audit.ts`. Kanonická cena Packu je **1 490 Kč včetně DPH** podle `src/content/pages/pack.ts`; článek ji netvrdí.

## Poznámka k rozsahu jazykové kontroly

Doplňkový průchod přes externí OpenAI API podle skillu `cestina-audit` nebyl proveden. Automatické schválení odmítlo odeslání celého dosud nepublikovaného článku a slovníku externímu API kvůli rozsahu sdílených dat. Jazyková kontrola proto stojí na mechanickém checkeru a nezávislém modelovém čtení v tomto vlákně; samotný článek nebyl upraven.
