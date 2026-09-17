# C3 — Nezávislý jazykový audit

**Článek:** `src/content/articles/chatbot-na-webu-a-ai-viditelnost.mdx`
**Datum:** 17. září 2026
**Verdikt:** **Vrátit k dílčí jazykové úpravě.** Základ textu je věcný a srozumitelný. Před uzavřením C3 doporučuji vyřešit 12 nálezů níže. Tři další body jsou redakční doporučení, nikoli samostatné překážky publikace. Nejde o požadavek na přepsání článku.

## Rozsah a metoda

Přečetl jsem celý článek včetně titulku, popisu, krátké odpovědi, všech FAQ, tabulek, textů komponent a závěrečné nabídky. Přečetl jsem celý `marketing/05-messaging-a-tonalita.md` a skill `/Users/ultroncloudehome/.agents/skills/cestina-audit/SKILL.md`. Slovník jsem prohledal cíleně pomocí `rg`; nečetl jsem jej celý. Nečetl jsem ostatní složky research.

Mechanický průchod:

```text
python3 blogger/jazyk-check.py src/content/articles/chatbot-na-webu-a-ai-viditelnost.mdx --slovnik blogger/JAZYK_SLOVNIK.md

1900 slov · pravidel: 275
celkem 0 nalezu (0x ⛔, 0 k reseni) · 0.0 na 1000 slov
```

Slovník: verze 70. Výsledek checkeru není výsledkem celého jazykového auditu: nehodnotí větný význam, návaznost ani nejasný podmět. Samostatný redaktorský průchod provedl tento auditující agent; externí model přes API nebyl volán. Článek, slovník a společný log jsem neměnil. Následující čísla řádků odkazují na stav souboru při auditu.

Tato kontrola posuzuje jazyk a formulaci tvrzení. Neověřuje aktuální funkce dodavatelů ani cenu služby proti externím zdrojům. V reportu proto nerozhoduji o faktické správnosti dokumentace, ale o tom, co z použité věty čtenář pochopí.

## Nálezy k opravě

### 1. „Doložená záruka“ míchá důkaz a příslib výsledku

**Místo:** FAQ, ř. 25.
**Citace:** „Samotné vložení chatovacího okna ale není doloženou zárukou lepších pozic ani citací v AI.“

**Problém:** „Doložená záruka“ je nepřirozené a významově nepřesné spojení. Doložit lze vliv na pozice nebo citace; záruka slibuje výsledek. Věta má zákazníka upozornit, že samotné vložení chatu výsledek nezaručuje. Přídavné jméno jí nic užitečného nepřidává.

**Konkrétní oprava:** „Samotné vložení chatovacího okna ale nezaručuje lepší pozice ani citace v AI odpovědích.“

**Triáž:** opravit. Kategorie: strojová vazba, přesnost tvrzení.

### 2. Fin není v samostatné FAQ odpovědi představen

**Místo:** FAQ, ř. 29.
**Citace:** „Intercom například rozlišuje interní články použitelné pro Fin a články určené pro veřejné centrum nápovědy.“

**Problém:** „Fin“ je vlastní název produktu, ale čtenář této odpovědi nemusí znát jeho význam. V těle článku vysvětlení je; FAQ má přesto fungovat i samostatně. Vadou není název ani požadavek na jeho překlad, nýbrž chybějící krátké uvedení.

**Konkrétní oprava:** „Intercom například rozlišuje interní články, z nichž může čerpat jeho AI asistent Fin, a články určené pro veřejné centrum nápovědy.“

**Triáž:** opravit. Kategorie: nevysvětlený název v kontextu.

### 3. „Kde odpověď žije“ nahrazuje konkrétní informaci metaforou z angličtiny

**Místo:** úvod, ř. 45.
**Citace:** „Rozdíl bývá schovaný v tom, kde odpověď žije.“

**Problém:** U digitálního obsahu jde o obrat podobný anglickému „where the answer lives“. V tomto článku je důležitý přesný rozdíl mezi uložením podkladů a veřejným zveřejněním. Metafora ho zastírá a sloveso „žije“ může označovat obojí.

**Konkrétní oprava:** „Rozdíl je v tom, zda odpověď najdete jen v chatu, nebo také na veřejné stránce.“

**Triáž:** opravit. Kategorie: kalk a nejasnost. Nenavrhuji plošné zakázání slovesa „žít“ ani všech metafor.

### 4. Import nemůže nic „popisovat“

**Místo:** ř. 65.
**Citace:** „Samotný import nepopisuje opačný krok, tedy zveřejnění nových znalostí na vašem webu.“

**Problém:** Věta zaměňuje proces a dokumentaci. Import je úkon, který něco provede nebo neprovede; postup může popisovat dokumentace. Čtenář neví, zda autor tvrdí, že služba nic nezveřejní, nebo jen že to citovaný text nedokládá.

**Konkrétní oprava:** „Tento popis importu nedokládá, že by se nové informace z chatbotu také zveřejnily na vašem webu.“

**Triáž:** opravit. Kategorie: významová vazba, podmět a přísudek. Návrh zachovává omezený závěr z dokumentace a nepřidává tvrzení o všech funkcích služby.

### 5. Konstrukce „provádět interakce“ je úřední a druhá polovina věty má chybný podmět

**Místo:** ř. 83.
**Citace:** „Takto vybavený systém může provádět interakce, které běžné procházení stránky neprovádí.“

**Problém:** „Provádět interakce“ je těžkopádná nominalizace. Navíc procházení samo žádné úkony neprovádí; provádí je systém. V odstavci už je konkrétně zmíněna myš a klávesnice, proto lze jejich použití pojmenovat přímo.

**Konkrétní oprava:** „Takto vybavený systém může klikat nebo psát do formulářů, což Google při běžném procházení stránky nedělá.“

**Triáž:** opravit. Kategorie: strojový obrat a syntax. Návrh váže srovnání na Google, který je předmětem předchozího výkladu; netvrdí totéž o všech možných systémech.

### 6. „Rozdělení znalostí a publikace“ nesděluje, co je od čeho oddělené

**Místo:** ř. 87.
**Citace:** „Rozdělení znalostí a publikace je vidět přímo v dokumentaci Intercomu.“

**Problém:** Spojení staví vedle sebe znalosti a činnost publikování, jako by šlo o dvě skupiny věcí určených k rozdělení. Smyslem je rozdíl mezi obsahem pro chatbot a veřejně publikovaným obsahem.

**Konkrétní oprava:** „Dokumentace Intercomu ukazuje rozdíl mezi podklady pro chatbot a veřejně publikovanými články.“

**Triáž:** opravit. Kategorie: nejasná nominalizace.

### 7. Režim je vysvětlen jako článek a závěr obsahuje neurčité „tuto kontrolu“

**Místo:** ř. 89.
**Citace:** „Ještě zajímavější je režim **unlisted**, tedy článek nezařazený do veřejného přehledu. […] Samotná existence odkazu tedy tuto kontrolu neřeší.“

**Problém:** První věta ztotožňuje režim s článkem. Poslední věta neříká, jakou kontrolu má čtenář na mysli, a zaměňuje existenci URL za existenci odkazu. Odstavec přitom poskytuje konkrétní závěr: vlastní adresa nedokládá dohledatelnost ve vyhledávači.

**Konkrétní oprava první věty:** „V režimu **unlisted** má článek vlastní URL, ale není zařazený do veřejného přehledu.“

Po této úpravě vypustit následující větu „Intercom mu vytvoří vlastní URL“, protože by informaci opakovala.

**Konkrétní oprava poslední věty:** „Vlastní URL tedy sama o sobě nedokládá, že článek najdou také vyhledávače.“

**Triáž:** opravit jako jeden související nález v odstavci. Kategorie: nesoulad vysvětlení a vysvětlovaného pojmu, neurčitý odkaz. Název režimu ponechat; je vysvětlený a patří dodavateli.

### 8. Tabulka označuje neveřejný zákaznický účet za „veřejné místo“

**Místo:** záhlaví ř. 105 a poslední řádek ř. 110.
**Citace:** „Doporučené veřejné místo“ → „Zákaznický účet, nikoli veřejný článek“.

**Problém:** Nadpis sloupce odporuje jedné z jeho hodnot. Nejde jen o stylistiku: čtenář může získat dojem, že zákaznický účet patří mezi veřejné zdroje. Právě hranici mezi veřejnými a neveřejnými informacemi článek vysvětluje.

**Konkrétní oprava záhlaví:** „Kde má být informace dostupná“.

**Konkrétní oprava poslední hodnoty:** „V zákaznickém účtu po přihlášení“.

**Triáž:** opravit. Kategorie: významová konzistence, přesnost popisku. Stávající oddíl o nezveřejňování údajů zákazníka zůstává potřebným kontextem.

### 9. „Opakovatelný problém“ má jiný význam než problém společný více zákazníkům

**Místo:** první krok Stepperu, ř. 125.
**Citace:** „Oddělte opakovatelný problém od situace jednoho zákazníka.“

**Problém:** „Opakovatelný“ označuje něco, co lze znovu provést nebo reprodukovat. Text žádá výběr obecné otázky, která se týká více zákazníků. Pouhá změna na „opakující se“ by pomohla, ale stále by nevystihla celé kritérium.

**Konkrétní oprava:** „Vyberte otázku, která se týká i dalších zákazníků, a oddělte ji od okolností konkrétního případu.“

**Triáž:** opravit. Kategorie: nesprávná volba přívlastku. Nejde o zákaz slova „opakovatelný“ v jeho správném významu.

### 10. „Existující místo: produkt, dopravu“ zaměňuje věci za stránky

**Místo:** třetí krok Stepperu, ř. 127.
**Citace:** „Před založením článku hledejte existující místo: produkt, dopravu, návod nebo FAQ.“

**Problém:** Čtenář má upravit existující stránku, ne hledat produkt nebo dopravu. Zkratka funguje jako interní poznámka redakce, ale v návodu pro provozovatele je neúplná.

**Konkrétní oprava:** „Než založíte nový článek, zjistěte, zda odpověď nepatří na produktovou stránku, do informací o dopravě, do návodu nebo mezi časté dotazy.“

**Triáž:** opravit. Kategorie: nejasné zkrácení a nesourodý výčet.

### 11. „Spravovatelná odpověď“ je technická zkratka a „citace externí AI“ má dva výklady

**Místo:** ř. 131.
**Citace:** „Přínosem je spravovatelná odpověď s jasným místem na webu; případná citace externí AI je až další výsledek, který je potřeba samostatně sledovat.“

**Problém:** „Spravovatelná odpověď“ přenáší slovník správy systému na samotnou odpověď. Čtenář potřebuje vědět, že text má určené místo a lze jej aktualizovat. „Citace externí AI“ navíc může znamenat citaci výroku AI i situaci, kdy AI cituje stránku. Z kontextu se význam dá odvodit, ale u hlavního tématu článku nemá být závislý na domýšlení.

**Konkrétní oprava:** „Odpověď tak bude mít na webu své místo a odpovědný člověk ji bude moci průběžně aktualizovat. Zda tuto stránku cituje také externí AI služba, sledujte zvlášť.“

**Triáž:** opravit. Kategorie: technická abstrakce a nejednoznačná vazba.

### 12. Závěr podává doporučení jako obecnou nutnou podmínku

**Místo:** ř. 153.
**Citace:** „Pro dohledatelnost firmy k němu potřebujete také promyšlený veřejný obsah.“

**Problém:** Věta zní jako bezvýjimečná podmínka dohledatelnosti celé firmy, přestože článek rozebírá hlavně dostupnost odpovědí na vlastním webu. Přídavné jméno „promyšlený“ nedává čtenáři kritérium, co má provést. V závěru postačí konkrétní doporučení v rozsahu probraného tématu.

**Konkrétní oprava:** „Odpovědi, které mají být dohledatelné i mimo chat, zveřejněte také na vhodných stránkách webu.“

**Triáž:** opravit. Kategorie: příliš široké tvrzení a vágní přívlastek. Nejde o slib lepších pozic; problémem je nepřiměřeně obecná formulace nutnosti.

## Další redakční doporučení

### D1. Vysvětlit FAQ na prvním místě, kde se s ním čtenář setká

**Místo:** popis článku ř. 4; FAQ ř. 30–31; vlastní text ř. 76.
**Citace:** „veřejné FAQ“, „Je rozbalovací FAQ stejný problém jako chatbot?“, „Rozbalovací FAQ může mít celou odpověď už v HTML“.

**Problém:** FAQ je zavedená oborová zkratka, nikoli zakázaný anglicismus. Článek ale mluví také k majitelům e-shopů bez technického zázemí. Český opis by podstatnou část srovnání zpřístupnil bez hledání významu.

**Konkrétní návrh pro popis:** „Chatbot může znát odpověď, kterou Google na webu nenajde. Rozlište interní znalosti, veřejné odpovědi na časté dotazy a citace v AI vyhledávání.“

**Konkrétní návrh pro tělo:** „V rozbalovací sekci častých dotazů (FAQ) může být celá odpověď už v kódu stránky (HTML). Kliknutí ji pak pouze zobrazí návštěvníkovi.“

**Triáž:** doporučené zjednodušení. Nevytvářet pravidlo zakazující FAQ ani HTML.

### D2. Úvodní H2 slibuje neurčitou „vlastní cestu“

**Místo:** ř. 47.
**Citace:** „Znalosti chatbotu mají vlastní cestu k odpovědi“.

**Problém:** Nadpis je gramaticky možný, ale při skenování stránky neprozradí hlavní zjištění oddílu: interní podklady ještě nejsou veřejně publikovaným obsahem. „Vlastní cesta“ je vágní abstrakce.

**Konkrétní návrh:**

```mdx
## <span class="hl">Podklady chatbotu</span> mohou zůstat <strong>neveřejné</strong>
```

**Triáž:** redakční doporučení pro srozumitelnost nadpisu. Povinné formátování H2 návrh zachovává.

### D3. Několik obecných „interakcí“ lze nahradit činností čtenáře nebo robota

**Místo:** FAQ ř. 27 a 31; tělo ř. 71.
**Citace:** „Vyhledávání se stránkou neinteraguje“, „Ověřte přítomnost textu před interakcí“.

**Problém:** „Interakce“ a „interagovat“ nejsou samy o sobě nečeské výrazy ani chyby. V tomto návodu ale druhá citovaná věta nechává na čtenáři, jakou konkrétní akci má při kontrole vynechat. První formulace je odborná parafráze, jejíž význam následující text správně vysvětluje.

**Konkrétní návrh pro FAQ ř. 31:** „Ověřte, zda je odpověď načtená už před kliknutím nebo odesláním otázky; samotný vzhled zavřeného panelu nestačí.“

**Konkrétní návrh pro tělo ř. 71:** „Google v dokumentaci k dodatečnému načítání obsahu uvádí, že jeho vyhledávání neprovádí uživatelské akce na stránce, například kliknutí.“

**Triáž:** doporučené zpřesnění. Nedělat plošné pravidlo proti zavedenému termínu. Pokud by pasáž byla doslovnou citací zdroje, ponechat originál a vysvětlit jej mimo citaci; nynější text je podaný jako parafráze.

## Co je v pořádku a proč to nehlásím jako vadu

- **Chatbot, kompatibilita, import, JavaScript, HTML, URL, SEO a AI** jsou v tomto tématu zavedené termíny. Nejsou samy o sobě zakázaným žargonem. U FAQ a HTML doporučuji jen první krátké vysvětlení, nikoli náhradu všech výskytů.
- **Index** je vysvětlen jako databáze a článek výslovně rozlišuje různé systémy. Není tu pouze nevysvětlená „indexace“ bez kontextu.
- **RAG** stojí v názvu odkazovaného článku a před odkazem je jeho princip popsaný jako dohledání podkladů před sestavením odpovědi. Není důvod vnucovat do odstavce další definici.
- **Unlisted** je název režimu publikování a má české vysvětlení. Oprava č. 7 řeší větnou vazbu, nikoli angličtinu vlastního názvu.
- **Google Search Console, Kontrola URL, ChatReact, Intercom, Fin a Claude** jsou názvy služeb, nástroje nebo produktu. Nepřekládat je mechanicky. U Fin řeší nález č. 2 pouze samostatnou srozumitelnost FAQ.
- **„Podklady“, „veřejný obsah“ a „obsahové a technické mezery“** mají v textu konkrétní referenty. Nejde automaticky o vatu ani o nevhodnou marketingovou mluvu.
- **Modelový e-shop** je označený jako příklad, nikoli jako skutečná případová studie. Článek nevydává modelovou situaci za dosažený výsledek.
- **„Dostupný obsah je podklad, nikoli příslib citace“** je jasná a užitečná hranice tvrzení. V kontextu není nutné ji rozvádět.
- **Závěrečná nabídka auditu** stojí ve vlastním bloku, uvádí konkrétní službu a cenu a neslibuje zaručené citace. Jazykově odpovídá oddělení edukativního hlasu a agenturní nabídky. Správnost ceny nepatří do tohoto auditu.
- **České uvozovky a pomlčky** v čtenářském textu jsou v pořádku. Rovné uvozovky v YAML a JSX jsou součástí syntaxe a nemají se nahrazovat.
- **H2** obsahují požadovaný zvýrazněný pojem i `<strong>`. H3 zůstává prostý. Návrh D2 je obsahové zpřesnění, ne oprava chybějícího formátování.

## Tonalita, sliby a celková čitelnost

Článek se drží edukativního hlasu: vysvětluje konkrétní rozdíl, pracuje s příklady a uvádí praktické kontroly. Nevyvolává strach, časovou tíseň ani pocit, že zákazník musí koupit službu. Nevyskytují se nepodložené superlativy, deklarované prvenství, vymyšlené reference ani příslib jistých výsledků.

Opakované omezení tvrzení je obsahově vhodné: dostupnost není záruka citace, modelový příklad není měření a vlastnosti jedné služby neplatí automaticky pro všechny. Na několika místech už jazyk připomíná dokumentační rozbor více než průvodce pro provozovatele. Opravy výše proto konkretizují aktéry a úkony, aniž by nutná omezení mazaly.

Největší srozumitelnostní problém není angličtina, ale abstraktní spojení českých slov: „rozdělení znalostí a publikace“, „spravovatelná odpověď“, „vlastní cesta k odpovědi“. Mechanický checker takové věty oprávněně nemusí zachytit.

## Doporučení pro slovník a závěrečné vyhodnocení

**Nové globální pravidlo nenavrhuji bez dalšího posouzení.** Nálezy jsou z velké části kontextové a plošný regex by mohl chybně zakazovat běžné výrazy. Případný budoucí kandidát je úzká vazba digitálního obsahu s „kde … žije“, ale jednotlivý výskyt stačí opravit v článku. Ze slova „opakovatelný“, „interakce“, „citace“ ani „spravovatelný“ se nemá dělat plošně zakázané slovo.

Souhrn výsledků:

| Kontrola | Výsledek |
|---|---|
| Mechanický checker | 0 nálezů, 275 pravidel, slovník v70 |
| Ruční průchod | 12 nálezů k opravě |
| Další doporučení | 3, samostatně neblokují publikaci |
| Orientační hustota ručních nálezů | 6,3 nálezu na 1 000 slov podle počtu 1 900 slov z checkeru |
| Jazykové známky falešných garancí | Bez garance výsledku; zpřesnit „doloženou záruku“ a obecnou nutnost v závěru |
| Tonalita | Věcná, vhodná pro edukativní článek |
| Typografie | Bez nalezené chyby v čtenářském textu |
| Změny článku, slovníku a logu | Žádné |

Po zapracování oprav znovu přečíst změněné věty v celých odstavcích a spustit checker. Pokud editor doporučení odmítne, zaznamenat u konkrétního bodu věcný důvod; nulový mechanický výsledek sám o sobě ruční nálezy neuzavírá.
