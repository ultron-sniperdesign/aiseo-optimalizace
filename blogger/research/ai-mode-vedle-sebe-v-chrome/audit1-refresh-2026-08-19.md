Verdikt: **diff je fakticky v pořádku, bez BLOCKING vad**. Refresh správně rozlišuje mezi:
1. **rozděleným zobrazením** z dubnového oznámení,
2. **Režimem AI v Chromu jako celkem** podle nápovědy,
3. **postranním panelem** jako jiným mechanismem.

Našel jsem jen několik **MINOR** připomínek ke srozumitelnosti a konzistenci. **MAJOR ani BLOCKING neshledávám.**

---

## Co je fakticky správně

### 1) Rozlišení dvou různých věcí je v diffu zachované
Tohle je po refreshi podané správně a opakovaně:

- v `answer`:
  > „**Rozdělené zobrazení Google popsal pro desktop a pro USA; samotný Režim AI v Chromu je podle nápovědy popsaný i pro Android a iOS a rozšiřuje se mimo USA.**”

- v checklistu:
  > „**Rozdělené zobrazení Google popsal pro desktop. Samotný Režim AI v Chromu je v nápovědě popsaný i pro Android a iOS — to je ale jiná věc než otevírání odkazu vedle odpovědi.**”

- v nové sekci:
  > „**Rozdělené zobrazení** ... je popsané pro desktop a pro USA“
  >
  > „**Režim AI v Chromu jako takový** je v nápovědě popsaný i pro mobil...“

To je v souladu s podklady.

### 2) Česko není tvrzené ani jako dostupné, ani jako nedostupné
Správně opatrné formulace:

- FAQ:
  > „**Doložit to neumím.**“
  >
  > „**Česko ani češtinu ale nejmenuje. Přeložená nápověda dostupnost nedokazuje.**”

- nová sekce:
  > „**česká nápověda existuje, seznam zemí ne. Přeložený řetězec dostupnost nedokazuje**“

To odpovídá researchi.

### 3) Postranní panel je doplněn jako jiný mechanismus, ne zaměněn za split view
Správně:
> „**u dotazu na právě otevřenou stránku se výsledek zobrazí v postranním panelu AI Mode**“

A zároveň je vysvětleno, že jde o jinou věc než:
> „**Rozdělené zobrazení** (kliknutý odkaz se otevře vedle odpovědi)“

To je přesně to, co mělo být doplněno.

### 4) `answer`, `stats` i FAQ po refreshi sedí
- `answer` už netvrdí „jen desktop“ pro celý AI Mode v Chromu.
- `stats` jsou po úpravě přesnější než předtím.
- FAQ opravuje dřívější zjednodušení u mobilu i dostupnosti.

---

## MINOR připomínky

### MINOR 1 — lehce zavádějící zkratka v Insight boxu o českých výsledcích
Citace:
> „**Kdo vám dnes ukazuje, jak se to chová na českých výsledcích, ukazuje něco jiného.**”

Problém:
- V kontextu refreshované verze už víme, že **Režim AI v Chromu se rozšiřuje mimo USA**, jen nevíme kam přesně a nevíme nic nového konkrétně o split view.
- Tahle věta může znít silněji, než dovoluje podklad. Uživatel skutečně může ukazovat „něco jiného“, ale formulace je skoro kategorická.

Návrh opravy:
- změkčit třeba na:
  - „**Kdo vám dnes ukazuje české nasazení téhle konkrétní podoby rozděleného zobrazení, měl by doložit zdroj — z veřejných podkladů to samo o sobě neplyne.**”
  - nebo:
  - „**Bez dalšího zdroje z toho nejde spolehlivě dovodit chování téhle konkrétní funkce na českých výsledcích.**”

---

### MINOR 2 — formulace „jediná země“ je srozumitelná, ale mohla by být přesnější
Citace:
> `label: "jediná země, pro kterou Google rozdělené zobrazení popsal — nápověda ale mluví o rozšiřování mimo USA"`

Problém:
- Fakticky to sedí na podklad („available in the U.S.“), ale formulace „jediná země“ je o chlup tvrdší než „jediná země, kterou Google v oznámení výslovně uvedl“.

Návrh opravy:
- „**země, kterou Google u rozděleného zobrazení výslovně uvedl: USA**“
- případně:
- „**jediná výslovně uvedená země v dubnovém oznámení: USA**“

---

### MINOR 3 — nová sekce je užitečná, ale část obsahu opakuje už řečené
Citace:
> „**Při kontrole 19. 8. 2026 jsem k rozdělenému zobrazení žádné novější oznámení Googlu nenašel**“
>
> „**Rozdělené zobrazení ... je popsané pro desktop a pro USA**“
>
> „**Režim AI v Chromu jako takový je v nápovědě popsaný i pro mobil**“

Problém:
- Není to faktická vada.
- Ale část nové sekce opakuje to, co už je v `answer`, FAQ a checklistu. Přidaná hodnota je hlavně v tabulce s nápovědou a ve vysvětlení postranního panelu.

Návrh opravy:
- ponechat sekci, ale lehce ji zkrátit:
  - zachovat tabulku,
  - zachovat odstavec o tom, že nebylo nalezeno novější oznámení,
  - zkrátit následný Insight box o dvě věty, které už článek říká jinde.

---

## Kontrola rizik ze zadání

### Je všude jasné, že „rozdělené zobrazení“ a „Režim AI v Chromu jako celek“ jsou dvě různé věci?
**Ano.** Diff to vysvětluje dostatečně a opakovaně. Nevidím záměnu.

### Není někde tvrzení, že funkce v Česku je nebo jistě není?
**Ne.** Formulace jsou opatrné a korektní.

### Sedí upravený `answer`, `stats` a FAQ?
**Ano.** Jsou po refreshi věcně přesnější než předchozí verze.

### Je nová sekce užitečná?
**Ano.** Není to jen vata:
- přidává český název,
- přidává platformy z nápovědy,
- přidává výhradu k dostupnosti mimo USA,
- přidává postranní panel jako odlišný mechanismus.
Jen je místy lehce redundantní.

---

## Závěr

**Schválil bych.**  
Žádné **BLOCKING** ani **MAJOR** vady jsem v diffu nenašel. Pouze drobné **MINOR** úpravy formulací kvůli přesnosti a menší redundanci.