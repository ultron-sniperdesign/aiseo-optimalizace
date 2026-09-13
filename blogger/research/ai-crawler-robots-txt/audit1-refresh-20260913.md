## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Refresh opravil hlavní věcnou chybu kolem `Claude-User`, ale článek ještě není bezpečný k publikaci. Největší problém je nevyhovující „answer“, porušený povinný formát H2 a několik formulací silnějších, než dovolují dodané primární zdroje.

---

# 1. Blokující nálezy

## 1. [BLOCKER] Frontmatter `answer` nesplňuje pravidlo pro krátkou odpověď

**Citace:**

```md
answer: "Kvůli citacím neblokujte vyhledávací roboty ..."
```

**Problém:**

- Krátká odpověď nezačíná definicí.
- Začíná doporučením („Kvůli citacím…“), ne samostatným vysvětlením pojmu.
- Pro AI citovatelnost je lepší, aby dávala smysl i bez titulku a okolního článku.
- Navíc neobsahuje `Google-Extended` / `Applebot-Extended`, přestože článek je výrazně řeší.

**Návrh opravy:**

```md
answer: "Robots.txt pro AI roboty je veřejný soubor v kořeni webu, kterým slušným robotům říkáte, co nemají procházet. Pro citace obvykle nechte projít OAI-SearchBot, Claude-SearchBot a PerplexityBot; pro omezení tréninku zvažte GPTBot, ClaudeBot, CCBot, Google-Extended a Applebot-Extended. Soukromý obsah chraňte serverem, ne robots.txt."
```

---

## 2. [BLOCKER] H2 nadpisy porušují povinný formát webu

**Zadání říká:**  
H2 mají mít povinný tvar:

```md
<span class="hl">pojem</span> + <strong>pointa</strong> + prostý text
```

**Problematické citace:**

```md
## <span class="hl">AI roboti a robots.txt</span>: kdo chodí na web a <strong>jak ho řídit</strong>
```

```md
## Které <span class="hl">AI crawlery</span> <strong>povolit v robots.txt</strong>
```

```md
## Jak <strong>ověřit</strong> <span class="hl">nastavení</span>
```

```md
## Co dál: <strong>nastavte to</strong> v rámci <span class="hl">celého webu</span>
```

**Problém:**

- Některé H2 mají text před `<span>`.
- Některé mají `<strong>` před `<span>`.
- Některé končí `<strong>` bez prostého textu za pointou.
- Jeden nadpis používá zakázané/slabé označení „AI crawlery“.

**Návrh opravy:**

Převeďte všechny H2 do jednotného tvaru. Například:

```md
## <span class="hl">AI roboti</span> <strong>řízení přístupu</strong> přes robots.txt
```

```md
## <span class="hl">AI roboti</span> <strong>kdy je povolit</strong> kvůli citacím
```

```md
## <span class="hl">Nastavení robots.txt</span> <strong>jak ho ověřit</strong> po nasazení
```

```md
## <span class="hl">Celý web</span> <strong>nastavte konzistentně</strong> pomocí auditu nebo packu
```

---

## 3. [BLOCKER] Některé formulace jsou silnější než primární zdroje

### 3.1 Blokace vyhledávacích robotů je popsána příliš absolutně

**Citace:**

```md
Blokace vyhledávacích robotů naopak nové citace přes tuhle cestu odřízne — i kdyby byl obsah sebelepší.
```

**Problém:**

- U OpenAI je silné tvrzení relativně dobře kryté dokumentací: opted-out weby „will not be shown in ChatGPT search answers“, ale mohou se objevit jako navigační odkazy.
- U Anthropicu dokumentace říká „may reduce visibility and accuracy“, ne absolutní „odřízne“.
- U Perplexity je bezpečnější mluvit o snížení šance / ztrátě této cesty, ne o jistém odříznutí všech citací.

**Návrh opravy:**

```md
Blokace vyhledávacích robotů výrazně snižuje šanci, že se obsah dostane do odpovědí přes jejich vyhledávací vrstvu; u některých služeb může znamenat, že se web v odpovědích nezobrazí, jinde dokumentace mluví opatrněji.
```

---

### 3.2 Blokace tréninkových robotů je popsána příliš jistě

**Citace:**

```md
Blokace citace nezhorší, ale ani nepomůže.
```

**Problém:**

To je příliš definitivní. U `GPTBot` a `ClaudeBot` lze podle dokumentace říct, že nejsou určeny pro vyhledávací citace. U `CCBot` je situace nepřímější, protože Common Crawl data mohou používat různé třetí strany.

**Návrh opravy:**

```md
Podle deklarovaných rolí GPTBot a ClaudeBot přímo nerozhodují o citacích ve vyhledávacích odpovědích. U dalších sběračů, například CCBot, může být dopad nepřímý a závisí na tom, kdo jejich data dál používá.
```

---

### 3.3 Formulace o Gemini může znít jako slib citací

**Citace:**

```md
Pokud chcete být citovaní i v Gemini, blok Google-Extended vynechte ...
```

**Problém:**

Primární zdroj říká, že `Google-Extended` řídí trénink budoucích modelů Gemini a grounding v Gemini Apps / Vertex AI. Neříká, že povolení zajistí citace v Gemini.

**Návrh opravy:**

```md
Pokud chcete ponechat možnost využití obsahu pro podkládání odpovědí v aplikacích Gemini a ve službě Grounding with Google Search na Vertex AI, blok `Google-Extended` nechte povolený.
```

---

# 2. Doporučení

## 1. [WARNING] Nahraďte zakázané / nevhodné výrazy „crawler“ a „bot“ v běžném textu

**Citace:**

```md
## Které <span class="hl">AI crawlery</span> <strong>povolit v robots.txt</strong>
```

```md
[AI crawler](/slovnik/ai-crawler/)
```

```md
[blokování AI botů přes Cloudflare]
```

**Problém:**

Brand pravidla říkají: „crawler/bot“ bez kontextu → „vyhledávací robot“ / „AI robot“. V češtině článek jinak dobře používá „robot“, takže anglicismy zbytečně vyčnívají.

**Návrh opravy:**

- Viditelný text změnit na „AI roboti“, „vyhledávací roboti“, „roboti vyvolaní uživatelem“.
- URL slugy kvůli existujícím stránkám neměnit, pokud jsou kanonické.

Například:

```md
## <span class="hl">AI roboti</span> <strong>kdy je povolit</strong> v robots.txt
```

```md
Základní pojmy najdete i ve slovníku — [AI robot](/slovnik/ai-crawler/) a [robots.txt](/slovnik/robots-txt/).
```

---

## 2. [WARNING] Explicitně doplňte, že `Google-Extended` neřídí AI Overviews ani AI Mode ve Vyhledávání Google

**Citace:**

```md
Google-Extended můžete zakázat, aniž tím měníte viditelnost ve Vyhledávání Google.
```

**Problém:**

Je to blízko správně, ale u tak citlivého tématu je potřeba zabránit záměně:

- `Google-Extended` neovlivní zařazení ani pozice v Google Search.
- Neřídí Přehled od AI / AI Overviews ani režim AI ve Vyhledávání Google.
- Řídí Gemini Apps a Grounding with Google Search na Vertex AI.

**Návrh opravy:**

Do sekce `Google-Extended řešte zvlášť` přidat větu:

```md
Nepleťte si to s Přehledem od AI ani režimem AI ve Vyhledávání Google: `Google-Extended` podle dokumentace neřídí jejich zobrazení. Týká se využití obsahu pro Gemini Apps a Grounding with Google Search na Vertex AI.
```

---

## 3. [WARNING] AIPREF obsahuje časově problematickou formulaci po srpnu 2026

**Citace:**

```md
doprovodný draft má milník poslat specifikaci do IESG v srpnu 2026
```

**Problém:**

Článek je aktualizovaný 13. 9. 2026. Formulace „má milník … v srpnu 2026“ po tomto datu působí zastarale nebo neověřeně.

**Návrh opravy:**

```md
U doprovodného draftu byl pro odeslání specifikace do IESG uváděn milník srpen 2026; k datu ověření 13. 9. 2026 ale nejde o ratifikovaný standard. Stav proto před nasazením znovu ověřte.
```

Stejnou opravu udělat ve FAQ i v Insight boxu.

---

## 4. [WARNING] Pasáž o Cloudflare Content Signals je spekulativní a může kanibalizovat samostatný článek

**Citace:**

```md
formát, který se dnes učíte, má slušnou šanci být tím, co z AIPREF vyleze
```

**Problém:**

- „Má slušnou šanci“ je predikce, ne ověřený fakt.
- Sekce jde dost hluboko do tématu, které má vlastní článek `/blog/content-signals-rizeni-ai-botu/`.
- V zadání je výslovně uvedena kanibalizace tohoto tématu.

**Návrh opravy:**

Zkrátit na orientační odstavec a poslat detail do samostatného článku:

```md
Cloudflare mezitím používá vlastní Content Signals pro vyjádření účelu využití obsahu. Berte je jako doplněk k robots.txt, ne jako náhradu výčtu robotů. Protože se standardizace AIPREF může změnit, detailní nastavení řeší samostatný návod: [Content Signals: řízení AI robotů podle účelu](/blog/content-signals-rizeni-ai-botu/).
```

---

## 5. [WARNING] Ukázky s `Allow: /` jsou správně vysvětlené, ale stále příliš snadno kopírovatelné špatně

**Citace:**

```txt
User-agent: OAI-SearchBot
Allow: /
```

a později:

```txt
# Chci citace, nechci trénink

# vyhledávací a on-demand roboty pustit
User-agent: OAI-SearchBot
Allow: /
```

**Problém:**

Článek správně vysvětluje, že samostatná skupina s `Allow: /` může přepsat obecné zákazy z `User-agent: *`. Ale velký kompletní snippet níže může čtenář zkopírovat bez toho, aby zopakoval důležité `Disallow` pro košík, interní vyhledávání apod.

**Návrh opravy:**

Přímo nad kompletní ukázku přidat výrazné upozornění:

```md
Tuto ukázku nekopírujte naslepo. Pokud máte v `User-agent: *` zákazy pro košík, interní vyhledávání, filtry nebo neveřejné části webu, zopakujte je i v každé vlastní skupině pro konkrétního robota.
```

A do ukázky přidat komentář:

```txt
# Pokud máte obecné zákazy, zopakujte je i tady:
# Disallow: /kosik/
# Disallow: /vyhledavani/
# Disallow: /*?order
```

---

## 6. [WARNING] Některé role robotů nejsou podložené ve zdrojích uvedených pod článkem

**Citace:**

```md
Meta-ExternalAgent | Meta | sběrač | sběr dat pro AI produkty Meta
```

```md
Bytespider | ByteDance | sběrač | sběr dat; opakovaně hlášeno nerespektování robots.txt
```

```md
Kategorie i účel ... názvy přibývají (Diffbot, cohere-ai, YouBot).
```

**Problém:**

Závěrečné zdroje pokrývají Anthropic, OpenAI, Google, Perplexity, Apple a Amazon. Pro Meta, ByteDance, Diffbot, Cohere, YouBot a Common Crawl nejsou u článku uvedené primární zdroje. Pokud je článek „tutorial“ a má být autoritativní, tyto položky musí být buď zdrojované, nebo opatrněji formulované.

**Návrh opravy:**

- Přidat odkazy na primární dokumentaci těchto provozovatelů.
- Nebo zjemnit formulace:

```md
U dalších robotů, například Bytespider, Meta-ExternalAgent nebo YouBot, se účel a respektování pravidel hůř ověřuje z jednotné dokumentace. Pokud je řešíte, ověřte aktuální pravidla přímo u provozovatele a v serverových logách.
```

---

## 7. [WARNING] Kanibalizace s podpůrnými články je stále patrná

**Citace:**

```md
U většiny robotů vyvolaných uživatelem robots.txt podle dokumentace spolehlivě nezabere ...
```

```md
V IETF běží pracovní skupina AIPREF ...
```

```md
Content Signals — tentýž princip ...
```

**Problém:**

Zadání výslovně upozorňuje na kanibalizaci s:

- `/blog/roboti-vyvolani-uzivatelem/`
- `/blog/co-vypne-ktery-opt-out/`
- `/blog/content-signals-rizeni-ai-botu/`

Hub má téma otevřít a poslat dál, ne převzít detail. Největší riziko je sekce o AIPREF/Content Signals a odstavec o robotech vyvolaných uživatelem.

**Návrh opravy:**

- V hubu ponechat stručnou definici + rozhodovací dopad.
- Detailní výklad přesunout do interních odkazů.

Například sekci o robotech vyvolaných uživatelem zkrátit na:

```md
Roboti vyvolaní uživatelem se chovají různě podle provozovatele: `Claude-User` podle Anthropicu robots.txt respektuje, zatímco `ChatGPT-User`, `Perplexity-User`, vybrané Google fetchery a `Amzn-User` ho mohou ignorovat nebo neuplatnit vždy. Detailní rozdíly řeší samostatný článek o robotech vyvolaných uživatelem.
```

---

## 8. [TIP] První odstavec těla je věcně dobrý, ale mohl by obsahovat konkrétní roboty

**Citace:**

```md
Přístup slušných veřejných AI robotů řídíte hlavně přes soubor robots.txt ...
```

**Hodnocení:**

Prvních ~100 slov funguje samostatně a vysvětluje téma. Pro AI citovatelnost by ale mohlo být ještě fakticky hustší.

**Návrh úpravy:**

Doplnit jednu větu s konkrétními třídami:

```md
Prakticky oddělujte vyhledávací roboty pro citace (`OAI-SearchBot`, `Claude-SearchBot`, `PerplexityBot`), tréninkové roboty (`GPTBot`, `ClaudeBot`, `CCBot`) a řídicí tokeny jako `Google-Extended`.
```

---

## 9. [TIP] SEO metadata jsou v pořádku

**Kontrola:**

```md
title: "Robots.txt pro AI roboty: kdy povolit a kdy omezit přístup"
```

- Titulek má klíčové slovo na začátku.
- Délka je přibližně v požadovaném rozmezí 50–60 znaků.

```md
description: "Robots.txt pro AI roboty: jak povolit citace, omezit trénink modelů ..."
```

- Meta description je v rozmezí 70–160 znaků.
- Slug `ai-crawler-robots-txt` je smysluplný vzhledem k historii/hubu.

**Bez nutné opravy.**

---

## 10. [TIP] CTA je konkrétní a splňuje zadání

**Citace:**

```md
pomůže [AI SEO Wireframe Pack](/pack/) za 1 490 Kč
```

```md
dává smysl [AI SEO audit](/audit/) za 3 600 Kč
```

**Hodnocení:**

CTA není generické „kontaktujte nás“ a vede na konkrétní produkty s cenou. To je správně.

---

# 3. Co refresh zlepšil a co případně rozbil

## Zlepšil

- Oprava `Claude-User` je věcně správná a konzistentně propsaná do tabulek, FAQ i sekce o robots.txt.
- `Google-Extended` je nově popsán přesněji: nejen trénink, ale i grounding v Gemini Apps / Vertex AI.
- Doplnění Amazon robotů (`Amazonbot`, `Amzn-SearchBot`, `Amzn-User`) je užitečné.
- Velmi dobrá je pasáž o tom, že samostatná skupina s `Allow: /` může přepsat obecné zákazy z `User-agent: *`.
- CTA na Pack a Audit odpovídá zadání.

## Rozbil / nechal nedořešené

- Frontmatter `answer` nesplňuje požadavek na definici a samostatnou krátkou odpověď.
- H2 nadpisy nejsou v povinném formátu webu.
- V textu zůstaly příliš absolutní formulace o citacích, blokaci tréninkových robotů a Gemini.
- Sekce AIPREF obsahuje časově problematický milník „srpen 2026“ po datu aktualizace článku.
- Některé části stále kanibalizují samostatné články o user-triggered robotech, opt-outech a Content Signals.
- Viditelné použití „AI crawlery“ je mimo požadovaný brand slovník.