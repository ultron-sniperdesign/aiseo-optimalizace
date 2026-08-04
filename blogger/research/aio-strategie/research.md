# Research — refresh `aio-strategie`

**Typ runu:** refresh (2:1 kadence, Run91)
**Datum:** 2026-08-04
**Článek:** `/blog/aio-strategie/` · published 2026-05-08 · updated 2026-05-08 (nikdy nerefreshováno)
**Rozsah:** 3 287 slov, category analysis, tag strategie

---

## 1. Proč tenhle článek

Vybrán projetím všech 112 článků podle nejstaršího `updated`. Druhý nejstarší, nikdy
nerefreshovaný. Rozhodly ale dvě věcné věci, ne stáří:

- **0 zmínek o AI Mode** a **0 zmínek o reportu Generativní AI funkce** — a přitom je to
  strategický článek, jehož páteří jsou KPI a měření.
- **Devět míst tvrdí, že se v Search Console sledují imprese doporučených úryvků
  (featured snippets), a čtyři z nich i FAQ rozšířené výsledky.** Ani jedno neplatí.

---

## 2. ⛔ Hlavní nález — publikovaná chyba v měřicí vrstvě

### 2a. Doporučené úryvky (featured snippets) nejsou typ zobrazení v Search Console

**Primární zdroj:** nápověda Search Console, „Přehled výkonu (výsledky Vyhledávání):
Dimenze a seskupení dat" (support.google.com/webmasters/answer/17011259), čteno 4. 8. 2026.

Stránka vyjmenovává hodnoty dimenze **Vzhled ve vyhledávání**. Úplný výčet:

> Články AMP · Nerozšířené výsledky AMP · Článek AMP ve vyhledávání obrázků · Diskuzní fóra ·
> Vzdělávací otázky a odpovědi · Podrobnosti o nabídce práce · Nabídky práce · Matematické
> řešiče · Akce s médii · Záznamy obchodníka · Procvičovací úlohy · Produktové úryvky ·
> Rozšířené výsledky pro otázky a odpovědi · Galerie receptů & Rozšířené výsledky receptů ·
> Úryvek recenze · Odebíraný obsah · Přeložené výsledky · Videa · Webové příběhy

**„Doporučený úryvek" v seznamu není.** Nikdy tam nebyl jako veřejná funkce — filtr existoval
jen v uzavřené betě Search Analytics a Google ho nespustil.

Dopad: KPI „Featured Snippet impressions — z GSC, weekly trend" **nejde splnit**. Čtenář ho
v rozhraní nenajde a bude hledat chybu u sebe. Stejně tak OKR „zvýšit Featured Snippet
impressions z 1 200 na 1 800/měsíc v GSC" — zdrojová metrika neexistuje.

### 2b. FAQ rozšířené výsledky skončily

- **Primární zdroj:** dokumentace FAQ strukturovaných dat, Search Central —
  *„This feature will no longer appear in Google Search starting May 7, 2026."*
- Tatáž nápověda k dimenzím uvádí **„Rozšířené výsledky pro časté dotazy" jako deprecated**
  pole, které má u novějších dat hodnoty NULL.
- Vlastní článek `konec-faq-rich-results` (11. 7., updated 28. 7.) to popisuje celé včetně
  navazujícího odebrání reportu.

Dopad: „automatický reporting Featured Snippet a FAQ rich snippets" přes Looker Studio je
návod na dashboard, který se naplní prázdnem.

### 2c. Kde všude to v článku je (9 míst)

| Místo | Co tvrdí |
|---|---|
| FAQ „Jaké KPI sledovat" | „Featured Snippet impressions v GSC" jako leading metrika |
| FAQ „Kolik trvá…" | „první měřitelné posuny ve Featured Snippet impressions" |
| howto Den 15–45 | „automatický reporting Featured Snippet a FAQ rich snippets" |
| howto Den 30–60 | „měřitelný posun ve Featured Snippets" |
| howto Den 60–90 | týdenní review „Featured Snippet impressions" |
| tělo, leading KPI 3 | „Featured Snippet impressions — z GSC, weekly trend" |
| tělo, OKR KR2 | „z 1 200 na 1 800/měsíc v GSC" |
| tělo, free baseline | „GSC — Performance, Search Appearance, Coverage" |
| tělo, výsledky v praxi | „růst Featured Snippet impressions" jako doložený posun |

⚠️ **Pozor na falešný poplach:** v howto kroku Den 15–45 je i „pro každý dotaz zapsat
Featured Snippet (Y/N)" — to je **ruční pozorování SERP, ne GSC, a je správně**. Neopravovat.

---

## 3. Co v článku chybí (vzniklo až po vydání)

| Co | Kdy | Ověřeno |
|---|---|---|
| Report **Generativní AI funkce** v Search Console (imprese, dvě zobrazení: Vyhledávání a Discover) | spuštěn 3. 6. 2026, měsíc po vydání článku | vlastní články `gsc-ai-segmenty-mereni`, `generativni-ai-v-discoveru` (ověřeno proti nápovědě 2.–3. 8. 2026) |
| **Bing AI Performance report** | dostupný od 10. 2. 2026 — tedy **tři měsíce PŘED vydáním článku**, díra tam byla od začátku | vlastní článek `bing-ai-performance-report` |
| **AI Mode** jako samostatná plocha | v článku 0 zmínek | vlastní články `ai-mode-vs-ai-overviews`, `google-ai-mode` |
| **Volatilita** odpovědí → jeden běh ručního auditu nestačí | měření SE Ranking, publ. 29. 9. 2025 | vlastní článek `volatilita-ai-odpovedi` (publ. 3. 8. 2026) |

Stejný vzorec jako u refreshe `seo-nastroje-2026`: nešlo jen o zastarání, část díry
tam byla už v den vydání.

---

## 4. Menší nálezy

1. **Ceny nástrojů bez data** — $29 / $99 / $99 / $129–229 / $500+ na dvou místech (tělo
   + FAQ). Stejná vada jako u `seo-nastroje-2026`. Datovat ke květnu 2026 a napsat, že se
   při refreshi neověřovaly.
2. **„Q3 2026" v OKR šabloně** — dnes už běžící kvartál. Zobecnit.
3. **Rich Results Test ve free baseline** — pořád platný nástroj, ale **ne pro FAQ**.
   Doplnit poznámku, ne mazat.

---

## 5. Vedlejší nález — táž vada ve dvou dalších článcích

Grep přes všech 112 článků:

- `aeo-optimalizace-v-praxi` — **4 místa** (FAQ, howto, tělo 2×): „GSC Performance →
  Search Appearance (FAQ rich snippets, HowTo)" a „Featured Snippets impressions
  (filtr search appearance)". Článek byl refreshovaný 27. 7. a tohle přežilo.
- `geo-optimalizace` — **1 místo**: „u FAQ rich snippets dává Google jednoznačný strojový
  vstup" — formulace v přítomném čase o zaniklém zobrazení.

Opravit v tomtéž běhu. Je to jedna vada ve třech instancích, ne tři nálezy.

---

## 6. Co refresh udělá

1. Opraví všech 9 míst v `aio-strategie` — **frontmatter (FAQ, howto) ve stejném průchodu
   jako tělo**, kontrola skriptem, ne okem.
2. Nahradí neexistující metriku měřitelnými: report Generativní AI funkce, Bing AI
   Performance, pozice dotazu + ruční kontrola SERP.
3. Doplní AI Mode do měřicí vrstvy a ruční audit rozšíří o opakování kvůli volatilitě.
4. Otevřený box s přiznáním chyby (domácí zvyk).
5. Datuje ceny, zobecní kvartál, doplní prolinky na novější články.
6. Opraví tutéž vadu v `aeo-optimalizace-v-praxi` a `geo-optimalizace`.
7. `updated` → 2026-08-04, `published` beze změny. Titulek se nemění → **OG negenerovat**.

---

## 7. Zdroje

- support.google.com/webmasters/answer/17011259 — nápověda Search Console, dimenze přehledu
  výkonu (úplný výčet typů zobrazení), čteno 4. 8. 2026
- developers.google.com/search/docs/appearance/structured-data/faqpage — oznámení o ukončení
  FAQ rozšířených výsledků, doslova *„will no longer appear in Google Search starting
  May 7, 2026"*
- vlastní ověřené články: `konec-faq-rich-results`, `gsc-ai-segmenty-mereni`,
  `generativni-ai-v-discoveru`, `bing-ai-performance-report`, `volatilita-ai-odpovedi`
