# Research — ai prehled u prihlasenych a podle zarizeni

**Řádek plánu:** `ai prehled u prihlasenych a podle zarizeni` (admin, trend research 2. 9. 2026) · „Liší se AI přehled podle přihlášení a zařízení?" · kategorie `analysis` · run 2. 9. 2026
**Slug článku:** `ai-prehled-prihlaseni-zarizeni`

**Pokyn z plánu:** ⛔ ověřit u primárního zdroje. Přehledy uvádějí, že Google zobrazoval AI přehledy častěji přihlášeným a jinak na mobilu než na desktopu. Pokud to Google potvrzuje, je to důvod rozdílů mezi vlastními testy a cizími čísly. Pokud ne, napsat, že je to jen pozorování nástrojů.

## Výsledek ověření: přihlášení má doklad od Googlu, zařízení ne

| Otázka | Co je doložené | Zdroj | Datum |
|---|---|---|---|
| Je k AI přehledu potřeba přihlášení? | **Ne.** „you'll no longer need to sign in to get access" — a „teens can now use AI Overviews" | blog.google, *Expanding AI Overviews and introducing AI Mode* | 5. 3. 2025 |
| Kdy se přihlášení přestalo vyžadovat v USA? | Google potvrdil Search Engine Landu: „AI Overviews will now appear for all users in the United States, even if they are not signed into their Google account." | Search Engine Land (potvrzení od Googlu, ne doslovný citát mluvčího) | 15. 8. 2024 |
| Anonymní režim? | SEL i seoClarity **pozorovali** přehledy v inkognitu — pozorování, ne prohlášení Googlu | tamtéž | 15. 8. 2024 |
| Zobrazuje se přihlášeným častěji? | **Google to nikde neuvádí.** Jediný doklad je měření nástroje: BrightEdge Generative Parser, „AI Overviews are less visible on average (~10%) for non-logged in users"; u e-shopových dotazů jen 1 % pro nepřihlášené — **měřeno v prvních týdnech po rozšíření na nepřihlášené, USA, srpen 2024**, bez uvedené velikosti vzorku | BrightEdge blog *August Brings Significant Changes…* | srpen **2024** (ne 2026 — přehledy to datují špatně) |
| Liší se podle zařízení? | **Google nic takového neuvádí.** Nápověda má záložky Počítač / Android / iPhone, které se liší jen v postupu klikání; dostupnost popisuje jednotně „pro všechny uživatele" v daných zemích a jazycích | nápověda Vyhledávání, EN, záložky Computer a Android | ověřeno 2. 9. 2026 |
| Podmínka zobrazení | „when our systems determine that generative AI can be especially helpful" — žádné zařízení, žádné přihlášení | nápověda Vyhledávání | ověřeno 2. 9. 2026 |
| Základní funkce | „AI Overviews are a core Google Search feature, like knowledge panels. Features cannot be turned off." | tamtéž | ověřeno 2. 9. 2026 |
| Kde přihlášení roli MÁ | Vypnutí přes Search Labs je vázané na účet — rozebírá vlastní článek `jak-vypnout-ai-overview` | vlastní korpus | — |

## Co z toho plyne pro článek

- Odpověď na otázku z titulku je **dvojí**: přihlášení není podmínka zobrazení (doloženo Googlem), četnost podle přihlášení a zařízení Google nedokumentuje (jen dvouleté měření nástroje z jiné fáze nasazení).
- Praktická hodnota: proč se vlastní ruční test rozchází s cizími čísly — účet, zařízení, region a období jsou proměnné, které cizí číslo obvykle neuvádí a vlastní test si je nezapisuje.
- **Žádné procento nepřebírat jako platné dnes.** BrightEdge 10 % / 1 % uvést jen s datem 2024 a kontextem „první týdny po rozšíření".

## Kolize s korpusem

| Článek | Co pokrývá | Jak se odliším |
|---|---|---|
| `jak-casto-se-zobrazuje-ai-prehled` | rozptyl čísel o četnosti; **jedna položka checklistu** říká „zařízení a přihlášení — Google nepotvrzuje, berte jako pozorování nástrojů" | rozvádím právě tu jednu položku do doložené odpovědi; čísla o četnosti nepřebírám |
| `personalizace-ai-odpovedi` | účet jako proměnná u Režimu AI (Osobní inteligence) | tady jde o AI přehled a o *zobrazení vůbec*, ne o obsah odpovědi |
| `kdy-ai-prehled-necekat` | princip užitečnosti, bez seznamu dotazů | navazuji: signály zařízení/přihlášení tam byly vyškrtnuty jako nedoložené — tady to dokládám |
| `jak-vypnout-ai-overview` | vypnutí přes Labs vyžaduje účet | jen odkaz: přihlášení hraje roli u vypínání, ne u zobrazení |
| `test-viditelnosti-v-ai` | metodika testu, sloupec účet a prostředí (doplněno 2. 9.) | odkaz, nepřepisovat |
| `zero-click-ai` | proklik | mimo téma |

## Struktura článku

1. Krátká odpověď: přihlášení není podmínka (Google), rozdíly v četnosti Google nedokumentuje.
2. Co Google doložil o přihlášení — dvě data (srpen 2024 USA, březen 2025 globálně + teens).
3. Odkud se vzalo „přihlášeným častěji" — BrightEdge 2024, co měřil a proč to dnes nejde přenést.
4. Zařízení: co nápověda říká a co ne.
5. Proč se váš test rozchází s cizím číslem — čtyři proměnné.
6. Jak testovat, aby výsledek šel srovnat.
7. Co z toho neplyne.

## Limity, které si hlídám

- Nevydávat měření z roku 2024 za dnešní stav.
- Netvrdit, že zařízení nehraje roli — tvrdit jen, že to Google nedokumentuje.
- Žádná čísla o četnosti panelu (patří jinam).
- Přihlášení u *vypínání* (Labs) je jiná věc než u *zobrazení* — oddělit.
