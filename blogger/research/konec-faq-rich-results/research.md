# Research — Konec FAQ rich results v Googlu

**Datum:** 2026-07-11
**Cílová kategorie:** analysis
**Slug:** `konec-faq-rich-results`
**Cílové KW:** konec faq rich results / faqpage 2026 / faq strukturovaná data / faq schema zrušeno

## 1. Co se stalo (fakta, ověřeno)

- **7. 5. 2026:** Google přidal deprecation notice na vývojářskou dokumentaci FAQ structured data. **FAQ rich results přestaly zobrazovat ve výsledcích Vyhledávání Google.** (Search Engine Journal, Google Search Central)
- Rozklikávací FAQ pod výsledkem (rozšířený výsledek) tím zmizel — SERP prvek skončil.

## 2. Časová osa (3 fáze)

| Datum | Co skončí | Stav k dnešku (11. 7. 2026) |
|---|---|---|
| **7. 5. 2026** | FAQ rich results ve Vyhledávání | ✅ hotovo (minulost) |
| **červen 2026** | Search Console FAQ report + Rich Results Test pro FAQ | ✅ hotovo (minulost) |
| **srpen 2026** | Podpora v Search Console API | ⏳ chystá se (BUDOUCNOST — nesmím psát jako hotové) |

## 3. KLÍČOVÝ nuance: markup NEumřel, jen zobrazení

- **FAQPage je pořád validní Schema.org typ.** Markup může na stránkách zůstat bez problémů.
- **Google potvrdil, že FAQ markup dál PARSUJE**, aby porozuměl stránce.
- **AI systémy FAQPage dál čtou:** Bingbot, PerplexityBot a RAG roboti indexující web ho parsují dál.
- Google: nevyužitá strukturovaná data neškodí Vyhledávání.
- Shrnutí: **zmizel zobrazovací prvek (rich result), ne markup ani jeho hodnota pro porozumění a AI.**

## 4. „Schema nikdy nedělala tu práci — dělal ji obsah"

- Klíčová teze: rich result byl jen zobrazení. Hodnotu vždy nesl obsah — jasné otázky a odpovědi.
- FAQ sekce, která reálně odpovídá na dotazy uživatelů, má hodnotu dál: pro uživatele, pro AI extrakci, pro strukturu.
- Krátké otázky s krátkými odpověďmi = formát, který AI dobře extrahuje (napojení na „krátká odpověď").

## 5. Co s tím prakticky (rozhodovací rámec)

### Nechat FAQPage markup, když:
- Markup přesně popisuje **viditelné** otázky a odpovědi na stránce.
- FAQ sekce reálně pomáhá uživateli (ne jen kvůli SERP prvku).
- Chceš, aby AI systémy (Perplexity, Copilot) měly čistě strukturovaný Q&A.

### Zvážit odstranění, když:
- Markup odkazuje na obsah, který už na stránce není (nesoulad = riziko).
- FAQ sekce byla tenká/naspamovaná jen kvůli rich resultu (přidaná uměle).
- Q&A na stránce reálně nedává smysl pro uživatele.

### Co NEdělat:
- Nepanikařit a nemazat plošně všechna FAQ.
- Nenechávat markup nesouladný s viditelným obsahem.

## 6. Širší kontext: strukturovaná data v éře AI

- Google oficiálně: pro AI Overviews/AI Mode **není potřeba žádná speciální strukturovaná data** ani llms.txt.
- Ale: strukturovaná data pomáhají Googlu i AI porozumět stránce, když **přesně popisují viditelný obsah.**
- 4 typy s nejjasnějším dopadem na citovatelnost v AI: **Article, FAQPage, HowTo, Organization.**
- JSON-LD je doporučený formát (samostatný skript, nezasahuje HTML, snadno parsovatelný).
- Pozn.: FAQPage a HowTo přišly o rich results (HowTo dřív, 2023; FAQ 2026), ale zůstávají užitečné pro porozumění a AI. → napojení na nové řádky konec-howto-rich-results a json-ld-vs-microdata.

## 7. Co to znamená pro majitele webů (závěr)

- Kdo měl FAQ jen kvůli hezčímu výsledku v Googlu → ten prvek je pryč, nevrátí se.
- Kdo má FAQ, které reálně odpovídá → nechat, dál slouží uživatelům i AI.
- Priorita se posouvá od „SERP dekorace" k „jasná struktura a citovatelnost v AI".
- Konzistence markup ↔ viditelný obsah je důležitější než kdy dřív.

## 8. CZ specifika

- Change je globální, platí i pro české weby a české FAQ.
- Hodně českých webů má FAQPage kvůli rich resultu — teď je čas ověřit, jestli FAQ reálně pomáhá, nebo byl jen ozdoba.
- Pro CZ: FAQ dál pomáhá u AI Overviews v češtině a u Seznam Asistenta (jasná Q&A struktura).

## 9. Brand voice notes

- „schema markup" → „strukturovaná data" / „markup" ponechat jen jako technický pojem, vysvětlit
- „rich results / rich snippety" → „rozšířené výsledky (rich results)" — vysvětlit česky
- „deprecation" → „ukončení / vyřazení"
- „SERP" → „výsledky vyhledávání"
- „crawler/bot" → „vyhledávací robot / AI robot"
- „RAG" → „systémy, které skládají odpověď z dohledaných zdrojů"
- „parsovat" → „číst / zpracovávat"
- Datum srpen 2026 = BUDOUCNOST → „má skončit / se chystá", ne „skončilo"
- Hedge: „podle Googlu / podle veřejné dokumentace Google Search Central"

## 10. Interní odkazy (ověřeno, existují)

- `strukturovana-data-pro-ai` (co jsou strukturovaná data, které typy)
- `jak-ai-cituje-zdroje` (jak AI extrahuje Q&A)
- `aeo-geo-je-porad-seo` (Google: AI = pořád SEO, žádná speciální data)
- `gsc-ai-segmenty-mereni` (GSC měření, souvislost s odebranými reporty)
- `perplexity-seo`, `chatgpt-seo` (AI systémy čtou FAQPage)
- `produktove-stranky-pro-ai` (FAQ na produktu — kontext e-shopy)

## 11. CTA pozice

- Analysis → primárně **Audit 9 990 Kč** (revize strukturovaných dat: co nechat, co upravit, konzistence s obsahem).
- Sekundárně **Pack 1 490 Kč** (wireframy se správnou Q&A strukturou).
- Transparentně: Sniperdesign Zlatý partner Upgates od 2016.

## Zdroje
- Search Engine Journal — Google Drops FAQ Rich Results From Search
- Google Search Central — FAQPage structured data (deprecation notice, 7. 5. 2026)
- The HOTH, Passionfruit, Alev Digital (kontext, časová osa, doporučení)
- Ahrefs Feb 2026 (38 % citovaných stránek mimo top 10 — kontext strukturovaných dat)
