Níže druhý audit po opravách. Jen zbytkové problémy.

## BLOKER

### 1) V těle pořád zůstal starý údaj Perplexity +370 %
> „Do jara 2026 byl Perplexity příkladem rychlého růstu: meziročně o **přibližně 370 %**…“

Tohle je přesně číslo, které mělo zmizet / být nahrazené obratem trendu. Teď je sice doplněné „trend se obrátil“, ale staré číslo v těle pořád žije. Pokud refresh tvrdí aktualizaci, je to zbytková kontaminace starým stavem.

### 2) Answer je dál v rozporu s tělem u AI Mode
> answer: „**postupný posun Google AI Mode do popředí**“
>
> tělo: „**Pro EU/CZ Google oficiální datum nezveřejnil**… realisticky někdy v průběhu roku 2026“
>
> predikce 2027: „**Google AI Mode jako default**…“

„Posun do popředí“ v answer je stále formulace na hraně predikce/trendu, ne popis doloženého stavu. Není to tak tvrdé jako původní „default“, ale pořád to lehce předbíhá to, co tělo skutečně ví.

### 3) FAQ vs tělo: „trh asistentů“ není pořád čistě operacionalizovaný
> FAQ: „**trh asistentů se během roku 2026 rozdrobil** — podíl ChatGPT na návštěvách AI nástrojů…“
>
> tabulka níž rozlišuje „podíl na užívání / návštěvách / odchozích prokliknutích“

V FAQ se vrací široký rámec „trh asistentů“, ale doložené číslo je jen **podíl na návštěvách AI nástrojů**. Po opravě už je to lepší, ale terminologicky to pořád míchá kategorii trhu a jednu konkrétní webovou metriku.

## DOPORUČENÍ

### 4) Přiznání chyby 810M je poctivé, ale jedna věta v něm působí divně
> „Podle zprávy z konce července 2026 se ChatGPT blíží miliardě týdenních uživatelů, ale **o sedm měsíců později, než OpenAI původně plánovalo.**“

První dvě věty v boxu jsou výborné: konkrétní, přímé, bez uhýbání. Tahle třetí část ale otevírá nové tvrzení, které není pro opravu chyby nutné a bez jasné atribuce působí navěšeně. Oslabuje čistotu correction note. Doporučení: correction box nechat jen na „co bylo špatně / co je správně / co nevíme“.

### 5) P5 je už poctivější, ale pořád lehce sebeobranné
> „**Slabina nebyla v odhadu, ale v rámování**…“

Lepší než minule, ale stále to trochu chrání původní predikci. Když se objevují proti-signály proti „konsolidaci“, poctivější by bylo připustit i možnost, že problém byl **v samotné tezi i v rámování**, ne jen v metrice. Teď je to už přijatelné, ale stále lehce advokační.

### 6) FAQ „Proč chybí AI search data specifická pro Česko?“ už je časově zastaralé
> „…zatím nebyl publikovaný **v Q2 2026**.“

Máte `updated: 2026-07-28`. Na konci července je „v Q2 2026“ už zbytečně ukotvené. Po vlastní opravě kalendářních odkazů tohle zůstalo viset.

### 7) V článku zůstal nedokončený slib
> „**Až bude vzorek použitelný, doplníme čísla sem.**“

Není to už tak špatné jako původní „za 4–6 týdnů“, ale pořád je to otevřený redakční slib. Lepší formulace: „Čísla doplníme v některé z příštích aktualizací, pokud vzorek stabilizuje metodiku.“

### 8) Některá čísla jsou prezentována moc přesně vzhledem ke kvalitě zdroje
> „**5,7 / 4,1 / ~3,2**“
>
> „data z odborných komunit… orientační“

U neoficiálních benchmarků je desetinná přesnost přehnaná. Když zároveň píšete „orientační“, lepší je zaokrouhlit: cca 6 / 4 / 3.

### 9) „+1 procentní bod měsíčně“ je v answer/stats logice silné tvrzení, ale v těle už změkčeno
> tělo: „**v řádu jednotlivých procentních bodů**“
>
> úvodní 5 čísel: „**+1 procentní bod měsíčně** přesun trafficu…“

Tohle je vnitřně ne úplně stejné. Jedna část tvrdí konkrétní tempo, druhá jen řád. Pokud jste trend záměrně zrelativizovali, relativizujte ho všude.

## DROBNOSTI

### 10) Metadata vs tělo: „market share“ v title/seoTitle, ale článek sám vysvětluje, že jde o různé metriky
> title: „data, **market share**…“
>
> seoTitle: „data a **market share**…“
>
> tělo: „**Tři metriky, které se pletou dohromady**“

Po obsahové opravě je headline terminologicky hrubší než samotný text. Není to blokér, ale je to starý rámec v metadatech.

### 11) Description říká „které tři metriky podílu se pletou dohromady“, ale FAQ pak zase používá „trh asistentů“
Lehká nekonzistence ve slovníku. Po refreshi by bylo lepší držet všude stejný termín: „tři metriky podílu / usage-visits-clickouts“.

### 12) Typo / jazyk
> „**Jakákoli číslo** „v Česku používá ChatGPT X %“ …“

Má být „**Jakékoli číslo**“ nebo „**Jakýkoli údaj**“.

### 13) „quartal review“
> howto: „**quartal review**“

Jazykově rušivé; česky „kvartální review“ nebo „čtvrtletní revize“.

### 14) „search mode“ u ChatGPT
> „CZ uživatelé ChatGPT mají přístup k plné funkčnosti (**search mode**, Vision, Voice)…“

Pokud jinde používáte „ChatGPT search“, držte jeden termín. Tady je to stylisticky roztřepené.

---

## Odpovědi na tvoje otázky

### 1) Zbyl vnitřní rozpor nebo staré číslo?
Ano. Hlavní zbytky:
- staré **Perplexity +370 %** v těle,
- answer dál lehce předbíhá stav u **AI Mode**,
- FAQ používá široké „**trh asistentů**“ pro číslo, které je ve skutečnosti jen **podíl na návštěvách**.

### 2) Je přiznání chyby s 810M dobře udělané?
Z větší části **ano**. Silné stránky:
- chyba přiznána explicitně,
- vysvětleno **co bylo špatně**,
- vysvětleno **co je správně**,
- přiznáno **co veřejně nevíme**.

Co působí divně:
- dovětek „**o sedm měsíců později, než OpenAI původně plánovalo**“ do correction boxu nepatří a vypadá jako odbočka.

### 3) Je vyhodnocení P5 už poctivé?
**Výrazně poctivější než předtím, ale ne úplně čisté.** Proti-signály přiznává. Pořád je tam obranný reflex ve větě:
> „**Slabina nebyla v odhadu, ale v rámování**“

Přísně: změnit na otevřenější formulaci, že na vyhodnocení je brzy a že dosavadní signály zpochybňují **jak rámování, tak možná i samotnou tezi**.

### 4) Konzistence answer / description / stats / FAQ / tělo
**Ne plně.**
- answer: AI Mode pořád lehce prediktivní,
- title/seoTitle: starý rámec „market share“,
- FAQ: vrací vágní „trh asistentů“,
- tělo: má ještě starý Perplexity údaj,
- stats: OK, ale 5,7 je moc přesné vzhledem k neoficiálnosti.

### 5) Co po dvou a půl měsíci ještě zastaralo?
- „**Q2 2026**“ ve FAQ o CZ datech,
- otevřený slib „**doplníme čísla sem**“,
- kalibrovat všude stejně tempo AI referral shiftu,
- metadata stále nesou starší rámec „market share“.

## Verdikt
Po opravách už to není rozbité jako minule, ale **ještě bych to nepovažoval za úplně čistý refresh**. Největší problém je, že v textu pořád přežívá staré **Perplexity +370 %** a několik míst stále vrací starý rámec („market share“, „trh asistentů“) navzdory nové metodické sekci.