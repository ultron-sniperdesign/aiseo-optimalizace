1. **Střední — těžiště je už v zásadě vyvážené, ale jeden výrok v závěru ho zbytečně znovu překlápí k „reporty first“**
   - **Citace:**  
     - vyváženě: „**Většině webů se vyplatí nejdřív vyčerpat to, co je zdarma** — oba oficiální reporty a ruční kontrolu. **Když ale od začátku hlídáte desítky dotazů… dává smysl nasadit tracker rovnou.**“  
     - méně vyváženě: „**Pořadí je jednoduché: nejdřív vyčerpejte bezplatnou úroveň, teprve když vám to přeroste přes hlavu, přejděte na placený nástroj.**“
   - **Proč je to nález:**  
     Hlavní část článku už drží opravenou podmíněnou logiku a úrovně 2–3 jsou výrazně silnější než v prvním kole. Jako celek to už funguje jako přehled nástrojů, ne jako článek o dvou reportech. Ale věta v sekci **Kdy začít platit** si odporuje s dřívějším „když od začátku hlídáte desítky dotazů, nasaďte tracker rovnou“. Tj. těžiště je skoro srovnané, jen v jednom místě se text vrací k univerzálnímu pořadí.
   - **Návrh:**  
     Přepsat závěrečnou větu do stejné podmíněné logiky, např.:  
     „**Ve většině případů nejdřív vyčerpejte bezplatnou úroveň; pokud ale od začátku potřebujete sledovat desítky dotazů, konkurenci a více platforem, dává smysl nasadit tracker rovnou.**“

2. **Nízká — bezplatné reporty už článek neshazuje; jen formulace „teprve pak ručně“ může působit příliš sekvenčně**
   - **Citace:**  
     - „**Tahle úroveň je od letoška podstatně silnější, než bývala. Začněte tím, co dávají sami provozovatelé…**“  
     - „**Teprve pak ručně: projděte menší sadu zákaznických dotazů v ChatGPT a Perplexity…**“  
     - „**Ani jeden report není kompletní pohled… ani jeden nepokrývá ChatGPT a Perplexity.**“
   - **Proč je to nález:**  
     Autor se do opačného extrému podle mě nepřeklopil. Reporty jsou popsány jako užitečný základ, ne jako zbytečnost. Současně jsou jejich limity vysvětlené věcně. Jediná drobnost: „teprve pak ručně“ může vyznít, že ruční kontrola je až druhotná formalita, přestože u ChatGPT a Perplexity je to na bezplatné úrovni pořád jediný zdroj.
   - **Návrh:**  
     Zjemnit na něco jako:  
     „**K tomu doplňte ruční kontrolu…**“  
     místo „Teprve pak ručně“.

3. **Střední — drobný vnitřní rozpor mezi `answer` a částí „Kdy začít platit“**
   - **Citace:**  
     - `answer`: „**Většině webů dává smysl začít dvěma bezplatnými oficiálními reporty… ChatGPT ani Perplexity vlastní report nemají — tam zbývá ruční kontrola, nebo rovnou placený tracker.**“  
     - tělo: „**Pořadí je jednoduché: nejdřív vyčerpejte bezplatnou úroveň…**“
   - **Proč je to nález:**  
     Frontmatter je už opravený dobře: připouští dvě legitimní startovní cesty. Tělo v jedné části znovu tvrdí jen jednu. Není to velký rozpad článku, ale je to přesně typ drobné nekonzistence, která po opravách zůstala.
   - **Návrh:**  
     Sjednotit dikci podle `answer`, ne obráceně.

4. **Nízká — datace nyní sedí**
   - **Citace:**  
     - frontmatter: `updated: "2026-08-10"`  
     - úvod: „**Stav je k srpnu 2026**“  
     - checklist: „**poslední ověření podle dokumentace: červenec 2026**“  
     - otevřená oprava: „**k 10. 8. 2026**“
   - **Proč je to nález / spíš potvrzení:**  
     Tady nevidím problém. Je zřejmé, co je stav článku a co je poslední ověření konkrétního seznamu. To je interně konzistentní.
   - **Návrh:**  
     Bez nutné opravy.

5. **Střední — stat „0 platforem“ je významově správně, ale formulace je lehce matoucí**
   - **Citace:**  
     - `stats`: „**0 platforem — pokrývá ChatGPT i Perplexity zdarma — na ty vlastní oficiální report neexistuje**“
   - **Proč je to nález:**  
     Po věcné stránce to sedí: žádná bezplatná oficiální platforma tu dvojici nepokrývá. Problém je čitelnost. Na první pohled to může znít jako „na trhu je nula platforem“, nebo „žádná platforma nic nepokrývá zdarma“. Čtenář si musí domyslet, že jde specificky o **bezplatné oficiální reporty** a konkrétně o kombinaci **ChatGPT + Perplexity**.
   - **Návrh:**  
     Zpřesnit label, např.:  
     - „**0 oficiálních reportů zdarma**“ / „**nepokrývá zároveň ChatGPT i Perplexity**“  
     nebo  
     - „**ChatGPT + Perplexity zdarma: 0 oficiálních reportů**“.

6. **Nízká — čísla v `stats` už dávají větší smysl než předtím, ale „4 typy dat“ je lehce zkratkovité vůči textu**
   - **Citace:**  
     - `stats`: „**4 typy dat — imprese, zmínky, citace a vývoj v čase — každou vrstvu dává jiný nástroj**“  
     - FAQ: „**Tři hlavní věci: podíl zmínek, citace a vývoj v čase… Některé sledují i sentiment…**“
   - **Proč je to nález:**  
     Není to vyložený rozpor, protože `stats` skládá čtyři datové vrstvy napříč free/paid ekosystémem, zatímco FAQ mluví o „třech hlavních věcech“ u AI SEO nástrojů. Ale vedle sebe to může působit, že jednou jsou hlavní věci tři a jindy čtyři.
   - **Návrh:**  
     Buď nechat být, nebo lehce sladit slovník, např. v FAQ:  
     „**Nejčastěji čtyři vrstvy dat: imprese, podíl zmínek, citace a vývoj v čase…**“  
     Pokud chcete zachovat stávající FAQ, aspoň bych `stats` chápal spíš jako marketingovou zkratku než přesné členění.

## Verdikt

Výsledek je **výrazně lepší a ve druhém kole obstojí**. Článek už funguje jako **přehled nástrojů podle úrovní**, ne jako text převážený k dvojici oficiálních reportů. Bezplatné reporty nejsou neshazované; jsou popsané jako silný základ s jasně pojmenovanými limity. Největší zbytek problému je **jedna návratová věta k univerzálnímu „nejdřív zdarma, pak placené“**, která mírně odporuje opravenému hlavnímu pravidlu a `answer`. To bych ještě sjednotil. Stat **„0 platforem“** je věcně obhajitelný, ale stylisticky bych ho zpřesnil. Jinak bez větších nových vad.