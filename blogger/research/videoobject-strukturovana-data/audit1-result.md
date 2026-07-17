[BLOKER] „**Textový model nezpracuje obraz videa.** Pracuje s tím, co je na stránce jako text: okolní obsah, strukturovaná data a přepis.“  
**Proč:** Je to příliš absolutní a nepodložené vzhledem k dodanému etalonu. Etalon řeší VideoObject a politiku Googlu, ne obecné schopnosti všech AI systémů. Formulace „nezpracuje“ je univerzální tvrzení o AI bez opory.  
**Návrh:** Změnit na opatrnější formulaci, např. „Mnoho textových AI modelů při práci s webovou stránkou vychází hlavně z textu na stránce: okolního obsahu, strukturovaných dat a přepisu.“

[BLOKER] „**AI systémy video samy nepřehrají, proto čerpají z těchto dat a hlavně z přepisu.**“  
**Proč:** Opět absolutní tvrzení o chování AI bez opory v etalonu. Lze obhájit význam přepisu, ale ne univerzální „AI systémy nepřehrají“.  
**Návrh:** „AI systémy při práci s webovou stránkou často vycházejí hlavně ze strukturovaných dat a přepisu.“

[BLOKER] „**textový AI model video nepřehraje — přepis z něj dělá citovatelný zdroj**“  
**Proč:** Druhá část („dělá citovatelný zdroj“) je nepodložené tvrzení o citacích AI. Etalon výslovně zakazuje slibovat citaci; připouští jen šanci/způsobilost.  
**Návrh:** „textový AI model obvykle vychází z textu na stránce — přepis zvyšuje šanci, že bude obsah videa pro stroj srozumitelný a použitelný“

[BLOKER] „**Přepis**, label: **textový AI model video nepřehraje — přepis z něj dělá citovatelný zdroj**“  
**Proč:** Stejný problém i ve `stats`. Je to zkratka, ale pořád nepodložená a příliš silná.  
**Návrh:** „přepis — obsah videa převádí do textu, se kterým AI často pracuje“

[WARNING] `answer: "VideoObject jsou strukturovaná data, ... **AI systémy video samy nepřehrají** ... a hlavně z přepisu."`  
**Proč:** `answer` sice splňuje délku i začátek definicí, ale obsahuje stejné absolutní tvrzení o AI.  
**Návrh:** Upravit na hedgovanou variantu, např. „AI systémy při práci se stránkou často vycházejí z těchto dat a z přepisu.“

[WARNING] „**Označení nezaručí rozšířený výsledek, ale je pro něj podmínkou.**“  
**Proč:** Směr je správný, ale „je podmínkou“ je silné tvrzení bez nuance. Z etalonu plyne způsobilost pro video rich result při splnění požadavků, ne obecná univerzální podmínka pro jakýkoli způsob zobrazení videa.  
**Návrh:** „Označení samo o sobě rozšířený výsledek nezaručí, ale pro způsobilost k video rozšířenému výsledku je důležité.“

[WARNING] „**Když se Google k obrázku v thumbnailUrl nedostane přímo, rozšířený výsledek nevznikne.**“  
**Proč:** Absolutní slib/negace výsledku. Etalon takto tvrdou konsekvenci neuvádí. Lze říct, že to snižuje způsobilost nebo může zabránit správnému zpracování.  
**Návrh:** „Když se Google k obrázku v thumbnailUrl nedostane přímo, může to zabránit správnému zpracování videa a snížit šanci na rozšířený výsledek.“

[WARNING] „**Je to sice víc práce, ale je to jediná část, přes kterou se obsah mluveného slova dostane do textu, se kterým stroje pracují.**“  
**Proč:** „jediná část“ je absolutní tvrzení. Přepis je velmi důležitý, ale článek nemá bez opory tvrdit, že neexistuje jiná cesta, jak se mluvený obsah může propsat do textu na stránce.  
**Návrh:** „Je to sice víc práce, ale bývá to nejpřímější způsob, jak dostat obsah mluveného slova do textu na stránce.“

[WARNING] „**Přepis je to, z čeho může AI čerpat.**“  
**Proč:** Není vyloženě chybné, ale je to příliš zúžené; o pár řádků výš článek sám uvádí i okolní text a strukturovaná data.  
**Návrh:** „Přepis je hlavní zdroj pro obsah videa, ze kterého může AI často čerpat.“

[DOPORUČENÍ] „**Povinné jsou jen `name`, `thumbnailUrl` a `uploadDate`. Zbytek je doporučený, ale `contentUrl` nebo `embedUrl` doplňte vždy**“  
**Proč:** V zásadě správně a v souladu s etalonem. Jen by bylo přesnější výslovně dodat, že má být uvedeno alespoň jedno z nich pro způsobilost videa, přestože jsou vedené jako doporučené.  
**Návrh:** „Povinné jsou jen `name`, `thumbnailUrl` a `uploadDate`. Pro způsobilost videa je ale potřeba uvést alespoň jedno z `contentUrl` nebo `embedUrl`; ideální je obojí.“

[DOPORUČENÍ] JSON ukázka  
```json
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "...",
  "description": "...",
  "thumbnailUrl": "https://example.cz/nahledy/strukturovana-data.jpg",
  "uploadDate": "2026-05-19T08:00:00+02:00",
  "duration": "PT4M12S",
  "contentUrl": "https://example.cz/video/strukturovana-data.mp4",
  "embedUrl": "https://example.cz/prehravac/strukturovana-data"
}
```  
**Proč:** Ukázka je fakticky v pořádku proti etalonu: povinné vlastnosti sedí, `description` je nepovinné, `uploadDate` i `duration` mají správný ISO 8601 formát, `contentUrl` + `embedUrl` jsou v souladu s doporučením.  
**Návrh:** Není nutná oprava. Volitelně lze doplnit krátkou větu, že `description` je doporučené, ne povinné, aby to bylo zřejmé i čtenáři, který přeskočí FAQ.

[KOSMETIKA] „**video schema**“ v `keywords`  
**Proč:** Zadání preferuje češtinu a omezení anglicismů. U interních klíčových slov to není zásadní chyba, ale je to mimo preferovaný styl.  
**Návrh:** Zvážit „schema pro video“ nebo „značení videa schema.org“, pokud to není záměr kvůli vyhledávacím dotazům.

[KOSMETIKA] „**validatoru**“  
**Proč:** Anglicismus; zadání preferuje češtinu.  
**Návrh:** „v nástroji pro kontrolu“ nebo „v validátoru strukturovaných dat“; první varianta je čistší čeština.

[KOSMETIKA] „**Data se dělají k videu**“ / „**Data popisují to, co je vidět**“  
**Proč:** Srozumitelné, ale v článku by konzistentněji působilo „strukturovaná data“.  
**Návrh:** Místy nahradit „data“ za „strukturovaná data“, kde nehrozí těžkopádnost.

## VERDIKT
**OPRAVIT PŘED PUBLIKACÍ**

### 4 prioritní zásahy
1. **Změkčit absolutní tvrzení o AI**: „AI systémy video samy nepřehrají“, „Textový model nezpracuje obraz videa“, „textový model video nepřehraje“.  
2. **Odstranit nepodložené tvrzení o citovatelnosti**: „přepis z něj dělá citovatelný zdroj“.  
3. **Změkčit absolutní tvrzení o výsledku v SERPu**: „rozšířený výsledek nevznikne“, případně i „je pro něj podmínkou“.  
4. **Změkčit formulaci „jediná část“ u přepisu**, aby nevznikalo nepodložené tvrzení o jediné možné cestě.

Faktická část k VideoObject je jinak převážně správně: povinné vlastnosti, role `description`, požadavek na `contentUrl`/`embedUrl`, formáty ISO 8601 i poznámka k `interactionStatistic` odpovídají etalonu.