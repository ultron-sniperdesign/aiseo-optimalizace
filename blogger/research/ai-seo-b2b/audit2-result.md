## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Opravy po 1. auditu pomohly, ale článek pořád obsahuje několik zásadních problémů: nedoložené datové claimy, pravděpodobně nepřesné tvrzení o GA4, zbytky tvrdých formulací a nevyčištěný slovník typu „sales“, „product/feature“, „pricing“, „use case“. CTA a základní SEO nastavení jsou naopak většinově v pořádku.

---

## Nálezy

### [BLOCKER] Nedoložené tvrzení o Forrester Buyers' Journey Survey 2026

**Citace:**

> Forrester ve své **Buyers' Journey Survey 2026** uvádí, že generativní AI je ve vzorku **zhruba dvakrát častěji** označovaná za nejvýznamnější research zdroj než kterýkoli jiný kanál — předbíhá vendor weby, product experty i sales zástupce.

**Problém:**  
Jde o velmi konkrétní datový claim, ale článek neuvádí zdroj, odkaz, vzorek, metodiku ani přesnou formulaci. „Veřejné analýzy z roku 2026“ nestačí. Navíc „Buyers' Journey Survey 2026“ a formulace „dvakrát častěji než kterýkoli jiný kanál“ je potřeba ověřit proti primárnímu zdroji. Bez toho je to rizikové a může působit jako vymyšlená autorita.

**Návrh opravy:**  
Buď doplnit přesnou citaci včetně odkazu, názvu reportu, data publikace a metodiky, nebo claim výrazně změkčit.

Např.:

> Podle dostupných B2B průzkumů z let 2025–2026 roste podíl kupců, kteří při průzkumu dodavatelů využívají generativní AI. Přesný podíl se liší podle metodiky, oboru a velikosti firmy.

Pokud Forrester claim zůstane, doplnit:

- přesný název studie,
- odkaz,
- datum publikace,
- velikost a typ vzorku,
- přesnou formulaci výsledku.

---

### [BLOCKER] Pravděpodobně nepřesné tvrzení o „AI Assistant kanálu“ v GA4

**Citace ve frontmatteru / howto:**

> Sledujte je v GA4 samostatně přes AI Assistant kanál (v GA4 od května 2026) nebo vlastní segment…

**Problém:**  
Tvrzení, že v GA4 od května 2026 existuje „AI Assistant kanál“, je potřeba doložit. Bez oficiální dokumentace Googlu jde o vysoce rizikové technické tvrzení. V těle článku je už bezpečnější formulace „sledujte je v segmentu“, ale frontmatter stále obsahuje konkrétní claim.

**Návrh opravy:**  
Pokud nemáte oficiální zdroj od Googlu, odstranit konkrétní „AI Assistant kanál“.

Bezpečnější formulace:

> Sledujte AI návštěvnost v GA4 pomocí vlastního segmentu podle referralů a UTM parametrů z nástrojů jako ChatGPT, Perplexity nebo Gemini. Hodnoťte ji podle konverzní hodnoty, ne jen podle počtu návštěv.

---

### [BLOCKER] Tvrdý claim „většina B2B kupců dnes začíná v AI“ zůstal v článku

**Citace:**

> Většina B2B kupců dnes začíná v AI ještě před návštěvou webu nebo kontaktem se sales.

**Problém:**  
Tohle je opět příliš silné tvrzení. V úvodu bylo zmírněno na „používá AI v průběhu researchu“, ale v sekci chyb zůstala tvrdší verze „začíná v AI“. To znamená něco jiného a vyžaduje silný důkaz.

**Návrh opravy:**

> Část B2B kupců dnes používá AI už v rané fázi průzkumu, často ještě před návštěvou webu dodavatele nebo kontaktem s obchodním týmem.

---

### [WARNING] Frontmatter `stats` obsahuje staré tvrdé a nevhodné formulace

**Citace:**

```yaml
- value: "shortlist"
  label: "citace v AI je vstupenka do vendor shortlistu před prvním kontaktem se sales"
```

**Problém:**  
Zůstalo „sales“ a claim „citace v AI je vstupenka“ je pořád příliš absolutní. Vhodnější je „může zvýšit šanci“, ne formulace, která z citace dělá nutnou podmínku.

**Návrh opravy:**

```yaml
- value: "užší výběr"
  label: "citace v AI může zvýšit šanci, že se značka objeví v prvním výběru dodavatelů"
```

---

### [WARNING] Insight box znovu přitvrzuje sdělení oproti opravenému úvodu

**Citace:**

> V B2B se shortlist vendora dnes často tvoří v AI ještě před prvním kontaktem se sales. Citace v AI není „bonus", ale vstupenka — bez ní vás kupec nevidí.

**Problém:**  
„Bez ní vás kupec nevidí“ je příliš absolutní. Kupec vás může najít přes Google, doporučení, oborový katalog, partnera, event nebo přímou znalost značky. Také zůstává „sales“.

**Návrh opravy:**

> V B2B může užší výběr dodavatelů vznikat už během práce s AI nástroji, často ještě před kontaktem s obchodním týmem. Citace v AI proto není jen bonus — může zvýšit šanci, že se značka objeví v rané fázi výběru.

---

### [WARNING] Zakázaný / nevhodný slovník: „sales“ zůstává vícekrát

**Citace:**

> před prvním kontaktem se sales

> Spoléhat jen na vendor web a sales

> kontaktem se sales

**Problém:**  
V zadání opravy bylo výslovně uvedeno nahrazení „sales“ za „obchodní tým / obchodníci“. V článku stále zůstává, hlavně ve frontmatteru a komponentách.

**Návrh opravy:**  
Všude nahradit:

- „sales“ → „obchodní tým“
- „sales zástupce“ → „obchodník“ / „obchodní zástupce“

---

### [WARNING] Zůstaly anglicismy, které měly být vyčištěné

**Citace:**

> product experty

> product/feature stránky

> use cases a pricing

> jasné product / feature stránky a poctivé use case popisy

> top X pro daný use case

**Problém:**  
V kontextu bylo uvedeno, že tyto výrazy byly opraveny, ale v článku stále jsou. Brand voice má být věcný a srozumitelný, ne SaaS žargon.

**Návrh opravy:**

- „product experty“ → „produktové specialisty“
- „product/feature stránky“ → „produktové stránky a stránky funkcí“
- „use cases“ → „případy použití“
- „pricing“ → „ceny“
- „top X pro daný use case“ → „nejlepší řešení pro konkrétní případ použití“ nebo „výběr řešení pro konkrétní potřebu“

---

### [WARNING] „Vendor shortlist se tvoří v AI“ je moc kategorické

**Citace / nadpis:**

> Vendor shortlist se tvoří v AI

**Citace v textu:**

> shortlist vendorů dnes často vzniká **přímo v AI odpovědi**

**Problém:**  
Tvrzení je formulované jako obecný stav trhu. Bez konkrétních dat je bezpečnější říct, že AI do tvorby shortlistu vstupuje nebo ji ovlivňuje. Ne každý B2B shortlist vzniká v AI odpovědi.

**Návrh opravy:**

Nadpis:

> Jak AI ovlivňuje vendor shortlist

Text:

> U části B2B nákupů dnes může první užší výběr dodavatelů vznikat už během práce s AI nástroji.

---

### [WARNING] „AI při výběru vendora váží reputační signály“ je nepřesná personifikace AI

**Citace ve frontmatteru / howto:**

> AI při výběru vendora váží reputační signály.

**Problém:**  
AI „nevybírá vendora“ v lidském smyslu. Nástroje mohou čerpat z dostupných zdrojů, syntetizovat zmínky, recenze a autoritativní obsah, ale formulace „váží reputační signály“ je příliš kategorická a technicky vágní.

**Návrh opravy:**

> AI nástroje mohou při sestavování odpovědi čerpat i ze zdrojů mimo váš web, například z recenzí, oborových katalogů a důvěryhodných zmínek.

---

### [WARNING] „AI návštěvníci v B2B bývají vysoce kvalifikovaní“ je nedoložené

**Citace:**

```yaml
- value: "konverze"
  label: "AI návštěvníci v B2B bývají vysoce kvalifikovaní"
```

A v textu:

> AI návštěvy v B2B bývají vysoce kvalifikované…

**Problém:**  
Může to být pravda v některých účtech, ale bez dat jde o obecný claim. Navíc AI referral traffic bývá často špatně měřitelný, malý objemem a metodicky nečistý.

**Návrh opravy:**

> AI návštěvnost v B2B může mít menší objem, ale u některých firem vyšší kvalitu — proto ji sledujte podle konverzí a obchodní hodnoty, ne jen podle návštěvnosti.

---

### [WARNING] FAQ Q2 uvádí „kolem tří čtvrtin“ bez zdroje

**Citace:**

> Podle veřejných analýz z roku 2026 většina B2B kupců — uváděné podíly se pohybují kolem tří čtvrtin a roste rychle.

**Problém:**  
„Kolem tří čtvrtin“ je konkrétní číselný claim. Nestačí říct „veřejné analýzy“. Je potřeba doložit, nebo změkčit.

**Návrh opravy:**

> Podle dostupných průzkumů z let 2025–2026 roste podíl B2B kupců, kteří při průzkumu dodavatelů používají generativní AI. Přesná čísla se liší podle oboru, velikosti firem a metodiky průzkumu.

---

### [WARNING] FAQ Q6 příliš ostře staví AI SEO proti klasickému SEO

**Citace:**

> Cíl je jiný: ne pozice, ale citace v AI odpovědi.

**Problém:**  
Je to zbytečně absolutní. B2B AI SEO pořád stojí i na klasické indexaci, technickém SEO, autoritě domény, obsahu a viditelnosti v běžném vyhledávání. Lepší je „vedle pozic řeší citace“.

**Návrh opravy:**

> Cíl se rozšiřuje: vedle pozic ve vyhledávači řešíte i to, zda AI nástroje značku zmiňují, citují a správně popisují v odpovědích.

---

### [WARNING] Termín „citace v AI“ je místy nepřesný pro všechny uvedené nástroje

**Citace:**

> Sledujte, kde vás citují a kde ne.

> Pokud vás AI u klíčových research dotazů necituje…

**Problém:**  
Perplexity typicky pracuje se zdroji a citacemi. ChatGPT, Claude a Gemini ale podle režimu nemusí „citovat“ zdroje stejným způsobem; někdy značku pouze zmíní, někdy odpoví bez odkazu. Článek by měl rozlišit „zmínka“, „doporučení“, „citace zdroje“ a „odkaz“.

**Návrh opravy:**

> Sledujte, zda vás AI nástroje zmiňují, doporučují nebo citují jako zdroj — podle toho, jak daný nástroj odpovědi zobrazuje.

---

### [WARNING] Description je délkově v pořádku, ale slovník je slabší

**Citace:**

```yaml
description: "B2B kupci dnes často researchují vendory v ChatGPT a Perplexity ještě před prvním kontaktem s obchodníky — citace v AI ovlivňují, kdo se dostane do shortlistu."
```

**Problém:**  
Délka je v limitu, ale „researchují vendory“ je zbytečný anglicismus. Také „kdo se dostane do shortlistu“ je poměrně silné.

**Návrh opravy:**

> B2B kupci dnes často prověřují dodavatele v ChatGPT a Perplexity ještě před kontaktem s obchodníky. AI může ovlivnit první užší výběr.

---

### [TIP] Title je SEO délkově dobrý, ale česko-anglická formulace je těžkopádná

**Citace:**

```yaml
title: "AI SEO pro B2B v roce 2026: vstupenka do vendor shortlistu"
```

**Hodnocení:**  
Délka je přibližně v požadovaném rozmezí 50–60 znaků a hlavní klíčové slovo je na začátku. To je dobře.

**Problém:**  
„vendor shortlistu“ je žargon. Protože „vendor shortlist ai“ je cílové KW, lze ho ponechat, ale doporučuji přidat český význam v titulku nebo zvolit přirozenější formulaci.

**Návrh opravy:**

> AI SEO pro B2B v roce 2026: cesta do shortlistu

Nebo pokud musí zůstat „vendor shortlist“:

> AI SEO pro B2B v roce 2026: vendor shortlist v AI

---

### [TIP] `answer` splňuje délku, ale obsahuje nedoložené „většina kupců“

**Citace:**

```yaml
answer: "AI SEO pro B2B je optimalizace obsahu a značky tak, aby se na vás kupci dostali přes AI nástroje..."
```

**Hodnocení:**  
Krátká odpověď má cca 58 slov, začíná definicí a dává samostatný smysl. To je dobré.

**Problém:**  
Druhá věta obsahuje „podle dostupných analýz dělá většina kupců“ a „značka se může snadno ztratit“. První část je bez zdroje, druhá zbytečně tlačí na strach.

**Návrh opravy:**

> AI SEO pro B2B je optimalizace obsahu, značky a zmínek tak, aby vás kupci našli i přes AI nástroje jako ChatGPT, Perplexity, Claude nebo Gemini. V dlouhé B2B nákupní fázi může AI ovlivnit porovnání dodavatelů, tvorbu užšího výběru a to, které značky kupující vůbec zvažuje.

---

### [TIP] Prvních ~100 slov těla funguje dobře, ale opakuje slabší claim

**Citace:**

> Tahle fáze se dnes podle dostupných analýz výrazně přesouvá do AI.

**Hodnocení:**  
Úvod je citovatelný a samostatný. Definice na začátku je dobrá.

**Problém:**  
„Výrazně přesouvá do AI“ je bez konkrétní opory. Doporučuji mírnější formulaci.

**Návrh opravy:**

> Tahle fáze se podle dostupných průzkumů stále častěji odehrává i v AI nástrojích.

---

### [TIP] Interní odkazy a CTA jsou v pořádku

**Pozitivní potvrzení:**  
Závěr směřuje na konkrétní produkty:

> [AI SEO audit za 9 990 Kč](/audit/)  
> [AI SEO Wireframe Pack](/pack/) za 1 490 Kč

To splňuje požadavek na CTA. Interní odkazy na související články jsou relevantní a nepůsobí samoúčelně.

---

### [TIP] Slug je v pořádku

**Citace:**

```yaml
slug: "ai-seo-b2b"
```

**Hodnocení:**  
Slug je krátký, srozumitelný a odpovídá cílovému klíčovému slovu. Beze změny.