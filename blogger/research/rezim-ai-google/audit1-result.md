## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek je obsahově silný a dobře míří na hlavní intent „režim AI“. Má správný český název, dobré rozlišení Režim AI vs. AI přehledy a použitelnou krátkou odpověď. Před publikací ale neplní několik povinných bodů zadání: chybí CTA na produkt, není pokrytý Safari intent a část tvrzení je příliš jistá nebo nedoložená.

---

## Nálezy a cílené opravy

### [BLOCKER] Chybí povinné CTA na konkrétní produkt

**Problémové místo:**

> „Kratší úvod do stejné funkce … začněte návodem [jak se zobrazit v AI Mode](/blog/jak-se-zobrazit-v-ai-mode/).“

Závěr vede jen na další články. Podle zadání má závěr směřovat na konkrétní produkt: **AI SEO Wireframe Pack 1 490 Kč / AI SEO audit 9 990 Kč / Free PDF**. Tady není žádná produktová konverze.

**Návrh opravy:**

Za poslední odstavec doplnit samostatné CTA, ideálně měkké, protože článek je uživatelský průvodce:

> Chcete řešit i druhou stranu — aby váš web měl větší šanci být v AI odpovědích vidět? Stáhněte si **Free PDF checklist**, nebo rovnou použijte **AI SEO Wireframe Pack za 1 490 Kč**. Pokud chcete konkrétní doporučení pro svůj web, objednejte **AI SEO audit za 9 990 Kč**.

Pozor: sjednotit cenu auditu s aktuální produktovou nabídkou webu, aby článek nepublikoval špatnou cenu.

---

### [BLOCKER] Chybí povinný intent: Safari

**Problémové místo:**

> „Nápověda Googlu uvádí tři cesty. Všechny vedou do stejného rozhraní…“

Článek pokrývá `google.com/ai`, výsledky Googlu, aplikaci Google a Chrome. Zadání ale výslovně požaduje také **Safari**. V textu není Safari zmíněno vůbec.

**Návrh opravy:**

Doplnit do sekce „Kde režim AI najdete“ krátký blok nebo FAQ:

> **A co Safari?**  
> V Safari nejde o zvláštní tlačítko na nové kartě jako u oznámených funkcí Chromu. Režim AI otevřete přes `google.com/ai` nebo přes běžné vyhledávání Google v prohlížeči, pokud jste přihlášení k účtu Google a funkce je pro váš účet dostupná.

A přidat FAQ:

> **Funguje režim AI v Safari?**  
> Ano, přes webové vyhledávání Google nebo adresu `google.com/ai`. Oznámené hlubší propojení s tlačítkem na nové kartě se týká Chromu, ne Safari.

---

### [WARNING] Zadání chtělo kroky s obrázky nebo popisem UI; článek má jen komponenty bez vizuálů

**Problémové místo:**

> „## Jak režim AI zapnout krok za krokem“  
> `<Checklist title="Postup, který funguje z počítače i z mobilu" ... />`

Postup je srozumitelný, ale zadání říká: **„pak kroky s obrázky/popisem UI“**. Popis UI tam částečně je, ale chybí konkrétní obrázky nebo alespoň jasné obrazové placeholdery.

**Návrh opravy:**

Doplnit ke třem hlavním cestám screenshoty nebo připravené placeholdery s alt textem:

- Screenshot 1: `google.com/ai`  
  Alt: „Stránka google.com/ai s polem pro dotaz v režimu AI“
- Screenshot 2: záložka/tlačítko **Režim AI** u výsledků  
  Alt: „Tlačítko Režim AI vedle vyhledávacího pole v Google vyhledávání“
- Screenshot 3: aplikace Google v mobilu  
  Alt: „Tlačítko Režim AI v aplikaci Google na mobilu“

Pokud obrázky zatím nejsou, doplnit alespoň explicitní text „Na obrazovce hledejte…“.

---

### [WARNING] Nedoložené tvrzení o PDF v Režimu AI

**Problémové místo:**

> `{ icon: "📁", label: "Práce se soubory", left: "Podle nápovědy zvládne obrázky i PDF", right: "Ano, u obou asistentů" }`

V dodaném researchi je ověřeno rozhraní, historie, dostupnost, přihlášení, Chrome integrace. **PDF podpora v Režimu AI tam doložená není.** Tvrzení může být pravdivé pro některé rollouty nebo experimenty, ale v článku je uvedené jako jistý fakt.

**Návrh opravy:**

Buď doplnit přesný zdroj, nebo zjemnit/odstranit:

> „Podle dostupné nápovědy podporuje dotazy nad textem a obrázky; podpora souborů se může lišit podle účtu a země.“

Případně celý řádek „Práce se soubory“ z tabulky vyhodit, protože pro intent článku není klíčový.

---

### [WARNING] Příliš silné tvrzení „v drtivé většině případů“

**Problémové místo:**

> „Praktický důsledek: dotaz **‚nechci režim AI‘** míří v drtivé většině případů na **AI přehledy**.“

Tohle je pravděpodobně správný obsahový odhad, ale formulace „v drtivé většině“ působí jako kvantifikované tvrzení bez dat. Research říká, že Suggest ten intent ukazuje, ale nedokládá procenta.

**Návrh opravy:**

Změkčit:

> „Praktický důsledek: dotaz **‚nechci režim AI‘** často ve skutečnosti míří na **AI přehledy**.“

Nebo:

> „U části uživatelů tím není myšlený Režim AI, ale AI přehledy…“

---

### [WARNING] Tvrzení o obecnějších odpovědích je moc definitivní

**Problémové místo:**

> „Když ji smažete nebo vypnete, odpovědi budou obecnější.“

Tady článek vyvozuje jednoznačný dopad. Bez přímé citace Googlu je bezpečnější mluvit o pravděpodobnosti a personalizaci.

**Návrh opravy:**

> „Když historii smažete nebo vypnete, odpovědi **mohou být méně personalizované**.“

To odpovídá bezpečnému claimu a nepůsobí jako garantovaný výsledek.

---

### [WARNING] Metadata `stats` má nepřesný popisek u věku 18+

**Problémové místo:**

```yaml
- value: "18+"
  label: "věková hranice — režim AI podle nápovědy vyžaduje přihlášený účet"
```

Label spojuje dvě různé podmínky: věk 18+ a přihlášení. Hodnota `18+` nevysvětluje přihlášení.

**Návrh opravy:**

Buď rozdělit na dvě statistiky:

```yaml
- value: "18+"
  label: "minimální věk podle nápovědy Googlu"
- value: "účet Google"
  label: "pro použití režimu AI je potřeba přihlášení"
```

Nebo upravit jednu statistiku:

```yaml
- value: "18+"
  label: "minimální věk; zároveň je potřeba přihlášení k účtu Google"
```

---

### [WARNING] Zdroje jsou uvedené příliš obecně a nejsou klikatelné

**Problémové místo:**

> „*Zdroje: nápověda Vyhledávání Google k režimu AI (česká verze, ověřeno 26. 8. 2026); oznámení Googlu k propojení režimu AI s Chromem ze 16. 4. 2026.*“

U článku, který stojí na aktuálním stavu funkce v roce 2026, je potřeba uvést konkrétní odkazy. Jinak se hůř ověřuje dostupnost, historie i Chrome rollout.

**Návrh opravy:**

Doplnit konkrétní URL:

> Zdroje:  
> – Google Search Help: Režim AI, `support.google.com/websearch/answer/16011537`, česká verze, ověřeno 26. 8. 2026.  
> – Google Blog: „A new way to explore the web with AI Mode in Chrome“, 16. 4. 2026, ověřeno 26. 8. 2026.

Ideálně jako klikatelné markdown odkazy.

---

### [WARNING] Rozdíl proti Gemini a ChatGPT je místy zjednodušený

**Problémové místo:**

> „Gemini je samostatný asistent od Googlu, ChatGPT asistent od OpenAI — oba se k webu dostanou taky, ale nejsou to vyhledávací záložky.“

A v tabulce:

> `right: "Model plus vyhledávání, když se ho asistent rozhodne použít"`

Směr je správný, ale formulace „oba se k webu dostanou“ může být nepřesná podle nastavení, účtu, plánu, regionu a aktuální dostupnosti funkcí.

**Návrh opravy:**

> „Gemini je samostatný asistent od Googlu, ChatGPT asistent od OpenAI. Podle nastavení a dostupných funkcí mohou pracovat i s webem, ale nejsou to záložky ve vyhledávání Google.“

A v tabulce:

> „Model; webové vyhledávání podle dostupnosti a nastavení služby.“

---

### [WARNING] Chybí explicitní pokrytí intentu „nastavit / aktivovat“

**Problémové místo:**

> „## Jak režim AI zapnout krok za krokem“

Hlavní intent „jak zapnout“ je pokrytý dobře. Zadání ale uvádí i varianty **aktivovat / nastavit**. Článek vysvětluje, že nejde o nastavení, ale tato slova nejsou dost jasně obsloužená.

**Návrh opravy:**

Doplnit hned pod H2 jednu větu:

> Režim AI se samostatně nenastavuje ani neaktivuje v nastavení účtu. Pokud je pro váš účet dostupný, otevřete ho přes `google.com/ai`, tlačítko Režim AI ve vyhledávání nebo aplikaci Google.

Případně přidat FAQ:

> **Jak režim AI aktivovat nebo nastavit?**  
> Žádné zvláštní nastavení není potřeba. Musíte být přihlášení, splnit věkovou podmínku 18+ a otevřít Režim AI jednou z podporovaných cest.

---

### [TIP] Kolokviální formulace jsou trochu mimo věcný brand voice

**Problémová místa:**

> „Google mi cpe AI“

> „patříte o dům dál“

Tón článku je jinak věcný a srozumitelný. Tyto dvě formulace jsou zbytečně hovorové.

**Návrh opravy:**

Nahradit:

> „Google mi cpe AI“

za:

> „Google mi zobrazuje AI funkce“

A:

> „patříte o dům dál“

za:

> „pokračujte do sekce o AI Mode“

---

### [TIP] Termín „AI Mode“ je použitý bezpečně, ale u CTA/linků držet český tvar

**Problémové místo:**

> „[sekce o AI Mode](/ai-mode/)“

> „[AI Mode v Googlu česky](/blog/ai-mode-cesky/)“

Zadání chce používat český tvar **Režim AI** v H1, answer bloku i H2, což článek plní. Anglický tvar je zde jako doplněk a v názvu existující sekce, takže nejde o chybu. Jen bych v anchor textech tam, kde to není název existující stránky, preferoval český tvar.

**Návrh opravy:**

> „do [sekce o Režimu AI / AI Mode](/ai-mode/)“

---

### [TIP] SEO metadata jsou v zásadě v pořádku

**Kontrola:**

```yaml
seoTitle: "Režim AI v Googlu: jak ho zapnout, vypnout a co umí (2026)"
description: "Průvodce režimem AI (AI Mode) ve vyhledávání Googlu: kde ho najdete, jak ho zapnete, proč pro něj není vypínač a kde je historie konverzací."
slug: "rezim-ai-google"
```

- SEO title má klíčové slovo na začátku a délku zhruba v doporučeném rozsahu.
- Meta description je v limitu 70–160 znaků.
- Slug je smysluplný.
- Keywords obsahují i `rezim ai` bez diakritiky.

Bez nutné opravy.

---

### [TIP] Krátká odpověď je dobrá a splňuje formát

**Kontrola:**

```yaml
answer: "Režim AI je samostatná záložka vyhledávání Googlu..."
```

Má cca 44 slov, začíná definicí, dává smysl samostatně a pokrývá co to je / kde ho najdu / vypnutí. To je v souladu se zadáním pro citovatelnost AI.

Bez nutné opravy.

---

## Stručně: co opravit před vydáním

1. Doplnit konkrétní CTA na Free PDF / Pack 1 490 Kč / Audit 9 990 Kč.  
2. Doplnit Safari sekci nebo FAQ.  
3. Doplnit obrázky nebo přesnější popisy UI kroků.  
4. Opravit nedoložené PDF tvrzení.  
5. Změkčit „drtivá většina“ a „budou obecnější“.  
6. Zpřesnit `18+` statistiku.  
7. Přidat konkrétní klikatelné zdroje.  
8. Lehce zcivilnit hovorové formulace.