# VERDIKT: OBĚ OPRAVY OBSTOJÍ

Cílené doověření B1 a B2 k 26. 11. 2026. Porovnání `clanek-po-c5b.mdx` s `clanek-po-c5.mdx` potvrzuje pouze dvě uvedené změny; ostatní části článku nebyly znovu auditovány. Web nebyl použit.

| Nález | Výsledek | Důvod se zdrojem |
|---|---|---|
| **B1 — Předání klíče IndexNow v požadavku** | **OBSTOJÍ** | `clanek-po-c5b.mdx:152` nyní výslovně požaduje `key` u každého požadavku, správně rozlišuje umístění u GET a POST a požaduje shodu s klíčem v souboru na webu. To odpovídá `zdroje/seznam-seznambot_protokol-indexnow.txt:7,10,23–27,37–39,69–82,92–95`; podmínka je zachycena také v `research-po-c5b.md:40`. |
| **B2 — Podmínky rozšířených výsledků ze strukturovaných dat** | **OBSTOJÍ** | `clanek-po-c5b.mdx:56` omezuje možnost rozšířeného výsledku na podporované typy, uvádí povinné vlastnosti a pravidla Googlu a výslovně odmítá záruku zobrazení pouhým zápisem podle schema.org. Znění odpovídá `zdroje/google-structured-data.txt:345–353,474–479,487–502,525–535` a `zdroje/seznam-strukturovana-data.txt:38–60`; podmínky jsou doplněny v `research-po-c5b.md:45`. |

**Nové [BLOCKER] v posuzovaných změnách: žádné.** Oba blokující body z `c5b-vysledek.md` lze uzavřít.
