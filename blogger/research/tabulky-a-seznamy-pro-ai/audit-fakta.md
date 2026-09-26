# C2 — nezávislý faktický audit

**VERDIKT: OPRAVIT PŘED PUBLIKACÍ.**

Kontrola k 26. 9. 2026 podle celého `blogger/auditor-system.md`. Přečten byl článek `src/content/articles/tabulky-a-seznamy-pro-ai.mdx`, jeho `research.md` a aktuální datový modul `src/content/pages/pack.ts`. Všechny externí odkazy byly otevřeny samostatně; u tvrzení o modelech byly dohledány i další primární benchmarky jako možný protidůkaz. Článek ani jiné zdrojové soubory nebyly upraveny.

## Zásadní nálezy

**Žádný [BLOCKER].** Článek neslibuje lepší pozici ani citaci, správně odděluje laboratorní práci modelu s tabulkou od výsledků ve vyhledávání a uvádí podstatné podmínky Googlu. Produktové CTA odpovídá aktuálnímu datovému modulu.

## Drobné nálezy a doporučené opravy

### 1. W3C nevyžaduje explicitní vazby u každé „složitější“ tabulky

**Citovaná pasáž:** „W3C proto rozlišuje hlavičkové a datové buňky a u složitějších záhlaví požaduje výslovné vazby mezi nimi.“

**Problém:** Sloveso „požaduje“ bez rozlišení typů tabulek je silnější než citovaný zdroj. W3C uvádí, že u složitějších tabulek **mohou** být explicitní vazby potřeba. U jednoduché tabulky se dvěma směry hlaviček používá `scope="row"` a `scope="col"`; u nepravidelných záhlaví také `rowgroup` a `colgroup`; teprve u tabulek, kde vztahy nelze určit striktně vodorovně či svisle, doporučuje explicitní spojení přes `id` a `headers`. WCAG 1.3.1 požaduje programově určitelný vztah nebo textovou alternativu, nikoli jednu konkrétní techniku pro všechny tabulky.

**Důkaz:** [W3C Tables Tutorial — rozlišení jednoduchých, nepravidelných a víceúrovňových záhlaví](https://www.w3.org/WAI/tutorials/tables/) a [WCAG 2.2, SC 1.3.1 — Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html).

**Doporučená oprava:** „W3C proto rozlišuje hlavičkové a datové buňky. U složitějších záhlaví mohou být potřeba atributy `scope`, případně explicitní vazby přes `id` a `headers`, aby šel vztah buněk určit programově.“

**Závažnost:** drobný ([WARNING]).

### 2. Vítězná konfigurace *Table Meets LLM* má více podmínek, než věta uvádí

**Citovaná pasáž:** „Studie *Table Meets LLM* porovnávala několik textových zápisů tabulek u GPT‑3.5 a GPT‑4. V jejím nastavení vyšel nejlépe HTML zápis doplněný vysvětlením formátu a ukázkou.“

**Problém:** Směr závěru je správný, ale formulace „vyšel nejlépe“ zkracuje vítěznou konfiguraci. Nejvyšší souhrnná přesnost v benchmarku SUC vznikla při kombinaci HTML, vysvětlení formátu, role promptu, jedné ukázky a konkrétního pořadí otázky a tabulky. Studie navíc provedla GPT‑4 test jen na náhodném podvzorku 300 položek z každé úlohy, zatímco základní testovací sada měla 1 500 tabulek na úlohu. Autoři zároveň uvádějí, že vysvětlení formátu u některých vyhledávacích úloh výkon zhoršovalo. Současná věta tak může působit jako obecný souboj samotných formátů.

**Důkaz:** [Sui et al., *Table Meets LLM*, WSDM 2024](https://www.microsoft.com/en-us/research/wp-content/uploads/2023/12/wsdm24-SUC.pdf), zejména tabulky 2 a 3 a text na stranách 5–7: GPT‑4 podvzorek, 65,43% souhrnný výsledek celé konfigurace a rozdílný vliv vysvětlení formátu podle úlohy.

**Doporučená oprava:** „V benchmarku SUC dosáhla nejvyššího souhrnného výsledku testovaná konfigurace s HTML, vysvětlením formátu, role promptem a jednou ukázkou; výsledek se lišil podle úlohy a GPT‑4 autoři ověřovali na menším podvzorku.“ Alternativně ponechat stručnou větu, ale změnit „vyšel nejlépe“ na „patřil k nejúspěšnějším testovaným zápisům“.

**Závažnost:** drobný ([TIP]).

### 3. TabVerse je v době publikace preprint bez dokončeného recenzního řízení

**Citovaná pasáž:** „Novější benchmark TabVerse držel obsah stejný napříč HTML, Markdownem, LaTeXem a obrazem…“ a zdrojová karta „Výzkum porozumění tabulkám“.

**Problém:** Popsaná metodika a závěr odpovídají abstraktu, ale článek neříká, že jde o první verzi preprintu na arXiv. Záznam uvádí „Submitted to ARR May 2026“, nikoli přijetí do recenzovaného sborníku. Vedle publikované práce WSDM může bez tohoto dovětku působit jako stejně prověřený zdroj.

**Důkaz:** [TabVerse na arXiv](https://arxiv.org/abs/2606.09578) uvádí verzi v1 z 8. 6. 2026 a stav „Submitted to ARR May 2026“.

**Doporučená oprava:** Při prvním výskytu napsat „Novější preprint benchmarku TabVerse…“. Samotný popis výsledků může zůstat: autoři skutečně drželi obsah stejný a uvádějí obecnou převahu strukturovaného textu nad obrazem s rozdíly podle modelu, úlohy a formátu.

**Závažnost:** drobný ([TIP]).

### 4. Slib „bez nástroje a za pět minut“ není doložený a text jej sám nedodržuje

**Citovaná pasáž:** „Před publikací udělejte čtyři testy — bez nástroje a za pět minut.“ Později: „U tabulky navíc otevřete výsledný kód: očekávejte `<table>`, hlavičkové buňky `<th>` a datové buňky `<td>`.“

**Problém:** Čtyři položky checklistu sedí, ale pětiminutová délka není změřená ani doložená v rešerši. Kontrola výsledného HTML navíc vyžaduje přístup ke zdrojovému kódu nebo vývojářským nástrojům, takže absolutní „bez nástroje“ je v rozporu s navazujícím pokynem.

**Důkaz:** Vnitřní rozpor mezi citovaným H2 a následující instrukcí v auditovaném článku; žádný z uvedených primárních zdrojů dobu provedení nestanovuje. W3C pouze doporučuje zachovat vztahy při změně formátu a kontrolovat, že tabulka není oříznutá: [W3C Tables — Tips and Tricks](https://www.w3.org/WAI/tutorials/tables/tips/).

**Doporučená oprava:** Změnit nadpis například na „Před publikací udělejte čtyři rychlé testy“ nebo „Čtyři testy pohledem a jedna kontrola HTML“. Konkrétní čas ponechat jen tehdy, pokud byl postup skutečně opakovaně změřen.

**Závažnost:** drobný ([TIP]).

### 5. Odkaz na WCAG 2.1 funguje, ale pro článek z roku 2026 není nejaktuálnější

**Citovaná pasáž:** „[WCAG 1.3.1 – informace a vztahy](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships)“.

**Problém:** Citovaný požadavek je věcně správný a ve WCAG 2.2 se nezměnil, takže nejde o neplatný ani chybný zdroj. W3C však v roce 2026 výslovně doporučuje používat nejnovější verzi WCAG; pro aktuální článek je vhodnější odkaz na WCAG 2.2.

**Důkaz:** [W3C — WCAG 2 Overview](https://www.w3.org/WAI/standards-guidelines/wcag/) uvádí, že WCAG 2.0, 2.1 i 2.2 zůstávají standardy, starší kritéria jsou v novější verzi zachována a W3C doporučuje používat nejnovější verzi. Aktuální cíl je [WCAG 2.2, SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html).

**Doporučená oprava:** Změnit pouze cílovou URL z `/WCAG21/` na `/WCAG22/`; text odkazu může zůstat.

**Závažnost:** drobný ([TIP]).

## Ověření hlavních tvrzení bez nálezu

- **Google:** Oficiální průvodce skutečně doporučuje organizaci pro čtenáře pomocí odstavců, sekcí a nadpisů; sémantické HTML označuje za vhodnou praxi pro čitelnost a pomocné technologie. Současně říká, že není potřeba nové strojově čitelné soubory, „AI text files“, zvláštní markup, Markdown ani přepisování textu speciálně pro generativní vyhledávání. Splnění požadavků nezaručuje indexaci ani zobrazení. Článek tato omezení zachovává. [Google — Optimizing your website for generative AI features](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).
- **W3C a HTML tabulky:** `<th>`, `<td>`, `<caption>`, `scope`, `id` a `headers` jsou popsány správně s výjimkou zobecnění v nálezu 1. W3C potvrzuje, že pomocné technologie využívají vztahy mezi hlavičkami a buňkami jako kontext, nedoporučuje tabulky pro layout, doporučuje dělit zbytečně složité tabulky a na malých obrazovkách tabulku neoříznout; vodorovně posuvný obal je jedna z přípustných možností. [W3C Tables Tutorial](https://www.w3.org/WAI/tutorials/tables/), [W3C Tips and Tricks](https://www.w3.org/WAI/tutorials/tables/tips/).
- **Seznamy:** MDN skutečně uvádí, že u `<ol>` je pořadí významové, a přímo navrhuje test prohozením položek; pokud se význam nezmění, lze použít `<ul>`. [MDN `<ol>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ol), [MDN `<ul>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ul).
- **TabVerse:** Stejný obsah napříč HTML, Markdownem, LaTeXem a vykreslenými obrázky, obecně lepší výsledky strukturovaného textu a závislost rozdílu na modelu, úloze a formátu souhlasí s abstraktem. Článek správně z výsledku nedělá tvrzení o pořadí ani citacích. [Primární preprint TabVerse](https://arxiv.org/abs/2606.09578).
- **Protidůkaz k univerzální převaze HTML:** Další publikované benchmarky neukazují jediný vítězný formát pro všechny modely a úlohy. LongTableBench nachází rozdíly podle modelu, délky a formátu; jiná studie napříč tabulkami jako obrazem a textem zdůrazňuje i vliv promptu. Auditovaný článek tuto protiváhu pokrývá větou, že rozdíl závisí na modelu a úloze, a proto nevyžaduje další opravu. [LongTableBench, Findings of EMNLP 2025](https://aclanthology.org/2025.findings-emnlp.638/), [Tables as Texts or Images, Findings of ACL 2024](https://aclanthology.org/2024.findings-acl.23/).
- **Produktové CTA:** `pack.ts` potvrzuje sedm typů stránek, samostatný návod aplikace a konečnou cenu 1 490 Kč včetně DPH. Lokální distribuční sada obsahuje devět dílčích PDF a souhrnný `pack-master-v1.pdf`; článek počet souborů netvrdí a nic s ním nezaměňuje. Název odkazu „AI SEO Wireframe Pack“ je kanonický. CTA neslibuje garantovanou citaci.

## Čísla, data, odkazy a redakční rámec

- `seoTitle` má 33 znaků, meta description 131 znaků a `answer` 51 slov. Všechny tři položky splňují limity systémového promptu; titulková fráze je vpředu a `answer` začíná přímým vymezením.
- Datum publikace i aktualizace 26. 9. 2026 odpovídá datu auditu. Datum „26. září 2026“ v příkladu je zřetelně modelová hodnota, stejně jako tarif 490 Kč a žebříček deseti nástrojů; nejsou vydávány za reálné tržní údaje.
- Všech šest externích zdrojových odkazů se otevřelo a vedlo na deklarovaný dokument. Výhrady ke stavu preprintu a verzi WCAG jsou uvedeny výše.
- Interní cíle `/blog/listicly-top-n-pro-ai/` a `/blog/pasazova-optimalizace-obsahu/` mají odpovídající obsahové soubory i slugy; `/pack/` má vlastní stránku. Dynamická blogová route generuje cesty z kolekce článků.
- FAQ nepřidává garanci citace a u obrázku rozumně připouští textový souhrn jako alternativu. Nadpisy tvoří logickou posloupnost. Název Auditu AI viditelnosti se v článku nepoužívá, takže zde nevzniká názvoslovná chyba.

Po úpravě nálezu 1 je článek z hlediska C2 připraven k publikaci; ostatní body zpřesňují status zdrojů a odstraňují snadno napadnutelné formulace.
