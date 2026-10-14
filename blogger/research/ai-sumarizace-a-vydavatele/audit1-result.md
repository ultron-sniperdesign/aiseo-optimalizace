## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek je fakticky velmi dobře připravený a většina klíčových tvrzení sedí proti briefu: smluvní podmínky Newsfeedu, UTM hodnoty, Pew 8/15/1 %, vlastní měření 33 webů i opatrný výklad grafu Seznamu jsou převážně podané správně. Před publikací ale opravte několik míst, kde je tvrzení silnější než doklad nebo chybí podmínka platnosti.

---

## Nálezy

### [BLOCKER] Frontmatter `answer` zjednodušuje provizi na 30 % a vynechává podmínky nároku

**Problémové místo:**

> `Partnerům programu Newsfeed za užití obsahu od 1. 5. 2026 náleží provize: 30 % z výnosu reklamy Seznamu, kterou čtenář uvidí na jejich webu po prokliku.`

**Problém:**

Tvrzení je v krátké odpovědi příliš zjednodušené. Podle smluvních podmínek platí:

- standardní provize je 30 %,
- v Modelu vyšší provize je 50 %,
- nárok se váže na partnera Newsfeedu s přijatými podmínkami,
- při užití obsahu má být zobrazen odkaz na konkrétní obsah,
- provize je z výnosu reklamy Seznamu po prokliku / případně při Článku na Seznamu.

V těle článku se 50 % objevuje, ale `answer` je samostatně citovatelná část a v této podobě je pro část partnerů nepravdivá.

**Zdroj pro kontrolu:**  
Smluvní podmínky služby Seznam Newsfeed, účinné od 1. 5. 2026, čl. I, II, III a VIII:  
`partner.seznam.cz/napoveda/newsfeed-a-clanky-na-seznamu/smluvni-podminky-sluzeb-seznam-newsfeed-a-clanky-na-seznamu/`

**Návrh opravy:**

Upravte větu například takto:

> Partnerům Newsfeedu, kteří přijali podmínky účinné od 1. 5. 2026, vzniká při užití obsahu se zobrazeným odkazem nárok na provizi: standardně 30 %, v Modelu vyšší provize 50 %, z výnosu reklamy Seznamu na webu po prokliku. Jinou odměnu za samotné shrnutí podmínky neuvádějí.

Stejnou podmínku doporučuji doplnit i do první tučně zvýrazněné věty v těle článku, kde je formulace „Za užití jim náleží provize“ také zkratkovitá.

---

### [BLOCKER] Checklist tvrdí, že odhlášením vydavatel přijde o všechny AI návštěvy — pro `AI`/`MachineLearning` to není doložené

**Problémové místo:**

```md
{ title: "Změřte, co vám Seznam AI přivádí", desc: "Návštěvy s utm_campaign asistent, aifunkce a trending_topics jsou to, o co odhlášením přijdete." },
```

**Problém:**

Toto je silnější tvrzení, než podklady unesou.

Doložené je:

- u partnerů Newsfeedu při odhlášení přes `Seznam-Extended` partnerská nápověda uvádí, že Seznam nebude uživatele přivádět ani s obsahem v rámci Seznam AI pracovat,
- nápověda Vyhledávání u `Seznam-Extended`, `AI` a `MachineLearning` říká, že web nepoužije jako zdroj AI odpovědí,
- ale brief výslovně uvádí jako **nelze ověřit**, zda Seznam u webů s tokenem `MachineLearning` uplatní i partnerský důsledek „přestane přivádět uživatele“.

Tedy: pro `Seznam-Extended` u partnera je tvrzení obhajitelné, pro `AI`/`MachineLearning` je nutné říct jen to, že web nemá být použit jako zdroj AI odpovědí. Nelze obecně tvrdit, že vydavatel „přijde“ o všechny návštěvy s těmito kampaněmi.

**Zdroj pro kontrolu:**

- Partnerská nápověda Seznam AI: `partner.seznam.cz/napoveda/dalsi-sluzby/seznam-ai/`
- Nápověda Vyhledávání: `o-seznam.cz/napoveda/vyhledavani/seznambot/zakaz-tvorby-ai-odpovedi-z-vaseho-webu/`
- Brief, část „Nelze ověřit“, bod (e)

**Návrh opravy:**

Přeformulujte popis v checklistu například takto:

> Návštěvy s `utm_campaign=asistent`, `aifunkce` a `trending_topics` ukazují, co vám Seznam AI aktuálně přivádí. U `Seznam-Extended` partnerská nápověda uvádí, že Seznam po odhlášení uživatele z AI ploch nepřivede; u `AI` a `MachineLearning` je doložené hlavně vyřazení webu jako zdroje AI odpovědí.

---

### [WARNING] Formulace o Asistentovi a „názvu Seznam AI“ je silnější než doklad

**Problémové místo:**

> `Seznam Asistent (v nápovědě Vyhledávání už pod názvem Seznam AI)`

**Problém:**

Podklady dokládají, že partnerská nápověda jmenuje **Seznam Asistent** a nápověda Vyhledávání uvádí možnost pokračovat v **Seznam AI**. Nedokládají ale jednoznačně, že Asistent byl přejmenován nebo že jde „už“ o tentýž název ve smyslu oficiální změny názvosloví.

**Návrh opravy:**

Bezpečnější formulace:

> Partnerská nápověda mluví o Seznam Asistentovi; nápověda Vyhledávání u souhrnů uvádí možnost pokračovat v Seznam AI.

---

### [WARNING] „Každé říká něco jiného“ u odhlášení zní jako rozpor, ale jde hlavně o jiný rozsah dokumentace

**Problémové místo:**

> `Seznam popisuje odhlášení na dvou místech a každé říká něco jiného:`

**Problém:**

Podklady ukazují spíš rozdíl v rozsahu a kontextu:

- partnerská nápověda a podmínky Newsfeedu řeší partnera a uvádějí `Seznam-Extended`,
- nápověda Vyhledávání řeší obecný zákaz AI odpovědí a uvádí `Seznam-Extended`, `AI`, `MachineLearning` a `nosnippet`.

Skutečný rozpor / rozdíl ve výkladu je hlavně u `MachineLearning`: SPIR ho chápe jako zákaz tréninku, Seznam ho bere i jako zákaz AI odpovědí.

**Návrh opravy:**

> Seznam popisuje odhlášení na dvou místech, ale v jiném rozsahu: partnerská dokumentace uvádí `Seznam-Extended`, zatímco nápověda Vyhledávání přidává i `AI`, `MachineLearning` a `nosnippet`.

---

### [WARNING] U standardu SPIR chybí pravidlo přednosti `MachineLearning` před `AI`

**Problémové místo:**

> `Seznam-Extended | konkrétní user-agent, má přednost před AI i MachineLearning`

a následně:

> `Jestli Seznam respektuje přednost, kterou standard dává konkrétním user-agentům — třeba zákaz pro AI a povolení pro Seznam-Extended — nápověda neříká.`

**Problém:**

Článek správně uvádí přednost konkrétního user-agenta, ale při praktickém výkladu kombinací v robots.txt chybí ještě jedna podmínka ze standardu SPIR: `MachineLearning` má podle standardu přednost před `AI`.

Protože článek radí vydavatelům, jak se rozhodovat mezi tokeny, je vhodné pravidlo doplnit. Jinak může čtenář nabýt dojmu, že jediné pravidlo priority je „konkrétní user-agent před obecnými“.

**Zdroj pro kontrolu:**  
SPIR, *Možnosti obrany online vydavatelů proti vytěžování jejich obsahu umělou inteligencí*, 19. 3. 2026:  
`unievydavatelu.cz/file/162/pravidla-opt-out-2026.pdf`

**Návrh opravy:**

Doplňte větu:

> Standard SPIR navíc uvádí, že `MachineLearning` má přednost před obecnějším tokenem `AI`; Seznamova nápověda ale nepopisuje, jak vyhodnotí všechny možné kombinace těchto tokenů se `Seznam-Extended`.

---

### [WARNING] Měření robots.txt: řádek `Seznam-Extended | 1` může zavádět

**Problémové místo:**

| Pravidlo v robots.txt | Webů z 33 |
|---|---|
| `Seznam-Extended` | 1 |

**Problém:**

Podle briefu šlo o jeden web se `Seznam-Extended` **ve skupině s 34 dalšími roboty**, nikoli nutně o samostatné pravidlo jen pro `Seznam-Extended`. Ostatní řádky používají „jen MachineLearning“, „jen AI“, takže poslední řádek může čtenář chápat jako „jen Seznam-Extended“.

**Návrh opravy:**

Upravte řádek takto:

| Pravidlo v robots.txt | Webů z 33 |
|---|---|
| `Seznam-Extended` v hromadné skupině s dalšími roboty | 1 |

Nebo do textu pod tabulkou doplňte:

> Jeden web měl `Seznam-Extended` v hromadné skupině s dalšími roboty, ne jako samostatné pravidlo pouze pro Seznam.

---

### [WARNING] „V současné betě“ je časově relativní formulace

**Problémové místo:**

> `Podle partnerské nápovědy se Seznam v současné betě soustředí na zpravodajské dotazy.`

**Problém:**

Článek je datovaný 14. 10. 2026, takže fakticky je to zřejmě v pořádku. Pro aktuálnost je ale lepší nevázat tvrzení na neukotvené „současné“, protože článek může být čten později.

**Návrh opravy:**

> Podle partnerské nápovědy ve stavu k 14. 10. 2026 se beta Seznam AI soustředí na zpravodajské dotazy.

---

### [TIP] „Čtenář uvidí reklamu“ nahraďte přesnější formulací z podmínek

**Problémové místo:**

> `30 % z výnosu reklamy Seznamu, kterou čtenář uvidí na jejich webu po prokliku`

**Problém:**

Podmínky pracují s výnosem z reklamy Seznamu zobrazené na webu partnera po prokliku. „Čtenář uvidí“ je srozumitelné, ale může nechtěně evokovat viewability nebo skutečné zhlédnutí reklamy uživatelem, což podklady neřeší.

**Návrh opravy:**

> 30 % z výnosu reklamy Seznamu zobrazené na webu partnera po prokliku

---

## Co je fakticky v pořádku

- Výklad smluvních podmínek od 1. 5. 2026 je v jádru správný: nový je čl. VIII, věta o § 87b byla už v předchozí verzi.
- UTM hodnoty `asistent`, `aifunkce`, `trending_topics`, `utm_medium=seznam_distribuce` a staré tvary do 31. 5. 2026 sedí.
- Pew Research 2025 je podané opatrně: Google, USA, březen 2025, 900 dospělých, 8 % / 15 % / 1 % jako podíl návštěv.
- Výklad grafu Seznamu je opatrný a správně upozorňuje na absenci metodiky i na rozdíl mezi textovým tvrzením stránky a tím, jak jsou popisky +33 % / +85 % umístěné v grafu.
- Článek správně uvádí, že do rozhraní Seznam Partner ani Seznam AI autor neviděl; nenašel jsem nepodložené tvrzení typu „takto to uživatel uvidí v UI“.