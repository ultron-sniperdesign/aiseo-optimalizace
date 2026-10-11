# Vypořádání auditů — `zbozi-cz-pro-ai` (11. 10. 2026)

Pravidlo Z18. Každá oprava dohledaná v celém souboru včetně frontmatteru (Z17) — grep na
`najdete|najdu|zobrazení se platí|zobrazování nabídek|zobrazení ne|garant|dnes|od května|SHOPITEM|v nastavení|párovacím nástroji|sledujte`.

## Před auditem — vlastní kontrola konceptu proti staženým textům

Koncept jsem před 1. kolem prošel větu po větě proti textům nápovědy ve scratchpadu. Opraveno:

- **Krok 5 registrace:** koncept tvrdil, že si Seznam „na schválení vyhrazuje až pět pracovních dní“ —
  nápověda nic takového neříká. Pět pracovních dní je **propojení se zápisem na Firmy.cz**; nabídky se
  zobrazí během pár hodin, ověření registrace proběhne potom. Přepsáno podle nápovědy.
- **Zahraniční obchody:** „navíc potřebují … dopravu do Česka“ → vlastní seznam podmínek, mezi nimi
  **ceny** dopravy do Česka.
- **PRICE_VAT:** „s povinnými poplatky“ → „včetně DPH a poplatků“ (znění specifikace).
- **CATEGORYTEXT:** věta „bez ní se nabídka nezařadí do výpisu kategorie“ vypuštěna — specifikace ji
  vztahuje jen na samostatné nabídky a stránka *Kde se inzerce Nákupů zobrazuje* vede výpis samostatných
  nabídek v kategorii jako plochu „do 11. 1. 2024“.
- **Značka nápovědy:** „Inzerce Nákupy (dříve Zboží.cz)“ jako název sekce neověřen → „původní nápověda
  Zboží.cz přesměrovává do nápovědy Skliku“ (ověřeno 301).
- **Statistiky:** „samostatná statistika pro Seznam AI zatím není“ — tahle věta v nápovědě patří
  k textovým inzerátům; u Nákupů je jen započtení do položky Produkt – doporučené nabídky.
- **Vyloučení ploch:** věta o nemožnosti vyloučit plochy Seznam AI výslovně přiřazena k inzerátům
  z vyhledávacích a Chytrých kampaní.
- **„Nejčastěji“** u párování vypuštěno (bez dat). **H2 z osmi na sedm** (sloučení dvou úvodních sekcí,
  bez souhrnu v odrážkách), patička „Transparentně“ nahrazena větou v úvodu jako u ostatních článků.

## Kolo 1 — osa faktů (gpt-5.5, `audit1-result.md`)

### Zapracováno

| Nález | Úroveň | Co se změnilo |
|---|---|---|
| Popis rozhraní bez UI dokladu (Z16) | BLOCKER | Krok 3: „najdete sekci Provozovny“ → „Nápověda vede postup přes Nastavení účtu Sklik…“; odrážka o statistikách: „najdete v položce“ → „počítá se do položky … tak to uvádí nápověda“; párovací nástroj v textu i ve FAQ → „podle nápovědy“; závěr: „kam ho podle nápovědy Sklik započítává“ |
| Chybí povinné SHOP a SHOPITEM | BLOCKER | Věta před tabulkou: kořenová značka SHOP a SHOPITEM pro každou nabídku, obě povinné |
| „Zobrazení se platí“ zní jako platba za impresi | WARNING | Odrážka → „Bez kreditu se nabídky nezobrazují … účtuje se každý proklik“; FAQ „zdarma?“ a krok 4 přepsány stejně. „Bezplatné zobrazení produktů … nenabízejí“ zůstává — je to věta ceníku o free listingu |
| Časová slova závislá na dni čtení | TIP | „dnes“ → „k 11. 10. 2026“ u názvu a ve FAQ o specifikaci, „původní nápověda“ u přesměrování; „od května“ → „od května 2026“ v `answer` i v úvodu; v `answer` místo „dnes pojmenovaného“ „(v nápovědě už Seznam AI)“ |

### Nezapracováno + důvod

| Nález | Proč ne |
|---|---|
| „Seznam garantuje do 48 hodin“ je silnější než podklad (WARNING) | Nápověda *Párování nabídek* to říká doslova: „Zpracování požadavku garantujeme do 48 hodin.“ Sloveso zůstává, jen je výslovně připsané nápovědě („zpracování nápověda garantuje do 48 hodin“) v textu i ve FAQ. |

## Kolo 2 — osa jazyka a struktury (gpt-5.5, `audit2-result.md`)

Verdikt: **PUBLIKOVAT** — 1× WARNING, 5× TIP. Vypořádání kola 1 auditor potvrdil, nezapracování
slova „garantuje“ přijal fakticky (je připsané nápovědě), jen doporučil jazykově uhladit.

### Zapracováno

| Nález | Úroveň | Co se změnilo |
|---|---|---|
| Dlouhé buňky tabulky feedu na mobilu | WARNING | PRODUCTNAME → „Název výrobku podle šablony: výrobce, řada, označení, kód, barva“, URL → „Vlastní adresa každé nabídky i varianty, bez diakritiky“; detaily do dvou odrážek pod tabulkou (co do PRODUCTNAME nepatří, kam URL nesmí vést + detail výrobku s jedinou nabídkou podle pravidla 3.5) |
| „v něm“ v `answer` dvojznačné, opakovaný květen | TIP | „…mezi zdroji svého asistenta Seznam AI a od téhož měsíce v Seznam AI ukazuje…“ (56 slov) |
| „nápověda garantuje“ je nepřirozené | TIP | Odstavec i FAQ: atribuce na začátek věty („podle nápovědy … může e-shop požádat …“) a „zpracování Seznam garantuje do 48 hodin“ |
| Věta o špatném párování kostrbatá | TIP | „může e-shop podle nápovědy v párovacím nástroji Centra prodejce požádat o přiřazení k jiné produktové kartě“ — přesnější i věcně (napárování je požadavek s ruční kontrolou), totéž ve FAQ |
| „Google nákupy“ jako obecný popis | TIP | Na webu se tvar nepoužívá (grep 0 výskytů) → „Google Merchant Center“ ve 3 místech (krok 2, FAQ, chyba 02); nápověda píše „Google nákupy“, jde o feed pro Merchant Center |
| Hutná první odpověď FAQ | TIP | Rozdělena na kratší věty, datum ceníku na konec |

### Nezapracováno + důvod

Nic.

## C5b — doověření zásadních nálezů (gpt-5.5, `c5b-result.md`)

Oba BLOCKERy z kola 1 (popis rozhraní, SHOP/SHOPITEM) poslané zpátky auditorovi faktů s primárními
zdroji a všemi opravenými místy (krok 3, odrážka statistik, odstavec o párování, FAQ, závěr, věta před
tabulkou + tabulka). Výsledek: **oba OBSTOJÍ**, rozpor mezi místy auditor nevidí. Nový zásadní nález
po C5 žádný.

## Jazykový průchod (C6)

| Průchod | Výsledek |
|---|---|
| Mechanický checker (slovník v73) | **0 nálezů** v každé verzi konceptu (před auditem, po kole 1, po kole 2, finál) |
| Kontrola komponent (Z13) | **0 nálezů**, 10 použití komponent |
| LLM průchod (gpt-5.4, celý slovník) | **7 nálezů, všech 7 přijato** |

Opraveno (každé dohledáno v celém souboru): „nabídky Seznam Nákupy“ → „ze Seznam Nákupů“ (FAQ) a sjednoceno
na genitiv „nabídky Seznam Nákupů“ v `answer` a v úvodu · odrážka o statistikách doplněna „ve statistikách
Skliku“ · „začnou zobrazovat během pár hodin“ → „zobrazí během pár hodin“ · kulhající souřadnost „zvyšují
kvalitu … a zároveň pravděpodobnost“ → „a zároveň zvyšují pravděpodobnost“ · „které jde spárovat … napáruje na
karty“ → „které lze spárovat … přiřadí k produktovým kartám“ · „Seznam nezveřejnil“ → „Seznam nepopisuje“
(2×; je to i věcně přesnější — prošel jsem dokumentaci, ne všechno, co Seznam kdy vydal) · „v ní“ v chybě 05 →
bez zájmena „v Seznam AI“. **Nová pravidla do slovníku žádná** — všechny nálezy závisí na kontextu věty.
