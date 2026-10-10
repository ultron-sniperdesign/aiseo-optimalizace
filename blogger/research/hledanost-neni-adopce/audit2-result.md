## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek je po jazykové a SEO stránce převážně použitelný, ale kontrola vypořádání z kola 1 odhalila jeden neúplně zapracovaný faktický nález v komponentě `Mistake`. Ten je podle zadání tohoto kola **[BLOCKER]**.

Krátce: `seoTitle`, `description`, slug, interní odkazy i CTA směr na konkrétní produkt jsou v zásadě v pořádku. Největší opravy: doplnit zbytek výhrady u Přehledu od AI, zpřesnit `answer`, upravit první ~100 slov a vyčistit CTA větu.

---

## Nálezy

### [BLOCKER] Zapracovaný nález B1 zůstal neúplně opravený v komponentě `Mistake`

**Problémové místo:**

```mdx
<Mistake num="06" title="„Málokdo to hledá, takže to nikdo nepoužívá.“" fix="U funkcí, které se zobrazují samy, sledujte zobrazení v Search Console.">
  Výraz „přehled od ai“ hledá 130 lidí měsíčně, Alphabet přitom u Přehledu od AI uvedl v červenci 2025 přes 2 miliardy uživatelů měsíčně po celém světě.
</Mistake>
```

Ve vypořádání je B1 označené jako zapracované: u Přehledu od AI měl být doplněn rozsah „ve více než 200 zemích a územích a ve 40 jazycích“ a výhrada, že Google neuvedl, co počítá za uživatele. V hlavním textu to je, ale v chybě 06 zůstala zkrácená formulace bez části podmínek.

Podle pravidla kola 2 je zapracovaný nález, který v textu dál zůstává, **[BLOCKER]**.

**Návrh opravy:**

```mdx
Výraz „přehled od ai“ hledá 130 lidí měsíčně. Alphabet přitom u Přehledu od AI v červenci 2025 uvedl přes 2 miliardy uživatelů měsíčně ve více než 200 zemích a územích a ve 40 jazycích; co přesně počítá za uživatele, neuvedl.
```

Pokud je to pro komponentu moc dlouhé, zkraťte jinou část, ale výhrada k definici uživatele musí zůstat.

---

### [WARNING] `answer` splňuje délku, ale nezačíná čistou definicí a míchá „růst“ s metrikou

**Problémové místo:**

```yaml
answer: "Růst hledanosti ukazuje, kolikrát lidé zadali název do Googlu, ne kolik lidí technologii používá. ..."
```

Krátká odpověď má 50 slov, což je v požadovaném rozmezí 40–60 slov. Pro citovatelnost je ale slabší začátek: definovat se má hledanost, ne „růst hledanosti“. Růst neukazuje „kolikrát lidé zadali název“, to ukazuje samotná hledanost; růst ukazuje změnu v čase.

**Návrh opravy:**

```yaml
answer: "Hledanost ukazuje, kolikrát lidé zadali výraz do vyhledávače; adopce říká, kolik lidí technologii opravdu používá. Měsíční hledanost je odhad a Google Trends relativní index 0–100. Používání AI v Česku dokládají průzkumy mezi lidmi, vliv na váš web návštěvy z AI asistentů ve vlastní analytice."
```

Tato verze má 44 slov, začíná definicí a dává samostatný smysl.

---

### [WARNING] Prvních ~100 slov těla sklouzává do metatextu místo samostatné odpovědi

**Problémové místo:**

```mdx
Článek ukazuje, co která metrika měří, proč hledanost roste i bez změny chování, proč je to odhad a ne počet a které zdroje o používání AI opravdu vypovídají.
```

První odstavec je dobrý a citovatelný. Hned po něm ale následuje „Článek ukazuje…“, což je redakční metatext. Zadání chce, aby prvních ~100 slov těla fungovalo jako samostatná odpověď. Pro AI citaci je lepší pokračovat přímo závěrem, ne popisem článku.

**Návrh opravy:**

Nahradit větu „Článek ukazuje…“ například takto:

```mdx
Proto z hledanosti vyvozujte jen zájem o slovo a směr změny v čase. O používání AI vypovídají průzkumy mezi lidmi; o dopadu na váš web návštěvy z AI asistentů v analytice a zobrazení v Search Console.
```

Druhou větu o zdrojích dat lze ponechat:

```mdx
Čísla jsou z Marketing Mineru k 10. 10. 2026 a z našeho vlastního e-shopu MEGA DETAIL.
```

---

### [WARNING] Jeden H2 nadpis je hůř skenovatelný a gramaticky kostrbatý

**Problémové místo:**

```mdx
## Co o <span class="hl">používání AI</span> vypovídá — <strong>průzkum a vlastní návštěvy</strong>
```

Nadpis má pointu až za pomlčkou a věta zní nepřirozeně. Pro skenujícího čtenáře je lepší jasný oznamovací nadpis: kdo nebo co vypovídá o používání AI.

**Návrh opravy:**

```mdx
## O <span class="hl">používání AI</span> vypovídají <strong>průzkumy a vlastní návštěvy</strong>
```

Tím H2 nese klíčový pojem i pointu bez nutnosti číst odstavec pod ním.

---

### [WARNING] CTA je věcně správně směrované, ale poslední věta je jazykově neobratná a opakuje „výchozí stav“

**Problémové místo:**

```mdx
Výchozí stav AI viditelnosti vašeho webu změříme v **[Auditu AI viditelnosti](/audit/)** za **3 600 Kč bez DPH**: zmínky v ChatGPT vlastním nástrojem, Přehled od AI přes Marketing Miner a ostatní platformy ručně na sadě dotazů podle vašeho sortimentu. Výsledek dostanete jako výchozí stav, ne jako přesné skóre — odpovědi AI se mezi běhy liší.
```

CTA míří na správný produkt a cena je mimo text odkazu, což je dobře. Slabá místa:

- „zmínky v ChatGPT vlastním nástrojem“ je syntakticky nejasné,
- „Výchozí stav… Výsledek dostanete jako výchozí stav“ zbytečně opakuje stejný pojem,
- věta je dlouhá a pro neodborníka hůř čitelná.

**Návrh opravy:**

```mdx
V **[Auditu AI viditelnosti](/audit/)** za **3 600 Kč bez DPH** změříme výchozí stav vašeho webu: zmínky v ChatGPT ověříme vlastním nástrojem, Přehled od AI přes Marketing Miner a ostatní platformy ručně na sadě dotazů podle vašeho sortimentu. Výsledek berte jako výchozí stav, ne jako přesné skóre — odpovědi AI se mezi běhy liší.
```

Ještě lepší, kratší varianta:

```mdx
V **[Auditu AI viditelnosti](/audit/)** za **3 600 Kč bez DPH** změříme výchozí stav vašeho webu v AI odpovědích. ChatGPT ověříme vlastním nástrojem, Přehled od AI přes Marketing Miner a další platformy ručně na dotazech podle vašeho sortimentu. Výsledek není přesné skóre — odpovědi AI se mezi běhy liší.
```

---

### [TIP] „Report“ a „reportovat“ nejsou zakázané, ale tón webu by víc seděl k českým výrazům

**Problémová místa:**

```mdx
Search Console má od 31. 8. 2026 pro všechny weby [report výkonu v generativní AI](...)
```

```mdx
Jak čísla z různých zdrojů poskládat do reportu, popisuje návod [Jak reportovat AI viditelnost](...)
```

Nejde o zakázaný termín, ale článek jinak drží srozumitelný český tón. „Report“ tady zní zbytečně agenturně.

**Návrh opravy:**

```mdx
Search Console má od 31. 8. 2026 pro všechny weby [přehled výkonu v generativní AI](...)
```

A dále:

```mdx
Jak čísla z různých zdrojů poskládat do přehledu, popisuje návod [Jak reportovat AI viditelnost](/blog/reportovani-ai-viditelnosti/).
```

Název odkazovaného článku bych neměnil, pokud je to jeho kanonický název.

---

### [TIP] FAQ odpovědi jsou sebestačné, ale některé jsou na FAQ zbytečně dlouhé

**Příklad:**

```yaml
a: "Google Trends ukazuje relativní zájem, ne počet hledání. Každý bod vydělí celkovým počtem hledání v dané oblasti a období a převede na stupnici 0–100, kde 100 je nejvyšší bod zvoleného výběru. Pracuje se vzorkem, málo hledané výrazy ukáže jako 0, opakovaná hledání téhož člověka vyřadí a nepočítá ani hledání, která interně dělá režim AI a Přehled od AI. Google sám píše, že Trends není vědecký průzkum."
```

Odpověď je věcně a citačně dobrá, ale pro FAQ výstup je hodně hutná. Pokud se FAQ používá i jako strukturovaný obsah pro AI, kratší odpovědi se citují snáz.

**Návrh cíleného zkrácení bez ztráty podstaty:**

```yaml
a: "Google Trends ukazuje relativní zájem, ne počet hledání. Každý bod převádí na stupnici 0–100 podle zvolené oblasti a období, kde 100 je nejvyšší bod výběru. Pracuje se vzorkem, nízký objem může ukázat jako 0 a Google sám upozorňuje, že Trends není vědecký průzkum."
```

Detail o režimu AI a Přehledu od AI už je v hlavním textu; ve FAQ není nutné opakovat všechno.

---

## Kontrola vypořádání z kola 1

- **B1:** Neúplně zapracováno — hlavní text opravený je, ale stejný problém zůstal ve `Mistake num="06"`. Viz blocker výše.
- **B2:** Zapracování sedí. Formulace o sčítání variant už obsahují výhradu ke sloučeným řadám i orientačnímu odhadu.
- **B3:** V textu zůstává tvrzení o GA4 a Search Console, ale po doplnění zdrojů v podkladech odpovídá vypořádání. Bez nového nálezu.
- **B4:** Formulace u SparkToro obsahuje jmenovatel i metodickou výhradu. Bez nového nálezu.
- **W5:** „Kolik lidí“ u GA4 relací už v textu nevidím. Nahrazeno návštěvami/relacemi.
- **W6:** Zaokrouhlování je ponechané jen u Plánovače. V `answer` už není zobecněné na všechny nástroje.
- **W7:** Formulace ČSÚ je zúžená na „nástroje AI pro tvorbu textu, obrázků nebo kódu“ a doplněná o hledání informací přes AI. Bez nálezu.
- **T8:** Google Trends a nesrovnatelnost samostatných dotazů jsou vysvětlené. Bez nálezu.

## Co je v pořádku

- `seoTitle` je do 60 znaků a začíná hlavním pojmem.
- `description` je v rozmezí 70–160 znaků a odpovídá obsahu.
- Slug `hledanost-neni-adopce` je smysluplný.
- Zakázané termíny typu „schema markup“, „answer block“, „hub-and-spoke“ ani tvrdé garance se v textu nevyskytují.
- CTA vede na konkrétní produkt **Audit AI viditelnosti** a uvádí cenu **3 600 Kč bez DPH** mimo text odkazu.