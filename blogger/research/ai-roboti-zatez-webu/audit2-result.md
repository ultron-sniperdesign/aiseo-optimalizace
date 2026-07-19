[BLOKER] **Článek po odečtení cizích čísel stojí hlavně na jedné větě: „dívejte se na vlastní poměr“. To je málo.**  
**Citace:** „Tady je ta prakticky nejužitečnější novinka. Cloudflare od července 2026 nabízí přehled…“ / „Kdo Cloudflare nepoužívá, dostane se ke stejné informaci ze serverových logů, jen pracněji.“  
**Proč:** Pro majitele e-shopu je jádro otázky „co mám teď udělat“. Tady se dozví, že číslo existuje, ale ne co s ním dál: kde přesně ho v Cloudflare hledat, jaké období zvolit, s čím ho porovnat, kdy číslo řešit a kdy ne. Bez toho je to pořád spíš komentář k Cloudflare než užitkový analysis článek.  
**Konkrétní návrh:** Rozšířit sekci „Jak zjistit svoje číslo“ na hlavní praktický blok článku. Minimálně:
- 3–5 kroků „otevřete / najděte / vyberte 30 dní / podívejte se po platformách / porovnejte trend“  
- krátké „jak číslo číst“: nízké / vysoké samo o sobě nic nerozhoduje, sledujte hlavně rozdíly mezi platformami a vývoj v čase  
- jednoduchý akční závěr: „pokud některá platforma dlouhodobě bere hodně a neposílá nic, otevřete si rozhodovací rámec v článku X; pokud Cloudflare nemáte, požádejte správce o výpis z logů za 30 dní“

---

[WARNING] **Sekce s cizími čísly má víc prostoru než sekce s vlastním měřením, i když sama říká, že cizí čísla rychle stárnou.**  
**Citace:** celá tabulka + dvě navazující sekce „Ta čísla stárnou rychleji…“ a „Většina procházení není o vyhledávání“ vs. krátká sekce „Jak zjistit svoje číslo“.  
**Proč:** Vnitřní priorita je převrácená. Článek správně tvrdí, že globální čísla jsou jen „řádový obrázek trhu“ a že rozhodovat se má podle vlastních dat. Jenže největší plochu věnuje právě tomu, co nemá rozhodovat. To oslabuje užitek i logiku.  
**Konkrétní návrh:** Zkrátit interpretaci tabulky na minimum a přesunout těžiště článku:
1. co metrika znamená,  
2. proč sama o sobě nerozhoduje,  
3. jak zjistit vlastní číslo,  
4. co udělat podle výsledku.  
Tabulku nechat jako kontext, ne jako osu textu.

---

[WARNING] **Pro českého majitele e-shopu chybí převod do obchodního rozhodnutí.**  
**Citace:** „Je to vstup do rozhodnutí, ne rozhodnutí samo. Záleží, čím si vyděláváte.“ / „Co s ním uděláte, je pak obchodní rozhodnutí.“  
**Proč:** To je pravda, ale nedotažená. Čtenář nedostane ani základní rámec, podle čeho rozhodnutí dělat. Jen se odkáže jinam. Navázání na starší články je v pořádku, ale tady musí zůstat vlastní hodnota.  
**Konkrétní návrh:** Přidejte krátký blok typu „Kdy je to pro e-shop problém“:
- pokud prodáváte přes organiku a obsah je snadno přepisovatelný, sledujte hlavně platformy s vysokým poměrem a nízkým přínosem  
- pokud je váš obsah podpůrný a hlavní prodej běží jinde, nemusí vás vysoký poměr pálit stejně  
- pokud se číslo skokově mění, neblokujte hned; nejdřív ověřte trend za 30 dní  
Tohle nejsou duplicity starších článků, ale základní užitkový most.

---

[DOPORUČENÍ] **Tabulka pěti platforem je čitelná, ale užitečnost je omezená a ikony matou významem.**  
**Citace:** řádky s ikonami „🟢 / 🟡 / 🟠 / 🔴 / ⚫“  
**Proč:** Barevné kódy implikují hodnotící škálu „dobré–špatné“, ale článek současně říká, že vysoký poměr není automaticky důvod k blokaci. Černá navíc působí jako „nejhorší“, aniž by bylo vysvětleno, co přesně barva znamená. Pro netechnického čtenáře to bude číst jako semafor, ne jako neutrální seznam.  
**Konkrétní návrh:**  
- ikony odstranit úplně, nebo nahradit neutrální značkou  
- případně přidat sloupec „Řádově“ / „Poznámka“ místo barev  
- jestli chcete zvýšit užitek, doplňte k tabulce jednu interpretační větu na řádek jen u extrémů, ne jen seznam čísel

---

[DOPORUČENÍ] **Nadpisy H2 jsou místy moc obecné a málo skenovatelné pro člověka, který hledá odpověď na konkrétní otázku.**  
**Citace:** „Metrika, která to říká jedním číslem“, „Ta čísla stárnou rychleji, než byste čekali“, „Kde má tenhle článek hranice“, „Co si odnést“  
**Proč:** Jsou stylisticky slušné, ale u analysis článku pro majitele webu by měly víc odpovídat na dotaz. Teď jsou spíš časopisecké než servisní.  
**Konkrétní návrh:** Přepsat na konkrétnější:
- „Co znamená poměr procházení k návštěvám“  
- „Proč se na globální čísla nedá spoléhat“  
- „Jak zjistit vlastní číslo v Cloudflare“  
- „Kdy vysoký poměr řešit a kdy ne“  
- „Co tenhle článek neřeší“

---

[WARNING] **Sekce „Jak zjistit svoje číslo“ je nejsilnější část článku, ale působí odbytě.**  
**Citace:** „Cloudflare od července 2026 nabízí přehled…“ / „Kdo Cloudflare nepoužívá, dostane se ke stejné informaci ze serverových logů, jen pracněji.“  
**Proč:** To je prakticky jediná část, kde čtenář může něco udělat hned. Přesto má jen pár vět, žádný postup, žádné varování před špatným čtením a žádný mini-checklist. To je promarněné.  
**Konkrétní návrh:** Přidejte aspoň:
- „Začněte 30 dny, ne 24 hodinami“  
- „Rozpadněte si číslo po platformách“  
- „Sledujte trend, ne jen jeden extrémní den“  
- „Porovnejte, jestli se změna potkala se změnou pravidel nebo blokace“  
- „Bez Cloudflare: chtějte od správce logy podle user-agentů / IP reputace“  
Nemusíte zacházet do admin-detailu, ale dejte čtenáři použitelný postup.

---

[WARNING] **Text místy přehrává dramatický tón, který sám kritizuje.**  
**Citace:** „O zátěži z AI robotů se mluví hlavně strašidelně“ / „Obsah odebraný na trénink zmizí do modelu“ / „rychleji, než stihnete napsat strategii“  
**Proč:** Není to vyloženě bulvární, ale občas to tlačí na efekt. U publika, které je „spíš netech“, je lepší věcné uklidnění než další obrazná dramatičnost.  
**Konkrétní návrh:** Uhladit formulace:
- „mluví se hlavně přes objem požadavků a zátěž“ místo „strašidelně“  
- „nevrací se jako návštěva“ místo „zmizí do modelu“  
- „mění se rychle“ místo „rychleji, než stihnete…“

---

[KOSMETIKA] **„Sedm tisíc násobek“ je jazykově slabé.**  
**Citace:** „Rozdíl mezi horním a dolním koncem tabulky je zhruba sedm tisíc násobek.“  
**Proč:** Kostrbaté.  
**Konkrétní návrh:** „zhruba sedmitisícinásobný rozdíl“ nebo lépe „zhruba sedm tisíckrát“.

---

[DOPORUČENÍ] **Sekce „Časté chyby“ opakuje to, co už text řekl, ale nepřidává nový užitek.**  
**Citace:** „Brát globální čísla jako svoje“, „Pracovat s číslem z loňska“…  
**Proč:** Jako rekapitulace funguje, ale v článku, který už má problém s vlastní přidanou hodnotou, zabírá místo bez nového obsahu.  
**Konkrétní návrh:** Buď ji zkrátit na 2 body, nebo nahradit blokem „Co udělat dnes“:
1. zjistěte vlastní číslo,  
2. podívejte se na 30 dní po platformách,  
3. u extrémů rozhodněte, jestli chcete trénink / vyhledávání / agenty pouštět zvlášť.

---

[WARNING] **CTA je obsahově napojené, ale pořád trochu přilepené, protože předtím chybí mezikrok „kdy už to sami nevyhodnotíte“.**  
**Citace:** „Nevíte, co vám AI kanál nese a co za to platíte? AI SEO audit…“  
**Proč:** Není to letákové přepnutí, ale článek čtenáře nedovede k situaci, kdy si řekne „teď už audit dává smysl“. Chybí spouštěč: kdy nestačí jen podívat se do Cloudflare a kdy už je třeba audit.  
**Konkrétní návrh:** Před CTA vložit jednu větu typu: „Jestli v číslech vidíte rozdíly mezi platformami, ale nevíte, co blokovat, co ponechat a jak to propsat do měření, pak dává audit smysl.“ Tím CTA přestane viset ve vzduchu.

---

[BLOKER] **Článek se brání tomu být jen převyprávěná studie, ale ještě z ní úplně neutekl.**  
**Citace:** hlavní osa textu je: definice metriky → tabulka hodnot → změny v čase → 80 % trénink → novinka v Cloudflare.  
**Proč:** To je pořád v zásadě lineární reprodukce zdroje s jedním poctivým dovětkem „změřte si sebe“. Vlastní redakční práce tu je, ale zatím ne dostatečná na samostatně silný analysis článek. Vlastní myšlenka musí být víc než metafora „směnný kurz“.  
**Konkrétní návrh:** Přidejte vlastní redakční rámec, který ze studie udělá užitek:
- „na co se dívat nejdřív“  
- „jak neudělat špatný závěr“  
- „jak číslo zapojit do rozhodnutí o blokaci / povolení“  
Bez toho je to pořád hlavně převyprávěné cizí zjištění.

---

[KOSMETIKA] **„Řekněme rovnou“ a „Tady je ta prakticky nejužitečnější novinka“ jsou výplňové obraty.**  
**Citace:** uvedené věty  
**Proč:** Zdržují a znějí mluveněji, než je potřeba.  
**Konkrétní návrh:** Zkrátit:
- „Tenhle článek není o výkonu serveru ani o nákladech na hosting.“  
- „Nejpraktičtější novinka je přehled vlastního poměru v Cloudflare.“

---

[DOPORUČENÍ] **Vnitřní logika je těsně na hraně: text správně říká, že čísla rychle stárnou, ale stále na nich staví většinu argumentu.**  
**Citace:** „jakékoli číslo v článku… má omezenou trvanlivost“ vs. rozsah a důraz na konkrétní hodnoty v tabulce  
**Proč:** Není to přímý rozpor, ale působí to tak. Pokud chce článek obstát, musí konkrétní čísla sloužit jen jako ilustrace principu, ne jako jeho hlavní nosič.  
**Konkrétní návrh:** Ubrat detailní interpretaci jednotlivých platforem a víc zdůraznit trvalejší závěr: „platformy se liší řádově, trend se mění rychle, proto měřte vlastní poměr a rozhodujte po kategoriích robotů.“

---

**VERDIKT: OPRAVIT PŘED PUBLIKACÍ**

**4 prioritní zásahy:**
1. **Rozšířit „Jak zjistit svoje číslo“ do praktického návodu** a udělat z něj hlavní přínos článku.  
2. **Přidat krátký rozhodovací rámec pro majitele e-shopu**: kdy číslo řešit, kdy ne, co z něj vyvozovat.  
3. **Zmenšit dominanci tabulky cizích dat** a odstranit/neutralizovat barevné ikony, které podsouvají hodnotící škálu.  
4. **Přepsat H2 na konkrétnější, servisní nadpisy** a pročistit dramatizující/vatové formulace.