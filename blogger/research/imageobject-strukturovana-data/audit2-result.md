## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek je po jazykové stránce většinou srozumitelný a SEO základ je dobrý, ale kontrola vypořádání z 1. kola odhalila dvě nedotažené opravy. Ty jsou před publikací blokující.

---

## Nálezy

### [BLOCKER] Vypořádání k AI podmínkám není skutečně zapracované na všech označených místech

**Problémová místa:**

Frontmatter `answer`:

> „Pro odpovědi s AI podle své dokumentace nechce nic navíc nad běžnou způsobilostí ve Vyhledávání.“

Úvod:

> „Pro odpovědi s AI podle své dokumentace nechce nic navíc nad běžnou způsobilostí ve Vyhledávání.“

FAQ:

> „… stránka tedy musí být indexovaná a způsobilá k úryvku.“

Sekce hranic:

> „… nad běžnou způsobilostí ve Vyhledávání — indexovaná stránka způsobilá k úryvku — žádné zvláštní značení nepotřebují.“

Ve vypořádání je uvedeno, že na všech čtyřech místech je doplněno nejen „nad rámec běžné způsobilosti“, ale i podmínka indexace, způsobilosti k úryvku a možnosti omezení přes `nosnippet`, `data-nosnippet`, `max-snippet` a `noindex`. V textu to tak není: v `answer` a úvodu jsou podmínky jen zkratkovité, ve FAQ a v sekci hranic chybí direktivy.

**Návrh opravy:**

Buď AI tvrzení z těchto míst zkraťte/odstraňte, nebo všude doplňte stejnou úplnou podmínku. Pro `answer` je potřeba zůstat v rozsahu 40–60 slov, například:

> „ImageObject jsou strukturovaná data pro strojově čitelná fakta o licenci a autorství obrázku. Google u nich dokumentuje způsobilost k odznaku licence v Obrázcích. Pro odpovědi s AI neuvádí další požadavky nad běžnou způsobilost: stránka musí být indexovatelná, způsobilá k úryvku a neomezená direktivami typu `nosnippet`, `data-nosnippet`, `max-snippet` a `noindex`. Obsah obrázku vysvětluje hlavně alt text a okolí.“

Stejnou logiku promítnout do úvodu, FAQ i sekce „hranice“.

---

### [BLOCKER] Zůstalo zobecnění k IPTC metadatům, které mělo být v 1. kole zmírněné

**Problémové místo:**

> `## <span class="hl">IPTC v souboru</span> je druhá cesta — <strong>a cestou na web mizí</strong>`

Vypořádání říká, že zobecnění „metadata se běžně nepřenesou“ bylo nahrazeno formulací „mohou ztratit“. Nadpis ale pořád tvrdí kategoricky, že metadata „mizí“. To je stejný problém přesunutý do H2.

**Návrh opravy:**

Změnit nadpis na podmíněnou formulaci:

> `## <span class="hl">IPTC metadata</span> jsou druhá cesta — <strong>při exportu se mohou ztratit</strong>`

Tím nadpis odpovídá zbytku sekce i vypořádání 1. kola.

---

### [WARNING] Některé H2 nenesou jasný klíčový pojem i pointu pro skenování

**Problémová místa:**

> `## Co obrázek popíše stroji doopravdy — <span class="hl">alt text</span> a <strong>okolní text</strong>`

Tady `<strong>` neobsahuje pointu, ale druhý pojem.

> `## Kde je <span class="hl">hranice</span> — <strong>co značení nezaručí</strong>`

„Hranice“ je příliš obecný pojem.

> `## Co si <span class="hl">odnést</span> — <strong>dvě různé práce</strong>`

„Odnést“ není klíčový pojem článku.

**Návrh opravy:**

Upravit H2 tak, aby zvýrazněný pojem byl skutečně tematický a tučně byla pointa:

```mdx
## <span class="hl">Alt text</span> popisuje obsah obrázku — <strong>ImageObject řeší práva</strong>
```

```mdx
## Kde má <span class="hl">ImageObject</span> hranice — <strong>nezaručí odznak ani AI citaci</strong>
```

```mdx
## Co si odnést o <span class="hl">ImageObject</span> — <strong>práva a obsah jsou dvě různé práce</strong>
```

U sekce vlastností bych také zvážil přesnější klíčový pojem:

```mdx
## <span class="hl">ImageObject vlastnosti</span>, které mají <strong>doložený účel pro licence</strong>
```

---

### [WARNING] Některé odpovědi ve FAQ nejsou sebestačné bez otázky

FAQ odpovědi mají dávat smysl i samostatně. Některé začínají zájmenem, negací nebo navazují přímo na otázku.

**Problémová místa:**

> „Doložit se to nedá.“

Bez otázky není jasné, co přesně se nedá doložit.

> „Podle dokumentace Googlu je povinné contentUrl…“

Chybí předmět — povinné pro co?

> „Google uvádí, že stačí jedna z cest…“

Bez otázky není jasné, u čeho stačí jedna cesta.

> „Není to zaručené.“

Bez otázky není jasné, co není zaručené.

**Návrh opravy:**

Přepsat první věty odpovědí tak, aby nesly kontext:

- `Pomůže ImageObject…`

  > „Vliv ImageObject na viditelnost v odpovědích s AI není doložený.“

- `Které vlastnosti jsou povinné?`

  > „U ImageObject pro obrázková metadata je podle Googlu povinné `contentUrl`…“

- `Stačí metadata v souboru…`

  > „U licenčních údajů k obrázkům Google uvádí dvě možné cesty: strukturovaná data na stránce nebo IPTC metadata uvnitř souboru.“

- `Dostanu díky značení odznak licence?`

  > „Značení licence dělá obrázek pouze způsobilým k odznaku licence; zobrazení odznaku zaručené není.“

---

### [WARNING] CTA neuvádí ceny v kanonické podobě včetně DPH / bez DPH

**Problémové místo:**

> „**[Audit AI viditelnosti](/audit/)** za 3 600 Kč… Hotové vzory sedmi typů stránek včetně strukturovaných dat jsou v **[AI SEO Wireframe Packu](/pack/)** za 1 490 Kč.“

Podle briefu mají být produkty a ceny uváděné kanonicky:

- **Audit AI viditelnosti** — 3 600 Kč bez DPH
- **AI SEO Wireframe Pack** — PDF návod, 1 490 Kč včetně DPH

V CTA chybí rozlišení DPH a u packu není uvedeno, že jde o PDF návod.

**Návrh opravy:**

> „Nevíte, jestli máte obrázky, licence a strukturovaná data na webu v pořádku? **[Audit AI viditelnosti](/audit/)** za **3 600 Kč bez DPH** projde strukturovaná data i to, z čeho má systém co citovat. Hotové vzory sedmi typů stránek včetně strukturovaných dat najdete v **[AI SEO Wireframe Packu](/pack/)** — PDF návodu za **1 490 Kč včetně DPH**.“

---

### [WARNING] Slovník používá anglicismus „crawlovatelné“ a obecné „robot“

**Problémová místa:**

> „Ověřte, že se robot k obrázku dostane“

> „Všechny odkazy na obrázky ve strukturovaných datech musí být crawlovatelné a indexovatelné.“

> „Kontrolu, že se robot k souboru dostane — crawlovatelný a indexovatelný odkaz“

Brand slovník preferuje vysvětlující češtinu. „Robot“ je příliš obecné, „crawlovatelné“ je zbytečný anglicismus.

**Návrh opravy:**

Používat „vyhledávací robot“ a popsat dostupnost česky:

> „Ověřte, že se k obrázku dostane vyhledávací robot“

> „Všechny odkazy na obrázky ve strukturovaných datech musí být dostupné pro vyhledávací roboty a indexovatelné.“

> „Kontrolu, že se vyhledávací robot k souboru dostane — odkaz je dostupný pro procházení a indexaci.“

---

### [TIP] SEO základ je v pořádku, není potřeba ho rozšiřovat obecnými zásahy

- `seoTitle` je do 60 znaků a začíná hlavním pojmem „ImageObject“.
- Meta description je v limitu 70–160 znaků.
- Slug `imageobject-strukturovana-data` je smysluplný.
- Interní odkazy na související články o strukturovaných datech a VideoObject dávají kontext.
- Krátká odpověď má správnou délku 40–60 slov a začíná definicí — jen je nutné doplnit podmínky k AI podle blockeru výše.