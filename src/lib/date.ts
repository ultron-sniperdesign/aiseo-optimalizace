/**
 * Datum pro čtenáře — jeden formát pro celý web.
 *
 * V obsahu se datum ukládá v ISO (`2026-09-09`), protože podle něj řadíme
 * a plní `dateModified` ve strukturovaných datech. Čtenáři ale ISO nepatří.
 *
 * Tenhle převod existoval rozkopírovaný na třech místech a ve dvou dalších
 * chyběl: pilíř tiskl syrové ISO (opraveno 8. 9. 2026) a **oba blogové
 * layouty taky — tedy na 164 stránkách** (naměřeno 9. 9. 2026). Proto je
 * to funkce v `lib/`, ne výraz v šabloně.
 *
 * `T00:00:00Z` + `timeZone: "UTC"` drží pohromadě: bez nich by se datum
 * v západních časových pásmech posunulo o den zpět.
 */
export function czDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("cs-CZ", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}
