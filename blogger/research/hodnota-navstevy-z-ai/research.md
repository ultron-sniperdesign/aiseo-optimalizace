# Research — jakou hodnotu má návštěva z AI, když neprodáváte online

**Řádek plánu:** `hodnota navstevy z ai`
**Datum:** 2026-08-02 · **Kategorie:** tutorial · **Tagy:** mereni, strategie

---

## 1. Kolizní kontrola

| Kandidát | Co v něm je | Verdikt |
|---|---|---|
| `roi-ai-seo` | Vzorec návratnosti. V tabulce „Co do výpočtu patří" má jako čitatel **„Hodnota konverzí z relací připsaných AI"** | **Přesná dělicí čára.** Ten článek hodnotu konverze **předpokládá jako známou**. Tenhle říká, jak ji odvodit, když ji neznáte. Prolinkovat oběma směry. |
| `ai-navstevnost-konverze` | Jak AI návštěvy vůbec naměřit v GA4, kanál AI Assistant | Předstupeň. Nejdřív je potřeba návštěvy vidět, pak jim dát hodnotu. |
| `case-study-megadetail-ai-navstevnost` | Reálná data e-shopu, konverzní poměr | **Ukazuje ten problém:** celá case study stojí na tržbě na objednávku. Firma bez e-shopu takové číslo nemá. |
| `mereni-seo-vykonu-2026` | Měření SEO obecně | Sousedí. |

**Verdikt: téma volné a je to skutečná mezera.** Celý měřicí cluster na webu mlčky
předpokládá e-shop. Firma, která prodává službu, dělá B2B nebo má provozovnu,
z něj nedostane číslo, které by mohla dosadit.

---

## 2. Proč to je problém právě u AI

Tři důvody, proč je odvození hodnoty u AI kanálu naléhavější než u ostatních:

1. **Objemy jsou malé.** Z AI nástrojů chodí řádově jednotky až stovky návštěv měsíčně.
   Při takovém objemu je průměr snadno rozhozený jedním velkým obchodem.
2. **Atribuce je slabá.** Část návštěv se do statistik nedostane vůbec (asistent obsah
   přečte a člověk přijde později přímo). Hodnota přiřazená viditelným návštěvám tedy
   podhodnocuje celý kanál.
3. **Rozhodnutí je binární.** Otázka nezní „o kolik zlepšit", ale „investovat, nebo ne".
   Na to stačí řádový odhad — a ten se udělat dá.

---

## 3. Metoda — čtyři kroky, žádná magie

Nic z toho není nové ani specifické pro AI; je to standardní postup, jak se oceňuje
mikrokonverze. Na webu ale nikde není a čtenář bez e-shopu si ho sám neodvodí.

1. **Zvolit počítatelnou událost**, která nastane před obchodem: odeslaný formulář,
   telefonát, kliknutí na e-mail, rezervace, žádost o cenovou nabídku.
2. **Zjistit, kolik z nich skončí zakázkou** — z CRM, z faktur, nebo odhadem majitele.
3. **Zjistit průměrnou hodnotu zakázky** a případně marži.
4. **Vynásobit**: hodnota poptávky = průměrná zakázka × podíl uzavřených.

Pak teprve dosazovat do vzorce návratnosti v `roi-ai-seo`.

### Kde se to nejčastěji rozbije

- **Telefonát není měřený.** Nejčastější případ u služeb a lokálních firem.
  Bez měření telefonátů je hodnota AI kanálu systematicky podhodnocená.
- **Bere se obrat místo marže.** U služeb s vysokými náklady na dodání to výsledek
  posune o řád.
- **Průměr z příliš malého vzorku.** U pěti poptávek za měsíc je průměr statisticky
  bezcenný — a jedna velká zakázka ho úplně převrátí. Pracovat radši s mediánem
  nebo s rozpětím.
- **Zapomene se na opakovaný nákup.** U služeb je hodnota často v druhé a třetí zakázce.

---

## 4. ⛔ Čeho se v článku vyvarovat

- **Nevymýšlet české benchmarky.** Žádná veřejná data o hodnotě poptávky podle oboru
  na českém trhu, která bych mohl doložit, neexistují — a odhady z cizích zdrojů
  by tady byly horší než nic.
- **Neslibovat přesnost.** Metoda dává **řádový odhad**, ne účetní číslo. To je potřeba
  napsat rovnou, ne až v poznámce.
- **Nepřenášet konverzní poměr z e-shopu.** Case study MEGA DETAIL uvádí 3,5 %
  u návštěv z AI nástrojů; to je jeden e-shop a e-shopová konverze, ne poptávka u služby.

---

## 5. Teze článku

> Návratnost AI SEO se dá spočítat, jen když víte, co je vám návštěva k čemu.
> E-shop to ví z objednávek. Kdo prodává službu, dělá B2B nebo má provozovnu,
> si to musí odvodit — a jde to čtyřmi kroky přes hodnotu poptávky.
> Výsledek je řádový odhad, a přesně na to stačí: rozhodnutí zní investovat, nebo ne.

---

## 6. Zdroje

- vlastní články: `roi-ai-seo` (vzorec), `ai-navstevnost-konverze` (měření),
  `case-study-megadetail-ai-navstevnost` (e-shopová data jako protipříklad)
- standardní postup oceňování mikrokonverzí (žádný externí zdroj se v článku necituje,
  protože se nic cizího netvrdí)
