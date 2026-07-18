# Research — Produktový feed a GTIN

**Slug:** `produktovy-feed-gtin`
**Kategorie:** tutorial (howto → 5/5) · **Tagy:** eshopy + technicke-zaklady
**Řádek plánu:** `produktovy feed gtin ai agenti` (ř. 124)
**Datum:** 2026-07-18
**⚠️ DÍL 10 SÉRIE „AI SEO pro e-shopy"** → po publikaci přidat slug do `parts` v `src/i18n/series.ts`.

---

## ✅ OVĚŘENO (Google Merchant Center — GTIN, fetch 2026-07-18)

- GTIN je „a unique and internationally recognized identifier for a product".
- **„not all products have a GTIN"** — nemá ho každý produkt (vlastní výroba, sady, zakázka).
- „Submit GTINs in your product data using the GTIN `[gtin]` attribute to help us classify
  and display your products." → účel: klasifikace a zobrazení produktu.
- Doporučuje ověřovat legitimitu GTINů z cizích zdrojů; když ho nenajdete na obalu, kontaktovat výrobce.

## ⚠️ CO SE NEPOTVRDILO — NETVRDIT
Fetch Merchant Center **nepotvrdil**:
- že je GTIN povinný / jaké jsou důsledky chybějícího nebo špatného GTINu,
- konkrétní pravidla párování produktů napříč prodejci,
- explicitní pravidlo „cena a dostupnost ve feedu musí odpovídat cílové stránce".

→ Tyhle věci **neuvádět jako doložené pravidlo Googlu.** Poučení z runů #48/#50.

## ✅ CO K KONZISTENCI DOLOŽIT LZE
- Shopping ads policies (fetch 2026-07-18): zakázané je zkreslování —
  „Promotions that represent you or your products in a way that is not accurate, realistic, and truthful".
- Google Search Central (AI features, ověřeno dříve): **strukturovaná data musí odpovídat viditelnému textu.**
- Mechanismus (jde tvrdit, plyne z povahy věci): když feed říká jinou cenu než stránka,
  má systém dva rozporné vstupy a nemá jak rozhodnout, který platí.

→ Formulace: ne „Google vyžaduje shodu feedu se stránkou", ale
„zkreslování je zakázané, strukturovaná data mají odpovídat viditelnému textu a rozpor mezi zdroji
prakticky znamená, že si systém vybere — a vy nevíte co."

---

## Jádro článku

**Identifikátor je to, co spojí váš záznam s produktem.** Bez něj je „Leštěnka 500 ml" jen řetězec;
s GTINem je to konkrétní položka, kterou lze spárovat napříč zdroji. To je smysl unikátního
identifikátoru — definiční, netřeba to nikomu připisovat.

Tři vrstvy, které si musí odpovídat:
1. **Stránka** — co vidí zákazník
2. **Feed** — co posíláte do srovnávačů a Merchant Center
3. **Strukturovaná data** — co je na stránce strojově čitelné

Rozpor kdekoli mezi nimi = nespolehlivý údaj.

## Postup (→ howto 5 kroků)

1. **Zjistěte, které produkty GTIN mají** — je na obalu u čárového kódu; ne každý produkt ho má.
   U vlastní výroby nebo sad ho nevymýšlejte.
2. **Doplňte identifikátory do feedu** — `gtin` atribut; u produktů bez GTINu použít značku a
   katalogové číslo výrobce.
3. **Sjednoťte klíčové údaje napříč vrstvami** — cena, dostupnost, název, parametry musí říkat totéž
   na stránce, ve feedu i ve strukturovaných datech.
4. **Ověřte GTINy z cizích zdrojů** — Google doporučuje legitimitu ověřit; při pochybnosti se ptát výrobce.
5. **Kontrolujte pravidelně** — feed se generuje automaticky, stránka se mění ručně; rozejít se to
   dokáže samo.

## České specifikum (opatrně!)
Zboží.cz a Heureka mají vlastní formáty feedů. **NEUVÁDĚT konkrétní technické požadavky** —
neověřeno u primárního zdroje. Stačí obecně: v Česku e-shop typicky udržuje víc feedů naráz
a rozpory mezi nimi mají stejný důsledek jako rozpor se stránkou.

## Chyby (→ MistakeGrid 4×)
1. **Vymyšlený nebo cizí GTIN** — Google doporučuje ověřovat legitimitu; nesprávný identifikátor
   spáruje váš produkt s něčím jiným.
2. **Feed a stránka se rozcházejí** — dva rozporné vstupy; navíc zkreslování je v pravidlech zakázané.
3. **Strukturovaná data mimo viditelný obsah** — proti požadavku na shodu s viditelným textem.
4. **Feed nastavený jednou a zapomenutý** — ceny a dostupnost se mění; kontrola musí být pravidelná.

## Hranice
- **Neuvádí konkrétní požadavky Zboží.cz ani Heureky** — mají vlastní dokumentaci.
- **Neslibuje zobrazení ani doporučení agentem.**
- **Neřeší nastavení Merchant Center krok za krokem** — je to o datech, ne o rozhraní.

## Brand voice
- Zlatý partner Upgates → e-commerce publikum, ale bez vytahování.
- Anglicismy → česky: „feed" ponechat (zavedené v e-commerce, vysvětlit jako **datový soubor s produkty**),
  „matching" → **spárování**, „attribute" → **atribut/pole**. Povolené: GTIN, EAN, Merchant Center, JSON-LD.
- answer 40–60 slov, začíná definicí.

## Interní odkazy (ověřeno)
`/blog/ai-nakupni-agenti/` · `/blog/strukturovana-data-pro-ai/` · `/blog/produktove-stranky-pro-ai/` ·
`/blog/ceny-na-webu-a-ai/` · `/blog/ai-seo-upgates-shoptet/` · `/blog/ai-mode-a-eshopy/` ·
`/blog/recenze-a-hodnoceni-pro-ai/` (9. díl, publikován týmž runem)

## CTA
Audit 9 990 + Pack 1 490. Bez slibu zobrazení.
