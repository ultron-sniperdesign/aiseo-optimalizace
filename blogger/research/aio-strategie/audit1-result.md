Níže jen problémy, které po refreshi pořád vidím. Zaměřuji se i na frontmatter.

---

# 1. Zbytky / náhražky po chybné měřicí vrstvě

## 1.1 FAQ stále doporučuje měřit něco, co není dobře operacionalizované
**Místo:** frontmatter → `faq` → „Jaké KPI sledovat pro AIO?“  
**Citace:**  
> „Leading ... **AIO a AI Mode presence z ručního auditu top dotazů**, citation count v ChatGPT/Perplexity.“

**Problém:**  
Tohle už netvrdí neexistující metriku v GSC, ale „AIO a AI Mode presence“ je podané jako KPI bez metodického omezení přímo v odpovědi. V těle článku omezení máš („víc běhů“, volatilita, vzorek), ve FAQ ne. FAQ pak zní tvrději než samotný text.

**Návrh opravy:**  
Dopsat omezení přímo sem, např.:  
> „Leading ... AIO a AI Mode presence z **opakovaného ručního auditu vzorku top dotazů** (nejde o plně reprezentativní metriku), citation count ...“

---

## 1.2 HowTo krok „Baseline audit a měření“ směšuje stabilní a nestabilní jevy
**Místo:** frontmatter → `howto` → krok „Den 15–45 — Baseline audit a měření“  
**Citace:**  
> „... zapsat doporučený úryvek (Y/N), AIO panel (Y/N), AI Mode (Y/N), citace v ChatGPT/Perplexity/Claude (Y/N).“

**Problém:**  
Formálně už netvrdíš neexistující metriku v GSC, ale používáš binární Y/N pro jevy, které jsou volatilní a personalizované. V těle článku pak správně píšeš, že „jeden běh nestačí“. Tady je metodika zkratkovitá a v rozporu s vlastní výhradou.

**Návrh opravy:**  
Změnit na něco jako:  
> „... zapsat výskyt ve **3–5 opakovaných bězích**: doporučený úryvek, AIO panel, AI Mode, citace v ChatGPT/Perplexity/Claude; evidovat **počet výskytů / počet běhů**, ne jen Y/N.“

---

# 2. Přestřelená tvrzení nad rámec doložených zdrojů

## 2.1 „Veřejně nikdy nebyl“ je silnější, než co dokládáš
**Místo:** box s opravou  
**Citace:**  
> „... doporučený úryvek mezi nimi nefiguruje — **veřejně nikdy nebyl**.“

**Problém:**  
Z toho, že v aktuální nápovědě 4. 8. 2026 není uveden, neplyne bezpečně „veřejně nikdy nebyl“. To je historické tvrzení přes celé období existence GSC. Pokud nemáš archiv dokumentace nebo produktové oznámení, je to nedoložený absolutní výrok.

**Návrh opravy:**  
> „... doporučený úryvek mezi nimi nefiguruje — **v aktuální veřejné dokumentaci a rozhraní ho nenacházíme**.“  
nebo  
> „... **nedohledali jsme pro něj veřejně dokumentovaný typ zobrazení v GSC**.“

---

## 2.2 „Kdo se článkem řídil, stavěl dashboard...“ je spekulace
**Místo:** box s opravou  
**Citace:**  
> „Kdo se článkem řídil, stavěl dashboard na dvou metrikách, které se nenaplní.“

**Problém:**  
Nevíš, kdo se tím skutečně řídil a jestli si na tom dashboard postavil. Je to rétoricky silné, ale nedoložené.

**Návrh opravy:**  
> „Článek **mohl čtenáře vést k návrhu dashboardu** nad dvěma metrikami, které se v praxi nenaplní.“

---

## 2.3 „Google ho spouštěl postupně“ bez zdroje
**Místo:** sekce „Kde se AI viditelnost dá dnes měřit“  
**Citace:**  
> „Za prvé **report Generativní AI funkce nemá každý web — Google ho spouštěl postupně**.“

**Problém:**  
V zadání uvádíš vlastní ověření, že ho nemá každý web. To ale ještě automaticky nedokládá mechanismus „spouštěl postupně“, pokud nemáš oficiální zdroj nebo širší evidenci rolloutů.

**Návrh opravy:**  
> „Za prvé **report Generativní AI funkce nemá každý web**; dostupnost se mezi weby liší.“

Pokud máš oficiální rollout zdroj, uveď ho.

---

## 2.4 „Jednorázový záznam je spíš los než údaj“ je publicistické přestřelení
**Místo:** sekce „Kde se AI viditelnost dá dnes měřit“  
**Citace:**  
> „... takže **jednorázový záznam je spíš los než údaj**.“

**Problém:**  
Obsahově směřuje správně, ale formulace je přehnaná. Jeden běh může být pořád užitečný orientační snapshot; jen není dost robustní pro KPI.

**Návrh opravy:**  
> „... takže **jednorázový záznam je jen orientační snapshot, ne robustní KPI údaj**.“

---

## 2.5 „Žádná známá firma ho dnes plně neprovozuje“ je příliš absolutní
**Místo:** frontmatter → `faq` → „Co je AIO Maturity Model a jak ho použít?“  
**Citace:**  
> „L5 Predictive (aspirační level — **žádná známá firma ho dnes plně neprovozuje**).“

**Problém:**  
To je globální tvrzení. V těle článku to máš opatrnější:  
> „**neznáme firmu** na CZ ani světovém trhu...“

To je správněji formulované. FAQ je silnější a hůř obhajitelné.

**Návrh opravy:**  
> „L5 Predictive (aspirační level — **neznáme firmu, která by ho dnes plně provozovala**).“

---

## 2.6 „AIO strategie efekt nevyvolá“ je kauzální absolutno
**Místo:** frontmatter → `faq` → „Kolik trvá...“  
**Citace:**  
> „Bez SEO základů (top 10 pozic na hlavních KW) **AIO strategie efekt nevyvolá**.“

**Problém:**  
Příliš tvrdé. Může vyvolat dílčí efekt i mimo top 10, zejména u brandu, strukturace obsahu, indexace, citací v některých AI systémech. Spíš platí, že efekt bývá slabší a méně předvídatelný.

**Návrh opravy:**  
> „Bez SEO základů bývá efekt AIO **slabý, pomalý a hůř měřitelný**.“

---

## 2.7 „Pokud zákazník aktivně používá AI nástroje, AIO se vyplatí“ je příliš přímočaré
**Místo:** frontmatter → `faq` → „Funguje AIO strategie pro malou firmu...?“  
**Citace:**  
> „... pokud zákazník před nákupem aktivně používá AI nástroje, **AIO se vyplatí**.“

**Problém:**  
Chybí podmínky: marže, velikost trhu, obsahová kapacita, schopnost měřit, relevance organického kanálu. Tvrzení je příliš obecné.

**Návrh opravy:**  
> „... je **silný kandidát k prioritizaci**, pokud zároveň máte obsahovou kapacitu a umíte dopad měřit.“

---

## 2.8 „Tahle ztráta se kumuluje“ není doložené
**Místo:** úvod, sekce „Proč to nestačí dělat ad-hoc“  
**Citace:**  
> „Firmy bez systematické AIO strategie ztrácejí měsíčně kus traffic share ... — a **tahle ztráta se kumuluje**.“

**Problém:**  
To zní jako empiricky prokázaný tržní mechanismus. Z uvedených tří zdrojů to neplyne. Jde o interpretaci.

**Návrh opravy:**  
> „... mohou postupně ztrácet část pozornosti a referral podílu ve prospěch těch, které AI viditelnost řídí systematičtěji.“

---

## 2.9 „Omezený přístup AI crawlerů ... může snížit šanci, že se obsah objeví v AI odpovědích“
**Místo:** úvod  
**Citace:**  
> „Omezený přístup AI crawlerů v `robots.txt` může v některých scénářích snížit šanci, že se obsah objeví v AI odpovědích...“

**Problém:**  
„v některých scénářích“ to sice zmírňuje, ale stále je to bez opory v textu. U různých systémů je vztah crawler access ↔ citace nejednotný a ne vždy přímý.

**Návrh opravy:**  
> „Omezený přístup některých AI crawlerů může **omezit některé cesty, jak se obsah dostává do AI ekosystému**, ale vztah k samotné citaci není u všech systémů přímo ověřitelný.“

---

# 3. Vnitřní rozpory

## 3.1 Vlastník AIO: „nemůže ji vlastnit jeden člověk“ vs „vlastnictví u marketingového ředitele“
**Místa:**
- frontmatter FAQ → „Kdo má v týmu vlastnit AIO?“  
  > „AIO je cross-funkční zodpovědnost — **nemůže ji vlastnit jeden člověk ani jedno oddělení**.“
- tělo → „Org chart pro AIO“  
  > „**Vlastnictví celku typicky u marketingového ředitele** nebo VP Marketing.“

**Problém:**  
Tohle je formulované rozporně. Jednou říkáš „nemůže ji vlastnit jeden člověk“, podruhé přisuzuješ ownership jednomu člověku. Ve skutečnosti chceš odlišit **execution ownership** od **executive accountability**.

**Návrh opravy:**  
Sjednotit všude na:  
> „AIO **nemůže vykonávat** jeden člověk ani jedno oddělení, ale **jeden člověk má mít executive accountability za celek** — typicky marketingový ředitel / VP Marketing.“

To samé propsat do FAQ.

---

## 3.2 FAQ „leading = ranní indikátory“ je terminologický lapsus
**Místo:** frontmatter → `faq` → „Jaké KPI sledovat pro AIO?“  
**Citace:**  
> „Leading (**ranní indikátory**, sledují aktivitu)...“

**Problém:**  
Zjevný jazykový/terminologický přešlap. Má být „rané“ nebo „předstihové“.

**Návrh opravy:**  
> „Leading (**předstihové indikátory**...)“

---

## 3.3 FAQ: „měření ... napříč ChatGPT, Perplexity, Claude i Google AI Overviews“
**Místo:** frontmatter → `faq` → první odpověď  
**Citace:**  
> „... měření citation share napříč ChatGPT, Perplexity, Claude i Google AI Overviews ...“

**Problém:**  
Uvnitř článku sám popisuješ, že Google část měření dává jen jako imprese v souhrnném reportu a AI Overviews neoddělí od AI Mode. Tady věta vyznívá, jako by citation share šel stejně dobře měřit napříč všemi těmito prostředími. To není pravda.

**Návrh opravy:**  
> „... měření AI viditelnosti napříč ChatGPT, Perplexity, Claude a Googlem, **ale s odlišnou metodikou podle platformy**.“

---

# 4. Oprava chyby: srozumitelnost pro čtenáře

## 4.1 Box přiznává chybu, ale nevysvětluje dost jasně rozdíl mezi „Search Appearance“ a ručním auditem
**Místo:** box s opravou

**Problém:**  
Čtenář pochopí, že původní doporučení bylo špatně. Méně jasné je, co má dělat místo toho, pokud chce měřit featured snippet a FAQ po 7. 5. 2026. To sice vysvětluješ níže, ale box by měl obsahovat jednověté „nahrazení“.

**Návrh opravy:**  
Na konec boxu přidat větu:  
> „Místo toho dnes featured snippet a přítomnost AI ploch sledujeme **ručním opakovaným auditem vzorku dotazů**, zatímco GSC používáme jen pro to, co skutečně reportuje.“

To zlepší navigaci a sníží pocit „co tedy mám dělat“.

---

# 5. Další věcně slabá nebo problematická místa

## 5.1 „FAQPage + HowTo schema“ jako quick win je po 7. 5. 2026 potřeba lépe zarámovat
**Místo:** frontmatter `howto` + více míst v těle  
**Citace:**  
> „doplnění FAQ s reálnými dotazy, **FAQPage + HowTo schema**“  
> „**FAQPage schema coverage**“ jako KPI / OKR

**Problém:**  
Po konci FAQ rich results musíš být velmi přesný, proč FAQPage schema dál doporučuješ. Jinak to vypadá jako relikt staré SEO poučky, zvlášť když zároveň správně píšeš, že FAQ rich výsledky skončily. Čtenář může nabýt dojmu, že FAQPage stále nese přímý SERP benefit v Googlu.

**Návrh opravy:**  
Na prvním výskytu doplnit vysvětlení:  
> „FAQPage schema dál dává smysl hlavně pro **strojovou srozumitelnost a interní konzistenci obsahu**, ne jako cesta k FAQ rich resultům v Googlu, které skončily 7. 5. 2026.“

Bez toho je to metodicky nečisté.

---

## 5.2 „Schema.org Validator + Test rozšířených výsledků ... už netestuje FAQPage“
**Místo:** stack nástrojů  
**Citace:**  
> „... od konce FAQ rozšířených výsledků už **netestuje FAQPage**“

**Problém:**  
Není jasné, zda „netestuje“ znamená vůbec nevaliduje, nebo jen nevrací eligible rich result. Schema.org Validator a Rich Results Test mají odlišný účel. Tohle je příliš zkratkovité a může být fakticky nepřesné podle konkrétního nástroje.

**Návrh opravy:**  
Rozliš to:  
> „Schema.org Validator ověří syntaxi a typy; Rich Results Test už u FAQPage **neřeší způsobilost pro FAQ rich result v Googlu**, protože tato funkce skončila.“

---

## 5.3 „A/B testy answer blocků ... vůči citation rate“
**Místa:** L4 popis + plán pro L3  
**Citace:**  
> „... systematicky testuje různé varianty ... vůči citation rate ...“  
> „A/B testy answer blocků na 5 srovnatelných stránkách“

**Problém:**  
To zní experimentálně přesněji, než je realistické. Ve volatilitě AI odpovědí a bez standardizovaného exposure měření budeš mít spíš kvaziexperiment než A/B test v přísném smyslu.

**Návrh opravy:**  
> „strukturované obsahové testy“  
nebo  
> „kontrolované before/after testy na srovnatelných stránkách“

---

## 5.4 „AI citation count v top 50 oborových KW“ u SaaS jako KPI focus
**Místo:** archetyp 2  
**Citace:**  
> „KPI focus: **AI citation count v top 50 oborových KW**...“

**Problém:**  
S ohledem na vlastní pasáže o volatilitě je „top 50 KW“ pro manuální audit hodně náročné a metodicky křehké. Není to chyba sama o sobě, ale bez dodatku o vzorku a frekvenci je to nerealisticky podané.

**Návrh opravy:**  
> „AI citation count ve **vzorku prioritních oborových dotazů**...“

---

## 5.5 „Google-Extended“ v robots.txt jako jednoduché povolení/blokování je zjednodušené
**Místa:** více míst, např. 90-day plán L1 a howto  
**Citace:**  
>