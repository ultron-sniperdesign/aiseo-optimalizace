**BLOKER**  
**Citace:** „Bez `legalName` nemá stroj jak spojit obchodní název s tím zapsaným v rejstříku…“  
**Proč:** To je silnější tvrzení, než unesou zdroje. `legalName` nese oficiální název, ale článek neprokazuje, že bez něj „nemá jak“. Vazba může být odvoditelná i z textu stránky, patičky, kontaktů, registrů, `sameAs` apod.  
**Oprava:** Změnit na: „Bez `legalName` na webu chybí přímý strojově čitelný údaj o oficiálním názvu; vazba pak může být hůř jednoznačná.“

**BLOKER**  
**Citace:** „Organization je jedno z přímých míst, kde se dá strojově vyjádřit vazba mezi značkou a právním subjektem.“  
**Proč:** Titulek slibuje „identita značky, ne stroj na citace“, ale závěr znovu podsouvá širší efekt identitního sjednocení, aniž by článek řekl, co z toho čtenář reálně získá mimo logo a administrativní údaje. Zůstává mezera: proč to dělat, když ne kvůli citacím?  
**Oprava:** Doplnit tvrdé vymezení přínosu: „Praktický přínos, který je doložený, je hlavně lepší strojově čitelný popis organizace pro Google a některé jeho prvky, ne prokazatelný dopad na AI citace ani obecnou viditelnost.“

**VAROVÁNÍ**  
**Citace:** „Technicky je to jedna stránka a jeden blok, tedy jedna z jednodušších úprav…“  
**Proč:** Jemné prodávání implementace. Zjednodušuje realitu: na mnoha webech je problém s pluginy, duplicitami, napojením na existující schema, více entitami, franšízami, více pobočkami. Čtenář nedostává podmínky, kdy to jednoduché není.  
**Oprava:** Přidat podmínku: „U jednoduchého firemního webu je to obvykle malá úprava; složitější bývá tam, kde schema generuje plugin, web má více entit nebo poboček.“

**VAROVÁNÍ**  
**Citace:** „Jak vás AI nástroje dnes popisují, zjistíte testem viditelnosti.“  
**Proč:** Závěr nevede k rozhodnutí o Organization, ale k dalšímu kroku v prodejním trychtýři. Po textu, který říká „dělejte to kvůli identifikaci“, se pozornost přesouvá na měření AI viditelnosti, které s hlavním rozhodnutím souvisí jen volně.  
**Oprava:** Zakončit rozhodnutím, ne CTA: „Pokud máte rozdíl mezi značkou a právním názvem nebo nejasné profily, doplňte blok. Pokud se názvy kryjí a nic veřejně nepropojujete, stačí minimum.“

**VAROVÁNÍ**  
**Citace:** „České návody kolem tohohle typu slibují hodně…“ / „Kdo vám za tohle slibuje citace v AI…“  
**Proč:** Budování důvěry kritikou neurčité konkurence. Bez konkrétních příkladů je to rétorický protivník, na jehož pozadí autor vypadá střízlivěji. Čtenáři to moc nepomáhá.  
**Oprava:** Zkrátit nebo nahradit neutrálně: „Často se mu připisuje vliv na AI citace, ale pro ten teď nemáme oporu.“

**VAROVÁNÍ**  
**Citace:** „IČO → `taxID`… Obhajitelné, ale ne doslovné.“  
**Proč:** Chybí zásadní námitka čtenáře: co když `taxID` naopak není vhodné pro IČO, protože definice mluví o daňovém/fiskálním ID? Článek uvádí mapování, ale neřeší alternativu „raději nevyplňovat než mapovat nejistě“.  
**Oprava:** Doplnit rozhodovací větu: „Pokud nechcete používat výkladové mapování, je bezpečnější `taxID` vynechat než do něj zapisovat hodnotu, u níž si nejste jistí významem.“

**VAROVÁNÍ**  
**Citace:** „stačí minimum: název, url, logo, kontakt. Zbytek nic nepřidá.“  
**Proč:** „Nic nepřidá“ je zbytečně absolutní a nevyplývá ze zdrojů. Může přidat interní konzistenci nebo budoucí použitelnost, jen to není nutné.  
**Oprava:** „…zbytek pro tenhle jednoduchý případ obvykle nepřináší jasný praktický přínos.“

**DOPORUČENÍ**  
**Citace:** „Plošné opakování napříč webem z té rady neplyne.“ / chyba „Blok na každé stránce“  
**Proč:** Tohle je korektní jako opatrnost, ale článek z toho dělá větší problém, než zdroje nesou. Chybí čtenářské rozhodnutí: mám to nechat být, když to plugin dává všude a je to správně?  
**Oprava:** Přidat jasné pravidlo: „Je-li blok konzistentní a správný, opakování samo o sobě není doložený problém; řešte hlavně duplicity, rozpory a ztrátu kontroly nad obsahem.“

**DOPORUČENÍ**  
**Citace:** celý blok „Co o vlivu na citace víme…“  
**Proč:** Na titulkový slib je část delší, než potřebuje být. Čtenář už po dvou odstavcích ví, že citace nejsou doložené. Zbytek opakuje totéž s různými oporami.  
**Oprava:** Zkrátit na polovinu a nechat jednu větu o Search Engine Land + jednu o Search Atlas limitech.

**DOPORUČENÍ**  
**Citace:** „Co dát do `sameAs`, řeší profil na Firmy.cz… Wikipedii a Wikidatech…“  
**Proč:** Odbočka pryč od rozhodnutí. Článek má být návod k Organization, ne rozcestník na další identitní obsah.  
**Oprava:** Nechat jen stručné pravidlo v článku; interní odkazy přesunout pod příklad jako „související“.

**DOPORUČENÍ**  
**Citace:** „Pro pořádek jedna vlastní: tenhle web má…“  
**Proč:** Sebekritika tu neřeší čtenářův problém. Spíš zvyšuje dojem autenticity autora než užitek textu.  
**Oprava:** Vyhodit.

**DOPORUČENÍ**  
**Citace:** JSON příklad se `taxID`, `vatID`, `sameAs` na Firmy.cz a Wikidatech  
**Proč:** Příklad vypadá normativněji, než text připouští. U výkladového mapování a volitelných profilů by měl být příklad označen jako ilustrativní minimum vs. rozšířená varianta.  
**Oprava:** Rozdělit na „minimum“ a „rozšířený příklad“, nebo explicitně dopsat: „Ukázka kombinuje běžné a volitelné položky.“

**DOPORUČENÍ**  
**Chybějící námitka:** „Jak poznám, že změna k něčemu byla?“  
**Proč:** Článek říká, že citace nečekat, ale nedává způsob vyhodnocení přínosu samotného Organization mimo validátor a kontrolu loga.  
**Oprava:** Dopsat 2–3 ověřitelné signály: správné načtení v Rich Results/Test/validatoru, konzistence jednoho `@id` napříč webem, případně kontrola loga/knowledge panelu, ne AI citace.