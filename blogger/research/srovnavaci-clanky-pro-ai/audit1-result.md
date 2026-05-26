## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek má dobrý základ: správný formát, relevantní téma, funkční CTA, vhodné interní odkazy a velmi dobrý `answer` rozsahem i strukturou. Před publikací ale doporučuji opravit několik overclaimů a doplnit oporu pro tvrzení o citovanosti formátů.

---

## Nálezy a opravy

### [BLOCKER] Nedoložený superlativ ve frontmatter stats

> `label: "formát, po kterém AI u srovnávacích dotazů sahá nejčastěji"`

Problém: „nejčastěji“ je silný superlativ. V zadání jsou povolená kvalitativní tvrzení typu „AI sahá po porovnáních a tabulkách“, ale ne nedoložené pořadí formátů. Pokud pro „nejčastěji“ není konkrétní zdroj, je to overclaim.

**Návrh opravy:**

```yaml
- value: "X vs Y"
  label: "formát, po kterém AI u srovnávacích dotazů často sahá"
```

Nebo doplnit do článku jasný zdroj, který tvrzení „nejčastěji“ skutečně podporuje.

---

### [WARNING] Chybí konkrétní zdroj u tvrzení o nejcitovanějších formátech

> „Srovnávací články a číslované seznamy patří k nejcitovanějším formátům v AI odpovědích.“

> „Číslované Top-N seznamy se podle dostupných analýz citují víc než prosté odrážky.“

Problém: Tvrzení je věcně v souladu se zadáním, ale v článku není uveden konkrétní zdroj ani název analýzy. Formulace „podle dostupných analýz“ je slabá, protože čtenář ani AI nepozná, o jaké analýzy jde.

**Návrh opravy:**

Buď doplnit zdroj přímo do textu:

> Podle dostupných analýz AI citací z let 2025–2026 patří srovnávací stránky a číslované seznamy mezi formáty, které se v AI odpovědích objevují často.

Ideálně ale přidat odkaz:

> Podle analýz AI citací z let 2025–2026 se číslované seznamy a srovnávací stránky v odpovědích AI objevují častěji než méně strukturovaný text.

Pokud zdroj nechcete uvádět, zmírnit:

> V praxi se srovnávací články a číslované seznamy v AI odpovědích objevují často, protože mají jasnou strukturu a snadno extrahovatelné části.

---

### [WARNING] Overclaim v hlavní odpovědi: férovost „získá víc citací“

> `Klíčová je férovost — poctivé srovnání podle jasných kritérií získá víc důvěry i citací než skrytá reklama.`

Problém: „získá víc citací“ zní jako jistý výsledek. Bezpečnější brand voice má používat formulace typu „může zvýšit šanci“.

**Návrh opravy ve frontmatter `answer`:**

```yaml
answer: "Srovnávací článek je obsah typu X vs Y nebo „nejlepší X pro Y“, který vedle sebe staví možnosti podle stejných kritérií. AI vyhledávače takový formát citují často, protože je modulární a snadno se z něj vytahují odpovědi. Férové srovnání s jasnými kritérii může zvýšit důvěru i šanci na citaci."
```

Rozsah zůstává v požadovaném limitu 40–60 slov a odpověď stále začíná definicí.

---

### [WARNING] Antropomorfizace AI a příliš jisté formulace

> „To poznají čtenáři i AI — a důvěru to stojí“

> „Rozdíl mezi srovnáním, které AI cituje, a tím, které přeskočí“

> `left: "Roste u čtenáře i AI"`

> „AI i člověk spíš uvěří“

> „AI i čtenář mu spíš uvěří než skryté reklamě.“

Problém: AI „nepoznává“ a „nevěří“ ve stejném smyslu jako člověk. Navíc „které AI cituje / přeskočí“ slibuje příliš jasný výsledek. Doporučuji držet se věcnějšího slovníku: „může být vyhodnoceno“, „má vyšší šanci“, „je srozumitelnější“, „působí důvěryhodněji“.

**Návrhy oprav:**

Místo:

> To poznají čtenáři i AI — a důvěru to stojí:

Použít:

> Čtenáři skrytou reklamu rychle rozpoznají a pro AI je takový obsah hůř použitelný jako neutrální zdroj.

Místo:

> Rozdíl mezi srovnáním, které AI cituje, a tím, které přeskočí:

Použít:

> Rozdíl mezi srovnáním s vyšší šancí na citaci a srovnáním, které působí jako reklama:

Místo:

> Roste u čtenáře i AI

Použít:

> Roste u čtenáře; pro AI je obsah lépe vyhodnotitelný

Místo:

> AI i člověk spíš uvěří

Použít:

> Čtenář mu spíš uvěří a AI ho může snáz vyhodnotit jako použitelný zdroj.

---

### [WARNING] FAQ odpovědi nejsou vždy plně samostatné

> `a: "Protože srovnání je modulární formát..."`

> `a: "Ano, tabulka je jádro citovatelného srovnání..."`

Problém: FAQ má být sebestačné. Odpověď začínající „Protože“ nebo „Ano“ dává smysl po přečtení otázky, ale hůř funguje jako samostatně vytažený úsek v AI odpovědi.

**Návrh opravy:**

Místo:

> Protože srovnání je modulární formát.

Použít:

> AI cituje srovnávací články často proto, že srovnání je modulární formát.

Místo:

> Ano, tabulka je jádro citovatelného srovnání.

Použít:

> Tabulka do srovnávacího článku patří, protože tvoří jádro citovatelného srovnání.

Místo:

> Záleží na dotazu.

Použít:

> Volba mezi číslovaným seznamem a X vs Y srovnáním záleží na typu dotazu.

---

### [WARNING] Formulace „zvyšuje důvěru i konverzi“ je příliš jistá

> „Férové srovnání paradoxně zvyšuje důvěru i konverzi — přitahuje kvalifikované zájemce.“

Problém: Důvěra je obhajitelná, ale „zvyšuje konverzi“ je marketingový claim bez podmínky. Bez dat konkrétního webu je lepší opatrnější formulace.

**Návrh opravy:**

> Férové srovnání může zvýšit důvěru a přivést kvalifikovanější zájemce, protože čtenáři snáz poznají, pro koho je řešení vhodné.

Stejnou úpravu doporučuji i ve FAQ:

> Férové srovnání může zvýšit důvěru a přivést kvalifikovanější zájemce; zároveň má větší šanci působit jako použitelný zdroj než skrytá reklama.

---

### [WARNING] „Podle dostupných analýz“ není ukotveno k roku 2026

> „Podle dostupných analýz se číslované seznamy citují víc než prosté odrážky.“

Problém: Článek je aktualizovaný k 2026 a má rok i v titulku, ale tato formulace neříká, zda jde o aktuální poznatky. U obsahu vázaného na AI vyhledávání je potřeba časové ukotvení.

**Návrh opravy:**

> Podle dostupných analýz AI citací z let 2025–2026 se číslované seznamy citují častěji než prosté odrážky.

Pokud není zdroj s rokem k dispozici:

> V aktuálních analýzách AI citací se opakovaně ukazuje, že číslované seznamy bývají pro AI lépe použitelné než volné odrážky.

---

### [TIP] Slovo „use-case“ zbytečně vybočuje z českého brand voice

> `left: "Pro a proti, use-case"`

Problém: Není to zakázaný termín ze seznamu, ale článek jinak používá srozumitelný český jazyk. „Use-case“ působí jako zbytečný anglicismus.

**Návrh opravy:**

```js
{ icon: "⚖️", label: "Tón", left: "Pro a proti, situace použití", right: "Jen výhody vlastního řešení" }
```

Nebo:

```js
left: "Pro a proti, pro koho se hodí"
```

---

### [TIP] Titulek je SEO v pořádku, ale „sbírá citace“ je lehce hovorové

> `title: "Srovnávací články pro AI: proč X vs Y sbírá citace 2026"`

Kontrola: Titulek má přibližně 55 znaků, klíčové slovo je na začátku, rok 2026 je aktuální. SEO parametry jsou splněné.

Problém: „sbírá citace“ je srozumitelné, ale trochu publicistické. Pro věcnější brand voice by šlo zjemnit.

**Možná oprava:**

> `Srovnávací články pro AI: proč X vs Y získává citace`

Nevýhoda: bez roku 2026. Pokud chcete rok zachovat:

> `Srovnávací články pro AI: proč X vs Y získává citace 2026`

Tato varianta ale může být o něco těžkopádnější. Původní titulek není nutné blokovat.

---

### [TIP] CTA je konkrétní, ale může být víc navázané na formát článku

> „Když chcete celý web připravit na AI vyhledávání podle hotové předlohy, pomůže AI SEO Wireframe Pack za 1 490 Kč. Pro plán na míru je tu produktový AI SEO audit za 9 990 Kč.“

Pozitivní: CTA splňuje zadání — vede na konkrétní produkt, ne na generické „kontaktujte nás“. Ceny sedí.

Možné zlepšení: Více propojit CTA s tématem srovnávacích článků.

**Návrh opravy:**

> Pokud chcete podle podobné logiky připravit i další citovatelné stránky webu, použijte [AI SEO Wireframe Pack](/pack/) za 1 490 Kč. Když potřebujete určit, které formáty a témata mají největší smysl pro váš web, pomůže [AI SEO audit za 9 990 Kč](/audit/).

---

## Co je v pořádku

- `answer` má správný rozsah 40–60 slov a začíná definicí.
- Meta description má vhodnou délku a odpovídá obsahu.
- Slug `srovnavaci-clanky-pro-ai` je smysluplný.
- Struktura H2 je logická pro tutorial/howto.
- Zakázané termíny typu „schema markup“, „answer block“, „hub-and-spoke“ ani „backlink profil“ se v textu nevyskytují.
- CTA vede na konkrétní produkty: Pack 1 490 Kč a Audit 9 990 Kč.
- Aktualizace `2026-05-26` odpovídá zadání a není budoucí.