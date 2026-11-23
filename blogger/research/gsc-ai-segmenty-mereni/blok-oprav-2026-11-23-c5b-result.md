# C5b — cílené ověření oprav kola 1 — blok oprav „popis Auditu AI viditelnosti v rozporu s audit.ts“ (23. 11. 2026)

> Auditor kola 1 (týž Claude subagent, pokračování v jeho kontextu) ověřil jedno kolo navíc své BLOCKERy a warningy
> s věcným dopadem proti `audit.ts` a textu stránky monitoringu; podklady `clanky-po-kole1/` a
> `zaznam-a-vyporadani-po-kole1.md` ve složce úkolu `Dokumenty/CODEX/z-clauda/2026-11-23-audit1-blok-cta-auditu/`.
> Níže je výstup auditora beze změny.

**1. BLOCKERy**
- **#1 gsc-ai-segmenty-mereni ř. 241 – OBSTOJÍ.** Věta „AI audity děláme s měřením…“ zmizela. Poznámka „Transparentně“ teď mluví jen o zdroji popisu reportu. Jiný popis auditu s měřením v článku nezůstal, protože ř. 239 dává měření Monitoringu.
- **#2 blokovat-ai-odpovedi-gsc ř. 182 – OBSTOJÍ.** Místo „řeší to“ je „k rámcovému odhadu“ a přibyla výslovná podmínka „Přínos samotných AI odpovědí Googlu ale neoddělí ani on — z běžně dostupných dat to nejde“. To sedí s ř. 112 a 176 článku. Zdroje (ChatGPT, Přehled od AI, Search Console, návštěvy a konverze z GA4) i měsíční kadence sedí s monitoring-ai.txt ř. 6 a 26.
- **#3 ai-roboti-zatez-webu ř. 111 – OBSTOJÍ.** Úvod nabídky už měření nezmiňuje. Zbylé „co pustit a co omezit“ audit pokrývá vrstvou přístupu AI robotů podle účelu (audit.ts ř. 250).

**2. Warningy**
- **#4 informacni-obsah-v-ai-ere ř. 156 – OBSTOJÍ.** Otázka „jestli má AI ve vašich článcích co citovat“ odpovídá vrstvě 03 (audit.ts ř. 261) a nepotřebuje data klienta.
- **#5 za-jak-dlouho-se-projevi-ai-seo ř. 204 – OBSTOJÍ.** „Ukážou to až vaše vlastní data“ už nezní jako závazek agentury měřit. Navazuje na CTA na ř. 206, které sledování nechává klientovi.
- **#6 rozsah Monitoringu – OBSTOJÍ ve všech čtyřech místech** (ai-seo-b2b ř. 30, mereni-ai-mode-limity ř. 161, gsc-ai-segmenty-mereni ř. 239, blokovat-ai-odpovedi-gsc ř. 182). „Zmínky v ChatGPT a v Přehledu od AI“ odpovídá monitoring-ai.txt ř. 26 a cena Monitoringu se nikde neobjevuje. V mereni sedí i nová věta „Výchozí stav, proti kterému půjde měřit posun“ s audit.ts ř. 242.
- **#7 aeo-optimalizace-v-praxi ř. 450 – OBSTOJÍ.** Druhý název produktu i naznačená implementace zmizely. „Největší dopad“ odpovídá hodnocení dopad × náročnost v auditu.
- **#8 ai-search-trendy-cesko-2026 ř. 428 – OBSTOJÍ.** Konzultace už nic z auditu zdarma neslibuje. Navíc je ř. 423 zpřesněný na „Perplexity, Claude a Gemini ručně“ podle audit.ts ř. 293.
- **#9 ai-seo-wordpress ř. 196 a pravidlo – OBSTOJÍ, záznam potřebuje drobnou opravu.**
  - Popis auditu („projde hlavní stránky, zkontroluje strukturovaná data, robots.txt a přístup AI robotů a navrhne opravy s odhadem dopadu“) sedí s audit.ts ř. 250–252 a ř. 61.
  - Upřesněné pravidlo je v záznamu na ř. 27–31 (přístup do systémů a účtů klienta je rozpor, kontroluje se celá nabídková sekce).
  - Vypořádání tvrdí „položka fronty rozdělena“, ale sekce „Mimo blok“ má na ř. 70 CDN pořád ve frontě k ověření. Navrhuju tohle znění položky:
```
- Feed, přesměrování, interní prolinkování v CTA auditu — `audit.ts` je nevyjmenovává; ověřit u Kamila, jestli je audit e-shopu kontroluje. (Nastavení CDN je podle upřesněného pravidla rozpor a v CTA je opravené.)
```

**3. jak-ai-cituje-zdroje ř. 211 – OBSTOJÍ, ale jen pro citovanou větu.** Článek ve složce není, takže zbytek řádku a jeho okolí jsem neviděl. Věta „AI audity děláme s reálným testem napříč platformami“ odpovídá audit.ts ř. 293 (ChatGPT vlastním nástrojem, Přehled od AI přes Marketing Miner, Perplexity, Claude a Gemini ručně) a ř. 170. Neslibuje měření ani práci s daty klienta. Závěr platí, pokud zbytek řádku nepřidává průběžné sledování nebo data klienta.

**4. Nový zásadní nález z oprav – žádný.** Opravy nevnesly rozpor s audit.ts ani s monitoring-ai.txt.

Mimo blok jsem v nově přidaném článku našel jednu věc. CTA Packu v ai-seo-wordpress ř. 196 tvrdí, že Pack obsahuje „checklist pro nastavení SEO pluginu, vzor llms.txt, šablonu robots.txt pro AI user-agenty a kontrolní seznam pro WooCommerce“. Výčet obsahu v pack.ts (ř. 344–350) nic z toho neuvádí. Je to stejný typ chyby jako už zapsaná gsc-ai-segmenty-mereni ř. 239, takže patří ke kandidátovi na blok „CTA Packu slibuje obsah, který Pack nemá“. Tento blok to nezdržuje.

Blok oprav popisu auditu lze publikovat.
