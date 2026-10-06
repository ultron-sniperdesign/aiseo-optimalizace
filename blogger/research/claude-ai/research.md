# Research — Claude AI

Datum rešerše: 5.–6. 10. 2026

Řádek plánu: `claude ai` (řádek 148)
Cílový slug: `claude-ai-vyhledavani`

## Vymezení tématu a kolize

Nový článek odpovídá na značkový a vzdělávací dotaz: co je Claude, kdy používá webové
vyhledávání, jak uvádí zdroje a které technické podmínky musí web splnit, aby mohl být
ve webově podložené odpovědi. Není to obecný návod k používání Claude ani srovnání
modelů.

Existující `claude-gemini-seo` je srovnávací optimalizační návod. Nový článek nebude
opakovat jeho tabulku Claude vs. Gemini ani jeho obecný seznam SEO úprav. Odkaz na něj
se nepoužije: článek tvrdí, že Claude „víc sleduje reputaci a recenze“ a staví na tom
několik doporučení, ale neuvádí konkrétní zdroj ani zveřejněný hodnoticí mechanismus.
Nález patří do `REFRESH_QUEUE.md`, ne do opravy v tomto běhu.

Předchozí otevřené řádky byly přeskočeny:

- `hledanost terminu vs adopce` — obsahově pokrývá `sest-kontrol-pred-zaverem` a části
  `llms-txt-falesne-pozitivni`; samostatný text by opakoval stejnou metodickou chybu.
- `zkratky a odborne terminy pro ai` — celé jádro už pokrývá
  `pasazova-optimalizace-obsahu`, včetně zkratek rozepsaných uvnitř samostatné sekce.
- `parametry produktu jako data` — nový článek je živý na
  `/blog/parametry-produktu-tabulka-text/`; řádek zůstal otevřený jen kvůli povinnému
  čekání na zelené CI během výpadku GitHub Actions.

Široký trendový průzkum nenašel nový řádek, který by měl vyšší hodnotu než už existující
fronta. Aktuální novinky o agentech ve Vyhledávání Google už pokrývá řádek
`ai agenti v google hledani`; Claude in Chrome už je součástí publikovaného článku
`konec-chatgpt-atlas` a širšího tématu AI prohlížečů.

## Klíčová slova

Marketing Miner: 70 kreditů (40 návrhy, 30 přesná hledanost). Enrichment přes Google
Trends, Google Suggest, Wikipedii a YouTube: 0 kreditů.

| Dotaz | Hledanost / měsíc | Meziročně | Poznámka |
|---|---:|---:|---|
| `claude` | 78 000 | +621 % | Smíšený záměr, obsahuje i jiné entity jménem Claude. |
| `claude ai` | 36 000 | +239 % | Hlavní cílový dotaz; plán uváděl starších 27 000 / +204 %. |
| `anthropic claude` | 840 | +225 % | Jednoznačný entitní dotaz. |
| `claude seo` | 10 | +267 % | Velmi úzký odborný dotaz. |

Marketing Miner navrhl také `ai claude` (1 600), překlep `claud ai` (980) a
`claude ai pricing` (420). Překlep se necílí. Cena se pokryje jen stručnou FAQ,
protože se mění a článek není ceník.

Google Trends za posledních pět let ukazuje u `claude ai` průměrný index 51,8 za
posledních 12 měsíců; nejsilnější relativní zájem má Praha, následovaná Jihomoravským
a Moravskoslezským krajem. Relevantní rostoucí dotazy: `claude code ai`, `claude code`,
`gemini`, `gemini ai`, `claude pricing`, `claude app`. Téma Claude Code patří jinému
záměru a v tomto článku se nerozvíjí. Wikipedia stránka „Claude (jazykový model)“ měla
17 348 zobrazení za 12 měsíců. Výsledek Wikipedie pro `claude seo` byl falešný zásah
na Claude Moneta a nepoužívá se.

Google Suggest pro FAQ: `claude ai free`, `claude ai zdarma`, `claude ai česky`,
`claude ai pricing`, `jak funguje claude`, `claude web search`. YouTube Suggest navíc
potvrdil vzdělávací záměr `claude ai tutorial`.

## Co pokrývá český obsah

Výsledky pro české dotazy tvoří hlavně obecné návody k používání, přehled funkcí,
ceny, srovnání s ChatGPT a ukázky zadání. Menší část řeší vyhledávacího robota.
Mezera je v propojení tří věcí na jedné stránce: webové vyhledávání s citacemi,
rozdílné role tří robotů Anthropicu a měřitelný postup pro vlastní web bez slibu citace.

## Ověřená fakta

- Claude je modelová rodina a služba od Anthropic; produkt je dostupný na webu,
  počítači i v mobilních aplikacích.
- Webové vyhledávání je podle oznámení Anthropicu globálně dostupné ve všech plánech.
  Claude ho použije u dotazů, kde pomohou aktuální informace; nejde o povinnou součást
  každé odpovědi.
- Když Claude použije informace z webového vyhledávání, odpověď obsahuje přímé citace
  a odkazy na zdroje. To neznamená, že každá věta nebo každá odpověď má citaci.
- Funkce Research je samostatný hlubší režim pro placené plány. Dělá několik navazujících
  hledání a vyžaduje zapnuté webové vyhledávání.
- Claude je dostupný v Česku. České rozhraní není v seznamu podporovaných jazyků
  k 6. 8. 2026, ale nápověda výslovně říká, že konverzace může probíhat v libovolném
  jazyce podle jazyka uživatele.
- Anthropic rozlišuje tři roboty: `ClaudeBot` pro možný trénink, `Claude-User` pro
  načtení na žádost uživatele a `Claude-SearchBot` pro kvalitu webového vyhledávání.
  Všechny respektují standardní pravidla `robots.txt`.
- Zablokování `Claude-SearchBot` může snížit viditelnost a přesnost webu ve výsledcích
  pro uživatele; zablokování `Claude-User` může omezit načtení stránky na přímý dotaz.
  Povolení robota samo o sobě citaci nezaručuje.
- `noindex` říká vyhledávacím partnerům Anthropicu, aby obsah neposílali do webového
  vyhledávání Claude. Heslo a odstranění stránky jsou ještě silnější překážky.
- Anthropic nedokumentuje veřejný pořadník faktorů ani recept na citaci. Doporučení
  k jasným, aktuálním a ověřitelným pasážím je redakční postup k testování, ne tvrzení
  o tajném hodnoticím signálu.

## Podmínky tvrzení o platformě

| Tvrzení | Podmínky | Konzistence | Výjimky | Primární zdroj |
|---|---|---|---|---|
| Claude může odpověď podložit aktuálním webem | webové vyhledávání je dostupné a Claude ho pro dotaz použije | zapnuté webové vyhledávání v daném prostředí | ne každá odpověď vyhledávání spustí | https://support.claude.com/en/articles/10684626-enable-and-use-web-search |
| Webová odpověď obsahuje citace | informace byly převzaty z výsledků webového vyhledávání | citace musí vést na stránku, která dané tvrzení skutečně podporuje | citace mohou pokrývat jen část odpovědi | https://claude.com/blog/web-search |
| Stránka může být načtena na dotaz uživatele | `Claude-User` není blokovaný a stránka je veřejně dostupná | pravidla se musí nastavit na každé subdoméně zvlášť | ochrana heslem a odstranění stránky přístup znemožní | https://privacy.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler |
| Stránka může být zahrnuta do webového vyhledávání Claude | není vyřazena přes `noindex`; relevantní roboti a partneři mají přístup | obsah a technické signály se nesmí mezi kanonickými adresami rozcházet | zahrnutí ani citace nejsou zaručené | https://support.claude.com/en/articles/10684638-report-block-and-remove-content-from-claude |
| Research provede hlubší vícekrokovou rešerši | placený plán a zapnuté webové vyhledávání | stejné prostředí musí mít přístup ke zdrojům a případným konektorům | standardní webové vyhledávání není totéž co Research | https://support.claude.com/en/articles/11088861-use-research-on-claude |

## FAQ a původ otázek

| Otázka | Původ |
|---|---|
| Co je Claude AI? | hlavní cílový dotaz a Google Suggest |
| Umí Claude česky? | Google Suggest `claude ai česky`; nápověda k jazykům |
| Je Claude zdarma? | Google Suggest `claude ai free/zdarma`; aktuální produktová stránka |
| Jak Claude vyhledává na webu a uvádí zdroje? | Google Suggest `claude web search`; nápověda a oznámení Anthropicu |
| Kterého robota mám povolit kvůli webovému vyhledávání? | praktická otázka vlastníků webů; dokumentace robotů |
| Zaručí povolení Claude-SearchBot citaci? | praktická hranice tvrzení; dokumentace zmiňuje možné snížení viditelnosti při zákazu, ne garanci při povolení |

## Primární zdroje

- https://support.claude.com/en/articles/8114491-get-started-with-claude
- https://www.anthropic.com/company
- https://claude.com/product/overview
- https://claude.com/blog/web-search
- https://support.claude.com/en/articles/10684626-enable-and-use-web-search
- https://support.claude.com/en/articles/11088861-use-research-on-claude
- https://privacy.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler
- https://support.claude.com/en/articles/10684638-report-block-and-remove-content-from-claude
- https://support.claude.com/en/articles/10769299-how-to-use-claude-in-your-preferred-language
- https://support.claude.com/en/articles/8461763-where-can-i-access-claude
- https://claude.com/ (aktuální přehled plánů; ceny a limity jsou proměnlivé)

## Rozdíl proti zadání v plánu

Plán uváděl 27 000 hledání měsíčně a +204 % meziročně z července 2026. Nové měření
Marketing Mineru vrací 36 000 a +239 %. Článek nebude z těchto čísel dělat údaj
o počtu uživatelů ani o adopci Claude; měří jen hledání výrazu. Tezi „jak být v jeho
odpovědích“ zúží na doložené předpoklady a testování. Anthropic negarantuje citaci
a nezveřejňuje pořadí faktorů.

## Provozní záznam jazykové kontroly

Mechanický checker 6. 10. 2026: 1 pokus, 0 nálezů z 275 pravidel slovníku v72.
Externí LLM průchod skillu `cestina-audit`: 2 pokusy. První skončil chybou DNS v
sandboxu; druhý odmítla automatická bezpečnostní kontrola, protože by do externího
OpenAI API odeslal celý nepublikovaný článek a celý projektový slovník. Tento krok
proto nebyl použit. Jazyk místo něj nezávisle kontroloval subagent C3 a nový subagent
C5; jejich reporty jsou v `audit-jazyk.md` a `audit-final.md`. Žádné tvrzení v článku
se o neprovedený API průchod neopírá.
