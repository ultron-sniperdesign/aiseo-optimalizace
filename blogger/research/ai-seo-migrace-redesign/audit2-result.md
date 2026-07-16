**VERDIKT: OPRAVIT PŘED PUBLIKACÍ**

Níže je druhé, nezávislé kolo auditu jen k tomuto konkrétnímu článku.

---

## Nálezy

### [BLOCKER] Zakázaný / zbytečný anglicismus v keywords
**Citace:**  
`- "checklist migrace webu"`

**Problém:**  
V zadání výslovně hlídáte anglicismy mimo povolené technické názvy. „Checklist“ mezi povolenými není a už v popisu změn píšete, že byl odstraněn — tady ale zůstal ve frontmatteru.

**Návrh opravy:**  
Nahraďte např. za:
- `kontrolní seznam migrace webu`
- nebo `postup migrace webu`

---

### [BLOCKER] Interní odkaz ve slugu obsahuje zakázané „crawler“
**Citace:**  
`[robots.txt pro AI](/blog/ai-crawler-robots-txt/)`

**Problém:**  
I když je anchor text opravený, samotný slug obsahuje „crawler“. Zadání výslovně říká hledat anglicismy mimo povolené technické názvy; „crawler“ mezi povolenými není.

**Návrh opravy:**  
Pokud je to možné, změnit slug cílového článku na českou variantu, např.:
- `/blog/ai-robots-txt/`
- nebo `/blog/robots-txt-pro-ai/`

Pokud slug měnit nemůžete kvůli existujícím URL, není to obsahový blocker článku jako takového, ale v rámci tohoto auditu je to stále vada brandového slovníku v interním odkazování.

---

### [WARNING] „AI systémy“ v FAQ je stále moc zobecňující
**Citace:**  
`vyhledávače i AI systémy najednou pracují s něčím jiným, než co znaly`

**Problém:**  
V jiných částech článku už správně používáte opatrnější formulace „mnohé AI služby“. Tady se text vrací k širokému zobecnění. Není to vyloženě nepravda, ale je to méně přesné a zbytečně široké.

**Návrh opravy:**  
Upravit na:
- `vyhledávače i mnohé AI služby pak pracují s jinými adresami a šablonami než dříve`
- nebo `vyhledávače a některé AI služby najednou narážejí na jinou strukturu webu`

---

### [WARNING] Tvrzení o 302 je v pořádku v principu, ale formulace je ještě trochu příliš kategorická
**Citace:**  
`Dočasné 302 je pro tento případ nevhodné, protože může zdržet převzetí nové adresy.`  
a  
`Používat dočasné 302 pro trvalou změnu.`

**Problém:**  
Technicky je doporučení správné: pro trvalou migraci se má použít 301. Ale „nevhodné“ může znít absolutně. Moderní vyhledávače umí některé 302 časem interpretovat, takže problém není v tom, že by 302 „nefungovalo nikdy“, ale že pro trvalou změnu dává horší a méně jednoznačný signál.

**Návrh opravy:**  
Zjemnit formulaci na:
- `Při trvalé migraci je správná volba 301; 302 je určené pro dočasné přesuny a může prodloužit období, kdy systémy drží starou adresu.`
- v seznamu „Čemu se vyhnout“: `Nepoužívat 302 tam, kde je změna trvalá.`

---

### [WARNING] „Určitý pokles po migraci je běžný a obvykle se srovná“ je nedoložené a lehce uklidňující overclaim
**Citace:**  
`Určitý pokles po migraci je běžný a obvykle se srovná.`

**Problém:**  
První část je obecně přijatelná, druhá už slibuje typický vývoj, který nelze bez kontextu garantovat. U dobře provedené migrace se to často stane, ale ne „obvykle“ ve všech situacích.

**Návrh opravy:**  
Např.:
- `Krátkodobé výkyvy po migraci jsou běžné. Pokud je migrace technicky v pořádku, viditelnost se může postupně vracet.`
- nebo `Krátkodobý pokles po migraci nemusí hned znamenat problém, ale je potřeba hlídat technické chyby.`

---

### [WARNING] „Nejdražší chyba migrace je jednoduchá“ je rétoricky přepálené
**Citace:**  
`Nejdražší chyba migrace je jednoduchá: stará adresa vrátí 404.`

**Problém:**  
Není to tvrdý marketingový slib, ale je to dramatizující formulace. Navíc „nejdražší“ není doložené — v některých projektech může být stejně drahý noindex, blokace v robots.txt nebo chybné kanonické adresy.

**Návrh opravy:**  
Změnit na:
- `Jedna z nejdražších chyb migrace je, když stará adresa vrátí 404.`
- nebo `Častá a nákladná chyba migrace je, když stará adresa vrátí 404.`

---

### [WARNING] „Web je živý, ale vyhledávací roboti se k němu nedostanou“ je u robots.txt zjednodušené
**Citace:**  
`Web je živý, ale vyhledávací roboti se k němu nedostanou.`

**Problém:**  
U úplného zákazu v robots.txt je to prakticky srozumitelné, ale technicky zjednodušené. Adresy mohou být stále známé z odkazů či sitemap, jen je robot nemůže standardně procházet. Pro tutorial by bylo lepší být přesnější.

**Návrh opravy:**  
Např.:
- `Web je dostupný uživatelům, ale robots.txt může vyhledávacím robotům zablokovat jeho procházení.`
- nebo `Web funguje, ale vyhledávací robot nemusí mít povolené jeho procházení.`

---

### [TIP] `answer` je funkční, ale je na horní hraně délky a mohl by být ještě sevřenější
**Citace:**  
`Migrace nebo redesign webu je změna URL, šablon nebo domény, při které hrozí ztráta indexace, pozic i citací v AI odpovědích. Základ je mapa starých adres na nové, trvalé přesměrování 301, zachovaná strukturovaná data a měření před spuštěním i po něm. U některých AI služeb se změny navíc mohou projevit později než v běžném vyhledávání.`

**Problém:**  
Obsahově je to dobré: začíná definicí, dává smysl samostatně, je konkrétní. Jen je to už poměrně našlapané a lehce delší na pohodlné použití jako „krátká odpověď“.

**Návrh opravy:**  
Není nutné, ale šlo by lehce zkrátit bez ztráty významu:
- `Migrace nebo redesign webu je změna URL, šablon nebo domény, při které může klesnout indexace, viditelnost i počet citací v AI odpovědích. Základ tvoří mapa starých adres na nové, přesměrování 301, zachovaná strukturovaná data a kontrola před spuštěním i po něm.`

---

### [TIP] První odstavec těla funguje dobře jako samostatná odpověď
**Citace:**  
`Migrace nebo redesign webu je změna URL, šablon nebo domény...`

**Hodnocení:**  
Tohle je povedené. Začíná definicí, je srozumitelné bez zbytku článku a nepadá do negací ani vaty. Pro kategorii tutorial plní účel.

**Návrh opravy:**  
Bez nutné změny.

---

### [TIP] Meta description je použitelný, ale lehce přehuštěný
**Citace:**  
`Při migraci nebo redesignu webu hrozí ztráta pozic i citací v AI. Ohlídejte mapu URL, přesměrování 301, strukturovaná data, robots.txt a měření po spuštění.`

**Problém:**  
Je v limitu a obsahuje klíčové prvky. Jen druhá věta je seznamová a méně přirozená.

**Návrh opravy:**  
Není nutné, ale lze uhladit:
- `Migrace nebo redesign webu může oslabit SEO i citace v AI. Zkontrolujte mapu URL, přesměrování 301, strukturovaná data, robots.txt a měření po spuštění.`

---

### [TIP] SEO titulek je v zásadě v pořádku
**Citace:**  
`title: "Migrace a redesign webu: jak udržet AI viditelnost"`

**Hodnocení:**  
Titulek je srozumitelný, má klíčové téma na začátku a délkově vychází rozumně. Pro tutorial dobré.

**Návrh opravy:**  
Bez nutné změny.

---

### [TIP] CTA je správně konkrétní a odpovídá zadání
**Citace:**  
`[AI SEO Wireframe Pack za 1 490 Kč](/pack/) ... [AI SEO audit za 9 990 Kč](/audit/) ...`

**Hodnocení:**  
Tohle je splněné dobře: konkrétní produkt, cena i situace použití. Lepší než generické „kontaktujte nás“.

**Návrh opravy:**  
Bez nutné změny.

---

## Shrnutí
Článek je po prvním kole zřetelně lepší a technicky mnohem opatrnější. Největší zbývající problémy jsou:
1. **zbylý anglicismus „checklist“ ve frontmatteru**,  
2. **slug interního odkazu s „crawler“**,  
3. **pár stále příliš absolutních nebo uklidňujících formulací** u 302, poklesu po migraci a „nejdražší chyby“.

Po těchto úpravách bude článek podle mě **publikovatelný**.