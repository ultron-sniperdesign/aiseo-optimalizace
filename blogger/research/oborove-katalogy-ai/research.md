# Research — Oborové katalogy v AI éře

**Datum:** 2026-10-19 · **Typ:** nový článek (analysis) · **Řádek plánu:** 155, `oborove katalogy pro ai`

## 1. Rozsah a kolizní kontrola

Článek nebude žebříček katalogů ani návod na hromadné získávání odkazů. Odpoví na otázku, podle čeho poznat, zda má konkrétní katalog pro firmu ještě smysl, když se informace o firmách zobrazují také v mapách, vyhledávačích a odpovědích AI.

| Existující článek | Co už řeší | Proč nové téma nekoliduje |
|---|---|---|
| `firmy-cz-pro-ai` | Jeden konkrétní profil Firmy.cz a jeho napojení na Seznam Asistenta | Nový článek porovnává typy katalogů a dává rozhodovací postup. Aktuální propojení služby potvrzuje novější zpráva Seznamu z 15. 10. 2026; nový text doplňuje hranici, že nejde o záruku použití konkrétního profilu. |
| `recenze-srovnavace-pro-ai` | Které recenzní a srovnávací weby se objevovaly v měřených odpovědích AI | Nový článek nevyhodnocuje citovanost domén a nejmenuje weby z měřeného vzorku. |
| `local-seo-cesko-2026` | Celá místní viditelnost firmy | Katalogy jsou zde samostatné rozhodovací téma: zdroj dat, přímá návštěvnost, důvěryhodnost a riziko odkazového spamu. |
| `yelp-licencuje-data-openai` | Konkrétní licenční dohoda Yelpu a OpenAI | Nový článek vysvětluje, proč bez veřejně doložené dohody nelze podobný přenos dat předpokládat u českého katalogu. |

**Verdikt:** nové samostatné téma. Interně prolinkovat na místní SEO, Firmy.cz a článek o recenzních platformách, ale neopakovat jejich výklad.

## 2. Hledanost a záměr dotazu

Marketing Miner, 19. 10. 2026:

- suggestions pro 4 vstupy (`oborové katalogy`, `katalog firem`, `firemní katalog`, `firmy cz`), všechny typy: **160 kreditů**;
- search volume pro 14 ručně vybraných dotazů: **42 kreditů**;
- celkem **202 kreditů**.

| Dotaz | Měsíční hledanost | Meziroční změna |
|---|---:|---:|
| zlaté stránky | 1 200 | −9 % |
| firmy cz | 1 200 | +9 % |
| katalog firem | 220 | −23 % |
| najisto | 180 | −18 % |
| najisto cz | 60 | +25 % |
| seznam firem | 30 | −9 % |
| katalog firem zdarma | 30 | −34 % |
| firemní katalog | 20 | −25 % |
| zlaté stránky firmy | 10 | +10 % |

Bez dat: `oborové katalogy`, `oborový katalog`, `registrace firmy do katalogu`, `firemní adresář`, `katalogy zpětné odkazy`.

Přesné téma tedy nemá doloženou hledanost. Širší dotazy mají převážně navigační záměr. Google Suggest přidal praktické námitky `katalog firem zdarma`, `firmy cz recenze` a dotazy kolem správy profilu. Google Trends nabídl jen nesouvisející rostoucí dotazy (`katalog firem křížovka`, seznam firem v indexu S&P 500); do článku nepatří. U dotazu `zlaté stránky` byla časová řada řídká a kolísavá, proto z ní nelze vyvozovat trend.

**Obsahový důsledek:** článek nemá předstírat vysokou poptávku po pojmu „oborové katalogy“. Titulek a úvod mají řešit skutečné rozhodnutí firmy: kam profil přidat, co udržovat a co je jen odkazový šum.

## 3. Ověřená fakta a podmínky

| Tvrzení | Podmínky, za kterých platí | Konzistence zdrojů | Výjimky a meze | Primární zdroj |
|---|---|---|---|---|
| Profil Google Business může pomoci místní viditelnosti ve Vyhledávání a Mapách. | Profil musí být způsobilý, ověřený, přesný a úplný; místní výsledky závisejí na relevanci, vzdálenosti a významnosti. | Konzistentní ve dvou nápovědách Googlu. | Profil negarantuje pořadí ani zmínku v generované odpovědi. | https://support.google.com/business/answer/7091 |
| Google skládá údaje v profilech firem z více zdrojů. | Může použít veřejný web, licencovaná data třetích stran, příspěvky uživatelů a vlastníka a interakce Googlu s místem. | Oficiálně popsáno. | Nelze z toho odvodit, že libovolný katalog je licencovaným zdrojem. | https://support.google.com/business/answer/2721884 |
| Gemini může při práci s Mapami zobrazit veřejné údaje o místě. | Uživatel musí být přihlášený a mít zapnuté ukládání aktivity; funkce není dostupná v živých konverzacích ani v Gemini ve Zprávách Google. Může jít například o adresu, web, hodnocení a otevírací dobu. | Oficiální nápověda Gemini. | Neříká, že každý firemní profil bude použit v každé odpovědi. | https://support.google.com/gemini/answer/16622866 |
| Apple Business spravuje kartu místa používanou v Mapách a Siri. | Firma musí místo přidat nebo nárokovat a udržovat jeho údaje; karta se může zobrazit také v Kalendáři, Zprávách a dalších aplikacích Apple. | Aktuální dokumentace Apple Business. | Záznam negarantuje doporučení ani pořadí v Siri. | https://support.apple.com/guide/business/configure-location-attributes-abcbdc543423/web |
| Bing Places spravuje firemní údaje pro místní výsledky Bing a Bing Maps. | Záznam je třeba přidat či nárokovat a udržovat přesný. | Oficiální nápověda Microsoftu. | Microsoft uvádí, že generované odpovědi mohou používat zdroje a místní výsledky i data třetích stran, ale nedokládá automatické použití každého profilu Bing Places v Copilotu. | https://support.microsoft.com/en-us/bing/add-and-manage-your-business-listing a https://support.microsoft.com/en-us/bing/how-bing-delivers-search-results |
| Firmy.cz umožňují bezplatnou registraci a profil se může zobrazovat ve službách Seznamu. | Údaje musí odpovídat pravidlům služby a být aktuální. | Firmy.cz a jejich nápověda to uvádějí. | Samotná registrace negarantuje použití konkrétního profilu v odpovědi Seznam AI. | https://www.firmy.cz/ a https://napoveda.firmy.cz/zaciname/co-je-firemni-profil/ |
| Seznam AI je propojený s Firmy.cz. | Seznam 15. 10. 2026 výslovně řadí Firmy.cz mezi propojené služby a uvádí využití údajů o občanské vybavenosti. | Potvrzeno novějším konkrétním zdrojem. | Zdroj nezaručuje použití každého profilu nebo údaje v každé odpovědi. | https://blog.seznam.cz/2026/10/seznam-ai-propojuje-dalsi-sluzby-seznamu-vyuziva-ho-uz-vice-nez-pul-milionu-uzivatelu-tydne/ |
| Obecná nápověda Seznam AI jmenuje užší seznam zdrojů a stránka beta verze označuje Firmy.cz za plánované napojení. | Jde o veřejné stránky načtené 19. 10. 2026. | **Nekonzistentní s novější tiskovou zprávou z 15. 10. 2026**, která propojení potvrzuje. | Pro aktuální stav má přednost novější a konkrétnější zdroj; nesoulad dokumentace je v článku přiznaný. | https://o-seznam.cz/napoveda/seznam-ai/ a https://o-seznam.cz/napoveda/seznam-ai/beta-verze/ |
| Hromadné odkazy z nekvalitních katalogů mohou být odkazový spam. | Jde o odkazy vytvářené především pro manipulaci hodnocení, zejména automatizované nebo ve velkém. | Konzistentní v pravidlech Googlu. | Opravdový oborový katalog s návštěvností, kontrolou záznamů a užitkem pro čtenáře není automaticky spam. | https://developers.google.com/search/docs/essentials/spam-policies |
| Tematický a moderovaný katalog může mít užitek. | Musí být relevantní, dobře udržovaný a skutečně pomáhat uživatelům najít poskytovatele či zdroj. | Starší oficiální doporučení Googlu odpovídá současné spamové politice. | Zdroj je z roku 2010; používá se jen pro trvalý princip kvality, ne jako doklad současného hodnoticího algoritmu. | https://developers.google.com/search/blog/2010/06/quality-links-to-your-site |
| Zlaté stránky a Najisto jsou živé české katalogy. | Ověřeno na jejich veřejných webech 19. 10. 2026. | Ano. | Nebyl nalezen primární zdroj, že by šlo o přímé datové zdroje konkrétního AI asistenta. | https://www.zlatestranky.cz/ a https://najisto.centrum.cz/ |
| ARES je oficiální informační systém o ekonomických subjektech. | Slouží k vyhledávání veřejných údajů z registrů. | Oficiální zdroj Ministerstva financí. | Není to marketingový katalog ani profil, který firma používá k prezentaci nabídky. | https://mf.gov.cz/cs/ministerstvo/informacni-systemy/ares--administrativni-registr-ekonomicky |

## 4. Nesoulad dokumentace Seznamu — formulace pro článek

| Datum a dokument | Co uvádí |
|---|---|
| 25. 5. 2026, oznámení všeobecné dostupnosti Seznam Asistenta | Vyhledávání, zpravodajství, Zboží.cz, Počasí.cz, Firmy.cz, Sport.cz, jízdní řády a televizní program. |
| načteno 19. 10. 2026, aktuální nápověda Seznam AI | Webový a zpravodajský index a Počasí.cz. Stránka beta verze řadí Mapy.com a Firmy.cz mezi plánovaná napojení. |
| 15. 10. 2026, novější tisková zpráva Seznamu | Firmy.cz řadí mezi propojené služby a uvádí využití údajů o občanské vybavenosti. |

Bezpečná formulace: **„Seznam 15. října 2026 potvrdil propojení Seznam AI s Firmy.cz a uvedl využití údajů o občanské vybavenosti. Spravovaný profil proto může zpřístupnit údaje ve službách Seznamu, ale propojení nezaručuje použití konkrétního profilu ani doporučení firmy v každé odpovědi. Obecná nápověda a stránka beta verze jsou s novější zprávou nesjednocené.“**

## 5. Rozhodovací rámec článku

Katalog má smysl, když splní alespoň jednu silnou podmínku a jeho údržba je přiměřená:

1. **Umožňuje spravovat údaje v používané službě:** Google Business, Apple Business, Bing Places nebo Firmy.cz pro služby Seznamu.
2. **Má vlastní relevantní publikum:** zákazníci v něm skutečně hledají daný obor nebo lokalitu.
3. **Přidává ověřitelný kontext:** kategorie, pobočky, otevírací doba, recenze nebo oborové členství, které lze udržovat.
4. **Je dohledatelný v konkrétním testu:** katalog nebo jeho profil se objevuje u dotazů, které firma opravdu řeší. Jednorázový test není důkaz obecného vlivu.
5. **Nežádá manipulativní protihodnotu:** hromadné odkazy, kopírované popisy nebo placený zápis bez publika nejsou samy o sobě přínosem.

Praktické skóre:

- 2 body: přímá správa karty v důležitém ekosystému;
- 2 body: doložená návštěvnost, poptávky nebo viditelnost pro vlastní obor;
- 1 bod: ověřování záznamů a možnost udržovat údaje;
- 1 bod: unikátní oborový kontext nebo důvěryhodné recenze;
- −2 body: hlavním argumentem je „zpětný odkaz“ nebo počet katalogů;
- −2 body: zastaralé profily, kopírovaný obsah, žádná kontrola provozovatele.

Skóre je redakční pomůcka, ne měřený algoritmus. Článek to musí výslovně říct.

## 6. FAQ — původ otázek

| Otázka | Původ |
|---|---|
| Má ještě smysl registrovat firmu do katalogů? | hlavní záměr tématu, varianta dotazu `katalog firem` |
| Pomůže zápis v katalogu tomu, aby firmu doporučovala AI? | obsahový plán + nutná hranice overclaimu |
| Které firemní profily mají přednost? | rozhodovací záměr článku |
| Má smysl placený zápis ve Zlatých stránkách nebo jiném katalogu? | značka s nejvyšší širší hledaností + námitka ceny |
| Vadí, když jsou v katalozích odlišné údaje? | dotazy kolem správy profilu + pravidla přesnosti platforem |
| Je odkaz z firemního katalogu dobrý pro SEO? | spamová politika Googlu + chybějící data pro přesnou frázi |

## 7. Co článek nesmí tvrdit

- že libovolný katalog zvyšuje šanci na citaci v AI;
- že potvrzené propojení Firmy.cz se Seznam AI zaručuje použití konkrétního profilu, údaje nebo doporučení firmy v každé odpovědi;
- že Zlaté stránky nebo Najisto dodávají data konkrétnímu AI asistentovi;
- že shoda názvu, adresy a telefonu je samostatný hodnoticí faktor všech AI systémů;
- že odkaz z katalogu má automaticky kladnou SEO hodnotu;
- že redakční skóre v článku je výsledek studie nebo algoritmus platformy.

## 8. Nový námět z rešerše

Do obsahového plánu byl přidán nový řádek: `apple business pro siri` — **Apple Business: jak spravovat údaje firmy pro Mapy a Siri**. Je to samostatný praktický návod; před zpracováním bude potřeba ověřit dostupnost funkcí pro české firmy.

## 9. Limity

- Stav zdrojů platí k 19. 10. 2026 a platformy mohou své datové vstupy změnit.
- Hledanost širších značkových dotazů nevyjadřuje poptávku po obecné strategii katalogů.
- Nebylo provedeno měření, které katalogy citují různí AI asistenti; článek proto pracuje s doloženými produktovými vazbami a rozhodovacím postupem.
- Veřejná dokumentace obvykle neodhaluje všechny licencované nebo partnerské zdroje dat; u Seznamu jsou navíc současné stránky nápovědy v rozporu s novější tiskovou zprávou.
- Jednotlivé weby z dřívějších veřejných měření se v článku nejmenují.

## 10. Zdroje

- Google Business Profile Help: `support.google.com/business/answer/7091`, `support.google.com/business/answer/2721884`
- Gemini Apps Help: `support.google.com/gemini/answer/16622866`
- Google Search Central: spam policies; „Quality links to your site“ (2010)
- Apple Business User Guide: konfigurace atributů místa; přejmenování Apple Business Connect na Apple Business
- Microsoft Support: Bing Places; How Bing delivers search results
- Firmy.cz a nápověda Firmy.cz
- Seznam Blog (25. 5. 2026 a 15. 10. 2026) a aktuální nápověda Seznam AI
- Zlaté stránky, Najisto a ARES
- Marketing Miner + Google Trends + Google Suggest, surové výstupy pouze v `/tmp/mm-oborove-katalogy`
