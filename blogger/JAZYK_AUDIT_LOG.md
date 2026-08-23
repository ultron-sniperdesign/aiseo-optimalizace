# JAZYK_AUDIT_LOG.md — log jazykových auditů

> Vede skill `cestina-audit`. Pořadí: **od nejstaršího článku**, jeden článek na run, do hloubky.
> Sloupec „na 1 000 slov" je jediné číslo, které ukazuje, jestli audit zabírá — porovnává se stav **před** opravou.

| # | Datum | Článek | Publ. | Verze slovníku | Slov | Nálezů (stroj) | Nálezů LLM | na 1 000 slov | Opraveno | Nová pravidla |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 2026-08-23 | `jak-vypnout-ai-overview` | 2026-04-29 | v1 → v2 | 2 296 | 15 | 29 | **6,6 → 0,0** | 46 | +21 |

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
