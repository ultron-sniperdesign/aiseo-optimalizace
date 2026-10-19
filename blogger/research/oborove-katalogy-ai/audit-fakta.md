# Audit faktů — Oborové katalogy v AI éře

**Datum ověření:** 19. 10. 2026  
**Verdikt:** **OPRAVIT PŘED PUBLIKACÍ**

## Nálezy

### 1. Podmínky použití údajů z Map v Gemini chybějí

**Citovaná pasáž:** „U Googlu může Gemini po připojení Map pracovat s veřejnými údaji o místech, například s adresou, webem, hodnocením nebo otevírací dobou.“

**Problém:** Výčet údajů je správný, ale formulace „po připojení Map“ nepopisuje aktuální podmínky uvedené Googlem. Uživatel musí být přihlášený a mít zapnuté ukládání aktivity; funkce není dostupná v živých konverzacích ani v Gemini ve Zprávách Google. Bez těchto podmínek věta působí obecněji, než dovoluje dokumentace. Současně je vhodné ponechat jasnou hranici, že Google popisuje použití veřejných údajů z Map, nikoli zaručené použití konkrétního firemního profilu.

**Důkaz:** Nápověda Gemini uvádí, že Gemini používá veřejné informace z Google Maps pro adresy, popisy, weby, hodnocení a otevírací dobu. V části „What you need“ vyžaduje přihlášení a zapnuté Keep Activity; dále výslovně vylučuje Live chats a Gemini v Google Messages: [Find places & get directions in Gemini Apps](https://support.google.com/gemini/answer/16622866).

**Doporučená oprava:** Nahradit větu například takto: „Přihlášené aplikace Gemini se zapnutým ukládáním aktivity mohou při dotazech na místa použít veřejné údaje z Google Maps, například adresu, web, hodnocení nebo otevírací dobu. Funkce není dostupná v živých konverzacích ani v Gemini ve Zprávách Google a dokumentace nezaručuje použití konkrétního profilu v každé odpovědi.“

**Závažnost:** **ZÁSADNÍ**

### 2. Aktuální nápověda Seznamu dává silnější protidůkaz, než článek uvádí

**Citovaná pasáž:** „Z veřejných dokumentů nelze rozhodnout, zda Seznam integraci změnil, nebo jen zjednodušil popis.“

**Problém:** Vedle obecné stránky nápovědy existuje aktuální stránka „Beta verze“, která Firmy.cz řadí mezi vertikály, jež Seznam teprve „postupně připojí“. To je konkrétnější protidůkaz proti výkladu, že současná nápověda mohla pouze zkrátit seznam aktivních zdrojů. Stejná současná dokumentace navíc popisuje Seznam AI jako pilot dostupný jen části uživatelů, zatímco tisková zpráva z 25. 5. 2026 oznamovala dostupnost všem přihlášeným. Historický rozpor je tedy širší než jen seznam datových zdrojů.

**Důkaz:** Aktuální FAQ jmenuje jako současné zdroje pouze webový a zpravodajský index a Počasí.cz: [Nápověda Seznam AI](https://o-seznam.cz/napoveda/seznam-ai/). Stránka beta verze uvádí „Postupně připojíme další vertikály“ a mezi nimi „Mapy.com a Firmy.cz pro místa, trasy a kontakty“: [Beta verze Seznam AI](https://o-seznam.cz/napoveda/seznam-ai/beta-verze/). Tisková zpráva z 25. 5. 2026 naopak Firmy.cz označovala za tehdy používaný zdroj: [Seznam Asistent je dostupný všem přihlášeným uživatelům](https://blog.seznam.cz/2026/05/seznam-asistent-je-dostupny-vsem-prihlasenym-uzivatelum/).

**Doporučená oprava:** Popsat stav přesněji: „Tisková zpráva z 25. května 2026 uváděla Firmy.cz mezi používanými zdroji. Aktuální nápověda je mezi aktivními zdroji nejmenuje a na stránce beta verze je řadí mezi plánovaná napojení. K 19. říjnu 2026 proto nelze Firmy.cz označit za potvrzený aktivní zdroj Seznam AI.“ Zachovat současné praktické doporučení profil spravovat kvůli službám Seznamu.

**Závažnost:** **DROBNÝ** — praktický závěr článku je už nyní opatrný a správný, opravit je potřeba odůvodnění.

### 3. Tvrzení o „většině českých katalogů“ přesahuje provedené ověření

**Citovaná pasáž:** „U většiny českých katalogů není veřejně doloženo, že by přímo dodávaly data konkrétnímu asistentovi.“

**Problém:** „Většina“ je kvantifikované tvrzení, ale rešerše nedefinuje úplný soubor českých katalogů ani neprovádí jejich systematický audit. Ověřeny byly konkrétní služby a u nich nebyl nalezen veřejný doklad o přímém datovém napojení. Z toho nelze odvodit výrok o většině trhu.

**Důkaz:** Vlastní podklad článku v části „Limity“ říká, že nebylo provedeno měření citovanosti katalogů a že veřejná dokumentace obvykle neodhaluje všechny licencované či partnerské zdroje; viz `blogger/research/oborove-katalogy-ai/research.md`, oddíl 9. Primární weby potvrzují existenci a správu profilů, nikoli rozsah trhu ani vztah většiny katalogů k AI: [Zlaté stránky](https://www.zlatestranky.cz/), [Najisto](https://najisto.centrum.cz/).

**Doporučená oprava:** Zúžit odpověď například na: „U běžných českých katalogů, které jsme ověřovali, jsme ve veřejných primárních zdrojích nenašli potvrzení, že by přímo dodávaly data konkrétnímu asistentovi.“ Ještě přesnější je jmenovat Zlaté stránky a Najisto.

**Závažnost:** **DROBNÝ**

### 4. Karta se zdrojem odkazuje jen na jednu ze dvou citovaných zásad Googlu

**Citovaná pasáž:** „Starší doporučení Search Central zároveň připouští přínos dobře udržovaných a tematických katalogů.“

**Problém:** Tvrzení je věcně podložené, ale odkaz v kartě vede pouze na současná pravidla odkazového spamu. Starší doporučení o tematických, moderovaných a dobře strukturovaných katalozích je na jiné stránce, takže čtenář druhou část citace z uvedeného odkazu neověří.

**Důkaz:** Současná pravidla uvádějí nekvalitní katalogové odkazy a automatizované vytváření odkazů jako příklady odkazového spamu: [Spam policies for Google web search](https://developers.google.com/search/docs/essentials/spam-policies). Doporučení z roku 2010 samostatně říká, že případný katalog má být tematický, moderovaný a dobře strukturovaný: [Quality links to your site](https://developers.google.com/search/blog/2010/06/quality-links-to-your-site).

**Doporučená oprava:** Přidat přímý odkaz na článek z roku 2010 přímo do věty „Starší doporučení Search Central…“ a ponechat odkaz karty na aktuální spamová pravidla.

**Závažnost:** **DROBNÝ**

### 5. Dvě ověřitelná platformní tvrzení nemají přímý zdroj

**Citovaná pasáž:** „Bing Places obdobně spravuje údaje pro místní výsledky Bingu a Bing Maps.“ a „Google také vysvětluje, že údaje v Business Profilech skládá z veřejného webu, licencovaných zdrojů třetích stran, příspěvků uživatelů a vlastníků i z interakcí s místy.“

**Problém:** Obě tvrzení jsou správná, ale v článku u nich chybí přímý odkaz na příslušnou dokumentaci. U věty o Googlu navíc nejbližší odkaz vede na jinou stránku o odkazovém spamu, nikoli na zdroje údajů v Business Profilech.

**Důkaz:** Microsoft uvádí, že Bing Places slouží k převzetí a aktualizaci údajů v Bing Maps a že registrace pomáhá zpřesnit místní výsledky: [Add and manage your business listing](https://support.microsoft.com/en-us/bing/add-and-manage-your-business-listing), [How Bing delivers search results](https://support.microsoft.com/en-us/bing/how-bing-delivers-search-results). Google vyjmenovává veřejný web, licencovaná data třetích stran, příspěvky uživatelů a vlastníků a vlastní interakce s místem: [Understand how Google sources & uses info in Business Profiles](https://support.google.com/business/answer/2721884).

**Doporučená oprava:** Prolinkovat „Bing Places“ na nápovědu Microsoftu a slova „Google také vysvětluje“ na nápovědu o zdrojích údajů v Business Profilech.

**Závažnost:** **DROBNÝ**

## Ověřeno bez nálezu

- Google správně uvádí úplnost a přesnost profilu spolu s relevancí, vzdáleností a významností; článek z toho nedělá záruku pořadí.
- Apple Business skutečně umožňuje v Česku spravovat značku a místa a karta místa se může zobrazovat v Mapách, Siri, Kalendáři a Zprávách.
- Bing Places je dostupný pro Česko a spravuje údaje pro Bing Maps a místní výsledky.
- ARES je správně popsán jako informační systém zpřístupňující veřejné údaje ze zdrojových registrů, nikoli jako marketingový profil.
- Zlaté stránky i Najisto byly k datu auditu živé a nabízely přidání či aktualizaci firemního profilu.
- Odkazy na článek o místním SEO, profil Firmy.cz, recenzní platformy a `/audit/` fungovaly.
- CTA odpovídá datovému modulu `/audit/`: název **Audit AI viditelnosti**, cena **3 600 Kč bez DPH**, výstup do pěti pracovních dní od úhrady a schůzka 30–60 minut.
- `seoTitle` má 43 znaků a začíná hlavním klíčovým slovem; description má 142 znaků; krátká odpověď má 46 slov. Všechny tři položky splňují zadané limity.

## Krátký verdikt

Článek je ve většině klíčových tvrzení opatrný a dobře doložený. Před publikací je potřeba doplnit podmínky použití Map v Gemini a zpřesnit současný stav napojení Firmy.cz na Seznam AI. Ostatní nálezy jsou menší opravy rozsahu tvrzení a odkazů na zdroje; CTA, metadata i hlavní doporučení sedí.

## C5b — ověření zásadní opravy

**Výsledek: OPRAVA OBSTOJÍ.**

Nová formulace přesně zachycuje podmínky a omezení uvedené v aktuální nápovědě Gemini:

- Gemini používá veřejné informace z Google Maps a nápověda mezi příklady výslovně uvádí adresu, web, hodnocení a otevírací dobu.
- Uživatel musí být přihlášený do aplikace Gemini a mít zapnuté ukládání aktivity (Keep Activity).
- Funkce není dostupná v živých konverzacích ani v Gemini ve Zprávách Google.
- Věta, že dokumentace nezaručuje použití konkrétního profilu v každé odpovědi, je správná a konzervativní hranice: nápověda popisuje možnost použít veřejná data z Map, nikoli povinné použití každého profilu či každé položky dat.

**Důkaz:** [Find places & get directions in Gemini Apps](https://support.google.com/gemini/answer/16622866), zejména části „What you need“ a „Important“.

**Zbývající věcný problém:** žádný. Původní zásadní nález je touto opravou uzavřen.
