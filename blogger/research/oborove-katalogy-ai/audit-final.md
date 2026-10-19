# Závěrečný nezávislý audit — Oborové katalogy v AI éře

**Datum ověření:** 19. 10. 2026  
**Verdikt:** **OPRAVIT PŘED PUBLIKACÍ**

Článek má správnou strukturu, střízlivý tón, použitelnou krátkou odpověď i přesné produktové CTA. Před publikací ale musí opravit hlavní závěr o Firmy.cz a Seznam AI: přehlédl novější primární zdroj Seznamu z 15. 10. 2026, který je v přímém rozporu s článkem i rešerší.

## Samostatné posouzení

### 1. Firmy.cz jsou podle novějšího zdroje se Seznam AI propojené

**Citovaná pasáž:** „Aktuální nápověda Seznam AI ale mezi aktivními zdroji uvádí jen webový a zpravodajský index a Počasí.cz. […] Z veřejných podkladů lze spolehlivě tvrdit jen toto: profil Firmy.cz má smysl kvůli službám Seznamu, ale k 19. říjnu 2026 ho nelze označit za potvrzený aktivní zdroj odpovědí Seznam AI.“ Stejný závěr opakuje checklist, FAQ a `research.md`.

**Problém:** Článek staví závěr na obecné nápovědě a stránce beta verze, ale přehlíží novější tiskovou zprávu Seznamu vydanou čtyři dny před datem článku. Ta Firmy.cz výslovně řadí mezi již propojené služby; jako konkrétní příklad uvádí práci s občanskou vybaveností díky propojení s Firmy.cz. Nelze proto k 19. 10. 2026 tvrdit, že propojení není veřejně potvrzené. Zároveň ani novější zdroj nezaručuje použití každého firemního profilu v každé odpovědi.

**Důkaz:** Seznam 15. 10. 2026 zveřejnil zprávu [Seznam AI využívá další služby Seznamu. Používají ho už statisíce uživatelů týdně](https://blog.seznam.cz/2026/10/seznam-ai-propojuje-dalsi-sluzby-seznamu-vyuziva-ho-uz-vice-nez-pul-milionu-uzivatelu-tydne/). V úvodu řadí Firmy.cz vedle Vyhledávání, zpravodajských webů, Zboží.cz a TV programu mezi dosavadní propojené služby, k nimž nově přibyly Sreality.cz. Následující odstavec popisuje občanskou vybavenost získanou díky propojení s Firmy.cz. Tento zdroj je novější a konkrétnější než odkazovaná obecná nápověda.

**Konkrétní oprava:**

- Přepsat oddíl o Firmy.cz tak, aby uvedl novější stav: „Seznam 15. října 2026 potvrdil propojení Seznam AI se službou Firmy.cz a uvedl, že z ní využívá například údaje o občanské vybavenosti. Spravovaný profil proto může zpřístupnit údaje v ekosystému Seznamu, ale nezaručuje zmínku ani doporučení v konkrétní odpovědi.“
- V FAQ změnit větu o doloženém napojení: Firmy.cz uvést jako veřejně potvrzené propojení služby; výhradu o nenalezeném potvrzení ponechat jen u Zlatých stránek a Najisto.
- Upravit checklist „vztah k dnešním odpovědím Seznam AI nepovažujte za jistý“ na přesnější hranici: propojení je potvrzené, použití konkrétního profilu nebo údaje v každé odpovědi jisté není.
- Doplnit zdroj z 15. 10. 2026 do `research.md` a opravit zejména oddíly 3, 4, 7, 9 a 10. Starší rozpor v nápovědě lze ponechat jako poznámku k nekonzistentní dokumentaci, ne jako základ současného závěru.

**Závažnost:** **ZÁSADNÍ**

### 2. Podmínku Gemini nese nesprávný podmět

**Citovaná pasáž:** „Přihlášené aplikace Gemini se zapnutým ukládáním aktivity mohou při dotazech na místa použít veřejné údaje z Google Maps…“

**Problém:** Přihlášená a se zapnutým ukládáním aktivity není „aplikace“, ale uživatel ve svém účtu. Věta sice obsahuje všechny požadované podmínky a omezení, ale připisuje je nesprávnému podmětu. Jde o drobnou jazykovou nepřesnost vzniklou převzetím formulace z prvního auditu.

**Důkaz:** Nápověda Google [Find places & get directions in Gemini Apps](https://support.google.com/gemini/answer/16622866) v části „What you need“ požaduje, aby byl uživatel přihlášený do Gemini Apps a měl zapnuté Keep Activity; aplikaci samotnou neoznačuje za „přihlášenou“.

**Konkrétní oprava:** „Uživatel přihlášený do aplikace Gemini se zapnutým ukládáním aktivity může při dotazech na místa získat veřejné údaje z Google Maps, například adresu, web, hodnocení nebo otevírací dobu.“ Navazující omezení o živých konverzacích, Zprávách Google a nezaručeném použití konkrétního profilu ponechat.

**Závažnost:** **DROBNÝ**

### Bez dalšího nálezu

- `answer` má 44 slov, začíná přímou definicí a samostatně odpovídá na otázku článku.
- `seoTitle` existuje, začíná hlavním klíčovým slovem a má 43 znaků; délka `title` se proto neposuzuje. Description má 143 znaků a odpovídá obsahu.
- H2 mají požadované zvýraznění, struktura je logická a FAQ obsahuje reálné, samostatně srozumitelné otázky a odpovědi.
- Tvrzení o Google Business Profile, Apple Business, Google Maps v Gemini, ARES a odkazovém spamu odpovídají uvedeným primárním zdrojům a obsahují potřebné meze. Microsoft dnes provozuje lokalizovanou stránku Bing Places pro firmy; článek zároveň správně váže jeho prioritu na publikum používající Bing.
- Externí odkazy vedou na odpovídající primární zdroje. Tři interní odkazy na související články i `/audit/` mají v projektu odpovídající cíle.
- CTA odpovídá `src/content/pages/audit.ts`: **Audit AI viditelnosti**, **3 600 Kč bez DPH**, výstup do pěti pracovních dní od úhrady a schůzka **30–60 minut**.
- Mechanický jazykový checker nad aktuální verzí článku: 2 049 slov, 0 nálezů proti 275 pravidlům slovníku. Samostatné redakční čtení kromě podmětu ve větě o Gemini nenašlo další doložitelnou jazykovou vadu.

## Kontrola vypořádání

### Audit faktů

- **Nález 1 (Gemini): částečně vypořádaný.** Všechny věcné podmínky byly doplněny a omezení jsou správná. Zůstala drobná chyba podmětu „přihlášené aplikace“, popsaná výše.
- **Nález 2 (Firmy.cz): nevypořádaný a současné vypořádání neobstojí.** `vyporadani.md` tvrdí, že k 19. 10. 2026 nejde o potvrzený aktivní zdroj. Novější primární zdroj Seznamu z 15. 10. 2026 potvrzuje propojení Firmy.cz se Seznam AI. Ani závěrečné tvrzení v `audit-fakta.md` „Zbývající věcný problém: žádný“ proto neplatí.
- **Nálezy 3–5: vypořádané.** Neoprávněný kvantifikátor „většina“ zmizel, starší doporučení Googlu má samostatný odkaz a tvrzení o Bing Places i zdrojích Google Business Profile vedou na odpovídající dokumentaci.

### Jazykový audit

- **Nálezy 1–24: vypořádané.** Aktuální text odstranil nejasné abstrakce, kalky, opakovaný „ekosystém“, pseudo-termín „faktor shody“, nejasné metriky i nesprávně přiřazený zdroj v kartě. Kontrola hledaných výrazů a mechanický checker jsou bez nálezu.
- **Nález 25 (30–60 minut): odmítnutí věcné části obstojí.** Aktuální kanonický modul `src/content/pages/audit.ts` uvádí meeting 30–60 minut v `answer`, `serviceJsonLd.description` i `hero.lead`. Článek správně používá 30–60 minut; požadavek staršího dokumentu tonality na pevnou 60minutovou konzultaci se na současnou nabídku nepřenáší. Jazyková část původního nálezu byla opravena.

## Podmínka publikace

Po opravě závěru o Firmy.cz v článku, FAQ a rešerši lze článek publikovat. Drobnou větu o přihlášeném uživateli Gemini je vhodné opravit ve stejném zásahu.

## C5b — ověření zásadní opravy

**Výsledek: OPRAVA OBSTOJÍ. NOVÝ ZÁSADNÍ PROBLÉM NEZŮSTAL.**

Aktuální oddíl „Firmy.cz a Seznam AI jsou propojené — jednotlivou zmínku to nezaručuje“, checklist, FAQ i `research.md` odpovídají nejnovějšímu konkrétnímu primárnímu zdroji a nepřekračují jeho důkazní sílu:

- Tisková zpráva Seznamu z 15. 10. 2026 řadí Firmy.cz mezi služby už propojené se Seznam AI; jako konkrétní příklad uvádí občanskou vybavenost dostupnou díky propojení s Firmy.cz. Článek tento stav popisuje přesně.
- Formulace „může zpřístupnit údaje“ je přiměřeně podmíněná. Článek, checklist i FAQ výslovně dodávají, že propojení nezaručuje použití každého profilu či údaje ani doporučení firmy v konkrétní odpovědi. Tím se vyhýbají opačnému overclaimu.
- Obecná nápověda stále jmenuje jen webový a zpravodajský index a Počasí.cz; stránka beta verze stále řadí Firmy.cz mezi plánovaná napojení. Článek i rešerše tento rozpor nezamlčují a správně dávají pro současný stav přednost novější a konkrétnější zprávě z 15. 10. 2026.
- `research.md` má opravenou tabulku faktů, samostatně popsaný nesoulad zdrojů, bezpečnou formulaci i zákaz tvrdit, že propojení zaručuje použití konkrétního profilu. FAQ a checklist z těchto mezí nevybočují.

**Primární zdroje ověřené 19. 10. 2026:** [tisková zpráva Seznamu z 15. 10. 2026](https://blog.seznam.cz/2026/10/seznam-ai-propojuje-dalsi-sluzby-seznamu-vyuziva-ho-uz-vice-nez-pul-milionu-uzivatelu-tydne/), [obecná nápověda Seznam AI](https://o-seznam.cz/napoveda/seznam-ai/) a [stránka beta verze](https://o-seznam.cz/napoveda/seznam-ai/beta-verze/).
