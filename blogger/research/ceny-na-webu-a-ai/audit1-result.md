Níže jen nálezy, které jsou podložené konkrétní pasáží v dodaném textu.

---

[WARNING]  
**Citace:** „V článku o chybné informaci o firmě v AI jsme psali, že si systém spíš domyslí odpověď tam, kde chybí jasné a konzistentní podklady. **Cena je přesně takové místo. Ptají se na ni skoro vždycky** a na spoustě českých webů na ni odpověď není.“  
**Proč:** „Ptají se na ni skoro vždycky“ je zobecnění o chování uživatelů / systémů bez opory v textu. Není to tvrdá statistika, ale je to nepodložené frekvenční tvrzení.  
**Návrh opravy:**  
„Cena bývá častý dotaz a na spoustě českých webů na ni odpověď není.“  
Případně: „Cena patří mezi časté dotazy…“

---

[WARNING]  
**Citace:** „Když na vlastním webu jasný údaj chybí, **nezůstane prázdno — zbydou cizí zdroje**.“  
**Proč:** Formulace je příliš kategorická. Ne vždy systém nebo člověk sáhne po cizím zdroji; někdy prostě odpověď neposkytne.  
**Návrh opravy:**  
„Když na vlastním webu jasný údaj chybí, často nastupují cizí zdroje.“  
nebo  
„…může prostor vyplnit cizí zdroj.“

---

[WARNING]  
**Citace:** V tabulce: „Text na stránce … **Nejlepší varianta — přečte ji člověk i stroj, dá se citovat**“  
**Proč:** „Dá se citovat“ je blízko příslibu použitelnosti v AI systémech. Samo o sobě to není garance, ale formulace je moc přímočará.  
**Návrh opravy:**  
„Nejčitelnější varianta — člověk i stroj ji obvykle snáz zpracují.“  
Případně doplnit hedge: „…a zvyšuje šanci, že ji systémy správně přečtou.“

---

[WARNING]  
**Citace:** V tabulce: „Za formulářem … **Nedostupné — co je za formulářem, přečte jen ten, kdo ho vyplní**“  
**Proč:** Absolutní tvrzení. Uživatel ano, ale u systémů je to potřeba hedgovat; navíc „jen ten, kdo ho vyplní“ je zbytečně absolutní.  
**Návrh opravy:**  
„Hůř dostupné — obsah za formulářem uvidí až návštěvník po vyplnění a systém se k němu často nedostane.“

---

[WARNING]  
**Citace:** „„Cena na dotaz“ je prázdné místo, **které něco vyplní za vás**.“  
**Proč:** Smysl je správný, ale formulace je příliš definitivní. Ne vždy „něco vyplní“.  
**Návrh opravy:**  
„„Cena na dotaz“ je informačně chudé místo, které může prostor pro domýšlení zvětšit.“

---

[WARNING]  
**Citace:** Stepper / „Volba“: „**Skoro vždy jde říct aspoň něco.**“  
**Proč:** Zbytečně široké a téměř absolutní tvrzení. V některých oborech to platit nemusí.  
**Návrh opravy:**  
„Často jde říct aspoň něco.“  
nebo  
„V mnoha případech jde uvést aspoň rámec.“

---

[DOPORUČENÍ]  
**Citace:** „Pro rozpětí slouží `PriceSpecification` s `minPrice` a `maxPrice`…“ + JSON ukázka  
**Proč:** Ukázka je technicky v zásadě použitelná, ale tvrzení je zjednodušené. Pro audit je lepší být přesnější: `Offer` je správně; `PriceSpecification` se používá pro cenovou specifikaci a rozsah lze vyjádřit přes `minPrice`/`maxPrice`. Chybí ale upozornění, že implementace má odpovídat typu stránky a reálnému obsahu.  
**Návrh opravy:**  
Doplnit jednu větu:  
„Konkrétní implementace se má řídit typem stránky a tím, co je na ní skutečně vidět; strukturovaná data nemají doplňovat cenu, která na stránce není.“  
Případně uvést „např.“ místo dojmu jediné správné cesty:  
„Rozpětí lze zapsat např. přes `PriceSpecification` s `minPrice` a `maxPrice`…“

---

[DOPORUČENÍ]  
**Citace:** JSON:
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI SEO audit",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "CZK",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "minPrice": 15000,
      "maxPrice": 45000,
      "priceCurrency": "CZK"
    }
  }
}
```  
**Proč:** JSON je syntakticky validní. Věcně také dává smysl, ale ukázka je o trochu čistší bez duplicitního `priceCurrency` nahoře i uvnitř, nebo s vysvětlením, proč je uvedeno na obou úrovních. Není to chyba, spíš prevence zmatku.  
**Návrh opravy:**  
Buď ponechat jen v `priceSpecification`, nebo doplnit krátký komentář v textu:  
„Měnu uvádějte konzistentně; v praxi ji můžete mít na úrovni `Offer` i cenové specifikace podle zvolené struktury.“

---

[WARNING]  
**Citace:** „Google shodu vyžaduje…“  
**Proč:** Směr je správný, ale formulace je moc tvrdá bez upřesnění kontextu. Lepší je říct, že strukturovaná data mají odpovídat viditelnému obsahu stránky a nesoulad je problém pro validitu / důvěryhodnost.  
**Návrh opravy:**  
„Google u strukturovaných dat očekává shodu s viditelným obsahem stránky; nesoulad je problém pro interpretaci i důvěryhodnost.“  
Pokud chcete nechat „vyžaduje“, doporučuji doplnit odkaz na oficiální dokumentaci mimo samotný článek.

---

[KOSMETIKA]  
**Citace:** „…ne až za klik.“  
**Proč:** Hovorové zkrácení; ne anglicismus, ale vedle jinak věcného tónu působí lehce nepečlivě.  
**Návrh opravy:**  
„…ne až po prokliku.“  
nebo  
„…ne až po kliknutí.“

---

[KOSMETIKA]  
**Citace:** „cenu zopakujte strojově čitelně přes Offer a PriceSpecification“  
**Proč:** V českém textu by šlo mírně uhladit vazbu, aby nepůsobila jako překladová.  
**Návrh opravy:**  
„cenu zapište strojově čitelně pomocí `Offer` a případně `PriceSpecification`“

---

[DOPORUČENÍ]  
**Citace:** CTA: „AI SEO audit za 9 990 Kč dohledá pravděpodobné zdroje sporných údajů a navrhne obsahové a technické kroky, **které mohou zvýšit šanci na nápravu**.“  
**Proč:** CTA je v zásadě v pořádku a není v rozporu s tezí „nic negarantujeme“. Jen „náprava“ je lehce vágní — čeho přesně.  
**Návrh opravy:**  
„…které mohou zvýšit šanci, že se budou o firmě a jejích cenách čerpat přesnější údaje.“  
Tím se CTA ještě víc sladí s tématem článku.

---

[WARNING]  
**Citace:** „Cena je **nejčastější** prázdné místo na českých webech…“  
**Proč:** Superlativ bez opory. V zadání je to sice teze článku, ale ve finálním textu je to stále nepodložené tvrzení.  
**Návrh opravy:**  
„Cena patří k nejčastějším prázdným místům na českých webech…“  
To zachová význam bez nepodloženého prvenství.

---

[KOSMETIKA]  
**Citace:** `answer: "Cena na webu je pro AI spolehlivě čitelná hlavně tehdy, když je na stránce napsaná jako text…"`  
**Proč:** Formálně splňuje 40–60 slov i definici na začátku. Jen slovo „spolehlivě“ je na hraně absolutnosti vzhledem k tématu.  
**Návrh opravy:**  
„Cena na webu je pro AI nejčitelnější tehdy, když je na stránce napsaná jako text…“  
Zůstane definice i opatrnější tón.

---

## VERDIKT
**OPRAVIT PŘED PUBLIKACÍ**

### 4 prioritní zásahy
1. Změkčit nepodložené superlativy a frekvenční tvrzení: „nejčastější“, „skoro vždycky“, „skoro vždy“.  
2. Opravit příliš kategorické formulace o chování systémů: „nezůstane prázdno“, „dá se citovat“, „nedostupné“, „něco vyplní za vás“.  
3. Zpřesnit větu „Google shodu vyžaduje“ na opatrnější a přesnější formulaci, případně podložit dokumentací.  
4. Lehce učesat technickou pasáž o strukturovaných datech, aby nezněla jako jediná univerzální implementace a nebyla matoucí duplicita `priceCurrency`.

Celkově je článek obsahově silný a disciplinovaný; problémy jsou hlavně v několika zbytečně tvrdých formulacích, ne v jádru argumentace.