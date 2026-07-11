**VERDIKT: OPRAVIT PŘED PUBLIKACÍ**

- [DOPORUČENÍ] `title: "RAG: jak funguje AI vyhledávání v roce 2026"` → Titulek je věcně v pořádku, klíčové slovo je vpředu a délka je pravděpodobně v limitu. **OK.**

- [DOPORUČENÍ] `description: "RAG (retrieval-augmented generation) je mechanika za Google AI Overviews. Vysvětlíme, jak AI dohledává odpovědi a proč klasické SEO pořád platí."` → Popis je v délce zřejmě v normě, ale formulace **„mechanika za Google AI Overviews“** zní nepřirozeně a **„proč klasické SEO pořád platí“** je moc kategorické. Navrhuji změkčit:  
  **„RAG je zjednodušeně způsob, jak AI vyhledávání dohledává podklady k odpovědi. Vysvětlujeme, jak funguje a proč je pro AI viditelnost dál důležitá indexovatelnost a SEO.“**

- [BLOCKER] `answer: "RAG neboli retrieval-augmented generation je způsob, jak AI vyhledávání odpovídá: místo aby model čerpal jen z tréninku, nejdřív si k dotazu dohledá relevantní úseky obsahu z indexu a z nich složí odpověď s odkazy. Google AI Overviews i AI Mode na RAG stojí — a protože dohledávají z indexu Vyhledávání, klasické SEO a indexovatelnost pořád hrají velkou roli."` → Krátká odpověď je obsahově silná a začíná definicí, což je správně. Problém je druhá věta: **„Google AI Overviews i AI Mode na RAG stojí“** je příliš definitivní bez hedge přímo v answer. Váš požadavek na hedge je oprávněný. Navrhuji:  
  **„Podle veřejných popisů Google AI Overviews i AI Mode využívají princip podobný RAG nad indexem Vyhledávání. Proto v AI odpovědích dál hraje důležitou roli indexovatelnost a kvalitní SEO.“**

- [DOPORUČENÍ] `updated: "2026-07-11"` → Datum je v pořádku a článek netvrdí nic po tomto datu jako hotovou věc. **OK.**

- [BLOCKER] `Google AI Overviews i AI Mode na RAG stojí` → Tohle se v textu opakuje víckrát jako jistota. U AI Overviews a AI Mode je rozumné mluvit **„podle veřejných popisů“, „zjednodušeně“, „fungují na principu podobném RAG“**, ne jako o plně potvrzené interní architektuře v detailu. Navrhuji všude nahradit formulacemi typu:  
  **„Podle veřejně dostupných popisů fungují na principu podobném RAG nad indexem Vyhledávání.“**

- [DOPORUČENÍ] `místo aby model čerpal jen z tréninku` → Zjednodušení je přijatelné, ale technicky by bylo přesnější dodat, že model **při skládání odpovědi** pracuje s dohledaným kontextem, ne že „nečerpá“ z parametrických znalostí vůbec. Navrhuji:  
  **„místo aby se spoléhal jen na znalosti získané při tréninku, pracuje při skládání odpovědi i s dohledaným kontextem“**

- [DOPORUČENÍ] `RAG oba problémy řeší tím, že model před odpovědí pošle na „rešerši".` → Overclaim. RAG tyto problémy **zmírňuje**, ne „řeší“. Navrhuji:  
  **„RAG oba problémy zmírňuje tím, že si model před odpovědí dohledá relevantní podklady.“**

- [DOPORUČENÍ] `Výsledkem je odpověď opřená o konkrétní zdroje — aktuálnější, ověřitelná a méně náchylná k vymýšlení.` → Věcně v zásadě sedí, ale je to příliš přímočaré. Odpověď může být aktuálnější a méně náchylná k halucinacím, ale ne nutně vždy ověřitelná nebo správná. Navrhuji:  
  **„Výsledkem může být odpověď opřená o konkrétní zdroje — často aktuálnější a méně náchylná k halucinacím, pokud jsou dohledané podklady kvalitní.“**

- [DOPORUČENÍ] `Každé tvrzení jde v ideálním případě dohledat zpět ke zdroji.` → Tohle je v téhle podobě moc silné. Ne každé tvrzení bývá přímo trasovatelné a citace v AI odpovědích nejsou vždy úplné. Navrhuji:  
  **„V ideálním případě lze hlavní tvrzení dohledat zpět ke zdroji, ale v praxi to nebývá stoprocentní.“**

- [BLOCKER] `o vaší viditelnosti v AI odpovědi nerozhoduje jen kvalita modelu, ale hlavně to, jestli je váš obsah dohledatelný a dobře strukturovaný.` → Sloveso **„rozhoduje“** a příslovce **„hlavně“** jsou zbytečně absolutní. Navrhuji změkčit:  
  **„o vaší viditelnosti v AI odpovědi nerozhoduje jen kvalita modelu; významnou roli hraje i to, jestli je váš obsah dohledatelný a dobře strukturovaný.“**

- [DOPORUČENÍ] `Často k tomu používá embeddings` → Anglicismus je hned vysvětlen, takže je to skoro v pořádku, ale podle zadání je vhodnější dát přednost českému výrazu. Navrhuji:  
  **„Často k tomu používá vektory významu (embeddings)…“**  
  nebo  
  **„Často k tomu používá převod dotazu a dokumentů na vektory podle významu…“**

- [KOSMETIKA] `promptu` → Anglicismus bez nutnosti. Navrhuji:  
  **„Úseky se vloží do zadání pro model“**  
  nebo  
  **„…přidají modelu jako kontext pro odpověď“**

- [DOPORUČENÍ] `Model tak dostane čerstvá, konkrétní data k dotazu.` → „čerstvá“ nemusí být vždy pravda. Navrhuji:  
  **„Model tak dostane konkrétní podklady k dotazu, které mohou být aktuálnější než samotný trénink modelu.“**

- [BLOCKER] `Podle veřejných popisů stojí Google AI Overviews i AI Mode na principu RAG nad standardním indexem Vyhledávání Google. Dohledávají tedy odpovědi z živého indexu, ne jen z toho, co se model naučil při tréninku — proto jsou aktuální a proto se do nich mohou dostat i čerstvé stránky.` → První věta je už dobře hedgovaná. Druhá věta je ale zase příliš jistá: **„proto jsou aktuální“** zní jako garance. Navrhuji:  
  **„Dohledávají tedy podklady z živého indexu, ne jen z toho, co se model naučil při tréninku — proto mohou být odpovědi aktuálnější a mohou se do nich dostat i čerstvé stránky.“**

- [DOPORUČENÍ] `RAG také souvisí s tím, jak AI Mode rozkládá dotaz.` → V pořádku, pokud navazující článek tvrzení rozebírá a nepřehání. **OK.**

- [DOPORUČENÍ] `když AI dohledává z indexu, klasické SEO neztrácí smysl — je jeho podmínkou.` → První část je v pořádku, druhá je příliš absolutní. U některých systémů může hrát roli i jiný zdroj než klasický webový index. Navrhuji:  
  **„když AI dohledává z indexu Vyhledávání, klasické SEO neztrácí smysl a často zůstává důležitou podmínkou viditelnosti.“**

- [BLOCKER] `RAG tak technicky potvrzuje, že AI viditelnost a SEO jdou ruku v ruce` → „technicky potvrzuje“ je overclaim. Navrhuji:  
  **„RAG ukazuje, proč spolu AI viditelnost a SEO často úzce souvisejí“**  
  nebo  
  **„Podporuje závěr, že AI viditelnost a SEO spolu úzce souvisejí.“**

- [DOPORUČENÍ] `Technické SEO a přístupnost pro roboty jsou základ.` → „roboty“ je bez kontextu méně vhodné podle slovníku. Navrhuji:  
  **„Technické SEO a přístupnost pro vyhledávací roboty jsou základ.“**

- [DOPORUČENÍ] `Embeddings hledají význam, ne shodu frází.` → Zase doporučuji počeštit. Navrhuji:  
  **„Vektory významu pomáhají hledat významovou blízkost, ne jen shodu frází.“**

- [DOPORUČENÍ] `pomáhají model spojit obsah s tématem.` → V pořádku, formulace je přiměřená. **OK.**

- [DOPORUČENÍ] `RAG není paměť modelu. Model nečerpá z toho, co si pamatuje, ale z toho, co si k dotazu právě dohledá v indexu.` → První věta je v pořádku. Druhá je moc černobílá; model při odpovědi stále používá i vlastní naučené schopnosti a znalosti. Navrhuji:  
  **„Model se neopírá jen o to, co si nese z tréninku, ale při odpovědi pracuje i s tím, co si k dotazu právě dohledá v indexu.“**

- [DOPORUČENÍ] `Znalostní báze se aktualizuje samostatně — změníte obsah a odpovědi se mohou změnit, aniž by se model učil znovu.` → Věcně sedí a je správně hedgované slovem **„mohou“**. **OK.**

- [DOPORUČENÍ] `RAG negarantuje správnost.` → V pořádku. **OK.**

- [DOPORUČENÍ] `RAG neznamená konec SEO. Naopak — dohledávání stojí na indexu, takže indexovatelnost a kvalita obsahu jsou pořád důležité.` → Dobré, jen „stojí na indexu“ může být opět moc definitivní. Navrhuji jemně změkčit:  
  **„U systémů, které dohledávají z indexu Vyhledávání, zůstávají indexovatelnost a kvalita obsahu důležité.“**

- [DOPORUČENÍ] `Google AI Overviews i AI Mode na RAG stojí — dohledávají z indexu Vyhledávání.` → Znovu stejný problém s jistotou. Navrhuji sjednotit s hedgem:  
  **„Podle veřejných popisů Google AI Overviews i AI Mode využívají dohledávání nad indexem Vyhledávání.“**

- [DOPORUČENÍ] `Indexovatelnost je podmínka — co v indexu není, AI nedohledá.` → Tohle platí jen pro systémy závislé na konkrétním indexu; v kontextu článku o Google je to prakticky použitelné, ale formulace je absolutní. Navrhuji:  
  **„Pro AI odpovědi založené na dohledávání z indexu je indexovatelnost základní podmínkou — co v indexu není, systém obvykle nedohledá.“**

- [DOPORUČENÍ] `Embeddings hledají význam, ne fráze` → Obsahově správné zjednodušení. Lepší český slovník:  
  **„Vektory významu pomáhají hledat významovou blízkost, ne jen přesnou shodu frází.“**

- [DOPORUČENÍ] `Pasáže, jasná tvrzení a čerstvost pomáhají obsah dohledat a použít.` → V pořádku, dobře hedgované slovem **„pomáhají“**. **OK.**

- [BLOCKER] `RAG potvrzuje, že SEO a AI viditelnost jdou ruku v ruce` → Zase příliš dogmatické. Navrhuji:  
  **„RAG ukazuje, proč SEO a AI viditelnost často souvisejí.“**

- [DOPORUČENÍ] `AI SEO audit za 9 990 Kč... prověří indexovatelnost, strukturu a entity vašeho webu z pohledu toho, jak AI dohledává a skládá odpovědi` → CTA je konkrétní a směřuje na produkt, což je správně. **OK.**

- [DOPORUČENÍ] `wireframy stránek s pasážovou strukturou, kterou AI dobře dohledává` → Mírný overclaim v „dobře dohledává“. Navrhuji:  
  **„…s pasážovou strukturou, která může usnadnit dohledání a použití obsahu v AI odpovědích.“**

- [DOPORUČENÍ] `Popis fungování RAG a AI vyhledávání vychází z veřejné dokumentace a analýz ... jde o zjednodušený popis` → To je velmi dobrá pojistka a přesně odpovídá požadavku na hedge. **OK.**

- [DOPORUČENÍ] Interní odkazy: `/blog/google-ai-mode/`, `/blog/query-fan-out-ai-mode/`, `/blog/jak-ai-cituje-zdroje/`, `/blog/aeo-geo-je-porad-seo/`, `/blog/aktualizace-obsahu-pro-ai/`, `/blog/strukturovana-data-pro-ai/`, `/blog/test-viditelnosti-v-ai/` → Interní odkazy dávají věcný smysl a podporují tvrzení v textu. **OK.**

**Shrnutí hlavních oprav před publikací:**  
1. sjednotit hedge u tvrzení o Google AI Overviews / AI Mode a RAG,  
2. odstranit absolutní formulace typu **řeší / potvrzuje / rozhoduje / je podmínkou**,  
3. počeštit několik anglicismů (`embeddings`, `prompt`),  
4. lehce zpřesnit technické formulace, aby nevyzněly jako garance pravdy nebo úplná mechanická jistota.  

Jinak je článek nadprůměrně disciplinovaný: první odstavec i answer fungují, FAQ je použitelné, CTA je konkrétní a interní odkazy jsou relevantní.