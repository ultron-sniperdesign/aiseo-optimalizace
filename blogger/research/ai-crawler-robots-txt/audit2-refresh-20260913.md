## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Blokující věcné chyby nevidím, ale zůstává několik **warningů**, které jsou v článku o řízení AI robotů dost citlivé: hlavně nepřesné počítání robotů, zamíchání `ChatGPT-User` mezi roboty „pro citace“ a místy příliš silné formulace u `Google-Extended`.

---

## 1. Blokující nálezy

Žádné [BLOCKER] nálezy jsem v aktuální verzi nenašel.

Opravy z prvního kola u `answer`, `Claude-User`, `Google-Extended`, tréninkových robotů a varování nad ukázkou `robots.txt` v zásadě sedí.

---

## 2. Doporučení

### 1. [WARNING] Statistika „17 robotů“ je nepřesná vůči textu článku

> `value: "17"`  
> `label: "AI robotů a řídicích tokenů, které článek vypisuje jmenovitě (stav k 13. 9. 2026)"`

Problém: článek jmenovitě zmiňuje víc než 17 názvů. Kromě 17 položek v hlavní tabulce se v textu objevují minimálně `Perplexity-User`, `Diffbot`, `cohere-ai`, `YouBot` a `Web Bot Auth` jako název návrhu. Aktuální label tedy tvrdí něco jiného, než článek dělá.

**Oprava:**

Buď zpřesnit label:

> `17` — `AI robotů a řídicích tokenů v hlavní tabulce, stav k 13. 9. 2026`

Nebo doplnit `Perplexity-User` do hlavní tabulky a přepočítat hodnotu na 18. To bych doporučil víc, protože `Perplexity-User` v článku věcně řešíte v části o robotech vyvolaných uživatelem.

---

### 2. [WARNING] Ukázka „pro vyhledávání a citace“ míchá vyhledávací a on-demand roboty

> `# Pustit AI roboty pro vyhledávání a citace`  
> `User-agent: OAI-SearchBot`  
> `...`  
> `User-agent: ChatGPT-User`  
> `Allow: /`  
> `User-agent: Claude-User`  
> `Allow: /`

Problém: `ChatGPT-User` podle ověřené dokumentace OpenAI **není používán k rozhodování, jestli se obsah objeví ve Search**, a pravidla `robots.txt` se na něj nemusí vztahovat. `Claude-User` je také robot na vyžádání, ne vyhledávací robot. Nadpis komentáře proto čtenáře vede k závěru, že i `ChatGPT-User` je robot „pro vyhledávání a citace“.

**Oprava:**

Rozdělit ukázku na dvě části:

```txt
# Vyhledávací roboti pro nové citace / zobrazení ve vyhledávacích odpovědích
User-agent: OAI-SearchBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

# Načtení stránky na přímý dotaz uživatele
# Pozor: ChatGPT-User podle OpenAI nerozhoduje o zobrazení ve Search
# a pravidla robots.txt se na něj nemusí vztahovat.
User-agent: ChatGPT-User
Allow: /

User-agent: Claude-User
Allow: /
```

Stejně upravit i větu těsně před ukázkou, aby nezněla, že `ChatGPT-User` pomáhá přímo s citacemi ve vyhledávání.

---

### 3. [WARNING] U `Google-Extended` zůstává místy silnější formulace než zdroj

> `Zákaz Google-Extended ale vypne i podkládání odpovědí vaším obsahem v aplikacích Gemini.`

> `Google-Extended ... jeho zákaz vypne i podkládání odpovědí vaším obsahem v aplikacích Gemini.`

> `Pokud nechcete obsah vyřadit i z podkládání odpovědí v aplikacích Gemini, blok Google-Extended vynechte...`

Problém: zdrojová formulace Googlu je přesnější: vydavatel řídí, jestli obsah, který Google prochází, **may be used for grounding** v Gemini Apps a v Grounding with Google Search na Vertex AI. Sloveso „vypne“ je pro čtenáře srozumitelné, ale je zbytečně absolutní a může znít jako vypnutí celé funkce podkládání odpovědí, ne jen vyřazení daného obsahu z použití.

**Oprava:**

Sjednotit na opatrnější formulaci:

> `Zákaz Google-Extended vyřadí tento obsah z použití pro podkládání odpovědí v aplikacích Gemini a ve službě Grounding with Google Search na Vertex AI.`

A v kratších místech:

> `...nechcete-li obsah vyřadit z použití pro podkládání odpovědí v aplikacích Gemini, blok Google-Extended vynechte.`

---

### 4. [WARNING] Tabulka zkracuje Vertex AI příliš široce

> `Google-Extended | ... | trénink budoucích modelů Gemini a podkládání odpovědí v aplikacích Gemini a na Vertex AI`

Problém: „na Vertex AI“ je moc široké. Ověřená citace mluví konkrétně o **Grounding with Google Search on Vertex AI**, ne obecně o celém Vertex AI.

**Oprava:**

V tabulce změnit účel na:

> `trénink budoucích modelů Gemini a podkládání odpovědí v aplikacích Gemini a ve službě Grounding with Google Search na Vertex AI`

---

### 5. [WARNING] Metadata u AIPREF říkají „standard“, i když článek správně vysvětluje, že standardem ještě není

> `label: "standard IETF pro AI preference (AIPREF) je zatím jen ve fázi návrhu"`

Problém: „standard IETF ... je zatím návrh“ je terminologicky nečisté. V těle článku už správně píšete, že jde o adoptované drafty, ne ratifikovaný standard.

**Oprava:**

Změnit label například na:

> `návrh IETF pro AI preference (AIPREF) je zatím ve fázi draftu`

Nebo:

> `AIPREF je návrh budoucího standardu pro AI preference`

---

### 6. [WARNING] Tvrzení o Cloudflare Content Signals má číslo, ale v článku nemá přímý zdroj

> `Podle Cloudflare je nasazený na zhruba 3,8 milionu domén a firma ho posílá ke standardizaci právě do AIPREF.`

Problém: konkrétní číslo 3,8 milionu domén je silný faktický claim. V závěrečných zdrojích jsou zdroje k rolím robotů, ale ne zdroj ke Cloudflare Content Signals / AIPREF claimu. Interní odkaz na vlastní návod nestačí, pokud má být tento hub citovatelný samostatně.

**Oprava:**

Doplnit inline odkaz na primární zdroj Cloudflare přímo v této větě, např.:

> `Podle Cloudflare je Content Signals nasazený na zhruba 3,8 milionu domén...`

s odkazem na konkrétní Cloudflare oznámení / dokumentaci.

Případně číslo odstranit:

> `Podle Cloudflare je Content Signals už nasazený ve velkém rozsahu...`

---

### 7. [TIP] V článku zůstává jeden zbytečný výskyt „AI botů“

> `[Content Signals: řízení AI botů podle účelu](/blog/content-signals-rizeni-ai-botu/)`

Problém: slovník webu preferuje „roboty“ před „boty“. Pokud nejde o oficiální název jako `Web Bot Auth`, není důvod používat „botů“.

**Oprava:**

Změnit anchor text:

> `[Content Signals: řízení AI robotů podle účelu](/blog/content-signals-rizeni-ai-botu/)`

Slug může zůstat.

---

### 8. [TIP] Úvod používá neukotvené „dnes“

> `kteří roboti dnes web navštěvují`

Problém: článek je silně vázaný na stav k 13. 9. 2026. „Dnes“ bude za pár měsíců nejasné, i když metadata mají `updated`.

**Oprava:**

Změnit na:

> `kteří roboti web navštěvují podle dokumentace ověřené k 13. 9. 2026`

Nebo kratší:

> `kteří roboti se k 13. 9. 2026 v robots.txt běžně řeší`

---

### 9. [TIP] FAQ u blokování zbytečně opakuje neurčité „vyšší šance“ bez Claude

> `Pokud chcete zvýšit šanci na citace v ChatGPT a Perplexity, vyhledávací roboty pusťte.`

Problém: článek jinak konzistentně řeší i Claude přes `Claude-SearchBot`. Tady Claude vypadl, což působí jako drobná nekonzistence.

**Oprava:**

> `Pokud chcete zvýšit šanci na citace nebo zobrazení ve vyhledávacích odpovědích v ChatGPT, Claude a Perplexity, vyhledávací roboty pusťte.`

---

### 10. [TIP] Jinak je druhá revize výrazně lepší

Dobře opraveno:

- `answer` začíná definicí a má samostatný smysl.
- `Claude-User` je nově konzistentně odlišený od `ChatGPT-User`.
- `GPTBot` / `ClaudeBot` už nejsou zaměňované za roboty rozhodující o citacích.
- `Google-Extended` už neříká, že řídí Přehled od AI nebo režim AI ve Vyhledávání Google.
- Ukázka velkého `robots.txt` má správné varování proti slepému kopírování.
- CTA je konkrétní a vede na Pack / Audit, ne na generické „kontaktujte nás“.

---

## 3. Verdikt

**OPRAVIT PŘED PUBLIKACÍ.**

Ne kvůli blockeru, ale kvůli několika přesnostním warningům. Nejrychlejší nutné opravy: zpřesnit počet 17, rozdělit ukázku vyhledávacích a on-demand robotů, změkčit „Google-Extended vypne“ na „vyřadí obsah z použití pro podkládání“ a doplnit zdroj k číslu Cloudflare Content Signals.