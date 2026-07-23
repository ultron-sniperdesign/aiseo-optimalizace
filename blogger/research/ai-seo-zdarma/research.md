# Research — AI SEO zdarma

**Slug:** `ai-seo-zdarma`
**Kategorie:** tutorial (howto → 5/5) · **Tagy:** strategie + audit-nastroje
**Řádek plánu:** `ai seo zdarma`
**Datum:** 2026-07-23

---

## ⚠️ ETICKÝ RÁM (nejdůležitější, protože prodáváme audit za 9 990 Kč)

Toto je článek „co uděláte zdarma" napsaný firmou, která prodává placenou službu.
Konflikt zájmů je maximální. Poslední tři runy audit opakovaně chytil **stejný
manévr: nejistota nebo strop nástroje použité jako skrytý prodej.** Tady na to musím
dopředu:

- **Bezplatná část musí být SKUTEČNĚ kompletní a použitelná** — ne návnada.
- **Strop bezplatné práce popsat jako fakt o nástrojích, ne jako důvod nás najmout.**
  „Backlink data nejsou zdarma" je fakt. „Proto potřebujete agenturu" je prodej.
- **Žádné CTA na /audit/ jako závěr.** Nanejvýš odkaz „až přeroste kapacitu",
  a to až za samostatným článkem o měření/svépomoci, ne rovnou na prodej.
- Článek smí klidně skončit tím, že **většina malých webů si vystačí zdarma.**
  To je pravda a je to důvěryhodné.

---

## Kolizní kontrola (2026-07-23)

„Co zvládnete zdarma" je na webu **roztroušené jako jednořádkové zmínky**, ale
**dedikovaný playbook chybí** → klasický hub-and-spoke: tyhle články na „zdarma"
odkazují jednou větou, tenhle to má rozvést.

| Kde se „zdarma" objevuje | Co s tím | Hranice |
|---|---|---|
| `ai-seo-nastroje` H3 „1. Zdarma a ručně" | jeden odstavec o ručním testu | **nástroje** — odkázat, nerozvádět |
| `kolik-stoji-ai-seo` stat „lze začít bez placených nástrojů" | jednořádkový label | **ceny placené práce** |
| `test-viditelnosti-v-ai` | celý postup ručního testu | **test viditelnosti** = jeden z bezplatných kroků, odkázat |
| `seo-audit-co-kontrolovat` FAQ | free vs placené audit nástroje | audit svépomocí |
| `ai-seo-agentura-sluzby` FAQ „část zvládnete sami" | jedna věta | výběr dodavatele |
| `chatgpt-seo`, `perplexity-seo`, `ai-seo-content` staty | „bez placených nástrojů" | platformové návody |

→ **Žádný článek nemá „AI SEO zdarma" jako téma.** Tenhle je hub, na který ostatní
ukazují. Uvnitř hlavně **odkazovat, ne opakovat** jednotlivé postupy.

## ✅ OVĚŘENÉ BEZPLATNÉ NÁSTROJE A KROKY (2026-07-23)

### Google Search Console — zdarma, oficiální data
- **NOVÝ report „Funkce s generativní AI"** (Google spustil 3. 6. 2026):
  ukazuje **jen zobrazení** (impressions) v AI Overviews a AI Mode, rozpad podle
  stránky/země/zařízení/data. **Žádné kliky, CTR ani dotazy.** Rollout omezený
  (nejdřív UK, rozšíření 23. 6. 2026), globální termín neoznámen → **ve svém účtu
  ho zatím nemusíte vidět.** (Zdroj: Google Search Central blog 6/2026, Search Engine Land.)
- Klasický výkonnostní report (dotazy, kliky, pozice) = zdarma vždy.

### Ruční test viditelnosti — zdarma
- Projít sadu zákaznických dotazů v ChatGPT / Perplexity / Google AI, sledovat,
  jestli a jak se značka objevuje. Detailně: `test-viditelnosti-v-ai`.
- ⚠️ omezení: odpovědi se mění mezi spuštěními → nutné opakovat, nevyvozovat z jednoho běhu.

### Google Alerts — zdarma
- Základní monitoring zmínek značky napříč webem. Ne AI-specifický, ale zachytí,
  kde se o značce nově píše (a odkud pak AI může čerpat).

### Bezplatné technické nástroje
- **PageSpeed Insights** — Core Web Vitals zdarma.
- **Rich Results Test / validátor strukturovaných dat** — zdarma.
- **Screaming Frog** — free do 500 URL (crawl, technická kontrola).
- **robots.txt** — úprava zdarma; řízení AI crawlerů. Odkázat na `ai-crawler-robots-txt`.

### Bezplatné obsahové a značkovací kroky
- Základní strukturovaná data (Organization, Article, FAQPage) — ruční JSON-LD zdarma.
- Krátká odpověď 40–60 slov nahoře, H2/H3 jako otázky — čistě práce, ne nástroj.
- Konzistentní popis značky napříč profily (Firmy.cz, LinkedIn) — zdarma.

### Free tiery placených AI trackerů
- Otterly, Mangools, Genrank a další mají free tiery / graders.
- ⚠️ free tier obvykle limituje **objem dotazů, počet platforem a frekvenci obnovy** →
  „dobré na vyzkoušení, ne na škálování" (zdroj: přehledy nástrojů 2026).
  Netvrdit konkrétní limity jednotlivých nástrojů — mění se; říct obecný vzorec.

## 🔴 KDE ZDARMA NARAZÍ NA STROP (fakt o nástrojích, ne prodej)

Ověřeno z vlastních publikovaných článků + přehledů:
1. **Backlink profil** — kvalitní data jen v placeném Ahrefs/Semrush. Zdarma nezjistíte,
   kdo na vás odkazuje ani jak kvalitně. (`seo-audit-co-kontrolovat` to už uvádí.)
2. **Benchmark vůči konkurenci** — ruční test ukáže vás, ne systematicky konkurenci.
3. **Automatizace a frekvence** — ruční test za odpoledne ano; denní sledování desítek
   dotazů napříč platformami ručně ne.
4. **Interpretace a prioritizace** — data zdarma získáte, ale co s nimi je zkušenost, ne nástroj.
5. **Čas** — „zdarma" znamená „za váš čas". U velkého webu ten čas není zanedbatelný.

**Formulace stropu:** vždy jako vlastnost nástroje/úlohy, ne jako „proto si nás najměte".

## Struktura (tutorial, howto 5 kroků)

1. Krátká odpověď (co zdarma jde a kde je hranice)
2. Co „zdarma" doopravdy znamená (za váš čas) — rovnou narovnat očekávání
3. Bezplatný playbook (CompareTable: úloha → bezplatný nástroj → co nezjistíte)
4. Postup krok za krokem (howto 5×, vše bezplatné kroky)
5. Kde zdarma narazí na strop (Insight warning — fakt, ne prodej)
6. Kdy zdarma bohatě stačí (Insight key — většina malých webů)
7. Chyby (MistakeGrid 4×)
8. Závěr = rozhodnutí (podle velikosti webu / času / konkurence)

## Howto (5 kroků, vše zdarma)
1. **Zapněte si Search Console** — klasický report i nový AI report (pokud ho vidíte).
2. **Udělejte ruční test viditelnosti** — sada dotazů, víc platforem, opakovat.
3. **Projděte techniku zdarma** — PageSpeed, Rich Results Test, robots.txt.
4. **Doplňte základní strukturovaná data a krátké odpovědi** — ručně, bez pluginu za peníze.
5. **Nastavte si Google Alerts** na značku — ať víte, kde se o vás píše.

## ⛔ NETVRDIT
- konkrétní limity free tierů jmenovitých nástrojů (mění se) — jen obecný vzorec
- že GSC AI report má každý (rollout omezený)
- že zdarma nestačí / stačí paušálně — záleží na velikosti webu, času, konkurenci
- že free nástroje měří citace přesně (ruční test je orientační)
- vlastní čísla o tom, kolik času to zabere — nemáme
- že „proto potřebujete audit" — strop je fakt o nástroji, ne důvod k nákupu

## Hranice
- **Neřeší placené nástroje** → [ai-seo-nastroje](/blog/ai-seo-nastroje/)
- **Neřeší ceny placené práce** → [kolik-stoji-ai-seo](/blog/kolik-stoji-ai-seo/)
- **Neřeší detail ručního testu** → [test-viditelnosti-v-ai](/blog/test-viditelnosti-v-ai/)
- **Neřeší robots.txt detail** → [ai-crawler-robots-txt](/blog/ai-crawler-robots-txt/)
- **Neumí říct, kdy přesně přejít na placené** → samostatný řádek plánu „kdy uz na to sam nestacis"

## Brand voice
- „free tier" → **bezplatná verze**; „tracker" → **sledovací nástroj**
- čísla česky: 500 URL, 40–60 slov, 3. 6. 2026
- answer 40–60 slov, začíná definicí

## Interní odkazy (ověřeno 2026-07-23, všech 7 existuje)
`/blog/ai-seo-nastroje/` · `/blog/kolik-stoji-ai-seo/` · `/blog/test-viditelnosti-v-ai/` ·
`/blog/ai-crawler-robots-txt/` · `/blog/strukturovana-data-pro-ai/` ·
`/blog/organization-schema-pro-znacku/` · `/blog/gsc-ai-segmenty-mereni/`

## CTA
Žádná prodejní. Článek smí skončit tím, že malému webu zdarma stačí. Placenou variantu
zmínit jen jako fakt („kde free končí"), ne jako výzvu k akci. Konflikt zájmů přiznat.
