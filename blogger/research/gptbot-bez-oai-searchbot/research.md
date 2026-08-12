# Research — Kdo blokuje GPTBota, většinou nechává ChatGPT hledat dál

Datum měření: **12. 8. 2026** · typ: nový článek (analysis) · řádek plánu: `kolik ceskych webu ma opt out spatne`

Empirické pokračování [porovnání dokumentace](/blog/co-vypne-ktery-opt-out/) z 11. 8. Tam jsem zjistil, **co který příkaz podle provozovatelů dělá**. Tady měřím, **co lidé reálně nastavují**.

## Metodika

80 domén — **33 zpravodajských a oborových médií** a **47 e-shopů** z dřívějších měření. Staženo 80 robots.txt z 80.

Vlastní parser skupin: sleduje `User-agent:` bloky a počítá jen ty, kde je `Disallow:` s neprázdnou hodnotou (`Disallow:` bez hodnoty znamená povoleno). Skupina končí prvním pravidlem po posledním `User-agent:`.

**Kontrola parseru proti dřívějšímu měření:** stejné hodnoty na těch samých 33 médiích — 9 z 10 sledovaných robotů sedí přesně (Bytespider 13, GPTBot 11, Amazonbot 11, ClaudeBot 10, Google-Extended 9, PerplexityBot 8, anthropic-ai 6, CCBot 6, Applebot-Extended 5).

## ⚠️ Nález nula — chyba v mém publikovaném článku

Desátá hodnota neseděla: nový parser dal u `Claude-Web` **6**, publikovaný článek [bytespider-ceska-media](/blog/bytespider-ceska-media/) uvádí **5**.

Ověřil jsem to proti surovým datům z 9. 8. přímo v poli `agents`, ne hledáním v textu: **v datech je 6** (echo24.cz, denik.cz, expres.cz, idnes.cz, lidovky.cz, penize.cz). Chyba tedy vznikla u mě při přepisu tabulky do článku, ne v měření.

Na závěrech toho článku to nic nemění (Claude-Web nebyl mezi vedoucími roboty), ale **číslo v tabulce opravím** a v článku to zmíním.

## Nález 1 — dvě třetiny těch, kdo řeší OpenAI, řeší jen trénink

Podle [dokumentace OpenAI](/blog/co-vypne-ktery-opt-out/) je GPTBot o tréninku a OAI-SearchBot o zobrazení ve výsledcích vyhledávání v ChatGPT. Ve vzorku 80 domén:

| Kombinace | Počet |
|---|---|
| jen **GPTBot** (podle dokumentace = jen trénink) | **8** |
| **oba** | 4 |
| jen **OAI-SearchBot** (= jen zobrazení) | **0** |
| ani jeden | 68 |

Z dvanácti webů, které mají pravidlo pro GPTBota, jich tedy **jen čtyři mají i OAI-SearchBota**. Zbylých osm má podle dokumentace vypnutý trénink, ale zobrazení ve vyhledávání v ChatGPT tím neřeší.

**Nula v opačném směru je taky zajímavá:** nikdo ve vzorku nezvolil kombinaci „ať se netrénuje na mně neplatí, ale nezobrazujte mě". Vždycky se začíná tréninkem.

⛔ **Nepodsouvat záměr.** Nevím, co který web chtěl. Formulovat jako „pokud bylo cílem X, tohle nastavení to podle dokumentace nedělá" — auditor mě na to upozornil u minulého článku.

## Nález 2 — u Googlu totéž

`Google-Extended` má **10 z 80**. Z nich má **jeden** zároveň pravidlo pro Googlebota.

Podle dokumentace Google-Extended neřídí zařazení do Search ani generativní AI funkce; na ty je nastavení v Search Console, které z robots.txt nezjistím. Devět webů tedy má nastavený opt-out z tréninku pro Gemini a nic víc — což je legitimní volba, jen je jiná než „nechci do AI Overviews".

## Nález 3 — celkové rozložení

- **20 z 80** domén má aspoň jedno pravidlo pro sledované AI roboty (17 médií, 3 e-shopy).
- 47 e-shopů je z jedné platformy s výchozím robots.txt, takže tři výjimky jsou tam, kde to někdo měnil ručně.

Četnost pravidel napříč 80 doménami: Bytespider 13, ClaudeBot 12, GPTBot 12, Amazonbot 11, Google-Extended 10, PerplexityBot 9, anthropic-ai 7, Claude-Web 7, CCBot 7, Applebot-Extended 6, Meta-ExternalAgent 5, ChatGPT-User 5, Applebot 4, OAI-SearchBot 4.

**Bytespider je i na širším vzorku nejčastější** — potvrzuje [dřívější nález](/blog/bytespider-ceska-media/).

## Limity

- Jeden odečet, 12. 8. 2026. Robots.txt se mění; mezi 9. a 12. 8. jsem u sledovaných hodnot žádnou změnu nezaznamenal.
- Vzorky nejsou náhodné: 33 médií je ruční seznam, 47 e-shopů je z jedné platformy. Uvádět odděleně.
- **Měřím konfiguraci, ne chování robotů ani záměr provozovatelů.**
- Nastavení v Search Console (Search generative AI control) je neveřejné — z robots.txt ho nezjistím, takže o něm netvrdím nic.
- Parser počítá jen `Disallow` s neprázdnou hodnotou; jiné mechanismy (meta tagy, hlavičky, blokace na serveru) nevidí.

## Zdroje

- vlastní měření: `optout_mix.json` (80 domén), `optout_summary.json`, skript `optout_mix.py`
- dokumentace provozovatelů — viz [co vypne který opt-out](/blog/co-vypne-ktery-opt-out/), čteno 11. 8. 2026
- kontrola proti měření z 9. 8. 2026 (`seznam_extended_media.json`)
