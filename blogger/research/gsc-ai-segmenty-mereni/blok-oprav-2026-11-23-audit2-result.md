# Audit kola 2 (jazyk, struktura + kontrola vypořádání) — blok oprav „popis Auditu AI viditelnosti v rozporu s audit.ts“ (23. 11. 2026)

> Auditor: nezávislý Claude subagent (čerstvý kontext) se zadáním `zadani-audit2.md` (auditor-system + osa jazyk
> a struktura), Codex v limitu do 24. 11. 2026 15:01 — rozhodnutí Kamila 23. 11. 2026. Podklady ve složce úkolu
> `Dokumenty/CODEX/z-clauda/2026-11-23-audit2-blok-cta-auditu/` (17 článků po kole 1, záznam s vypořádáním, zdroje,
> slovník, tón značky). Čísla řádků míří na verzi po kole 1. Níže je výstup auditora beze změny.

VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Žádný BLOCKER: všech 11 řádků „Zapracováno“ z kola 1 v textu sedí a opravená formulace nezůstala jinde v témže souboru. Ve změněných místech ale zůstalo šest drobných jazykových a navazovacích vad (gramatika, syntax, dvojznačnost, zvýraznění). Každá se opraví za pár minut.

## Nálezy

**[WARNING] 1. aio-strategie.mdx ř. 365 a 371: dvojtečka věší výčet „Co dostanete“ na navazující úpravy**
Citace: „…začněte [Auditem AI viditelnosti](/audit/) za 3 600 Kč bez DPH; navazující úpravy vám můžeme nacenit:“
- Dvojtečka teď stojí za větou o navazujících úpravách, takže se výčet „Co dostanete / Pro koho / Kdy se vyplatí“ syntakticky vztahuje k nim, ne k auditu.
- V původním znění stála dvojtečka hned za nabídkou. Posun vznikl až vložením věty o nacenění.

Nové znění ř. 365:
```
AIO strategie dává největší smysl jako **6–12měsíční transformace**, ne jako jednorázový projekt. Tento web provozuje agentura **[Sniper Design](https://www.sniperdesign.cz/)** — pokud chcete AIO playbook u vaší firmy nasadit, začněte [Auditem AI viditelnosti](/audit/) za 3 600 Kč bez DPH:
```
Nové znění ř. 371:
```
Navazující úpravy vám po auditu můžeme nacenit. První [konzultace](/kontakt/) nezávazná.
```

**[WARNING] 2. aio-strategie.mdx ř. 367: zájmeno „ji“ odkazuje na tabulku**
Citace: „prioritní tabulku úprav (dopad × náročnost × kdo ji má řešit)“
- „Ji“ (jednotné číslo, ženský rod) se gramaticky váže k „tabulku“, protože „úprav“ je množné číslo.
- V `audit.ts` ř. 307 stojí „Každá položka: … kdo by ji měl řešit“. Tam se „ji“ váže k položce, tady chybí.

Nové znění (úsek):
```
prioritní tabulku úprav (u každé dopad, náročnost a kdo ji má řešit)
```

**[WARNING] 3. ai-search-trendy-cesko-2026.mdx ř. 423: výčet metody se čte i jako seznam nástrojů**
Citace: „zmínky v ChatGPT měříme vlastním nástrojem, Přehled od AI přes Marketing Miner, Perplexity, Claude a Gemini ručně na dotazech podle vašeho sortimentu“
- Čárka po „Marketing Miner“ svádí ke čtení „přes Marketing Miner, Perplexity, Claude a Gemini“, tedy jako by šlo o čtyři nástroje pro Přehled od AI. Teprve „ručně“ na konci nutí větu přečíst znovu.
- V `audit.ts` ř. 293 dělí obě části tečka. Vadu vyrobilo doslovné zapracování TIPu 10 z kola 1.

Nové znění:
```
- **Kde už jste citovaní** — zmínky v ChatGPT měříme vlastním nástrojem a Přehled od AI přes Marketing Miner; Perplexity, Claude a Gemini kontrolujeme ručně na sadě dotazů podle vašeho sortimentu
```

**[WARNING] 4. nahradi-ai-mode-vyhledavani.mdx ř. 171: vedlejší věta a podstatná jména jako předmět jednoho slovesa**
Citace: „projde, co o vás dnes říkají AI odpovědi, technickou připravenost i obsah a dá vám prioritní seznam úprav“
- „Projde, co…, technickou připravenost i obsah“ je kostrbatá vazba: po čárce se „technickou připravenost“ chvíli čte jako pokračování vedlejší věty.
- V ai-roboti-zatez-webu.mdx ř. 115 je stejná situace vyřešená správně („i to, co…“).

Nové znění:
```
Chcete vědět, jak si stojíte teď — bez predikcí? **[Audit AI viditelnosti](/audit/)** za 3 600 Kč bez DPH projde, co o vás dnes říkají AI odpovědi, zkontroluje technickou připravenost i obsah a dá vám prioritní seznam úprav. Hotové vzory stránek jsou v **[AI SEO Wireframe Packu](/pack/)** za 1 490 Kč včetně DPH.
```

**[WARNING] 5. roi-ai-seo.mdx ř. 159 a mereni-ai-mode-limity.mdx ř. 161: „výchozí stav“ bez upřesnění hned vedle měření z dat klienta**
Citace: roi „Audit … je jednorázový snímek: ukáže výchozí stav a prioritní seznam úprav.“ · mereni „Výchozí stav, proti kterému půjde měřit posun, ukáže **Audit AI viditelnosti**“
- V roi se věta čte v kontextu konverzí a „nastavení měření“. Ve mereni následuje hned po výčtu zdrojů Monitoringu (Search Console, GA4). V obou případech se dá číst jako výchozí stav těchto čísel, a k těm audit nemá přístup. To je vada bloku, jen naznačená.
- gsc-ai-segmenty-mereni.mdx ř. 239 („Výchozí stav viditelnosti v AI odpovědích“) a blokovat-ai-odpovedi-gsc.mdx ř. 182 („co o vás AI odpovědi říkají dnes“) to už upřesňují.

Nové znění (úseky):
```
roi ř. 159: ukáže výchozí stav viditelnosti v AI odpovědích a prioritní seznam úprav.
mereni ř. 161: Výchozí stav viditelnosti v AI odpovědích, proti kterému půjde měřit posun, ukáže **[Audit AI viditelnosti](/audit/)** za 3 600 Kč bez DPH.
```

**[WARNING] 6. mereni-ai-mode-limity.mdx ř. 161 a blokovat-ai-odpovedi-gsc.mdx ř. 182: tučně je audit, ne Monitoring, který na otázku odpovídá**
- V obou odstavcích odpovídá na měření nově Monitoring, jenže tučné zvýraznění zůstalo jen u auditu (a u Packu).
- Kdo text jen přelétne očima, vidí u otázky „Chcete měřit AI viditelnost…“, případně u „neumíte z vlastních dat odhadnout“, zvýrazněný jen Audit AI viditelnosti. Vazba audit ↔ měření, kterou blok ruší, se tak vrací přes formátování.

Nové znění v obou souborech:
```
**[Monitoring AI viditelnosti](/sluzby/monitoring-ai/)**
```

**[TIP] 7. ai-roboti-zatez-webu.mdx ř. 115: věcný, ale strnulý popis**
- „projde přístup AI robotů podle účelu“ je jmenná vazba převzatá z `audit.ts`.
- „z čeho se rozhodovat“ (původní znění) česky zní „podle čeho se rozhodnout“.
- Navrhované znění navíc navazuje na „co pustit a co omezit“ v ř. 111.
```
**[Audit AI viditelnosti](/audit/)** za 3 600 Kč bez DPH projde, které vyhledávací a které tréninkové AI roboty k webu pouštíte, i to, co o vás dnes říkají AI odpovědi, a pojmenuje, podle čeho se rozhodnout. Hotové vzory stránek najdete v [AI SEO Wireframe Packu](/pack/).
```

**[TIP] 8. ai-seo-wordpress.mdx ř. 196: dvě „a“ za sebou**
Citace: „zkontroluje strukturovaná data, robots.txt a přístup AI robotů a navrhne opravy“
```
zkontroluje strukturovaná data, robots.txt i přístup AI robotů a navrhne opravy s odhadem dopadu
```

**[TIP] 9. ai-seo-b2b.mdx ř. 30 (FAQ): odpověď je sebestačná, jen „změří … měří“**
- Bez otázky se čte dobře: druhá věta říká, co se ověřuje (citace značky), a nová věta jmenuje obě služby, jejich roli i rozsah Monitoringu. Odpověď se dobře čte i jako prostý text ve FAQPage.
- Zbývá opakování sloves a sjednocení s ostatními články, kde „výchozí stav ukáže“ audit.
```
Výchozí stav ukáže [Audit AI viditelnosti](/audit/), na systematické sledování slouží [nástroje na AI viditelnost](/blog/ai-seo-nastroje/) nebo [Monitoring AI viditelnosti](/sluzby/monitoring-ai/), který každý měsíc měří zmínky v ChatGPT a v Přehledu od AI.
```

**[TIP] 10. geo-optimalizace.mdx ř. 418: „na vlastní audit, [Audit AI viditelnosti]“**
- „Audit“ se v jedné větě opakuje.
- Nové CTA staví „vlastní audit“ proti produktu, který se jmenuje stejně jako krok 1 v ř. 143 a 398 (nezapracovaný nález 12). Kolizi lze v CTA zmírnit, aniž by se sahalo do těla článku:
```
nebo nemáte kapacitu projít web sami, [Audit AI viditelnosti](/audit/) za 3 600 Kč bez DPH ukáže
```

**[TIP] 11. roi-ai-seo.mdx ř. 159: „s měsíčním reportem“ vedle chyby „Počítat po měsíci“**
- Článek v ř. 133–135 varuje „Měsíční okno měří hlavně náhodu“ a v ř. 151 radí počítat „za pololetí, ne za měsíc“. Podle `monitoring-ai.txt` ř. 23 a 29 hodnotí Monitoring trend, ne jeden snímek.
```
nabízíme [Monitoring AI viditelnosti](/sluzby/monitoring-ai/), který měří každý měsíc, ale vývoj hodnotí za delší období.
```

**[TIP] 12. aeo-optimalizace-v-praxi.mdx ř. 450: rozbitý souběh „podle priorit — ne jako úprava“**
```
AEO playbook se nejlépe škáluje jako postup podle priorit napříč webem — ne jako jednorázová úprava 5 stránek.
```

**[TIP] 13. knowsabout-strukturovana-data.mdx ř. 197 a za-jak-dlouho-se-projevi-ai-seo.mdx ř. 206: úřední „meeting v délce 30–60 minut“**
```
knowsabout: …a dá vám prioritní seznam úprav s odhadem dopadu. Součástí je meeting na 30–60 minut.
za-jak-dlouho: Na meetingu (30–60 minut) se můžete doptat i na to, co po úpravách sledovat jako první…
```

**[TIP] 14. za-jak-dlouho-se-projevi-ai-seo.mdx ř. 206, úvodní otázka (původní znění na změněném řádku)**
- „Nevíte, jestli má váš web v odpovědích AI vůbec z čeho vybírat?“ dává obrácený smysl: vybírá AI, ne web.
```
**Nevíte, jestli má AI na vašem webu vůbec z čeho vybírat?**
```

**[TIP] 15. Mimo blok**
- ai-seo-b2b.mdx ř. 133: „pomůže produktový [Audit AI viditelnosti]“ se čte jako jiný druh auditu.
  ```
  pomůže [Audit AI viditelnosti](/audit/) za 3 600 Kč bez DPH
  ```
- Nadpis „Kde si nechat poradit nebo implementaci“ nemá u „implementaci“ sloveso. Týká se aeo-optimalizace-v-praxi.mdx ř. 448, aio-strategie.mdx ř. 363, ai-search-trendy-cesko-2026.mdx ř. 419 a geo-optimalizace.mdx ř. 416.
  ```
  ## Kde si nechat <strong>poradit</strong> nebo <span class="hl">pomoct s implementací</span>
  ```
- aeo-optimalizace-v-praxi.mdx ř. 453 a 454: „s 20+ článků“ → „s 20+ články“, „vidíte vaše konkurenty“ → „vidíte své konkurenty“.

**[TIP] 16. Záznam bloku (`zaznam-a-vyporadani.md`) není po kole 1 dotažený**
- ř. 45, sloupec „Je“ u mereni: „audit výchozí stav před prvním měřením“ → „audit výchozí stav, proti kterému půjde měřit posun“.
- ř. 70–71: „Feed, přesměrování, CDN, interní prolinkování“ → „Feed, přesměrování, interní prolinkování“. CDN opravil blok podle pravidla v ř. 28–30 a fronta je už rozdělená (`blogger/REFRESH_QUEUE.md` ř. 70, čteno jen pro kontrolu).

## V pořádku

- Název Auditu AI viditelnosti je všude správně a správně skloňovaný („V Auditu…“, „začněte Auditem…“). Cena není v textu odkazu ani v nadpisu. Monitoring je bez ceny a jeho zdroje i kadence sedí s `monitoring-ai.txt`.
- Úvodní otázky odpovídají tomu, co následuje (content-signals ř. 192, informacni ř. 156, knowsabout ř. 197, nahradi ř. 171, gsc ř. 239). Navazování na Pack sedí.
- Tón je věcný, bez naléhavosti a bez slibů.
- Na nových řádcích diffu jsem pustil 276 regulárních výrazů z `JAZYK_SLOVNIK.md`: 0 nálezů. České uvozovky jsou v pořádku.

## Stav vypořádání kola 1

Zapracováno: všech 11 řádků ověřeno v `clanky/`, žádný zbytek v témže souboru, tedy žádný BLOCKER.
- **1 (gsc):** věta pryč; slovo „audit“ je v souboru už jen v CTA na ř. 239.
- **2 (blokovat):** Monitoring už nic „neřeší“. Vypadlo sice „aspoň“, ale omezující podmínku nese hned další věta.
- **3, 4, 5:** opraveno (ai-roboti ř. 111, informacni ř. 156, za-jak-dlouho ř. 204).
- **6:** rozsah Monitoringu je uvedený na všech čtyřech místech; roi ř. 159 rozsah neuvádí, takže nepřehání.
- **7 (aeo):** opraveno. „AEO audit“ zůstal jen jako krok pro čtenáře (ř. 279 v ukázce HowTo, ř. 418 v seznamu úkolů), ne jako název produktu, takže v pořádku.
- **8 (ai-search-trendy ř. 428):** opraveno. Stejná formulace „projdeme to nad vaším konkrétním webem“ zůstala v seo-pro-eshopy-ai-era-2026.mdx ř. 203. Tam se ale váže ke Strategické konzultaci (ř. 201) a je ve frontě (REFRESH_QUEUE.md ř. 69). Vadou bloku to není, jen tvrzení záznamu „Z17 grep prázdný“ přesně neplatí.
- **9:** ai-seo-wordpress ř. 196 a content-signals ř. 192 jsou opravené, pravidlo i fronta upravené. Zbytek je jen v textu záznamu (TIP 16).
- **10 a 11 (část):** zapracováno, ale vznikla dvojznačnost (WARNING 3) a neurčitý „výchozí stav“ (WARNING 5).

Nezapracováno:
- **11 (část), „to dnes neumí nikdo“:** důvod přijímám. Věta je převzatá z původního CTA, auditor kola 1 ji sám odložil do refreshe a ve frontě je (ř. 72).
- **12 (geo, krok pojmenovaný jako produkt; vlastní rámce „u klientů“):** důvod přijímám. Přejmenovat krok v těle článku je obsahová změna mimo CTA a ve frontě je (ř. 71). V samotném CTA lze kolizi zmírnit podle TIPu 10.
