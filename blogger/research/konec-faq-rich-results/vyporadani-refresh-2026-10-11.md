# Vypořádání auditů — refresh `konec-faq-rich-results` (11. 10. 2026)

## Kolo 1 — osa faktů (gpt-5.5, 11. 10. 2026)

Verdikt: OPRAVIT PŘED PUBLIKACÍ — 3× BLOCKER, 3× WARNING, 4× TIP (TIPy jen potvrzují: ohlášené kroky
nejsou psané jako provedené, HowTo příklad drží rozsah blogu, CTA sedí s galerií, aktuálnost v pořádku).

### Zapracováno

| # | Nález | Co se změnilo | Z17 |
|---|---|---|---|
| B1 | Chybí „autoritativní“ (blog 2023: „well-known, authoritative government and health websites“) | 6× „známé a autoritativní vládní a zdravotnické weby“: `answer`, FAQ 1, FAQ 6, úvod, tabulka (8. 8. 2023), shrnutí | grep `vládní` → 7 výskytů: 6 s „autoritativní“, 1 v tabulce u 7. 5. 2026 („konec i pro vládní a zdravotnické weby, které ho do té doby měly“ — odkazuje na tutéž skupinu) |
| B2 | „Nevyužitá data neškodí“ bez podmínky souladu s obsahem | Ve větách, které se dají citovat samostatně, nově „strukturovaná data, která odpovídají obsahu stránky, podle Googlu Vyhledávání neškodí“: `answer`, úvod, shrnutí. Zúžení je bezpečné — výrok z 2023 podmínku nemá, plyne z obecných pokynů (sd-policies), takže věta tvrdí méně, ne víc. Přímé parafráze výroku z 2023 (sekce 2, sekce 3, FAQ 2, tabulka) zůstávají s atribucí „Google v roce 2023 napsal“ | grep `neškod` → 4: 3 s podmínkou, 1 v tabulce s datem (2023) |
| B3 | „vyhledávač i nástroj AI ho mohou převzít stejně jako jakýkoli jiný text“ — příliš široké | „Ten čte člověk a pracuje s ním vyhledávač. Nástroj AI ho může použít, jen když stránku smí a umí načíst — a že by mu v tom FAQPage pomáhal, z dokumentace neplyne.“ | grep `převz` → 0 |
| W1 | „dokumentace neuvádí“ silnější než prohledání (OpenAI, Perplexity, Anthropic = nenalezeno) | `answer`, úvod, FAQ 3, shrnutí → „jsme v dokumentaci nenašli“; záhlaví tabulky „Co neuvádí“ → „Co jsme v ní nenašli“ | grep `neuvád` → 0; `nedoklád` → 1 (nadpis H2 „a co dokumentace nedokládá“ — výrok o dokladech, ne o obsahu dokumentace; ponecháno) |
| W2 | „jen už nic nezobrazí“ bez rozsahu | úvod: „jen už v něm [Vyhledávání] nevytvoří rozšířený výsledek“; FAQ 1: „jen už ve Vyhledávání Google nevytvoří rozšířený výsledek“; tabulka (Google): „nemají viditelný účinek (2023)“ — doslova „no visible effects in Google Search“ | grep `nezobrazí` → 0 |
| W3 | Tabulka 7. 5. 2026 bez „ve Vyhledávání Google“ | „FAQ rich results se ve Vyhledávání Google nezobrazují vůbec (changelog 8. 5.)“; FAQ 6 „ve Vyhledávání Google nezobrazuje nikomu“ | — |

### Nezapracováno + důvod

Nic — všechny nálezy kola 1 měly oporu v briefu (podmínky B3) a jsou zapracované.

## Kolo 2 — osa jazyka a struktury + kontrola vypořádání (gpt-5.5, 11. 10. 2026)

Verdikt: OPRAVIT PŘED PUBLIKACÍ — 1× BLOCKER (W1 z kola 1 přežil v `description`), 2× WARNING, 2× TIP.
Kontrola vypořádání: B1, B2, B3, W2, W3 „sedí“; W1 sedí v těle, ne ve frontmatteru.

### Zapracováno

| # | Nález | Co se změnilo | Z17 |
|---|---|---|---|
| B (W1) | `description` „co o něm Google neříká“ — silné tvrzení o obsahu dokumentace | `description`: „… Co to znamená pro FAQPage, kdy ho nechat a kdy smazat.“ (135 znaků). Návrh auditora „co jsme v dokumentaci nenašli“ nepoužit — v meta popisu nečitelné; tvrzení o dokumentaci nese tělo článku | grep `neříká` → 0; `neuvád` → 0 |
| W1 | H2 bez klíčového pojmu | „Časová osa FAQ rich results — omezení 2023, konec 2026“; „FAQPage nechat, nebo odstranit — rozhoduje soulad s obsahem a údržba“; „Shrnutí konce FAQ rich results — o datech rozhoduje údržba, o FAQ čtenář“ (návrh „data podle údržby“ nepoužit — nesrozumitelné) | — |
| W2 | FAQ 5 nesebestačná („při ukončení“ čeho) | „Při ukončení FAQ rich results Google ohlásil, …“ | — |
| T1 | „o schema.org nic nenašli“ — nesrozumitelné | FAQ 3 a tabulka: „nenašli zmínku o strukturovaných datech podle schema.org“; úvod „platný typ ze slovníku schema.org“ | grep `schema.org` → 5, všechny v kontextu typu nebo strukturovaných dat |
| T2 | HowTo bez vysvětlení | H2 „HowTo rich results skončily už v roce 2023“; první věta „HowTo rich results, tedy rozšířené výsledky pro návody krok za krokem, …“ | — |

### Nezapracováno + důvod

Nic.

## C5b — doověření zásadních nálezů (gpt-5.5, 11. 10. 2026)

| Nález | 1. kolo | Oprava | 2. kolo |
|---|---|---|---|
| B1 „autoritativní“ | OBSTOJÍ | — | — |
| B2 podmínka souladu s obsahem | **NEOBSTOJÍ** — přímé parafráze výroku z 2023 (sekce 2, tabulka, FAQ 2) bez podmínky | výrok z 2023 podmínku nemá, proto ne do parafráze, ale **hned za ni jako samostatná věta s odkazem na obecné pokyny**: sekce 2 „Podmínkou je, že data odpovídají obsahu stránky, jak vyžadují obecné pokyny Googlu ke strukturovaným datům.“; tabulka „…která sedí s obsahem, neškodí…“; FAQ 2 „; podmínkou je, že odpovídají obsahu stránky.“ | **OBSTOJÍ** |
| B3 převzetí textu nástrojem AI | OBSTOJÍ | — | — |
| `description` „Google neříká“ | OBSTOJÍ | — | — |

Žádný nález nešel do třetího kola, eskalace není potřeba.

## C6 — jazyková kontrola (11. 10. 2026)

- **Mechanický průchod** (`jazyk-check.py`, slovník v73, 275 pravidel): **0 nálezů**.
- **LLM průchod** (gpt-5.4, článek + celý slovník): 4 nálezy, všechny jednorázové formulace (do slovníku
  se nezapisují, nejsou to vzorce):

| Nález | Oprava |
|---|---|
| tabulka „dokumentace FAQ smazaná“ — telegrafická vazba bez slovesa | „Google smazal dokumentaci FAQ, stará adresa přesměrovává na changelog“ |
| „otázky zákazníků u produktu“ | „otázky zákazníků k produktu“ |
| „Kroky, které má článek ukázat“ — nejasné, záměr × obsah | „Kroky postupu od té doby píšeme jen do textu, kde je čtenář vidí.“ |
| „Sekce, která odpovídá na skutečné dotazy, dál pomáhá čtenářům.“ | „Sekce, která odpovídá na skutečné dotazy čtenářů, jim dál pomáhá.“ |

Po opravách znovu: `kontrola-komponent.py` 0 nálezů, `jazyk-check.py` 0 nálezů.

## Kontrola na mobilu (375 px, živá stránka po prvním deployi)

Stránka do strany neroluje (`scrollWidth` 375), tabulka časové osy se posouvá ve vlastním rámu a klíčové
sloupce „Datum“ a „Co se stalo“ jsou vidět celé. **Obě srovnávací tabulky (`CompareTable`) ale byly širší
než sloupec textu** (373 a 341 px proti 335 px) — pravý sloupec „Co jsme v ní nenašli“ byl useknutý
(„Že Googl…“, „Cokoli konkrétn…“). Příčina: nejdelší slova (`Vyhledávání` v tučném popisku,
`strukturovaných`, `konkrétního`, `rozšířenému`) určují nejmenší šířku sloupců.

Oprava jen ve znění (komponentu needituji), změřeno v prohlížeči před úpravou zdroje — nejmenší šířka
tabulek po opravě **319 a 316 px**, tedy vejdou se i na telefony s šířkou 360 px (sloupec 320 px):
popisek „Vyhledávání Google“ → „Google“ (slovo Vyhledávání přesunuto do buňky), „ChatGPT, Perplexity,
Claude“ → „AI asistenti“ (jména v buňce), „Cokoli konkrétního o FAQPage“ → „Cokoli o FAQPage“,
„Data vznikají automaticky…“ → „Data se generují…“, „…kvůli rozšířenému výsledku“ → „…kvůli výsledku,
který už není“. Podmínka z B2 („která sedí s obsahem“) i forma „jsme nenašli“ z W1 zůstávají.
