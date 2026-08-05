# Research — refresh `local-seo-cesko-2026`

**Typ runu:** refresh (2:1 kadence, Run94)
**Datum:** 2026-08-04
**Článek:** `/blog/local-seo-cesko-2026/` · published 2026-05-03 · updated 2026-05-06 (nikdy nerefreshováno)
**Rozsah:** 2 462 slov, category tutorial, tag strategie

---

## 1. Proč tenhle článek

Nejstarší `updated` ze všech 114 článků. Rozhodl ale obsah, ne datum:

- **0 zmínek o AI Mode** v průvodci lokálním SEO z roku 2026.
- Sekce „Local SEO v AI éře" stojí na jedné vágní větě bez zdroje — a **ta věta je pravdivá
  jen pro část dotazů.**

---

## 2. ⛔ Hlavní nález — tvrzení, které platí jen pro jeden typ dotazu

### Co článek říká dnes

> „U lokálních dotazů bývá dopad AI Overviews **nižší než u informačních dotazů** — vyhledávač
> u lokálního intentu typicky preferuje mapové a profilové výsledky."

Bez zdroje. A hlavně: **rozděluje svět na „lokální" a „informační" dotazy**, jenže reálný dotaz
lokální firmy bývá kombinace obojího („nejlepší instalatér na havárii Praha").

### Primární zdroj — Whitespark, ověřeno 4. 8. 2026

Studie **„The Prevalence of AI Overviews in Local Search"**, publikovaná **12. 5. 2025**.

**Metodika:** 540 dotazů · tři americká města (Houston, Phoenix, Denver) · šest oborů
(instalatéři, advokáti na újmy, zubaři, optici, kliniky, realitní makléři) · dotazy rozdělené
do tří kategorií podle záměru.

**Výsledky — a je v nich obrácený vztah:**

| Typ dotazu | AI Overviews | Místní panel |
|---|---|---|
| **Lokální záměr** („instalatér Phoenix") | **15 %** | **93 %** |
| **Informační záměr** („kolik stojí advokát") | **92 %** | 6 % |
| **Hybridní** (informace + transakce) | **97 %** | 17 % |
| průměr přes všechny dotazy | 68 % | 39 % |

**To je ta pointa:** u čistě lokálního dotazu má článek pravdu — AIO se objeví jen v 15 %.
Ale **u hybridního dotazu je to 97 %**, tedy víc než u čistě informačních. A hybridní dotaz
je přesně to, co lidé reálně píšou.

### ⛔ Limity, které musí být v článku

1. **Studie je z května 2025**, ne z roku 2026. Nejméně čtyři sekundární přehledy ji uvádějí
   jako „2026 study" — nepřebírat.
2. **USA, tři města, šest oborů.** Žádná česká data.
3. Měří **výskyt** funkce, ne dopad na návštěvnost.

---

## 3. Druhý nález — chybí AI Mode a volatilita

Článek AI Mode nezmiňuje vůbec. Přitom měření volatility od SE Ranking (publ. 29. 9. 2025,
zpracované ve vlastním článku `volatilita-ai-odpovedi`) je **postavené právě na lokálních
dotazech**:

- obecný lokální dotaz („restaurace v okolí"): shoda URL mezi opakováními **18–20 %**
- dotaz s uvedeným městem: **46–49 %**

Pro lokální firmu z toho plyne přímé doporučení: **při testování i v obsahu pojmenovat město.**
Konkrétní dotaz je stabilnější než obecný.

---

## 4. Menší nálezy

1. **Ceny nástrojů bez data** — Local Falcon $24/měs, SE Ranking Local add-on $25/měs.
   Stejná vada jako u `seo-nastroje-2026` a `aio-strategie`. Datovat.
2. **„trust score"** u NAP nesouladů — Google žádné veřejné NAP „trust score" nemá.
   Je to oborová zkratka, ne doložený mechanismus. Přeformulovat.
3. Interní odkazy nevedou na nic novějšího než z května.

---

## 5. Co refresh udělá

1. Přepíše sekci „Local SEO v AI éře" na měřená data podle záměru dotazu, s tabulkou
   a s limity (USA, 2025, šest oborů).
2. Doplní AI Mode a volatilitu u lokálních dotazů + doporučení pojmenovat město.
3. Otevřený box s přiznáním, že původní formulace platila jen pro část dotazů.
4. Datuje ceny nástrojů, opraví „trust score".
5. Doplní prolinky na `volatilita-ai-odpovedi`, `ai-mode-vs-ai-overviews`, `test-viditelnosti-v-ai`.
6. `updated` → 2026-08-04, `published` beze změny, titulek beze změny → **OG negenerovat**.

---

## 6. Zdroje

- whitespark.ca/blog/case-study-the-prevalence-of-ai-overviews-in-local-search/ — studie
  výskytu AI Overviews v lokálním vyhledávání, publ. 12. 5. 2025, čteno 4. 8. 2026
- vlastní články: `volatilita-ai-odpovedi` (měření SE Ranking), `ai-mode-vs-ai-overviews`,
  `test-viditelnosti-v-ai`, `google-ai-mode`
