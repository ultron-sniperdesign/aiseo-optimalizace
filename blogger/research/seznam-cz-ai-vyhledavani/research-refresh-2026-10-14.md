# Research — refresh `seznam-cz-ai-vyhledavani` (14. 10. 2026)

**Typ runu:** refresh jednoho článku (kadence 2 + 1 + 1, run 3). **Proč tenhle:** kandidát s vysokou
prioritou ve `REFRESH_QUEUE.md` (11. 10. 2026) — CTA tvrdí, že Pack obsahuje checklisty pro Seznam Search
Console, Firmy.cz, Heureku a Sklik (ve zdrojích Packu nic z toho není), Heureka je v textu vedená jako součást
ekosystému Seznamu, FAQ si odporuje s tělem. Při prověrce se našlo víc (níž).

**Titulek se nemění.** Článek patří do kontrolní skupiny měření titulků (`_source/_keyword-research/blog-gsc-20260907/MERENI-TITULKU.md`,
76 článků beze změny titulku, přeměření 2. 11. 2026). Mění se obsah, `answer`, `description`, FAQ a `updated`;
`title` ani nový `seoTitle` ne. Obrázek se tedy nepřegenerovává.

---

## Vady nalezené při prověrce (14. 10. 2026)

| # | Místo (stará verze) | Vada | Doklad |
|---|---|---|---|
| 1 | ř. 211 CTA | Pack „obsahuje checklisty pro Seznam Search Console, Firmy.cz, Heureku i základ Sklik kampaně“ — nepravda (Z3) | grep `_source/products/pack/pack*.html`: Firmy.cz, Heureka, Sklik, Seznam Search Console 0× (11. 10.) |
| 2 | ř. 26, 142, 172 | **„Seznam Search Console“ neexistuje** — nástroj Seznamu se jmenuje **Seznam Webmaster** | nápověda Vyhledávání *Seznam Webmaster* |
| 3 | ř. 81, 115, 153–154, 170–174, 211, FAQ ř. 26 | Heureka vedená jako ekosystém Seznamu; Stepper tvrdí, že práce s Heurekou zvyšuje šanci v Seznam Asistentovi | Lupa.cz 24. 5. 2023: jedinými akcionáři Heureky jsou PPF a EC Investments; ve výčtu služeb na blogu Seznamu Heureka není |
| 4 | ř. 73, 95, 204, FAQ ř. 24 | Zdroje asistenta jen podle tiskové zprávy; FAQ jmenuje Mapy.cz (tělo říká, že je Seznam nejmenuje) | nápověda Seznam AI (časté dotazy): **jen webový a zpravodajský index Vyhledávání a Počasí.cz**; stránka o betě: Zboží.cz, Mapy.com + Firmy.cz, Sreality.cz + Sauto.cz aj. se připojí postupně |
| 5 | ř. 69, 103 | „veřejně není jednoznačné, jestli dočasný stav (OpenAI) trvá“ | nápověda Seznam AI: **aktuálně kombinace SeLLMa a modelů OpenAI přes Microsoft Azure**, cílem výhradně SeLLMa |
| 6 | ř. 22, 43, 67, 97, 193, 203 | 70 mld. parametrů, Llama 3.1, investice 100+ mil. Kč — v textech Seznamu nejsou; Lupa.cz (5/2024) zmiňuje dotrénované Llama a Mistral a variantu 70B, Llama 3.1 ani 100 mil. Kč jsem nedohledal | → vypustit, nejsou potřeba k rozhodnutí |
| 7 | ř. 20, 49–55, 202 | „11–15 % (Statista, Statcounter 2024–2025)“, „2015 ~20 %“ — naše vlastní číslo, které se podle `podil-seznamu-v-ceskem-vyhledavani` vrací jako citace; Sklik „~25 % PPC“, „CPC o 20–40 % nižší“, „55–64 let“, „70:30“ — bez zdroje | StatCounter, září 2026 (odečteno 14. 10. 2026): Google **78,71 %**, Seznam **15,05 %**, Bing **4,73 %** — prokliky na weby s kódem StatCounteru |
| 8 | ř. 142 | „pro AI služby zvlášť robota Seznam-Extended“ — Seznam-Extended je token v robots.txt, nápověda Vyhledávání uvádí i `AI`, `MachineLearning` a `nosnippet` | nápověda *Zákaz tvorby AI odpovědí z vašeho webu* (Wayback 7. 6. 2026); nápověda Seznam AI, FAQ pro autory obsahu |
| 9 | ř. 162 | „Seznam Asistent podle dostupné dokumentace využívá strukturovaná data podobně jako Google“ — dokumentace to neříká | nápověda Vyhledávání *Strukturovaná data*: schema.org a Open Graph pro **výsledky vyhledávání** (FAQ, produktové, článkové… snippety); o Seznam AI nic |
| 10 | ř. 63, 191, 203 | beta „k 31. 8. 2026“ | tisková zpráva 25. 5. 2026: všem přihlášeným; **nápověda k 14. 10. 2026 pořád: beta pro omezený počet uživatelů** → rozpor |
| 11 | ř. 86, 95–98 | CompareTable s nedoloženými tvrzeními (doladění na idiomy, „výrazně větší“ modely Claude/GPT/Gemini, datacentra) a „Google AI Overviews“ bez českého názvu | nahradit doloženou tabulkou; Přehled od AI v Česku od 20. 5. 2025 (sekce `/prehled-od-ai/`) |
| 12 | ř. 194 | „Google investuje desítky miliard USD, Seznam stovky milionů Kč“ — bez zdroje | vypustit |
| 13 | ř. 110–134 | „Kdy Seznam řešit“ — demografie a obory bez zdroje; `MistakeGrid` použitý jako výčet „kdy ne“, ne chyb | přepsat na rozhodnutí podle vlastních dat |
| 14 | — | Chybí: inzeráty Skliku a nabídky Seznam Nákupů v Seznam AI, souhrny ve vyhledávání, limity dotazů, zdroje u odpovědi = všechny podklady, ne použité | nápověda Seznam AI, nápověda Vyhledávání *Vychytávky* |
| 15 | odkazy | `seznam-asistent-sellma` (ve frontě), pilíř (FAQ tvrdí zdroje Firmy.cz a Zboží.cz jako fakt), `chatgpt-seo`, `perplexity-seo` — odkazy vypustit; nové: `podil-seznamu-v-ceskem-vyhledavani`, `zbozi-cz-pro-ai`, `ai-sumarizace-a-vydavatele`, `firmy-cz-pro-ai`, sekce `/prehled-od-ai/` | B2 |

---

## Co je ověřeno a čím (Z16)

Zdroje Seznamu, StatCounteru a Lupy nemají otevřenou licenci → parafráze. Texty stažené 14. 10. 2026
(`seznamrefresh/text/`), tisková zpráva a blog Seznamu z 11. 10. (`zbozi/text/`).

| Druh dokladu | Co | Odkaz + datum |
|---|---|---|
| **Dokumentace** | Nápověda Seznam AI, *Nejčastější dotazy*: Seznam AI zdarma s týdenním stropem dotazů; **„aktuálně je Seznam AI zpřístupněna v pilotním režimu pouze části uživatelů“** (homepage Seznam.cz, výsledky Vyhledávání; aplikace a další služby později); **modely: SeLLMa + modely OpenAI přes Microsoft Azure**, cílem výhradně SeLLMa; **napojená data: webový a zpravodajský index Vyhledávání a Počasí.cz**; odpovědi z vyhledávání a „dalších ověřených zdrojů Seznamu, výjimečně přímo z jazykového modelu“; autoři obsahu: Seznam-Extended / AI Disallow nebo `nosnippet` → obsah se v AI odpovědích nepoužije | o-seznam.cz/napoveda/seznam-ai/nejcastejsi-dotazy/ a /napoveda/seznam-ai/, 14. 10. 2026 |
| | *Beta verze*: beta „otevřená pouze omezenému počtu uživatelů“, „v nejbližších měsících“ pro všechny; dnes vyhledávač, zpravodajství, počasí; **postupně připojí** Zboží.cz, Mapy.com a Firmy.cz, Sreality.cz a Sauto.cz, TV program, Podcasty, Stream.cz | o-seznam.cz/napoveda/seznam-ai/beta-verze/, 14. 10. 2026 |
| | *Jak Seznam AI funguje*: ve zdrojích uvádí **všechny podklady, které měl model k dispozici**, neoznačuje, které skutečně využil | o-seznam.cz/napoveda/seznam-ai/jak-seznam-ai-funguje/, 14. 10. 2026 |
| | *Limity pro konverzace*: standardní účet 40 dotazů denně, 100 týdně; Seznam bez reklam 400 týdně; v betě nejvýš 10 dotazů v jedné konverzaci | o-seznam.cz/napoveda/seznam-ai/tarify-a-limity/, 14. 10. 2026 |
| | *Sklik inzeráty v Seznam AI*: inzeráty z vyhledávací nebo Chytré kampaně pod odpověďmi, sekce **Sponzorované výsledky**, nejvýš dva inzeráty; plochy nejde zvlášť cílit ani vyloučit; výkon ve statistikách kampaně; „odpověď Seznam AI není inzercí nijak ovlivněna“ (tvrzení Seznamu); nabídky Seznam Nákupů se v Seznam AI zobrazují (Produkt – doporučené nabídky) | o-seznam.cz/napoveda/seznam-ai/sklik-inzeraty-v-seznam-ai/, 14. 10. 2026 (beze změny proti 11. 10.) |
| | Blog Seznamu 25. 11. 2025: Asistent ve zkušebním provozu pro vybranou skupinu (homepage, asistent.seznam.cz, trendující výrazy, výsledky vyhledávání); **Sellma a dočasně komerční modely OpenAI v evropských datacentrech přes Microsoft Azure** | blog.seznam.cz/2025/11/seznam-asistent-umozni-uzivatelum-jednodussi-a-chytrejsi-orientaci-na-ceskem-internetu/ |
| | Tisková zpráva 25. 5. 2026: beta **všem přihlášeným**; homepage, **aplikace Seznam**, Vyhledávání, asistent.seznam.cz; zdroje Vyhledávání, zpravodajské weby, Zboží.cz, Počasí.cz, Firmy.cz, Sport.cz, Jízdní řády, TV program | blog.seznam.cz/2026/05/seznam-asistent-je-dostupny-vsem-prihlasenym-uzivatelum/ |
| | Nápověda Vyhledávání: *Seznam Webmaster* (navštívené stránky, index, přesměrování, chyby; ověření meta tagem nebo souborem); *Strukturovaná data* (schema.org a Open Graph pro výsledky vyhledávání), *Snippety k FAQ stránkám* (z `FAQPage`); *Vychytávky* (sumarizace stránky s výsledky, sumarizace trendujících témat, přímá odpověď jazykového modelu); *Zákaz tvorby AI odpovědí* (tři tokeny + `nosnippet`) | o-seznam.cz/napoveda/vyhledavani/…, 14. 10. 2026 |
| | Partnerská nápověda Seznam AI a smluvní podmínky Newsfeedu od 1. 5. 2026 (pro vydavatele) | rozebráno v `research/ai-sumarizace-a-vydavatele/` |
| | Blog Seznamu 25. 6. 2026 (upraveno 9. 10. 2026): nabídky Seznam Nákupů se v Seznam AI zobrazují „od května letošního roku“ | blog.seznam.cz/2026/06/novinka-v-seznam-asistentovi-pod-odpovedmi-se-zobrazuji-inzeraty-z-skliku/ (ověřeno při `zbozi-cz-pro-ai`, 11. 10. 2026) |
| | Nápověda Skliku *Registrace provozovny*: registrace e-shopu zdarma, nabídky se zobrazují jen s dobitým kreditem v Seznam Peněžence | napoveda.sklik.cz/inzerce-nakupy/registrace-provozovny/ (ověřeno 11. 10. 2026) |
| | Titulek stránky asistent.seznam.cz: „Seznam AI“ (og:title „Seznam AI - AI chat od Seznam.cz“); robots.txt webu povoluje jen úvodní stránku, čtena jen ta | asistent.seznam.cz, 14. 10. 2026 |
| | Nápověda *Vychytávky*: u všech tří prvků „Jste-li přihlášeni, můžete z tohoto místa pokračovat v konverzaci v Seznam AI“ | o-seznam.cz/napoveda/vyhledavani/vysledky-vyhledavani/vychytavky/, 14. 10. 2026 |
| | Lupa.cz 24. 5. 2023: po odkupu 20% podílu od Rockaway jsou EC Investments a PPF jedinými akcionáři Heureky | lupa.cz/aktuality/rockaway-odchazi-z-heureky-od-ppf-naopak-kupuje-majoritu-v-e-shopu-vivantis/, 14. 10. 2026 |
| | Sekce `/prehled-od-ai/` (náš web): Přehled od AI v Česku od 20. 5. 2025; v Česku zatím bez reklam uvnitř panelu; přepínač v Search Console od 31. 8. 2026 | vlastní sekce, ověřená adminem |
| **Rozhraní (UI)** | **prázdné** — Seznam AI jsem netestoval, do Seznam Webmasteru ani Skliku se nepřihlašuji | — |
| **Měření** | **StatCounter**, září 2026, odečteno 14. 10. 2026: Google 78,71 %, Seznam 15,05 %, Bing 4,73 % — prokliky z vyhledávačů na weby s kódem StatCounteru, revize 45 dní (metoda v `podil-seznamu-v-ceskem-vyhledavani`) | gs.statcounter.com/search-engine-market-share/all/czech-republic |
| **Nelze ověřit** | (a) kolik lidí Seznam AI používá; (b) kdy skončí beta a jestli platí „všem přihlášeným“, nebo „omezenému počtu“; (c) kdy a jestli se připojí Zboží.cz, Firmy.cz a další; (d) jak Seznam AI vybírá zdroje; (e) jestli Seznam AI čte strukturovaná data; (f) technické parametry SeLLMy (velikost, základ, investice) — v textech Seznamu nejsou; (g) podíl Sklik na trhu PPC a rozdíly CPC | — |

---

## Podmínky u tvrzení (B3)

| Tvrzení | Podmínky | Konzistence | Výjimky | Zdroj |
|---|---|---|---|---|
| Seznam AI odpovídá z indexu Vyhledávání a Počasí.cz | nápověda „v současnosti“; tisková zpráva uvádí širší výčet | rozpor tisková zpráva × nápověda → psát jako rozpor | Nákupy: placené nabídky se zobrazují (Sklik nápověda) | nápověda FAQ, beta; TZ 25. 5. |
| Dostupnost | TZ: všem přihlášeným; nápověda: pilot/omezený počet | rozpor | — | TZ, nápověda |
| Odhlášení z AI odpovědí | kterýkoli z tokenů s `Disallow: /` nebo `nosnippet` (vypne i úryvky) | pro partnery Newsfeedu podmínky jen Seznam-Extended | — | nápověda Vyhledávání, Seznam AI FAQ |
| Reklama v Seznam AI | inzeráty z vyhledávací/Chytré kampaně, max. 2, Sponzorované výsledky; nejde cílit ani vyloučit | nabídky Seznam Nákupů zvlášť | — | nápověda Sklik inzeráty v Seznam AI |
| Podíl Seznamu ~15 % | StatCounter, září 2026, prokliky, revize 45 dní | jiné zdroje měří jinak | hledání bez prokliku nevidí | StatCounter |

---

## B2 — odkazy

| Článek | Verdikt |
|---|---|
| `podil-seznamu-v-ceskem-vyhledavani` | odkaz — metoda StatCounteru, 23. 8. 2026 |
| `zbozi-cz-pro-ai` | odkaz — Seznam Nákupy v Seznam AI (vlastní, 11. 10.) |
| `ai-sumarizace-a-vydavatele` | odkaz — vydavatelé, odhlášení, tři tokeny (vlastní, 14. 10.) |
| `firmy-cz-pro-ai` | odkaz — prověřeno 11. 10. jako čisté |
| sekce `/prehled-od-ai/` | odkaz (adminova sekce, fakta k Česku) |
| `seznam-asistent-sellma`, pilíř, `chatgpt-seo`, `perplexity-seo` | odkazy vypuštěny (fronta / FAQ pilíře s nedoloženými zdroji / mimo téma) |
