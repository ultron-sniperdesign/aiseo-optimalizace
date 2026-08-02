# Refresh research — gsc-ai-segmenty-mereni

**Datum refreshe:** 2026-08-02 · **Původně vydáno:** 2026-06-11 (8 týdnů starý)
**Důvod zařazení:** nalezeno při researchi Run77 — článek popisuje report jako čerstvě spuštěný
a všechny stavové věty hedguje formulací „k datu vydání tohoto článku", takže čtenář v srpnu
nepozná, co z toho ještě platí.

---

## 1. Co jsem ověřil u primárního zdroje (2. 8. 2026)

Nápověda Search Console, stránka *Generative AI performance report (Search)*
(`support.google.com/webmasters/answer/16984139`):

| Tvrzení v článku | Stav k 2. 8. 2026 | Zdroj |
|---|---|---|
| Report ukazuje jen imprese | **platí** — o klicích, CTR, pozici ani dotazech není na stránce ani zmínka | nápověda |
| Rozpad: stránky, země, zařízení, datum | **platí** | nápověda |
| Dostupný jen části webů | **platí i po dvou měsících** — „We're rolling out this report to a subset of website owners, allowing for thorough testing before rolling it further." | nápověda |
| Dvě zobrazení Search + Discover | **platí** (Discover má vlastní stránku nápovědy) | nápověda |

Doslova o rozsahu: *„The generative AI performance report includes impressions for the following
generative AI capabilities on Google Search: AI Overviews, AI Mode."*

---

## 2. ⛔ Co v článku CHYBÍ a mělo tam být od začátku

### Rollout začal v Británii

Search Engine Land v den spuštění (3. 6. 2026) doslova: report *„is rolling out to a subset of
website owners in the UK at first and will expand globally at some point in the future."*
Tentýž text **odděleně** popisuje i ovládací prvek na blokování obsahu v AI odpovědích jako
UK-first — nejde tedy o záměnu těch dvou věcí, obojí startovalo v Británii.

Můj článek psal jen „postupně se zpřístupňuje jen části webů". Pro českého čtenáře je to
prakticky zavádějící: v červnu neměl šanci report mít a z článku to nepoznal.

### AI Overviews a AI Mode nejdou v reportu oddělit

Nápověda uvádí obě funkce v jednom výčtu a **žádný filtr ani rozměr, který by je rozlišil, nemá** —
rozpady jsou jen stránky, země, datum a zařízení. To je nejpraktičtější omezení celého reportu
a v článku není vůbec. Většina lidí od reportu čeká přesně tohle číslo („kolik z toho je AI Mode").

---

## 3. Co jsem NEPŘEVZAL, i když to sekundární zdroje uvádějí

- **„Data od 18. 5. 2026, starší historie není."** Objevuje se v přehledech, ale ani nápověda,
  ani text Search Enginu Land to neuvádí. **Do článku nedávám.**
- **„Rozšířeno 9. 7. 2026 na další weby včetně USA."** Zdroj (Search Engine Roundtable)
  mi vrátil 403 a ověřit se to nepodařilo. Navíc by to bylo v rozporu s tím, co Google píše
  ve své nápovědě dnes („subset of website owners"). **Do článku nedávám.**
- **„(Beta)"** — tenhle label mám v článku na čtyřech místech. Nápověda Googlu ho dnes nepoužívá
  a Search Engine Land ho v den spuštění nepoužil taky. Původně nejspíš z rozhraní GSC.
  Ověřit nedokážu, takže **tvrdý label vypouštím** a nahrazuji tím, co doložit umím
  (postupné zpřístupňování, omezené metriky). Nepíšu, že beta „skončila" — to bych nedoložil taky.

---

## 4. Plán refreshe

1. Datovat stav: nahradit „k datu vydání tohoto článku" konkrétním „ověřeno k 2. 8. 2026".
2. Doplnit **UK-first** k popisu rolloutu (s datem a zdrojem).
3. Nová sekce: **AI Overviews a AI Mode report neoddělí** — co s tím.
4. Zrušit nedoložitelný label „(Beta)".
5. CZ-ukotvení: co z toho plyne pro český web, který report ještě nemá.
6. Bump `updated`, `published` nechat. Titulek se nemění → OG obrázek se negeneruje.

---

## 5. Zdroje

- support.google.com/webmasters/answer/16984139 — nápověda GSC, *Generative AI performance report (Search)*, ověřeno 2. 8. 2026
- support.google.com/webmasters/answer/16983858 — tatáž nápověda pro Discover
- searchengineland.com/…-479298 — 3. 6. 2026, den spuštění, UK-first formulace
