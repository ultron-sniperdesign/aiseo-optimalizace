## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek je po 1. kole výrazně lepší: má funkční krátkou odpověď, jasně rozlišuje Režim AI vs. AI přehledy, má konkrétní CTA a většinou drží opatrný tón. Před publikací ale doporučuji opravit hlavně několik věcných a formulačních rizik, protože část tvrzení je příliš absolutní nebo závislá na aktuální dostupnosti Googlu.

---

## Nálezy

### [BLOCKER] Dostupnost v Česku a češtině je tvrzená příliš tvrdě

**Problémové místo:**

> „Ano. Nápověda Googlu uvádí přes 200 zemí a 100+ jazyků, Česko a čeština jsou mezi nimi.“

A také ve shrnutí:

> „Česko a čeština jsou podle nápovědy podporované…“

**Problém:**  
Tohle je klíčové faktické tvrzení článku. Pokud je převzaté z nápovědy Googlu, musí být opravdu přesně ověřené ke dni publikace. U Googlu se často liší dostupnost AI Mode, AI Overviews, Search Labs, jazyk rozhraní a jazyk odpovědi. Hrozí záměna údajů pro jinou AI funkci.

**Návrh opravy:**  
Buď tvrzení doložte přesnou formulací ze zdroje, nebo ho změkčete:

> „Podle české nápovědy Googlu je Režim AI dostupný ve více zemích a jazycích včetně češtiny. Dostupnost se ale může lišit podle účtu, přihlášení a rozhraní, proto článek ověřujeme ke dni 26. 8. 2026.“

Ve FAQ nepoužívat prosté „Ano“, pokud není ověřeno na českém účtu v ČR.

---

### [BLOCKER] „Vypínač neexistuje“ je opakované absolutní tvrzení

**Problémové místo:**

> „Vypínač pro něj neexistuje…“

> „Vypínač neexistuje a nápověda Googlu žádný neuvádí.“

> „oficiální vypínač neexistuje.“

**Problém:**  
Absence položky v nápovědě není totéž jako definitivní neexistence ve všech účtech, regionech a testech Googlu. Google UI se mění a testuje varianty. Tvrzení je sice pravděpodobně prakticky správné, ale formulace je příliš definitivní.

**Návrh opravy:**  
Používat ukotvenou formulaci:

> „Google k 26. 8. 2026 v nápovědě neuvádí oficiální přepínač pro vypnutí Režimu AI.“

Ve frontmatter `answer` upravit poslední větu:

> „Google k srpnu 2026 neuvádí samostatný vypínač — je to režim, do kterého vstupujete sami.“

---

### [WARNING] Chrome integrace z dubna 2026 potřebuje ověřit zdroj a rozsah

**Problémové místo:**

> „Google v dubnu 2026 ohlásil hlubší propojení: tlačítko Režim AI rovnou s polem pro dotaz na nové kartě, ‚plus‘ menu pro přidání otevřených karet do dotazu a otevírání odkazů vedle odpovědi.“

**Problém:**  
Tvrzení je velmi konkrétní a závislé na oznámení Googlu. Odkaz ve zdrojích musí být funkční a přesně odpovídat uvedenému titulku, datu i funkcím. Bez toho je to rizikové, protože jde o detail UI a dostupnosti.

**Návrh opravy:**  
Doplnit opatrnější formulaci:

> „Google v oznámení z 16. 4. 2026 popsal plán hlubšího propojení s Chromem…“

A ve zdroji ověřit URL, název článku a datum. Pokud není možné ověřit dostupnost pro ČR, ponechat současnou větu:

> „Pro Česko to k 26. 8. 2026 nemáme ověřené.“

Ta je dobrá.

---

### [WARNING] „Na prohlížeči nezáleží“ je příliš široké

**Problémové místo:**

> „Rozhraní je webové, takže na prohlížeči nezáleží.“

**Problém:**  
U Google funkcí může dostupnost záviset na přihlášení, cookies, regionu, jazyku, verzi prohlížeče, experimentu účtu nebo rozšířeních. Safari jako intent je dobře doplněný, ale formulace je moc absolutní.

**Návrh opravy:**

> „Rozhraní je webové, takže v podporovaném moderním prohlížeči obvykle nepotřebujete nic speciálně nastavovat. Rozhodující je hlavně přihlášení, dostupnost pro účet a věk 18+.“

---

### [WARNING] „Režim AI se nespustí sám“ může být časem nepravdivé

**Problémové místo:**

> „Režim AI se nespustí sám.“

**Problém:**  
Dnes může být správně, ale Google může testovat automatické vstupy, výraznější tlačítka nebo přesměrování z dotazu. Jako výuková zkratka je to srozumitelné, ale u článku datovaného 2026 bych ji ukotvil.

**Návrh opravy:**

> „Podle aktuálního popisu Googlu do Režimu AI vstupujete sami — například přes záložku, tlačítko nebo adresu google.com/ai.“

---

### [WARNING] Popis zdroje odpovědí je zjednodušený

**Problémové místo:**

> „Zdroj odpovědi: Webový index Googlu, odpověď s odkazy“

A ve FAQ:

> „odpověď staví nad webovým indexem Googlu s odkazy na zdroje.“

**Problém:**  
Režim AI pravděpodobně nepoužívá jen „webový index“ v úzkém smyslu. Vyhledávání Googlu kombinuje různé systémy, webové zdroje, strukturované informace, lokální/product data a generativní model. Formulace může působit nepřesně.

**Návrh opravy:**

> „Režim AI je součást Vyhledávání Google a odpovědi skládá nad informacemi ze systémů Googlu včetně webových zdrojů, u kterých zobrazuje odkazy.“

V tabulce:

> „Systémy Vyhledávání Google včetně webových zdrojů; odpověď s odkazy.“

---

### [WARNING] Historie konverzací potřebuje přesnější ukotvení

**Problémové místo:**

> „Panel Historie režimu AI přímo v rozhraní…“

> „Moje aktivita na myactivity.google.com — tam se historie i maže, jednotlivě nebo celá.“

**Problém:**  
Je to užitečné, ale závislé na přesném názvosloví UI. „Panel Historie režimu AI“ musí odpovídat českému rozhraní Googlu. Pokud se položka jmenuje jinak, článek bude působit nedůvěryhodně.

**Návrh opravy:**  
Doplnit opatrnost:

> „V rozhraní Režimu AI hledejte položku historie konverzací; přesný název se může podle jazyka rozhraní měnit.“

A:

> „V účtu Google ji hledejte také v Mojí aktivitě na myactivity.google.com, pokud je ukládání aktivity pro váš účet zapnuté.“

---

### [WARNING] UI kroky jsou stále místy příliš jisté

**Problémové místo:**

> „Po zadání dotazu na google.com najdete Režim AI u vyhledávacího pole vedle záložek Vše, Obrázky a dalších.“

> „Na hlavní obrazovce aplikace klepněte na Režim AI.“

**Problém:**  
UI Googlu se liší podle účtu, zařízení, regionu, experimentu a přihlášení. Text už uvádí „tlačítko se nemusí zobrazit“, ale v samotných krocích zní dostupnost jistě.

**Návrh opravy:**  
Přidat „pokud je pro váš účet dostupný“:

> „Pokud je Režim AI pro váš účet dostupný, po zadání dotazu ho najdete u vyhledávacího pole vedle záložek Vše, Obrázky, Videa.“

A:

> „V aplikaci Google se může zobrazit na hlavní obrazovce jako tlačítko Režim AI.“

---

### [WARNING] FAQ odpověď „Funguje režim AI v Safari?“ je moc kategorická

**Problémové místo:**

> „Ano, přes běžné vyhledávání Google nebo adresu google.com/ai. Rozhraní je webové, takže na prohlížeči nezáleží.“

**Problém:**  
Dobře pokrývá intent Safari, ale „na prohlížeči nezáleží“ je nepřesné. Viz výše.

**Návrh opravy:**

> „Ano, v podporovaném moderním Safari ho obvykle otevřete přes běžné vyhledávání Google nebo adresu google.com/ai, pokud je funkce dostupná pro váš účet. Speciální chromeové tlačítko na nové kartě se Safari netýká.“

---

### [TIP] Slovo „prompt“ je zbytečný žargon

**Problémové místo:**

> „tlačítko Režim AI s promptem na nové kartě“

**Problém:**  
Není to zakázaný termín, ale pro cílový edukativní tón je zbytečně odborný.

**Návrh opravy:**

> „tlačítko Režim AI s polem pro zadání dotazu na nové kartě“

V těle článku už podobná formulace je, jen FAQ ještě používá „prompt“.

---

### [TIP] Krátká odpověď je dobrá, ale upravit absolutní závěr

**Problémové místo:**

```yaml
answer: "Režim AI je samostatná záložka vyhledávání Googlu..."
```

**Hodnocení:**  
Délka odpovědi je v pořádku, začíná definicí a dává smysl samostatně. To je dobré.

**Návrh drobné opravy:**  
Kvůli přesnosti upravit poslední větu:

> „Google k srpnu 2026 neuvádí samostatný vypínač — je to režim, do kterého vstupujete sami.“

---

### [TIP] SEO titulky a description jsou v pořádku

**Hodnocení:**  
- `seoTitle` má klíčové slovo na začátku a délku přibližně v doporučeném rozsahu.
- `description` je věcný, neprodejní a pravděpodobně v limitu 70–160 znaků.
- Slug `rezim-ai-google` je smysluplný.
- Interní odkazy dávají tematicky smysl: AI Mode pilíř, AI Overview návod, zobrazení v AI Mode, Free PDF, Pack, Audit.

Bez nutné opravy.

---

### [TIP] CTA je konečně konkrétní a odpovídá nabídce

**Problémové místo:**  
Žádný zásadní problém.

**Hodnocení:**  
Závěr vede na:
- návod zdarma,
- AI SEO Wireframe Pack za 1 490 Kč,
- AI SEO audit za 3 600 Kč.

Formulace „aby váš web měl šanci“ je bezpečná a neslibuje garantované doporučování AI. To je v pořádku.

---

## Shrnutí nutných úprav

Před publikací bych opravil hlavně:

1. Změkčit a přesně doložit dostupnost v Česku / češtině.  
2. Nahradit absolutní „vypínač neexistuje“ formulací „Google k datu neuvádí oficiální přepínač“.  
3. Ověřit chromeový zdroj z 16. 4. 2026 a případně upravit podle skutečného znění.  
4. Změkčit věty závislé na UI: „najdete tlačítko“, „na prohlížeči nezáleží“, „spustí se / nespustí se“.  
5. Přesněji popsat, z čeho Režim AI skládá odpovědi — ne jen „webový index Googlu“.