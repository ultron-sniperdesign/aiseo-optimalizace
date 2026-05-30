# Research — ai navstevnost konverze (slug: ai-navstevnost-konverze)

**Kategorie:** analysis · **Rok:** 2026 · **Run:** #18 · **Datum:** 2026-05-30

## Cílové KW
- ai návštěvnost konverze (hlavní)
- ai referral traffic
- ai návštěvnost ga4
- chatgpt perplexity konverze
- měření ai návštěv

## Pozice v obsahu webu
- Doplňuje zero-click-ai (zero-click + AIO) o **pohled „co naopak funguje"** — AI návštěvy, které dorazí, konvertují líp.
- Propojit s mereni-seo-vykonu-2026 (měření), ai-seo-nastroje (nástroje), platformovými články (chatgpt-seo, perplexity-seo, claude-gemini-seo).
- Kategorie analysis → CTA primárně Audit.

## Klíčová fakta (WebSearch 2026-05-30, % hedovat jako "podle dostupných analýz")
- AI návštěvníci konvertují **výrazně líp** než klasický organik. Analýzy uvádějí rozsah ~4–17 % konverzí (Claude ~16.8, ChatGPT ~14–16, Perplexity ~10, Gemini ~3) vs organik baseline ~1.76–2.8 %. Hedovat — různé studie, různé obory.
- Podíl ChatGPT na AI referralu klesá: ChatGPT ~62 % AI referralu (B2B Mar–Apr 2026), Claude 18.5 %, Gemini 10.6 %, Perplexity 7.3 %.
- Perplexity skews B2B / technical professional → SaaS brands mohou mít vyšší podíl.
- **KRITICKÉ omezení měření**: až ~70 % AI návštěv dorazí **bez referrer hlavičky** → spadne do přímé návštěvnosti (direct) → neviditelné v standardní GA4 atribuci.
- **GA4 update 13. 5. 2026**: Google přidal nativní **„AI Assistant" channel** do Default Channel Group GA4 — automaticky pro všechny properties.

## Praktické kroky měření (jádro how-to)
1. **Ověřit AI Assistant channel v GA4** — od 5/2026 automatický; zkontrolovat report.
2. **Doplnit UTM značky** v odkazech, které si dáváte do veřejných míst, kde si pro vás může AI vzít (homepage, dokumenty, návody). UTM přežijí AI handover lépe než přirozený referrer.
3. **Vytvořit segment / custom report** pro AI návštěvy (kombinace AI Assistant channel + ručních UTM + referrer obsahující ai/chat/perplexity/claude domény).
4. **Sledovat konverzní hodnotu, ne objem** — AI traffic je malý, ale kvalifikovaný; měřit dle konverzí, ne návštěv.

## Brand-safe nuance (důležité ošetřit)
- Konverzní % se mezi studiemi výrazně liší, závisí na oboru, definici konverze, vzorku — uvádět jako rozsah / "podle dostupných analýz", ne tvrdý fakt.
- AI Assistant channel je nový — funguje automaticky, ale ne každý web už má významný objem AI návštěv k vyhodnocení.
- Není to "zázračný kanál" — i s vyšší konverzí může být absolutní objem malý.

## FAQ kandidáti
- Konvertují AI návštěvníci opravdu líp než organické?
- Proč AI návštěvy chodí jako přímá návštěvnost (direct)?
- Co je AI Assistant channel v GA4 a jak ho najít?
- Jak doplnit měření AI návštěv, když AI Assistant channel nestačí?
- Mám prioritizovat objem AI návštěv, nebo jejich konverzi?
- Jdou v GA4 rozlišit kliky z ChatGPT, Perplexity, Claude a Gemini?

## Interní odkazy (ověřit 200 před publikací)
- /blog/zero-click-ai/ (druhá strana mince — co naopak nedoráží) · /blog/mereni-seo-vykonu-2026/ (měření)
- /blog/ai-seo-nastroje/ (AI viditelnost trackery) · /blog/chatgpt-seo/ · /blog/perplexity-seo/ · /blog/claude-gemini-seo/ (platformy)
- /blog/seo-pro-ai/ (hub) · /blog/ai-seo-audit/ (CTA)

## CTA
- analysis → primárně AI SEO audit (9 990 Kč) + sekundárně AI SEO Wireframe Pack (1 490 Kč)

## Zdroje
- asklantern.com (ChatGPT 87% referralu), nadiamohamed.me (GA4 setup), thedigitalbloom.com (AI traffic share Feb 2026)
- emarketed.com (4.4× konverze), foundrycro.com (tracking), hikmahaiagency.com (GA4 step-by-step), higoodie.com (AI Search Traffic Report 2026)
- enterprisedna.co (AI Assistant channel GA4 5/2026)
