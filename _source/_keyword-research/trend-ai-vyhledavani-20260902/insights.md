# Hloubkový trend research — AI vyhledávání (2. 9. 2026)

**Předchozí research:** 25. 8. 2026 (široký sweep) · **Odstup:** týden
**Postup — 6 os, které minulý research NEpokryl:** ① evropská regulace · ② licenční
dohody a spory vydavatelů · ③ Microsoft/Copilot a Perplexity · ④ produktová data pro
AI commerce · ⑤ standardy pro AI crawlery · ⑥ čerstvé CTR/zero-click studie.
Ke každé ose: ověření zdroje → kontrola našeho pokrytí (152 článků) → kolize s plánem
(143 nevydaných témat) → teprve pak návrh.

> **Metodická poznámka:** při psaní jsem měl v kontextu zastaralé datum (26. 8.).
> Ověřeno proti systému: dnes je **2. 9. 2026**. Vedlejší efekt — sken „článků s daty
> v budoucnosti" nejdřív hlásil 40 nálezů; po opravě data je jich **0**. Falešný poplach,
> uvádím ho kvůli dohledatelnosti.

---

## TL;DR — pět věcí, které jsou nové od 25. 8.

1. **EU označila ChatGPT za „velmi velký online vyhledávač" (VLOSE) podle DSA** —
   rozhodnutí Evropské komise z pondělí **31. 8. 2026**, první generativní chatbot s touto
   klasifikací. Práh je 45 mil. měsíčních uživatelů v EU, OpenAI vykázal ~159,1 mil.
   (průměr za 6 měsíců do 31. 3. 2026). Povinnosti: každoroční posouzení systémových rizik
   a **nezávislé audity třetí stranou**, compliance do konce prosince 2026.
   → ChatGPT tím regulatorně přestává být „chatbot" a stává se vyhledávačem.
2. **Režim AI se stěhuje do adresního řádku Chromu.** Google spouští v USA (angličtina)
   do konce září, další země a jazyky „v následujících týdnech". Navazuje na tlačítko
   „Režim AI" ve vyhledávacím poli, které v ČR už je.
3. **Google přidává do AI odpovědí víc odkazů, ne míň.** 25. 8. spustil **karusely odkazů
   u vyvíjejících se témat v AI Mode** (Robby Stein, VP Search), plus víc inline odkazů
   a náhledy webů. AI Overviews mají 2,5 mld. měsíčních uživatelů, AI Mode přes 1 mld.
4. **Řízení AI crawlerů se posouvá od jmen botů k funkcím.** Cloudflare **Content Signals**
   (rozšíření robots.txt: preference podle účelu, ne podle User-Agenta) je nasazené na
   **3,8 mil. domén** a standardizuje se v IETF pracovní skupině **AIPREF**. Zároveň platí
   praktické pravidlo: tréninkový bot ≠ vyhledávací (GPTBot ≠ OAI-SearchBot,
   ClaudeBot ≠ Claude-SearchBot).
5. **Český trh má poprvé vlastní data o AI viditelnosti.** Studie Marketing Mineru:
   **400 000 měření napříč 100 000 prompty v 10 odvětvích** (výchozí data duben 2026,
   ChatGPT/Gemini/Perplexity/AI Overviews). Klíčové zjištění: **shoda citovaných domén mezi
   ChatGPT a Perplexity je jen ~11 %** — jedna platforma nevypovídá o druhé. Poptávka:
   **66 % dotázaných firem AI viditelnost aktivně řeší**, počet platících za měření se
   od ledna **zčtyřnásobil**.

## Podle os

**① Regulace (EU).** Kromě VLOSE designace: od **2. 8. 2026** platí transparenční část
**AI Actu** — AI systémy v EU musí strojově čitelně označovat AI generovaný výstup.
K tomu **DMA**: Komise 16. 7. 2026 vydala Googlu vodítka ke sdílení anonymizovaných dat
z vyhledávání s třetími stranami, přičemž **AI chatboti se search funkcí jsou způsobilí
příjemci**. Precedens opt-outu z AI Overviews bez ztráty pozic pochází z britské CMA.

**② Licence vydavatelů.** OpenAI má ~24 zveřejněných dohod (největší News Corp, ~250 mil.
USD/5 let), Meta 7 dohod, Google pilotní program s vydavateli. Reddit inkasuje ~130 mil.
USD ročně od Googlu a OpenAI. **Závěr analýz: dlouhý ocas malých a středních vydavatelů
z licencí nedostane prakticky nic** — pro české weby je cesta citovatelnost, ne licence.

**③ Perplexity a Microsoft.** Perplexity spustila **Comet Plus** (leden 2026): fond
**42,5 mil. USD**, dělba **80/20** ve prospěch vydavatelů z předplatného 5 USD/měs.
Perplexity zpracovává 230+ mil. dotazů měsíčně. Copilot je defaultně v Edge a Windows 11,
příjmy z reklamy v Bingu +18 % meziročně. OpenAI od 9. 2. 2026 testuje reklamy v ChatGPT
(Free/Go, USA).

**④ Produktová data.** Pro viditelnost v nákupních dotazech AI Mode je podmínkou aktivní
feed v Merchant Center s volnými listingy; nejvíc váží titulek, popis, GTIN, dostupnost,
cena a obrázky. Nové proti klasickému Shoppingu: **čerstvost feedu** a **konzistence
schema.org na stránce s feedem** — při rozporu (cena, dostupnost, hodnocení) Google
podle dostupných výkladů znevýhodní obojí. ⚠️ zdroj sekundární, ověřit u primární
dokumentace před publikací.

**⑤ Standardy crawlerů.** robots.txt je od 2022 RFC 9309; llms.txt standardem není
a Google ho podle dokumentace z 06/2026 nepoužívá. Aktivní vývoj je v AIPREF + Content
Signals (viz TL;DR 4).

**⑥ Zero-click, čerstvá čísla.** AI Overviews se spouštějí na **~48 % sledovaných dotazů**
(+58 % meziročně, BrightEdge 02/2026). U dotazů s AIO je zero-click **83 %** vs ~60 %
bez AIO. CTR pozice 1 klesá o **58 %** u dotazů s AIO (Seer: 1,76 % → 0,61 %). Na citace
uvnitř AIO klikne ~1 % uživatelů. **Ale: značky citované v AIO mají o 35 % víc organických
kliků** než necitované. ⚠️ vše agregátory, ne primární studie — do textů se zdrojem a datem.

## Co z toho pro nás

**Naše pokrytí je nečekaně dobré.** Plán bloggera (143 nevydaných témat) už předjímá
AI Act (`ai act pro weby od srpna 2026`), DMA (`dma rozhodnuti a ai odpovedi`), licence
(`licencovana data v ai odpovedich`), Perplexity (`vyplati se jeste perplexity`), karusely
v AI přehledu (`top stories uvnitr ai prehledu`), adresní řádek (`vstupni bod hledani na
nove karte`) i celou produktovou vrstvu (feed, GTIN, varianty, Merchant Center report).
Web má 152 článků; za týden od minulého researche přibylo 9.

**Skutečné mezery — tři, a všechny mají data:**

| # | Téma | Proč |
|---|---|---|
| 1 | **ChatGPT jako regulovaný vyhledávač (DSA/VLOSE)** | rozhodnutí staré 2 dny, nikde v plánu, mění rámec „chatbot vs vyhledávač" i pro české weby |
| 2 | **Content Signals: řízení AI botů podle účelu** | 3,8 mil. domén, standardizace v IETF; plán má jiná Cloudflare témata, tohle ne |
| 3 | **Česká studie AI viditelnosti (400k měření)** | jediná CZ referenční data; 11% překryv ChatGPT×Perplexity je silný argument pro měření napříč platformami |

**Refresh kandidáti (moje práce, ne bloggerova):**
- `zero-click-ai` — nese čísla z jara; nová: 48 % pokrytí AIO, 83 % zero-click, +35 % kliků
  u citovaných značek.
- `rezim-ai-google` (vyšel 26. 8.) — doplnit adresní řádek Chromu, až dorazí do ČR.
- `ai-crawler-robots-txt` — zmiňuje AIPREF, chybí Content Signals jako praktická vrstva.

## Limity
- Většina odvětvových čísel pochází z agregátorů; primárně ověřeno jen VLOSE (rozhodnutí
  Komise), karusely (Search Engine Land/SEJ + Google) a AI Act (digital-strategy.ec.europa.eu).
- Google Trends nadále nedostupné (rate-limit) — poptávka měřena přes Marketing Miner.
- Nová témata z regulace mají krátký poločas: VLOSE compliance běží do prosince 2026,
  do té doby se bude výklad měnit.
