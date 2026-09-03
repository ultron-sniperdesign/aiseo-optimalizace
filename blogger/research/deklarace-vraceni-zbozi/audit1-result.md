VERDIKT: **OPRAVIT PŘED PUBLIKACÍ**

Článek je koncepčně správně otočený proti vyvrácené premise o ChatGPT a neslibuje rich result ani „AI boost“. Má ale několik blokujících problémů: hlavně přehnaný titulek „nemá nikdo“, zjednodušení povinných vlastností u `MerchantReturnPolicy`, příliš kategorické právní formulace a riziko nekonzistence s existujícím článkem, který podle zadání nese vyvrácenou premisu.

---

## 1. Blokující nálezy

1. **[BLOCKER] Titulek a H2 tvrdí víc, než dokládá měření**

   **Citace:**
   > `title: "Deklarace vrácení zboží: pole, které nemá nikdo"`

   > `## Doporučené pole, které nemá nikdo`

   **Problém:**  
   Doložené je „0 z 38 měřených českých e-shopů na Shoptetu“, ne „nemá nikdo“. Titulek je fakticky přehnaný a zbytečně clickbaitový. V auditovaném typu obsahu je to blokující, protože z hlavního claimu dělá nedoložitelnou generalizaci.

   **Návrh opravy:**
   - Frontmatter title:
     > `hasMerchantReturnPolicy schema: chybí ve 38 e-shopech`
   - H2:
     > `## Doporučené pole, které chybělo ve všech 38 měřených e-shopech`

   Tím se zachová silný hák, ale bude přesný.

---

2. **[BLOCKER] Povinné vlastnosti jsou ve statistikách a shrnutí zjednodušené zavádějícím způsobem**

   **Citace:**
   > `value: "2"`  
   > `label: "povinné vlastnosti podle Googlu: applicableCountry a returnPolicyCategory — nebo místo nich merchantReturnLink"`

   > `Nejkratší platná verze potřebuje dvě vlastnosti — zemi a typ lhůty. U konečné lhůty k nim přibývá počet dnů`

   > `Minimum jsou dvě vlastnosti: applicableCountry a returnPolicyCategory; u konečné lhůty k nim patří merchantReturnDays.`

   **Problém:**  
   Podle researche je `merchantReturnDays` povinné u `MerchantReturnFiniteReturnWindow`. A článek současně doporučuje právě konečnou lhůtu jako běžný český případ. Statistika „2 povinné vlastnosti“ proto může čtenáře svést k neúplné implementaci.

   **Návrh opravy:**
   - Ve stats nepoužívat samostatně „2 povinné vlastnosti“. Např.:
     > `value: "2–3"`  
     > `label: "povinné údaje podle Googlu: applicableCountry + returnPolicyCategory; u konečné lhůty také merchantReturnDays. Alternativou je merchantReturnLink."`

   - V návodu upravit větu:
     > `Minimální zápis podle Googlu stojí na applicableCountry a returnPolicyCategory; pokud použijete MerchantReturnFiniteReturnWindow, je povinné doplnit také merchantReturnDays. Alternativně lze použít merchantReturnLink.`

   - Ve shrnutí:
     > `Minimum jsou applicableCountry a returnPolicyCategory; u konečné lhůty je povinné také merchantReturnDays. Alternativou podle Googlu je merchantReturnLink.`

---

3. **[BLOCKER] Právní část místy působí jako návod, ne jen kontext**

   **Citace:**
   > `přestože hodnotu u většiny obchodů určuje zákon`

   > `Pro běžný e-shop applicableCountry CZ, returnPolicyCategory MerchantReturnFiniteReturnWindow a merchantReturnDays 14, protože čtrnáctidenní lhůtu pro odstoupení od smlouvy uzavřené na dálku dává § 1829 občanského zákoníku.`

   > `Pro český e-shop je hodnota daná — čtrnáct dnů podle § 1829 občanského zákoníku, pokud nemáte lhůtu delší.`

   **Problém:**  
   Zadání výslovně říká, že § 1829 má být kontext, ne právní rada. V aktuální podobě jsou formulace příliš direktivní: „jaké hodnoty mám použít“, „hodnota daná“, „pro český e-shop“. Chybí bezprostřední upozornění, že jde o typický B2C scénář, že existují výjimky a že data musí odpovídat vlastním obchodním podmínkám.

   **Návrh opravy:**
   - U první zmínky § 1829 přidat krátkou pojistku:
     > `V českém B2C kontextu je častou výchozí hodnotou 14 dnů podle § 1829 občanského zákoníku. Berte to jako obsahový kontext, ne právní radu; zápis musí odpovídat vašim obchodním podmínkám, delším lhůtám a případným výjimkám.`

   - FAQ otázku změnit z:
     > `Jaké hodnoty mám v Česku použít?`

     na:
     > `Jaké hodnoty bývají typické pro běžný český B2C e-shop?`

   - FAQ odpověď upravit:
     > `Typicky půjde o applicableCountry CZ, returnPolicyCategory MerchantReturnFiniteReturnWindow a merchantReturnDays 14. Čtrnáctidenní lhůta vychází z § 1829 občanského zákoníku pro spotřebitelské smlouvy uzavřené na dálku. Nejde o právní radu; delší lhůty, výjimky a konkrétní podmínky zapište podle vlastních obchodních podmínek.`

---

4. **[BLOCKER] Tvrzení o dopadu blokování automatického přístupu je příliš absolutní**

   **Citace:**
   > `Co OpenAI naopak zmiňuje výslovně: obchodníkům, kteří blokují automatický přístup, se stránky přeskočí. Tam je dopad na viditelnost doložený.`

   > `Doložený dopad má něco jiného: kdo blokuje automatický přístup, toho nákupní výzkum přeskočí.`

   **Problém:**  
   Research říká, že pokud někteří prodejci blokují automatický přístup, shopping research „will either skip those sources or rely on other sites“. Článek z toho dělá tvrdé „přeskočí“ a „dopad na viditelnost doložený“. To je silnější claim než zdroj.

   **Návrh opravy:**
   > `OpenAI výslovně uvádí jiný problém: pokud obchod blokuje automatický přístup, nákupní výzkum může daný zdroj přeskočit nebo se opřít o jiné weby. To je doložené riziko dohledatelnosti; není to ale důkaz, že hasMerchantReturnPolicy samo zlepší viditelnost.`

   Ve shrnutí:
   > `Tvrzení, že to preferuje ChatGPT, nemá oporu v dokumentaci OpenAI. Doložené je jen to, že blokovaný automatický přístup může vést k přeskočení zdroje nebo použití jiných zdrojů.`

---

5. **[BLOCKER] Riziko site-wide nekonzistence a kanibalizace s `/blog/produktove-stranky-pro-ai/`**

   **Citace v auditovaném článku:**
   > `co dál patří na produktovou stránku, [produktové stránky pro AI](/blog/produktove-stranky-pro-ai/)`

   **Problém:**  
   Podle zadání existující článek `/blog/produktove-stranky-pro-ai/` zmiňuje tuto vlastnost ve statistikách, kroku a FAQ a nese vyvrácenou premisu. Nový článek správně říká, že „ChatGPT preferuje e-shopy s deklarovanou vrátkou“ nemá oporu. Pokud ale odkazuje na starší článek, který opačnou premisu stále obsahuje, vzniká faktický rozpor v rámci webu a potenciální kanibalizace pro dotazy kolem deklarace vrácení / AI shopping.

   **Návrh opravy před publikací:**
   - Aktualizovat `/blog/produktove-stranky-pro-ai/`:
     - odstranit nebo přepsat tvrzení o preferenci ChatGPT,
     - odkázat na nový článek jako detail k `hasMerchantReturnPolicy`,
     - ponechat téma produktových stránek jako širší pilíř.
   - V auditovaném článku ponechat interní odkaz, ale anchor zpřesnit:
     > `[širší checklist produktové stránky pro AI](/blog/produktove-stranky-pro-ai/)`

   - Pokud starý článek nejde upravit hned, odkaz na něj v tomto článku dočasně odstranit.

---

## 2. Doporučení

1. **[WARNING] SEO title neobsahuje celé cílové klíčové slovo a je na horní hraně délky**

   **Citace:**
   > `seoTitle: "hasMerchantReturnPolicy: deklarace vrácení v datech e-shopu"`

   **Problém:**  
   Cílové klíčové slovo je `hasmerchantreturnpolicy schema`. SEO title začíná dobře, ale chybí „schema“. Zároveň má přibližně 60 znaků, tedy na hraně.

   **Návrh opravy:**
   > `seoTitle: "hasMerchantReturnPolicy schema: vrácení zboží e-shopu"`

   Délka cca 53 znaků, klíčové slovo je vepředu.

---

2. **[WARNING] Slug neodpovídá cílovému dotazu**

   **Citace:**
   > `slug: "deklarace-vraceni-zbozi"`

   **Problém:**  
   Slug je srozumitelný, ale míjí cílový technický dotaz. Pro tutorial na konkrétní vlastnost je lepší přesný slug.

   **Návrh opravy:**
   > `slug: "hasmerchantreturnpolicy-schema"`

   Alternativa, pokud chcete zachovat češtinu:
   > `slug: "hasmerchantreturnpolicy-vraceni-zbozi"`

---

3. **[WARNING] FAQ odpověď k povinnosti odbočuje k jiným povinným produktovým vlastnostem bez zdroje v researchi**

   **Citace:**
   > `Povinné jsou u produktu jiné vlastnosti — název, obrázek a nabídka s cenou a měnou.`

   **Problém:**  
   Článek je o `MerchantReturnPolicy`, ale odpověď najednou shrnuje povinné vlastnosti produktových dat. To není součást dodaného researche a může být nepřesné podle typu výsledku / implementace.

   **Návrh opravy:**
   > `Ne. Google ji u nabídek obchodníků uvádí jako doporučenou vlastnost a zobrazení negarantuje. Pokud ji ale použijete s konečnou lhůtou, musí zápis obsahovat také merchantReturnDays.`

---

4. **[WARNING] „Místo obojího může stát merchantReturnLink“ je příliš zkratkovité**

   **Citace:**
   > `Místo obojího může stát merchantReturnLink`

   > `Je to slabší varianta — stroj se z ní hodnoty nedozví — ale je platná.`

   **Problém:**  
   „Místo obojího“ není jasné: místo `applicableCountry` + `returnPolicyCategory`, nebo i místo `merchantReturnDays` u konečné lhůty? Navíc „slabší varianta“ není v researchi doložený termín Googlu.

   **Návrh opravy:**
   > `Alternativou podle Googlu je merchantReturnLink — odkaz na stránku s pravidly vrácení. Je méně explicitní než rozepsané hodnoty ve strukturovaných datech, proto ho berte spíš jako jednodušší variantu než jako plnohodnotný popis všech podmínek.`

---

5. **[WARNING] Nadpis „Jak si ověřit, že to funguje“ může evokovat nárok na rich result**

   **Citace:**
   > `## Jak si ověřit, že to funguje`

   > `Vložte adresu do testu bohatých výsledků nebo do validátoru schema.org a zkontrolujte, že se objekt MerchantReturnPolicy načetl bez chyb.`

   **Problém:**  
   Zadání výslovně říká, že článek nesmí slibovat rich result. Formulace „že to funguje“ může být čtena jako „že se to projeví ve výsledcích“. Přitom validace pouze potvrzuje parsování a chyby, ne zobrazení.

   **Návrh opravy:**
   > `## Jak ověřit, že se data načítají`

   A do checklistu:
   > `Rich Results Test nebo validátor schema.org ověří, že se objekt MerchantReturnPolicy načetl bez chyb. Neznamená to nárok na zobrazení ve výsledcích.`

---

6. **[WARNING] Použití slova „markup“ je mimo preferovaný slovník**

   **Citace:**
   > `markup je doplněk pro zbytek webu`

   > `Spolehnout se na markup místo Merchant Center`

   **Problém:**  
   Zakázaný termín je sice konkrétně „schema markup“, ale slovník webu má preferovat „strukturovaná data“. „Markup“ je zbytečný anglicismus.

   **Návrh opravy:**
   > `strukturovaná data jsou doplněk pro zbytek webu`

   > `Spolehnout se na strukturovaná data místo Merchant Center`

---

7. **[TIP] JSON-LD ukázka je věcně v zásadě správná, ale pro tutorial by měla ukázat i vložení do stránky**

   **Citace:**
   ```json
   {
     "@context": "https://schema.org",
     "@type": "OnlineStore",
     ...
   }
   ```

   **Hodnocení:**  
   Názvy vlastností i URL hodnoty ve vzorku odpovídají researchi: `hasMerchantReturnPolicy`, `MerchantReturnPolicy`, `applicableCountry`, `returnPolicyCategory`, `merchantReturnDays`, `returnMethod`, `returnFees`, `https://schema.org/MerchantReturnFiniteReturnWindow`, `https://schema.org/ReturnByMail`, `https://schema.org/FreeReturn`.

   **Doporučená úprava pro srozumitelnost:**
   Před ukázku doplnit:
   > `Do HTML stránky se JSON-LD vkládá do <script type="application/ld+json">. Níže je samotný obsah skriptu.`

   Tím se sníží riziko, že méně technický čtenář vloží jen holý JSON do stránky.

---

8. **[TIP] Sezonní výjimka je zmíněná příliš stručně**

   **Citace:**
   > `returnPolicySeasonalOverride s datem od a do — třeba na prodloužené vánoční vrácení`

   **Problém:**  
   Pro pokročilou vlastnost je formulace hodně obecná. Není to blokující, ale u tutorialu by pomohlo aspoň naznačit, že jde o samostatný objekt s časovým rozsahem.

   **Návrh opravy:**
   > `returnPolicySeasonalOverride použijte pro dočasné odchylky, například vánoční prodloužení lhůty; zapisuje se jako samostatný sezonní override s datem začátku a konce a hodnotami, které se v daném období liší.`

---

9. **[TIP] Meta description je v pořádku, ale může být přesnější vůči cílovému dotazu**

   **Citace:**
   > `description: "Google doporučuje deklarovat pravidla vrácení ve strukturovaných datech. V našem měření 38 českých e-shopů to neměl ani jeden. Jak to zapsat a kam."`

   **Hodnocení:**  
   Délka je v limitu a claim je střízlivý. Chybí ale přesný název vlastnosti.

   **Návrh jemné úpravy:**
   > `hasMerchantReturnPolicy schema deklaruje pravidla vrácení zboží. V měření 38 českých e-shopů chybělo všude. Kam ho zapsat a jak.`

---

## 3. Co je v pořádku

- **Premisa o ChatGPT je správně vyvrácená.** Článek netvrdí, že `hasMerchantReturnPolicy` zlepší pozice v ChatGPT nebo že přinese visibility boost.
- **JSON-LD ukázka nemá zjevnou chybu v názvech vlastností ani v URL hodnotách schema.org.**
- **Pořadí zdrojů podle Googlu je uvedené správně:** Content API for Shopping → Merchant Center / Search Console → produktová strukturovaná data → organizační strukturovaná data.
- **Answer ve frontmatteru je použitelný pro AEO/GEO:** začíná definicí, je samostatný a drží se cca 40–60 slov.
- **FAQ řeší reálné otázky** a odpovědi jsou většinou samostatné.
- **CTA je konkrétní a vede na produkt:** AI SEO audit za 3 600 Kč, ne generické „kontaktujte nás“.
- **Interní odkazy dávají tematicky smysl**, hlavně odkaz na měření produktových polí na Shoptetu a obecný článek o strukturovaných datech. Jen je nutné vyřešit nekonzistenci se starším článkem o produktových stránkách pro AI.