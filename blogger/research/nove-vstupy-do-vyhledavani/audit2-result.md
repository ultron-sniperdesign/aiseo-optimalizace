## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek je po druhém kole výrazně použitelnější: krátká odpověď drží smysl, FAQ je věcné, CTA je konkrétní. Před publikací bych ale opravil několik věcných a SEO problémů, hlavně návrat tvrzení o „delších“ dotazech a nepřesnost kolem „Chrome tabs“.

---

## Nálezy

### [BLOCKER] Cílové klíčové slovo v článku prakticky není

**Citace:**

```yaml
seoTitle: "Search Live a nové vyhledávací pole Google (2026)"
keywords:
  - "nové vyhledávací pole google"
  - "search live"
```

Cílové KW je podle zadání **„intelligent search box a search live“**, ale „intelligent search box“ není v titulku, SEO titulku, odpovědi, H2 ani textu. Pokud je to skutečně cílové KW, článek ho netrefuje.

**Návrh opravy:**

Buď změnit cílové KW na české „nové vyhledávací pole Google a Search Live“, nebo zapracovat výraz do SEO prvků, např.:

```yaml
seoTitle: "Intelligent Search Box a Search Live v Google (2026)"
```

A do prvního odstavce doplnit vysvětlení:

> Nové vyhledávací pole Google, často hledané jako „intelligent search box“, a Search Live jsou dva nové způsoby zadání dotazu…

Pozor: použít jen pokud „Intelligent Search Box“ není vydáváno za oficiální název, pokud jím není.

---

### [WARNING] Slug: odmítnutí původní připomínky je obhajitelné jen částečně

**Citace:**

```yaml
slug: "nove-vstupy-do-vyhledavani"
```

Český slug je vzhledem ke zvyklostem webu obhajitelný. Problém není čeština, ale obecnost. Slug neobsahuje ani Search Live, ani nové vyhledávací pole, takže je méně přesný než článek.

**Návrh opravy:**

Pokud chcete český slug, lepší kompromis:

```yaml
slug: "search-live-nove-vyhledavaci-pole"
```

Nebo při důrazu na cílové KW:

```yaml
slug: "intelligent-search-box-search-live"
```

Ponechat současný slug bych nechal jen tehdy, pokud jde o širší sérii článků o vstupech do vyhledávání.

---

### [BLOCKER] „Karty prohlížeče“ rozšiřují tvrzení nad rámec citace „Chrome tabs“

**Citace:**

> přijímá text, obrázky, soubory, videa i karty prohlížeče

> obrázek, soubor, video nebo otevřená karta prohlížeče

Přitom v citaci uvádíte:

> „text, images, files, videos or Chrome tabs as inputs“

„Chrome tabs“ nejsou obecně „karty prohlížeče“. To může nesprávně naznačit podporu všech prohlížečů.

**Návrh opravy:**

Všude sjednotit na:

> karty Chrome

nebo přesněji:

> otevřené karty v prohlížeči Chrome

Týká se description, answer, FAQ, checklistu, odrážek i shrnutí.

---

### [WARNING] Vrátilo se nedoložené tvrzení o „delších“ dotazech

**Citace:**

> Když pole pomáhá formulovat delší a konkrétnější dotaz…

A ve shrnutí:

> protože dotazy na vstupu jsou delší a přesnější.

To je přesně problém, který měl být po prvním kole odstraněn. Z citací plyne prostor pro popis a formulaci, ne doložené prodloužení dotazů v praxi.

**Návrh opravy:**

Nahradit:

> Když pole pomáhá formulovat konkrétnější dotaz s více kontextem…

A ve shrnutí:

> protože dotazy na vstupu mohou být konkrétnější a více kontextové.

---

### [WARNING] „Přibyly v roce 2026“ může být silnější než zdroje

**Citace:**

> Nové vyhledávací pole a Search Live jsou dva vstupy do Vyhledávání Google, které přibyly v roce 2026.

Pokud zdroje dokládají oznámení, rozšíření nebo dostupnost v roce 2026, ale ne první existenci obou funkcí, je „přibyly“ rizikové. U Search Live navíc text jinde říká spíš, že „přidal hlas a kameru“, ne že celý vznikl.

**Návrh opravy:**

Bezpečnější formulace:

> Nové vyhledávací pole a Search Live jsou dva vstupy do Vyhledávání Google, které Google v roce 2026 popsal nebo rozšířil v souvislosti s Režimem AI.

Nebo kratší:

> …které Google v roce 2026 uvádí mezi novými způsoby zadání dotazu.

---

### [WARNING] „Search Live přidal hlas a kameru“ je významově nepřesné

**Citace:**

> Search Live přidal hlas a kameru.

Search Live „nepřidal“ hlas a kameru sám o sobě. Je to funkce, která umožňuje hlasovou konverzaci a může využít kameru. Současná věta zní, jako by šlo o update existující funkce, ale článek to nedokládá.

**Návrh opravy:**

> Search Live umožňuje hlasovou konverzaci a práci s kamerou.

Nebo v description:

> Search Live umožňuje hlasovou konverzaci a ukázání okolí kamerou.

---

### [WARNING] Dostupnost „všude, kde je Režim AI“ může být příliš absolutní

**Citace:**

> Search Live umožňuje hlasovou konverzaci s kamerou a je popsaný jako dostupný všude, kde je Režim AI.

> Nápověda popisuje Search Live jako dostupný všude, kde je Režim AI…

Pokud nápověda zároveň obsahuje podmínky typu zařízení, aplikace, účet, věk, postupné zavádění nebo jazyk, článek je zamlčuje. „Všude“ pak může být zavádějící.

**Návrh opravy:**

> Search Live je podle nápovědy navázaný na země a jazyky Režimu AI; praktická dostupnost se ale může řídit i dalšími podmínkami Googlu, například aplikací, účtem nebo postupným zaváděním.

Pokud žádné takové podmínky ve zdroji nejsou, stačí doplnit „země a jazyky“:

> …dostupný v zemích a jazycích, kde je dostupný Režim AI.

---

### [WARNING] Přesný název modelu potřebuje přímý zdroj

**Citace:**

> Google u Search Live uvádí hlasový model Gemini 3.1 Flash Live.

To je velmi konkrétní technické tvrzení. Pokud přesně tento název není v uvedeném zdroji, je to rizikové. Navíc pro článek sám říkáte, že název modelu není podstatný.

**Návrh opravy:**

Buď doplnit přímou citaci / zdroj, nebo větu zjemnit:

> Google u Search Live uvádí model z rodiny Gemini. Pro tenhle článek je podstatné hlavně to, že jde o hlasovou konverzaci s možností kamery a odkazy na obrazovce.

Případně celou větu o modelu vyhodit.

---

### [TIP] „Adopce“ je zbytečný anglicismus

**Citace:**

> žádné číslo o adopci

> ne o adopci

V češtině tady stačí „používání“ nebo „míra používání“.

**Návrh opravy:**

> žádné číslo o používání

> ne o míře používání

---

### [TIP] „Vstupní strana“ a „výstupní strana“ zní kostrbatě

**Citace:**

> Vstupní strana se tedy proměnila víc než výstupní.

Je jasné, co chcete říct, ale formulace působí jako doslovný překlad.

**Návrh opravy:**

> Víc se mění způsob zadání dotazu než samotné prostředí výsledků.

Nebo:

> Největší změna je zatím na straně zadání dotazu, ne v doloženém chování prokliků.

---

### [TIP] „U obou ploch“ je nepřirozené

**Citace:**

> Google u obou ploch uvádí, že odkazy zůstávají součástí prostředí…

„Plochy“ tady zní jako překlad „surfaces“. Česky lépe:

**Návrh opravy:**

> Google u obou funkcí uvádí, že odkazy zůstávají součástí prostředí…

---

### [TIP] Jedna odrážka je užitečná, ale formulačně nejasná

**Citace:**

> Odpověď na stránce by proto měla být srozumitelná i bez znalosti toho, co uživatel ukázal kamerou nebo připojil jako vstup.

Myšlenka je dobrá, ale věta může znít zvláštně: stránka samozřejmě nezná konkrétní obrázek ani soubor uživatele.

**Návrh opravy:**

> Stránka by proto měla jasně pojmenovat situace, parametry a omezení, ke kterým se vztahuje, aby ji vyhledávání mohlo lépe spárovat s kontextem z obrázku, souboru nebo karty Chrome.

---

### [TIP] Co je dobře

- Krátká odpověď má samostatný smysl a drží se kolem požadovaného rozsahu.
- FAQ odpovídá na reálné otázky a není reklamní.
- CTA je konkrétní a vede na produkt: **AI SEO audit za 3 600 Kč**.
- Formulace kolem prokliků jsou většinou správně opatrné: článek netvrdí dopad na CTR ani pozice.