import { getCollection } from "astro:content";

/**
 * Nejnovější datum revize napříč obsahem webu (články, sekce, pilíř).
 *
 * Používá to patička (měsíc slovy) i homepage (viditelné datum + `dateModified`
 * v JSON-LD). Dřív ten výpočet existoval jen ve `Footer.astro`; homepage proto
 * neměla datum vůbec a v JSON-LD chybělo `dateModified` (naměřeno 2026-09-08).
 * Jedna funkce místo dvou kopií, aby se obě místa nerozešla.
 *
 * Vrací ISO `YYYY-MM-DD`. Když v obsahu žádné datum není nebo je rozbité,
 * vrací dnešek — patička ani schema nesmí ukázat „undefined NaN".
 */
export async function siteUpdatedIso(): Promise<string> {
  const dated = [
    ...(await getCollection("articles")),
    ...(await getCollection("sections")),
    ...(await getCollection("pillar")),
  ].map(
    (e) =>
      (e.data as { updated?: string; published?: string }).updated ??
      (e.data as { published?: string }).published,
  );
  const newest = dated.filter(Boolean).sort().at(-1);
  const parsed = newest ? new Date(`${newest}T00:00:00Z`) : new Date();
  const stamp = Number.isNaN(parsed.getTime()) ? new Date() : parsed;
  return stamp.toISOString().slice(0, 10);
}
