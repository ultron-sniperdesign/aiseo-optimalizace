# Research — refresh `seo-pro-ai`

Datum: 10. 8. 2026 · typ: refresh (2:1 kadence) · původní článek: published + updated 2026-05-24, 860 slov

## Proč právě tenhle

Vybraný skenem všech 126 článků podle nejstaršího `updated` — ale rozhodlo něco jiného než datum.

**Je to nejpropojenější praktický hub webu: odkazuje na něj 15 dalších článků** jako na „praktický checklist SEO pro AI". Je to stránka, na kterou čtenáře posíláme z celého korpusu — a má 860 slov a nikdy nebyla refreshovaná.

## Nález 1 — checklist o měření AI viditelnosti mlčí o obou bezplatných oficiálních reportech

Článek má měření ve dvou z pěti kroků:

- **Krok 1 „Změřte výchozí stav"**: ruční projití 15–20 dotazů v ChatGPT a Perplexity + Search Console na pozice a návštěvnost.
- **Krok 5 „Měřte a opakujte"**: sledovat „podíl zmínek" napříč ChatGPT a Perplexity.

**Ani jednou nepadne report, který přesně tuhle věc měří.** Grep přes celý článek: „generativní AI" 0×, „AI Performance" 0×, „AI Mode" 0×.

Přitom:

| Report | Spuštěn | Vztah k vydání článku (24. 5. 2026) |
|---|---|---|
| Bing **AI Performance** (citace v Copilotu a AI shrnutích, grounding queries) | 10. 2. 2026 | **tři měsíce PŘED** vydáním — díra tam byla od začátku |
| Search Console **Generativní AI funkce** (imprese v AI Overviews a AI Mode) | 3. 6. 2026 | deset dní po vydání |

**Je to popáté v korpusu tatáž vada** — po `seo-nastroje-2026`, `aio-strategie`, `caste-chyby-v-seo-2026-update` a `bing-seo-pro-ai`. A tady je nejhorší, protože jde o vstupní checklist, kam míří 15 článků.

Praktický dopad: čtenář, který se článkem řídil, měřil AI viditelnost ručně a v kroku 5 mohl sáhnout po placeném sledování citací, aniž by věděl, že existují dva oficiální zdroje zdarma.

Limity, které musí jít s nimi (jinak vznikne opačný problém):

- GSC report dává **jen imprese** — žádné prokliky ani dotazy — a **neoddělí AI Mode od AI Overviews** (ověřeno v nápovědě Googlu při dřívějším refreshi `gsc-ai-segmenty-mereni`).
- Bing report Microsoft sám označuje za **vzorek** a uvádí, že citace neindikují pozici ani autoritu.

## Nález 2 — v kroku 2 zůstala nedoložená premisa o Bingu

Článek říká: Bing „pro část AI vyhledávání bývá důležitým zdrojem". To je táž formulace, kterou jsem **v Run102 stáhl z `bing-seo-pro-ai`**, protože se z dokumentace OpenAI nedá doložit (OpenAI popisuje vlastního robota OAI-SearchBot a žádný cizí index neuvádí).

Korpus si tím zase odporuje: dedikovaný článek o Bingu má opatrnou verzi, hub ji má starou. Náhrada je doložitelná: Microsoft k Bingu vztahuje své AI plochy a citace z nich sám reportuje.

## Nález 3 — checklist pro AI viditelnost nezná AI Mode

Nula zmínek. Web má přitom sekci `/ai-mode/` i několik článků (`google-ai-mode`, `ai-mode-vs-ai-overviews`). U kroku 1, kde se ručně kontrolují plochy, AI Mode chybí jako plocha, kterou má smysl projít.

## Nález 4 — chybí česká vrstva

Hub pro české publikum nezmiňuje nic o Seznamu. Z [Run104](/blog/seznam-extended-opt-out/) máme doložené, že Seznam v partnerské nápovědě popisuje `Seznam-Extended` jako odhlášení z funkcí Seznam AI. Do kroku 2 (kde se řeší, co robotům povolit a co ne) to patří jako poznámka — s tím omezením rozsahu, které drží článek o něm.

## Co refresh udělá

1. Otevřená oprava: checklist posílal měřit ručně, bezplatné oficiální reporty neuváděl.
2. Krok 1 — reporty do výchozího měření, s jejich limity.
3. Krok 5 — přeskládat měření: nejdřív bezplatné oficiální zdroje, pak ruční dotazy, pak placené nástroje.
4. Krok 2 — nahradit nedoloženou premisu o Bingu doloženou; přidat poznámku o `Seznam-Extended`.
5. Doplnit AI Mode jako plochu.
6. Rozšířit z 860 slov; doplnit odkazy na `gsc-ai-segmenty-mereni`, `bing-ai-performance-report`, `google-ai-mode`, `seznam-extended-opt-out`.
7. Titulek nechat — je to cílové klíčové slovo hubu a 15 článků na něj odkazuje. OG se negeneruje.

## Co refresh neudělá

- Nebude tvrdit, že reporty měří citace kompletně — u obou jde o částečný pohled.
- Nebude tvrdit nic o vztahu ChatGPT a Bingu.
- Nebude zobecňovat rozsah `Seznam-Extended` mimo program Seznam Partner.

## Zdroje

- vlastní korpus: `bing-ai-performance-report`, `gsc-ai-segmenty-mereni`, `bing-seo-pro-ai` (po opravě z Run102), `seznam-extended-opt-out`
- data o obou reportech ověřená v dřívějších runech u primárních zdrojů (Bing Webmaster Blog 2/2026, nápověda Search Console)
