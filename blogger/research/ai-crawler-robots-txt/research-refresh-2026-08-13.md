# Refresh research — ai-crawler-robots-txt (13. 8. 2026)

Typ: **refresh** (kadence 2:1 — po `kodovani-stranky-a-stroje` a `sest-kontrol-pred-zaverem`).

## Vada, kvůli které jsem hub otevřel

Tenhle článek je **hub** o AI robotech a robots.txt (publikován 24. 5. 2026). Za srpen k němu vzniklo **sedm navazujících článků** s vlastními měřeními — a hub na ně neměl **ani jeden odkaz**. Klasické selhání hub-and-spoke: rozcestník, který nikam nevede.

Ověřeno strojově před zásahem: `co-vypne-ktery-opt-out` 0, `gptbot-bez-oai-searchbot` 0, `roboti-vyvolani-uzivatelem` 0, `kdo-publikuje-ip-rozsahy` 0, `overovani-ai-robotu` 0, `seznam-extended-opt-out` 0, `bytespider-ceska-media` 0.

## Co refresh opravil

1. **Tabulka robotů byla neúplná.** Chyběl `OAI-AdsBot` (dokumentace OpenAI popisuje čtyři user-agenty) a **`Seznam-Extended`** — český řídicí token, o kterém mám samostatný článek, v hubu nebyl vůbec. Po doplnění 15 řádků; `stats` uváděly 13 a auditor to zachytil.
2. **Sekundární čísla nahrazena vlastními.** Místo „u některých webů tvoří tři roboti OpenAI polovinu až tři pětiny provozu" (bez metodiky) je tam měření 80 domén: 20 z 80 má aspoň jedno pravidlo, GPTBot 12, z těch dvanácti má OAI-SearchBota jen čtyři.
3. **„robots.txt je žádost, ne zámek" vede doloženou kategorií.** Místo obecného „někteří roboti pravidla ignorují" je první bod ten, kde to říká sama dokumentace: fetchery vyvolané uživatelem.
4. **Rozpor frontmatteru s tělem.** `answer` i FAQ radily „v robots.txt povolte ChatGPT-User", což nová sekce popírá. Přeformulováno na vyhledávací roboty + výhrada u fetcherů.
5. **Rozcestník „Kam dál podle toho, co řešíte"** před komerčním závěrem — hub končil obchodní nabídkou, ale neuzavíral mapu tématu.
6. Krátký rozhodovací box hned pod perex (chci citace / nechci trénink / chci opravdu zastavit).

## Co refresh NEDĚLÁ

- **Nezkracuje tabulku 15 robotů**, jak navrhoval auditor 2. Je to referenční hodnota hubu a zrovna jsem do ní dva řádky doplnil.
- **Nepřesouvá sekci o `llms.txt`.** Je to sice odbočka, ale v tomhle kontextu čekaná otázka; doplnil jsem k ní vlastní čísla a metodickou větu.

## Zdroje

- vlastní měření 80 domén, 12. 8. 2026 → [gptbot-bez-oai-searchbot](/blog/gptbot-bez-oai-searchbot/)
- měření llms.txt, 11. 8. 2026 → [llms-txt-falesne-pozitivni](/blog/llms-txt-falesne-pozitivni/)
- dokumentace OpenAI, Google a Perplexity → [roboti-vyvolani-uzivatelem](/blog/roboti-vyvolani-uzivatelem/)
- partnerská nápověda Seznamu → [seznam-extended-opt-out](/blog/seznam-extended-opt-out/)
