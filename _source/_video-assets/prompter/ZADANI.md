# ZADÁNÍ: 4 úvodní videa pro sekce aiseo-optimalizace.cz

> Samostatné zadání pro vlákno řešící video produkci. Vše potřebné je v tomto
> souboru + 4 scénářích ve stejné složce. Po natočení stačí poslat 4 YouTube
> odkazy zpět do vlákna `aiseo-optimalizace` — vložení na web je pak 1 řádek
> frontmatteru per sekce (dělá aiseo session, vč. lokálních posterů).

## Kontext

Web `aiseo-optimalizace.cz` má 7 obsahových sekcí; tři z nich (SEO, GEO, AEO)
mají úvodní video — talking head Kamil, ~2 minuty, vložené pod krátkou odpovědí
sekce. Čtyři sekce video nemají. Videa přidávají E-E-A-T (reálný člověk),
engagement a VideoObject strukturovaná data.

**Reference stylu a délky (existující videa):**
- SEO: https://youtu.be/oPfYftelijw
- GEO: https://youtu.be/XTylYbRm3RA
- AEO: https://youtu.be/ZjJ3XiBiZqM
- Homepage (úvod): https://youtu.be/7rJFWQ1NpAM

## Co natočit (pořadí = priorita)

| # | Sekce | Scénář (prompter) | Pozn. |
|---|---|---|---|
| 1 | **Google AI Mode** — /ai-mode/ | `ai-mode.md` | Nejvyšší priorita: sekce je už citovaná v Google AI Mode a video nemá; téma s +6 000 % růstem hledanosti |
| 2 | **Praktický postup** — /prakticky-postup/ | `prakticky-postup.md` | |
| 3 | **Rozhodovací matice** — /rozhodovaci-matice/ | `rozhodovaci-matice.md` | CTA míří na konzultaci (ne audit) |
| 4 | **AIO** — /aio/ | `aio.md` | Jen pro CZ (EN mutace zkratku AIO nepoužívá) |

Scénáře jsou v této složce
(`_source/_video-assets/prompter/`), každý obsahuje:
- text na čtení z prompteru (~280–300 slov ≈ 1:50–2:00 min),
- **tučné pasáže = klíčová sdělení, držet doslova**; zbytek lze říct volně,
- návrhy B-roll záběrů a poznámky k natáčení (vč. ověření číselných claimů).

## Parametry videí

- **Formát:** talking head (Kamil), stejné prostředí/kvalita jako reference výše.
- **Délka:** cíl ~2 min (max 2:30).
- **Jazyk:** čeština.
- **Kanál:** YouTube kanál Kamila (channel/UCgg_pplVfiWhtkULnMHVpOw) — stejný jako existující videa (je v sameAs autorské entity webu).

## Návrhy YouTube metadat (title + popis s odkazem na web)

1. **AI Mode:** „Google AI Mode: největší změna vyhledávání za dekádu (2 min)" —
   popis: krátké shrnutí + „Celý rozbor: https://aiseo-optimalizace.cz/ai-mode/"
2. **Praktický postup:** „AI SEO prakticky: 4 kroky, které zvládnete sami (2 min)" —
   popis + „Kompletní postup: https://aiseo-optimalizace.cz/prakticky-postup/"
3. **Rozhodovací matice:** „SEO, GEO, AEO, AIO — co z toho řešit právě vy? (2 min)" —
   popis + „Celá matice: https://aiseo-optimalizace.cz/rozhodovaci-matice/"
4. **AIO:** „AIO: nejvíc matoucí zkratka AI éry, jednou provždy (2 min)" —
   popis + „Celý rozbor: https://aiseo-optimalizace.cz/aio/"

Odkaz na sekci v popisu je důležitý (zpětná vazba YouTube ↔ web pro entitu autora).

## Předání zpět

Po nahrání poslat do vlákna `aiseo-optimalizace` zprávu ve tvaru:

```
videa hotová:
ai-mode: https://youtu.be/XXXX
prakticky-postup: https://youtu.be/XXXX
rozhodovaci-matice: https://youtu.be/XXXX
aio: https://youtu.be/XXXX
```

Aiseo session pak: vloží `video:` frontmatter do sekcí, vygeneruje lokální
WebP postery (`/video/poster-<id>.webp`), přidá VideoObject JSON-LD a nasadí.
