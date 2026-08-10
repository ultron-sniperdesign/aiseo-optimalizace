1. **Střední: titulek je na hraně zobecnění vzorku**
   - **Citace:** `title: "Nejčastěji blokovaný AI robot v Česku není GPTBot"` a H1 `## Nejčastěji blokovaný AI robot v Česku není GPTBot`
   - **Problém:** Data jsou z **33 českých zpravodajských a oborových webů**, navíc nenáhodný ruční vzorek. Formulace „v Česku“ je čtivá, ale sama o sobě zní obecněji, než co bylo opravdu změřeno. V těle je to sice limitované dobře („V mém vzorku…“), ale titulek stojí bez té brzdy.
   - **Návrh:** Zvážil bych mírné zúžení, např.:
     - „Ve vzorku 33 českých médií je nejčastěji blokovaný AI robot Bytespider, ne GPTBot“
     - nebo kratší „V českých médiích z mého vzorku není nejčastěji blokovaný GPTBot“

2. **Nízká: drobný rozpor v dataci měření**
   - **Citace:** „Soubory jsem stáhl **9. srpna 2026** (33 ze 33); 10. srpna jsem k tomu doověřoval jen dostupnost dokumentace provozovatelů.“
   - **vs.** „Jeden odečet, **9. a 10. srpna 2026**.“
   - **Problém:** Není to věcně velký problém, ale první formulace říká, že samotný odečet robots.txt proběhl 9. 8. a 10. 8. už jen dokumentace. Druhá formulace „jeden odečet, 9. a 10. srpna“ to lehce rozmývá.
   - **Návrh:** V limitech sjednotit na něco jako:
     - „Jeden odečet robots.txt proběhl 9. srpna 2026; 10. srpna jsem jen doověřoval dokumentaci provozovatelů.“

3. **Nízká: jedno místo ještě lehce tlačí Bytespider do horší pozice, i když už opatrně**
   - **Citace:** „U většiny robotů z té tabulky víte, co za nimi stojí a co z toho máte. Perplexity nebo ChatGPT vás v odpovědi mohou citovat a poslat vám návštěvníka. Google-Extended a Applebot-Extended jsou pojmenované přepínače, kterými se odděluje trénování od vyhledávání. **U Bytespidera je to méně přehledné.**“
   - **Problém:** Není to už nepodložené obvinění a navazující brzda tam je. Ale tahle pasáž pořád lehce vede čtenáře k dojmu „ostatní mají jasnou hodnotu, Bytespider ne“. To je spíš interpretace než výsledek měření robots.txt.
   - **Návrh:** Pokud chceš být úplně čistý vůči tomu, co bylo změřeno, šlo by zjemnit na:
     - „U Bytespidera jsem veřejně nenašel stejně přímé podklady k ověření identity ani zjevnou plochu, kde by citoval a odkazoval — což neznamená, že neexistují.“

4. **Bez nálezu: hlavní riziko „nenašel jsem“ → „neexistuje“ je v zásadě opravené**
   - **Citace:** 
     - `answer`: „Na rozdíl od OpenAI, Anthropicu, Perplexity, Googlu a Applu jsem u něj ale nenašel veřejný oficiální seznam IP rozsahů.“
     - FAQ: „Netvrdím, že neexistuje ani že ověřit nejde jinak — jen že tuhle cestu jsem nenašel.“
     - Insight: „**Tvrdím jen, že jsem to na obvyklých místech nenašel.**“
   - **Hodnocení:** Tohle je teď zvládnuté správně. Autor už netvrdí víc, než změřil.

5. **Bez nálezu: tvrzení třetích stran jsou oddělená dostatečně jasně**
   - **Citace:** „Napříč zdroji třetích stran se opakují dvě tvrzení…“ + „**Ani jedno jsem neověřoval a nepodávám to jako fakt.**“
   - **Hodnocení:** Jasné oddělení od vlastního měření. Tady nevidím problém.

6. **Bez nálezu: čísla sedí**
   - **Citace / kontrola:**
     - Bytespider **13**
     - GPTBot **11**
     - Google-Extended **9**
     - bez pravidla pro sledované roboty **17 z 33**
     - provozovatelů s nalezeným veřejným oficiálním seznamem IP rozsahů **5**
   - **Hodnocení:** V článku, FAQ i stats jsou tato čísla konzistentní. Uživatel zmiňuje i **33, 13, 11, 17, 9**; to sedí. Navíc FAQ správně uvádí i další pořadí a nikde jsem nenašel číselný rozpor.

7. **Bez nálezu: frontmatter vs. tělo je srovnané**
   - **Citace:** `description`, `answer`, `stats`, `faq` i tělo článku všude drží stejnou logiku: Bytespider je nejčastější ve vzorku, u ByteDance autor **nenašel veřejný oficiální seznam IP rozsahů**, ale netvrdí, že neexistuje.
   - **Hodnocení:** Vnitřní rozpory už nevidím.

## Verdikt

Druhé kolo dopadlo dobře. Hlavní problém z prvního auditu — překlopení „nenašel jsem“ do „neexistuje / nejde ověřit“ — je **prakticky opravený**. Text už většinou nepřekračuje to, co autor skutečně změřil, a cizí tvrzení jsou oddělená korektně.

Zbyl mi v podstatě jen **jeden věcnější redakční problém**: titulek „v Česku“ je o něco širší, než unese nenáhodný vzorek 33 médií. To bych upravil. Ostatní jsou už jen drobnosti formulace a konzistence datace.