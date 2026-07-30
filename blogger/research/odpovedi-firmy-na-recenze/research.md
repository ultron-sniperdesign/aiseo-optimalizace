# Research — odpovědi firmy na recenze

**Řádek plánu:** `odpovedi firmy na recenze`
**Datum:** 2026-07-30 · **Kategorie:** tutorial
**Tagy:** duveryhodnost, obsah

---

## 1. Kolizní kontrola

| Kandidát | Co v něm je | Verdikt |
|---|---|---|
| `ai-souhrny-recenzi` | **Neexistuje** — jen řádek v plánu (nový, skupina D). Bude o tom, jak AI recenze **shrnuje**. | Nekoliduje, ale hraničí. Tenhle článek = **odpověď firmy** jako vlastní text. Ten druhý = souhrny cizích textů. |
| `recenze-a-hodnoceni-pro-ai` | **Existuje** (18. 7. 2026, tutorial, eshopy+duveryhodnost) — sbírání recenzí, `AggregateRating`, recenze jako text, který nenapsal prodejce. | **Nekanibalizovat.** Tam vstup recenzí do e-shopu, tady výstup firmy do vlákna. Prolinkovat. |
| `recenze-srovnavace-pro-ai` | **Existuje** (19. 7. 2026, analysis) — recenzní platformy jako citované domény, data SE Ranking. | Sousedí. Tam volba platformy, tady text v ní. Prolinkovat. |
| `e-e-a-t-pro-ai` | Důvěryhodnost obecně, autorská entita | Sousedí, neduplikuje. Prolinkovat. |
| `originalni-data-pro-ai` | Vlastní data jako citovatelný obsah | Sousedí — odpověď na recenzi je taky text, který nikdo jiný nenapíše. Prolinkovat. |
| `firemni-profil-google-pro-ai` | Neexistuje. | — |

**Verdikt:** téma volné. Sousedí se dvěma existujícími články o recenzích, ale
dělicí linie je čistá: ty dva řeší **cizí text** (jak ho sbírat, kde ho mít),
tenhle **vlastní text** (co do vlákna napíše firma).

> Poznámka k opravě: v první verzi tohohle záznamu stálo, že
> `recenze-a-hodnoceni-pro-ai` neexistuje — spletl jsem si pořadí slov ve slugu.
> Článek existuje od 18. 7. 2026 a draft na něj prolinkovává, takže kontrola
> se věcně stala; chybný byl jen tenhle zápis. Opraveno 30. 7. 2026.

---

## 2. Věcné jádro

Recenze na Googlu, Heurece, Zboží.cz nebo Seznamu firma nenapíše ani nesmaže.
**Odpověď je jediný text v tom vlákně, jehož autorem je firma** — a jediné místo,
kde může doplnit kontext, který v recenzi chybí.

Proč to má vazbu na AI viditelnost:

- Odpovědi jsou součástí veřejně dostupného textu profilu, který AI nástroje čtou
  spolu s recenzemi. Firma tam přidává **vlastní formulaci** k cizímu tvrzení.
- Konkrétní odpověď („čekání u výdeje bylo delší, upravili jsme rozpis směn")
  nese informaci. Fráze („děkujeme za zpětnou vazbu, těšíme se na další návštěvu")
  nenese nic — je zaměnitelná napříč všemi firmami a nemá co citovat.
- Nikde není doloženo, že odpovědi zvyšují pravděpodobnost citace. Článek proto
  netvrdí kauzalitu, jen popisuje, že jde o **jediný text v profilu, který ovládáte**.

### Co článek NEtvrdí

Vědomě chybí: čísla o vlivu odpovědí na hodnocení, konverze nebo citovanost.
Veřejně dostupná data k tomu jsou marketingové materiály platforem a průzkumy
sponzorované nástroji na reputaci. Do článku nešla.

---

## 3. Struktura

5 šablon odpovědi podle situace:

1. **Oprávněná negativní** — připustit fakt, uvést změnu, nabídnout soukromý kanál
2. **Neúplná nebo nepřiřaditelná** — neodmítat, pozvat na doplnění detailů
3. **Podezření na fiktivní recenzi** — nikdy neobviňovat veřejně, jen věcně
4. **Pozitivní** — doplnit konkrétní detail, ne generické „děkujeme"
5. **Opakovaná stížnost na totéž** — přiznat vzorec, uvést systémové opatření

Plus checklist situací s vyššími nároky (mlčenlivost, neověřené interní věci,
kompenzace, osobní údaje do AI nástroje).

---

## 4. Co určilo výslednou podobu — verdikty auditů

**První audit** našel dvě právně rizikové rady, které bych jinak vydal:

| Výtka | Oprava |
|---|---|
| šablona doporučovala uvést **jméno zaměstnance** ve veřejné odpovědi | osobní údaj třetí osoby → odstraněno, i varianta „jen křestní jméno" |
| „když je to systémová věc, přiznejte ji" bez pojistky | doplněn checklist regulovaných oborů + podmínka mít věc interně ověřenou před veřejným přiznáním |
| chybí varování před vkládáním údajů zákazníka do AI nástroje | doplněno do checklistu |

**Druhý audit** doladil formulace, které nenápadně předjímaly fakta:

- „**Tuto návštěvu** se nám nepodařilo přiřadit" → presupozice, že návštěva byla.
  Přeformulováno na „popsanou situaci".
- „Popsaný postup **neodpovídá tomu, jak u nás pracujeme**" → veřejné popření
  bez opory. Přeformulováno na „takto náš standardní postup nastavený není;
  pokud k tomu přesto došlo, chceme o tom vědět".
- answer a description držely tvrdší tvrzení než tělo → sjednoceno.

Výsledná nejopatrnější šablona:

> Popsanou situaci se nám podle dostupných záznamů nepodařilo přiřadit ke konkrétní
> zakázce. Pokud se to týkalo naší provozovny, napište nám prosím na [e-mail]
> s datem a podrobnostmi — prověříme to a ozveme se. Takto náš standardní postup
> nastavený není; pokud k tomu přesto došlo, chceme o tom vědět.

---

## 5. Zdroje

- Nápověda Google Business Profile — pravidla pro odpovědi na recenze
- Nápověda Heureka / Zboží.cz — reakce prodejce na hodnocení
- Vlastní analýza obsahu odpovědí ve veřejných CZ profilech (vzorek, ne měření)
