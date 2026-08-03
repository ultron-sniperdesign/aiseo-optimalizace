1. **Oprava původní chyby není úplná.** Autor sice správně opravil hlavní tvrzení v boxu, FAQ i nové AI sekci, ale v článku **zůstaly nepřímé formulace**, které dál sugerují měřitelnost dopadu AI Overview v GSC způsobem, který text dostatečně nevymezuje:
   - Citace: „**impressions stejné = SERP layout změna, AI Overview vzal pozici**“  
     Problém: v FAQ „Co dělat, když pozice klíčového slova klesnou?“ to zní příliš kauzálně. Z dat GSC tohle **nelze takto určit**; lze jen formulovat jako hypotézu po SERP kontrole.  
     Návrh: „impressions stejné = může jít o změnu SERP layoutu; ověřte ručně, jestli se neobjevil AI Overview, ads nebo jiná SERP feature.“
   - Citace: „**Publisher / blog … AI Overview impact**“  
     Problém: jako P2 metrika je to vágní a bez dovysvětlení může znovu implikovat, že existuje samostatně měřitelný segment v GSC.  
     Návrh: „Publisher / blog … dopad AI funkcí Googlu (jen nepřímo nebo přes samostatný report Generative AI features, pokud je dostupný).“

2. **Staré chybné tvrzení o filtrování/oddělení AI Overviews v reportu Výkon jsem jinde výslovně nenašel.**  
   Krátká odpověď, popisek, FAQ, tělo, metriky i zdroje už konzistentně říkají, že:
   - v běžném reportu Výkon to nejde,
   - data jsou v celkových číslech,
   - nový report je samostatný,
   - a neukazuje kliky/CTR/dotazy.  
   To je plus. Největší riziko zbytkové neúplnosti je tedy spíš v těch dvou nepřesných nepřímých formulacích výše, ne v přímém přežití staré chyby.

3. **Přiznání chyby je v zásadě poctivé, ale lehce změkčuje odpovědnost.**
   - Citace: „**Chybu jsem převzal z nepřesných informací, které o téhle údajné funkci kolovaly**“  
     Problém: je to lepší než mlčet, ale formulace část viny přesouvá na „kolující informace“. U odborného návodu by bylo poctivější přiznat i vlastní selhání verifikace proti primární dokumentaci.  
     Návrh: „Chybu jsem převzal z nepřesných informací a tehdy ji neověřil proti dokumentaci Googlu.“

4. **Popis reportu Generative AI features je převážně správný, ale autor by měl přesněji vymezit, co report „ukazuje“.**
   - Citace: „**Ukazuje imprese, stránky, země, zařízení a datum**“  
     Problém: tohle je použitelné zjednodušení, ale technicky přesnější je říct, že jde o dimenze/segmentace dostupné v reportu nad impresními daty, ne o plnohodnotnou metriku srovnatelnou s klasickým Performance reportem.  
     Návrh: „Report zpřístupňuje impresní data s členěním podle stránky, země, zařízení a data.“
   - Citace: „**AI Overviews od AI Mode neoddělí**“  
     To je v pořádku a důležité.
   - Citace: „**kliky, CTR, pozici ani dotazy ne**“  
     To je také v pořádku.

5. **Nová vsuvka stylisticky sedí jen částečně.**
   - Plus: box „Oprava k 3. 8. 2026“ tematicky zapadá a strukturálně je vložen do relevantní sekce.
   - Minus: článek jinak drží starší, poměrně kompaktní how-to styl, zatímco nová vsuvka má výrazně blogový až editorsky-autorský tón („**Chybu jsem převzal…**“, „**Co existuje doopravdy**“ v návazném textu). Není to průšvih, ale je to vidět.
   - Návrh: lehce zestručnit a sjednotit tón s ostatními „Insight“ boxy: méně obranné vysvětlování, více stručný fakt + oprava + odkaz.

6. **Zůstala další tvrzení o stavu k květnu 2026, která by měla být datovaná nebo ověřená i mimo ceny.**
   Konkrétně:
   - Citace: „**Otterly AI ($29/měs Lite, $99/měs Pro), Profound (enterprise $500+), Marketing Miner Brand Radar ($99/měs Machine plan, CZ trh)**“  
     Problém: tady je datace doplněna jen u jedné pasáže v metrice #8, ale stejné či odvozené ceny se opakují i jinde bez datace.
   - Citace: „**typicky Ahrefs ($29/měs) nebo SE Ranking ($65/měs). Pro AI tracking ještě Otterly ($29/měs)**“  
     Návrh: doplnit i sem „ceny k 5/2026“ nebo odkázat na jednotnou poznámku.
   - Citace: tabulka „**SMB … $30–65 / Agenturní stack $200–300 / Enterprise $1 000+**“  
     Problém: orientační cenové stacky také implicitně působí aktuálně a nemají dataci.  
     Návrh: poznámka pod tabulkou „Orientační ceny a stacky k 5/2026.“
   - Citace: „**Marketing Miner Brand Radar … přidal AI mention tracking pro CZ trh v 2025**“  
     Problém: tvrzení o feature stavu je časové a bez zdroje v článku. Po třech měsících by mělo být aspoň nepřímo ověřené nebo opatrněji formulované.  
     Návrh: „má AI mention tracking“ + zdroj v resources, nebo datum vypustit.
   - Citace: „**Google často mění algoritmus, čekat měsíc je pozdě**“  
     Problém: spíš generalizace než chyba, ale v návodu pro frekvenci měření je to příliš kategorické. Ne každý web potřebuje týdenní ruční kontrolu pozic.
   - Citace: „**Většina propadů je do 4–8 týdnů reverzibilní**“  
     Problém: nedoložené a příliš sebejisté tvrzení. To už není jen datace, ale věcná nepřesnost.

7. **Věcná nepřesnost: „Search Console report v GA4“.**
   - Citace: „**umožní 'Search Console' report v GA4**“  
     Problém: v roce 2026 je vhodnější mluvit o propojení dat a příslušné kolekci/reportech, ne sugerovat univerzálně stejný defaultní report po propojení. Formulace je zjednodušující.  
     Návrh: „umožní zpřístupnit Search Console data/reporty v GA4, pokud máte odpovídající propojení a publikovanou kolekci.“

8. **Věcná nepřesnost / terminologie: bounce rate a time on page v GA4.**
   - Citace: „**Bounce rate, scroll depth a time on page**“ / „**Google Analytics 4 (engagement metrics)**“ / „**Average time on page**“  
     Problém: GA4 standardně pracuje spíš s engagement rate, average engagement time apod.; „time on page“ je UA/slangové pojmenování a v textu by to mělo být sladěné s GA4 terminologií.  
     Návrh: používat „average engagement time“ nebo vysvětlit, že „time on page“ je zjednodušené označení.

9. **Věcná chyba: Domain Authority není metrika Semrushe.**
   - Citace: „**Semrush (DA — Domain Authority)**“  
     Problém: Semrush nepoužívá DA; to je značka Mozu.  
     Návrh: „Semrush (Authority Score), Moz (Domain Authority).“

10. **Věcná chyba / nepřesnost: GSC alerts.**
    - Citace: „**GSC alerts pro indexační chyby**“  
      Problém: formulace zní, jako by šlo o standardní nativní alerting setup v GSC na úrovni, jakou mají GA4 custom insights. To je zavádějící. GSC sice posílá některá upozornění, ale není to totéž jako konfigurovatelné alerty.  
      Návrh: „sledovat e-mailová upozornění z GSC a případně doplnit vlastní monitoring.“

11. **Věcná chyba / přílišná jistota u logů.**
    - Citace: „**sledujte data v server lozích**“  
      Problém: jednak čeština, jednak to v kontextu „podílu odpovědí mimo klasický SERP“ zní silněji, než je obhajitelné. Z logů lze někdy vidět referral/user-agent patterny, ale ne spolehlivě „podíl odpovědí“ v AI kanálech.  
      Návrh: „sledujte referral a crawl patterny v serverových logách jako doplňkový signál, ne jako přesné měření podílu AI odpovědí.“

12. **Nedůslednost v počtu vrstev vs metrik v krátké odpovědi a úvodu.**
    - Citace answer: „**na osmi metrikách rozdělených do čtyř vrstev**“
    - Citace tělo: „**Pro reálný obraz výkonu potřebujete 3 vrstvy metrik**“ a pak následují **čtyři** odrážky.  
      Problém: zjevný rozpor po editaci.  
      Návrh: „potřebujete 4 vrstvy metrik“.

13. **Stylistická a jazyková chyba: „server lozích“.**
    - Citace: „**v server lozích**“  
      Návrh: „v serverových logách“ nebo „v server logs“ ne, ale česky konzistentně.

14. **Stylistická chyba: „equally relevantní“.**
    - Citace: „**není ale pro každý byznys equally relevantní**“  
      Návrh: „není ale pro každý byznys stejně relevantní“.

15. **Stylistická/terminologická nejednotnost: „Search Ads“.**
    - Citace: „**Looker Studio (zdarma) napojený na GSC + GA4 + Search Ads**“  
      Problém: nejasné, pravděpodobně myšleno Google Ads; „Search Ads“ je matoucí.  
      Návrh: „Google Ads“, případně vypustit, když článek řeší SEO dashboard minimum.

16. **Jazyková neobratnost: „kolik se stránka 'leká'“.**
    - Citace: „**kolik se stránka 'leká'**“  
      Problém: příliš hovorové a nepřesné i na popularizační text.  
      Návrh: „jak moc se rozvržení stránky neočekávaně posouvá“.

17. **Jazyková chyba v checklistu.**
    - Citace: „**Sitemap.xml je submitnutý**“  
      Návrh: „soubor sitemap.xml je odeslaný“ nebo „sitemap.xml je nahraná/odeslaná“.

18. **Jazyková/terminologická nejednotnost: „indexovatelnost“ vs „indexace“.**
    - Citace: „**Core Web Vitals + indexovatelnost čtvrtletně**“ vs jinde „**GSC indexace**“  
      Problém: ne fatální, ale text střídá pojmy bez důvodu.  
      Návrh: sjednotit na „indexace / stav indexace“ nebo „indexovatelnost“ podle významu.

19. **Příliš kategorické tvrzení bez opory.**
    - Citace: „**To je 4 metriky, které pokryjí 80 % insightu**“  
      Problém: marketingová zkratka bez zdroje.  
      Návrh: „pokryjí většinu prakticky využitelného základního přehledu“.

20. **Příliš kategorické tvrzení bez opory.**
    - Citace: „**Pro většinu malých až středních webů GSC + GA4 stačí na 60–70 % insightu zdarma**“  
      Problém: pseudoexaktní číslo bez metodiky.  
      Návrh: „stačí na podstatnou část základního přehledu zdarma“.

**Verdikt: PUBLIKOVAT PO ÚPRAVÁCH**

Hlavní oprava je věcně z větší části správně a stará chyba už v přímé podobě v textu prakticky nezůstala. Ale článek pořád potřebuje:
- dočistit 2 zbytkové formulace kolem „AI Overview impact“,
- opravit několik skutečných věcných chyb (hlavně Semrush/DA, GSC alerts, vrstvy 3 vs 4),
- sjednotit dataci cen ve všech výskytech,
- a projít češtinu/terminologii.