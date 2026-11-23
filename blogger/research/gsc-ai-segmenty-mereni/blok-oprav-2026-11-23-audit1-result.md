# Audit kola 1 (fakta) — blok oprav „popis Auditu AI viditelnosti v rozporu s audit.ts“ (23. 11. 2026)

> Auditor: nezávislý Claude subagent (čerstvý kontext) se zadáním `zadani-audit1.md` (auditor-system + osa fakta),
> protože Codex měl vyčerpaný limit do 24. 11. 2026 15:01 — rozhodnutí Kamila 23. 11. 2026. Ověřoval proti `audit.ts`,
> textu stránky monitoringu a `pack.ts` ve složce úkolu `Dokumenty/CODEX/z-clauda/2026-11-23-audit1-blok-cta-auditu/`.
> Čísla řádků míří na verzi článků po první opravě. Níže je výstup auditora beze změny.

VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Náhrady proti `audit.ts` sedí, ale zůstaly tři blockery. V jednom článku stojí výslovný slib měření u auditu, v jednom se slib měření přesunul na Monitoring v síle, kterou služba neunese, a v jednom zůstal slib měření v úvodu nabídky.

## Nálezy

**[BLOCKER] 1. gsc-ai-segmenty-mereni.mdx ř. 241: slib měření u auditu v témže článku**
Citace: „*Transparentně: AI audity děláme s měřením napříč vrstvami (Search Console, GA4, ruční test).*“
- Odporuje `audit.ts` ř. 230–231 (měření vědomě není vrstva, audit je jednorázový snímek) a ř. 491.
- Odporuje i opravenému CTA o dva řádky výš (ř. 239), které Search Console a GA4 dává Monitoringu.
- Hledání podle entity (`/audit/`, „Audit AI viditelnosti“) nepropojené „AI audity“ nezachytí. Tvrzení záznamu „zbytky jen mimo audit“ proto neplatí a stejná díra může být i v ostatních článcích korpusu.

Návrh: první větu vypustit.
```
*Transparentně: popis reportu vychází z veřejné nápovědy Search Console, ověřené k 5. září 2026; rozsah reportu i jeho dostupnost se mohou měnit. Jak vzniká obsah tohoto webu, popisujeme na [stránce autora](/autor/kamil/).*
```
Korpus doprohledat i na zmínky bez odkazu. V těchto 16 článcích dá příkaz 17 řádků k ručnímu přečtení a ř. 241 je mezi nimi:
```
grep -nEi "audit[^.]{0,80}(měř|GA4|Search Console|report|sledov|logy|logů|vašich dat)|(měř|GA4|Search Console|report|sledov|logy|logů|vašich dat)[^.]{0,80}audit" src/content/articles/*.mdx
```

**[BLOCKER] 2. blokovat-ai-odpovedi-gsc.mdx ř. 182: Monitoring „řeší“, co článek sám označuje za neměřitelné**
Citace: „…neumíte z vlastních dat odhadnout, řeší to průběžné měření: [Monitoring AI viditelnosti](/sluzby/monitoring-ai/) každý měsíc spojí zmínky v AI odpovědích se zobrazeními ze Search Console a návštěvami z GA4.“
- Zdroje a kadence odpovídají `monitoring-ai.txt` ř. 6 a 26.
- Článek ale na ř. 108–115 a 176 tvrdí, že přínos generativních funkcí Googlu se z běžně dostupných dat oddělit nedá. Search Console je vykazuje souhrnně (ř. 112) a jen jako zobrazení bez kliků (gsc-ai-segmenty-mereni ř. 232).
- Na ř. 124 článek sám upozorňuje, že návštěvy z asistentů nejsou návštěvy z Googlu.
- Monitoring stojí na stejných datech, takže tenhle přínos taky neoddělí. „Řeší to“ vynechává podmínku o limitu dat Googlu, a z pravdivého výčtu zdrojů se tak stává slib, který služba nesplní.

Návrh:
```
Pokud je pro vás hlavní problém právě to, že přínos návštěv z AI odpovědí neumíte z vlastních dat odhadnout, pomůže aspoň k rámcovému odhadu průběžné měření: [Monitoring AI viditelnosti](/sluzby/monitoring-ai/) každý měsíc spojí zmínky v ChatGPT a v Přehledu od AI se zobrazeními ze Search Console a s návštěvami a konverzemi z GA4. Přínos samotných AI odpovědí Googlu ale neoddělí ani on — z běžně dostupných dat to nejde. Výchozí stav, tedy co o vás AI odpovědi říkají dnes a z jakých stránek čerpají, ukáže **[Audit AI viditelnosti](/audit/)** za 3 600 Kč bez DPH. Hotové vzory stránek najdete v [AI SEO Wireframe Packu](/pack/).
```

**[BLOCKER] 3. ai-roboti-zatez-webu.mdx ř. 111: slib měření zůstal v úvodu nabídky**
Citace: „…ale nebudete vědět, co pustit, co omezit a jak to propsat do měření, je to přesně chvíle, kdy má smysl si na to někoho vzít.“
- Věta je můstek do CTA na ř. 115 a jediná nabídka za ním je audit.
- Oprava vyškrtla „měření“ z věty s odkazem, ale důvod „propsat do měření“ v nabídkové sekci nechala. Čtenář tak dál čte, že s měřením pomůže audit, což odporuje `audit.ts` ř. 230–231.

Návrh:
```
Jestli v těch číslech uvidíte rozdíly mezi platformami, ale nebudete vědět, co pustit a co omezit, je to přesně chvíle, kdy má smysl si na to někoho vzít.
```

**[WARNING] 4. informacni-obsah-v-ai-ere.mdx ř. 156: úvodní otázka CTA slibuje odpověď, ke které článek potřebuje data klienta**
Citace: „**Nevíte, které články má smysl přepsat?** [Audit AI viditelnosti](/audit/) … projde obsah z pohledu AI odpovědí…“
- Článek o přepisu rozhoduje nejdřív podle poptávky ze Search Console: ř. 58 („Zobrazení a pozice v Search Console za poslední čtvrtletí“), ř. 134 (chyba „Přepsat článek, který nemá zobrazení“) a ř. 154 („Nejdřív zobrazení, pak pozice, pak dotazy — a teprve potom text“).
- Audit s daty klienta nepracuje, takže na tuhle otázku podle metody článku neodpoví. Popis auditu za otázkou je už správně.

Návrh:
```
**Nevíte, jestli má AI ve vašich článcích co citovat?** [Audit AI viditelnosti](/audit/) za 3 600 Kč bez DPH projde obsah z pohledu AI odpovědí — krátké odpovědi, aktuálnost a obsahové mezery proti tomu, na co se lidé ptají — a dá vám prioritní seznam úprav.
```

**[WARNING] 5. za-jak-dlouho-se-projevi-ai-seo.mdx ř. 204: „změříme to na vašich datech“ těsně nad CTA auditu**
- Věta přechází bez oddělovače do CTA na ř. 206.
- První osoba množného čísla se čte jako závazek agentury měřit na datech klienta, a ten audit nemá.
- CTA samo měření správně nechává klientovi („co po úpravách sledovat“), proto jen WARNING.

Návrh:
```
…a poctivá odpověď na otázku „kdy“ zní: ukážou to až vaše vlastní data.
```

**[WARNING] 6. ai-seo-b2b.mdx ř. 30 (FAQ, propisuje se i do FAQPage): rozsah Monitoringu**
Citace: „…na systematické sledování slouží [nástroje na AI viditelnost](/blog/ai-seo-nastroje/) nebo [Monitoring AI viditelnosti](/sluzby/monitoring-ai/).“
- Odpověď mluví o citacích v ChatGPT, Perplexity, Claude a Gemini.
- Monitoring podle `monitoring-ai.txt` ř. 26 měří zmínky jen v ChatGPT a v Přehledu od AI, k tomu zobrazení ze Search Console a Bingu a návštěvy z GA4.

Návrh:
```
…na systematické sledování slouží [nástroje na AI viditelnost](/blog/ai-seo-nastroje/) nebo [Monitoring AI viditelnosti](/sluzby/monitoring-ai/), který každý měsíc měří zmínky v ChatGPT a v Přehledu od AI.
```
Stejné zpřesnění („zmínky v ChatGPT a v Přehledu od AI“) patří i sem:
- mereni-ai-mode-limity ř. 161 („zmínky v AI odpovědích“),
- gsc-ai-segmenty-mereni ř. 239 („z odpovědí AI“). Tam věta stojí hned po shrnutí, podle kterého ChatGPT, Perplexity a Claude vyžadují ruční test (ř. 234).

**[WARNING] 7. aeo-optimalizace-v-praxi.mdx ř. 450: druhý název produktu a naznačená implementace**
Citace: „AEO playbook se nejlépe škáluje, když je součást **kombinovaného AI viditelnostního auditu** — ne jako jednorázová úprava 5 stránek. … kde má AEO největší ROI…“
- Tučný „kombinovaný AI viditelnostní audit“ funguje jako druhý název téhož produktu v téže větě. To je vada bloku „jiný název“.
- „Playbook jako součást auditu“ naznačuje, že audit playbook provede. Implementace ale podle `audit.ts` ř. 507 součástí auditu není.
- ROI audit nepočítá, dává dopad × náročnost.

Návrh:
```
AEO playbook se nejlépe škáluje podle priorit napříč webem — ne jako jednorázová úprava 5 stránek. Pokud máte web s **20+ URL v top 10** a chcete vědět, kde má AEO největší dopad, pomůže [Audit AI viditelnosti](/audit/) za 3 600 Kč bez DPH:
```

**[WARNING] 8. ai-search-trendy-cesko-2026.mdx ř. 428: nezávazná konzultace vypadá jako bezplatný průchod auditem**
Citace: „První [konzultace](/kontakt/) nezávazná — projdeme to nad vaším konkrétním webem, ne nad obecnou metodikou.“
- „To“ odkazuje na čtyři body placeného auditu (ř. 423–426), takže věta slibuje jejich průchod nad webem zdarma.
- V aeo-optimalizace-v-praxi ř. 456 a aio-strategie ř. 371 autor stejný typ věty zkrátil, tady zůstal.

Návrh:
```
První [konzultace](/kontakt/) nezávazná.
```

**[WARNING] 9. Pravidlo bloku (zaznam-bloku.md, Postup): nastavení CDN si odporuje s provedenou opravou**
Citace: „Co `audit.ts` nevyjmenovává, ale nevylučuje (feed, přesměrování, nastavení CDN, interní prolinkování), zůstává.“ Proti tomu content-signals-rizeni-ai-botu ř. 192, kde „nastavení CDN“ z CTA vypadlo.
- Pro to, co audit kontroluje, hranice obstojí, protože `audit.ts` rozsah přizpůsobuje webu (ř. 87, 350).
- U výstupů je `audit.ts` uzavřený výčet (ř. 296–330) a autor ho tak správně použil.
- Nastavení CDN je konfigurace v účtu klienta, tedy stejný druh slibu jako logy, které blok vyřadil jako data klienta. Pravidlo to má říct výslovně.
- Položku fronty „Feed, přesměrování, CDN…“ je potřeba rozdělit: CDN patří k tomuto typu oprav, zbytek ověřit u Kamila.
- Postup má navíc kontrolovat celou nabídkovou sekci, ne jen větu s odkazem (nálezy 3–5).

Návrh doplnění pravidla:
```
Slib, který vyžaduje přístup do systémů nebo účtů klienta (logy, nastavení CDN, Search Console, GA4), je rozpor s audit.ts stejně jako měření. Kontroluje se celá nabídková sekce včetně úvodní věty a úvodní otázky, ne jen věta s odkazem na /audit/.
```

**[TIP] 10. ai-search-trendy-cesko-2026.mdx ř. 423:** „Perplexity a další platformy ručně“ zpřesnit podle `audit.ts` ř. 293 na „Perplexity, Claude a Gemini ručně“.

**[TIP] 11. mereni-ai-mode-limity.mdx ř. 161:**
- „Výchozí stav před prvním měřením“ není přesné, protože Monitoring výchozí stav sám měří v prvním měsíci (`monitoring-ai.txt` ř. 23). Lepší je formulace z `audit.ts` ř. 242: „Výchozí stav, proti kterému půjde měřit posun, ukáže…“.
- Převzaté „to dnes neumí nikdo“ je absolutní a bez data. Článek (ř. 153) unese „z běžně dostupných dat to ke dni vydání nejde“. Patří to do příštího refreshe, ne do tohoto bloku.

**[TIP] 12. Mimo blok, do fronty:**
- geo-optimalizace ř. 143 a ř. 398 pojmenovávají postup, který čtenář dělá sám, přesně „Audit AI viditelnosti“, včetně „Po měsíci opakovat“ (ř. 153). CTA na ř. 418 přitom staví „vlastní audit“ proti placenému. Název postupu koliduje s názvem produktu.
- Podobně vlastní rámce popsané jako postup „u klientů“: aeo ř. 303 (AEO Coverage Score), aio ř. 28 a 69 („Z našich auditů… L1–L2“), geo ř. 121–127 (vrstva měření). Popisem auditu nejsou, ale když z CTA zmizely, čtenář si je s auditem může spojit.

## Co je v pořádku
- Ve všech 24 náhradách sedí s `audit.ts`:
  - název, i ve skloňovaných tvarech,
  - cena 3 600 Kč bez DPH,
  - výstup do 5 pracovních dní od úhrady,
  - meeting 30–60 minut,
  - vrstvy a výstupy (prioritní tabulka dopad × náročnost × kdo, 30denní plán, krátké odpovědi, strukturovaná data, důvěryhodnost, z jakých stránek AI čerpá).
- Odstraněné sliby se do nového znění nevrátily: propojení GSC a GA4, reporting, KPI dashboard, logy, RACI, 90denní plán, AEO Coverage Score, přepis odpovědí, bezplatné průchody.
- Schůzka 60 minut u auditu nikde nezůstala; seo-pro-eshopy ř. 201 a aio ř. 177 se auditu netýkají.
- U Monitoringu sedí zdroje, měsíční kadence i report s `monitoring-ai.txt` (výjimky jsou nálezy 2 a 6). Cena monitoringu se nikde neobjevuje. Cena auditu není v textu odkazu ani v nadpisu.
- Neposunuté `updated` problém není. Mění se obchodní text CTA, ne obsah článku, a posun by hlásil revizi obsahu, která neproběhla. Platí to i po opravě nálezů 1–9 a sedí to s precedenty uvedenými v záznamu.
- CTA Packu v gsc-ai-segmenty-mereni ř. 239 je do fronty odložené správně: `pack.ts` checklist měření, GA4 ani UTM neuvádí.
- Osa 5: nová znění nemají neukotvené časové údaje a odpovídají revizi `audit.ts` z 16. 9. 2026 a stránce monitoringu ze 14. 9. 2026.
