# Research — llms txt navod (slug: llms-txt-navod)

**Kategorie:** tutorial · **Rok:** 2026 · **Run:** #22 · **Datum:** 2026-06-09

## Cílové KW
- llms.txt (hlavní)
- llms.txt návod
- jak vytvořit llms.txt
- llms.txt formát
- llms.txt Google Claude Perplexity
- llms.txt validace

## Pozice v obsahu webu
- Odlišit od **`ai-crawler-robots-txt`** (přístup AI robotů přes robots.txt) — tady **dedikovaný explainer k llms.txt** (návrh nového souboru pro AI).
- Propojit s strukturovana-data-pro-ai (jiná vrstva strojové čitelnosti), seo-pro-ai (hub), ai-seo-audit (CTA).
- Kategorie tutorial → CTA Pack + Audit.

## Klíčová fakta (WebSearch 2026-06-09)
- **llms.txt** = navržený standard od Jeremy Howarda (2024). Markdown soubor v kořeni domény (`/llms.txt`), který linkuje na nejdůležitější obsah webu s krátkými popisy.
- **Není formálně standardizovaný** — community-managed spec; v Lighthouse jako quality check (Google merged 4/2026).
- **Adopce platforem k 6/2026**:
  - **Anthropic / Claude**: oficiálně podporuje od **ledna 2026**.
  - **Perplexity**: podpora od **mid-2025**; načítá llms.txt a používá pro prioritizaci stránek.
  - **OpenAI / ChatGPT**: oficiálně nepotvrzeno; v retrieval patterns pozorovatelné korelace.
  - **Google**: Gary Illyes (7/2025) — Google **nepodporuje a neplánuje**. John Mueller přirovnal k diskreditovanému keywords meta tagu.
- **Důležitý úhel pro článek (poctivý explainer):** llms.txt **není must-have**. Hodnota pro Claude a Perplexity prokazatelná, pro ChatGPT pozorovatelná, pro Google žádná. Pro většinu CZ webů je to **nice-to-have**, ne nutnost.

## Formát llms.txt (Jeremy Howard spec)
```
# Název webu
> Krátký popis, co web dělá.

## Klíčové stránky
- [Název](https://example.com/url): popis v jedné větě
- [Další stránka](https://example.com/url2): popis

## Dokumentace
- [Docs](https://example.com/docs): popis
```

Volitelně i `/llms-full.txt` s kompletním obsahem (větší soubor pro AI tréning).

## Kdy llms.txt nasadit
- **Dokumentace, knihovny, dev nástroje** — AI uživatelé hledají rychlé reference; dokumentace patří k nejcitovanějším AI zdrojům.
- **Komplexní weby s mnoha typy obsahu** (kategorie, příručky, ceník, blog) — llms.txt může pomoct AI nasměrovat na klíčové vstupy.
- **B2B SaaS** — pravděpodobnější kontakt s Claude/Perplexity v research fázi.

## Kdy llms.txt NEnasadit (nebo nespěchat)
- Malé prezentační weby (1 service page + 1 about) — žádný benefit.
- Když Google je váš primární kanál — Google ho ignoruje.
- Když nemáte čas ho udržovat — nevalidní/zastaralý llms.txt může víc škodit než pomoct.

## Validace
- Není centrální validátor jako pro JSON-LD; ale Lighthouse od 4/2026 zahrnuje llms.txt check.
- Komunitní nástroje (např. llmstxt.org).
- Manuální kontrola: dotaz v Claude/Perplexity, jestli najdou linkované stránky.

## FAQ kandidáti
- Co je llms.txt a kdo ho podporuje?
- Podporuje Google llms.txt?
- Kde llms.txt umístit?
- Jaký je rozdíl mezi llms.txt a robots.txt?
- Má llms.txt smysl pro malý web?
- Co je llms-full.txt?

## Interní odkazy (ověřit 200 před publikací)
- /blog/ai-crawler-robots-txt/ (robots.txt vs llms.txt) · /blog/strukturovana-data-pro-ai/ (jiná vrstva)
- /blog/seo-pro-ai/ (hub) · /blog/ai-seo-audit/ (CTA)

## CTA
- tutorial → AI SEO Wireframe Pack (1 490 Kč) + AI SEO audit (9 990 Kč)

## Zdroje
- presenc.ai (State of llms.txt 2026), limy.ai, ailabsaudit.com, codersera.com (komplet guides 2026)
- searchengineland.com (llms.txt proposed standard)
- Anthropic dokumentace (Claude llms.txt support 1/2026)
- Google Search Central (Gary Illyes, John Mueller — nepodpora 7/2025)
