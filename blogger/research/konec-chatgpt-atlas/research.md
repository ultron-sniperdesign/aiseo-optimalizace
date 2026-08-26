# Research — „Konec ChatGPT Atlasu" (PRIORITA B, 26. 8. 2026)

## Proč teď

Řádek plánu `konec chatgpt atlas`. Aktuální událost s **krátkým oknem**: dotaz „chatgpt atlas"
má v ČR **1 900 hledání/měs, ale klesá** (990 → 580 → 470 podle trend researche 25. 8.).
Čím dřív text vyjde, tím líp.

## Ověřená fakta

| Fakt | Zdroj | Datum |
|---|---|---|
| OpenAI oznámil konec samostatného prohlížeče **ChatGPT Atlas** | TechCrunch: „OpenAI is shutting down Atlas, but its AI browser ambitions are still growing" | **9. 7. 2026** |
| Atlas **přestal fungovat** | Notebookcheck, MacRumors, ecorpit | **9. 8. 2026** |
| Fungoval **necelých 10 měsíců** (spuštěn v říjnu 2025) | TechCrunch, agregátory | 2025–2026 |
| Náhrada 1: **rozšíření ChatGPT pro Chrome** — čte kontext otevřené stránky, odpovídá na otázky o ní, shrnuje, spouští delší úkoly z prohlížeče | TechCrunch (parafráze oznámení OpenAI) | 9. 7. 2026 |
| Náhrada 2: **režim prohlížení v desktopové aplikaci ChatGPT** — víc karet, stahování, přihlašování k účtům, plus vzdálený cloudový prohlížeč pro agentní úkoly | tamtéž | 9. 7. 2026 |
| **Agentní režim** je omezený na placené účty (Plus, Pro, Business) | agregátory (sigmabrowser, tooldirectory) — ⚠️ jednozdrojové, uvádět s výhradou | 2026 |
| Důvod: rozhodnutí omezit vedlejší projekty („side quests") | TechCrunch, odkaz na Fidji Simo | 9. 7. 2026 |
| Atlas byl celou dobu **jen pro macOS**; slibované verze pro Windows/iOS/Android nevyšly | agregátory — ⚠️ jednozdrojové | 2026 |
| **Comet** (Perplexity) zůstává, od 2. 10. 2025 zdarma pro všechny; do mezery míří i Edge Copilot | Wikipedia (Comet), agregátory | 2025–2026 |

## Co z toho plyne pro weby (vlastní analýza, navazuje na náš starší článek)

1. **Pro měření se nic zásadního nemění.** Atlas i Comet se podle dostupných testů hlásí
   user-agentem jako **Chrome** — konec jednoho produktu tedy neubere ani nepřidá řádek,
   který by šlo v analytice odlišit. Kdo čekal, že „po Atlasu bude v datech klid", čekal
   na něco, co v datech nikdy nebylo vidět.
2. **Robots.txt se to netýká.** Agentní návštěva je vyvolaná uživatelem, ne procházení
   robotem; naše články `roboti-vyvolani-uzivatelem` a `overovani-ai-robotu` to rozebírají.
3. **Riziko se přesouvá, nemizí.** Agentní funkce jsou dál — jen v rozšíření pro Chrome
   a v desktopové aplikaci. Ubyl produkt, ne chování.
4. **Ponaučení o „přípravě na AI prohlížeč":** rady typu „připravte web na Atlas" zestárly
   za deset měsíců. Co nezestárlo: čitelný obsah bez JavaScriptu, konzistentní údaje,
   měřitelné vlastní kanály.

## Kolize v korpusu

| Článek | Co bere | Vymezení |
|---|---|---|
| `ai-prohlizece-atlas-comet` (28. 7., aktualizovaný 25. 8.) | mechanika: user-agent, měření, reklama, Signature-Agent | **Zůstává jako mechanika.** Nový text je zpravodajsko-analytický: co se stalo, proč, co zbylo. Vzájemně prolinkovat. |
| `roboti-vyvolani-uzivatelem`, `overovani-ai-robotu` | robots.txt a ověřování robotů | odkaz z části o robots.txt |
| `ai-nakupni-agenti` | nákupní agenti | odkaz v části o agentních funkcích |

## Formát

Kategorie `analysis`. Krátká odpověď 40–60 slov s datem vypnutí. Struktura: co se stalo →
proč to skončilo → čím to OpenAI nahradil → co zbylo z konkurence → co to mění (a nemění)
pro weby → co si z toho odnést. Čísla o poplatcích/podílech neuvádět bez primárního zdroje.
