# C5b — cílené ověření oprav kola 1 — blok oprav „CTA Packu slibuje obsah, který Pack nemá“ (23. 11. 2026)

> Auditor kola 1 (týž Claude subagent, pokračování v jeho kontextu) ověřil jedno kolo navíc své BLOCKERy, zpřísněné
> pravidlo s 9 nově opravenými místy a tipy s věcným dopadem; podklady `clanky-po-kole1/` a
> `zaznam-a-vyporadani-po-kole1.md` ve složce úkolu `Dokumenty/CODEX/z-clauda/2026-11-23-audit1-blok-cta-packu/`.
> Níže je výstup auditora beze změny.

Žádný bod neneobstojí. Všech 23 souborů se shoduje s pracovní kopií v repu a `updated` se v žádném nezměnil.

**1. BLOCKERy**
- **#1 lighthouse-ai-check ř. 232: OBSTOJÍ.** Otázka teď slibuje „srovnat obsah a strukturu hlavních typů stránek“, což Pack má. Kontroly Agentic Browsing věta výslovně odkazuje na postup v článku.
- **#2 person-data-pro-autora ř. 195: OBSTOJÍ.** Otázka už neslibuje Person-popis autora. Organization stojí v deliverables (pack.ts ř. 347), Person data odkazuje věta na příklad v článku.

**2. Warning #3: pravidlo a 9 míst**
- **Zpřísněné pravidlo (záznam ř. 29–35): OBSTOJÍ.** Pět vyjmenovaných podrobností jde dohledat v pack.ts:
  - krátká odpověď: ř. 156 a 309
  - filtry kategorie: ř. 145
  - informace o autorovi: ř. 156
  - kapitola k produktu: ř. 334, kde „Osmá kapitola…“ následuje po výčtu sedmi typů
  - prolinkování: ř. 134 a 167

  „Pasážová struktura“ a „checklist polí“ jsou výslovně vyřazené. Přibyla kontrola otázky nad CTA a toho, jestli „ukázky strukturovaných dat“ nesvádějí k typu mimo výčet.
- **produktove-stranky-pro-ai ř. 189: OBSTOJÍ.** Product a Offer odpovídají „Product s nabídkou“ (ř. 134), anti-pattern checklist je na ř. 349.
- **query-fan-out-ai-mode ř. 194 a rag-ai-vyhledavani ř. 162: OBSTOJÍ.** Vzory krátkých odpovědí pro všech sedm typů jsou na ř. 288–294.
- **filtry-faceted-navigace-eshopu ř. 159: OBSTOJÍ.** Kategorie s filtry je na ř. 145, téma „odkaz × ovládací prvek“ věta odkazuje na článek.
  - Neblokující poznámka: na otázku „kolik adres…“ odpovídá až Audit ve druhé větě. Čistší by bylo prohodit pořadí, Pack ale nic navíc neslibuje.
- **ai-generovany-obsah-viditelnost ř. 153: OBSTOJÍ.** Blogový článek s krátkou odpovědí a informacemi o autorovi je na ř. 156.
- **linkedin-pro-ai-citace ř. 188: OBSTOJÍ.** Otázka mluví o obsahu na vlastním webu, šablony krátkých odpovědí pro sedm typů jsou na ř. 288–294.
- **youtube-pro-ai-viditelnost ř. 171: OBSTOJÍ.** Popisy videí a stránky s přepisem jsou použití čtenářova obsahu, ne slib šablony v Packu.
- **llms-txt-navod ř. 142: OBSTOJÍ.** Věta se už nečte jako šablona llms.txt.
- **imageobject-strukturovana-data ř. 216: OBSTOJÍ.** Product a Article jsou v deliverables (ř. 347), ImageObject věta odkazuje na článek.
- **Nepřesnosti v záznamu (článků se netýkají):**
  - Vypořádání ř. 79 píše „všech 7 míst“, jmenovaných bylo 8, protože query-fan-out a rag jsem dal do jedné odrážky. Opravených je všech 8.
  - Tabulka „Opravená místa“ má u lighthouse (ř. 47) pořád zamítnutou otázku „opravy promítnout do šablon celého webu“. Staré znění zůstalo i na ř. 42, 48 a 50. Sjednotit se zněním z vypořádání (ř. 77–83).

**3. Tipy #4–7**
- **#4 ai-seo-wordpress ř. 196: OBSTOJÍ.** Nové znění sedí s FAQ (ř. 98) i deliverables (ř. 348).
  - Předání nesouladu v pack.ts adminovi ale na boardu zatím není. Board byl naposledy změněn ve 4:53 a poslední záznam je z runu 4. Záznam je potřeba zapsat do závěrečného zápisu bloku.
- **#5 autorsky-profil-pro-ai ř. 203: OBSTOJÍ.** Doplněno „mimo jiné Article a Organization“ a odkaz na článek kvůli Person datům se sameAs.
- **#6 jak-ai-cituje-zdroje ř. 209: OBSTOJÍ.** Úvodní věta se zúžila na strukturu stránek a strukturovaná data.
- **#7 test-viditelnosti-v-ai ř. 258: OBSTOJÍ.** Věta je omezená na sedm typů stránek a krátké odpovědi na nich.

**4. Nové nálezy: žádný zásadní.**
- Všech 23 CTA popisuje Pack jen položkami z pack.ts. Název „AI SEO Wireframe Pack“ a cena 1 490 Kč včetně DPH sedí a cena není v textu odkazu.
- Opravy z tipu #8 (stredni-cast, originalni-data) vycházejí ze znění pack.ts „pomáhá … AI lépe pochopit obsah“.
- Kontrola článků o konkrétních strukturovaných datech v celém repu (VideoObject, recenze, varianty, kategorie, feed) nenašla v CTA žádný typ mimo výčet.

**Závěr:** Blok lze publikovat. Před pushem jen zapsat na board předání nesouladu v pack.ts adminovi a volitelně sjednotit tabulku v záznamu.
