/**
 * ProofStrip — sdílený trust prvek „čeho se dá běžně dosáhnout".
 *
 * Ověřitelná čísla z vlastních dat (case study MEGA DETAIL) promítaná
 * napříč webem jako tmavý výrazný panel před Sniper Design pitch bloky.
 * Texty tady, šablona v blocks/ProofStrip.astro. Fork přeloží texty;
 * čísla a zdroj jsou sdílená fakta (vlastní e-shop agentury).
 * Při aktualizaci case study aktualizovat i tady.
 *
 * POCTIVOST: vždy „zobrazení" (impressions), nikdy „návštěvy". Čísla jsou
 * z GSC beta reportu „Funkce s generativní AI" (18. 5. – 15. 7. 2026)
 * a GA4 (12 měsíců, detail v case study).
 */

export const proof = {
  /** Eyebrow nad titulkem. */
  eyebrow: "Data z praxe · ne teorie",

  /**
   * Hlavní titulek — musí vysvětlit číslo sám od sebe, bez kontextu.
   * `strong` část zvýrazní šablona.
   */
  titleHtml:
    "Náš e-shop se zobrazil v AI odpovědích Googlu <strong>200&nbsp;000× za&nbsp;dva měsíce</strong>",

  /** Podtitulek — proč to čtenáře zajímá (benefit + poctivý kontext). */
  lead: "A to ještě před cílenou AI SEO optimalizací. Všechno, co radíme na tomto webu, měříme na vlastním e-shopu MEGA DETAIL — tohle jsou výchozí čísla a veřejně je budeme zlepšovat.",

  /** 3 stat dlaždice — číslo + co znamená. */
  stats: [
    {
      value: "200 000",
      label: "zobrazení v AI odpovědích Googlu (AI Overviews) za dva měsíce",
    },
    {
      value: "4×",
      label: "vyšší konverze návštěv z ChatGPT oproti Google vyhledávání",
    },
    {
      value: "3×",
      label: "vyšší tržba na návštěvu z ChatGPT než z Googlu",
    },
  ] as { value: string; label: string }[],

  /** Primární CTA — dedikovaná landing s reálnými screenshoty. */
  ctaPrimary: {
    label: "Podívat se na celá data",
    href: "/ai-viditelnost/",
  },
  /** Sekundární CTA — co s tím může čtenář udělat. */
  ctaSecondary: {
    label: "Chci to samé pro svůj web",
    href: "/sluzby/",
  },

  /** Zdrojová poznámka (drobným písmem). */
  source: "Zdroj: Google Search Console (funkce s generativní AI, 18. 5. – 15. 7. 2026) a GA4 e-shopu MEGA DETAIL. Metodika v case study.",

  /** aria-label sekce. */
  aria: "Důkaz z praxe: viditelnost v AI odpovědích",
};
