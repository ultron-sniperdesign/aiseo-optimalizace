1. **Střední — „páka existuje“ je pořád o chlup širší, než co je doložené**
   - **Citace:** „**Vadí vám, že se s obsahem pracuje v AI odpovědích, a návštěvnost odjinud unesete: páka existuje** a je to jeden odstavec v souboru.“
   - **Problém:** V kontextu předchozího textu je sice zřejmé, že u webů mimo program není účinek doložený, ale tahle formulace sama o sobě působí obecněji. „Páka existuje“ může čtenář přečíst jako obecné tvrzení o funkčním ovládání chování Seznamu, ne jako „Seznam to tak popisuje v partnerské nápovědě“.
   - **Návrh:** Zúžit na atribuovanou formulaci, např. „**Seznam takovou páku v partnerské nápovědě popisuje**“ nebo „**v dokumentaci k programu je tahle páka popsaná**“.

2. **Nízká — „Přesto existuje“ u Seznam-Extended lehce směšuje existenci tokenu v dokumentaci a jeho praktický rozsah**
   - **Citace:** „Dokumentace procházení o Seznam-Extended mlčí. **Přesto existuje** — jen v partnerské nápovědě.“
   - **Problém:** Větově to vychází, ale po prvním kole je to citlivé místo: nevíme nic navíc o rozsahu účinku, jen víme, že Seznam ten user-agent takto uvádí. „Existuje“ je obhajitelné jako existence dokumentovaného user-agenta, ale šlo by to říct přesněji.
   - **Návrh:** „**Přesto ho Seznam uvádí** — jen v partnerské nápovědě.“ Tím odpadne i drobný prostor pro přepálení.

3. **Nízká — drobný skluz od „v rámci Seznam AI“ k obecným „AI odpovědím“**
   - **Citace:** „Vadí vám, že se s obsahem pracuje **v AI odpovědích**…“
   - **Problém:** Citovaná dokumentace mluví konkrétně o „v rámci Seznam AI“. „AI odpovědi“ jsou sice zřejmě míněné jako zkratka, ale jsou o něco volnější než citovaný rozsah.
   - **Návrh:** Držet slovník blíž zdroji: „**v rámci Seznam AI**“ nebo „**ve funkcích Seznam AI**“.

4. **Nízká — rozhodovací sekce je použitelná, ale jedna rada implikuje měření konkrétního zdroje, které z článku nemusí být prakticky dostupné**
   - **Citace:** „Než sáhnete na robots.txt, **podívejte se do analytiky, kolik z těch ploch reálně chodí**.“
   - **Problém:** To není faktická chyba, ale může to podsouvat, že takové rozlišení je běžně dobře viditelné. Pokud Seznam tyto plochy v analytice nejsou jasně oddělitelné, rada může být méně proveditelná, než zní.
   - **Návrh:** Změkčit: „**pokud to ze své analytiky poznáte**“ nebo „**zkuste ověřit, jestli tenhle zdroj návštěvnosti umíte odlišit**“.

5. **Bez vady — čísla v článku drží pohromadě**
   - **Kontrola:**  
     - 33 = celek sedí.  
     - 1 `Seznam-Extended`, 2 `SeznamBot`, 16 aspoň jeden zahraniční AI robot, 17 žádný ze sledovaných AI robotů, 9 webů se šesti a více roboty — navzájem se nebije.  
     - Výčet robotů: Bytespider 13, GPTBot 11, Amazonbot 11, ClaudeBot 10, Google-Extended 9, PerplexityBot 8, anthropic-ai 6, CCBot 6 — nic tu aritmeticky neodporuje souhrnům.
   - **Návrh:** Bez zásahu.

6. **Bez vady — frontmatter a tělo jsou už v souladu**
   - **Kontrola:** Titulek, description, answer, FAQ i shrnutí konzistentně říkají:
     - Seznam to **uvádí v partnerské nápovědě**,
     - **není to v dokumentaci procházení**,
     - **mimo službu/program není účinek upřesněný**.
   - **Návrh:** Bez zásahu.

7. **Bez vady — Seznamova čísla o vlastním programu jsou dostatečně oddělená jako jeho tvrzení**
   - **Citace:** „Jsou to **údaje provozovatele o vlastní službě, neověřené třetí stranou**, takže je tu nechávám jako jeho tvrzení…“
   - **Posouzení:** Tohle je přesně ten typ vymezení, který brání přebírání marketingových tvrzení jako faktu.
   - **Návrh:** Bez zásahu.

8. **Bez vady — článek už nepodsouvá neměřené chování Seznamu**
   - **Citace:** „**měřím konfiguraci v robots.txt, ne chování Seznamu**“, „**Netestoval jsem, jestli a jak `Seznam-Extended` respektuje**“, „**Nemáme doklad, že by zákaz pro Seznam-Extended ovlivnil běžnou indexaci pod SeznamBotem**“.
   - **Posouzení:** Hlavní riziko z prvního kola je ve většině textu zvládnuté dobře. Autor drží hranici mezi dokumentací, vlastním měřením a nedoloženými dopady.
   - **Návrh:** Bez zásahu.

**Verdikt:**  
Výsledek je výrazně lepší a hlavní problém z prvního kola je z většiny opravený. Nevidím zásadní přestřel, čísla i vnitřní konzistence sedí. Zbyly jen **2–3 drobné formulace**, kde by stálo za to ještě o půl kroku víc držet atribuovaný a úzký rozsah („Seznam to popisuje“ místo „páka existuje“, „v rámci Seznam AI“ místo obecných „AI odpovědí“). Jinak je text v aktuální podobě **publikovatelný**.