## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Bez faktického blockeru. Vypořádání nálezů z 1. kola sedí: problematické formulace typu „náleží“, „uvidí“, „pod názvem“, „něco jiného“, „v současné betě“, „o co odhlášením přijdete“ ani „session“ v textu dál nezůstaly. Podmínky u „30 %“ jsou v odpovědi, úvodu i FAQ doplněné.

Článek je věcný, dobře zdrojovaný a SEO frontmatter je v pořádku. Před publikací bych ale opravil několik jazykových a strukturálních míst, hlavně kvůli skenování a samostatné citovatelnosti FAQ.

---

## Nálezy

### [WARNING] FAQ odpovědi nejsou vždy plně sebestačné bez otázky

**Problémové místo:**

> `a: "Ano. Spolupráce má stejný monetizační model jako Newsfeed: po dobu relace musí partner ukazovat výhradně reklamu Seznamu..."`

a:

> `a: "Ne, jsou to údaje provozovatele o vlastní službě bez zveřejněné metodiky..."`

U FAQ se má odpověď číst i bez otázky. Začátky „Ano.“ / „Ne,“ samy o sobě neříkají, k čemu se vztahují. U čtenáře i AI citace se tak ztrácí kontext.

**Návrh opravy:**

- Místo:

  > Ano. Spolupráce má stejný monetizační model…

  použít například:

  > Partner programu Newsfeed musí u návštěv ze Seznam AI po dobu relace zobrazovat výhradně reklamu Seznamu. Spolupráce má stejný monetizační model jako Newsfeed…

- Místo:

  > Ne, jsou to údaje provozovatele…

  použít:

  > Čísla Seznamu o růstu návštěvnosti nejsou nezávisle ověřená. Jde o údaje provozovatele o vlastní službě bez zveřejněné metodiky…

- Podobně upravit i:

  > Ne. Smluvní podmínky Newsfeedu se týkají partnerů…

  na:

  > Podmínky Newsfeedu neplatí pro weby mimo program. Týkají se jen partnerů, kteří je přijali…

---

### [WARNING] Jedna věta je významově nejasná a působí strojově

**Problémové místo:**

> Nápověda Vyhledávání u souhrnů uvádí, že přihlášení v nich mohou pokračovat v Seznam AI.

„Přihlášení“ bez podstatného jména může znamenat přihlášení uživatelé, přihlášení do služby nebo samotný stav přihlášení. Věta je pro běžného vydavatele zbytečně šroubovaná.

**Návrh opravy:**

> Nápověda Vyhledávání u souhrnů uvádí, že přihlášení uživatelé mohou ze souhrnu pokračovat do Seznam AI.

Případně ještě jednodušeji:

> Podle nápovědy Vyhledávání mohou přihlášení uživatelé ze souhrnu pokračovat do Seznam AI.

---

### [WARNING] Sekce o odhlášení spojuje dvě různá témata pod jedním dlouhým H2

**Problémové místo:**

> ## Odhlášení: <span class="hl">tři user-agenty</span> a dva výklady — <strong>12 z 33 médií</strong>

Sekce řeší zároveň:

1. pravidla odhlášení a rozdíl mezi Seznamem a standardem SPIR,  
2. vlastní měření 33 webů.

To jsou dvě různé čtenářské úlohy. Pro skenujícího čtenáře je H2 přetížené a tabulka s měřením může zapadnout.

**Návrh opravy:**

Rozdělit na dvě H2:

```md
## Odhlášení ze Seznam AI — tři user-agenty a dva výklady
```

a před část s měřením přidat:

```md
## Kolik médií blokuje AI odpovědi — 12 z 33 webů
```

Tím zůstane zachovaná pointa i klíčový pojem, ale čtenář rychleji najde praktickou i datovou část.

---

### [TIP] „AI sumarizace“ je použitelné jako klíčové slovo, ale v nadpisech zní jako kalk

**Problémová místa:**

> ## Pět <span class="hl">chyb</span> u AI sumarizací Seznamu — <strong>a jak se jim vyhnout</strong>

> ## U <span class="hl">AI sumarizací</span> rozhoduje <strong>proklik, ne souhrn</strong>

V `answer` je v pořádku, že termín vysvětlujete:

> AI sumarizace jsou souhrny…

V nadpisech už ale „AI sumarizace“ působí méně česky než „souhrny Seznam AI“. Článek má vzdělávat, ne přebírat platformní žargon všude.

**Návrh opravy:**

- Nadpis s chybami:

  > Pět chyb u souhrnů Seznam AI — a jak se jim vyhnout

- Závěrečný nadpis:

  > U souhrnů Seznam AI rozhoduje proklik, ne samotné shrnutí

Klíčové slovo zůstává ve frontmatteru, slug i úvodní odpovědi, takže SEO tím neutrpí.

---

### [TIP] Několik formulací je zbytečně hovorových nebo anglických

**Problémová místa a opravy:**

1. **Hovorové „těmhle“**

   > Vlastní reklamu těmhle návštěvám neukážete

   Oprava:

   > Vlastní reklamu těmto návštěvám neukážete.

2. **Anglicismus „homepage“**

   > pro boxy na homepage

   Oprava:

   > pro boxy na domovské stránce Seznamu

3. **Nepřirozené „beta Seznam AI“**

   > podle partnerské nápovědy ve stavu k 14. 10. 2026 se beta Seznam AI soustředí…

   Oprava:

   > podle partnerské nápovědy ve stavu k 14. 10. 2026 se betaverze služby Seznam AI soustředí…

4. **Nejasný podmět**

   > Web pak jako zdroj AI odpovědí nepoužijí…

   Oprava:

   > Seznam pak web nepoužije jako zdroj AI odpovědí…

---

### [TIP] První tabulka má na mobilu zbytečně dlouhé buňky

**Problémové místo:**

Tabulka:

> | Co podmínky od 1. 5. 2026 říkají | Co to znamená pro vydavatele |

Konkrétně dlouhé řádky:

> Provize zahrnuje i odměnu vydavatele tiskové publikace podle § 87b autorského zákona

a:

> Pravidla pro odkazy v Newsfeedu (čl. VII) se na Seznam AI nevztahují

Na mobilu se tabulka sice vodorovně posouvá, ale dlouhé právně znějící buňky snižují čitelnost. Článek zároveň nemá působit jako právní výklad.

**Návrh opravy:**

Zkrátit buňky a právní detail dát pod tabulku:

```md
| Co podmínky říkají | Co to znamená |
|---|---|
| Provize je 30 % z reklamy po prokliku | V Modelu vyšší provize 50 % |
| Čl. VII Newsfeedu se na Seznam AI nevztahuje | AI může použít i obsah mimo běžná pravidla Newsfeedu |
| Odhlášení probíhá přes Seznam-Extended | Obsah se pak v Seznam AI nepoužije |
```

A pod tabulku doplnit větu:

> Podmínky zároveň uvádějí, že provize zahrnuje i odměnu vydavatele tiskové publikace podle § 87b autorského zákona; tato věta byla už v předchozí verzi a není součástí AI změny.

---

## Potvrzení toho, co je v pořádku

- `seoTitle` je pod 60 znaků a začíná hlavním tématem: **Seznam AI a vydavatelé**.  
- `description` je v limitu 70–160 znaků a odpovídá obsahu.  
- `answer` má 53 slov, začíná definicí a dává samostatný smysl.  
- Zakázané výrazy typu „schema markup“, „answer block“, „hub-and-spoke“, „framework“ bez vysvětlení ani tvrdé garance v textu nejsou.  
- CTA je konkrétní, vede na správný produkt **Audit AI viditelnosti** a cena je mimo text odkazu: **3 600 Kč bez DPH**.