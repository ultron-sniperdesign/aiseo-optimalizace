# IMAGE_GUIDE.md — featured image k blog článku

> Pro Bloger session. Jak vygenerovat a správně umístit **hlavní obrázek**
> článku, který se zobrazí na výpisu `/blog/` (thumbnail) i v detailu článku
> (hero banner). Každý článek MUSÍ mít obrázek, jinak je na kartě + heru
> rozbitý (404) a chybí i og:image pro sdílení.

---

> ## ⛔ NEJČASTĚJŠÍ SELHÁNÍ — přečti dřív, než napíšeš prompt
>
> **CZ text v obrázku je POVINNÁ součást stylu, ne volitelný doplněk.** Nikdy do promptu
> nepiš `no text`, `no letters`, `no words` — je to přesný opak §4. Bez nadpisu vlevo nahoře
> obrázek nejde odlišit od generické abstraktní grafiky a nesedí do sady.
>
> **Nepiš prompt od nuly podle vlastního citu.** Zkopíruj preambuli z §5, doplň jen
> scénu + CZ nadpis a podtitul. Pozadí je **světle modro-šedé**, ne tmavé.
>
> *(Historie: v runech 51–62 vznikla série tmavých abstraktních obrázků bez textu, protože
> se prompty psaly ad-hoc a obsahovaly „absolutely no text". Přegenerováno 2026-07-27.)*

---

## 1. Čím generovat — skill + model

- **Skill:** `open-ai-api-core` (`~/.claude/skills/open-ai-api-core/scripts/image.py`)
- **Model: `gpt-image-2`** (umí renderovat **český text včetně diakritiky** — ověřeno; difúzní modely jako Nano Banana text komolí, proto GPT Image 2).
- **API klíč:** `OPENAI_API_KEY` (env, v `~/.zshenv` — netřeba řešit).

### Přesný příkaz

```bash
cd "/Users/ultroncloudehome/Desktop/Ultron DISK/SNIPER DESIGN ULTRON/SNIPER DESIGN/aiseo-optimalizace.cz"
SKILL_DIR="$HOME/.claude/skills/open-ai-api-core"

python3 "$SKILL_DIR/scripts/image.py" \
  --model gpt-image-2 \
  --size 1536x1024 \
  --quality high \
  --output "public/og/<slug>.png" \
  --prompt '<prompt — viz §5>'
```

`<slug>` = `slug` z frontmatteru článku. Cena ~5–6k tokenů/obrázek.

---

## 2. Rozměr + KRITICKÉ: jak se obrázek ořízne při zobrazení

- **Generuj 1536×1024** (jediný landscape rozměr gpt-image-2 = poměr 3:2).
- **ALE zobrazuje se v poměru ~16:9** (`aspect-ratio: 1200/669`, `object-fit: cover`,
  `object-position: center top`) — na kartě i v heru.
- **Důsledek: ořízne se spodních ~16 % obrázku.** Horní část zůstává.

> ⚠️ **Kompoziční pravidlo (nejdůležitější):**
> **Text dej vlevo nahoru** a **veškerý důležitý obsah do horních ~84 %** obrázku.
> Spodní pruh (~16 %) je „safe-to-crop" zóna — jen dekorace, nic podstatného tam nedávej.
> (Existující OG obrázky jsou nativně 16:9 a zobrazí se celé; nově generované 3:2
> se ořežou zespodu — proto top-safe kompozice.)

---

## 2b. POVINNÉ: tři soubory, ne jeden

⚠️ **Opraveno 2026-07-27 podle skutečného chování šablony.** `RichLayout.astro` sahá na
`/og/<slug>.jpg` (hero `<img>` + `og:image`) a `/og/<slug>.webp` (`<source>` v `<picture>`).
**Na `.png` se nikde neodkazuje** — je to jen master pro pozdější regeneraci.
Když `.jpg` chybí, `og:image` vrací 404 a náhledy při sdílení jsou rozbité (stalo se
u 12 článků, opraveno commitem `ff3fa1b`).

Po vygenerování PNG **vždy vyrob obě odvozeniny**:

```bash
node -e "
const sharp=require('sharp'), s='<slug>';
sharp('public/og/'+s+'.png').resize(1200,800,{fit:'cover'}).jpeg({quality:82}).toFile('public/og/'+s+'.jpg');
sharp('public/og/'+s+'.png').webp({quality:78}).toFile('public/og/'+s+'.webp');"
```

Commituj všechny tři (`.png` master, `.jpg`, `.webp`).

## 3. Kam uložit

- **`public/og/<slug>.{png,jpg,webp}`** — trojice, která slouží zároveň jako:
  1. **featured image** na kartě výpisu + hero v detailu (odvozeno ze slugu, žádné frontmatter pole netřeba),
  2. **og:image** pro sociální sdílení (BaseLayout bere `/og/<slug>.jpg`).
- **Žádné jiné umístění.** Nepatří do `public/blog/<slug>/` (tam jdou jen inline obrázky v textu).
- Bez `.jpg` = rozbitý obrázek na kartě, heru i v og:image.

---

## 4. Styl (musí ladit s existující sadou)

- **Flat vektorová editorial ilustrace**, moderní minimalistická, tech.
- **Paleta:** královská indigo modrá + tmavá slate navy (linky i výplně), na **velmi světlém modro-šedém pozadí**. Drobné akcentní odznaky zeleně/oranžově. **Červená/coral jen u „chyby/varování"** témat.
- **AI motiv:** jemné čtyřcípé „sparkle" hvězdičky.
- **Provedení:** zaoblené obdélníky, tenká 2px linka, hodně bílého prostoru, **flat — žádné gradienty, žádný fotorealismus.**
- **Scéna:** konceptuálně k tématu článku (prohlížeč / dashboard / karty / ikony / grafy).
- **CZ text v obrázku:** velký bold sans-serif **nadpis vlevo nahoře** (typicky hlavní klíčové slovo, např. `SEO GEO`, `AI SEO audit`) + menší **podtitul** pod ním. Diakritiku piš správně, krátce, přesně.
- **Bez log a značek** (NE reálné logo ChatGPT/Google — ochranné známky).

---

## 5. Prompt — šablona + příklad

Skládá se z: **stylová preambule (konstantní)** + **scéna k tématu** + **CZ text instrukce**.

### Konstantní preambule (kopíruj)

```
Flat vector editorial illustration, 16:9 landscape, modern minimal tech aesthetic.
Palette: royal indigo blue and dark slate navy line art and flat fills, on a very
light blue-gray background, small soft accent badges in green and amber. Subtle
four-point sparkle star motifs suggesting AI. Clean rounded rectangles, thin 2px
line work, generous whitespace, flat design, no gradients, no photorealism.
```

### + scéna + text (uprav per článek)

```
Scene: <konkrétní motiv k tématu — např. AI chat panel citující zdroj / answer box
nad výsledky / dashboard s grafy / checklist s varováními>. Keep key elements in the
upper and middle area.
Include legible Czech text: a large bold sans-serif headline reading exactly:
<HLAVNÍ LABEL>  in dark navy in the upper-left, and a smaller medium-weight subtitle
directly below reading exactly: <PODTITUL> . Spell the Czech text exactly with correct
diacritics. No other text, no logos, no brand marks.
```

### Hotový příklad (GEO článek)

```
Flat vector editorial illustration, 16:9 landscape, modern minimal tech aesthetic.
Palette: royal indigo blue and dark slate navy line art and flat fills, on a very
light blue-gray background, small soft accent badges in green and amber. Subtle
four-point sparkle star motifs suggesting AI. Clean rounded rectangles, thin 2px
line work, generous whitespace, flat design, no gradients, no photorealism. Scene:
an AI chat answer panel on the right showing a few abstract answer lines and one
highlighted source citation link, connected by thin lines to a document icon on the
left; sparkle stars around the panel. Keep key elements in the upper and middle area.
Include legible Czech text: a large bold sans-serif headline reading exactly: SEO GEO
in dark navy in the upper-left, and a smaller medium-weight subtitle directly below
reading exactly: Generativní optimalizace . Spell the Czech text exactly with correct
diacritics. No other text, no logos, no brand marks.
```

> **Shell gotcha:** `--prompt` obal do **jednoduchých** uvozovek `'...'` a uvnitř
> promptu nepoužívej apostrof `'`. (Dvojité uvozovky `"` uvnitř jsou OK.)

---

## 6. Workflow krok za krokem

1. Článek má hotový frontmatter se `slug`.
2. Vygeneruj obrázek příkazem z §1 s `--output "public/og/<slug>.png"`.
3. **Zkontroluj vygenerovaný soubor** (otevři/Read): je CZ text čitelný a správně
   napsaný (diakritika)? Je důležitý obsah v horních ~84 %? Pokud text zkomolený
   nebo špatná kompozice → uprav prompt a regeneruj.
4. `npm run build` — musí projít.
5. Vizuálně ověř kartu `/blog/` i detail `/blog/<slug>/` (text obrázku se nikde
   neusekne; spodní ořez ~16 % nesmí brát nic důležitého).
6. Commit + push (obrázek jde spolu s `.md` článku).

---

## 7. Verifikace po deployi

```bash
SLUG="<slug>"
curl -sSI "https://aiseo-optimalizace.cz/og/$SLUG.png" | head -1   # → 200
# + očima: karta /blog/ a hero /blog/<slug>/ ukazují obrázek, text celý
```

---

## 8. Co NEdělat

- ❌ **Nikdy nepiš do promptu `no text` / `no letters` / `no words`.** CZ nadpis je povinný (§4). Tohle je nejčastější chyba — viz box na začátku souboru.
- ❌ **Nepiš prompt od nuly.** Preambule z §5 doslova, měň jen scénu a CZ texty. Tmavé pozadí = mimo sadu.
- ❌ Negeneruj přes difúzní modely (Nano Banana, DALL·E) když má být v obrázku text — komolí češtinu. **Vždy gpt-image-2.**
- ❌ Nedávej text ani klíčový obsah do **spodních ~16 %** (ořízne se).
- ❌ Nezapomeň na `.jpg` + `.webp` odvozeniny (§2b) — bez `.jpg` je og:image 404.
- ❌ Neukládej jinam než `public/og/<slug>.*`.
- ❌ Žádná reálná loga/značky v obrázku.
- ❌ Apostrof `'` uvnitř `--prompt` (rozbije shell). Diakritika OK, dvojité uvozovky OK.

---

> **Pozn. k poměru:** existující OG obrázky jsou 16:9 (1200×669), nově generované
> 3:2 (1536×1024). Zobrazení je sjednocené na 1200/669 + `object-position: center top`,
> takže 3:2 ztratí jen nedůležitý spodek. Master kopie nově generovaných drž i v
> `_source/_blog-images/<slug>.png` (volitelné, pro pozdější regeneraci).
