## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek je po jazykové a SEO stránce většinově dobře připravený: `seoTitle` má 56 znaků a klíčové slovo vepředu, meta description je v limitu, H2 dodržují požadovaný formát se `<span class="hl">` i `<strong>`, zakázané termíny typu „schema markup“ nebo „hub-and-spoke“ v textu nejsou a CTA míří na konkrétní produkt.

Publikaci ale blokuje nedotažené vypořádání jednoho nálezu z 1. kola.

---

## Nálezy

### [BLOCKER] Zapracovaný nález B1 zůstal v textu v podobné formulaci

**Problémové místo:**

> „Ukazuje, kde návštěvy z AI v GA4 najdete a kde ne, **jak zachytit, co výchozí kanál mine**, a jak srovnávat konverze…“

A v závěru:

> „Vlastní skupina kanálů zachytí relace se zdrojem AI, **které výchozí kanál mine**…“

Vypořádání tvrdí, že původní silná formulace „zachytí, co výchozí kanál mine“ byla opravena. V hlavním textu ale zůstala velmi podobná formulace. První výskyt je navíc pořád příliš široký: vlastní skupina kanálů nezachytí „co výchozí kanál mine“, ale jen relace, u kterých v datech zůstal rozpoznatelný zdroj AI.

**Návrh opravy:**

V úvodu nahradit například:

> „jak zachytit relace, u kterých v datech zůstal zdroj AI mimo kanál AI Assistant“

V závěru nahradit například:

> „Vlastní skupina kanálů doplní relace, u kterých v datech zůstal zdroj AI, ale neskončily v kanálu AI Assistant.“

Tím zmizí problematická zkratka a zůstane zachovaná důležitá podmínka.

---

### [WARNING] Prvních ~100 slov těla obsahuje zbytečnou redakční historii místo samostatné odpovědi

**Problémové místo:**

> „Článek vyšel v květnu 2026 jako přehled. Po zavedení kanálu AI Assistant jsme ho přepsali podle nápovědy Googlu a podle dat našeho e-shopu MEGA DETAIL…“

První odstavec má podle zadání fungovat jako samostatná odpověď na dotaz „jak měřit návštěvnost z AI v GA4“. Teď část nejviditelnějšího prostoru zabírá historie článku. To je pro čtenáře i AI citace méně užitečné než přímý postup.

**Návrh opravy:**

Redakční poznámku přesunout níž nebo zkrátit. První odstavec postavit přímo jako odpověď, například ve smyslu:

> „Návštěvnost z AI v GA4 začněte měřit v kanálu AI Assistant, ale neberte ho jako úplný obraz. Přehled od AI a režim AI patří do organického vyhledávání, část relací skončí mimo kanál a pro delší srovnání pomůže vlastní skupina kanálů podle zdroje relace.“

Poznámku o refreshi lze nechat až za tím.

---

### [WARNING] FAQ k ChatGPT je sebestačné, ale vypořádání slibuje konkrétnější údaj, který v textu není

**Problémové místo ve vypořádání:**

> „…i po nasazení pár relací skončilo mimo kanál (**u nás 8 ze 739 relací chatgpt.com**).“

**Skutečný text FAQ:**

> „…a i potom pár relací skončilo mimo kanál.“

Oprava původního věcného problému je v zásadě splněná: FAQ už neříká plošně, že všechny návštěvy z ChatGPT patří do AI Assistant. Vypořádání ale tvrdí, že byl doplněn konkrétní údaj „8 ze 739“, který v článku není. To snižuje kontrolovatelnost změn.

**Návrh opravy:**

Buď sladit vypořádání s textem, nebo lépe doplnit údaj přímo do FAQ:

> „…a i potom pár relací skončilo mimo kanál; u nás šlo o 8 ze 739 relací z chatgpt.com.“

---

### [TIP] V jednom kroku Stepperu zůstává zbytečně anglický název kanálu

**Problémové místo:**

> „Kanál pro AI musí stát výš než Referral.“

Jinde článek správně používá české názvy kanálů a anglické názvy dává jen do závorky. Tady je samotné „Referral“ méně srozumitelné pro českého čtenáře.

**Návrh opravy:**

> „Kanál pro AI musí stát výš než odkazující weby (Referral).“

Nebo čistě česky:

> „Kanál pro AI musí stát výš než odkazující weby.“

---

### [TIP] CTA je konkrétní, ale přechod od GA4 měření k Auditu AI viditelnosti je prudký

**Problémové místo:**

> „Jak vás AI odpovědi zmiňují a z jakých stránek čerpají, změříme v Auditu AI viditelnosti…“

CTA splňuje zadání: vede na konkrétní produkt, používá kanonický název i cenu **3 600 Kč bez DPH** a neslibuje garance. Jen tematicky skáče z měření návštěvnosti v GA4 na zmínky v AI odpovědích.

**Návrh opravy:**

Doplnit jednu spojovací větu, která propojí GA4 s produktem:

> „GA4 ukáže, co už na web přišlo. Audit AI viditelnosti doplní druhou část: kde vás AI odpovědi zmiňují a z jakých stránek čerpají.“

Pak ponechat stávající CTA.

---

### [TIP] Zkontrolovat pravděpodobný překlep v externím URL

**Problémové místo:**

```md
https://www.frankfurt-school.de/de/home/news/2026/06/chatgpt-in-online-ohopping
```

Část `online-ohopping` vypadá jako překlep v URL. Pokud je to skutečná adresa, ponechat. Pokud ne, opravit na správný odkaz, protože rozbitý externí zdroj zhoršuje důvěryhodnost i použitelnost článku.

---

## Kontrola vypořádání z 1. kola

- **B1:** Nevyřízeno úplně — problematická formulace zůstala v úvodu a podobně i v závěru. Viz blocker výše.
- **B2:** Důvod nezapracování obstojí. Text navíc správně uvádí, že GA4 přiřadí médium `ai-assistant` a kampaň `(ai-assistant)`.
- **B3, B4, W1, W2, T1:** V aktuálním textu jsou věcně vypořádané; původní problematické formulace typu „dnes“ nebo nepodmíněné tvrzení o `utm_source` jsem v kontrolovaných místech nenašel.

---