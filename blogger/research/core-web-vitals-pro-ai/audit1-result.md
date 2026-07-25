**VAROVÁNÍ**  
**Citace:** „Boti, kteří sbírají obsah pro ChatGPT, Perplexity nebo Google AI, obvykle čekají na načtení stránky jen jednotky sekund — v praxi se uvádí zhruba jedna až pět sekund. Když se stránka za tu dobu nenačte, robot odejde. A co robot nenačte, to se nedostane do zdroje, ze kterého AI čerpá.“  
**Proč:** První půlka sedí jen jako obecné typické rozpětí. Druhá půlka už je moc tvrdá a lineární. Timeout je reálný mechanismus, ale článek směšuje „nenačte se stránka pro crawler“ s „nedostane se do zdroje pro AI“ jako jistý výsledek. To není podložené tak silně, jak je napsáno. Navíc „ChatGPT, Perplexity nebo Google AI“ implikuje stejný mechanismus napříč platformami.  
**Oprava:**  
„AI crawleři mohou mít krátké timeouty, typicky v řádu jednotek sekund. U extrémně pomalé stránky tak roste riziko, že crawler neuvidí obsah celý nebo ji nedocrawlí vůbec. To může omezit její dostupnost pro další zpracování, ne ale fungovat jako samostatný ranking signál.“

---

**VAROVÁNÍ**  
**Citace:** „Tahle je jediné, co je u AI reálně rizikové.“ / „Tohle je celý praktický důvod, proč rychlost u AI řešit“  
**Proč:** Překlopení na druhou stranu. Článek správně odmítá CWV jako AI faktor, ale tady už zbytečně zužuje problém jen na timeout. Technicky zdatný čtenář namítne, že výkon neovlivňuje jen timeout, ale i obecnou crawlability/renderability, zejména u JS-heavy webů. To pořád není „CWV ranking factor“, ale není to ani „jediný důvod“.  
**Oprava:**  
„Pro AI není doložený speciální přínos lepších CWV nad rámec běžně dobře fungujícího webu. Nejpraktičtější riziko je timeout nebo nedokončené načtení/rendering u velmi pomalých či těžkých stránek.“

---

**VAROVÁNÍ**  
**Citace:** „Rozhoduje 75. percentil reálných uživatelů za 28 dní, ne jedna hodnota z jednoho testu.“  
**Proč:** Nepřesné zjednodušení. Pro hodnocení CWV v Google ekosystému ano, ale v kontextu rozhodování o technickém problému nestačí říct „rozhoduje“. Lab data jsou důležitá diagnostika. V článku se to místy říká správně, ale tahle formulace je absolutní a může být vyložena jako znehodnocení lab testu.  
**Oprava:**  
„Pro posouzení CWV stavu se používá 75. percentil reálných uživatelů Chrome za 28 dní. Laboratorní test nerozhoduje o CWV stavu, ale je klíčový pro diagnostiku problémů.“

---

**DOPORUČENÍ**  
**Citace:** „PageSpeed Insights ukáže reálná data i laboratorní test“ / „Reálná data v PageSpeed Insights jsou důležitější než lab číslo.“  
**Proč:** V zásadě správně, ale chybí přesnost: PSI nemusí mít field data pro konkrétní URL. Technicky zdatný čtenář to namítne.  
**Oprava:**  
„PageSpeed Insights ukáže laboratorní test vždy; reálná data ukáže jen pokud má URL nebo původ dostatek dat z CrUX.“

---

**DOPORUČENÍ**  
**Citace:** „INP měří odezvu na kliknutí a psaní“ / „INP hodnotí celý životní cyklus interakce“  
**Proč:** Není to vyloženě chyba, ale je to zkratka. INP neměří jen „kliknutí a psaní“, ale latenci interakcí obecně; a „celý životní cyklus interakce“ je populární zjednodušení, přesnější je latence od vstupu po další vykreslení.  
**Oprava:**  
„INP měří odezvu interakcí uživatele — tedy dobu od vstupu po další vykreslení rozhraní; sleduje chování stránky napříč celou návštěvou, ne jen první vstup.“

---

**DOPORUČENÍ**  
**Citace:** „Google to ve svém průvodci z května 2026 potvrzuje, když říká, že k zobrazení v AI funkcích stačí být indexovaný a způsobilý, žádné další požadavky.“  
**Proč:** Směr je správný, ale „stačí“ může působit silněji než zdroj dovoluje. Guide říká, že nejsou další speciální technické požadavky; ne že indexace sama o sobě stačí k zobrazení.  
**Oprava:**  
„Google uvádí, že pro způsobilost v AI funkcích nejsou potřeba žádné zvláštní dodatečné technické požadavky nad běžné podmínky pro indexaci a zobrazení se snippetem.“

---

**DOPORUČENÍ**  
**Citace:** „studie z ledna 2026 našla mezi rychlostí webu a viditelností v AI jen velmi slabou korelaci, blízko nuly“  
**Proč:** Fakticky drží linii, ale chybí pojistka, že jde o mezinárodní studii a že čísla nejsou český stav. Zadaní výslovně říká to nepřevrátit do lokálního tvrzení.  
**Oprava:**  
„Mezinárodní studie z ledna 2026 našla jen velmi slabé korelace, blízko nuly; nelze z ní vyvozovat české benchmarky ani příčinu.“

---

**DOPORUČENÍ**  
**Citace:** „LCP pod 2,5 sekundy, INP pod 200 milisekund, CLS pod 0,1.“  
**Proč:** Správně, ale chybí doplnění hraničních pásem aspoň jednou v textu, zejména u INP, kde máte ve zdrojích i 200–500 ms „zlepšit“, >500 „špatné“. To zvyšuje akceschopnost.  
**Oprava:**  
Doplnit jednu větu: „U INP platí 200–500 ms jako pásmo ke zlepšení a nad 500 ms jako špatná hodnota.“

---

**DOPORUČENÍ**  
**Citace:** „Je váš web citelně pomalý? Vyřešte to… Máte slušné hodnoty? Neinvestujte do posledních bodů“  
**Proč:** Závěr je střízlivý a správný, ale akceschopnost by byla lepší s tvrdším rozhodovacím prahem. Teď je „citelně pomalý“ vágní.  
**Oprava:**  
„Pokud neplníte dobré CWV prahy nebo máte zjevně pomalé načítání hlavního obsahu, řešte to. Pokud prahy plníte a web se normálně načítá, další ladění pro AI nepřeceňujte.“

---

**Celkově:**  
Článek drží správnou hlavní tezi: **CWV nejsou potvrzený AI signál, ale extrémní pomalost může škodit přes crawl/render timeout.** Největší riziko je několik moc absolutních formulací kolem „jediného důvodu“ a „co se nenačte, to nelze citovat“, které mechanismus zbytečně přehánějí. Faktická čísla CWV, 75. percentil, 28 dní i březen 2024 sedí.