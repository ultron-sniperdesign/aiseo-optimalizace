# Research — volatilita AI odpovědí

**Řádek plánu:** `volatilita ai odpovedi`
**Datum:** 2026-08-03 · **Kategorie:** tutorial · **Tagy:** mereni, ai-platformy

---

## 1. ⛔ Nejdřív oprava vlastního zadání

Řádek v plánu tvrdil, že „obsah AI přehledu se u téhož dotazu mění zhruba v 70 % případů".
**To číslo znamená něco jiného.** V původním zdroji jde o *„over 2 to 3 months you could
reasonably expect 70% of the pages ranking in AI Overviews to change"* — tedy **obměnu
stránek za dva až tři měsíce**, ne rozptyl u téhož dotazu. Do článku takhle nesmí.

Sekundární souhrn navíc uváděl „91 % odlišných URL, 9,2 % překryv" — **žádné takové číslo
v primární studii není.** Je to už potřetí v této sérii runů, co se údaj ze souhrnu
u zdroje rozpadl.

---

## 2. Kolizní kontrola

| Kandidát | Co v něm je | Verdikt |
|---|---|---|
| `test-viditelnosti-v-ai` | Ruční test; **už doporučuje opakovat každý dotaz 3–5×**, protože odpovědi nejsou stejné | **Nevyvrací se, doplňuje se.** Ten článek říká „opakuj", tenhle říká **o kolik to kolísá a na čem to závisí**. Prolinkovat. Pozn.: obava z plánu, že tenhle text metodu zpochybní, byla lichá — ověřeno. |
| `mereni-ai-mode-limity` (18. 7.) | Proč data AI Mode neoddělí | Sousedí: tam limity nástrojů, tady nestabilita samotných výsledků. |
| `jak-cist-studie-o-ai-viditelnosti` | Metoda na čísla | Použije se na tuhle studii samotnou. |
| `ai-mode-vs-ai-overviews` | Rozdíl obou funkcí | Sousedí. |

**Verdikt: téma volné.** Kvantifikovaná volatilita na webu nikde není.

---

## 3. Primární zdroj — SE Ranking, ověřeno 3. 8. 2026

**Studie o volatilitě AI Mode, publikovaná 29. 9. 2025.**

### Metodika (doslova z jejich popisu)

- **5 000 dotazů**: 2 500 obecných lokálních („restaurants near me") + 2 500 s uvedeným
  místem („restaurants in New York")
- **Pět měst v USA**: New York, Los Angeles, Washington DC, Houston, Denver
- Každý dotaz **15×** (tři běhy na město)
- Měřeno na úrovni **domén i URL**
- Týká se **AI Mode**, ne AI Overviews

### ⛔ Klíčové zjištění: volatilita NENÍ jednotná

| Typ dotazu | Shoda domén | Shoda URL |
|---|---|---|
| **Obecný lokální**, stejné město | 34,2–36,8 % | **18,3–20,5 %** |
| **S uvedeným místem**, stejné město | 53,3–56,6 % | **46–49 %** |
| Obecný lokální, napříč městy | 23,7–24,1 % | **1,6–2 %** |
| S uvedeným místem, napříč městy | 48–49,2 % | 41,9–44 % |

**To je ta pointa, kterou přehledy zahazují:** konkrétnější dotaz je **zhruba 2,5× stabilnější**
(18–20 % → 46–49 % shody URL). Volatilita tedy není vlastnost AI, ale funkce toho,
jak je dotaz formulovaný.

Vlastní výhrada autorů: *„We recognize that other valid perspectives may also exist."*

---

## 4. ⛔ Limity, které musí být v článku

1. **Je to AI Mode, ne AI Overviews.** Nepřenášet.
2. **USA, pět měst.** Žádná česká data.
3. **Jen lokální dotazy** (restaurace apod.). O informačních dotazech studie neříká nic.
4. **Ze září 2025**, tedy 10 měsíců stará.
5. Číslo o obměně za 2–3 měsíce (70 %) je **jiná metrika z jiného zdroje** — pokud se použije,
   musí být oddělené a popsané správně.

---

## 5. Co z toho plyne prakticky

1. **Jednorázový test nic neznamená.** Při shodě URL 18–20 % je jeden běh v podstatě los.
2. **Opakovat, a zapsat rozptyl, ne průměr.** „Objevili jsme se ve 2 z 5 běhů" je informace;
   „objevili jsme se" není.
3. **Formulace dotazu mění stabilitu víc než cokoli jiného.** Konkrétní dotaz = stabilnější výsledek.
4. **Netestovat z jednoho místa**, pokud jde o lokální téma.

---

## 6. Teze článku

> Když se v testu AI viditelnosti neobjevíte, nemusí to nic znamenat — a když se objevíte,
> taky ne. V měření z konce roku 2025 se u obecných lokálních dotazů shodovalo mezi opakováními
> jen 18 až 20 procent odkazů. U dotazů s uvedeným místem ale 46 až 49 procent, tedy víc než
> dvojnásobek. Volatilita není vlastnost AI, je to funkce toho, jak se ptáte.

---

## 7. Zdroje

- seranking.com/blog/ai-mode-volatility-test — studie volatility AI Mode, 29. 9. 2025, čteno 3. 8. 2026
- vlastní články: `test-viditelnosti-v-ai` (metoda, kterou to doplňuje), `mereni-ai-mode-limity`, `jak-cist-studie-o-ai-viditelnosti`
