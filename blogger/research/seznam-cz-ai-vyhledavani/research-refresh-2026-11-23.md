# Research — refresh `seznam-cz-ai-vyhledavani` (23. 11. 2026)

**Typ runu:** refresh jednoho článku (série 10 runů z 22. 11. 2026, run 4; audity přes nezávislé Claude subagenty,
Codex do 24. 11. 15:01 v limitu). **Proč tenhle:** Refresh 3 z revize plánu 30. 10. 2026 (modely a zdroje podle
nápovědy) a z bloku Seznam AI 22. 11. Vybrán daty proti Refreshi 7 (`vydelavat-na-ai-robotech`): **GSC 1. 8.–21. 11.
2026 — 310 zobrazení, 4 kliky, pozice 7,9** (vydělávat: 2 zobrazení). Článek nesou dotazy „seo seznam.cz“ a varianty
(asi 86 zobrazení, pozice 11–16) a „vyhledávání na seznamu“ (5, pozice 9,2) → krátkou odpověď nechat na Seznam AI,
záměr „SEO pro Seznam.cz“ chytit nadpisem postupu a FAQ. Jiný článek webu na něj necílí. **Titulek se nemění.** Audity: `audit1-refresh-2026-11-23.md`, `audit2-refresh-2026-11-23.md`, vypořádání `vyporadani-refresh-2026-11-23.md`.

## Vady verze ze 14. 10. 2026 (s úpravami 22. 11.)

| # | Místo | Vada |
|---|---|---|
| 1 | answer, úvod, FAQ 2, sekce o modelech | „SeLLMa + modely OpenAI přes Microsoft Azure“ — nápověda dnes uvádí SeLLMa + open-source Gemma, OpenAI nezmiňuje; věta „cílem je běžet výhradně na SeLLMě“ v nápovědě už není |
| 2 | answer, úvod, FAQ 3, tabulka, sekce „Odkud čerpá“, krok 3, checklist | zdroje „index Vyhledávání a Počasí.cz“, Firmy.cz „mezi budoucími“ — časté dotazy v nápovědě dnes jmenují Počasí.cz, Firmy.cz, Sreality.cz, jízdní řády a Sport.cz; tisková zpráva 15. 10. Zboží.cz, Firmy.cz, TV program a nově Sreality, do konce roku Mapy.com, Kupi.cz, Sauto.cz, Horoskopy |
| 3 | sekce „Co sledovat“ | „nejisté zůstává, kolik lidí ho používá… kdy se připojí Zboží.cz, Firmy.cz“ — tisková zpráva 15. 10. obojí uvádí |
| 4 | tabulka „Kde“ | chybí seznam.ai (časté dotazy v nápovědě) |
| 5 | podíl ve vyhledávání (H2, FAQ 1, úvod) | StatCounter září 2026 → říjen 2026 (Seznam 13,07 %) |
| 6 | postup | chybí IndexNow — Seznam.cz je mezi vyhledávači protokolu (pokyn revize, odkaz na `bing-seo-pro-ai`) |
| 7 | celý článek | „stav k 14. 10. 2026“; tabulka porovnává jen květnovou zprávu s nápovědou |

## Co je ověřeno a čím (Z16)

| Druh dokladu | Co | Zdroj, načteno 23. 11. 2026 |
|---|---|---|
| Dokumentace | časté dotazy: modely „kombinace našeho vlastního velkého jazykového modelu SeLLMa a open-source modelu Gemma s volně dostupnými váhami“; data „z webového a zpravodajského indexu Seznam Vyhledávání, Pocasi.cz, Firmy.cz, Sreality.cz, seznam.cz/jizdnirady, Sport.cz“; přístup po přihlášení na domovské stránce, ve výsledcích Vyhledávání a na seznam.ai; mobilní aplikace „přijde později“ | o-seznam.cz/napoveda/seznam-ai/nejcastejsi-dotazy/ (bez data) |
| Dokumentace | stránka o betě: „otevřená pouze omezenému počtu uživatelů“, rozšiřování postupně, „v nejbližších měsících“ všem; dnes vyhledávač, zprávy, počasí; postupně Zboží.cz, Mapy.com a Firmy.cz, Sreality.cz a Sauto.cz, TV program, Podcasty, Stream.cz — **v rozporu s častými dotazy** u Firmy.cz a Sreality | o-seznam.cz/napoveda/seznam-ai/beta-verze/ |
| Dokumentace | jak funguje: ve zdrojích „všechny podklady, které měl model … k dispozici“, neoznačuje, které skutečně využil | o-seznam.cz/napoveda/seznam-ai/jak-seznam-ai-funguje/ |
| Dokumentace | limity beze změny: standardní účet 40 denně / 100 týdně, Seznam bez reklam 400 týdně, 10 dotazů v konverzaci | o-seznam.cz/napoveda/seznam-ai/tarify-a-limity/ |
| Dokumentace | Sklik v Seznam AI beze změny (Sponzorované výsledky, nejvýš 2 inzeráty, vyhledávací a Chytré kampaně, nejde zvlášť cílit ani vyloučit, statistika plochy zvlášť není) | o-seznam.cz/napoveda/seznam-ai/sklik-inzeraty-v-seznam-ai/ |
| Dokumentace | tisková zpráva 15. 10. 2026: „Seznam AI (dříve Seznam Asistent)“; k Vyhledávání, zpravodajským webům, Zboží.cz, Firmy.cz a TV programu nově Sreality.cz; do konce roku Mapy.com, Kupi.cz, Sauto.cz, Horoskopy; „každý týden vyšší statisíce uživatelů a … nižší miliony konverzací“; data v ČR | blog.seznam.cz/2026/10/seznam-ai-propojuje-dalsi-sluzby-… (titulek dnes „Používají ho už statisíce uživatelů týdně“; adresa nese starší „více než půl milionu“ — nepoužito) |
| Dokumentace | blog Seznamu v listopadu 2026 (do 19. 11.): o Seznam AI nic | blog.seznam.cz/2026/11/ |
| Dokumentace | nápověda Vyhledávání beze změny: sumarizace výsledků, trendujících témat, přímá odpověď modelu, přihlášení → Seznam AI; zákaz AI odpovědí (Seznam-Extended, AI, MachineLearning, nosnippet); Seznam Webmaster (meta značka nebo soubor); strukturovaná data (schema.org, Open Graph, FAQ) | o-seznam.cz/napoveda/vyhledavani/… |
| Dokumentace | IndexNow: koncový bod Seznam.cz `https://search.seznam.cz/indexnow?url=…&key=…` mezi vyhledávači protokolu; oznámení se sdílí s ostatními zapojenými vyhledávači | indexnow.org/faq |
| Dokumentace | nápověda Seznamu „Protokol IndexNow“: oznámení je „pouze informace“ pro algoritmy, stažení ani indexace nejsou zaručené, zařazené adresy se do výsledků dostanou do týdne, ostatní vyhledávače jsou informovány po ověření klíče; API Seznam Webmasteru zaručuje přidání až 500 URL denně | o-seznam.cz/napoveda/vyhledavani/seznambot/protokol-indexnow/ |
| Dokumentace | nápověda Seznamu „Optimalizace (SEO)“: psát přirozeně pro uživatele, nevkládat text do obrázků, nezahlcovat klíčovými slovy, stránku držet rozumně velkou; SeznamBot rozpozná jazyk; všechny TLD stejně | o-seznam.cz/napoveda/vyhledavani/optimalizace/ |
| Dokumentace | nápověda Skliku: registrace e-shopu zdarma, nabídky se zobrazují jen s dobitým kreditem; specifikace feedu ve formátu Zboží.cz | napoveda.sklik.cz/inzerce-nakupy/registrace-provozovny/, …/reklamy/xml-feed/specifikace/ |
| Dokumentace | nápověda Vyhledávání: souhrn výsledků z obsahu „top 5“ organických výsledků, souhrn trendujících témat z titulků a perexů; Seznam Webmaster je v betě (graf může dočasně vypadnout) | o-seznam.cz/napoveda/vyhledavani/vysledky-vyhledavani/vychytavky/, …/seznam-webmaster/ |
| Dokumentace | nápověda Seznam AI: titulky stránek „… - Nápověda Seznam Asistent“, nadpisy Seznam AI; odpovědi vznikají z dat Vyhledávání a dalších zdrojů Seznamu, „výjimečně přímo z jazykového modelu“; v odpovědi pro autory obsahu „betaverze pro omezený počet uživatelů“; Sklik: podobu a umístění ploch průběžně testuje, samostatná statistika plochy není | o-seznam.cz/napoveda/seznam-ai/… |
| Data třetí strany | StatCounter, Česko — **export CSV (všechna zařízení) stažený 23. 11. 2026**: srpen Seznam 15,79 %, září Google 78,77 / Seznam 14,96 / Bing 4,75 %, říjen Google 80,07 / Seznam 13,11 / Bing 5,19 %; souhrn na stránce ukazoval pro říjen 13,07 % a 5,23 % (revize). Předchozí verze měla zářijových 15,05 % odečtených 14. 10. v revizním okně. Měří prokliky na weby se svým kódem, data reviduje 45 dní — říjen předběžný zhruba do 15. 12. | gs.statcounter.com/search-engine-market-share/all/czech-republic (CSV přes „Download Data“) |
| Data (vlastní) | GSC 1. 8.–21. 11. 2026 pro článek: 310 zobrazení, 4 kliky, pozice 7,9; dotazy „seo seznam.cz“ a varianty | Search Console aiseo-optimalizace.cz |
| Rozhraní (UI) | **prázdné** — Seznam AI jsem netestoval, do Seznam Webmasteru ani Skliku jsem se nepřihlašoval | — |
| Nelze ověřit | kdy skončí beta, jestli do konce roku přibudou ohlášené služby, podle čeho Seznam AI vybírá zdroje; partnerská nápověda pořád píše „Seznam Asistent“ | — |

## Tabulka podmínek

| Tvrzení | Podmínka |
|---|---|
| Modely SeLLMa + Gemma | podle častých dotazů v nápovědě, která nemá datum; 14. 10. 2026 tam stály modely OpenAI přes Azure |
| Zdroje Seznam AI | časté dotazy a tisková zpráva se liší ve výčtu (jízdní řády a Sport.cz × Zboží.cz a TV program); stránka o betě vede Zboží.cz, Firmy.cz, Sreality.cz i TV program mezi budoucími; krátká odpověď proto zdroje připisuje tiskové zprávě |
| Index Vyhledávání jako zdroj | nápověda neříká „hlavní“: odpovědi z dat Vyhledávání a dalších zdrojů Seznamu, výjimečně z modelu; časté dotazy jmenují index jako první; podle čeho vybírá stránky, Seznam nepopisuje |
| Reklama a nabídky v Seznam AI | jen podle nápovědy (UI prázdné); plochy se průběžně testují, samostatná statistika není; „od května 2026“ jen z blogu Seznamu z 25. 6. 2026 |
| Zdroje u odpovědi | jen podle nápovědy (jak Seznam AI funguje), v rozhraní neověřeno |
| Termín ohlášených služeb | do konce roku 2026 (tisková zpráva 15. 10.) — po 1. 1. 2027 ověřit (řádek plánu `seznam ai nove sluzby do konce roku`) |
| Seznam Webmaster | v betě, data v grafu občas vypadnou |
| Název | nápověda k 23. 11. míchá Seznam AI a Seznam Asistent (titulky stránek), partnerská nápověda vede asistent.seznam.cz |
| Kdo ho má | časté dotazy si odporují samy („stačí být přihlášený“ × v odpovědi pro autory „omezený počet uživatelů“); stránka o betě: omezený počet uživatelů, všem „v nejbližších měsících“; květnová zpráva: všichni přihlášení |
| Počet uživatelů | „vyšší statisíce“ týdně a „nižší miliony konverzací“ podle Seznamu (tisková zpráva 15. 10.), nezávisle neověřeno |
| Podíl Seznamu 13,11 % | StatCounter (export 23. 11.), říjen 2026, prokliky na weby s jeho kódem, předběžné do zhruba 15. 12.; září 14,96 %, srpen 15,79 % |
| IndexNow | Seznam.cz je koncový bod protokolu; podle nápovědy Seznamu jen informace pro algoritmy, stažení ani indexace nejsou zaručené, zařazené adresy do týdne |
| Strukturovaná data | Vyhledávání je čte pro rozšířené úryvky; jestli je čte Seznam AI, nápověda neuvádí |
