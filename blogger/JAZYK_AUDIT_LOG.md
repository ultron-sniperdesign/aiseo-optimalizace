# JAZYK_AUDIT_LOG.md — log jazykových auditů

> Vede skill `cestina-audit`. Pořadí: **od nejstaršího článku**, jeden článek na run, do hloubky.
> Sloupec „na 1 000 slov" je jediné číslo, které ukazuje, jestli audit zabírá — porovnává se stav **před** opravou.

| # | Datum | Článek | Publ. | Verze slovníku | Slov | Nálezů (stroj) | Nálezů LLM | na 1 000 slov | Opraveno | Nová pravidla |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 2026-08-23 | `jak-vypnout-ai-overview` | 2026-04-29 | v1 → v2 | 2 296 | 15 | 29 | **6,6 → 0,0** | 46 | +21 |
| 2 | 2026-08-23 | `seo-audit-co-kontrolovat` | 2026-05-02 | v2 → v3 | 2 397 | 12+5 | 24 | **6,6 → 0,0** | 33 (+9 zpětně z v4) | +23 |
| 3 | 2026-08-23 | `seo-pro-eshopy-ai-era-2026` | 2026-05-02 | v3 → v4 | 2 796 | 20 | 32 | **7,3 → 0,0** | 61 | +27 |
| 4 | 2026-08-23 | `jak-strukturovat-pillar-content` | 2026-05-03 | v4 → v5 | 3 820 | 154 | 15 | **40,8 → 0,0 ⛔** | 90+ | +15 |
| 5 | 2026-08-23 | `local-seo-cesko-2026` | 2026-05-03 | v5 → v6 | 4 615 | 21 | 17 | **4,6 → 0,0** | 45 | +19 |
| 6 | 2026-08-23 | `mereni-seo-vykonu-2026` | 2026-05-03 | v6 → v7 | 4 189 | 94 | 12 | **22,7 → 0,0** | 110 | +12 |

## Poznámky k jednotlivým článkům

### 1 · jak-vypnout-ai-overview (2026-08-23)

Nejstarší článek webu (29. 4. 2026), psaný před ustálením stylu. Podle očekávání nejhustší nález celého korpusu.

**Nejzávažnější nálezy:**
- **`answer block` 2×** — termín, který si projekt sám zakázal v glosáři `CLAUDE.md`. Opraveno na „krátká odpověď".
- **`podle podle dopadu`** — mechanický překlep, který přežil 4 měsíce v publikovaném textu.
- **„je minimum pilot na vybraném segmentu URL"** — rozbitá věta, nedotažený převod z angličtiny.
- **15 anglicko-českých hybridů**: `master switch`, `web-only`, `query-level`, `account-specific`, `business problém`, `AI Answer feature`, `Google features`, `test-first`, `privacy-first`, `web owner`, `hard limit`, `backup`, `baseline`, `impressions`, `publisher`.

**Co jsem nechal a proč:**
- Doslovné popisky menu prohlížeče (`Settings → Search engine`) — přeložit je znamená poslat čtenáře hledat položku, která v anglickém rozhraní neexistuje. Nově jsou v zpětných apostrofech, takže je checker přeskočí.
- `opt-in` u ovládání robotů — zavedený pár k `opt-out`, který má web ve slugu článku.
- `brand`/`brandový`, `snippet`, `e-shop`, `crawler`, `prompt` — ✅ zavedené v oboru.

**Chyba nástroje odhalená při práci:** plošný regex na dovření českých uvozovek přepsal uvozovku uvnitř HTML atributu (`class="hl"` → `class="hl“`) a rozbil tím kód stránky. Pravidlo ve slovníku je od té doby zúžené o `<>=` a skill má zákaz plošných náhrad bez masky.

### 2 · seo-audit-co-kontrolovat (2026-08-23)

Druhý nejstarší článek, tentokrát prošlý proti slovníku v2. Stejná hustota jako u prvního (6,6 na 1 000 slov), ale **jiná skladba**: zatímco jednička měla hlavně technické hybridy, dvojka je hustá agenturním slangem — je to text o službě.

**Nejzávažnější nálezy:**
- **`money pages`, `proof points`, `deliverable`, `handover`, `kickoff/debrief call`** — prodejní žargon, kterému zákazník bez SEO minulosti nerozumí; přitom článek má vysvětlovat, co si má od auditu koupit.
- **`Intent coverage pro buying-journey fáze`** — dvojitý kalk v jedné buňce tabulky.
- **`field data` vs `lab`, `tie-breaker`, `proxy indikátor`** — u Core Web Vitals se čtenáři naskládaly čtyři anglické termíny do jedné věty.
- **`organic traffic` i `organiku`** v jedné odrážce — dvě podoby téhož slangu vedle sebe.

**Nové jevy oproti článku 1:** slovník dostal celou vrstvu **obchodního žargonu** (dodávka služby, fáze nákupu, typy stránek). U prvního článku šlo hlavně o technické míchání jazyků.

**Chyby nástroje odhalené při práci:**
1. Checker hlásil **názvy komponent** (`<Insight>`) jako anglicismus → do masky přibyly JSX tagy.
2. Pravidlo na `content` hlásilo **`mixed content`** (technický termín HTTPS) → doplněna výjimka.
3. Normalizace uvozovek podruhé rozbila kód — tentokrát **uzavírací uvozovku JSX prop** `desc: "…"`, takže se nepřeložilo MDX. Zachytil to `npm run build`. Slovník i skill mají od té chvíle § 9 s povinným postupem.

### Oprava nástroje po článku 2: audit frontmatteru

Živá kontrola po nasazení ukázala, že slovo `deliverable` je pořád na stránce, ale checker hlásí nulu. Důvod: **přeskakoval celý frontmatter** — a v něm jsou `answer`, `description` a celé FAQ, tedy text, který čtenář vidí a který se dostává do vyhledávačů.

Checker teď audituje textová pole frontmatteru (`title`, `description`, `answer`, `q`, `a`, `label`, `desc`, `text`, `value`) a technické klíče (`slug`, `tags`, `keywords`, `category`) dál přeskakuje — anglická klíčová slova tam patří.

Okamžitý dopad: **+5 nálezů v článku 2 a +2 v článku 1**, všechny ve FAQ. Oba články mají po opravě 0.

### 3 · seo-pro-eshopy-ai-era-2026 (2026-08-23)

Nejhustší nález zatím: **7,3 na 1 000 slov** strojově, k tomu 32 dalších z LLM průchodu. Text pro e-shopy je psaný agenturním jazykem skoro celý.

**Nové jevy oproti článkům 1 a 2:** e-commerce a produktový slang — `listing`, `produktovka`, `custom úpravy`, `research fáze`, `basic audit`, `time-to-result`, `citation hook`, `brand exposure`, `citation rate`. Slovník tím dostal třetí vrstvu (po technické a obchodní).

**Nejzávažnější:**
- **`answer block` potřetí v korpusu** — a tentokrát i jako text odkazu na heslo ve slovníku.
- **`research fází` pětkrát** v jednom článku, včetně titulku persony.
- **`Tenhle format`** — nečeský pravopis, ne termín.
- **`citation hook`, `brand exposure`, `citation rate`** ve třech větách za sebou v sekci o strategii vůči AI Overviews.

**Zpětný dopad na starší články:** slovník v4 našel **9 dalších nálezů v článku 2** (`niche` 3×, `roadmapa` 3×, `na škálu`, `free nástroje`) a 0 v článku 1. Opraveno hned — jinak by se rozdíl mezi „projeto podle v2" a „projeto podle v4" tiše hromadil.

**Chyba nástroje odhalená při práci:** checker hlásil **názvy JSX atributů** (`fix="…"` v komponentě `<Mistake>`) jako anglicismus. Do masky přibyly názvy atributů; předtím maskoval jen názvy komponent.

### 4 · jak-strukturovat-pillar-content (2026-08-23)

**Rekord: 154 strojových nálezů, 40,8 na 1 000 slov** — šestkrát víc než u předchozích. Článek je zároveň nejdelší (3 800 slov) a je psaný pro obsahové stratégy, takže drží nejvíc oborového žargonu.

**Nejzávažnější: vlastní glosář porušený 23×**
- `answer block` **14×** (10 malým, 4 velkým písmenem)
- `schema markup` **5×**
- `hub-and-spoke` **4×**

To jsou tři termíny, které si projekt sám zakázal v `CLAUDE.md` — a v jednom článku jsou dohromady třiadvacetkrát.

**Další vrstva:** obsahový a redakční žargon — `blueprint`, `outline`, `wall of text`, `evergreen`, `body text`, `AI engines`, `thought leadership`, `ranking tracking`, `citation monitoring`, `next steps`, `update/outdated`, `timestamp`, `broken`, `step-by-step`.

**Rozhodnutí k termínu `pillar` (39 výskytů):** neměnit. Je to téma článku, má ho web ve slugu i v navigaci. Místo plošné náhrady jsem **doplnil definici k prvnímu užití v těle** („Pilířová stránka (anglicky *pillar*) je hlavní, nejobsáhlejší text k tématu…") — přesně to, co úroveň ⚠️ požaduje.

**Dvě opravy nástroje:**
1. **⚠️ pravidla se nově skládají na první výskyt** a hlásí, kolikrát se opakují (`+38x dál v textu`). Jejich smysl je „vysvětli při prvním použití", ne „nahraď všude" — bez toho tenhle článek generoval 68 hlášení o jednom slově.
2. **Maska na hodnoty technických atributů** (`class="pb-content"` hlásilo `content`) a výjimka pro název aktualizace `Helpful Content Update`.

**Čtvrtá chyba mého vlastního zásahu:** dávkové obalení názvů komponent do zpětných apostrofů zasáhlo i `import` řádky a rozbilo MDX. Chytil build. Slovník má nové pravidlo § 9.4: žádná dávková náhrada nesmí sáhnout na `import`, `export` a frontmatter klíče.

### 5 · local-seo-cesko-2026 (2026-08-23)

Nejdelší článek korpusu (4 615 slov), ale **nejnižší hustota zatím: 4,6 na 1 000 slov**. Důvod je vidět v textu — článek prošel refreshem v srpnu 2026, takže polovina je psaná už podle ustáleného stylu. Starší vrstva se pozná okamžitě.

**Nová vrstva slovníku: hybridní přívlastky.** Tenhle článek jich má nejvíc z celého korpusu — `per-pobočkové`, `service-area`, `service+lokalita`, `grid-based`, `geo-modifikované`, `single-location`, `multi-pobočkový`. Vzorec je pořád stejný: anglické přídavné jméno nalepené na české podstatné.

**Strojové obraty:** „Lokálnost odkazu **není binární definice**" (kalk), „**lokálně orientovaných** firem", „**rozeznatelnou** značku", „po **validaci přínosu**".

**Kontextová past:** `listingy` slovník překládal jako „výpis produktů" (z e-shopového článku), tady ale znamená **zápisy v katalozích**. Doklad, že náhrada ve slovníku je návrh, ne příkaz — každý výskyt se musí přečíst v kontextu.

**11 nedovřených uvozovek** — nejvíc z dosavadních článků, většinou v příkladech dotazů („instalatér Praha").

### 6 · mereni-seo-vykonu-2026 (2026-08-23)

Druhý nejhustší po pilíři: **94 strojových nálezů, 22,7 na 1 000 slov**. Článek o měření je logicky plný anglických názvů metrik.

**Nejčastější jednotlivá slova:** `share` 17× (většinou „citation share"), `traffic` 11×, `impressions` 7×, `sessions` 10×, `custom` 4×, `baseline` 4×.

**Nová vrstva: analytický žargon a anglická hodnocení.** Kromě metrik článek hodnotil česky-anglicky: „Pozice 4–10 = **solid**", „Rostoucí trend meziročně = **healthy**", „**mature web**", „**brand-conscious** dotazy", „**team view** + **management view**", „**stakeholder**", „**defaultní** KPI", „**dashboarding**".

**Rozhodnutí u názvů metrik:** české GA4 má vlastní překlady, takže `sessions` → **relace**, `impressions` → **zobrazení**. To není purismus — čtenář ta slova musí najít ve svém rozhraní, které je česky.

**Zpětný dopad v7:** `sessions` se objevilo i ve třech dřívějších článcích (pilíř 2×, měření, jak-vypnout). Opraveno.

## ⛔ Otevřený nález pro celý korpus: glosářové termíny

Rozšíření regexů o skloňované tvary (`answer blockem`, `schema markupu`) odhalilo, že jde o **plošný problém, ne jednotlivosti**:

| Termín | Výskytů |
|---|---|
| `answer block*` (block, blocku, bloky, bloků, blockem) | 55 |
| `schema markup*` | 20 |
| `hub-and-spoke*` | 4 |

**79 výskytů v 11 článcích.** Nejhorší: `aeo-optimalizace-v-praxi` (33), `aio-strategie` (17), `geo-optimalizace` (12).

Všechny tři termíny má projekt **zakázané ve vlastním glosáři v `CLAUDE.md`**. Nejde tedy o stylistickou preferenci, ale o rozpor s vlastním pravidlem.

⛔ **Neopravovat plošným sedem.** Skloňování vyžaduje mapování tvarů (blocku → krátké odpovědi, bloky → krátké odpovědi, blockem → krátkou odpovědí) a každá věta se musí přečíst. Vhodné jako **jeden vyhrazený sweep** s buildem a kontrolou po každém článku.
