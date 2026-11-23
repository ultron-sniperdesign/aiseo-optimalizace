# Blok oprav 22. 11. 2026 — „Seznam Asistent“ jako současný název → Seznam AI

**Typ runu:** blok oprav (kadence 2 + 1 + 1, run 4 cyklu; série 10 runů zadaná Kamilem 22. 11. 2026).
**Vada:** služba Seznamu se jmenuje **Seznam AI**, 17 článků ale používalo starý název **Seznam Asistent** jako současný
a dva tvrdily „oznámení přejmenování jsem nenašel“. Fronta: `REFRESH_QUEUE.md`, řádky z 11. 10. a 30. 10. 2026.

## Doklad

| Druh | Co | Zdroj, načteno 22. 11. 2026 |
|---|---|---|
| Dokumentace | „Seznam AI (dříve Seznam Asistent) postupně propojuje…“ a „Seznam AI (dříve Seznam Asistent) je chytrý asistent…“ | tisková zpráva Seznamu 15. 10. 2026, blog.seznam.cz/2026/10/seznam-ai-propojuje-dalsi-sluzby-seznamu-vyuziva-ho-uz-vice-nez-pul-milionu-uzivatelu-tydne/ |
| Dokumentace | nápověda používá „Seznam AI“ (titulek stránky ještě „Nápověda Seznam Asistent“), zdroje dat: index Vyhledávání, Pocasi.cz, Firmy.cz, Sreality.cz, jízdní řády, Sport.cz | o-seznam.cz/napoveda/seznam-ai/ |
| Dokumentace | partnerská nápověda „Seznam AI“ v seznamu tří míst a v čísle o zpravodajských dotazech ještě píše „Seznam Asistent“ | partner.seznam.cz/napoveda/dalsi-sluzby/seznam-ai/ |
| Dokumentace | Audit AI viditelnosti v FAQ zahrnuje i Seznam („Zahrnuje audit i Seznam Asistenta?“ — „Ano…“) | `src/content/pages/audit.ts` ř. 486–487 |

## Postup (Z12: hledáno podle entity)

- Hledáno „Seznam Asistent*“, „asistent* Seznamu“, „asistent.seznam.cz“ a samostatné „Asistent*“ s velkým A ve všech článcích,
  sekcích a pilíři; po buildu totéž v `dist/blog/<slug>/` (0 podezřelých výskytů).
- **Pravidla:** první zmínka „Seznam AI (dříve Seznam Asistent)“, dál „Seznam AI“ (mužský rod, nesklonné). Historická zmínka
  o datované události nebo citovaném zdroji zůstává se starým názvem a dovětkem „(dnes Seznam AI)“ / „(tehdy Seznam Asistent)“.
  Klíčová slova, URL, slug `seznam-asistent-sellma` a hodnoty UTM `asistent` zůstávají.
- **17 článků, `updated` 2026-11-22:** ai-search-trendy-cesko-2026, ai-sumarizace-a-vydavatele, firmy-cz-pro-ai,
  geo-optimalizace, google-cituje-sam-sebe, gsc-ai-segmenty-mereni, jak-ai-cituje-zdroje, jak-se-dostat-do-ai-odpovedi,
  jazykove-mutace-pro-ai, oborove-katalogy-ai, recenze-srovnavace-pro-ai, seznam-asistent-sellma, seznam-cz-ai-vyhledavani,
  seznam-extended-opt-out, srovnani-s-konkurenci-v-ai, test-viditelnosti-v-ai, zbozi-cz-pro-ai.
- **Dva přejmenované H2** (`jak-se-dostat-do-ai-odpovedi` „Jak se dostat do Seznam AI“, `seznam-asistent-sellma`
  „Z jakých zdrojů Seznam AI čerpá“) — na staré kotvy v `src/` nic neodkazuje.
- **Mimo blogger (soubory admina, předáno přes board):** 8 sekcí (aeo, ai-mode, aio, geo, prakticky-postup, prehled-od-ai,
  rozhodovaci-matice, seo), pilíř, `src/content/pages/` (ai-viditelnost.ts, audit.ts, index.ts, slovnik.ts — heslo
  `seznam-asistent`, sluzby.ts, zacnete-tady.ts) a `src/i18n/series.ts`.

## Vypořádání auditu kola 1 (fakta)

Audit: `blok-oprav-2026-11-22-audit1-result.md` — 0 BLOCKER, 6 WARNING, 15 TIP (9 mimo blok).

### Zapracováno

| # | Nález | Oprava |
|---|---|---|
| 1 | CTA `test-viditelnosti-v-ai` změnilo rozsah auditu | vráceno, jen přejmenováno: „… Google AI Overviews i Seznam AI“ (audit.ts FAQ Seznam zahrnuje — moje chyba, četl jsem jen lead) |
| 2 | chybějící dovětek u první zmínky | doplněn v google-cituje-sam-sebe, gsc-ai-segmenty-mereni, jak-ai-cituje-zdroje, jazykove-mutace-pro-ai; štítek tabulky v test-viditelnosti-v-ai „Seznam AI (dříve Seznam Asistent)“ |
| 3 | ženský rod v seznam-cz-ai-vyhledavani | „ho používá“, „ho sledovat“, „na něm“, „Kdo ho má“ (3 místa) |
| 4 | kruhová věta ai-sumarizace-a-vydavatele | „samotný konverzační asistent Seznam AI (partnerská nápověda ho k 22. 11. 2026 ještě vede jako Seznam Asistent)“ — „chat“ z návrhu nahrazen termínem, který článek už používá |
| 5 | zdvojení | „Seznam mezi zdroji Seznam AI (dříve Seznam Asistent) jmenuje i Firmy.cz“; „Seznam se službou Seznam AI“ |
| 6 | tisková zpráva bez odkazu | odkaz v seznam-cz-ai-vyhledavani (FAQ, tělo, řádek Zdroje) a zbozi-cz-pro-ai (tělo, Zdroje); patička seznam-cz „název služby doplněn 22. 11. 2026 podle tiskové zprávy z 15. 10. 2026“ (stav článku 14. 10. zůstává pravdivý); URL ověřena (200, kanonická) |
| 7 | sellma ř. 80 | „provozovat asistenta (dnes Seznam AI)…“ |
| 8 | ai-sumarizace popisek a UTM | „Asistent (dnes Seznam AI)“; „Hodnoty asistent, aifunkce a trending_topics…“ (bez backticků — jsou v řetězci komponenty a vykreslily by se doslova) |
| 9 | zbozi ř. 4, 5, 45 | „asistenta (dnes Seznam AI) … ukazuje v něm“; description 158 znaků |
| 10 | kotvy | ověřeno grepem v `src/`, nic neodkazuje |
| 11 | sellma ř. 42 opakování | „viditelnost v jeho odpovědích“ |
| 15 (část) | gramatika sellma ř. 108 | „by ji spolehlivě oddělil“ — na řádku, který blok měnil |

### Nezapracováno + důvod

| # | Návrh | Proč ne |
|---|---|---|
| 12 | — | patičky „Stav k …“ ponechány podle doporučení auditora; čtyři články zapsány do `REFRESH_QUEUE.md` |
| 13–21 (kromě gramatiky v 15) | věcné vady mimo název (model SeLLMa/Gemma, výčty zdrojů, přihlášení v Seznam AI, „marginální“, neukotvený čas, audit.ts a slovník) | mimo jedinou vadu bloku (A6); zapsáno do `REFRESH_QUEUE.md` a soubory admina na board |

### Jazykový průchod

- `jazyk-check.py` (v74) na všech 17 článcích: 0 nálezů před i po opravách. `kontrola-komponent.py`: 0 nálezů (183 použití).

## Vypořádání auditu kola 2 (jazyk, struktura)

Audit: `blok-oprav-2026-11-22-audit2-result.md` — 0 BLOCKER, 4 WARNING, 9 TIP (3 mimo blok).

### Zapracováno

| # | Nález | Oprava |
|---|---|---|
| 1 | „v něm“ dvojznačné | `zbozi-cz-pro-ai`: „…(dnes Seznam AI), kde ukazuje i placené nabídky“ (description 157 znaků); „…(dnes Seznam AI), ve kterém od téhož měsíce / od května 2026 ukazuje…“ (answer 55 slov, úvod) |
| 2 | rozpor s citovanou zprávou | `seznam-cz-ai-vyhledavani` FAQ a karta: „o počtu uživatelů Seznam uvádí jen „vyšší statisíce“ týdně (tisková zpráva z 15. 10. 2026)“ |
| 3 | ženský rod | `ai-sumarizace-a-vydavatele` „ze kterého čerpal“ |
| 4 | zdvojení | sellma „podle květnového oznámení čerpá“; google-cituje „Seznam AI (dříve Seznam Asistent) má mezi jmenovanými zdroji i Firmy.cz“ |
| 5 | dvě zprávy v odstavci | „Květnová tisková zpráva … a přejmenování potvrdila [tisková zpráva z 15. 10. 2026](…), která službu uvádí jako „Seznam AI (dříve Seznam Asistent)“. V několika bodech si květnová zpráva a nápověda odporují:“ |
| 6 | FAQ „jak souvisí“ | „Seznam AI je nový název Seznam Asistenta, konverzačního asistenta Seznamu: [tisková zpráva z 15. 10. 2026](…) ho uvádí jako „Seznam AI (dříve Seznam Asistent)“, nápověda i titulek … nový název používaly už 14. 10. 2026.“ |
| 7 | poznámka o doplnění | zbozi „Potvrzení přejmenování jsem doplnil 22. 11. 2026 podle tiskové zprávy z 15. 10. 2026.“; patička seznam-cz „potvrzení přejmenování doplněno 22. 11. 2026…“ |
| 8 | dvakrát „partnerská nápověda“ | „(v nápovědě k 22. 11. 2026 ještě jako Seznam Asistent)“ |
| 9 | FAQ bez podmětu | sellma „…uvedl, že jeho asistent (dnes Seznam AI) využívá data z…“ |
| 10 | slovosled | oborove „Při zpřístupnění svého asistenta (dnes Seznam AI) … Seznam [jmenoval…]“; recenze „jmenoval Zboží.cz a Firmy.cz mezi zdroji svého asistenta (dnes Seznam AI)“; geo „Seznam AI (dříve Seznam Asistent) je vlastní AI vyhledávač Seznamu“ |
| — | předání adminovi | záznam na board `cross-session/aiseo-optimalizace.md` při uzávěru runu |

### Nezapracováno + důvod

| # | Návrh | Proč ne |
|---|---|---|
| 11–13 | přihlášení v `jak-se-dostat-do-ai-odpovedi`, formát H2, zbytek FAQ v `geo-optimalizace` | mimo jedinou vadu bloku; zapsáno do `REFRESH_QUEUE.md` |

Třetí kolo ani C5b: nebyl sporný nález, všechny varování přijaty; auditor výslovně uvedl, že po opravě 1–4 lze publikovat
bez dalšího kola. Po opravách: `jazyk-check.py` 0, `kontrola-komponent.py` 0, build v pořádku, Z17 grepy prázdné.
