## BLOKER

1. **„Robots.txt na ně proto neplatí“ je tvrzené moc absolutně a zaměňuje technickou nevymahatelnost za normativní neplatnost.**  
   Citace: „**Robots.txt na ně proto neplatí**“ / „**Ne. Není to robot a nemá řídicí token.**“  
   Problém: Z dat plyne nanejvýš to, že je **nelze prakticky selektivně řídit přes robots.txt podle UA/tokenu**. Ne že „na ně robots.txt neplatí“ jako obecné pravidlo. Pokud výrobce prohlížeče respektuje robots/meta instrukce při nějaké interní akci, článek to nevylučuje ani nedokládá. Formulace je tvrdší než opora.

2. **„V logu je nerozeznáte“ je přehnané zobecnění.**  
   Citace: „**v logu je nerozeznáte**“ / „**Uvidíte ho v logu: Ne. Splyne s běžnou návštěvou.**“  
   Problém: V textu sám připouštíš výjimku: „**v agentním režimu podle podepsané hlavičky Signature-Agent**“. Pak není pravda bez výhrady, že je v logu nerozeznáš. Správně: běžně ne podle UA; někdy ano podle dalších hlaviček v agentním režimu.

3. **Tvrzení o referreru je příliš silné a místy sklouzává k mechanismu bez opory.**  
   Citace: „**referrer bývá odstraněný, takže návštěva sedí jako přímá**“ / „**Atlas naopak referrer často odstraní**“  
   Problém: „bývá“, „často“ a „sedí jako přímá“ zní empiricky, ale článek neukazuje zdroj ani podmínky. Chybí rozlišení, zda referrer odstraňuje:
   - samotný AI prohlížeč,
   - přechod z interní AI vrstvy,
   - privacy politika / `Referrer-Policy`,
   - přesměrování.  
   Bez toho je to spíš hypotéza o mechanismu než doložený mechanismus.

4. **Reklama: článek naznačuje finanční riziko bez dostatečné opory a bez základních protiargumentů.**  
   Citace: „**včetně kliků na placenou reklamu. Inzerent pak může zaplatit za proklik, který neudělal zákazník.**“  
   Problém: To je už hodně silné tvrzení. Nestačí ho změkčit větou „nikdo nezveřejnil objem“. Chybí zásadní kontext:
   - jak by se takový klik počítal v reklamním systému,
   - zda by neprošel existující invalid-click filtrací,
   - zda jde o reálně doložené účtované kliky, nebo jen teoretickou možnost interakce.  
   Takhle text posouvá hypotézu na úroveň praktického rizika „stojí peníze“.

5. **„Bez něj se obsah do prohlížeče nedostane“ je nepodložené zjednodušení.**  
   Citace: „**Aby se obsah do AI prohlížeče vůbec dostal, musí ho najít crawler — u OpenAI je to OAI-SearchBot.**“ / „**Bez něj se obsah do prohlížeče nedostane.**“  
   Problém: To tvrdí jediný kanál objevování jako jistotu. Ale uživatelský prohlížeč může načíst URL přímo, ze záložky, z výsledků jiného vyhledávače, z odkazu mimo ekosystém. Možná myslíš „do AI odpovědí / discovery vrstvy“, ne „do prohlížeče vůbec“. Tohle je fakticky špatně formulované.

## DOPORUČENÍ

1. **Zpřesnit user-agent závěr na „nelze spolehlivě odlišit podle UA“, ne „v logu nerozeznáte“.**  
   Citace: „**Podle user-agentu ne — vypadá jako Chrome.**“  
   To je přesnější než titulkové a answer formulace. Přepiš i úvod a shrnutí do stejné míry jistoty.

2. **Oddělit tři různé věci, které se teď míchají dohromady:**
   - AI crawler,
   - AI prohlížeč jako user-facing browser,
   - agentní režim vykonávající akce.  
   Citace: „**Atlas v agentním režimu umí na stránce klikat...**“  
   Právě agentní režim je jiná třída rizika než „uživatel si čte v Atlasu“. Článek to místy rozlišuje, ale závěry to zase slévají.

3. **U referreru výslovně přiznat neznámý mechanismus a podmíněnost.**  
   Navrhni formulaci typu:  
   „U některých přechodů z AI prohlížečů se referrer nemusí propsat do analytiky; výsledek pak může spadnout do Direct nebo not set. Není ale jisté, že to způsobuje vždy samotný prohlížeč.“  
   Teď je to příliš sebejisté.

4. **U reklamy doplnit, co má čtenář dělat konkrétně.**  
   Citace: „**přidejte si tuhle hypotézu na seznam**“  
   To je slabé. Chybí akce:
   - kontrola kvalitativních metrik po kliku,
   - landing-page engagement,
   - rozdíl brand/non-brand,
   - dotaz na support platformy kvůli invalid traffic,
   - segmentace podezřelých session, pokud jsou k dispozici podepsané hlavičky.  
   Jinak čtenář ví jen, čeho se bát.

5. **„Nechte projít OAI-SearchBot“ je příliš kategorická rada.**  
   Citace: „**Blokovat nechcete**“ / „**Nechte projít OAI-SearchBot.**“  
   To z dat v článku neplyne obecně pro každého. Firma může mít legitimní důvody blokovat discovery crawlery. Maximálně můžeš říct, že blokace **omezí šanci na objevování v daném ekosystému**. Ne že „nechcete“.

## DROBNOST

1. **Konzistence mezi tělem a shrnutím kulhá u měření.**  
   Citace answer: „**návštěva sedí jako přímá**“  
   Tělo je opatrnější: „**Direct, nebo (not set)**“. Shrnutí je tvrdší než text.

2. **Konzistence u detekce v logu.**  
   Citace answer: „**v logu je nerozeznáte**“  
   FAQ: „**v agentním režimu podle podepsané hlavičky Signature-Agent**“. FAQ je přesnější než answer.

3. **„Stejný nástroj, jiný povrch, úplně jiná viditelnost v datech.“**  
   Je to hezké, ale tvrzení „webová verze ChatGPT přidává do odkazů parametr utm_source=chatgpt.com“ není v článku nijak opřené a zní univerzálně. Pokud to není vždy, je to problém.

4. **„0 řídicích tokenů v robots.txt“ je pseudo-přesnost.**  
   Citace stats: „**0 řídicích tokenů**“  
   Zní to exaktněji, než si můžeš dovolit. Lepší je „bez veřejně známého samostatného tokenu“ nebo podobně.

5. **Chybí odpověď na zjevnou otázku: co tedy můžu měřit místo toho?**  
   Článek dobře říká, co nevíme, ale málo říká, jak postupovat prakticky:
   - jak si nastavit kontroly Directu,
   - jak poznat anomálii,
   - jaké metriky sledovat u PPC,
   - zda má smysl server-side logging podepsaných hlaviček.  
   Pro českého marketéra to zůstává moc defenzivní.