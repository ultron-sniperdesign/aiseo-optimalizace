# Research — Jak ověřit, jestli je AI funkce dostupná v Česku (19. 8. 2026)

Řádek plánu: `jak zjistit jestli je ai funkce v cesku` (přidán 19. 8. 2026). Metodika, kterou používám v každém runu; čtenáři narážejí na totéž.

## Kolizní kontrola

| Existující článek | Překryv |
|---|---|
| `jak-cist-studie-o-ai-viditelnosti` | čtení **čísel** ze studií, ne dostupnost funkcí |
| `ai-mode-cesky` | dostupnost **jedné** funkce, ne metoda |
| `test-viditelnosti-v-ai` | testování vlastní viditelnosti, ne existence funkce |
| **metoda ověřování dostupnosti** | ✅ **nepokryto** |

## Metoda (pět kroků, jak ji reálně dělám)

1. **Najít oznámení** na blog.google a vypsat si z něj **doslovnou větu o dostupnosti** + datum příspěvku.
2. **Rozpoznat typ formulace.** Tři se opakují:
   - výčet zemí („in the U.S. and India"),
   - **jazykový rozsah** („along with over 150 countries and territories **in English**") — pozor, tohle není totéž co dostupnost v češtině,
   - **odkaz na jinou funkci** („wherever AI Mode is available") → jít po odkazu.
3. **Otevřít nápovědu.** Rozhoduje, jestli obsahuje **výslovný seznam zemí a jazyků**, nebo jen větu typu „není k dispozici pro všechny".
4. **Nezaměňovat překlad za dostupnost.** Česká verze nápovědy dokazuje jen to, že existuje přeložený řetězec.
5. **Když nic z toho nerozhodne, rozhodne jen vlastní test** — a jedno pozorování platí pro jeden účet, jednu zemi, jeden okamžik.

## Pět ověřených příkladů (vše ověřeno v srpnu 2026)

| Funkce | Co říká oznámení | Co říká nápověda | Závěr pro ČR |
|---|---|---|---|
| **AI Mode ve vyhledávání** | — | CS nápověda (čteno 19. 8. 2026): „Režim AI je k dispozici v následujících zemích, teritoriích a jazycích:" + **seznam, kde je Česko** (sekce Evropa, Střední východ a Afrika) **a čeština** | ✅ **doloženo** |
| **Search Live** | 26. 3. 2026: „Search Live is now available in **all languages and locations where AI Mode is available**" + odkaz na nápovědu AI Mode; „more than 200 countries and territories" | rozhoduje nápověda AI Mode (viz řádek výš) | ✅ **doloženo přes odkaz** |
| **Personal Intelligence** (propojené aplikace) | 19. 5. 2026: „nearly 200 countries and territories across 98 languages — no subscription required" | „Connecting to Google Calendar is **only available in the US in English**" | ⚠️ **částečně** — Gmail a Fotky ano, Kalendář ne |
| **Ask Maps** | 12. 3. 2026 USA a Indie; 6. 8. 2026: „Australia, Brazil, Canada, Indonesia, Japan, and Mexico, along with over 150 countries and territories **in English**" | CS nápověda existuje („Zeptat se Map"), **seznam zemí neuvádí** | ❌ **nedoloženo** |
| **Rozdělené zobrazení v AI Mode v Chromu** | 16. 4. 2026: „now available in the **U.S.**, and we'll expand soon" | CS nápověda: „momentálně není k dispozici pro všechny uživatele ani na všech zařízeních. Tuto funkci postupně zpřístupňujeme mimo USA a v jiných jazycích než angličtině" — bez seznamu | ❌ **nedoloženo** |

## Co článek NESMÍ tvrdit

- ⛔ Že funkce bez seznamu v Česku **není**. Nedoloženo ≠ nedostupné.
- ⛔ Že vlastní test něco dokazuje pro celý trh. Platí pro jeden účet a okamžik.
- ⛔ Že Google seznam zemí zveřejňovat musí. U části funkcí ho prostě nemá.

## Proč to čtenáře zajímá

Rozhoduje se podle toho, jestli něco měnit na webu. „Připravte se na X" u funkce, která tu není doložená, je náklad bez opory — a naopak u AI Mode, který tu doložený je, se čekat nedá.
