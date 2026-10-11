## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek je fakticky nadprůměrně opatrný: správně přiznává rozpor mezi zdroji Seznamu, neslibuje zobrazení v Seznam AI, nepřenáší faktory řazení ze Zboží.cz na Seznam AI a dobře odděluje doložené nabídky Seznam Nákupů od toho, co Seznam nepopisuje. Přesto má několik vad, z toho dvě blokující.

---

## Nálezy

### [BLOCKER] Článek popisuje prvky rozhraní, ale brief výslovně říká, že UI nebylo ověřeno

**Problémové místo:**

> „V nastavení účtu Sklik najdete sekci Provozovny a v ní volbu Přidat provozovnu.“

Další rizikové formulace:

> „Výkon ze Seznam AI najdete v položce Produkt – doporučené nabídky.“

> „Když se nabídka spáruje špatně, e-shop ji v párovacím nástroji v Centru prodejce napáruje na jinou kartu.“

**Proč je to problém:**  
V briefu je u „Rozhraní (UI)“ výslovně prázdný doklad: autor se do Skliku ani Centra prodejce nepřihlašoval a do Seznam AI dotazy nezadával. Podle pravidel tohoto kola se tvrzení o tom, co uživatel uvidí nebo najde v rozhraní, nesmí opírat jen o dokumentaci. Formulace „najdete sekci“, „najdete v položce“ už popisují UI, ne jen dokumentaci.

**Konkrétní oprava:**  
Přepsat na dokumentační formulace bez slibu, co autor viděl v rozhraní:

- místo  
  > „V nastavení účtu Sklik najdete sekci Provozovny a v ní volbu Přidat provozovnu.“  
  použít např.  
  > „Nápověda Skliku uvádí postup přes Sklik → Nastavení → Provozovny → Přidat provozovnu. Autor rozhraní neověřoval.“

- místo  
  > „Výkon ze Seznam AI najdete v položce Produkt – doporučené nabídky.“  
  použít např.  
  > „Nápověda uvádí, že imprese a prokliky ze Seznam AI se ve statistikách započítávají do položky Produkt – doporučené nabídky.“

- u párovacího nástroje ponechat jen to, co plyne z nápovědy:  
  > „Nápověda popisuje párovací nástroj v Centru prodejce, přes který lze požádat o napárování nabídky na jinou produktovou kartu.“

---

### [BLOCKER] Tabulka povinných značek feedu vynechává povinné prvky SHOP a SHOPITEM

**Problémové místo:**

> „Feed bez povinných značek nejde pro inzerci Nákupy použít.“

Následuje tabulka, která uvádí jako povinné mimo jiné PRODUCTNAME, DESCRIPTION, URL, PRICE_VAT, DELIVERY_DATE, IMGURL a EPREL_ID, ale neuvádí **SHOP** a **SHOPITEM**.

**Proč je to problém:**  
Brief i specifikace feedu uvádí jako povinné také strukturální prvky **SHOP** a **SHOPITEM**. Článek tvrdí, že shrnuje povinné značky, ale dvě povinné položky vynechává. U tvrzení o podmínkách cizí platformy je vynechaná podmínka blocker.

**Konkrétní oprava:**  
Doplnit před tabulku nebo přímo do tabulky:

> „Kromě značek u jednotlivých nabídek musí XML feed obsahovat také povinné obalové prvky SHOP a SHOPITEM.“

Případně přidat dvě řádky:

| Značka | Na co dbát |
|---|---|
| SHOP / SHOPITEM (povinné) | Strukturální prvky feedu: SHOP obaluje celý feed, SHOPITEM jednotlivou nabídku. Feed bez povinných prvků není možné pro inzerci Nákupy použít. |

---

### [WARNING] „Zobrazení se platí“ může mylně naznačit platbu za impresi místo platby za proklik

**Problémové místo:**

> „Zobrazení se platí.“

A ve FAQ:

> „Registrace e-shopu na Zboží.cz je zdarma, zobrazování nabídek ale ne.“

**Proč je to problém:**  
Podklady říkají přesněji: registrace je zdarma, nabídky se zobrazují jen s dobitým kreditem a **platí se proklik** podle ceníku / aukce. Zároveň Seznam Nákupy nenabízí bezplatné zobrazení produktů typu free listing. Samotné „zobrazení se platí“ je zkratka, která může být pochopena jako platba za impresi.

**Konkrétní oprava:**  
Zpřesnit formulace:

- místo  
  > „Zobrazení se platí.“  
  použít  
  > „Bez kreditu se nabídky nezobrazují; účtuje se proklik podle ceníku a aukce.“

- místo  
  > „zobrazování nabídek ale ne“  
  použít  
  > „nabídky se ale zobrazují jen s dobitým kreditem a platí se proklik.“

---

### [WARNING] „Seznam garantuje do 48 hodin“ je silnější než podklad v briefu

**Problémové místo:**

> „Požadavek ručně kontrolují administrátoři Zboží.cz a zpracování Seznam garantuje do 48 hodin.“

A ve FAQ:

> „zpracování Seznam garantuje do 48 hodin.“

**Proč je to problém:**  
Brief uvádí „ruční kontrola a zpracování do 48 hodin“, ne že Seznam používá slovo „garantuje“. Pokud dokumentace výslovně negarantuje SLA, je „garantuje“ silnější claim než podklad.

**Konkrétní oprava:**  
Změnit na neutrální formulaci:

> „Požadavek ručně kontrolují administrátoři Zboží.cz a nápověda uvádí zpracování do 48 hodin.“

---

### [TIP] Některá časová slova jsou zbytečně závislá na dni čtení

**Problémové místo:**

> „Texty nápovědy i titulek webu asistent.seznam.cz dnes používají název Seznam AI…“

> „nápověda Zboží.cz dnes přesměrovává do nápovědy Skliku.“

> „od května v Seznam AI ukazuje placené nabídky…“

**Proč je to problém:**  
Článek sice uvádí stav k 11. 10. 2026, takže nejde o zásadní chybu aktuálnosti. Přesto je bezpečnější opakovat datum přímo u citlivých tvrzení o přejmenování, přesměrování a spuštění nabídek, protože dokumentace Seznamu se mění a v briefu jsou WP modifikace i rozpory mezi stránkami.

**Konkrétní oprava:**  

- „k 11. 10. 2026 používají název Seznam AI“
- „k 11. 10. 2026 přesměrovává do nápovědy Skliku“
- „od května 2026 v Seznam AI ukazuje placené nabídky…“

---

### Potvrzení bez nálezu

- Rozpor mezi tiskovou zprávou, FAQ a stránkou Beta verze je popsán přiměřeně; článek z něj nedělá silnější závěr, než dovolují podklady.  
- Nabídky Seznam Nákupů v Seznam AI jsou správně popsané jako doložené placené nabídky od května 2026.  
- Článek správně říká, že Seznam nepopisuje výběr a řazení nabídek v Seznam AI.  
- Správně nepřenáší faktory řazení ze Zboží.cz na Seznam AI.  
- CTA na Pack fakticky neslibuje řešení feedu ani Zboží.cz a cena 1 490 Kč včetně DPH sedí podle briefu.