**VERDIKT: OPRAVIT PŘED PUBLIKACÍ**

Níže jsou konkrétní nálezy k tomuto článku. Celkově je text tonálně střízlivý, dobře tlumí humbuk a CTA je konkrétní. Problém je hlavně ve věcné opatrnosti u tvrzení o produktech třetích stran, v několika formulacích, které znějí jistěji, než je veřejně doložitelné, a v pár slovníkových/terminologických detailech.

---

## 1) [BLOCKER] Nedoloženě jisté tvrzení o „Agentic Commerce Protocol od OpenAI a Stripe z roku 2025“

**Citace:**
> „Reálně existuje: … otevřený protokol pro nákup uvnitř asistenta (Agentic Commerce Protocol od OpenAI a Stripe z roku 2025).“

**Problém:**
Toto je nejrizikovější tvrzení v článku. Název působí velmi konkrétně a oficiálně, ale bez zdroje je to k 11. 7. 2026 nedoložitelně přesné. Zvlášť spojení „od OpenAI a Stripe“ a „z roku 2025“ vypadá jako faktické tvrzení o formálním společném standardu/protokolu. Pokud pro to nemáte veřejný primární zdroj, je to před publikací neobhajitelné.

**Návrh opravy:**
- Buď tvrzení úplně odstranit.
- Nebo výrazně změkčit a zpřesnit, např.:
  - „Objevují se také pokusy o standardizaci nákupních akcí uvnitř AI asistentů, ale jejich podoba, rozšíření a vazba na konkrétní platformy nejsou ustálené.“
- Pokud to chcete nechat konkrétní, musíte mít v textu nebo poznámce jasný veřejný zdroj.

---

## 2) [BLOCKER] Přehnaně konkrétní tvrzení o „nákupní vrstvě v Google AI Mode napojené na Merchant Center“

**Citace:**
> „Reálně existuje: … nákupní vrstva v Google AI Mode napojená na Merchant Center …“

**Problém:**
Tvrzení může být částečně pravdivé v obecném smyslu, ale formulace „nákupní vrstva napojená na Merchant Center“ zní jako oficiální produktová architektura, kterou Google veřejně a jednoznačně deklaroval. To je příliš technicky definitivní. Bez opory ve veřejné dokumentaci je to formulováno moc tvrdě.

**Návrh opravy:**
Změkčit na doložitelný popis uživatelského chování/výstupu:
- „Google v AI režimech zobrazuje i nákupně orientované odpovědi a produktové informace; pro obchodníky proto dál dává smysl pracovat s produktovými daty a Merchant Center.“
- Vyhnout se slovu „vrstva“, pokud nemáte zdroj.

---

## 3) [BLOCKER] Tvrzení o „pokusech Perplexity s nákupem přímo v odpovědi“ potřebuje opatrnější formulaci

**Citace:**
> „Reálně existuje: … pokusy Perplexity s nákupem přímo v odpovědi …“

**Problém:**
Samotná formulace „pokusy“ je opatrná, ale „přímo v odpovědi“ už je věcně konkrétní produktové tvrzení. Pokud není v článku doloženo, zda jde o výběr produktů, přechod na obchodníka, nebo skutečné dokončení nákupu, je to nepřesné.

**Návrh opravy:**
- „Perplexity testovala nákupně orientované výstupy a cesty k produktu, ale rozsah funkcí a dostupnost se liší podle trhu a času.“
- Nebo doplnit upřesnění, co přesně umí/neumí.

---

## 4) [WARNING] „Nákupní funkce v ChatGPT“ jsou podané příliš široce

**Citace:**
> „Reálně existuje: nákupní funkce v ChatGPT (výběry produktů a srovnání) …“

**Problém:**
Tohle může být pravda v omezeném smyslu, ale „nákupní funkce“ je široké označení. Čtenář si pod tím může představit plnohodnotný nákup včetně transakce, zatímco veřejně doložitelné bývají spíš produktové návrhy, porovnání a odkazy/akce v omezených scénářích.

**Návrh opravy:**
- „ChatGPT umí v některých scénářích pomoci s výběrem a porovnáním produktů; neznamená to ale plošně dostupný a zavedený nákupní kanál.“
- Případně rozdělit „výběr/porovnání“ a „objednání“ jako dvě odlišné úrovně.

---

## 5) [WARNING] Skrytá spekulace v tvrzení „mimo něj je produkt neviditelný“

**Citace:**
> stats:
> `label: "místo seznamu e-shopů dostane zákazník užší výběr — mimo něj je produkt neviditelný"`

a v textu:
> „Být šestý byla šance; nebýt ve výběru je nula“

**Problém:**
Jako zjednodušení je to srozumitelné, ale fakticky je to příliš absolutní. Produkt nemusí být „neviditelný“ celkově — může být dohledatelný jinou cestou, v jiném rozhraní, přes klasické vyhledávání, tržiště, reklamu nebo jiného asistenta.

**Návrh opravy:**
- „… mimo něj produkt ztrácí velkou část viditelnosti v dané odpovědi“
- „… nebýt ve výběru znamená výrazně menší šanci na klik nebo doporučení“

---

## 6) [WARNING] Formulace „agent si e-shop neprolistuje — pracuje s daty, ne s dojmem“ je příliš kategorická

**Citace:**
> „Agent si e-shop neprolistuje — pracuje s daty, ne s dojmem“

**Problém:**
Tohle je zkratka, ale jako doslovné tvrzení je problematická. Některé systémy mohou stránku procházet, číst text, extrahovat informace z HTML, obrázků i rozhraní. Správné je říct, že se nemohou spoléhat na vizuální dojem stejně jako člověk, ne že „neprolistují“ web vůbec.

**Návrh opravy:**
- „Agent neposuzuje web jako člověk; opírá se hlavně o strojově čitelné a konzistentní údaje.“
- Tím zachováte pointu bez nepřesnosti.

---

## 7) [WARNING] Tvrzení o blokování AI robotů je podané příliš absolutně

**Citace:**
> „e-shop blokuje AI roboty v robots.txt a zároveň čeká, že se jeho produkty objeví v AI odpovědích. To nejde dohromady“

a
> „Nechat AI roboty projít, pokud chci být v odpovědích.“

**Problém:**
Princip je správný, ale formulace je příliš jednoznačná. Neexistuje jeden univerzální režim „AI odpovědí“ ani jeden seznam robotů. Některé systémy mohou čerpat i nepřímo, přes indexy, partnerské zdroje, feedy nebo jiná rozhraní. Takže „to nejde dohromady“ je moc tvrdé.

**Návrh opravy:**
- „… může to jít proti sobě“
- „… pokud chci zvýšit šanci, že budou mé stránky nebo data použitelné i pro AI systémy“
- Případně doplnit „záleží na konkrétním systému a zdroji dat“.

---

## 8) [WARNING] Schema.org pole: `shippingDetails` je uvedeno nepřesně a neúplně

**Citace:**
Zadání auditu výslovně upozorňuje na:
> „Správnost polí Schema.org (Product/Offer: name, brand, gtin, mpn, price, priceCurrency, availability, aggregateRating, shippingDetails).“

V článku:
> „Hodnocení a podmínky, … doprava a vrácení.“

**Problém:**
Článek sice není technická dokumentace, ale odkazuje na konkrétní datová pole. `shippingDetails` není pole `Product`, ale typicky vlastnost nabídky (`Offer.shippingDetails`) s navázanou strukturou `OfferShippingDetails`. Podobně hodnocení patří přes `aggregateRating`, nikoli jen obecně „hodnocení“. Pokud článek mluví o „polích“, měl by být přesný aspoň na úrovni názvosloví.

**Návrh opravy:**
V části „Na kterých datech záleží“ nebo v interním odkazu upřesnit:
- „Ve strukturovaných datech typicky dává smysl hlídat zejména `Product` a `Offer`: `name`, `brand`, `gtin`, případně `mpn`, a u nabídky `price`, `priceCurrency`, `availability`; volitelně také `aggregateRating` a údaje o dopravě přes `shippingDetails`.“
Tím se předejde technické nepřesnosti.

---

## 9) [WARNING] „Bez GTIN nebo značky“ je logicky nepřesné

**Citace:**
> „Bez GTIN nebo značky je těžší poznat, že jde o stejný produkt jako u konkurence.“

**Problém:**
Značka sama o sobě produkt obvykle jednoznačně neidentifikuje. GTIN/MPN ano, značka spíš pomáhá zúžit kontext. Věta směšuje identifikátor a atribut.

**Návrh opravy:**
- „Bez GTIN, případně MPN, je těžší jednoznačně poznat, že jde o stejný produkt; značka identifikaci pomáhá zpřesnit.“
To je věcně čistší.

---

## 10) [DOPORUČENÍ] První odstavec a `answer` fungují dobře, ale obsahují jednu zbytečně tvrdou formulaci

**Citace (`answer` i první odstavec):**
> „… o zařazení do porovnání rozhoduje strojová srozumitelnost produktu — cena, dostupnost, značka a identifikátor.“

**Problém:**
Jako definice je to dobré: začíná definicí, dává samostatný smysl, má přiměřenou délku. Slabina je sloveso „rozhoduje“, které zní exaktněji, než lze doložit. Ve skutečnosti tato data **mohou významně ovlivnit** zařazení, ale nejsou doloženým jediným rozhodovacím mechanismem.

**Návrh opravy:**
- „… takže šanci na zařazení do porovnání výrazně ovlivňuje strojová srozumitelnost produktu…“
To zachová sílu sdělení bez overclaimu.

---

## 11) [DOPORUČENÍ] Anglicismus „feed“ je mimo povolené technické názvy

**Citace:**
> „feed = stránka“
>
> „Stačí strukturovaná data na stránce, nebo je potřeba i feed?“
>
> „produktový feed“

**Problém:**
V zadání jsou povolené jen některé anglické názvy; „feed“ mezi nimi není. Článek ho používá opakovaně, a to i tam, kde jde snadno nahradit češtinou.

**Návrh opravy:**
Používat:
- „produktový datový soubor“
- „produktový export“
- případně při prvním výskytu „produktový datový soubor (feed)“ a dál už jen česky

---

## 12) [DOPORUČENÍ] Anglicismus „warning“ v komponentě se do čteného výstupu možná nepropíše, ale zkontrolujte UI

**Citace:**
> `<Insight tone="warning">`

**Problém:**
Pokud se to do výsledného textu nikde nepropsalo, je to v pořádku. Pokud ale komponenta vykresluje anglický štítek typu „warning“, bylo by to v rozporu s požadavkem na češtinu.

**Návrh opravy:**
- Ověřit finální render.
- Pokud se štítek zobrazuje, nahradit za „Upozornění“.

---

## 13) [DOPORUČENÍ] Interní odkaz na `ai-crawler-robots-txt` je terminologicky v rozporu s brand slovníkem

**Citace:**
> „… podrobněji [robots.txt pro AI](/blog/ai-crawler-robots-txt/).“

**Problém:**
V textu samotném užíváte správně „AI roboty“, ale slug obsahuje `crawler`. To je spíš systémový než čistě obsahový problém, ale z hlediska konzistence slovníku stojí za zmínku.

**Návrh opravy:**
- Pokud je možné měnit slug bez vedlejších škod: zvážit český nebo neutrálnější slug.
- Pokud ne, v článku je to ještě přijatelné, protože zobrazený anchor text je česky.

---

## 14) [KOSMETIKA] Titulek je funkční, ale SEO může být silnější pro cílové KW

**Citace:**
> `title: "AI nákupní agenti a e-shopy: co se mění"`

**Problém:**
Titulek je v normě a klíčové slovo je vpředu, to je dobře. Jen délka je spíš na hraně a varianta s druhým cílovým výrazem by mohla lépe pokrýt hledání „agentní nakupování“.

**Návrh opravy:**
Není nutné, ale lze zvážit:
- „AI nákupní agenti a e-shopy: co dělat teď“
- nebo „AI nákupní agenti: co znamenají pro e-shopy“

Současná verze je ale publikovatelná po věcných opravách.

---

## 15) [KOSMETIKA] Meta description je dobrá, jen lehce delší a méně konkrétní pro „ChatGPT nakupování“

**Citace:**
> `description: "AI nákupní agenti hledají a porovnávají produkty za zákazníka. Co je reálné, co je humbuk a na kterých produktových datech v Česku záleží už teď."`

**Problém:**
Je použitelná. Jen neobsahuje žádný konkrétní příklad typu ChatGPT/Google, které se v článku řeší, a „už teď“ je lehce publicistické.

**Návrh opravy:**
- „AI nákupní agenti mění výběr zboží v ChatGPT i dalších systémech. Co je doložené a která produktová data mají pro e-shopy smysl v Česku.“
Není povinné, spíš vylepšení.

---

## 16) [DOPORUČENÍ] Článek je dobře vymezený proti humbuku, ale jedna věta může působit příliš definitivně vůči vlastní nabídce služeb

**Citace:**
> „Přestavovat e-shop kvůli kanálu, který v Česku zatím nemá objem, je předčasné…“

**Problém:**
Myšlenka je správná a naopak zvyšuje důvěryhodnost. Jen protože web prodává AI SEO služby, je dobré být ještě přesnější: nejde o to, že se nemá dělat nic, ale že se nemá dělat nákladná přestavba bez důkazů.

**Návrh opravy:**
- „Nákladně přestavovat e-shop jen kvůli agentnímu nakupování je v Česku zatím předčasné; čistá produktová data a soulad údajů ale smysl mají už dnes.“
Tím odstraníte možné vnitřní napětí mezi edukací a nabídkou.

---

## 17) [KOSMETIKA] FAQ je kvalitní a sebestačné, jen poslední odpověď by mohla být o chlup méně kategorická

**Citace:**
> „Ne. Většina toho, co agentům pomáhá, jsou věci, které dávají smysl i bez nich…“

**Problém:**
Obsahově správně. „Ne.“ na začátku ale není ideální pro samostatnou citovatelnost odpovědi.

**Návrh opravy:**
- „Kvůli agentům obvykle není nutné e-shop předělávat. Většina užitečných úprav dává smysl i bez nich…“

---

## 18) [KOSMETIKA] Slovo „mechanika“ je srozumitelné, ale místy trochu technicistní

**Citace:**
> „Provozovatelé mechaniku nezveřejňují.“
>
> „Mechanika agentů není veřejná…“

**Problém:**
Není to chyba, ale pro širší publikum je přirozenější „způsob výběru“ nebo „pravidla výběru“.

**Návrh opravy:**
- „… jak přesně produkty vybírají a řadí“
- „… způsob výběru produktů není veřejný“

---

# Krátké potvrzení toho, co je dobře

- **Tón**: střízlivý, neagresivní, bez zakázaných prodejních superlativů.
- **`answer` + první odstavec**: fungují jako samostatná definice a mají dobrou hustotu informací.
- **FAQ**: praktické, realistické, většinou sebestačné.
- **CTA**: konkrétní a v souladu se zadáním.
- **Aktuálnost**: datum 11. 7. 2026 je uvedeno a závěrečná transparentní poznámka pomáhá.

# Shrnutí nejdůležitějších oprav před publikací

1. Opravit nebo odstranit tvrzení o **Agentic Commerce Protocol od OpenAI a Stripe (2025)**.  
2. Změkčit tvrzení o **Google AI Mode + Merchant Center**.  
3. Zpřesnit formulace o **Perplexity** a **ChatGPT nákupních funkcích**.  
4. Omezit absolutní výroky typu **„neviditelný“, „to nejde dohromady“, „agent si e-shop neprolistuje“**.  
5. Nahradit anglicismus **feed** českým výrazem.  
6. Zpřesnit technickou pasáž kolem **GTIN/MPN/brand** a **Offer.shippingDetails / aggregateRating**.

Po těchto úpravách bude článek výrazně bezpečnější a důvěryhodnější.