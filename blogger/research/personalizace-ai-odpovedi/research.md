# Research — personalizace ai odpovedi

**Řádek plánu:** `personalizace ai odpovedi` · „Personalizované AI odpovědi — proč nikdo nevidí totéž a co to dělá s měřením" · kategorie `analysis` · run 1. 9. 2026
**Slug článku:** `personalizace-ai-odpovedi`

**Zadání z plánu:** Google na I/O 2026 rozšířil Personal Intelligence do zhruba 200 zemí a 98 jazyků. Když se odpověď liší člověk od člověka, co znamená test viditelnosti na jednom účtu?

## Hlavní zjištění: dva zdroje Googlu, dva různé rozsahy

Řádek přebíral číslo z oznámení. Nápověda ale říká něco jiného — a rozdíl je pro české čtenáře zásadní.

| Zdroj | Doslovné znění | Datum |
|---|---|---|
| Oznámení, blog.google (*100 things we announced at Google I/O 2026*) | „We're expanding Personal Intelligence in AI Mode to more people in nearly 200 countries and territories across 98 languages — no subscription required." | 19. 5. 2026 |
| Nápověda Vyhledávání, CS (`support.google.com/websearch/answer/17212611`) | „**Tato funkce je dostupná v USA, v angličtině.**" | ověřeno 1. 9. 2026 |
| Nápověda Vyhledávání, EN, tatáž stránka | „This experience is available in the US, in English." | ověřeno 1. 9. 2026 |

**Jak to číst, aniž bych jeden zdroj vydával za lež:** omezení na USA a angličtinu stojí u **paměti v Režimu AI** — u schopnosti zapamatovat si detaily, které jí uživatel sám sdělí („Personalizovanější prostředí s pamětí v režimu AI"). Oznámení mluví o Personal Intelligence šířeji, včetně připojování Gmailu a Fotek. Do článku patří obě věty s uvedením zdroje a data, ne jedno číslo.

## Další ověřená fakta

| Fakt | Doslovné znění | Zdroj | Ověřeno |
|---|---|---|---|
| Český název funkce | **Osobní inteligence** (v režimu AI) | nápověda CS | 1. 9. 2026 |
| Z čeho čerpá | „Osobní inteligence v režimu AI využívá předchozí vyhledávání a aktivitu uloženou v historii vyhledávacích služeb, aby vám mohla nabízet návrhy přizpůsobené vašemu vkusu a preferencím." | nápověda CS | 1. 9. 2026 |
| Podmínky | „Personalizace v režimu AI je k dispozici uživatelům starším 18 let, kteří mají zapnutou historii a personalizovaná doporučení." | nápověda CS | 1. 9. 2026 |
| Jde vypnout | „You can opt in or out of personalization at any time." | nápověda EN | 1. 9. 2026 |
| Uživatel řídí paměť | „You can instruct AI Mode to remember or forget specific details to get more helpful responses." | nápověda EN | 1. 9. 2026 |
| Google přiznává chybovost | „AI Mode might not always get personalization right." | nápověda EN | 1. 9. 2026 |
| Připojitelné aplikace | „you can securely connect apps like Gmail and Google Photos, and soon Google Calendar" | oznámení I/O 2026 | 1. 9. 2026 |

## Kolize s korpusem

| Článek | Co pokrývá | Jak se odliším |
|---|---|---|
| `volatilita-ai-odpovedi` | rozdíly mezi **opakováními** téhož dotazu (SE Ranking) | já řeším rozdíly mezi **lidmi**; obojí postavím vedle sebe jako dvě různé osy |
| `propojene-aplikace-v-ai-mode` | souhlas s připojením Gmailu a Fotek, co z nich Google bere | vstupní strana; já beru důsledek pro měření |
| `co-ai-seo-nezvladne` | personalizace jako jedna ze šesti hranic (jeden odstavec) | rozvedení té jedné hranice, ne opakování seznamu |
| `jak-overit-dostupnost-ai-funkce` | metoda: oznámení vs. nápověda | používám ji jako nástroj, nepopisuju ji znovu |
| `test-viditelnosti-v-ai`, `mereni-ai-mode-limity` | jak testovat a limity měření | doplňuji jednu proměnnou navíc: účet, na kterém se testuje |
| `share-of-model-metrika` | metrika podílu v odpovědích | zmíním jen jako důsledek |

## Struktura článku

1. Krátká odpověď: co personalizace je a v jakém rozsahu je doložená.
2. Co říká oznámení a co nápověda — obě věty vedle sebe.
3. Co z toho platí pro Česko.
4. Dvě různé osy proměnlivosti: mezi běhy vs. mezi lidmi.
5. Co to dělá s testem viditelnosti (účet jako proměnná).
6. Jak testovat, aby výsledek něco znamenal.
7. Co z toho neplyne.

## Limity, které si hlídám

- **Netvrdit, že v Česku personalizace neexistuje.** Doložené je jen to, že omezení USA/angličtina stojí u paměti v Režimu AI; historii a personalizovaná doporučení má Google i jinde.
- **Nevydávat rozpor za chybu Googlu.** Popsat obě věty a nechat čtenáře rozhodnout, čemu se řídit (nápověda rozhoduje, jak píše vlastní článek o ověřování).
- **Žádná čísla o tom, jak moc se odpovědi mezi lidmi liší** — nikdo je nezveřejnil, vlastní měření nemám.
- **Nepřepisovat volatilitu**; jen kontrast.
