**VERDIKT: OPRAVIT PŘED PUBLIKACÍ**

Níže jsou konkrétní nálezy k tomuto článku.

---

## 1) [BLOCKER] Zakázaný anglicismus „hub-and-spoke“ v těle článku

**Citace:**  
> „Na tom stojí i hub-and-spoke architektura, kterou popisuje [jak strukturovat pilířový obsah]...“

**Problém:**  
V zadání pro audit je sice u tohoto konkrétního článku „hub-and-spoke“ uvedeno mezi povolenými technickými názvy, ale globální brand pravidla říkají nahrazovat „hub-and-spoke“ za **„prolinkování mezi stránkami“**. Tady navíc termín není vysvětlený a působí zbytečně cize. U webu s edukativním tónem je to slabé místo.

**Návrh opravy:**  
Nahradit například za:  
- „Na tom stojí i **prolinkování mezi stránkami kolem pilířového tématu**...“  
nebo  
- „Na tom stojí i **pilířová struktura s navazujícími články**...“

---

## 2) [BLOCKER] Nepřesné tvrzení o Search Console a osiřelých stránkách

**Citace:**  
Frontmatter / howto / FAQ / checklist opakovaně:  
> „...podívejte se do Search Console na report interních odkazů. Hledejte stránky, na které neodkazuje nic nebo skoro nic.“  
> „Najdete je ... v reportu interních odkazů v Search Console.“

**Problém:**  
Tohle je věcně problematické. Search Console **není spolehlivý nástroj na identifikaci skutečně osiřelých stránek**, protože report interních odkazů pracuje jen s URL, které Google už nějak zná. Skutečně osiřelá stránka se tam často vůbec neukáže. Formulace „najdete je v reportu“ je příliš silná a může čtenáře svést k chybnému postupu.

**Návrh opravy:**  
Změnit na opatrnější a přesnější formulaci, například:  
- „Search Console pomůže najít stránky s **nízkým počtem interních odkazů**, ale **skutečně osiřelé stránky je potřeba ověřit i jinak** — například porovnáním seznamu URL z webu, sitemap a procházení webu.“  
- V FAQ u „Co je osiřelá stránka?“ doplnit, že Search Console je **jen pomocný signál**, ne úplný seznam.

---

## 3) [BLOCKER] První odstavec / `answer` není jazykově správně a definice kulhá

**Citace:**  
> „Interní prolinkování jsou odkazy mezi stránkami vlastního webu.“

**Problém:**  
Gramaticky i významově je to neobratné. „Interní prolinkování“ není totéž co „odkazy“; je to **propojování stránek pomocí interních odkazů**. V aktuální podobě definice působí neprofesionálně. Protože `answer` i první odstavec mají fungovat jako samostatná odpověď, je to zásadní vada.

**Návrh opravy:**  
Například:  
- „**Interní prolinkování je propojování stránek vlastního webu pomocí interních odkazů.** Pomáhá čtenářům, vyhledávačům i AI systémům pochopit, co spolu souvisí a které stránky jsou na webu důležité.“  

Tím se opraví definice i citovatelnost.

---

## 4) [WARNING] Přehnaně jisté tvrzení o „důležitosti“ stránek

**Citace:**  
> „Říkají vyhledávačům i AI systémům, co spolu souvisí a co je na webu důležité.“  
> „Vztahy a důležitost — struktura odkazů naznačuje, co spolu souvisí a co je na webu podstatné.“

**Problém:**  
Druhá formulace „naznačuje“ je v pořádku. První je ale výrazně jistější („říkají ... co je důležité“). U AI systémů je to už lehce za hranou doložitelnosti. Článek se jinak správně brání spekulacím o vahách; tahle věta je proti tomu zbytečně tvrdá.

**Návrh opravy:**  
Sjednotit formulaci na bezpečnější:  
- „...pomáhají vyhledávačům i AI systémům **odhadnout**, co spolu souvisí a které stránky jsou v rámci webu důležitější.“  
nebo  
- „...**naznačují souvislosti a prioritu** stránek v rámci webu.“

---

## 5) [WARNING] Tvrzení o „odkazu z těla textu“ je podané moc absolutně

**Citace:**  
> „Odkaz z těla článku nese víc kontextu než odkaz jen v menu nebo patičce.“  
> „Odkaz z odstavce nese víc kontextu než odkaz schovaný jen v patičce.“  
> „Menu a patička ... o vztahu mezi dvěma konkrétními tématy neřeknou nic navíc.“

**Problém:**  
Myšlenka je správná, ale formulace je místy příliš kategorická. Ano, odkaz v textovém kontextu obvykle nese víc sémantické informace než navigační odkaz. Ale „neřeknou nic navíc“ je přehnané — navigace stále vypovídá něco o struktuře webu a prioritách sekcí.

**Návrh opravy:**  
- „Odkaz z těla textu **obvykle nese konkrétnější kontext** než odkaz v menu nebo patičce.“  
- „Menu a patička slouží hlavně navigaci; **pro vztah mezi dvěma konkrétními tématy bývá užitečnější odkaz přímo v textu**.“

---

## 6) [WARNING] „Důležité stránky mají být pár kliků od úvodní“ je příliš zkratkovité

**Citace:**  
> „Důležité stránky mají být pár kliků od úvodní, ne zanořené hluboko“  
> „Držet důležité stránky pár kliků od úvodní.“

**Problém:**  
Jako praktická heuristika dobré. Jako faktické tvrzení je to ale příliš zjednodušené. Není univerzální pravidlo „pár kliků od homepage“; záleží na typu webu, velikosti architektury a navigaci. Lepší je mluvit o **rozumné dostupnosti z relevantních míst**, ne jen od úvodní stránky.

**Návrh opravy:**  
- „Důležité stránky by měly být **snadno dostupné z relevantních částí webu**, ne zbytečně zanořené.“  
- V checklistu ponechat měření kliků od úvodní jako orientační test, ne jako hlavní princip.

---

## 7) [WARNING] Osiřelá stránka je definována nejednotně

**Citace:**  
> „Bez odkazu je stránka osiřelá...“  
vs.  
> „Stránka, na kterou z webu neodkazuje nic nebo skoro nic.“

**Problém:**  
Tohle si protiřečí. V odbornější terminologii je osiřelá stránka typicky taková, na kterou **nevede žádný interní odkaz**. „Skoro nic“ už je jiná kategorie: slabě propojená stránka. Míchání definic snižuje přesnost.

**Návrh opravy:**  
Rozlišit dvě věci:  
- **osiřelá stránka** = nevede na ni žádný interní odkaz  
- **slabě propojená stránka** = má velmi málo interních odkazů  

A podle toho upravit howto, FAQ i checklist.

---

## 8) [WARNING] Nepřesnost u „bez odkazu je objevení těžší“

**Citace:**  
> „Bez odkazu je objevení těžší.“

**Problém:**  
Obecně pravda, ale článek by měl zmínit, že stránku lze objevit i jinak, například přes sitemapu nebo externí odkaz. Jinak to může vyznít jako „bez interního odkazu stránku nelze najít“, což není přesné.

**Návrh opravy:**  
- „Bez interního odkazu je objevení a zařazení do struktury webu obvykle těžší, i když se stránka může objevit i jinak, například přes sitemapu nebo externí odkaz.“

---

## 9) [WARNING] FAQ používá „roboti“ bez kontextu

**Citace:**  
> „Zároveň jsou cestou, po které se roboti k obsahu vůbec dostanou.“  
> „Roboti se k ní dostanou hůř...“

**Problém:**  
Brand pravidla chtějí místo „crawler/bot“ bez kontextu používat **„vyhledávací robot“**. Tady není chyba v angličtině, ale z hlediska konzistence slovníku je vhodnější přesnější termín.

**Návrh opravy:**  
Nahradit „roboti“ za:  
- „vyhledávací roboti“  
případně při první zmínce:  
- „vyhledávací roboti vyhledávačů“

---

## 10) [WARNING] Meta description je na hraně a mohl by lépe začínat klíčovým tématem

**Citace:**  
> „Interní odkazy říkají vyhledávačům i AI, co spolu souvisí. Jak psát text odkazu, jak hluboko zanořit důležité stránky a jak najít osiřelé stránky.“

**Problém:**  
Délka je ještě přijatelná, ale formulace „říkají“ je opět moc jistá. Zároveň by šla lépe zpřesnit pro cílové KW.

**Návrh opravy:**  
Například:  
- „Interní prolinkování pomáhá vyhledávačům i AI pochopit souvislosti webu. Naučte se psát text odkazu a najít osiřelé stránky.“  

To je věcně opatrnější a KW-friendly.

---

## 11) [DOPORUČENÍ] Titulek je funkční, ale nevyužívá hlavní KW úplně naplno

**Citace:**  
> `title: "Interní prolinkování pro AI: jak propojit obsah"`

**Problém:**  
Titulek je dobrý a relativně přirozený. Pro SEO by ale mohl být o něco silnější, protože hlavní KW „interní prolinkování“ je sice vepředu, ale zbytek „pro AI“ může u tutorialu působit užší, než obsah reálně je. Článek je ve skutečnosti hlavně o interních odkazech na webu obecně.

**Návrh opravy:**  
Pokud chcete vyšší shodu s KW, zvažte variantu typu:  
- „Interní prolinkování: jak propojit obsah pro SEO i AI“  
Není nutné přepisovat za každou cenu, ale stojí za zvážení.

---

## 12) [DOPORUČENÍ] Slug je srozumitelný, ale užší než obsah

**Citace:**  
> `slug: "interni-prolinkovani-pro-ai"`

**Problém:**  
Stejně jako title zúžuje téma hlavně na AI, zatímco článek je z větší části univerzální SEO tutorial o interních odkazech.

**Návrh opravy:**  
Zvážit jednodušší a přesnější slug, pokud ještě není publikováno:  
- `interni-prolinkovani`  
nebo  
- `interni-odkazy-seo`

---

## 13) [DOPORUČENÍ] Překryv s pilířovým obsahem je zatím zvládnutý, ale jedna věta ho zbytečně otevírá

**Citace:**  
> „Na tom stojí i hub-and-spoke architektura...“

**Problém:**  
Článek je jinak tematicky dobře vymezený: řeší interní odkazy prakticky, ne pilířovou strukturu obecně. Tahle věta ale zbytečně otevírá širší architekturu obsahu a může téma rozostřit.

**Návrh opravy:**  
Zachovat interní odkaz na pilíř, ale větu zúžit:  
- „Podobný princip se používá i v pilířové struktuře obsahu, kterou rozebírá samostatný článek...“

---

## 14) [KOSMETIKA] V CTA je produktové směřování splněné dobře

**Citace:**  
> „AI SEO audit za 9 990 Kč...“  
> „AI SEO Wireframe Pack za 1 490 Kč...“

**Hodnocení:**  
Tohle je v pořádku. CTA je konkrétní, navazuje na obsah článku a nejde do generického „kontaktujte nás“.  
Jen drobnost: auditní claim „najde osiřelé stránky“ by po opravě Search Console pasáže měl být také formulován přesněji, například „odhalí osiřelé a slabě propojené stránky“.

**Návrh drobné úpravy:**  
- „...najde **osiřelé a slabě propojené stránky**, slabé texty odkazů i odkazy přes přesměrování...“

---

## 15) [KOSMETIKA] Drobné jazykové uhlazení v několika místech

**Citace:**  
> „mrkněte do Search Console“  
> „co je na druhé straně, ještě než tam kdokoli klikne“

**Problém:**  
Tón je většinou věcný a srozumitelný, což je dobře. „Mrkněte“ je lehce hovorové; není to průšvih, ale u edukativního textu bych držel o něco neutrálnější styl. Druhá věta je jen trochu těžkopádná.

**Návrh opravy:**  
- „podívejte se do Search Console“ místo „mrkněte“  
- případně zkrátit některé vysvětlující věty pro vyšší citovatelnost

---

## Co je naopak dobře

- Článek se **většinou úspěšně vyhýbá spekulacím** o „síle odkazu“ a o přesném vážení interních odkazů AI systémy.  
- Dobře funguje princip **„nepřeceňujte to“** a odmítnutí magického počtu odkazů.  
- Interní odkazy v samotném článku dávají smysl a vedou na relevantní související témata.  
- CTA je konkrétní a produktové.  
- Struktura H2 je přehledná a pro tutorial vhodná.

---

# Shrnutí priorit oprav

Než článek pustit ven, opravil bych hlavně tyto 4 body:

1. **Definici v `answer` a prvním odstavci** („Interní prolinkování je...“).  
2. **Search Console a osiřelé stránky** — neslibovat, že je report spolehlivě „najde“.  
3. **Zakázaný / nevysvětlený termín `hub-and-spoke`** nahradit češtinou.  
4. **Zjemnit příliš jisté formulace** o důležitosti stránek a o nadřazenosti odkazů z textu.

Po těchto úpravách bude článek velmi blízko publikovatelnému stavu.