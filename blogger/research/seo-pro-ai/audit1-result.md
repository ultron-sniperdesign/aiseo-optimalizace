## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek má dobrý formát checklistu, správně míří na praktický hub a CTA vede na konkrétní produkty. Před publikací ale vyžaduje opravy kvůli několika věcně rizikovým nebo příliš absolutním tvrzením, hlavně kolem AI robotů, Bingu a Google AI Overviews.

---

## Nálezy a doporučené opravy

### [BLOCKER] Nepřesné označení AI robotů, hlavně „Claude“

**Problémové místo:**

> „V souboru robots.txt nechte projít vyhledávací roboty OpenAI (OAI-SearchBot), Perplexity a Claude…“

a v těle:

> „V souboru `robots.txt` nechte projít vyhledávací roboty (OAI-SearchBot, PerplexityBot, Claude)…“

**Problém:**  
„Claude“ není přesné označení user-agentu. U Anthropic/Claude je potřeba rozlišit konkrétní aktuální user-agenty podle účelu. Takto to může vést k nefunkčnímu zápisu v `robots.txt`.

**Návrh opravy:**

> V souboru `robots.txt` nechte projít vyhledávací roboty AI služeb podle jejich aktuální dokumentace — například `OAI-SearchBot`, `PerplexityBot` a příslušné Anthropic user-agenty pro Claude podle účelu procházení.

Doporučení: doplnit odkazy na oficiální dokumentaci OpenAI, Perplexity a Anthropic.

---

### [BLOCKER] Tvrzení „ChatGPT s vyhledáváním využívá index Bingu“ je příliš absolutní

**Problémové místo:**

> „Ověřte web v **Bing Webmaster Tools** — ChatGPT s vyhledáváním využívá index Bingu.“

**Problém:**  
Formulace působí jako jisté a úplné vysvětlení zdrojů ChatGPT Search. V roce 2026 je bezpečnější netvrdit, že ChatGPT „využívá index Bingu“ jako jediný nebo přímý zdroj. ChatGPT Search může kombinovat více zdrojů a vlastní procházení.

**Návrh opravy:**

> Ověřte web v **Bing Webmaster Tools** — Bing je praktická kontrola dohledatelnosti a pro část AI vyhledávání může být důležitým zdrojem. Zároveň ale ověřujte i přístup vyhledávacích robotů AI služeb a reálné zmínky v odpovědích.

---

### [BLOCKER] Omezování Google AI Overviews je popsáno zavádějícím způsobem

**Problémové místo:**

> „Pokud naopak chcete přístup omezit, je to legitimní volba; rozebírá ji [návod, jak omezit AI Overview](/blog/jak-vypnout-ai-overview/).“

**Problém:**  
U Google AI Overviews nelze jednoduše „vypnout AI Overview“ samostatně bez možných dopadů na běžné vyhledávání. Blokování Googlebotu nebo omezení snippetů může ovlivnit i klasické výsledky. Tvrzení je potřeba výrazně zpřesnit.

**Návrh opravy:**

> Pokud chcete omezit využití obsahu AI nástroji, rozlišujte mezi AI vyhledávacími roboty a Googlem. U Google AI Overviews nejsou možnosti odděleného vypnutí stejné jako blokace konkrétních AI crawlerů a mohou mít dopad i na běžné výsledky vyhledávání.

A upravit anchor:

> [možnosti omezení využití obsahu v AI Overviews](/blog/jak-vypnout-ai-overview/)

---

### [WARNING] Claim „jeden web funguje pro Google i AI“ je opakovaně moc silný

**Problémová místa:**

> „jeden dobře strukturovaný, technicky zdravý a důvěryhodný web funguje pro Google i pro nástroje jako ChatGPT a Perplexity“

> „Nepotřebujete novou strategii — jeden technicky zdravý a důvěryhodný web funguje pro Google i pro AI nástroje.“

**Problém:**  
Směr je správný, ale „funguje“ je moc jisté. Bezpečnější brand voice má používat formulace typu „může zvýšit šanci“, „pomáhá“, „je dobrý základ“.

**Návrh opravy:**

> Jeden dobře strukturovaný, technicky zdravý a důvěryhodný web je společný základ pro Google i AI nástroje jako ChatGPT a Perplexity. AI vrstvu k němu přidáváte navrch — hlavně citovatelnost, jasné odpovědi a lepší doložitelnost.

Stejně upravit i FAQ a `stats`.

---

### [WARNING] Statistiky ve frontmatteru obsahují overclaim

**Problémové místo:**

```yaml
stats:
  - value: "1 strategie"
    label: "funguje pro Google i AI vyhledávání"
  - value: "2–8 týdnů"
    label: "kdy se technické fixy obvykle projeví"
```

**Problém:**  
„Funguje“ je příliš jisté. „2–8 týdnů“ je konkrétní časové tvrzení bez zdroje a může být zavádějící, protože projevení změn v AI odpovědích není tak přímo měřitelné jako technická indexace.

**Návrh opravy:**

```yaml
stats:
  - value: "1 základ"
    label: "pro Google i AI nástroje"
  - value: "2–8 týdnů"
    label: "orientační interval pro první kontrolu technických změn"
```

---

### [WARNING] Časové tvrzení o výsledcích potřebuje lepší ukotvení

**Problémové místo:**

> „Podle dostupných pozorování se technické fixy … projeví řádově v týdnech, obsahové úpravy obvykle za 1–3 měsíce.“

**Problém:**  
Je dobře, že text říká „podle dostupných pozorování“ a „orientační rámec“. Chybí ale zdroj nebo jasnější omezení, že jde o kontrolní interval, ne o garantované výsledky v AI citacích.

**Návrh opravy:**

> Podle dostupných pozorování se technické změny často vyplatí zkontrolovat po několika týdnech. U obsahových úprav dává smysl první vyhodnocení po 1–3 měsících. Nejde o garanci citací v AI odpovědích, ale o praktický interval pro měření změn.

---

### [WARNING] Strukturovaná data jsou popsána trochu zjednodušeně

**Problémové místo:**

> „Plošně **Article** a **Organization**, **FAQPage** tam, kde reálně odpovídáte na dotazy.“

> „Ověřte validitu v **Testu rozšířených výsledků** a ve validátoru Schema.org.“

**Problém:**  
Doporučení je obecně použitelné, ale je potřeba doplnit, že `FAQPage` nemusí přinášet rozšířené výsledky v Googlu a Test rozšířených výsledků nevaliduje všechna strukturovaná data stejně jako obecný validátor Schema.org.

**Návrh opravy:**

> Plošně řešte hlavně `Article` a `Organization`. `FAQPage` použijte jen tam, kde jsou na stránce skutečné otázky a odpovědi. Validitu ověřte ve validátoru Schema.org; Test rozšířených výsledků použijte jako kontrolu toho, co Google u daného typu podporuje.

---

### [WARNING] Interní odkaz na strukturovaná data vede pravděpodobně na nerelevantní URL

**Problémové místo:**

> `[Strukturovaná data](/geo/) pomáhají strojům rozpoznat typ obsahu…`

**Problém:**  
URL `/geo/` pravděpodobně míří na GEO pilíř, ne na konkrétní návod ke strukturovaným datům. Anchor „Strukturovaná data“ by měl vést na stránku, která skutečně řeší strukturovaná data.

**Návrh opravy:**

- Pokud existuje článek:  
  > `[Strukturovaná data](/blog/strukturovana-data/)`
- Pokud neexistuje, změnit anchor:  
  > `Strukturovaná data jsou jednou z technik GEO; širší kontext najdete v [GEO pilíři](/geo/).`

---

### [WARNING] „Čerstvost zvyšuje šanci na citaci“ je moc obecné tvrzení

**Problémové místo:**

> „Klíčové stránky pravidelně aktualizujte — čerstvost zvyšuje šanci na citaci.“

**Problém:**  
Čerstvost pomáhá hlavně u časově citlivých témat. U evergreen obsahu není samoúčelná aktualizace automaticky pozitivní signál.

**Návrh opravy:**

> Klíčové stránky pravidelně kontrolujte. U časově citlivých témat aktualizujte data, příklady a doporučení; u evergreen obsahu měňte jen to, co zlepšuje přesnost nebo srozumitelnost.

---

### [WARNING] Měření zmínek v AI odpovědích potřebuje metodickou poznámku

**Problémové místo:**

> „Projděte 15–20 zákaznických dotazů v ChatGPT, Perplexity a Googlu a zapište, jestli a jak jste zmíněni.“

**Problém:**  
AI odpovědi jsou proměnlivé podle času, modelu, personalizace, lokace a formulace dotazu. Bez metodiky může být baseline nespolehlivá.

**Návrh opravy:**

> Projděte 15–20 zákaznických dotazů v ChatGPT, Perplexity a Googlu. U každého si uložte přesné znění dotazu, datum, nástroj/model a screenshot nebo export odpovědi. Pokud to jde, měřte bez personalizace a stejnou sadu dotazů opakujte ve stejném režimu.

---

### [WARNING] FAQ opakuje příliš silný claim o jedné strategii

**Problémové místo:**

> „Nepotřebujete novou strategii — jeden technicky zdravý a důvěryhodný web funguje pro Google i pro AI nástroje.“

**Problém:**  
Stejný problém jako výše: „funguje“ je moc jisté.

**Návrh opravy:**

> Nepotřebujete dvě oddělené strategie. Technicky zdravý, srozumitelný a důvěryhodný web je společný základ pro Google i AI nástroje. Pro AI pak přidáváte hlavně krátké odpovědi, vyšší hustotu faktů a lepší doložitelnost.

---

### [WARNING] FAQ o lokálních a transakčních tématech je příliš zobecňující

**Problémové místo:**

> „U čistě transakčních a lokálních věcí je dopad menší.“

**Problém:**  
To nemusí platit plošně. Lokální a transakční dotazy se v AI rozhraních mohou chovat různě podle oboru, lokality a typu rozhodování.

**Návrh opravy:**

> U čistě transakčních a lokálních dotazů si prioritu ověřte v baseline měření — v některých oborech může být důležitější klasická lokální viditelnost, jinde se AI odpovědi do rozhodování už zapojují.

---

### [TIP] Slovo „baseline“ nahraďte česky

**Problémové místo:**

> „Výsledek si uložte jako baseline…“

**Problém:**  
Není to zakázaný termín, ale zbytečně vybočuje z věcného a srozumitelného tónu.

**Návrh opravy:**

> Výsledek si uložte jako výchozí měření, ke kterému se budete vracet.

---

### [TIP] Upravte formulace „AI robotům“ a „roboti“ pro přesnost

**Problémová místa:**

> „Otevřete web AI robotům a Bingu“

> „Zablokovaní roboti nebo chybějící Bing…“

**Problém:**  
„AI roboti“ je méně přesné. Doporučený slovník je „vyhledávací roboti“ nebo „vyhledávací roboti AI služeb“.

**Návrh opravy:**

> Otevřete web vyhledávacím robotům AI služeb a zkontrolujte Bing

a:

> Zablokovaní vyhledávací roboti nebo neověřený Bing…

---

### [TIP] „Nástroje od Googlu“ zní neobratně

**Problémové místo:**

> „Zkontrolujte pozice a návštěvnost v Nástrojích od Googlu (Google Search Console).“

**Návrh opravy:**

> Zkontrolujte dotazy, pozice a návštěvnost v Google Search Console.

---

### [TIP] CTA je dobré, jen lehce zjemnit slib „začnete během odpoledne“

**Problémové místo:**

> „…praktický pracovní rámec za 1 490 Kč, se kterým začnete během odpoledne.“

**Hodnocení:**  
CTA správně směřuje na Pack za 1 490 Kč a Audit za 9 990 Kč. To je v pořádku. „Začnete během odpoledne“ není zásadní problém, ale lze ho zpřesnit.

**Návrh opravy:**

> …praktický pracovní rámec za 1 490 Kč, se kterým si během odpoledne připravíte první návrh struktury pro klíčové stránky.

---

## Co je v pořádku

- Titulek má cca 51 znaků a začíná klíčovým slovem „SEO pro AI“.  
- Meta description má vhodnou délku a jasně popisuje obsah.  
- Slug `seo-pro-ai` je smysluplný.  
- `answer` má vhodnou délku zhruba 40–60 slov a začíná definicí.  
- H2 struktura odpovídá checklistovému/tutorial formátu.  
- Článek dobře odkazuje na pilíř a související návody, jen je potřeba opravit odkaz na strukturovaná data a zpřesnit AI Overviews.  
- Závěrečné CTA správně vede na konkrétní produkty, ne na generické „kontaktujte nás“.