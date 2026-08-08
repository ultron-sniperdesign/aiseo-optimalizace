# Research — blogový modul Shoptetu

**Řádek plánu:** `shoptet blog pro ai` — BLOK „Shoptet a AI viditelnost" 5/5 (poslední díl)
**Datum měření:** 2026-08-08 · **Kategorie:** analysis · **Tagy:** eshopy, obsah

---

## 1. Otázka, kterou jsem měl poslat uživateli

Řádek plánu počítal s tím, že kroky v administraci dodá uživatel — konkrétně: má článek pole
pro autora a vidí návštěvník datum aktualizace? **Odpověděla nápověda Shoptetu**, stejně jako
v dílu 2 u robots.txt.

---

## 2. Ověřeno u primárního zdroje

**Shoptet Podpora — „Články a rubriky":** článek má pole Název, URL adresa, Text obsahu,
Rubrika, **Datum zveřejnění** (lze naplánovat dopředu), Externí URL, Náhledový obrázek;
v záložce pro vyhledávače Název (title), Popis (description), náhledový obrázek pro sociální
sítě; v záložce viditelnosti zveřejnění a omezení přístupu.

**Rubrika** má mimo jiné nastavení **„Skrýt datum zveřejnění"**, počet článků na stránce,
třídění a tlačítka zpět/další.

⛔ **Pole pro autora ani pro datum aktualizace nápověda neuvádí.** Je to absence
v dokumentaci, ne důkaz — proto to párujeme s měřením (§ 4).

⛔ **NEPŘEBÍRAT sekundární tvrzení.** Při hledání jsem narazil na cizí text, podle kterého
„blogové články na Shoptetu mají automaticky schema včetně data publikace, autora, publishera
i obrázku". **Měření to nepotvrdilo** — viz § 4.1.

---

## 3. ⛔ Chyba v prvním průchodu (druhá v řadě)

První verze skriptu považovala za článek první stránku s body class `type-post`. Jenže
**tuhle třídu má i výpis rubriky**, takže skript změřil 30 výpisů místo článků. Poznal jsem
to podle kontroly hloubky adresy — 30 ze 33 „článků" mělo adresu tvaru `/blog/`.

Opraveno: článek musí být adresa **striktně hlubší** než rubrika. Měření zopakováno,
publikovaná čísla jsou jen z opraveného průchodu.

**Vzorec k zapamatování:** obě chyby v tomhle a předchozím dílu odhalila až kontrola výstupu
proti něčemu známému (v dílu 4 počet pravidel robots.txt, tady hloubka adresy). Samotný
skript doběhl bez chyby v obou případech.

---

## 4. Vzorek a výsledky

**47 e-shopů** (stejný vzorek jako díly 2–4). **Rubrika nalezena u 33**, konkrétní
**článek u 30**. Jedna adresa článku na e-shop.

### 4.1 ⛔ HLAVNÍ NÁLEZ — všechno, nebo nic

| Zjištění | Počet |
|---|---|
| článek má `NewsArticle` | **11 / 30** |
| článek má `Article` | 1 / 30 |
| článek má `BlogPosting` | **0 / 30** |
| **nemá ani jeden z těch typů** | **18 / 30** |

A teď to podstatné — **rozdělení je binární**:

| Kombinace | Počet |
|---|---|
| `NewsArticle` **i** `rel=canonical` | **11** |
| ani jedno | **19** |
| jen `NewsArticle` | **0** |
| jen `canonical` | **0** |

Totéž u dat: `datePublished` i `dateModified` má **11 / 30** — a je to přesně těch
jedenáct s `NewsArticle`. Bez `NewsArticle` nemá datum ani jeden článek.

⛔ Vypadá to na dvě generace šablony nebo na nastavení, které to zapíná. **Příčinu jsem
zvenku neověřil** — netvrdit ji.

### 4.2 Typ je NewsArticle, ne Article ani BlogPosting

Tam, kde strukturovaná data jsou, je typ **`NewsArticle`** (11×), jednou `Article`,
`BlogPosting` ani jednou. `NewsArticle` je typ pro zpravodajství; rada „jak vybrat granule"
jím není. Není to porušení pravidel, ale je to nepřesné zařazení.

### 4.3 Autor: vždycky e-shop, nikdy člověk

| Zjištění | Počet |
|---|---|
| `<meta name="author">` | **30 / 30** — vždy název e-shopu |
| `itemprop="author"` | 7 / 30 (z toho 5 tam, kde je `NewsArticle`) |
| jméno konkrétní osoby | **0 / 30** |

Sedí to s nápovědou: pole pro autora článek nemá, takže do dat jde název obchodu.

### 4.4 Datum: formát někdy neplatný

| Zjištění | Počet |
|---|---|
| `<time datetime="…">` v HTML | 23 / 30 |
| z toho hodnota začíná datem ve tvaru RRRR-MM-DD | **15 / 23** |
| hodnoty jako `22.3.2026`, `19.7.2017`, `14.10.2018` | **8 / 23** |

Atribut `datetime` má nést strojově čitelné datum. Česky zapsané `22.3.2026` tuhle podmínku
nesplňuje. `datePublished` a `dateModified` v microdatech jsou naopak u všech jedenácti
ve správném tvaru.

`dateModified` se liší od `datePublished` u **5 z 11**. ⛔ Netvrdit, co ten rozdíl znamená —
neměřil jsem, co ho vyvolalo.

### 4.5 Struktura a délka

| Zjištění | Hodnota |
|---|---|
| přesně jeden `h1` | 27 / 30 |
| `h2` na článek | min 1 · medián 6 · max 125 |
| `meta robots` | `index,follow` u 30 / 30 |
| délka textu | kvartily 831 · **1 426** · 2 542 slov, max 25 215 |

### 4.6 ⛔ Stopy po vložení z chatovacího rozhraní

**3 z 30 článků** nesou v HTML atributy, které vznikají zkopírováním odpovědi z chatového
rozhraní: `data-start`, `data-end`, `data-message-author-role`, `data-message-id`.
U jednoho článku je jich **274**.

Nedokazuje to, že text psal model — dokazuje to, že se do e-shopu vložil přes schránku
z chatového rozhraní i s jeho DOM atributy. ⛔ Formulovat přesně takhle, nedělat z toho
„článek psala AI". A **neuvádět konkrétní domény.**

---

## 5. ⛔ Limity

1. **30 článků, jeden na e-shop.** Jiný článek téhož blogu může vypadat jinak, hlavně
   u délky a nadpisů.
2. **Jeden den**, 8. 8. 2026.
3. Příčinu binárního rozdělení (§ 4.1) jsem neověřoval — nevím, jestli jde o verzi šablony,
   tarif, doplněk nebo nastavení.
4. Neměřil jsem, jestli AI systémy s těmi daty pracují. Vím, co je v HTML.
5. Detekce rubriky vychází z odkazů na homepage; blog, na který z homepage nevede odkaz,
   mi unikl (u 14 e-shopů rubrika nalezena nebyla).

---

## 6. Teze článku

> Blog na Shoptetu je v datech buď celý, nebo vůbec. Z 30 měřených článků mělo 11 typ
> NewsArticle, datum vydání, datum aktualizace i canonical — a 19 nemělo z toho nic.
> Smíšený případ nebyl ani jeden. Kde data jsou, je typ NewsArticle, ne BlogPosting,
> a jako autor je vždy e-shop, nikdy člověk. To odpovídá nápovědě: článek pole pro autora
> nemá. A ve třech článcích ze třiceti zůstaly v HTML atributy z chatového rozhraní,
> kterými se text vkládal.

---

## 7. Zdroje

- **vlastní měření 8. 8. 2026** — 47 e-shopů, 30 článků; `out-blog-1c.json`,
  `out-blog-2c.json`, souhrn `tabulka5.txt`
- Shoptet Podpora — Články a rubriky (pole článku a rubriky)
- vlastní články: díly 1–4 bloku, `e-e-a-t-pro-ai`, `autorsky-profil-pro-ai`,
  `aktualizace-obsahu-pro-ai`
