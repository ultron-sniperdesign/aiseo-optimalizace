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

## Na co si dát pozor

- **Světlý režim.** Web nemá tmavý režim, tmavý snímek by z něj vyčníval.
- **Šířka okna 1280 px** (výška zhruba 820). Když bude jiná, uprav `width`/`height`
  u příslušného `<Figure>` v `ai-mode.mdx`, ať se nekýve rozložení při načítání.
- **Odhlášený účet, nebo aspoň bez viditelného jména a avataru.** Snímek jde na veřejný web.
- **Žádné osobní dotazy v historii** v levém panelu.
- **PNG.** Screenshoty rozhraní jsou ostřejší v PNG než v JPEG.
- Dotaz na snímku klidně věcný k tématu, například „co je režim AI v Googlu".

## Proč to nedodal Claude sám

Automatické pořízení Google zablokoval: prohlížeči bez okna vrátil ověření
„Nejsem robot". CAPTCHA se neobchází, a snímat obrazovku uživatele kvůli tomu
není namístě — zabírá i soukromá okna. Proto to zůstává na ruční pořízení.

Po doplnění snímků je tenhle soubor možné smazat.
