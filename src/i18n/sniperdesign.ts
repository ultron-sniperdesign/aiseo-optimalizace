/**
 * Slovník UI stringů pro Sniper Design agency promo bloky (Big + Small).
 *
 * Součást i18n vrstvy — fork přeloží celou složku src/i18n/. Big a Small sdílí
 * titulek, trust signály, CTA labely a brand; liší se lead a rozsah obsahu.
 *
 * POZN.: agency URL (sniperdesign.cz, megadetail.cz) jsou identita agentury,
 * sdílené napříč mutacemi; inline odkazy v `lead` nesou href přímo v HTML.
 */

export const sniperDesign = {
  brandAria: "Sniper Design — domovská stránka agentury",
  brandAlt: "Sniper Design",
  eyebrowDefault: "Pomoc s implementací",
  /** Sdílený titulek (Big i Small). */
  title: "Nechcete to řešit interně? <strong>Postavíme to za vás.</strong>",
  hrefHome: "https://www.sniperdesign.cz/",
  hrefSeo: "https://www.sniperdesign.cz/seo-pro-ai",
  hrefConsult: "/kontakt/",
  ctaOpen: "Otevřít Sniper Design",
  ctaConsult: "Nezávazná konzultace",
  /** aria-label seznamu důvěryhodnostních signálů (dřív natvrdo anglicky „Trust signals“). */
  trustAria: "Proč Sniper Design",

  /**
   * Partnerství u e-shopových platforem — vykresluje komponenta PartnerBadges.
   * Ověřeno na veřejných profilech 14. 9. 2026: Upgates Marketplace uvádí
   * „Zlatý partner Upgates od roku 2016“ a hodnocení 4,5 z 19 recenzí; Shoptet
   * Partneři odznak „Zlatý partner“ a 2 hodnocení (průměr na profilu není
   * v textu, proto se nevypisuje). Hodnocení se mění — při úpravě znovu ověřit.
   * PER-MUTACE: české platformy; fork mimo CZ komponentu nevkládá.
   */
  partners: {
    aria: "Ověřená partnerství u e-shopových platforem",
    profileLabel: "partnerský profil u platformy",
    newWindow: "otevře se v novém okně",
    items: [
      {
        platform: "Upgates",
        level: "Zlatý partner",
        meta: "od 2016 · 4,5 z 5 (19 hodnocení)",
        href: "https://marketplace.upgates.cz/agencies/sniper-design/",
      },
      {
        platform: "Shoptet",
        level: "Zlatý partner",
        meta: "",
        href: "https://partneri.shoptet.cz/profesionalove/sniper-design/",
      },
    ],
  },

  big: {
    lead: 'Tento průvodce vám dá přehled. Co s ním reálně udělá web nebo e‑shop, je druhá věc — a obvykle to chce někoho, kdo už tím prošel. V <a href="https://www.sniperdesign.cz/" target="_blank" rel="noopener">Sniper Design</a> děláme <strong>kompletní AI&nbsp;SEO</strong>: od strategie přes audit a implementaci až po finální obsah. Zlatý partner Upgates i Shoptetu, přes 600 e‑shopů na CZ trhu, vlastní e‑shop <a href="https://www.megadetail.cz/" target="_blank" rel="noopener">MEGA&nbsp;DETAIL</a>.',
    /** Partnerství u platforem nese komponenta PartnerBadges nad tímto seznamem. */
    trust: [
      "<strong>600+</strong> e‑shopů od 2016",
      "Vlastní e‑shop <strong>MEGA&nbsp;DETAIL</strong>",
    ],
    pkg: "<strong>Vše dodáváme jako jeden balík.</strong> Strategie, znalost, audity, optimalizace i obsah — pod jednou střechou, s jednou kontaktní osobou, s jedním cílem.",
    benefits: [
      {
        num: "01",
        title: "Strategie a&nbsp;know‑how",
        desc: "Projdeme s vámi web, vysvětlíme co se děje s AI vyhledáváním a poradíme, kterým směrem se vydat — co řešit hned, co odložit a kam vůbec necílit.",
      },
      {
        num: "02",
        title: "Audit AI&nbsp;viditelnosti",
        desc: "Komplexní průchod technikou webu, strukturou stránek, strukturovanými daty a obsahem. Konkrétní seznam priorit s odhadem dopadu a pracnosti.",
      },
      {
        num: "03",
        title: "Optimalizace a&nbsp;implementace",
        desc: "Nasadíme strukturovaná data, přepíšeme klíčové stránky do struktury čitelné pro AI, zoptimalizujeme rychlost a Core Web Vitals. Moduly na míru pro Upgates a Shoptet.",
      },
      {
        num: "04",
        title: "Tvorba a&nbsp;aktualizace obsahu",
        desc: "Popisy produktů, FAQ a články v tónu vaší značky — ve formátu, ze kterého mohou citovat ChatGPT, Perplexity i Přehled od AI.",
      },
    ],
    scopeEyebrow: "Konkrétní záběr",
    scopeTitle:
      "Co konkrétně upravíme na vašem <strong>webu nebo e‑shopu</strong>",
    scope: [
      "Struktura kategorií a služeb",
      "Krátké odpovědi pod nadpisy",
      "FAQ sekce s reálnými dotazy",
      "Strukturovaná data — Product, Article, Organization",
      "Interní prolinkování",
      "Technické SEO (Core Web Vitals, indexace, mobilní verze)",
      "<code>robots.txt</code> pro roboty AI",
      "Obsahové mezery proti konkurenci",
      "Měření citací a zmínek o značce v AI",
    ],
  },

  small: {
    lead: 'V <a href="https://www.sniperdesign.cz/" target="_blank" rel="noopener">Sniper Design</a> děláme <strong>kompletní AI&nbsp;SEO</strong> — strategii, audit, implementaci i obsah. Zlatý partner Upgates i Shoptetu, přes 600 e‑shopů na CZ trhu. <strong>Na AI vyhledávání připravujeme</strong> návrhy homepage, obsahovou strukturu i audity klientských webů.',
    /** Partnerství u platforem nese komponenta PartnerBadges nad tímto seznamem. */
    trust: [
      "<strong>600+</strong> e‑shopů",
      "Vlastní e‑shop <strong>MEGA&nbsp;DETAIL</strong>",
    ],
  },
};
