# Research — Seznam-Extended: český opt-out z AI

Datum měření a odečtu dokumentace: **9. 8. 2026** · typ: nový článek (analysis)

## Jak jsem se k tomu dostal — a co jsem měl skoro špatně

Šel jsem po hypotéze, že **Seznam žádný opt-out z AI nemá**. Dokumentace procházení
(`o-seznam.cz/napoveda/vyhledavani/en/crawling-control/`) totiž jmenuje **jen SeznamBota**
a zástupný `User-agent: *`. Žádný AI agent tam není. Kdybych to publikoval takhle, byla by to
nepravda — stejná třída chyby jako u Anthropiku v [ověřování AI robotů](/blog/overovani-ai-robotu/),
kde mě odhad adresy poslal na 404 a málem z toho udělal závěr o absenci.

Opt-out existuje. Je ale **jinde, než kde by ho člověk hledal**: v partnerské nápovědě
`partner.seznam.cz/napoveda/dalsi-sluzby/seznam-ai/`.

## Nález 1 — jmenuje se `Seznam-Extended` a je doložený přímo Seznamem

Přesná věta ze zdrojového HTML té stránky (ověřeno 2× fetchem, řetězec se na stránce
vyskytuje dvakrát):

> „Pokud se do této nové služby nechcete zapojit, v souboru robots.txt na příslušné doméně
> specifikujte zákaz přístupu pro User-agent „Seznam-Extended“ (Disallow). Na váš web již
> nadále nebudeme uživatele přivádět ani s jeho obsahem v rámci Seznam AI pracovat.“

Dvě věci z toho:

1. Mechanismus je **běžný robots.txt Disallow** na pojmenovaný user-agent, analogicky
   ke `Google-Extended`.
2. **Není to opt-out zadarmo.** Podle téže věty s odhlášením zmizí i přiváděná návštěvnost
   z ploch Seznam AI. Je to volba mezi „nepracujte s mým obsahem" a „posílejte mi z toho lidi",
   ne jednosměrná ochrana.

### ⚠️ Rozsah, který NESMÍM přehnat

Stránka je **partnerská nápověda pro vydavatele v Seznam Partner / Newsfeed** a odhlášení
je tam popsané jako odhlášení „z této nové služby". **Dokumentace neříká, jak se
`Seznam-Extended` chová u webů mimo ten program.** Nesmím tedy tvrdit, že jde o plošný
opt-out pro každý český web. Tvrdit můžu jen: Seznam ten user-agent dokumentuje a popisuje
u něj tenhle účinek.

## Nález 2 — je dokumentovaný tam, kam webmaster nechodí

- `o-seznam.cz/.../crawling-control/` (dokumentace procházení, kam se chodí pro robots.txt):
  jmenuje **SeznamBot** a `*`. Podporované direktivy: Disallow, Allow, Request-rate, Sitemap.
  **Seznam-Extended tam není.**
- `partner.seznam.cz/napoveda/dalsi-sluzby/seznam-ai/` (partnerská nápověda k monetizaci):
  **Seznam-Extended tam je.**

Kdo řeší robots.txt, čte to první. Opt-out je ve druhém.

## Nález 3 — měření: kdo ho v Česku reálně používá

Původně jsem měřil 47 e-shopů z [měření Shoptetu](/blog/shoptet-robots-txt-ai-roboti/) →
**0 z 47 zmiňuje Seznam v robots.txt vůbec**. Jenže e-shopy nejsou populace, které se ta
partnerská dokumentace týká. Vzorek jsem proto vyměnil za **33 českých zpravodajských
a oborových webů** (staženo 33 z 33 robots.txt, 9. 8. 2026):

| Co | Kolik z 33 |
|---|---|
| **má pravidlo pro `Seznam-Extended`** | **1** |
| má pravidlo pro `SeznamBot` | 2 |
| má pravidlo aspoň pro jednoho **cizího** AI robota | **16** |
| nemá pravidlo pro žádného AI robota | 17 |
| má pravidla pro 6 a víc AI robotů | 9 |

Ten jediný web se `Seznam-Extended` má u něj `Disallow: /` — tedy skutečné odhlášení,
ne dekoraci.

Nejčastěji ošetřovaní cizí AI roboti (počet webů z 33):

| Robot | Webů |
|---|---|
| Bytespider | 13 |
| GPTBot | 11 |
| Amazonbot | 11 |
| ClaudeBot | 10 |
| Google-Extended | 9 |
| PerplexityBot | 8 |
| anthropic-ai | 6 |
| CCBot | 6 |
| Claude-Web | 5 |
| Applebot-Extended | 5 |

Vedlejší čísla: medián velikosti robots.txt 1 064 B, maximum 229 753 B, dva weby mají
robots.txt bez jediného řádku `User-agent`.

**Pointa:** skoro polovina měřených českých médií si dala práci s pravidly pro zahraniční
AI roboty — někdy pro víc než šest naráz — a **domácí páku, kterou Seznam sám dokumentuje,
má jeden web**.

## Nález 4 — čísla, která o programu uvádí Seznam (jen jako jeho tvrzení)

Na téže partnerské stránce Seznam uvádí o svých AI funkcích:

- mezi lety 2023 a 2025 se ve Vyhledávání a v Seznam Asistentovi „podařilo zdvojnásobit
  počet zpravodajských dotazů",
- „meziročně vzrostl počet hledání i prokliků o 85 %, přičemž míra prokliku (CTR) zůstává
  stabilní i při výrazně vyšším objemu dotazů".

Jsou to **čísla provozovatele o vlastní službě**, neověřená třetí stranou. V článku je použiju
výhradně s touhle atribucí.

Dál stránka zmiňuje technickou úpravu detekce zdroje návštěvy s termínem **1. 6. 2026** —
tedy termín, který už proběhl; to jen ukotvuje, že program běží.

## Limity

- Jeden odečet, 9. 8. 2026; dokumentace i robots.txt se mění.
- Vzorek 33 médií není náhodný výběr, je to ruční seznam známých českých zpravodajských
  a oborových webů.
- Měřím **konfiguraci v robots.txt, ne chování Seznamu**. Netestoval jsem, jestli a jak
  Seznam `Seznam-Extended` respektuje — to z veřejné strany ověřit neumím.
- Rozsah platnosti mimo program Seznam Partner dokumentace neuvádí (viz nález 1).
- Jména jednotlivých webů se v článku neuvádějí.

## Zdroje

- `https://partner.seznam.cz/napoveda/dalsi-sluzby/seznam-ai/` — věta o `Seznam-Extended`, čísla o programu
- `https://o-seznam.cz/napoveda/vyhledavani/en/crawling-control/` — dokumentace procházení, jmenuje jen SeznamBota
- vlastní měření: `seznam_extended_media.json` (33 médií), `seznambot_results.json` (47 e-shopů), `seznam_summary.json`
