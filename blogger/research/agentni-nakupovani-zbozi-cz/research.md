# Research — agentni-nakupovani-zbozi-cz (run 8 série 10 runů, 26. 11. 2026)

Řádek plánu: `agentni nakupovani zbozi cz` — „Agentní nakupování na Zboží.cz: kdo se zapojí a co musí e-shop umět“, analysis.
Podmínka pokynu „psát po zveřejnění Upgates verze 37“ **splněna**: verze 37 vyšla 11. 11. 2026, 37.1 24. 11. 2026
(upgates.cz/a/aktualizace-systemu-verze-37 a …-37-1). Přeskočené řádky: `agregatorova jednotka ve vyhledavani` (run 6).

## Co je ověřeno a čím (Z16)

| Vrstva | Čím | Datum |
|---|---|---|
| **Dokumentace** | Specifikace UCP (ucp.dev, verze 2026-01-11, overview); Google Developers Blog „Under the Hood: Universal Commerce Protocol (UCP)“ (11. 1. 2026); OpenAI „Buy it in ChatGPT: Instant Checkout and the Agentic Commerce Protocol“ a tisková zpráva Stripe (29. 9. 2025); Upgates — oznámení aktualizace 37 (11. 11. 2026) a 37.1 (24. 11. 2026). Sekundární: MediaGuru 1. 9. 2026 (test Seznamu na Zboží.cz, podle tiskových informací Seznamu), MediaGuru 20. 10. 2026 (Shoptet na Reshoperu: pilot UCP), TechCrunch 15. 10. 2026 (Universal Cart v USA), Lupa 18. 2. 2026 (UCP a ACP, výklad). | 26. 11. 2026 |
| **Rozhraní** | — (agentní nákup na Zboží.cz jsem nezkoušel; do Skliku ani Centra prodejce jsem se nepřihlašoval) — **žádné tvrzení o vzhledu ani průběhu v rozhraní kromě popisu Seznamu (dvě kliknutí, přihlášený uživatel)** | — |
| **Měření** | — (nic se neměřilo) | — |
| **Nelze ověřit** | (1) podmínky pro obchodníky v nápovědě Skliku / Zboží.cz — nápovědu k agentnímu nákupu jsem nenašel; (2) jaká data o zákazníkovi a objednávce Seznam obchodníkovi předává; (3) „řádově tisíce e-shopů do konce roku“ (pokyn plánu, Lupa 1. 10.) — zdroj nenalezen (2 hledání), nepoužívám; (4) kdy Shoptet agentní nákup zpřístupní (zdroj si sám odporuje); (5) tisková zpráva Seznamu v primárním znění — jen přes MediaGuru. | — |

## Teze z plánu proti zdrojům

| Teze v pokynu | Zjištění | Co píšu |
|---|---|---|
| TZ Seznamu 31. 8. 2026: test na Zboží.cz, nákup dvěma kliky, UCP, nákup u obchodníka; Shopify, Shoptet se připravuje | MediaGuru 1. 9. 2026 to potvrzuje: přihlášení uživatelé, bez opakovaného zadávání údajů a řešení dopravy, dvě kliknutí, UCP, transakce u obchodníka „který nad ní podle Seznamu zachovává kontrolu“; první fáze e-shopy připravené na technologii, v Česku např. Shopify; zapojení Shoptetu se připravuje; rozšíření na další služby Seznamu | potvrzeno, datum podle MediaGuru (1. 9.) |
| Lupa 1. 10.: Seznam čeká do konce roku řádově tisíce e-shopů, platbu schvaluje člověk | nenalezeno | nepoužívám |
| MediaGuru 20. 10.: Shoptet testuje UCP, spuštění „v řádu týdnů“ i „příští rok“ — rozpor | potvrzeno ve stejném článku: „v příštím roce agentní nakupování spustí“ a „širší zpřístupnění … v řádu týdnů“; pilot s prvními obchodníky; výběr např. na Zboží.cz, dokončení přes předvyplněnou objednávku na e-shopu; 22 % respondentů by svěřilo nákup AI | oba údaje s výslovným rozporem, bez termínu |
| Upgates v žádném zdroji, psát po v37 | v37 (11. 11.): podpora OpenAI Ads a OpenAI Pixelu, novinky v MCP, stav produktu do feedů; agentní nákup ani UCP v oznámení **nejsou**; 37.1 (24. 11.) bezpečnost API/FTP | „v oznámení verzí 37 a 37.1 agentní nákup není“ |
| Universal Cart (Google, 15. 10. 2026, jen USA) — jeden odstavec | TechCrunch 15. 10. 2026: dostupný pro uživatele v USA, představen na I/O v květnu; ukládá produkty z více obchodů | jeden odstavec, sekundární zdroj s atribucí |
| UCP a ACP obecně jako sekce; .well-known nechat jinému řádku | UCP: business = Merchant of Record, objev profilu na `/.well-known/ucp`, schopnosti odpovídají nástrojům MCP, transporty REST, MCP, A2A, licence Apache 2.0; ACP: OpenAI + Stripe 29. 9. 2025, Instant Checkout pro uživatele v USA (Etsy, jednotlivé položky) | sekce; měření `/.well-known/` ne |
| Odkaz /blog/webmcp-pro-ai-agenty/ neexistuje | — | neodkazovat |

## Podmínky u tvrzení o cizích platformách

| Tvrzení | Podmínky | Konzistence | Výjimky | Primární zdroj |
|---|---|---|---|---|
| Agentní nákup na Zboží.cz | test; přihlášený uživatel; do první fáze se zapojily technologicky připravené e-shopy (např. některé na Shopify) | běžné nabídky na Zboží.cz: registrace, feed, kredit (podmínky běžné inzerce, ne úplná pravidla pilotu) | úplné podmínky přijetí dalších e-shopů nezjištěny — samotné UCP ani Shopify zapojení nezaručují; rozšíření na další služby Seznamu bez termínu; průběh autorizace nepopsán | MediaGuru 1. 9. 2026 (sekundární, podle Seznamu) |
| Transakce u obchodníka | podle Seznamu obchodník zachovává kontrolu; v UCP je business Merchant of Record s finanční odpovědností a vlastnictvím objednávky | — | jaká data Seznam předává: v použitých zdrojích nezjištěno | MediaGuru 1. 9. 2026 (sekundární); ucp.dev overview |
| Shoptet a agentní nákup | pilot UCP s prvními obchodníky | — | rozpor „v řádu týdnů“ × „v příštím roce“ v témž článku | MediaGuru 20. 10. 2026 |
| Upgates | oznámení v37 a 37.1 agentní nákup ani UCP **nezmiňují** (absence zmínky ≠ doložená nepodpora) | — | v37 uvádí OpenAI Ads a Pixel (kde a za jakých podmínek kampaň spustit, neupřesňuje), MCP pro správu e-shopu | upgates.cz (11. 11. a 24. 11. 2026) |
| UCP | otevřený standard, Apache 2.0, profil `/.well-known/ucp` (lze cachovat), obchod vybírá z průniku schopností; primární transport REST, dále MCP, A2A, Embedded Protocol | schopnosti se mapují 1:1 na nástroje MCP, ale MCP server obchod vystavit **může** (volitelné) | verze specifikace se datují | ucp.dev 2026-01-11 |
| Google a UCP | referenční implementace pro režim AI a Gemini: aktivní Merchant Center, produkty způsobilé pro nákup, formulář zájmu, integrace UCP podle pokynů | — | ne automaticky pro každý e-shop s UCP; územní dostupnost neověřena | Google Developers Blog 11. 1. 2026 |
| ACP / Instant Checkout | OpenAI + Stripe, představeno 29. 9. 2025; uživatelé ChatGPT Plus, Pro a Free v USA, podporované produkty amerických prodejců Etsy, jedna položka (podmínky spuštění, ne stav k 26. 11. 2026) | vývoj od března 2026 podle článku webu `nakupovani-pres-ai` (podle zpravodajství přesun nákupu do propojených aplikací) | — | openai.com/index/buy-it-in-chatgpt; stripe.com newsroom |
| Universal Cart | oznámení TechCrunch 15. 10. 2026: dostupný uživatelům v USA | — | sekundární zdroj; dostupnost v Česku nepotvrzena (ne prokázaná nedostupnost) | TechCrunch 15. 10. 2026 |

## Interní odkazy

- `/blog/zbozi-cz-pro-ai/` — feed a registrace na Zboží.cz (refresh 22. 11. 2026; zastaralé „převážně anglicky“ v něm už není).
- `/blog/nakupovani-pres-ai/` — vývoj nákupu v ChatGPT (ve frontě jen otázka k CTA pro Kamila, ne věcná vada).
- **Vynechán** `ai-nakupni-agenti` — FAQ „nákupní funkce … převážně anglicky“ už neplatí (Refresh 8 ve frontě).
- `/blog/reklama-v-ai-odpovedich/` — Upgates 37 přidává podporu OpenAI Ads (souvislost).

## FAQ — odkud otázky jsou

Vrstva 4 (praxe): co se e-shop ptá — co to je, jestli se zapojí na Shoptetu / Upgates, kdo je prodávající, rozdíl UCP a ACP.
