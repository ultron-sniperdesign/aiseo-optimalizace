# Research — České názvy funkcí Googlu s AI

Run 20. 9. 2026 · tutorial · slug `ceske-nazvy-ai-funkci-google` · řádek plánu `osobni inteligence cesky nazev`
Vybráno podle pravidla **Z14** (otevřený řádek k AI Mode má přednost). Bez agentů: curl na českou nápovědu, dvě vyhledávání, Marketing Miner (36 kreditů), 2× audit gpt-5.5, C6.

## Metoda

Každý název stažen přímo z české nápovědy (`?hl=cs`) a vzat **z titulku článku**, ne z anglických oznámení. Kde je titulek popisný, je to v článku i v tabulce označené. Datum ověření: **20. 9. 2026**.

## Ověřené tvary (titulky článků nápovědy)

| Anglicky | Doložený český tvar | Zdroj |
|---|---|---|
| AI Overviews | Přehledy od AI | websearch/answer/14901683 |
| AI Mode | režim AI | websearch/answer/16011537 |
| AI Mode v Search Labs | Režim AI v Search Labs | websearch/answer/16296315 |
| Personal Intelligence | Osobní inteligence | websearch/answer/17212611 |
| Search Live | funkce Live ve Vyhledávání | websearch/answer/16329036 |
| Canvas / notebooks | sešity v režimu AI | websearch/answer/17499802 |
| File generation | generování souborů ve Vyhledávání | websearch/answer/17586477 |
| Shopping v AI Mode | Nákupy a správa objednávek přímo z režimu AI | websearch/answer/16833721 |
| Connected apps | obsahové aplikace Google | websearch/answer/16859283 |
| Learn About | Learn About (nepřekládá se) | websearch/answer/15662709 |
| Generative AI performance report | Přehled výkonu v generativní AI | webmasters/answer/16984139 |

Všechny adresy ve tvaru `https://support.google.com/<sekce>/answer/<id>?hl=cs`.

## Naměřené kolísání

Na stránce `websearch/answer/16011537` (režim AI): **„Režim AI“ 19×, „režim AI“ 12×, „Přehledy od AI“ 3×, „Osobní inteligence“ 3×**.
Na stránce `websearch/answer/14901683` (přehledy): množné číslo v titulku, v těle věta „v dolní části **přehledu od AI** vyberte Zobrazit více“.

**Pozor na výklad:** Google nikde nevysvětluje, proč tvary střídá. Článek proto klíč (množné = funkce jako celek, jednotné = jedna odpověď) uvádí výslovně jako **naše redakční pravidlo**, ne jako pravidlo Googlu — vytkl to 1. audit jako blokující nález a je to opravené.

## Doslovné citace použité v článku

- „Osobní inteligence v režimu AI využívá předchozí vyhledávání a aktivitu uloženou v historii vyhledávacích služeb“ (17212611).
- Personalizace „je k dispozici uživatelům starším 18 let, kteří mají zapnutou historii a personalizovaná doporučení“ (16011537).
- U sesterské funkce generování souborů: „Tato funkce je momentálně dostupná uživatelům starším 18 let **v angličtině**“ (17586477) — proto se o české dostupnosti nikde netvrdí nic.

## Hledanost (Marketing Miner, čeština, 20. 9. 2026)

`režim ai` 13 000/měs (+270 043 % meziročně) · `ai mode` 3 100 · `ai overviews` 380 · `přehled od ai` 130. Bez dat: `přehledy od ai`, `osobní inteligence`, `personal intelligence`, `google ai funkce`, `search labs`, `live vyhledávání google`.
**Nezobecňovat:** doložená je jen dvojice režim AI / AI Mode. U ostatních názvů data nejsou, takže článek netvrdí, že je český tvar vždy hledanější.

## Kolizní kontrola (Z10)

Samostatný článek o názvosloví na webu není. `/slovnik/` je stránka s definicemi pojmů (jiná session), `ai-mode-cesky` řeší dostupnost režimu AI v češtině, `personalizace-ai-odpovedi` řeší Osobní inteligenci jako vliv na test, ne jako název.

## Slovník

Pravidlo `Přehled(y|ech|ů|ům) od AI` zakazuje množné číslo. Tenhle článek oficiální množné číslo cituje, proto je doplněný do existující výjimky: `[skip:kdy-ai-prehled-necekat,seo-vs-geo-vs-aeo-vs-aio,ceske-nazvy-ai-funkci-google]`, slovník **v71**. Zjištění o dvou významech (funkce vs. jedna odpověď) je zapsané v důvodu pravidla.

## Co z runu vzešlo do plánu

- `sesity v rezimu ai` — sešity v režimu AI (analysis).
- `generovani souboru ve vyhledavani` — generování souborů, nápověda výslovně uvádí angličtinu (analysis).
