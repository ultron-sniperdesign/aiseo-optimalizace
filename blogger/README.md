# Blogger — publish guide pro aiseo-optimalizace.cz

> **Pro koho je tato složka:** session/vlákno blogger (lidský autor nebo Claude session
> s tagem `aiseo-blogger`), které **dostává hotový článek** (psaný ručně nebo
> vlastním copy skillem) a potřebuje ho **dostat na živý web** `aiseo-optimalizace.cz`.
>
> **Co tato složka NEPOPISUJE:** jak článek napsat. Celý postup od researche přes draft
> a audit až po publikaci má **`CONTENT_WORKFLOW.md`** (bloky A–D). Tenhle soubor řeší
> jen to, kam hotový text uložit, jak ho otestovat a nasadit.
>
> **Když si tyhle dva soubory odporují, platí `CONTENT_WORKFLOW.md`** — je konkrétnější
> a udržovanější.
>
> **Stav infrastruktury:** Web je LIVE od května 2026. Articles collection má
> **165 článků** (stav k 15. 9. 2026), automatický deploy přes GitHub Actions (~1–2 min),
> URL pattern `https://aiseo-optimalizace.cz/blog/<slug>/`.

---

## 🚀 TL;DR — publish workflow ve 4 krocích

```bash
# 1. Ujisti se, že jsi v project rootu
cd "/Users/ultroncloudehome/Desktop/Ultron DISK/SNIPER DESIGN ULTRON/SNIPER DESIGN/aiseo-optimalizace.cz"

# 2. Vytvoř soubor článku (název = slug + .mdx)
# Frontmatter + obsah → src/content/articles/<slug>.mdx
# Šablona: blogger/ARTICLE_TEMPLATE.md (zkopíruj, vyplň, ulož)

# 3. Lokální verifikace (Astro check + build)
npm run build

# 4. Commit + push → CI automaticky deploynue do ~1–2 min
git add src/content/articles/<slug>.mdx public/og/<slug>.jpg public/og/<slug>.webp
git add .astro-indexnow-cache.json   # POVINNÉ — viz „Proč se cache commituje" níže
git commit -m "Blog: <krátký popis článku>"
git push origin main
```

URL po deployi: `https://aiseo-optimalizace.cz/blog/<slug>/` (slug je z frontmatteru, ne z názvu souboru).

---

## 📂 Kam článek patří

| Co | Kam | Poznámka |
|---|---|---|
| MDX soubor | `src/content/articles/<slug>.mdx` | Vždy `.mdx`, viz níže. Název souboru je libovolný, kanonický slug je ve frontmatteru |
| Custom obrázky v textu | `public/blog/<slug>/<obrazek>.{webp,png,jpg}` | Referencuj jako `/blog/<slug>/obrazek.webp` |
| Featured / OG image | `public/og/<slug>.jpg` + `public/og/<slug>.webp` | **Obojí povinné. `.png` do repa NEPATŘÍ** — je to jen pracovní mezikrok generování, po vytvoření odvozenin se maže (rozhodnutí z 15. 9. 2026). Postup: `IMAGE_GUIDE.md` |
| Nikam jinam **nesahej** | `src/components/`, `src/layouts/`, `src/pages/`, `_source/`, `public/_review/`, `worker/` | To je doména hlavní project session |

**Důležitý kontrast:** Bloger session edituje **JEN** `src/content/articles/`, `public/blog/<slug>/` a `public/og/<slug>.jpg` + `.webp`. Nic jiného. Pokud si myslíš, že potřebuješ něco jinde — ozvi se hlavnímu vláknu.

---

## 📄 Formát článku: vždy `.mdx` + `variant: "rich"`

**Žádná volba tu není.** Článek je `.mdx` kvůli importu komponent a ve frontmatteru má `variant: "rich"`. Bez toho se nevykreslí rich layout.

Ověřeno proti repu 15. 9. 2026: **všech 165 článků v `src/content/articles/` je `.mdx` a všech 165 má `variant: "rich"`.** Žádná výjimka.

> Do 15. 9. 2026 tu stálo, že se má preferovat `.md` a MDX používat jen výjimečně. To bylo zastaralé a odporovalo to `CONTENT_WORKFLOW.md` i reálnému stavu repa. Kdyby se ti někde ještě objevil starý pokyn na `.md`, platí tenhle.

---

## 🧾 Povinný frontmatter (článek se bez něj nesbuilduje)

Astro 5 používá Content Collections se Zod schématem v `src/content.config.ts`.
**Pokud frontmatter nepasuje, `npm run build` selže s validation error a článek se nepublikuje.**

### Minimální frontmatter (8 povinných polí)

```yaml
---
title: "Titulek článku (50–60 znaků, klíčové slovo nahoru)"
description: "Meta description 70–160 znaků. Hook + benefit. Co čtenář získá."
answer: "40–60 slovní krátká definice tématu pro AI scrapery. Tučně vykreslená nahoře v článku, čte ji ChatGPT/Perplexity/AIO. Musí dávat samostatný smysl bez kontextu zbytku článku. Konkrétní fakta, žádné fráze."
slug: "url-slug-clanku"
category: "analysis"
tags:
  - "strukturovana-data"
  - "duveryhodnost"
updated: "2026-09-15"
keywords:
  - "klíčové slovo 1"
  - "klíčové slovo 2"
  - "long-tail varianta"
---
```

### Volitelná pole

> ⚠️ **`variant: "rich"` už volitelné NENÍ** — má ho všech 165 článků a bez něj se nevykreslí rich layout. Ber ho jako povinné pole, i když ho schéma nevynucuje. Zbytek níže volitelný je.

```yaml
variant: "rich"          # POVINNÉ v praxi. sticky TOC, dividery, progress bar
stats:                   # 3–4 dlaždice nad textem
  - value: "12"
    label: "chyb v auditu"
  - value: "4–6"
    label: "typicky vidíme"
faq:                     # FAQ pod článkem + FAQPage JSON-LD (důležité pro AI citace)
  - q: "Otázka, jak ji napíše uživatel"
    a: "Odpověď v 1–3 větách. Sebestačná, žádné odkazy na 'výše v článku'."
howto:                   # HowTo schema (jen u tutoriálových článků)
  name: "Název postupu"
  steps:
    - name: "Krok 1"
      text: "Co konkrétně udělat"
```

### Reference k jednotlivým polím

| Pole | Typ / regex | Vysvětlení |
|---|---|---|
| `title` | string | H1 článku. SEO best practice 50–60 znaků. Klíčové slovo na začátek. |
| `description` | string, **min 70, max 160** znaků | Meta description. Validuje se na build! Pod 70 nebo nad 160 = error. |
| `answer` | string | „Krátká odpověď" 40–60 slov. AI scraper hook. Vykresluje se tučně nahoře. **Sebestačná** — bez kontextu zbytku článku musí dát smysl. |
| `slug` | `^[a-z0-9-]+$` | Lowercase, bez diakritiky, slovní oddělovač = pomlčka. **Toto je finální URL** (`/blog/<slug>/`). Nikdy neměnit po publikaci (rozbije linky a indexy). |
| `category` | enum: `defensive` / `case-study` / `tutorial` / `analysis` | Volba ovlivňuje breadcrumb label a filter chip v `/blog/`. Viz tabulka níže. |
| `tags` | string array | **Povinné.** Tematické štítky článku, používají se pro filtrování a související články. Drž se zavedených (`ai-platformy`, `strategie`, `mereni`, `obsah`, `technicke-zaklady`, `duveryhodnost`, `eshopy`, `strukturovana-data`, `audit-nastroje`) — nové zaváděj jen s důvodem. Zjistíš je: `grep -hA6 "^tags:" src/content/articles/*.mdx \| grep -oE '"[a-z-]+"' \| sort \| uniq -c \| sort -rn` |
| `updated` | `^\d{4}-\d{2}-\d{2}$` (ISO date) | Datum poslední aktualizace. Vykresluje se na článku + jde do `<meta>` a JSON-LD `dateModified`. **Aktualizuj při každém významném update.** |
| `keywords` | string array | Pro `<meta keywords>` + interní reference. 5–10 klíčových slov + variant. |
| `variant` | vždy `"rich"` | Sticky TOC, section dividers, numbered H3 cards, reading progress bar, stat tiles. **Má ho všech 165 článků** — `classic` se nepoužívá, nepiš ho. |
| `stats` | array `{ value, label }` | 3–4 dlaždice s číslem + popiskem nad lead odstavcem. |
| `faq` | array `{ q, a }` | **Silně doporučeno.** Generuje FAQPage JSON-LD = AI scrapery citují odsud. 4–8 reálných otázek čtenáře. |
| `howto` | object | Generuje HowTo schema. Jen pro tutoriálové (krok-za-krokem) články. |

### Kategorie — co kam patří

| `category` | Popisek v UI | Typický obsah |
|---|---|---|
| `analysis` | „Analýza" | Trendy, datové rozbory, srovnání platforem, „co se mění" |
| `tutorial` | „Tutorial" | Krok-za-krokem postupy s `howto` polem (přidání schema, audit, instalace) |
| `defensive` | „Defenzivní" | „Jak omezit/zabránit/vypnout" — obrana proti AIO, scraperům, atd. |
| `case-study` | „Case study" | Konkrétní zákazník/web, before/after metriky |

---

## ✍️ Body článku — pravidla obsahu

> **Klíč pro AI éru:** první 100 slov musí dát samostatnou odpověď + zbytek prohlubuje.
> AI scrapery (ChatGPT, Perplexity, Gemini, AIO) čerpají z `answer` frontmatteru +
> z prvních H2/H3 sekcí. Lead, který odbočuje od slibu nadpisu, nikdo necituje.

### Struktura, kterou drží existující články

1. **H2 s lead odstavcem** — krátká rozcestníková věta (1–2 odstavce) navazující na `answer`. Žádné „v dnešním rychle se měnícím světě…".
2. **H2 sekce 3–6×** — každá s vlastní pointou. Konkrétní fakta, čísla, příklady.
3. **H3 podsekce v rámci H2** — pokud má smysl. Nepřehánět hloubku (max H3, výjimečně H4).
4. **Závěr / CTA** — 1 odstavec syntézy + 1 CTA na audit / Pack / kontakt (relevantní pro kontext článku).

### Markdown gotchas v tomto repo

| Co | Jak |
|---|---|
| Tučné | `**slovo**` |
| Inline kód | `` `proměnná` `` |
| Code block | trojité backticky + jazyk (` ```bash `) |
| Inline HTML pro highlight | `<span class="hl">slovo</span>` — žluté podtržení (existující styl) |
| Tabulky | standardní GFM |
| Obrázek | `![alt text](/blog/<slug>/obrazek.webp)` (asset v `public/blog/<slug>/`) |
| Interní link na článek | `[text](/blog/<jiný-slug>/)` |
| Interní link na sekci | `[text](/seo/)`, `[text](/geo/)`, `[text](/aeo/)`, `[text](/aio/)`, `[text](/prakticky-postup/)`, `[text](/rozhodovaci-matice/)` |
| Pillar link | `[text](/seo-vs-geo-vs-aeo-vs-aio/)` |
| Externí link | standardní `[text](https://…)` — automaticky dostane `rel="noopener noreferrer"` + `target="_blank"` přes `rehype-external-links` |

### Délka článku — orientace

- Tutorial / defensive: **800–1500 slov**
- Analysis: **1500–3000 slov**
- Case study: **1000–2000 slov**

Tohle není pravidlo, jen orientace. **Důležitější je hustota faktů než počet slov.**

---

## 🧪 Lokální verifikace (před `git push`)

```bash
cd "/Users/ultroncloudehome/Desktop/Ultron DISK/SNIPER DESIGN ULTRON/SNIPER DESIGN/aiseo-optimalizace.cz"

# A) Dev server — preview článku v prohlížeči
npm run dev
# → http://localhost:4321/blog/<slug>/
# → http://localhost:4321/blog/ (článek vidět v listingu)

# B) Jazyková kontrola (POVINNÁ, BLOK C6 v CONTENT_WORKFLOW.md)
python3 blogger/jazyk-check.py src/content/articles/<slug>.mdx --slovnik blogger/JAZYK_SLOVNIK.md
# → musí hlásit 0 nálezů. Postup a LLM průchod: skill `cestina-audit`.

# C) Production build — finální validace (CI dělá totéž)
npm run build
# → musí projít BEZ errors. Astro check validuje frontmatter proti Zod schema.
# → výstup do dist/, 276 stránek (stav k 15. 9. 2026).

# D) Preview production build
npm run preview
# → http://localhost:4321 — totožné s tím, co bude live
```

**Co dělat, když build selže:**

| Chyba | Příčina | Fix |
|---|---|---|
| `String must contain at least 70 character(s)` (description) | description < 70 nebo > 160 znaků | Přepsat description na 70–160 znaků |
| `Invalid enum value` (category) | category mimo povolenou množinu | Použij `defensive` / `case-study` / `tutorial` / `analysis` |
| `Invalid string` (slug) | slug obsahuje velká písmena, diakritiku nebo speciální znaky | Lowercase + pomlčky + `[a-z0-9-]` only |
| `Invalid string` (updated) | datum není ISO `YYYY-MM-DD` | Použij formát `2026-09-15` |
| `Required` | chybí povinné pole | Doplň všech **8** povinných polí (title, description, answer, slug, category, **tags**, updated, keywords) |
| Cokoli jiného | viz Astro stack trace, ozvi se hlavnímu vláknu | — |

---

## 🚢 Deploy — commit, push, CI

### Co se stane po `git push origin main`

1. **GitHub Actions workflow** `.github/workflows/deploy.yml` se spustí automaticky
2. Kroky: `npm ci` → `npm run build` (Astro + sitemap + IndexNow) → rsync `dist/` na VPS
3. **Smoke test** kontroluje `curl https://aiseo-optimalizace.cz` → 200
4. Doba: **~1–2 minuty**
5. Po úspěchu je článek **live na `https://aiseo-optimalizace.cz/blog/<slug>/`**

### Commit message konvence

Existující commity:
```
Blog: SEO pro e‑shopy v AI éře 2026 (nový analysis článek)
Blog: jak vypnout AI Overview (defensive update — 2026-05-06)
Blog: case study Heuréka (před/po implementaci Product schema)
```

Pattern: `Blog: <stručný popis> (<volitelná poznámka>)`.

### Příklady kompletního push workflow

```bash
# Nový článek
git add src/content/articles/jak-pridat-organization-schema.mdx
git add public/og/jak-pridat-organization-schema.*        # featured image, povinné
git add public/blog/jak-pridat-organization-schema/       # pokud máš obrázky v textu
git add .astro-indexnow-cache.json                        # POVINNÉ, build ji přepsal
git commit -m "Blog: jak přidat Organization schema (tutorial)"
git push origin main

# Update existujícího článku (bumpni `updated:` ve frontmatteru!)
git add src/content/articles/seo-pro-eshopy-ai-era-2026.mdx
git commit -m "Blog: SEO pro e-shopy 2026 — update cen služeb po Q2"
git push origin main

# Sledování CI
gh run watch  # nebo: gh run list --branch main --limit 3
```

### Co dělat při selhaném CI

```bash
# Identifikace
gh run list --branch main --limit 3
gh run view <run-id> --log-failed

# Typické příčiny
# 1. Frontmatter validation → fix lokálně, npm run build, commit fix
# 2. SSH deploy timeout → re-run workflow
gh run rerun <run-id>
# 3. Cokoli záhadného → ozvi se hlavnímu vláknu (cross-session/aiseo-optimalizace.md)
```

---

## ✅ Verifikace po deployi

```bash
SLUG="muj-novy-clanek"

# 1. Článek je live na vlastní URL
curl -sSI "https://aiseo-optimalizace.cz/blog/$SLUG/" | head -1
# → HTTP/2 200

# 2. Je v listingu /blog/
curl -s https://aiseo-optimalizace.cz/blog/ | grep -c "$SLUG"
# → ≥ 1

# 3. Je v sitemap
curl -s https://aiseo-optimalizace.cz/sitemap-0.xml | grep "$SLUG"
# → 1× výskyt

# 4. JSON-LD se vykreslil
curl -s "https://aiseo-optimalizace.cz/blog/$SLUG/" | grep -c 'application/ld+json'
# → ≥ 2 (Article + BreadcrumbList; +FAQPage pokud frontmatter má faq; +HowTo pokud má howto)

# 5. IndexNow — čti VÝSLEDEK, ne jen že se odesílalo
# Hláška „[astro-indexnow] submitting N changed URLs" oznamuje jen ZAČÁTEK pokusu.
# Závěrečné „IndexNow submission complete" se vypíše VŽDY, i když všechny batche
# selhaly — ověřeno ve zdroji knihovny 16. 9. 2026: `saveCache` i ta hláška jsou
# mimo jakoukoli kontrolu úspěchu. Skutečný výsledek nese jen warn mezi nimi:
#   „[astro-indexnow] batch N failed (403)"       ← HTTP chyba
#   „[astro-indexnow] batch N submission failed"  ← síťová chyba
# Když je v logu warn, odeslání NEPROBĚHLO. Cache si URL přesto zapsala jako
# hotovou, takže se příštím buildem samo NEZOPAKUJE — musíš ji podat ručně.
```

### Proč se `.astro-indexnow-cache.json` commituje

CI build je ephemeral — checkoutne repo a nic si nepamatuje. Cache v repu mu říká,
které URL už šly do IndexNow. **Když se cache necommitne, každý build považuje celý
web za nový a znovu podá všechny URL.** Po čase to IndexNow odmítne (HTTP 403) a
protože integrace chybu jen warnuje, nikdo si toho nevšimne.

> **Stav k 16. 9. 2026 — necommitnutá cache se reálně děje.** Cache je naposled
> commitnutá **17. 5. 2026 s 39 URL**, v pracovním stromu jich je **277**. Rozdíl
> 238 URL se podává znovu při každém buildu už čtyři měsíce. `.gitignore` má na
> řádku 58 výjimku `!.astro-indexnow-cache.json`, takže úmysl sledovat ji gitem tam
> je — jen ji publikační postup nikdy nedával do `git add`. **Tohle opravit je
> správně bez ohledu na cokoli dalšího.**

> **Commitnuto 16. 9. 2026 (`44c6345`) — a NEFUNGUJE to.** Dva nasledujici CI buildy
> hlasily shodne `submitting 261 changed URLs`, druhy z nich (`e925d7e`) pritom
> nemenil jedinou stranku webu — jen soubory v `blogger/`, ktere se nedeployuji.
> Kdyby cache fungovala, bylo by tam `submitting 0`.
>
> **Proc:** cache porovnava **sha256 zbuildovaneho `index.html`**, ne seznam URL.
> Baseline v repu pochazi z lokalniho buildu a CI produkuje jine hashe. CI je navic
> ephemeral a svoji verzi cache nikam nezapisuje, takze se to nesrovna nikdy.
>
> **Rucni commit cache tedy problem neresi** a `git add` vyse ji drzi jen proto, aby
> se stav neztracel. Skutecna oprava je na spravci: bud cache po buildu commituje
> bot, nebo se detekce zmen prestane opirat o hash HTML. Dokud to plati, bude kazdy
> build podavat stovky URL znovu.

> ### ⛔ IndexNow pro tento web teď NEFUNGUJE — nezkoušej to obcházet
>
> Ověřeno ručním podáním 16. 9. 2026 (`jazykove-mutace-pro-ai`, stránka živá, HTTP 200):
>
> ```
> {"errorCode":"UserForbiddedToAccessSite",
>  "message":"User is unauthorized to access the site. Please verify the site using the key and try again"}
> → HTTP 403
> ```
>
> **Klíč za to nemůže — ověřeno vyčerpávajícím způsobem** týž den:
> `/929226a175c657aac3ba73a765ee364d.txt` vrací HTTP 200, `content-type: text/plain`,
> obsah je přesně 32 bajtů shodných s klíčem (bez BOM, bez koncového odřádkování,
> ověřeno přes `xxd`), `www` varianta dělá 301 na apex. **Zpráva od API tě posílá
> klíč ověřovat — je to slepá ulička, tudy to nevede.**
>
> **Příčina není známá.** Odmítnutí je na straně poskytovatele, ne v repu. Podezření
> padá na to, že se čtyři měsíce při každém buildu znovu podávalo 238 URL (viz cache
> výš) a host se tím zablokoval — **je to ale jen hypotéza, chybová hláška ji
> nepotvrzuje.** Ověřit se dá jen z účtu v Bing Webmaster Tools.
>
> **Co z toho plyne pro psaní článků:** IndexNow je momentálně rozbitý pro **celý
> web**, ne pro tvůj článek. Nepodávej URL ručně, nezkoušej to opakovaně a neřeš to
> v rámci runu — jen to zapiš do reportu. Řeší to správce. Do té doby použij **Bing
> Webmaster Tools → Submit URL** ručně.


### Když IndexNow selže

1. **Nezkoušej ověřovat klíč** — je ověřený (viz blok výš) a API tě tam posílá zbytečně.
2. **Rebuild nepomůže** — cache už URL eviduje jako podanou, takže další build napíše
   „no changed URLs detected, skipping submission".
3. **Ruční podání teď taky nepomůže** — vrací stejné 403 pro celý web, ověřeno.
4. **Zapiš to do reportu a pokračuj.** IndexNow je urychlovač indexace, ne podmínka
   publikace. Náhrada je Bing Webmaster Tools → Submit URL.

Až bude blokace vyřešená, ruční podání jedné URL vypadá takto (**neopakovat, jednou**):

```bash
curl -sS -w '\n%{http_code}\n' \
  "https://api.indexnow.org/indexnow?url=https://aiseo-optimalizace.cz/blog/<slug>/&key=929226a175c657aac3ba73a765ee364d"
# 200 nebo 202 = přijato
```

> **Publikace je hotová po úspěšném deployi a kontrole veřejné stránky (kroky 1–4).**
> Odeslání do IndexNow vykazuj zvlášť — není součástí definice hotového článku.

### Po publikaci doporučené

- **Google Search Console** → URL Inspection → „Request indexing" pro nový článek
- **Bing Webmaster Tools** → Submit URL — **udělej to vždycky, když v logu byl warn o selhaném batchi.** Formulace „IndexNow už podaný" platí jen tehdy, když log žádný warn neobsahoval.
- **Sociální sdílení** → ozvi se marketing session (`marketing/`), kdy a kam postnout

---

## 🚫 Co NIKDY nedělat

- **Neměnit `slug` po publikaci** — rozbije Google index, interní linky, sociální sdílení. Pokud opravdu musíš, zařiď 301 redirect (ale to už není doména blogger session — eskaluj).
- **Necommitovat secrets** — žádné API klíče, hesla, tokeny v markdownu ani frontmatteru.
- **Nedeklarovat datum v budoucnosti** — `updated:` musí být ≤ dnes (search engines to penalizují jako manipulaci).
- **Nepsat duplicit obsah** — pokud podobný článek existuje, raději update existujícího (a bumpni `updated:`).
- **Nesahat mimo svou doménu** — viz tabulka „Kam článek patří" výše.
- **Negenerovat článek bez `answer` a `faq`** — bez nich je článek pro AI éru poloviční. Frontmatter projde, ale nedostaneš AI citace.
- **Nepoužívat `npm run build --no-check` ani `git push --no-verify`** — vždy ať schema-validation projde.
- **Nedeploynout přes `git push --force`** — nikdy. Když je problém, ozvi se hlavnímu vláknu.

---

## 📌 Quick reference — soubory v `blogger/`

| Soubor | Co je |
|---|---|
| `README.md` (tento soubor) | Mechanika publikace — kam uložit, jak ověřit, jak nasadit |
| `CONTENT_WORKFLOW.md` | **Celý pipeline** research → draft → audit → jazyk → publikace. Při rozporu s tímhle souborem platí on |
| `Content Workflow Codex.md` | Varianta pipeline pro Codex (nemá přístup ke Claude skillům) |
| `ARTICLE_TEMPLATE.md` | Kopírovatelná šablona článku s vyplněným frontmatterem + ukázkou body |
| `IMAGE_GUIDE.md` | Featured / OG image — prompt, kompozice, odvozeniny |
| `auditor-system.md` | Systémový prompt pro OpenAI auditora (bloky C2, C4) |
| `obsahovy-plan.csv` | Fronta témat + evidence publikací. **Velký soubor, prohledávej grepem** |
| `REFRESH_QUEUE.md` | Fronta článků k aktualizaci (kadence 2:1, blok A6). **Velký soubor** |
| `JAZYK_SLOVNIK.md` | Slovník hlídaných výrazů (⛔ / ⚠️ / ✅) — jediný zdroj pravdy, skill na něj má symlink |
| `jazyk-check.py` | Mechanická jazyková kontrola článku proti slovníku |
| `JAZYK_AUDIT_LOG.md` | Log jazykových auditů — hustota nálezů na 1 000 slov před/po. **Velký soubor** |
| `research/<slug>/` | Podklady k jednotlivým článkům. **Nečti plošně**, jen konkrétní soubor |
| `PRIORITA_*.md`, `PLAN_KOLIZE_*.md`, `REVIZE_PLANU_*.md` | Archiv historických zadání. Pro běžný run je nepotřebuješ |

---

## 🆘 Když je něco nejasné

1. Mrkni do `src/content/articles/` na **existující článek nejbližšího typu** (analysis / tutorial / defensive / case-study) — copy-paste pattern je nejrychlejší cesta.
2. Mrkni do `src/content.config.ts` — to je **kanonické schema**, validuje se proti němu při buildu.
3. Mrkni do hlavního `CLAUDE.md` projektu — má sekce II / III s tech stackem a mapou souborů.
4. Mrkni do `marketing/05-messaging-a-tonalita.md` — pro tón hlasu a co NIKDY neříkat.
5. Eskalace na hlavní vlákno přes `cross-session/aiseo-optimalizace.md` (formát log entry — viz existující záznamy).
