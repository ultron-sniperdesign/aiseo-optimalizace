# Závěrečný audit: Dotazy zákazníků k produktu

Datum ověření: 27. 9. 2026
Rozsah: samostatný audit opraveného článku, kontrola `audit-fakta.md`, `audit-jazyk.md` a `vyporadani.md`, opětovné ověření primárních zdrojů a kanonických produktových modulů

## VERDIKT: **PUBLIKOVAT**

V aktuálním znění nezůstává zásadní ani drobná vada. Nové zásadní nálezy: **0**. Nové drobné nálezy: **0**.

## Kontrola vypořádání

### `QAPage` — vypořádáno po eskalaci

Druhá, zúžená oprava obstála. Článek už nepředkládá vybraných několik bodů jako úplný výčet. Pro běžný produktový detail správně uvádí dva samostatně dostačující důvody nezpůsobilosti: více otázek na jedné stránce a nemožnost uživatelů přidávat alternativní odpovědi u redakčních častých otázek. Navazující odstavec používá otevřenou formulaci „mezi další povinné podmínky patří“ a správně popisuje právě jeden `QAPage`, právě jednu `Question` v `mainEntity`, nejméně jednu `acceptedAnswer` nebo `suggestedAnswer` pro způsobilost k rozšířenému výsledku, celkový `answerCount` napříč stránkováním, vztah k `commentCount`, skutečně přijatou nejlepší odpověď a dostupnost stránky Googlu.

Zbývající obecné zásady, úplný text, obsahová omezení včetně zákazu reklamního použití a vzdělávací výjimku článek výslovně nechává v odkázané aktuální dokumentaci; netvrdí už, že uvedený dílčí seznam sám postačí. To odpovídá [dokumentaci Google Search Central pro QAPage](https://developers.google.com/search/docs/appearance/structured-data/qapage), naposledy aktualizované 8. 9. 2026.

### Odosobnění a původní komunikace — vypořádáno

Aktuální text správně odděluje veřejné znění od interního záznamu. Původní komunikaci nepřesouvá automaticky do nové evidence, ponechává ji v řízeném systému podpory podle účelu, přístupových pravidel a doby uchování. Pro zveřejnění požaduje odstranit přímé identifikátory i okolnosti umožňující nepřímé určení nebo propojení s dalšími údaji.

Interní redakční záznam s odkazem na původní komunikaci může zůstat osobním údajem, protože je zpětně propojitelný; článek jej ale neoznačuje za anonymní ani netvrdí, že na něj GDPR nedopadá. Formulace „odosobněná otázka“ popisuje upravený text, zatímco původní záznam zůstává řízený. Odmítnutí nálezu proto obstojí podle [Evropské komise k osobním, pseudonymizovaným a anonymizovaným údajům](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/application-gdpr_en) i podle [EDPB k pseudonymizaci](https://www.edpb.europa.eu/news/edpb-adopts-pseudonymisation-guidelines-and-paves-the-way-to-improve-cooperation-with_en).

### Uživatelské odkazy — vypořádáno

Text už nestaví `ugc` a `nofollow` jako vzájemně výlučné stupně důvěry. Správně doporučuje `rel="ugc"` pro odkazy vložené uživateli, vysvětluje účel `nofollow` a uvádí možnou kombinaci `rel="ugc nofollow"`. Stejná logika je v kontrolním seznamu. Odpovídá [dokumentaci Googlu ke kvalifikaci odchozích odkazů](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links).

### Jazykový audit — vypořádáno v celém rozsahu

Všech 26 jazykových nálezů je v aktuálním článku opraveno. Terminologie „dotaz“ versus „otázka“ je vysvětlená a důsledná, odstraněné kalky a nejasná zájmena se nevrátily, časté otázky a komunitní Q&A jsou při prvním použití česky vysvětlené a popis moderace už neobrací význam. Mechanický jazykový checker hlásí 0 nálezů.

## Ostatní ověřené části

- `seoTitle` začíná hlavním tématem a má 45 znaků; délka `title` nebyla posuzována. Meta description má 141 znaků.
- Krátká odpověď má 52 slov, začíná definicí a funguje samostatně. Prvních přibližně 100 slov těla dává přímou odpověď a vysvětluje nutnou redakční kontrolu.
- Všechny H2 obsahují zvýrazněný klíčový pojem i pointu ve `strong`; hierarchie je logická.
- FAQ odpovídá skutečným otázkám článku a odpovědi jsou samostatně srozumitelné.
- Interní odkazy vedou na existující související články; externí odkazy míří na odpovídající primární zdroje.
- Použité komponenty dostávají podporované vlastnosti a jejich role odpovídá obsahu.
- Tvrzení o konci rozšířených výsledků s FAQ 7. 5. 2026 a odstranění dokumentace 15. 6. 2026 odpovídají [přehledu změn Google Search Central](https://developers.google.com/search/updates).
- Baymard je správně popsán jako UX výzkum z roku 2017, nikoli jako důkaz pořadí ve vyhledávání nebo citací v AI.
- CTA odpovídá kanonickému modulu `pack.ts`: **AI SEO Wireframe Pack**, sedm typů stránek, samostatný návod a cena **1 490 Kč včetně DPH**.
