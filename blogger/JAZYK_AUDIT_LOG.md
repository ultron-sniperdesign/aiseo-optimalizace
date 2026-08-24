# JAZYK_AUDIT_LOG.md — log jazykových auditů

> Vede skill `cestina-audit`. Pořadí: **od nejstaršího článku**, jeden článek na run, do hloubky.
> Sloupec „na 1 000 slov" je jediné číslo, které ukazuje, jestli audit zabírá — porovnává se stav **před** opravou.

| # | Datum | Článek | Publ. | Verze slovníku | Slov | Nálezů (stroj) | Nálezů LLM | na 1 000 slov | Opraveno | Nová pravidla |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 2026-08-23 | `jak-vypnout-ai-overview` | 2026-04-29 | v1 → v2 | 2 296 | 15 | 29 | **6,6 → 0,0** | 46 | +21 |
| 2 | 2026-08-23 | `seo-audit-co-kontrolovat` | 2026-05-02 | v2 → v3 | 1 855 | 12 | 24 | **6,6 → 0,0** | 26 | +23 |

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
