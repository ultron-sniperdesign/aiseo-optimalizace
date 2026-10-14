# Vypořádání refreshe — `seznam-cz-ai-vyhledavani` (14. 10. 2026)

Pravidlo Z18. Každá oprava dohledaná v celém souboru včetně frontmatteru (Z17) — grep na
`s modely OpenAI|ukáže, kolik|mohou pokračovat|jediná doložená|některý z AI tokenů|od května 2026|Registrace je zdarma|deset procentních|\bdnes\b|asistent\.seznam\.cz`.

## Rozsah refreshe

Přepsáno podle 15 vad z `research-refresh-2026-10-14.md`: nepravdivé CTA o Packu pryč (CTA vede jen na audit
a jeho popis odpovídá `audit.ts`), Heureka mimo Seznam, „Seznam Search Console“ → Seznam Webmaster, zdroje
a dostupnost Seznam AI podle nápovědy proti tiskové zprávě (tabulka rozporů), modely podle nápovědy
(SeLLMa + OpenAI přes Azure), nedoložená čísla pryč (SeLLMa 70B / Llama 3.1 / 100 mil. Kč, Sklik 25 %
PPC, CPC −20–40 %, 55–64 let, 70:30, investice Googlu), podíl podle StatCounteru 9/2026 s metodou,
nově reklama a nabídky Seznam Nákupů v Seznam AI, souhrny ve vyhledávání, limity, odhlášení přes tři tokeny
a `nosnippet`, strukturovaná data jen pro výsledky Vyhledávání. `CompareTable` a `DoDont` s nedoloženými
tvrzeními nahrazené tabulkou rozporů a rozhodováním podle vlastních dat; `MistakeGrid` teď nese skutečné
chyby, ne výčet „kdy ne“. Odkazy na články ve frontě (`seznam-asistent-sellma`) a na pilíř vypuštěné.
**Titulek beze změny** (kontrolní skupina měření titulků do 2. 11. 2026), obrázek se nepřegenerovává.

## Kolo 1 — osa faktů (gpt-5.5, `audit1-refresh-2026-10-14.md`)

Verdikt: OPRAVIT PŘED PUBLIKACÍ — 5× BLOCKER, 5× WARNING, 2× TIP (oba TIP potvrzují, že Heureka
a StatCounter jsou podané správně).

### Zapracováno

| Nález | Úroveň | Co se změnilo |
|---|---|---|
| Modely bez „přes Microsoft Azure“ | BLOCKER | doplněno v `answer` a úvodu (FAQ 2 a odrážka v těle to měly) — 4 výskyty |
| „Nástroj Seznamu ukáže…“ zní jako ověřené rozhraní | BLOCKER | „Podle nápovědy nástroj ukazuje… a web se v něm ověřuje meta značkou nebo souborem“ |
| „jediná doložená cesta“ přehlíží inzeráty Skliku | BLOCKER | „doložená cesta, jak dostat produktové nabídky do Seznam AI. Vedle nich tam mohou být inzeráty Skliku…“ |
| Chyba 03 radí jen AI tokeny, chybí `nosnippet` | BLOCKER | fix „AI tokeny nebo nosnippet“, text doplněn, že `nosnippet` vypne i úryvky |
| „liší o víc než deset procentních bodů“ bez opory v textu | WARNING | „liší podle toho, co který zdroj měří“ + odkaz na metodu |
| volné „dnes“ | WARNING | „k 14. 10. 2026“ (název, zdroje), „Co z toho může firma ovlivnit“, závěr bez „dnes“ |
| asistent.seznam.cz bez opory | WARNING | zpřesněno na **titulek stránky** asistent.seznam.cz (ověřeno 14. 10.: „Seznam AI“, čtena jen povolená úvodní stránka) s datem |
| „od května 2026“ u Nákupů bez zdroje v briefu | WARNING | doplněn odkaz na blog Seznamu z 25. 6. 2026 („od května letošního roku“, ověřeno 11. 10.) |
| „Registrace zdarma, zobrazení za kredit“ bez zdroje v briefu | WARNING | „podle nápovědy Skliku“ + odkaz na *Registrace provozovny* |

### Nezapracováno + důvod

| Nález | Proč ne |
|---|---|
| „Přihlášení uživatelé z nich mohou pokračovat do Seznam AI“ — tvrzení o rozhraní bez opory (BLOCKER) | Opora je v nápovědě doslova, jen nebyla v briefu: *Vychytávky* u všech tří prvků „Jste-li přihlášeni, můžete z tohoto místa pokračovat v konverzaci v Seznam AI“ (3×, ověřeno 14. 10.). Věta zůstává, nově s atribucí „Podle nápovědy…“; řádek doplněn do hlavičky Z16. |

## Kolo 2 — osa jazyka a struktury (gpt-5.5, `audit2-refresh-2026-10-14.md`)

Verdikt: OPRAVIT PŘED PUBLIKACÍ, **bez faktického blockeru** — 3× WARNING, 3× TIP. Vypořádání kola 1 auditor
potvrdil včetně nezapracovaného nálezu o pokračování do Seznam AI. Všechno přijato.

| Nález | Úroveň | Co se změnilo |
|---|---|---|
| FAQ 3 bez slovesa | WARNING | „Podle nápovědy Seznam AI **odpovídá** z webového a zpravodajského indexu…“ |
| FAQ 5 začíná neurčitým „Základ je stejný“ | WARNING | „Základ optimalizace pro Seznam i Google je stejný: web má být dostupný robotovi…“ |
| Dlouhá buňka v tabulce rozporů | WARNING | buňka „Vyhledávání, zprávy a další služby Seznamu“, výčet do věty pod tabulkou |
| „homepage“ | TIP | „domovská stránka Seznamu“ (obě buňky) |
| „feed“ bez upřesnění | TIP | „produktový feed“ v FAQ 6, odrážce o Nákupech a v titulku kroku |
| „kanálech, které je prokazatelně přinášejí“ — nejasné „je“ | TIP | „…které prokazatelně přinášejí návštěvy a konverze“ |

## C5b — doověření zásadních nálezů (gpt-5.5)

- **1. kolo (`c5b-refresh-2026-10-14.md`):** nálezy 1 (Azure), 3 (pokračování do Seznam AI) a 5 (`nosnippet`)
  **OBSTOJÍ**; 2 (Seznam Webmaster) a 4 (e-shop) **NEOBSTOJÍ** — „ukazuje“ pořád znělo jako rozhraní a chyběla
  doložená vazba feed Zboží.cz → Seznam Nákupy.
- **Oprava:** „Nápověda ho popisuje jako nástroj, který ukazuje…“; e-shop: „Nabídky Seznam Nákupů vznikají podle
  nápovědy Skliku z XML feedu ve formátu Zboží.cz a nápověda Seznam AI uvádí, že se v Seznam AI zobrazují“ + odkaz
  na *Specifikace feedu* do řádku zdrojů; odrážka o Nákupech doplněna „ve formátu Zboží.cz“.
- **2. kolo (`c5b2-refresh-2026-10-14.md`, jediné povolené navíc): oba OBSTOJÍ.** Nový zásadní nález po C5 žádný.

## Jazykový průchod (C6)

| Průchod | Výsledek |
|---|---|
| Mechanický checker (slovník v73) | **0 nálezů** ve všech verzích |
| Kontrola komponent (Z13) | **0 nálezů**, 10 použití komponent |
| LLM průchod (gpt-5.4, celý slovník) | **6 nálezů, všech 6 přijato** |

Opraveno (každé dohledáno v celém souboru): „bere podklady“ → „čerpá“ (úvod i H2) · „jmenovala“ → „uváděla“ (2×) ·
„ukazuje všechny podklady“ → „všechny zdroje“ / „uvádí všechno, co měl model k dispozici“ (2×) · „pokračovat do
Seznam AI“ → „přejít do Seznam AI“ · obrácený slovosled „Že odpověď inzerce neovlivňuje, tvrdí Seznam“ → „Seznam
tvrdí, že inzerce odpověď neovlivňuje“ · „tokeny“ → „pravidla“ / „user-agenty pro AI“ (3×, včetně opravy chyby 03,
která prošla C5b — jde o stylistickou náhradu bez změny obsahu). **Nová pravidla do slovníku žádná.**
