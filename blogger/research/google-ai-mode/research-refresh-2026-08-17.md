# Refresh research — google-ai-mode (17. 8. 2026)

Typ: **refresh**, kadence. Priorita AI Mode. Článek publikován 25. 5. 2026, naposled aktualizován 18. 7. 2026.

## Dvě vady, kvůli kterým to beru

**1. Hub bez odkazů na vlastní cluster.** Článek nese v názvu „Google AI Mode" a měl by být vstupní bod. Ze **devíti** článků clusteru na něj odkazuje jen na dva (`ai-mode-vs-ai-overviews`, `jak-se-zobrazit-v-ai-mode`). Chybí odkaz na:

| Článek | Co řeší |
|---|---|
| `ai-mode-cesky` | dostupnost a jak ho otevřít |
| `ai-mode-jako-vychozi-rezim` | co Google označil za výchozí |
| `kdyz-si-ai-mode-neni-jisty` | kdy místo odpovědi přijdou odkazy |
| `delsi-dotazy-v-ai-mode` | délka dotazů a co z ní plyne pro obsah |
| `miliarda-uzivatelu-ai-mode` | čísla o uživatelích |
| `agentni-rezervace-v-ai-mode` | rezervace u služeb |
| `mereni-ai-mode-limity` | proč se to nedá změřit |

Stejná vada jako u hubu `ai-crawler-robots-txt` (opraveno 13. 8. 2026).

**2. Dostupnost v Česku opřená o „dostupné informace".** Článek na třech místech (stats, FAQ, tělo) tvrdí, že se AI Mode „podle dostupných informací zpřístupňuje od podzimu 2025". To je sekundární formulace. Mezitím mám **primární zdroj**: nápověda Googlu (čteno 13. 8. a znovu 17. 8. 2026) uvádí **Česko v seznamu podporovaných zemí a češtinu v seznamu jazyků**, mluví o 190+ zemích a 80+ jazycích.

⛔ Nenahrazovat jedno tvrzení druhým bez data — obojí uvést s datem odečtu.

## Co ještě doplnit

- **Práh jistoty**: nápověda uvádí, že bez dost vysoké jistoty přijde místo odpovědi sada odkazů. Do článku o přípravě obsahu to patří jako druhá možná podoba výsledku (viz `kdyz-si-ai-mode-neni-jisty`).
- **Model**: článek správně píše „rodina Gemini". Výchozí model se ale od prosince 2025 měnil dvakrát — stojí za odkaz na `ai-mode-jako-vychozi-rezim`, ne za výčet verzí, který zastará.

## Co NEMĚNIT

- ⛔ Postup krok za krokem (HowTo) — funguje a auditovaný byl.
- ⛔ Tvrzení o query fan-out — má vlastní článek a je konzistentní.
- ⛔ Prodejní blok na konci.

## Hygiena REFRESH_QUEUE

Tři starší položky jsou už hotové (podle `updated` v článcích), ale nebyly odškrtnuté: `local-seo-cesko-2026` (12. 8.), `javascript-a-ai-roboti` (13. 8.), `ai-crawler-robots-txt` (13. 8.). Doplnit HOTOVO.
