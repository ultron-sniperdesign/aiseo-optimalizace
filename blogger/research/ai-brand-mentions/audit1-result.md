## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek má dobré téma, správný off-page úhel a funkční CTA na Pack/Audit. Před publikací ale potřebuje opravit hlavně **přehnané jádro argumentu** („důležitější než vlastní web“) a **nedoložená tvrzení „podle analýz“**, protože na nich stojí celý článek.

---

## Nálezy a cílené opravy

### [BLOCKER] Přehnaný claim: zmínky jsou „důležitější než vlastní web“

**Problémové místo:**

> „Zmínky o značce na cizích webech jsou pro viditelnost v AI odpovědích často důležitější než váš vlastní web.“

Totéž se opakuje v description, answer i prvním odstavci. Je to silný a zjednodušující claim. Vlastní web zůstává důležitý jako primární zdroj informací, entitní základ, landing page a konverzní místo. Off-page zmínky mohou být důležitější pro **citace a ověření důvěry**, ale ne obecně „než web“.

**Návrh opravy:**

Změnit na opatrnější a přesnější formulaci:

> „Zmínky o značce na cizích webech mohou výrazně zvýšit šanci, že AI systémy značku rozpoznají jako důvěryhodnou. Vlastní web zůstává základ, ale pro citace v AI odpovědích často rozhoduje i shoda napříč nezávislými zdroji.“

Upravit stejně v `description`, `answer`, H1/úvodu i v těle.

---

### [BLOCKER] Klíčová tvrzení „podle analýz“ nejsou doložená

**Problémová místa:**

> „Podle analýz vede většina AI citací na cizí weby, ne na vaši doménu.“

> „Čísla z analýz … berte jako orientační — směr je ale napříč studiemi konzistentní.“

> „Pro citace v AI odpovědích jsou podle analýz lepším signálem zmínky o značce — i bez odkazu.“

V článku nejsou uvedené žádné konkrétní zdroje, názvy analýz, odkazy, období sběru dat, platformy ani metodika. Pro čtenáře i audit věcné správnosti je to nedoložitelné.

**Návrh opravy:**

Doplnit u hlavních tvrzení konkrétní zdroje, minimálně formou:

> „Podle analýzy [název/autor, 2025 nebo 2026], která sledovala [platformy] a [typ dotazů], vedla většina citací v analyzovaných AI odpovědích na třetí strany, ne na domény značek.“

Pokud zdroje nechcete explicitně citovat v textu, doplnit alespoň poznámku typu:

> „Pozn.: Shrnutí vychází z veřejných analýz AI citací z let 2025–2026; výsledky se liší podle platformy, jazyka a oboru.“

Lépe ale uvést konkrétní odkazy.

---

### [BLOCKER] „Většina AI citací“ je příliš široké tvrzení bez vymezení platformy

**Problémové místo:**

> „Podle analýz vede většina AI citací na cizí weby, ne na vaši doménu.“

Tvrzení mluví o „AI citacích“ obecně. Jenže ChatGPT Search, Perplexity, Google AI Overviews, Gemini nebo Copilot mohou citovat jinak. Liší se také podle jazyka, oboru a typu dotazu.

**Návrh opravy:**

Zpřesnit rozsah:

> „Ve veřejných analýzách AI vyhledávání z let 2025–2026 často převažují citace třetích stran nad citacemi vlastních domén značek. Výsledek se ale liší podle platformy, oboru, jazyka a typu dotazu.“

Stejně upravit frontmatter `stats`:

```yaml
stats:
  - value: "často"
    label: "AI citace v analýzách míří na třetí strany, nejen na web značky"
```

---

### [WARNING] `answer` má správnou délku, ale nezačíná definicí

**Problémové místo:**

```yaml
answer: "Zmínky o značce na cizích webech jsou pro viditelnost v AI odpovědích často důležitější než váš vlastní web..."
```

Délka je v pořádku přibližně 52 slov, ale podle zadání má krátká odpověď začínat definicí. Současná verze začíná claimem a navíc obsahuje přehnané „důležitější než vlastní web“.

**Návrh opravy:**

```yaml
answer: "Zmínky o značce jsou výskyty názvu firmy, produktu nebo webu na cizích stránkách, například v recenzích, komunitách a oborových médiích. Pro AI odpovědi mohou být důležité, protože pomáhají ověřit shodu napříč nezávislými zdroji. Analýzy 2025–2026 naznačují, že citace často míří mimo vlastní doménu značky."
```

Tato verze začíná definicí, je soběstačná a nepřehání.

---

### [WARNING] Prvních ~100 slov těla opakuje overclaim

**Problémové místo:**

> „Zmínky o značce na cizích webech jsou pro viditelnost v AI odpovědích často důležitější než váš vlastní web.“

Prvních 100 slov má být samostatná odpověď. Struktura je dobrá, ale hlavní věta je příliš silná.

**Návrh opravy:**

Nahradit první tučný odstavec verzí:

> **Zmínky o značce jsou výskyty názvu firmy, produktu nebo webu na cizích stránkách — v recenzích, komunitách, srovnávačích nebo oborových médiích.** Pro AI odpovědi mohou být důležité, protože pomáhají ověřit, že se o značce mluví konzistentně i mimo její vlastní web. Analýzy z let 2025–2026 naznačují, že AI citace často míří na třetí strany, nejen na domény značek.

---

### [WARNING] „Consensus“ je zbytečný anglicismus bez potřeby

**Problémové místo:**

> „AI to čte jako signál důvěry — takzvaný consensus.“

Ve slovníku článku už existuje dobrá česká náhrada „shoda napříč zdroji“. Anglický termín „consensus“ není zakázaný, ale působí méně srozumitelně a v keywords je jako „consensus signál“.

**Návrh opravy:**

V textu:

> „AI to může vyhodnotit jako signál důvěry — tedy shodu napříč nezávislými zdroji.“

Ve frontmatteru zvážit změnu keywordu:

```yaml
- "shoda napříč zdroji"
```

---

### [WARNING] Reddit jako „nejcitovanější zdroj AI“ je potřeba zúžit

**Problémové místo ve stats:**

```yaml
- value: "Reddit"
  label: "patří mezi nejcitovanější zdroje AI"
```

**Problémové místo ve FAQ:**

> „Ano, komunitní obsah typu Reddit patří mezi často citované zdroje, hlavně u Perplexity.“

Druhá formulace je lepší, protože omezuje rozsah. Stats dlaždice je ale moc obecná. Reddit nemusí být relevantní pro české B2B, lokální služby nebo témata s nízkou komunitní aktivitou.

**Návrh opravy:**

```yaml
- value: "Reddit"
  label: "často citovaný komunitní zdroj hlavně u části AI vyhledávačů"
```

V textu doplnit větu:

> „U českých a úzce oborových dotazů ale může být důležitější lokální oborový web, katalog, srovnávač nebo odborné médium než globální komunita typu Reddit.“

---

### [WARNING] „Cizí zdroje působí nezaujatě, protože nejsou vaše“ je příliš zjednodušené

**Problémové místo:**

> „Cizí zdroje působí nezaujatě, protože nejsou vaše.“

Ne každý cizí zdroj je nezaujatý. Recenzní weby, affiliate srovnávače nebo sponzorované články mohou mít vlastní motivaci.

**Návrh opravy:**

> „Cizí zdroje mohou působit nezávisleji než vlastní web, pokud je jasné, kdo za obsahem stojí a nejde o skrytou reklamu, spam nebo falešné recenze.“

---

### [WARNING] Sekce „Zmínky versus zpětné odkazy“ působí příliš kategoricky

**Problémové místo:**

> „Pro citace v AI odpovědích jsou podle analýz lepším signálem zmínky o značce — i bez odkazu.“

> „AI spíš zajímá, jestli a jak se o značce mluví, než kolik na ni vede odkazů.“

Tvrzení je pravděpodobně směrné, ale bez zdrojů a bez vymezení platformy je příliš silné. Navíc „AI zajímá“ antropomorfizuje systémy.

**Návrh opravy:**

> „U části AI vyhledávání mohou být samotné zmínky o značce silným signálem i bez odkazu. Neznamená to, že odkazy z jiných webů ztrácí význam; spíš se vedle nich vyplatí sledovat i to, kde a v jakém kontextu se o značce mluví.“

---

### [WARNING] „AI pak míří k vám jako k primárnímu zdroji“ slibuje moc

**Problémové místo:**

> „na originální čísla a srovnání se ostatní odkazují a AI pak míří k vám jako k primárnímu zdroji.“

To zní téměř jako příslib výsledku. AI nemusí citovat primární zdroj, i když existuje. Může citovat článek, který data převzal.

**Návrh opravy:**

> „Originální čísla a srovnání zvyšují šanci, že vás jiné weby uvedou jako zdroj a že AI systémy správně rozpoznají původní kontext.“

---

### [WARNING] Meta description obsahuje stejný overclaim jako článek

**Problémové místo:**

```yaml
description: "Proč jsou pro viditelnost v AI odpovědích zmínky o značce na cizích webech často důležitější než vlastní web — a jak je férově získat."
```

Délka je v pořádku, ale claim „důležitější než vlastní web“ je potřeba zmírnit.

**Návrh opravy:**

```yaml
description: "Jak zmínky o značce na cizích webech pomáhají AI ověřit důvěryhodnost — a jak je získávat férově bez spamu."
```

---

### [WARNING] FAQ odpověď o odkazech je moc kategorická

**Problémové místo:**

```yaml
a: "Pro klasické pozice v Googlu zpětné odkazy stále hrají roli. Pro citace v AI odpovědích jsou ale podle analýz lepším signálem zmínky o značce — i bez odkazu..."
```

Opět jde o nedoložený silný claim. Navíc otázka používá „zpětné odkazy“ — to je srozumitelné, ale doporučený slovník preferuje „odkazy z jiných webů“.

**Návrh opravy:**

```yaml
a: "Pro klasické pozice v Googlu odkazy z jiných webů stále hrají roli. U AI odpovědí se ale vedle odkazů sledují i samotné zmínky o značce — tedy kde, jak často a v jakém kontextu se o značce mluví. Podle veřejných analýz z let 2025–2026 mohou být zmínky silným signálem hlavně u citací třetích stran."
```

---

### [WARNING] Titulek je SEOově dobrý, ale významově tvrdý

**Problémové místo:**

```yaml
title: "Zmínky o značce: proč AI cituje cizí weby víc než váš"
```

Délka je v pořádku, klíčové slovo je na začátku. Problém je význam „víc než váš“, který opakuje zjednodušený claim.

**Návrh opravy:**

```yaml
title: "Zmínky o značce: proč AI cituje i cizí weby"
```

Nebo přesnější varianta:

```yaml
title: "Zmínky o značce: proč AI věří cizím zdrojům"
```

Obě zachovávají KW vepředu a jsou méně kategorické.

---

### [WARNING] V článku chybí přesné použití cílového anglického KW „ai brand mentions“

**Problémové místo:**

Cílové KW je uvedené ve frontmatteru:

```yaml
- "ai brand mentions"
```

Ale v těle článku se přesná fráze „AI brand mentions“ prakticky neobjevuje. Pokud je to cílový dotaz, měla by se jednou přirozeně objevit v úvodu nebo v první vysvětlující sekci.

**Návrh opravy:**

Do druhého odstavce doplnit:

> „V angličtině se pro tuto vrstvu často používá označení **AI brand mentions** — tedy zmínky o značce, které pomáhají AI systémům chápat, kde a v jakém kontextu se o značce mluví.“

---

### [WARNING] Dva odkazy se stejným anchor textem vedou jinam

**Problémové místo:**

> „Celkový obrázek o viditelnosti dá [AI SEO audit](/blog/ai-seo-audit/).“

> „Pro plán na míru je tu [AI SEO audit](/audit/) za 9 990 Kč.“

Stejný anchor „AI SEO audit“ vede jednou na blogový článek a jednou na produktovou stránku. To je matoucí pro uživatele i interní navigaci.

**Návrh opravy:**

Rozlišit anchor texty:

> „Celkový obrázek o viditelnosti vysvětluje článek [jak funguje AI SEO audit](/blog/ai-seo-audit/).“

> „Pro plán na míru je tu produktový [AI SEO audit za 9 990 Kč](/audit/).“

---

### [TIP] H2 struktura je logická, ale FAQ není v těle markdownu

**Problémové místo:**

FAQ je pouze ve frontmatteru:

```yaml
faq:
  - q: ...
```

Pokud šablona FAQ automaticky vykresluje, je to v pořádku. Pokud ne, čtenář FAQ neuvidí, přestože je obsahově dobré a odpovědi jsou většinou sebestačné.

**Návrh opravy:**

Ověřit šablonu. Pokud FAQ nevykresluje automaticky, doplnit do markdownu sekci:

```markdown
## FAQ: zmínky o značce a AI viditelnost
```

A vykreslit otázky i odpovědi z frontmatteru.

---

### [TIP] CTA je konkrétní a splňuje zadání

**Dobré místo:**

> „pomůže [AI SEO Wireframe Pack](/pack/) za 1 490 Kč. Pro plán na míru je tu [AI SEO audit](/audit/) za 9 990 Kč.“

Tohle je správně: CTA není generické „kontaktujte nás“, vede na konkrétní produkty a uvádí ceny.

**Drobná úprava:**

Zvážit jasnější rozlišení podle potřeby:

> „Chcete připravit vlastní web jako základ? Vezměte [AI SEO Wireframe Pack](/pack/) za 1 490 Kč. Chcete zjistit, kde vás AI dnes bere/nebere jako zdroj? Objednejte [AI SEO audit](/audit/) za 9 990 Kč.“

---

### [TIP] Aktuálnost je formálně v pořádku

**Dobré místo:**

```yaml
updated: "2026-05-24"
```

Datum odpovídá zadání. Text nepoužívá problematické „letos“ nebo „příští rok“.

**Nutná podmínka:**

Jakmile doplníte zdroje analýz, musí být skutečně z let 2025–2026 nebo jasně označené jako starší kontext.