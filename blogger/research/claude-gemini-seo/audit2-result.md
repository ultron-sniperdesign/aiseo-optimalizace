## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Opravy jsou výrazně lepší než původní verze, ale článek má ještě několik problémů, které bych před publikací nepustil: zůstal zakázaný slovník, Google-Extended je formulovaný příliš široce a hlavní tvrzení o Claudovi stojí na nepojmenovaných „analýzách“.

---

## Nálezy

### [BLOCKER] Zůstal zakázaný termín „Crawlery“

**Problémové místo:**

```md
## Crawlery a robots.txt: na co dát pozor
```

V zadání je „crawler/bot“ bez kontextu zakázaný slovník. Navíc článek jinak používá „vyhledávací roboti“, takže nadpis působí jako neopravený zbytek po 1. auditu.

**Návrh opravy:**

```md
## Vyhledávací roboti a robots.txt: na co dát pozor
```

Případně přesněji:

```md
## AI vyhledávací roboti a robots.txt: na co dát pozor
```

---

### [BLOCKER] Google-Extended je popsaný příliš široce jako řízení „Gemini“ a „groundingu“

**Problémová místa:**

```md
Google-Extended je nastavení, kterým řídíte, jestli se váš obsah používá pro Gemini (trénink a grounding).
```

```md
Google-Extended řídí, jestli se obsah použije pro Gemini (trénink a grounding)
```

```md
Blokace Google-Extended ... omezuje použití obsahu pro Gemini v rozsahu, který toto pravidlo řídí.
```

Tvrzení „trénink a grounding“ je rizikové. Google-Extended podle veřejné dokumentace slouží k řízení použití obsahu pro zlepšování vybraných generativních produktů Googlu, zejména Gemini Apps a Vertex AI generativních API. Neovlivňuje pozice ve Vyhledávání. Pro funkce navázané na Google Search je potřeba velmi opatrně rozlišit Googlebot vs. Google-Extended.

Aktuální formulace může čtenáře vést k závěru, že Google-Extended obecně řídí, zda se web použije jako zdroj pro webově podložené odpovědi Gemini. To je příliš silné a musí být doložené, nebo zúžené.

**Návrh opravy FAQ:**

```md
Google-Extended je pravidlo, kterým podle Googlu řídíte, zda váš obsah může pomáhat zlepšovat Gemini Apps a Vertex AI generativní API. Neovlivňuje zařazení ani pozice v klasickém Vyhledávání — ty řeší Googlebot. Pokud Google-Extended zablokujete, omezíte použití obsahu v rozsahu, který toto pravidlo podle dokumentace Googlu pokrývá. Není to přepínač SEO pozic.
```

**Návrh opravy boxu:**

```md
Google-Extended není přepínač pozic ve Vyhledávání. Podle Googlu slouží k řízení použití obsahu pro vybrané generativní produkty, jako jsou Gemini Apps a Vertex AI generativní API. Zařazení a pozice v klasickém Vyhledávání řeší Googlebot.
```

Doporučení: přidejte odkaz na oficiální dokumentaci Googlu.

---

### [WARNING] Hlavní claim o Claudovi je stále nedoložený

**Problémová místa:**

```md
Claude podle dostupných analýz víc váží recenze a reputaci.
```

```md
Claude podle dostupných analýz spoléhá víc na reputaci a uživatelsky ověřený obsah
```

```md
Claude podle analýz víc váží recenze a ověřitelnou důvěru
```

Problém není jen hedge „podle dostupných analýz“, ale to, že žádná analýza není uvedená. Proto tvrzení působí jako nepodložený mechanismus. Zvlášť výraz „váží“ naznačuje znalost interního systému hodnocení Clauda.

**Návrh opravy:**

Buď doplnit konkrétní zdroj:

```md
Podle [název analýzy, rok] se v citacích Clauda častěji objevují zdroje s viditelnými signály důvěry, například recenzemi, hodnoceními a zmínkami mimo vlastní web.
```

Nebo formulaci oslabit:

```md
U Clauda se v externích analýzách citací často sleduje reputace značky, recenze a zmínky mimo vlastní web. Není to oficiálně potvrzený hodnoticí mechanismus, ale prakticky dává smysl tyto signály posilovat.
```

**Dopad:** Týká se frontmatter `answer`, stats, FAQ, sekce „Claude“ i tabulky. Opravit konzistentně všude.

---

### [WARNING] Tabulka znovu používá formulaci „Co preferuje“ a tvrdí preference platforem

**Problémové místo:**

```js
{ icon: "⭐", label: "Co preferuje", left: "Autoritativní a oficiální zdroje", right: "Recenze a ověřený obsah" },
```

Po 1. auditu mělo být oslabené tvrzení „Gemini preferuje autoritativní zdroje“. V tabulce se ale overclaim vrací přes label „Co preferuje“. U Clauda je to ještě citlivější, protože není doložený oficiální mechanismus.

**Návrh opravy:**

```js
{ icon: "⭐", label: "Kde bývá lepší předpoklad k citaci", left: "Dobře hodnocené, autoritativní nebo oficiální zdroje", right: "Ověřitelné zmínky, recenze a reputační signály" },
```

Případně ještě opatrněji:

```js
{ icon: "⭐", label: "Důraz v optimalizaci", left: "Klasické SEO, autorita a dohledatelnost", right: "Reputace, recenze a zmínky mimo vlastní web" },
```

---

### [WARNING] „Gemini = klasické SEO + AI Overviews“ je formulované moc plošně

**Problémové místo:**

```md
Co funguje pro klasické SEO a AI Overviews, obvykle pomáhá i Gemini
```

Je to lepší než původní overclaim, ale pořád to může splývat: AI Overviews a Gemini nejsou totéž. Sdílený je důležitý základ přes Google Search / dohledatelnost / autoritu, ale citace a výběr zdrojů se mohou lišit.

**Návrh opravy:**

```md
Kvalitní klasické SEO a obsah připravený pro AI Overviews jsou dobrý výchozí bod i pro Gemini, protože webově podložené odpovědi pracují s podklady z Google Search. Neznamená to ale, že Gemini použije stejné zdroje nebo stejné pořadí jako klasické výsledky či AI Overviews.
```

---

### [WARNING] Frontmatter `answer` má gramatickou chybu a slabší definici Gemini

**Problémové místo:**

```md
answer: "Claude je AI asistent od Anthropic a Gemini AI platforma od Googlu — dvě méně řešené AI platformy. ..."
```

Chybí „je“ před „Gemini“. Navíc „dvě méně řešené AI platformy“ je spíš marketingový komentář než užitečná definice pro krátkou odpověď.

**Návrh opravy:**

```md
answer: "Claude je AI asistent od Anthropic a Gemini je AI asistent a modelová rodina od Googlu. U webově podložených odpovědí se Gemini opírá o Google Search, takže těží z kvalitního klasického SEO. U Clauda se podle externích analýz vyplatí sledovat reputaci, recenze a zmínky. Společný základ tvoří procházitelné HTML, jasná struktura, strukturovaná data, čerstvost a důvěryhodnost."
```

Poznámka: po úpravě znovu zkontrolovat rozsah 40–60 slov. Tato verze má cca 58 slov.

---

### [WARNING] Meta description má neobratné „u Gemina“

**Problémové místo:**

```md
description: "Jak optimalizovat obsah pro Claude a Gemini — méně řešené AI platformy. Čím se liší jejich citace, role Google Search u Gemina a reputace u Clauda."
```

„U Gemina“ je stylisticky neobratné. Lepší je neskloňovat značku nebo použít „Geminiho“. Také „méně řešené AI platformy“ je méně silné než konkrétní benefit článku.

**Návrh opravy:**

```md
description: "Jak optimalizovat obsah pro Claude a Gemini: citace, Google Search u Gemini, reputace u Clauda a společný základ AI SEO."
```

Délka je stále v limitu a klíčová témata jsou jasnější.

---

### [WARNING] Absolutní tvrzení o robotech Anthropic potřebuje oporu ve zdroji

**Problémové místo:**

```md
Anthropic má tři roboty — ClaudeBot (trénink), Claude-User (načtení na dotaz uživatele) a Claude-SearchBot (vyhledávání Clauda). Všichni respektují robots.txt.
```

Tvrzení je konkrétní a časově citlivé. Bez odkazu na aktuální dokumentaci Anthropic působí nedoloženě. Navíc „všichni respektují robots.txt“ je absolutní formulace; u uživatelsky vyvolaných fetcherů je potřeba být přesný podle aktuální dokumentace.

**Návrh opravy:**

```md
Anthropic v dokumentaci uvádí tři roboty: ClaudeBot pro tréninkové procházení, Claude-User pro načtení stránky na žádost uživatele a Claude-SearchBot pro webové vyhledávání Clauda. Přístup k nim řešte podle aktuálních pravidel Anthropic pro robots.txt.
```

A doplnit odkaz na oficiální dokumentaci Anthropic.

---

### [TIP] HowTo text je místy příliš hovorový / antropomorfní

**Problémové místo:**

```md
Vyhledávací roboti AI čtou hlavně HTML a mají rádi rychlý, čistý web.
```

„Mají rádi“ je srozumitelné, ale v odborném/tutorial článku působí méně přesně.

**Návrh opravy:**

```md
Vyhledávací roboti AI čtou hlavně HTML; rychlý a technicky čistý web jim usnadňuje zpracování obsahu.
```

---

### [TIP] H2 struktura je v zásadě dobrá, ale sekce „Crawlery“ kazí konzistenci brand voice

**Problémové místo:**

```md
## Crawlery a robots.txt: na co dát pozor
```

Kromě zakázaného termínu je to jediný nadpis, který používá anglicismus. Po přejmenování na „Vyhledávací roboti…“ bude struktura článku konzistentní.

**Návrh opravy:** viz první nález.

---

### [TIP] CTA je v pořádku, ale může být konkrétnější podle situace čtenáře

**Aktuální místo:**

```md
Když chcete celý web připravit na AI vyhledávání podle hotové předlohy, pomůže [AI SEO Wireframe Pack](/pack/) za 1 490 Kč. Pro plán na míru je tu produktový [AI SEO audit za 9 990 Kč](/audit/).
```

Tohle splňuje požadavek: CTA vede na konkrétní produkty a není generické „kontaktujte nás“.

**Možné zpřesnění:**

```md
Pokud chcete podle tohoto návodu upravit strukturu klíčových stránek sami, použijte [AI SEO Wireframe Pack](/pack/) za 1 490 Kč. Pokud potřebujete zkontrolovat celý web a prioritizovat opravy, zvolte [AI SEO audit za 9 990 Kč](/audit/).
```

---

## Co je po opravách dobré

- Titulek má vhodnou délku a klíčové téma je na začátku.
- Slug `claude-gemini-seo` je smysluplný.
- Meta description je délkou v pořádku, jen potřebuje stylisticky upravit.
- Prvních ~100 slov těla funguje jako samostatná odpověď.
- FAQ otázky jsou relevantní a odpovědi jsou většinou sebestačné.
- Interní odkazy na související platformové články, checklist, pack a audit jsou vhodné.
- CTA splňuje zadání: vede na konkrétní produkty s cenou.