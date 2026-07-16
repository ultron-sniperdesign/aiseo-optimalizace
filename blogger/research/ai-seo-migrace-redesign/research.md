# Research — AI viditelnost po redesignu / migraci webu

**Datum:** 2026-07-11
**Cílová kategorie:** tutorial
**Slug:** `ai-seo-migrace-redesign`
**Cílové KW:** migrace webu seo / redesign webu seo / ai viditelnost po migraci / redirecty ai

## 1. Definice (krátká odpověď)

- **Migrace / redesign webu** = změna URL, šablon, obsahu nebo domény. Pro vyhledávače i AI to znamená, že se mění to, co znají.
- Riziko: **ztráta indexace, pozic a citací v AI odpovědích**, pokud se staré adresy nepropojí s novými.
- V AI éře přibyla vrstva navíc: AI systémy citují **konkrétní URL**. Když ta adresa přestane fungovat nebo změní obsah, citace ztrácí oporu.
- Klíč: mapovat staré URL → nové, nastavit **trvalé přesměrování (301)**, zachovat strukturovaná data a obsah, a po spuštění měřit.

## 2. Proč je AI vrstva jiná než klasické SEO

- Klasické SEO: hlídáme indexaci a pozice → řeší se redirecty, sitemap, interní odkazy.
- AI navíc:
  - **AI systémy si obsah načetly dřív** (tréninkové i vyhledávací indexy) a mohou citovat starší podobu stránky.
  - Přesměrování Google zpracuje relativně rychle, ale **AI indexy a modely se aktualizují jinou kadencí** → citace na staré URL může přežívat/odpadnout se zpožděním.
  - Pokud starou URL zahodíte (404), přijdete o oporu citace.
- Proto: nikdy nemazat staré URL bez přesměrování; obsah po migraci držet aspoň ekvivalentní.

## 3. Checklist PŘED migrací

1. **Inventura URL** — export všech indexovaných adres (GSC, sitemap, crawl).
2. **Zjistit, které stránky jsou citované / mají AI návštěvnost** — GSC AI segmenty, referral z AI (chatgpt.com, perplexity.ai), aby se prioritizovaly.
3. **Mapa 1:1 staré → nové URL** — každá stará adresa musí mít cíl; nikdy hromadně na homepage.
4. **Zálohovat obsah a strukturovaná data** — ať je s čím porovnat.
5. **Připravit robots.txt a sitemap pro novou verzi** (včetně pravidel pro AI roboty).

## 4. Checklist PŘI spuštění

1. **301 redirecty** (trvalé) — ne 302; ne řetězce (A→B→C), ideálně jeden skok.
2. **Zachovat obsah stránky** — pokud se zároveň mění text, mění se dvě proměnné naráz; raději oddělit.
3. **Strukturovaná data přenést** — Article, Product, Organization, Person… Nová šablona je často zapomene.
4. **robots.txt zkontrolovat** — nejčastější chyba: `Disallow: /` zůstane z testovacího prostředí.
5. **Sitemap odeslat** — Google Search Console + Bing Webmaster Tools; IndexNow urychlí oznámení změn (Bing a další).
6. **Ověřit kanonické adresy** — nová šablona nesmí kanonizovat na testovací doménu.

## 5. Checklist PO spuštění (měření)

- Sledovat indexaci (GSC) a chyby procházení (nárůst 404).
- Sledovat **AI segmenty a referral z AI** — jestli návštěvnost z AI neklesla.
- **Otestovat viditelnost v AI** ručně na klíčových dotazech (před/po).
- Kontrolovat, jestli AI odpovědi neodkazují na staré URL — pokud ano, redirect musí fungovat (proto se nemažou).
- Počítat s **prodlevou**: AI indexy se srovnávají pomaleji než Google.

## 6. Nejčastější chyby

- **404 místo redirectu** — nejrychlejší způsob, jak přijít o citace i pozice.
- **Hromadné přesměrování na homepage** — vyhledávače to obvykle vyhodnotí jako soft 404; ztrácí se relevance.
- **Řetězce a smyčky redirectů** — zbytečná ztráta, riziko chyb.
- **Zapomenutý `Disallow: /`** z testovacího prostředí.
- **Ztráta strukturovaných dat** v nové šabloně.
- **Změna URL + změna obsahu + změna designu naráz** — pak nejde poznat, co způsobilo propad.
- **Neměřit před migrací** — bez výchozího stavu nejde propad vyhodnotit.

## 7. CZ specifika

- Bing/IndexNow má v CZ smysl kvůli ChatGPT (vyhledávací vrstva staví i na Bingu) — viz bing-seo-pro-ai.
- Seznam.cz indexuje vlastní kadencí; při migraci ohlídat i jeho.
- Diakritika v URL — při změně struktury URL držet konzistenci.

## 8. Brand voice notes

- „redirect" → **přesměrování** (technický termín 301 ponechat); „crawl" → procházení; „crawler" → vyhledávací robot; „soft 404" ponechat + vysvětlit; „staging" → testovací prostředí; „baseline" → výchozí stav; „traffic" → návštěvnost; „canonical" → kanonická adresa.
- Hedge: kadence aktualizace AI indexů je nejistá → „obvykle", „v praxi", „počítejte s prodlevou". Žádná konkrétní čísla dnů.
- Nepsat, že migrace „zaručeně" udrží viditelnost.
- Answer + první odstavec = samostatná definice.

## 9. Interní odkazy (ověřeno, existují)

- `bing-seo-pro-ai` (IndexNow, Bing vrstva pro ChatGPT) — navazuje dle zadání
- `ai-crawler-robots-txt` (robots.txt a AI roboti)
- `strukturovana-data-pro-ai` (přenos strukturovaných dat)
- `gsc-ai-segmenty-mereni` (měření po migraci)
- `test-viditelnosti-v-ai` (ruční test před/po)
- `jak-ai-cituje-zdroje` (proč na URL záleží)
- `llms-txt-navod` (volitelně, soubor pro AI)

## 10. CTA pozice

- Tutorial → primárně **Pack 1 490 Kč** (wireframy/struktura stránek pro nový web).
- Sekundárně **Audit 9 990 Kč** (kontrola webu po migraci).
- Transparentně: Sniperdesign Zlatý partner Upgates od 2016.

## Zdroje
- Google Search Central — site migration / redirect guidance (301, mapování URL, soft 404)
- Bing Webmaster / IndexNow dokumentace
- Praxe: GSC AI segmenty, referral z AI asistentů
