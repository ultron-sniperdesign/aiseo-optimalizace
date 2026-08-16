# Research — ai-mode-jako-vychozi-rezim (15. 8. 2026)

Řádek: `ai mode jako vychozi rezim` — „Je AI Mode výchozí režim vyhledávání? Co je doložené". Priorita AI Mode, kadence: nový článek.

## Spouštěč

V přehledech se v červenci 2026 objevilo, že Google „nahradil vyhledávání AI" a že **každý dotaz teď vrací AI odpověď**. Kdyby to platilo, mění to zadání pro každý web. Ověřoval jsem to u primárního zdroje.

## Co Google skutečně označil za výchozí

**Model uvnitř AI Mode, ne režim.**

| Přesné znění | Co je výchozí | Datum |
|---|---|---|
| „we are rolling out Gemini 3 Flash as the default model for AI Mode globally" | **model** v AI Mode | 17. 12. 2025 |
| „upgrading Search with Gemini 3.5 Flash … as the new default model in AI Mode for everyone globally" | **model** v AI Mode | 19. 5. 2026 |

Obě věty mluví o *default model **in/for** AI Mode*. Ani jedna neříká, že by se AI Mode stal výchozím režimem Vyhledávání.

## Co Google říká o běžných výsledcích

Příspěvek z 19. 5. 2026 uvádí, že uživatelé **„will continue to get a range of results from Search, just like you do today"**. To je opak tvrzení, že klasické výsledky zmizely.

## Co říká nápověda o přístupu

Nápověda Googlu (ověřeno 15. 8. 2026, shodně s odečtem 13. 8. 2026 pro `ai-mode-cesky`) uvádí **tři cesty**, jak se do AI Mode dostat: `google.com/ai`, tlačítko AI Mode ve výsledcích, záložka v aplikaci Google. Všechny tři vyžadují **vlastní akci uživatele** — režim se otevírá, nespouští se sám.

⛔ Nápověda **nepopisuje**, jak se z AI Mode vrátit nebo ho vypnout. Stejná mezera jako u `ai-mode-cesky`.

## Kde vzniká záměna

Slovo „výchozí" nese v těch větách dva různé významy:
1. **výchozí model** — který model odpoví, když jsem *už uvnitř* AI Mode
2. **výchozí režim** — co dostanu, když nic nezvolím

Google doložil jen (1). Tvrzení (2) jsem u Googlu nenašel.

## Metodická poznámka (do článku jen jako poučení, ne jako výtka médiím)

Vyhledávač mi u příspěvku o Gemini 3 Flash tvrdil datum **březen 2026**; skutečné datum na stránce je **17. 12. 2025**. Souhrny se u dat mýlí — datum se čte na zdroji, ne v souhrnu.

## Co z toho NEplyne

- ⛔ Že se nic nemění. AI Mode roste (viz `miliarda-uzivatelu-ai-mode`) a přechod z AI přehledu do něj je od května 2026 plynulý (viz `ai-mode-vs-ai-overviews`).
- ⛔ Že Google výchozí režim nikdy nezmění. Doložit jde jen stav ke dni odečtu.
- ⛔ Že v jednotlivých rozhraních nebo testech nemůže být chování jiné. Google rollouty odstupňovává.

## Kolizní kontrola

- `nahradi-ai-mode-vyhledavani` (18. 7. 2026) — ptá se, jestli AI Mode nahradí vyhledávání; strategická a konceptuální. Tenhle článek je užší a faktický: **co Google označil za výchozí**. Prolinkovat oba směry; do REFRESH_QUEUE poznámka, že starší článek by měl na tenhle ukázat.
- `ai-mode-cesky` — tři cesty přístupu, odkázat.
- Řádek `vychozi model v ai mode a co to meni` (288) zůstává otevřený: ten má řešit **dopad výměny modelu na stálost odpovědí**, ne terminologii.
