# Research — Propojené aplikace v AI Mode (18. 8. 2026)

Řádek plánu: `propojene aplikace v ai mode`. Zadání: ověřit u primárního zdroje, co jde propojit a co z toho Google čerpá; těžiště = jestli se tím mění cesta na web třetí strany; ⛔ nevymýšlet dopad, který Google nepopsal.

## Kolizní kontrola

| Kandidát z clusteru AI Mode | Stav |
|---|---|
| `plynuly prechod z prehledu do ai mode` | ⛔ KOLIZE — `ai-mode-vs-ai-overviews` má celou sekci „Google mezi nimi přidal plynulý přechod“, zmiňuje i `ai-mode-jako-vychozi-rezim` |
| `vychozi model v ai mode a co to meni` | ⛔ KOLIZE — `ai-mode-jako-vychozi-rezim` má obě výměny modelu i s daty v tabulce, volatilitu pokrývá `volatilita-ai-odpovedi` |
| `co dela gsc report s ai mode` | částečná kolize s `gsc-ai-segmenty-mereni` + `mereni-ai-mode-limity` |
| **`propojene aplikace v ai mode`** | ✅ **nepokryto** — Personal Intelligence zmiňuje jen `ai-mode-cesky` jednou větou o věkové hranici |

Personalizaci a její dopad na měření **nechávám stranou** — na to je vlastní otevřený řádek `personalizace ai odpovedi`.

## Co je doložené

### Časová osa (primární zdroje, blog.google)

| Kdy | Co Google oznámil |
|---|---|
| **22. 1. 2026** | spuštění Personal Intelligence v AI Mode: „opt-in to securely connect Gmail and Google Photos to AI Mode“. Jen pro předplatitele **Google AI Pro / Ultra**, **v angličtině v USA**, jen osobní účty — „not for Workspace business, enterprise or education users“ |
| **17. 3. 2026** | rozšíření v rámci USA na uživatele **bez předplatného**, i do aplikace Gemini a Gemini v Chromu |
| **19. 5. 2026 (I/O)** | „expanding Personal Intelligence in AI Mode to more people in **nearly 200 countries and territories across 98 languages — no subscription required**“ a „You can securely connect apps like Gmail and Google Photos, **and soon Google Calendar**“ |

### Co říká nápověda (support.google.com/websearch/answer/16859283, čteno 18. 8. 2026, EN i CS verze)

⛔ **Nejdůležitější zjištění celého researche — souhlas není omezený na AI Mode:**

> „Connecting your Google content apps means that **all Search services** will be permitted to access Workspace (currently Gmail and Google Calendar) and Google Photos. Search services include Google Search (incl. AI Mode, Discover), Maps (incl. Ask Maps), Shopping, Flights, Hotel, Translate, and News.“

Česká verze totéž: „Vyhledávání, Mapy, Nákupy, Letenky, Hotely, Překladač a Zprávy.“

Další doložené:
- **věk 18+** („This feature is available to users 18 or older“)
- **Kalendář jen v USA**: „Connecting to Google Calendar is only available in the US in English.“ (CS: „Připojení ke Kalendáři Google je k dispozici pouze v USA v angličtině.“)
- vypnout jde kdykoli — přes nastavení personalizovaných doporučení
- **co se z propojených dat bere**: „summaries, excerpts, generated media, and inferences from your relevant media, emails, and files may be used to help us answer your prompts“

### Dvě věty o trénování, které je potřeba číst vedle sebe

| Zdroj | Věta |
|---|---|
| blog.google, 22. 1. 2026 | „Gemini and AI Mode **don't train directly on** your Gmail inbox or Google Photos library.“ |
| nápověda, čteno 18. 8. 2026 (EN i CS) | „If you choose to connect your content apps to Search services, **we may use that data to improve Google services for everyone, including by training generative AI models**.“ |

⛔ Nejsou to nutně protimluvy — klíčové je slovo *directly* a rozdíl mezi surovou schránkou a „summaries, excerpts, inferences“. Ale kdo čte jen tiskovou zprávu, odejde s jiným dojmem než ten, kdo si otevře nápovědu. **V článku obě věty uvést doslova a nechat čtenáře, ať si je porovná; netvrdit, že Google lže.**

## Co Google NEuvádí (a co tedy nesmím tvrdit)

- Kolik lidí si aplikace propojilo — žádné číslo, ani řádově.
- Jestli a jak se propojením mění **výběr webových zdrojů** v odpovědi. Příklady v oznámení ukazují propojená data jako **kontext o uživateli** (rezervace hotelu v Gmailu → návrh programu), ne jako nový zdroj odpovědi. ⛔ To je moje čtení příkladů, ne Googlova věta.
- Jestli se tím mění počet nebo umístění odkazů na weby. O odkazech se v souvislosti s Personal Intelligence nepíše vůbec.
- Jakýkoli dopad na návštěvnost webů. Nula dat.
- Jestli je Personal Intelligence živá v češtině — nápověda existuje česky a Česko je mezi podporovanými zeměmi, ale **vlastní test jsem nedělal**.

## Co z toho plyne pro weby (a co ne)

Poctivá odpověď: **přímo pro obsah webu z toho neplyne žádný nový úkol.** Propojená data popisuje Google jako kontext o uživateli, ne jako náhradu zdrojů. Co z toho plyne nepřímo:

1. Odpovědi se člověk od člověka liší víc → vlastní test na jednom účtu je slabší důkaz (detail nechávám článku o personalizaci).
2. Kdo testuje na **firemním** Google účtu, nemusí vidět totéž co zákazník na osobním — Workspace účty byly z Personal Intelligence v lednu výslovně vyloučené.
3. Souhlas je širší, než se čeká: týká se i Map, Nákupů, Letenek, Hotelů a Zpráv.
