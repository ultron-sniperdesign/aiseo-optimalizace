# JAZYK_SLOVNIK.md — hlídané výrazy

> **Verze: 2** · založeno 2026-08-23 · poslední změna 2026-08-23 (článek 1/147) · audituje skill `cestina-audit`
>
> Jediný zdroj pravdy pro jazykový audit článků. Čte ho člověk i `blogger/jazyk-check.py`
> (tentýž skript má skill `cestina-audit` v `~/.claude/skills/cestina-audit/scripts/`).
> Pravidla přibývají **článek po článku** — každé má povinně důvod a původ.

## Jak číst tabulky

| Sloupec | Význam |
|---|---|
| **Úroveň** | ⛔ nikdy · ⚠️ jen s vysvětlením u prvního výskytu · ✅ zavedené, neřešit |
| **Regex** | co hledá `check.py` (Python, `re.IGNORECASE`). MUSÍ být v zpětných apostrofech — jinak tabulka rozseká alternace na znaku \| |
| **Náhrada** | čím to nahradit, nebo co s tím |
| **Proč** | bez důvodu se pravidlo nezapisuje |
| **Odkud** | slug článku a datum, kde se to poprvé objevilo |

⛔ **Citace jsou z auditu vyňaté.** Doslovná anglická věta z oznámení výrobce je doklad, ne styl.

---

## 1. Anglicismy a kalky

| Úroveň | Regex | Náhrada | Proč | Odkud |
|---|---|---|---|---|
| ⛔ | `\bmarket share\b` | podíl na trhu | má přesnou českou náhradu, kterou web jinde používá | seed 2026-08-23 |
| ⛔ | `\btraffic\b` | návštěvnost | totéž; „traffic“ v české větě je čirý kalk | seed 2026-08-23 |
| ⛔ | `\binsight(y|ů|ům)?\b` | poznatky, zjištění | agenturní žargon bez přidané informace | seed 2026-08-23 |
| ⛔ | `\bcontent\b(?! (marketing|management))` | obsah | jednoslovná náhrada existuje | seed 2026-08-23 |
| ⛔ | `\bkomprehenzivní\b` | ucelený, souhrnný | otrocký překlad comprehensive | seed 2026-08-23 |
| ⛔ | `\brecentnost\b` | čerstvost, aktuálnost | kalk z recency, čeština to má | seed 2026-08-23 |
| ⚠️ | `\brollout\b` | postupné zpřístupňování | u oznámení výrobců se hodí, ale první výskyt vysvětlit | seed 2026-08-23 |
| ⚠️ | `\blanding page\b` | prodejní stránka | zavedené v oboru, ale ne u laika | seed 2026-08-23 |
| ⛔ | `\bshare\b(?! of voice)` | podíl | „share dotazů“ místo „podíl dotazů“ — kalk, který projde i tam, kde je market share pokrytý | jak-vypnout-ai-overview 2026-08-23 |
| ⚠️ | `\bshare of voice\b` | podíl zmínek | odborný termín, první výskyt vysvětlit | seed 2026-08-23 |
| ⛔ | `\bmaster switch\b` | hlavní vypínač | anglicismus s přesnou českou náhradou | jak-vypnout-ai-overview 2026-08-23 |
| ⛔ | `\bdefault\b(?!-)` | výchozí | web sám jinde píše „výchozí model“, „výchozí režim“ | jak-vypnout-ai-overview 2026-08-23 |
| ⛔ | `\bsearch engine(s)?\b` | vyhledávač | mimo doslovné popisky rozhraní prohlížeče | jak-vypnout-ai-overview 2026-08-23 |
| ⛔ | `\bbrowser\b` | prohlížeč | v české větě zbytečné | jak-vypnout-ai-overview 2026-08-23 |
| ⛔ | `\bsearch bar\b` | vyhledávací pole | mimo doslovné popisky rozhraní | jak-vypnout-ai-overview 2026-08-23 |
| ⛔ | `\bbackup\b` | záloha, záložní varianta | běžné slovo, není důvod k angličtině | jak-vypnout-ai-overview 2026-08-23 |
| ⛔ | `\bhard limit\b` | pevný limit | totéž | jak-vypnout-ai-overview 2026-08-23 |
| ⛔ | `\bweb owner\b` | provozovatel webu | role se v češtině pojmenovat dá | jak-vypnout-ai-overview 2026-08-23 |
| ⛔ | `\bprivacy-first\b` | zaměřený na soukromí | anglická nálepka místo popisu | jak-vypnout-ai-overview 2026-08-23 |
| ⛔ | `\btest-first\b` | nejdřív otestovat, pak nasadit | módní kalk | jak-vypnout-ai-overview 2026-08-23 |
| ⛔ | `\bimpressions\b` | zobrazení | česká Search Console používá „zobrazení“ | jak-vypnout-ai-overview 2026-08-23 |
| ⛔ | `\bbaseline\b(?! měření)` | výchozí stav, výchozí metriky | v textu pro čtenáře; v interních poznámkách projektu se toleruje | jak-vypnout-ai-overview 2026-08-23 |
| ⛔ | `\bpublisher(ů|i|y|em)?\b` | vydavatel | běžný český termín existuje | jak-vypnout-ai-overview 2026-08-23 |
| ⚠️ | `\bopt-?in\b` | volitelné, zapíná se ručně | u ovládání robotů je opt-in/opt-out zavedený pár (web má články se slugem opt-out), jinde nahradit | jak-vypnout-ai-overview 2026-08-23 |
| ⚠️ | `\bleadgen\b` | sběr poptávek | agenturní zkratka, u laika nesrozumitelná | jak-vypnout-ai-overview 2026-08-23 |
| ✅ | `\bbrand(ov|ý|ové|ových)?\b` | — | „brandový dotaz“ je v českém marketingu zavedené | jak-vypnout-ai-overview 2026-08-23 |
| ✅ | `\bsnippet\b` | — | zavedené v SEO i v české nápovědě Googlu | jak-vypnout-ai-overview 2026-08-23 |
| ✅ | `\bSEO\b` | — | zavedená zkratka, jádro oboru | seed 2026-08-23 |
| ✅ | `\be-?shop\b` | — | v češtině běžnější než internetový obchod | seed 2026-08-23 |
| ✅ | `\bcrawler\b` | — | web má vlastní články s tímhle termínem v titulku | seed 2026-08-23 |
| ✅ | `\bprompt\b` | — | zavedené, česká náhrada by mátla | seed 2026-08-23 |
| ✅ | `\bsnippet\b` | — | zavedené v SEO, náhrada „úryvek“ se používá souběžně | seed 2026-08-23 |

## 2. Strojové a AI obraty

| Úroveň | Regex | Náhrada | Proč | Odkud |
|---|---|---|---|---|
| ⛔ | `je důležité (poznamenat|zmínit|si uvědomit)` | vypustit, nebo říct věc rovnou | typický výplňkový obrat generovaného textu | seed 2026-08-23 |
| ⛔ | `v dnešní (digitální )?(době|éře)` | vypustit | prázdná kulisa | seed 2026-08-23 |
| ⛔ | `hraje (klíčovou|zásadní|důležitou) roli` | konkrétně co dělá | nic neříká, jen zvyšuje důležitost | seed 2026-08-23 |
| ⛔ | `v neposlední řadě` | vypustit | výplň bez informace | seed 2026-08-23 |
| ⛔ | `posouvá .{0,20}na (novou úroveň|vyšší level)` | konkrétní změna | marketingová fráze | seed 2026-08-23 |
| ⛔ | `stojí za (zmínku|povšimnutí), že` | říct to rovnou | výplň | seed 2026-08-23 |
| ⛔ | `nezbytn(ý|ým) nástroj` | konkrétně k čemu slouží | superlativ bez opory | seed 2026-08-23 |

## 3. Marketingová vata

| Úroveň | Regex | Náhrada | Proč | Odkud |
|---|---|---|---|---|
| ⛔ | `\brevolučn(í|ě)\b` | vypustit nebo doložit | hodnotící superlativ, web ho zakazuje v tonalitě | seed 2026-08-23 |
| ⛔ | `\bunikátní\b` | jedinečný, nebo doložit čím | nadužívané, obvykle nepravdivé | seed 2026-08-23 |
| ⛔ | `\bšpičkov(ý|á|é|ých)\b` | vypustit | hodnocení bez měřítka | seed 2026-08-23 |
| ⚠️ | `\bzásadním způsobem\b` | výrazně, nebo číslo | často zakrývá, že chybí data | seed 2026-08-23 |

## 4. Nepřirozená syntax

| Úroveň | Regex | Náhrada | Proč | Odkud |
|---|---|---|---|---|
| ⛔ | `provádět (optimalizaci|analýzu|kontrolu)` | optimalizovat, analyzovat, kontrolovat | nominalizace místo slovesa | seed 2026-08-23 |
| ⛔ | `dochází k (nárůstu|poklesu|zvýšení|snížení)` | roste, klesá | úřední pasivum | seed 2026-08-23 |
| ⚠️ | `bylo (zjištěno|prokázáno|ukázáno)` | kdo to zjistil | pasivum zakrývá zdroj, což je u tohohle webu problém | seed 2026-08-23 |

## 5. Glosář projektu (termíny, které web sám odmítá)

| Úroveň | Regex | Náhrada | Proč | Odkud |
|---|---|---|---|---|
| ⛔ | `\banswer block\b` | krátká odpověď | glosář v CLAUDE.md § X | seed 2026-08-23 |
| ⛔ | `\bschema markup\b` | strukturovaná data | glosář v CLAUDE.md § X | seed 2026-08-23 |
| ⛔ | `\bhub-and-spoke\b` | prolinkování mezi stránkami | glosář v CLAUDE.md § X | seed 2026-08-23 |

## 6. Typografie a interpunkce

| Úroveň | Regex | Náhrada | Proč | Odkud |
|---|---|---|---|---|
| ⛔ | `„[^„“\n<>=]{0,160}"` | zavřít českou uvozovkou “ | opakovaná chyba, rozbíjí i MDX a Python. Regex vylučuje `<>=`, aby nematchoval uvozovky HTML atributů — plošná náhrada bez téhle pojistky rozbila `class="hl"` | jak-vypnout-ai-overview 2026-08-23 |
| ⛔ | `\d%` | mezera před % (25 %) | česká sazba; výjimka jen v přídavném jméně (25% podíl) | seed 2026-08-23 |
| ⛔ | `\w\s-\s\w` | pomlčka – | spojovník mezi slovy místo pomlčky (odrážky a složeniny se nehlásí) | seed 2026-08-23 |
| ⛔ | `\b\d{4}-\d{2}-\d{2}\b(?![^<]*>)` | české datum (23. 8. 2026) | anglický formát data v textu | seed 2026-08-23 |

## 7. Míchání jazyků v jednom sousloví

| Úroveň | Regex | Náhrada | Proč | Odkud |
|---|---|---|---|---|
| ⛔ | `\bbusiness (problém|case|model)\b` | obchodní problém | anglicko-český hybrid | jak-vypnout-ai-overview 2026-08-23 |
| ⛔ | `\bweb-?only\b` | jen na webu, režim jen s weby | polovičatý slepenec | jak-vypnout-ai-overview 2026-08-23 |
| ⛔ | `\bquery-?level\b` | na úrovni dotazů | totéž | jak-vypnout-ai-overview 2026-08-23 |
| ⛔ | `\baccount-?specific\b` | pro konkrétní účet | totéž | jak-vypnout-ai-overview 2026-08-23 |
| ⛔ | `\bAI (Answer feature|summaries)\b` | funkce AI odpovědí, shrnutí od AI | anglický název funkce v české větě, když nejde o oficiální název v rozhraní | jak-vypnout-ai-overview 2026-08-23 |
| ⛔ | `\bGoogle features\b` | funkce Googlu | totéž | jak-vypnout-ai-overview 2026-08-23 |
| ⚠️ | `\bbrand vs\.? non-?brand\b` | brandové vs. nebrandové dotazy | při prvním výskytu rozepsat | jak-vypnout-ai-overview 2026-08-23 |
| ⚠️ | `\bquery mix(u|em)?\b` | skladba dotazů | žargon | jak-vypnout-ai-overview 2026-08-23 |
| ⚠️ | `\bcluster URL\b` | skupina URL | žargon | jak-vypnout-ai-overview 2026-08-23 |
| ⚠️ | `\bseed dotaz(u|em)?\b` | výchozí dotaz | žargon | jak-vypnout-ai-overview 2026-08-23 |
| ⚠️ | `\brising queries\b` | rychle rostoucí dotazy | název sloupce v Trends, ale v české větě vysvětlit | jak-vypnout-ai-overview 2026-08-23 |

## 8. Co se NEauditovalo (výjimky)

| Co | Proč |
|---|---|
| Doslovné popisky rozhraní (`Settings → Search engine → Manage search engines`, `Add a Search Engine`) | jsou to skutečné položky menu v anglickém prohlížeči; překlad by čtenáře poslal hledat něco, co tam není. **Piš je do zpětných apostrofů** — checker je pak přeskočí a čtenář je odliší od běžného textu |
| Anglické citace ze zdrojů | doklad, ne styl |
| Názvy funkcí a produktů (Search Labs, AI Overviews, DuckAssist) | vlastní jména |
| Direktivy a parametry (`data-nosnippet`, `&udm=14`, `max-snippet`) | kód |
