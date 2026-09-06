# Snímky obrazovky — režim AI

> **Kam soubory patří:** `public/screenshots/rezim-ai/`
> (Tenhle návod je záměrně mimo `public/`, aby ho neservíroval web.)

Sem patří tři soubory. Dokud tu nejsou, bloky `<Figure>` v `src/content/sections/ai-mode.mdx`
se v produkčním buildu **nevykreslí** a stránka vypadá jako dnes. Jakmile soubory přibudou,
naskočí samy při dalším buildu — v obsahu není potřeba nic měnit.

| Soubor | Co má být na snímku |
|---|---|
| `zalozka.png` | Výsledky vyhledávání v češtině s viditelnou záložkou **Režim AI** v horní liště vedle Vše / Obrázky / Videa / Zprávy. |
| `odpoved.png` | Otevřený režim AI s hotovou odpovědí na konkrétní dotaz. Musí být vidět souvislý text a odkazy na zdroje vyznačené přímo v textu. |
| `zdroje.png` | Pravý panel se zdroji, ze kterých Google odpověď složil (karty webů s názvem a titulkem). |

## Dotazy, které do vyhledávání zadat

Ke každému snímku primární dotaz a záloha, kdyby první nevyšel. Dotazy jsou
schválně z našeho tématu — když nás Google v odpovědi cituje, je snímek zároveň
důkazem AI viditelnosti.

### 1. `zalozka.png` — kde režim AI najdete

Obyčejné vyhledávání, **ne** režim AI. Jde o horní lištu se záložkou Režim AI.

- **Primárně:** `jak funguje režim AI v Googlu`
- **Záloha:** `režim ai google`

Pokud se nad výsledky roztáhne velký Přehled od AI, posuň stránku tak, aby byla
lišta se záložkami nahoře v záběru — snímek má být o záložce, ne o přehledu.

### 2. `odpoved.png` — jak vypadá odpověď

Klepni na záložku **Režim AI** a zadej dotaz. Musí být vidět souvislá odpověď
a odkazy na zdroje vyznačené přímo v textu.

- **Primárně:** `co je režim AI v Googlu`
- **Záloha:** `jak se liší režim AI od Přehledů od AI`

Při zkoušce 5. 9. 2026 Google v odpovědi na první dotaz **citoval Sniper Design**.
Pokud se to zopakuje, ať je citace v záběru.

### 3. `zdroje.png` — odkud Google čerpal

Stejné okno jako u snímku 2, jen zabírá pravý panel se zdroji. Když je zdrojů
málo, klepni na **Zobrazit vše** a vyfoť rozbalený seznam.

- **Primárně:** `jak připravit web na režim AI`
- **Záloha:** `jak se dostat do odpovědí režimu AI`

### Zkratka do režimu AI

Když nechceš klikat na záložku, tenhle odkaz otevře režim AI rovnou:

```
https://www.google.com/search?q=co+je+re%C5%BEim+AI+v+Googlu&udm=50&hl=cs&gl=cz
```

Dotaz v adrese se dá vyměnit za jakýkoli jiný.

## Na co si dát pozor

- **Světlý režim.** Web nemá tmavý režim, tmavý snímek by z něj vyčníval.
- **Šířka okna zhruba 1280 px.** Nemusí sedět na pixel — rozměry si po dodání
  načtu přímo ze souborů a doplním je do `ai-mode.mdx` sám.
- **Odhlášený účet, nebo aspoň bez viditelného jména a avataru.** Snímek jde na veřejný web.
- **Žádné osobní dotazy v historii** v levém panelu.
- **PNG.** Screenshoty rozhraní jsou ostřejší v PNG než v JPEG.
- Dotaz na snímku klidně věcný k tématu, například „co je režim AI v Googlu".

## Proč to nedodal Claude sám

Automatické pořízení Google zablokoval: prohlížeči bez okna vrátil ověření
„Nejsem robot". CAPTCHA se neobchází, a snímat obrazovku uživatele kvůli tomu
není namístě — zabírá i soukromá okna. Proto to zůstává na ruční pořízení.

Po doplnění snímků je tenhle soubor možné smazat.
