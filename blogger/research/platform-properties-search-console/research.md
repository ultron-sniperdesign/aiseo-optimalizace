# Research — platform properties v Search Console

**Řádek plánu:** `platform properties search console`
**Datum:** 2026-08-04 · **Kategorie:** analysis · **Tagy:** mereni, ai-platformy

---

## 1. Kolizní kontrola

| Kandidát | Co v něm je | Verdikt |
|---|---|---|
| `gsc-ai-segmenty-mereni` | report Generativní AI funkce (jen imprese) | **Téma volné.** Jiný report, jiná data. Prolinkovat jako kontrast. |
| `generativni-ai-v-discoveru` | zobrazení pro Discover u AI funkcí | Sousedí. Discover se tu objevuje jako zdroj dat, ale u jiného reportu. |
| `bing-ai-performance-report` | report Bingu | Sousedí, jiná platforma. |
| `youtube-pro-ai-viditelnost` | jak udělat video citovatelné pro AI | **Doplňuje se.** Ten článek říká, co dělat; tenhle říká, kde se výsledek dá vidět. |
| `videoobject-strukturovana-data` | značkování videa | Sousedí. |
| `mereni-seo-vykonu-2026` | přehled měření | Doplnit odkaz. |

**Verdikt: téma volné.** O službách platforem na webu není ani zmínka. Grep přes 112 článků:
`platform propert` 0×, `TikTok` jen 1× v `seznam-cz-ai-vyhledavani` (v jiném kontextu).

---

## 2. Primární zdroj — nápověda Search Console, ověřeno 4. 8. 2026

**„O službách platforem v Search Console"** (support.google.com/webmasters/answer/17148418, CZ verze)
+ **„Přidání webu nebo služby platformy"** (answer/34592).

### Co to je

Nový typ služby (property) v Search Console pro **účty na sociálních a video platformách**.
Doslova: *„můžete pomocí Search Console sledovat, jak lidé nacházejí váš obsah při vyhledávání
na Googlu."*

### Podporované platformy

**Instagram · TikTok · X · YouTube** — čtyři, nic víc.

### Co reporty dávají

| Report | Obsah |
|---|---|
| **Přehled výkonu** | *„celkový počet kliknutí a zobrazení, průměrnou míru prokliku (CTR) a průměrnou pozici ve vyhledávání"*, s filtrováním na konkrétní příspěvky a dotazy |
| **Přehled statistik** | *„obecný přehled nedávných trendů návštěvnosti, nejvýkonnějšího obsahu"* |
| **Úspěchy** | milníky *„založené na kliknutích"* |

Zdroje dat: **Vyhledávání Google, feed Objevit (Discover) a Zprávy Google** — tam, kde se obsah
zobrazuje.

### ⛔ Klíčový limit, který nesmí chybět

*„Služby platforem nesledují aktivitu na samotných platformách"* — příklad přímo od Googlu:
**neukážou, kolikrát se video zobrazilo na TikToku.** Měří jen cestu přes Google.

### Ověření vlastnictví

Podle nápovědy: *„Automatické propojení prostřednictvím existující webové služby nebo přímé
přihlášení k platformě."* Tedy **ne DNS záznam ani HTML soubor** jako u domény.
Google vlastnictví periodicky překontrolovává: *„Pokud dojde ke ztrátě propojení, přístup se
pozastaví, dokud ho znovu neověříte."*

⚠️ Sekundární zdroje píšou, že jde o **první typ služby, který nevyžaduje vlastnictví domény**.
**V nápovědě to takhle uvedené není** — do článku to tvrzení nepřebírat, popsat jen mechaniku
ověření, která tam doložená je.

### ⛔ Dostupnost — rozpor se sekundárními zdroji

Nápověda: *„Tuhle funkci zavádíme postupně, takže pro vás zatím nemusí být k dispozici."*

Nejméně tři oborové přehledy přitom píšou, že je funkce **„globally available to everyone"**.
To je silnější, než co Google sám tvrdí. V článku uvést Googlovu formulaci.

### Datum

Spuštěno **7. 7. 2026** (oznámení Search Central, „Platform properties roll out globally, plus
a new social and video performance guide" + starší post „See how content from social and video
platforms performs on Google Search").

---

## 3. Proč je to zajímavé — kontrast s AI reportem

Tohle je pointa článku, ne výčet funkcí:

| | Služby platforem | Report Generativní AI funkce |
|---|---|---|
| Kliky | **ano** | ne |
| CTR | **ano** | ne |
| Průměrná pozice | **ano** | ne |
| Imprese | ano | ano |
| Dotazy | **ano** | ne |
| Co měří | obsah na 4 platformách, jak se k němu chodí přes Google | vlastní web v generativních AI funkcích |

Jinými slovy: **u cizí platformy dnes Google dá víc čísel než u vlastních AI funkcí na vašem
webu.** To stojí za povšimnutí a je to hlavní teze.

---

## 4. Co z toho plyne prakticky

1. Kdo dělá video nebo sociální obsah, má poprvé oficiální (ne odhadovaná) čísla o tom,
   kolik z toho vytěží **z Googlu** — vedle statistik samotné platformy.
2. Nezaměňovat s dosahem na platformě. To jsou dvě různá čísla a budou se lišit řádově.
3. Je to měřicí vrstva k tomu, co radíme v článku o YouTube pro AI viditelnost — přepis,
   kapitoly, popis. Teď se dá ověřit, jestli se ta práce projevila ve Vyhledávání.
4. **Neodpovídá to na otázku o citacích v AI.** Kliky z AI Overviews ani AI Mode tenhle report
   nerozlišuje o nic víc než ostatní části Search Console.

---

## 5. Teze článku

> Search Console má od 7. července 2026 nový typ služby — pro účty na Instagramu, TikToku,
> X a YouTube. Ukáže, kolik kliků, impresí, jakou CTR a jakou průměrnou pozici má váš obsah
> z těch platforem **ve Vyhledávání, Discoveru a Zprávách**. Nesleduje, co se děje na platformě
> samotné. A je v tom paradox: u cizích platforem Google dává kliky a CTR, kdežto u generativních
> AI funkcí na vlastním webu pořád jen imprese.

---

## 6. Zdroje

- support.google.com/webmasters/answer/17148418 — O službách platforem v Search Console (CZ),
  čteno 4. 8. 2026
- support.google.com/webmasters/answer/34592 — Přidání webu nebo služby platformy, čteno 4. 8. 2026
- developers.google.com/search/blog/2026/07/platform-properties-social-video-guide — oznámení
  Search Central, červenec 2026
- developers.google.com/search/blog/2026/07/search-console-social-video-platforms — dřívější post
- vlastní články: `gsc-ai-segmenty-mereni`, `generativni-ai-v-discoveru`, `youtube-pro-ai-viditelnost`,
  `bing-ai-performance-report`, `mereni-seo-vykonu-2026`
