# Refresh — blokovat-ai-odpovedi-gsc (2026-07-31)

**Původní vydání:** 2026-07-18 · **Důvod refreshe:** článek psal o přepínači v budoucím
čase („Google **chystá**"), přitom byl v té době už nasazený a mezitím se rozšířil mimo UK.

---

## 1. Co bylo v článku zastaralé

| Místo | Původně | Stav k 31. 7. 2026 |
|---|---|---|
| `description` | „Google **chystá** v Search Console přepínač" | Přepínač existuje a nasazuje se |
| `answer`, úvod, stats | „testuje se na části majitelů webů **ve Velké Británii**" | Od poloviny července i mimo UK, pořád jen část webů |
| stats „zatím UK" | — | Nahrazeno |
| FAQ „Mám ho už ve svém účtu?" | „Pravděpodobně ne… začíná testovat ve Velké Británii" | Přepsáno |
| „Nedává termíny dostupnosti" | Google žádné neuvedl | Termín existuje, ale je to lhůta britského regulátora, ne Googlu |

---

## 2. Primární zdroj — nápověda Search Console

`support.google.com/webmasters/answer/16908024`

| Údaj | Znění |
|---|---|
| Oficiální název | **Search generative AI control** |
| Rozsah | AI Overviews, AI Mode, generativní funkce v Discoveru |
| Co neovlivňuje | „this control isn't used as a ranking or inclusion signal affecting other parts of Search" |
| **Trénink** | **„This control doesn't affect AI training"** — na trénink slouží `Google-Extended` |
| Úroveň | vlastnictví (property), nastavení v Search Console |
| Náběh | obsah se vyloučí **do 1–2 dnů**, u části obsahu déle |
| Dostupnost | „We're rolling out this control to a **subset of website owners**" |

**Nové oproti původnímu článku:** oficiální název, oddělení od tréninku, doba náběhu.

---

## 3. Primární zdroj — britský regulátor (proč to vůbec vzniklo)

`gov.uk` — tisková zpráva **3. 6. 2026**, tentýž den jako oznámení Googlu.
CMA označila Google za subjekt se **strategickým postavením na trhu** ve vyhledávání
a uložila **Publisher Conduct Requirement**. Doslovné závazky z tiskové zprávy:

- „publishers will be able to **opt out of their content being used to power AI features
  in search**, such as AI Overviews"
- „Google is also now required to make sure that publisher content is **properly attributed,
  using clear links**, in AI-generated search results"
- „Google will now also have to allow publishers to **opt-out of allowing their content to be
  used for the 'fine-tuning' of AI models**"

Lhůta: **devět měsíců na zavedení všech změn** (od 3. 6. 2026), CMA očekává,
že podstatné části budou dostupné dřív. Zprávy o plnění každých šest měsíců
v prvním roce.

### ⛔ Co sekundární zdroje tvrdily navíc a primární zdroj to nepotvrdil

| Tvrzení v přehledech | Ověření |
|---|---|
| „výslovná klauzule proti odvetě — Google nesmí odhlášené weby znevýhodnit" | **V tiskové zprávě CMA není.** Může být v plném rozhodnutí, které jsem nečetl. **Do článku nešlo.** |
| „hlavní ovládání do prosince 2026, ovládání po stránkách do března 2027" | **Nepotvrzeno.** Primární zdroj mluví o jedné lhůtě devíti měsíců na všechny změny. Rozdělení na dvě data je doplněk přehledů. **Do článku nešlo.** |
| „nasazeno mimo UK od 14. 7. 2026" | Konkrétní datum jen ze sekundárních zdrojů. V článku jako „od poloviny července", ne jako přesné datum. |

---

## 4. Nejsilnější nové zjištění

Google svým přepínačem plní část britského požadavku, ale **ne celý**: požadavek zahrnuje
i odhlášení z dolaďování modelů, zatímco nápověda ke Search Console výslovně říká,
že se ovládání **tréninku netýká** a že na něj slouží samostatný `Google-Extended`.

Pro majitele webu z toho plyne praktická věc: **jedním přepínačem se ze všeho neodhlásíte.**
Tohle v původním článku vůbec nebylo a je to jeho nejužitečnější doplněk.

---

## 5. Co se nemění

Jádro článku — rozhodovací rámec a argument, že vypínáte kanál, jehož přínos neumíte
čistě změřit — platí dál. Refresh je faktická aktualizace plus dvě nové části
(regulatorní pozadí, oddělení tréninku), ne přepis teze.

---

## 6. Zdroje

- Nápověda Google Search Console — Search generative AI control (answer/16908024)
- gov.uk — CMA secures fairer deal for publishers and improves Google search services in UK (3. 6. 2026)
- gov.uk — Google search publisher conduct requirement (přehled opatření)
- Oznámení Google „New opportunities, control and insights for website owners" (3. 6. 2026)
