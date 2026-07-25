1. **VAROVÁNÍ**  
   **Citace:** „Schema je příznak kvalitních webů, které AI cituje tak jako tak — ne příčina citace.“ / „Strukturovaná data jsou tedy příznak kvalitního webu, ne jeho příčina úspěchu.“  
   **Proč:** To je pořád o chlup silnější, než data unesou. Ahrefs test ukazuje, že **dodatečné přidání JSON-LD na existující stránky** nezvýšilo citace. Neprokazuje obecně, že schema „není příčina“ v žádném kontextu. To už je širší ontologický soud.  
   **Oprava:** Změnit na: „V tomto testu se schema jeví spíš jako marker kvalitních webů než jako samostatná páka na citace.“ Případně: „Test nepodpořil tezi, že samotné přidání schema je příčinou vyšších citací.“

2. **VAROVÁNÍ**  
   **Citace:** „Přidání schématu citace nezvýšilo ani na jedné platformě.“  
   **Proč:** Bez dovětku to zní moc definitivně. Správně by mělo být jasné, že jde o **v rámci tohoto testu / v tomto vzorku / v sledovaném období**.  
   **Oprava:** „V tomto testu a sledovaném období se po přidání schématu neprojevil významný nárůst citací na žádné platformě.“

3. **VAROVÁNÍ**  
   **Citace:** „Podobný závěr přinesla i analýza Search Atlas. Shodují se na tom, že schema samo o sobě citace nežene.“  
   **Proč:** Tady se zbytečně přifukuje váha Search Atlas. Podle zadání je to observační analýza „bez vztahu“, ne „podobný závěr“ ve stejné síle. „Shodují se“ je moc silné, protože metodická síla není srovnatelná.  
   **Oprava:** „Observační analýza Search Atlas nenašla vztah mezi pokrytím schématem a viditelností; není to ale kauzální důkaz, takže hlavní váhu tu má test Ahrefs.“

4. **VAROVÁNÍ**  
   **Citace:** FAQ: „Pro češtinu srovnatelné měření nemáme, ale nic nenaznačuje, že by tu schema fungovalo jako citační páka jinak.“  
   **Proč:** To je pořád lehký overclaim. Absence důkazu ≠ důkaz absence rozdílu v CZ.  
   **Oprava:** „Pro češtinu srovnatelné měření nemáme, takže české specifikum z toho nepotvrdíme ani nevyvrátíme. Prakticky ale není dobrý důvod počítat se schematem jako se spolehlivou citační pákou.“

5. **DOPORUČENÍ**  
   **Citace:** „Organization a Person pomáhají stroji pochopit, kdo jste“ / „rozlišení identity a konzistenci“  
   **Proč:** To je obsahově v pořádku, ale chce to držet stejnou opatrnost jako u zbytku textu. „Pomáhají pochopit“ může část čtenářů číst jako neprokázaný přímý efekt.  
   **Oprava:** „mohou zpřehlednit identitu a vztahy mezi entitami“ nebo „slouží k explicitnímu vyjádření identity a konzistenci dat“.

6. **DOPORUČENÍ**  
   **Citace:** frontmatter `answer`: „Schema je příznak kvalitních webů… ne příčina citace.“  
   **Proč:** Frontmatter je tvrdší než tělo v sekci „Co test měří a co ne“. Je tam drobný vnitřní nesoulad v míře jistoty.  
   **Oprava:** Sjednotit answer s tělem: „Data spíš ukazují, že schema bývá průvodním znakem kvalitních webů, ne samostatnou pákou na citace.“

7. **DOPORUČENÍ**  
   **Citace:** stats: „−4,6 % — změna citací u Google AI Overviews po přidání schématu — místo nárůstu mírný pokles“  
   **Proč:** Samostatně vytržený stat může být čten jako headline evidence škody, i když text to pak koriguje.  
   **Oprava:** Přepsat label na: „u Google AI Overviews vyšel v testu malý pokles (−4,6 %), bez důkazu přínosu“. Nebo ten stat úplně vypustit a nechat jen v textu s kontextem.

8. **DOPORUČENÍ**  
   **Citace:** „Rozhodnutí je proto jednoduché…“  
   **Proč:** Akceschopnost je dobrá, ale šla by ještě zpřesnit do mini-pravidla. Teď je to použitelné, ale pořád trochu rétorické.  
   **Oprava:** Přidat 3body rozhodovací rámec:  
   - „Chci rich results / produktové prvky / identitu značky → ano.“  
   - „Jen čekám víc AI citací po nasazení JSON-LD → nečekat efekt.“  
   - „Mám omezený čas → přednost obsah, zdroje, autorita, interní konzistence.“

9. **DOPORUČENÍ**  
   **Citace:** „Kdo prodává schema jako zkratku do AI odpovědí, plete si symptom s lékem.“  
   **Proč:** Rétoricky silné, informačně už to bylo řečeno. Lehce publicistická nadbytečnost.  
   **Oprava:** Zkrátit nebo vypustit. Stačí věta: „Jde o záměnu markeru kvality za samostatný mechanismus růstu citací.“

10. **DOPORUČENÍ**  
    **Citace:** celková struktura  
    **Proč:** Článek už není v rozporu s ostatními články webu, protože jasně říká, že užitek schema je jinde než v AI citacích. To funguje. Jen by stálo za to explicitně říct, že tím **nepopíráte implementační doporučení na webu**.  
    **Oprava:** Jedna věta do sekce „K čemu schema pořád slouží“: „To není spor s doporučením schema nasazovat; jen je potřeba oddělit jeho klasický technický přínos od neprokázaného vlivu na AI citace.“

**Shrnutí:** Bez blokeru. Největší zbytek problému je stále v pár větách, které z jednoho kauzálního testu dělají obecnější soud o „příčině“ a ve zbytečně silném opření o Search Atlas. Jinak je logika korelace vs. kauzalita podaná čistě a článek už není v rozporu se zbytkem webu.