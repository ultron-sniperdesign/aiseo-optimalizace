# Vypořádání auditů — Rebranding a AI

## Audit faktů

| # | Stav | Řešení |
|---:|---|---|
| 1 | Opraveno | Rozdělen význam `alternateName`: u `Organization` běžný jiný název organizace, u `WebSite` náhradní kandidát pro zobrazený název webu. Upraveno v FAQ i těle. |
| 2 | Opraveno | Doplněna procházetelná kořenová homepage, shoda duplicitních variant a omezení na jeden název domény/subdomény bez podpory podadresářů. |
| 3 | Opraveno | Nahrazeno vágní „zachování podstaty“ přesnými kritérii názvů/služeb a kategorie, doplněna výjimka více poboček i povinný postup u nové firmy. |
| 4 | Opraveno | Absolutní „každá URL potřebuje protějšek“ změněno na určení správného osudu; relevantní cíle dostanou přesměrování, obsah bez náhrady 404/410. |
| 5 | Opraveno | Doplněno pořadí a podmínky nástroje Změna adresy, vlastnictví služeb, všechny ověřené varianty a nepodporované typy přesunu. |
| 6 | Opraveno | Tvrzení zúženo na ChatGPT; u jiných služeb se význam odkazů liší a zobrazený odkaz je pouze kandidát k prověření. |

Všech šest nálezů bylo zásadních a bylo odesláno původnímu auditorovi faktů k jednomu doověření C5b.

## Jazykový audit

Všech 20 nálezů přijato a opraveno:

1. `Projdi` → `Projděte`.
2. Opravena shoda a vazba u „strukturovaná data jsou nejdůležitějším způsobem“.
3. Původce záměny změněn z testů na AI nástroje.
4. Meta description konkretizuje projevení nového názvu.
5. „Cizí zmínky“ nahrazeny zmínkami na jiných webech.
6. Kostrbatá společná lhůta nahrazena odděleným tempem služeb.
7. Obecné „samostatné změny“ nahrazeny konkrétními místy.
8. H2 uvádí vlastní web, profily a jiné weby.
9. „Nové projití“ změněno na nové navštívení a zpracování stránky Googlem; FAQ sjednoceno.
10. U přechodové věty je jasně pojmenován starý název.
11. H2 ke změně domény používá „stěhujete i web“.
12. Nejasné „takové cíle“ nahrazeno celou situací přesměrování na homepage.
13. Google při volbě názvu „vychází hlavně z úvodní stránky“.
14. U menší změny je podmětem zachování profilu.
15. Kritéria jsou připsána Googlu a po faktickém auditu rozepsána.
16. „Přepnutí AI“ a „společná fronta“ nahrazeny převzetím názvu jednotlivými službami.
17. „Naučené znalosti“ nahrazeny informacemi získanými při trénování; věcně dále zpřesněno faktickým auditem.
18. „Samotný jeden výstup“ změněn na „z jediné odpovědi“.
19. „Postupem z článku“ změněno na „podle článku“.
20. CTA jasně říká, kam prvky umístit, a používá přirozené „nezaručí“.

## C5b — doověření zásadních oprav

Původní auditor faktů ověřil všech šest opravených pasáží proti primárním zdrojům. Všech šest oprav obstálo; další kolo nebylo potřeba. Podrobný dodatek je v `audit-fakta.md`.

## C5 — slepá fáze závěrečného auditora

1. **Opraveno (BLOCKER):** FAQ k Firemnímu profilu nyní samostatně uvádí zvláštní způsobilost firmy s více pobočkami, větev „ani jedna podmínka“ a doporučení podpory při nejasnosti.
2. **Opraveno (BLOCKER):** pokyn Změna adresy vyžaduje ověřit všechny varianty starého i nového webu a podat změnu pro každou variantu staré domény.
3. **Opraveno (WARNING):** doplněna rada oddělit změnu domény od změny CMS, redesignu a plošné změny URL.
4. **Opraveno (WARNING):** `seoTitle` sjednocen s přesným 50znakovým titulkem.
5. **Opraveno (WARNING):** přidány přímé odkazy na pravidla a editaci Firemního profilu.
6. **Opraveno (WARNING):** tvrzení o režimech ChatGPT má přímý odkaz na dokumentaci OpenAI.
7. **Opraveno (TIP):** obecné výskyty `homepage` změněny na „úvodní stránka“; kanonický název typu stránky v CTA zůstal.

## C5 — cílené dokončení

1. **Opraveno (BLOCKER):** FAQ i hlavní text nyní výslovně uvádějí doporučení Googlu držet `Organization.name` a `Organization.alternateName` shodné s hodnotami použitými pro název webu. Starý název text nedoporučuje ponechat jen v `Organization.alternateName`; historii vysvětluje viditelná přechodová věta.
2. **Opraveno (WARNING):** název kroku zní „Opravte důležité zmínky na jiných webech“.
3. **Ověřeno (TIP):** obecné výskyty `homepage` byly nahrazeny už v předchozí opravě. Zůstává pouze kanonické označení šablony produktu v CTA, které auditor výslovně připustil.
