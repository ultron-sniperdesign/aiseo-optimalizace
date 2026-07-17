# Research — Chybná informace o značce v AI odpovědích

**Datum:** 2026-07-11
**Cílová kategorie:** analysis
**Slug:** `chybna-informace-o-znacce-v-ai`
**Cílové KW:** chybná informace v ai / ai o nás lže / nepravdivé informace ai / oprava informací v ai

## 1. Definice (krátká odpověď)

- Situace: AI odpověď uvede o firmě **zastaralý nebo nepravdivý údaj** — starou cenu, zaniklou službu, špatnou otvírací dobu, cizí referenci, vymyšlený fakt.
- **Model nejde opravit přímo.** Není tam tlačítko „upravit". Nedá se zavolat a nechat si to přepsat.
- Co jde: **opravit a zpřesnit zdroje**, ze kterých se to bere, a **doplnit vlastní jasnou odpověď** tam, kde chybí.
- Účinek je nepřímý a **trvá to** — nelze slíbit, že se to opraví, ani kdy.

## 2. Proč to vzniká (příčiny — rozlišit!)

Tři různé příčiny, každá s jiným řešením:

1. **Zastaralý údaj** — model/zdroj zná starší verzi (stará cena, starý název, zrušená služba). Nejčastější a nejlépe řešitelné.
2. **Chybný nebo cizí zdroj** — někde na webu je o vás nepřesná informace (starý katalog, agregátor, zaniklý profil, článek s chybou). Model to bere odtud.
3. **Konfabulace** — model si údaj vymyslí, protože v datech chybí. Typicky když o vás na webu skoro nic není. Řešení: doplnit jasnou odpověď.

→ Bez určení příčiny nelze zvolit postup. To je hlavní pointa článku.

## 3. Co reálně jde dělat

- **Opravit vlastní web** — jasně, na jednom místě, aktuálně (ceny, služby, kontakt). Viz aktualizace-obsahu-pro-ai.
- **Doplnit chybějící odpověď** — když se model „domýšlí", často proto, že odpověď nikde není.
- **Opravit cizí zdroje** — kontaktovat provozovatele katalogu/článku, aktualizovat firemní profily, opravit Wikidata/Wikipedii, pokud tam údaj je (znacka-na-wikipedii-pro-ai).
- **Konzistence** — stejný údaj všude stejně; rozpory zvyšují šanci na chybu.
- **Zpětná vazba v nástroji** — některé AI systémy nabízejí nahlášení špatné odpovědi. Je to legitimní krok, ale **bez záruky a bez viditelného procesu**.
- **Měřit** — opakovaně testovat (test-viditelnosti-v-ai), ne jednorázově.

## 4. Co NEjde / co nedělat

- **Nejde „opravit model"** — žádný veřejný proces na úpravu odpovědi o konkrétní firmě.
- **Nejde to hned** — i po opravě zdroje trvá, než se to promítne; kadence není veřejná.
- **Nedá se to zaručit** — ani po správně provedených krocích.
- **Nezahlcovat web opravnými texty** („NENÍ pravda, že…") — může to být kontraproduktivní a čtenáři to nepomůže.
- **Nevytvářet falešné zdroje** kvůli přebití chyby — riziko a etický problém.
- **Nepanikařit z jedné odpovědi** — odpovědi kolísají; ověřit víckrát a v různých systémech.

## 5. Právní rovina (opatrně!)

- U vážných případů (poškozující nepravdivé tvrzení) může přicházet v úvahu právní cesta vůči provozovateli zdroje nebo služby.
- **Nedávat právní rady.** Jen zmínit, že u závažného poškození je namístě konzultace s právníkem. Nic o GDPR/žalobách konkrétně.

## 6. Praktický postup (rámec, ne slib)

1. **Zdokumentovat** — screenshot, dotaz, datum, systém. Odpovědi kolísají, tak víc pokusů.
2. **Určit příčinu** — zastaralé / cizí zdroj / konfabulace.
3. **Opravit zdroj** — vlastní web nebo cizí, podle příčiny.
4. **Doplnit jasnou odpověď** na vlastním webu (krátká odpověď, konzistentně).
5. **Nahlásit** v daném systému, pokud to jde.
6. **Znovu testovat** s odstupem — a počítat s prodlevou.

## 7. CZ specifika

- Menší datová základna → **vyšší riziko konfabulace** u českých firem (viz ai-generovany-obsah-viditelnost, tam už to zmiňujeme).
- Staré české katalogy a agregátory drží neaktuální údaje dlouho.
- Firmy.cz, mapové profily, oborové katalogy — často zdroj zastaralých údajů.

## 8. Brand voice notes

- „halucinace" → **konfabulace / vymyšlený údaj** (zavedeno v ai-generovany-obsah-viditelnost — držet konzistenci).
- „reputation management" → **péče o reputaci**; „takedown" → nepoužívat; „prompt" → dotaz.
- **Hedge tvrdě**: nikde neslibovat opravu, termín ani účinnost. Rozlišit „co jde zkusit" vs. „co je zaručeno" (nic).
- Nedávat právní rady.
- Answer + první odstavec = samostatná definice.

## 9. Interní odkazy (ověřeno, existují)

- `ai-brand-mentions` (zmínky značky — párový)
- `test-viditelnosti-v-ai` (jak to opakovaně testovat)
- `znacka-na-wikipedii-pro-ai` (Wikidata/Wikipedie jako zdroj)
- `jak-ai-cituje-zdroje` (odkud se to bere)
- `aktualizace-obsahu-pro-ai` (aktuálnost vlastního webu)
- `ai-generovany-obsah-viditelnost` (konfabulace)
- `e-e-a-t-pro-ai` (důvěryhodnost)

## 10. CTA pozice

- Analysis → primárně **Audit 9 990 Kč** (zjistí, co o vás AI říká a odkud to bere).
- Sekundárně **Pack 1 490 Kč** (struktura stránek s jasnými odpověďmi).
- Transparentně: Sniperdesign Zlatý partner Upgates od 2016.

## Zdroje
- Praxe: zastaralé údaje v katalozích a agregátorech
- Konfabulace modelů u málo pokrytých entit
- Zpětná vazba v AI nástrojích (bez veřejného procesu a záruky)
