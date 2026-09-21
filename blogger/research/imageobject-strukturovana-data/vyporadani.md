# Vypořádání auditů — imageobject-strukturovana-data

## Kolo 1 — osa faktů (`audit1-result.md`, 2 × BLOCKER, 5 × WARNING, 2 × TIP)

### Zapracováno

- **[BLOCKER] Chybějící podmínky u tvrzení o funkcích s AI.** Doplněno — ale **ne všude ve stejné
  úplnosti** (tohle znění je opravené po výtce 2. auditora, původní tvrdilo „na všech čtyřech
  místech“ víc, než v textu bylo): `answer` a úvodní odstavec nesou zkrácenou podmínku „nevyžaduje
  nic nad běžnou způsobilost ve Vyhledávání“, protože `answer` má strop 60 slov; **úplný výčet**
  (indexovaná stránka, způsobilost k úryvku, direktivy `nosnippet`, `data-nosnippet`, `max-snippet`,
  `noindex`) je v sekci o funkcích s AI, v sekci o hranicích a ve FAQ.
- **[BLOCKER] Minimum 50 000 px podané jako obecné pravidlo.** Zúženo na `Article`, kde to
  dokumentace uvádí; u jiných typů (`Product`) článek posílá čtenáře do dokumentace toho
  rozšířeného výsledku a výslovně říká, že obecné pravidlo to není.
- **[WARNING] Obsah obrázku nepoznává stroj jen z dopsaného textu.** Auditor měl pravdu a jeho
  tvrzení se dalo doložit: Google Images best practices píše *„Google uses alt text along with
  computer vision algorithms and the contents of the page to understand the subject matter of the
  image.“* Citace je teď v úvodu článku i v `research.md`; formulace „stroj vidí jen soubor a co
  jste dopsali“ je pryč. Rozdíl, na kterém článek stojí, tím zesílil: `ImageObject` v tom výčtu
  vůbec není.
- **[WARNING] Tvrzení o validátoru nebylo v podkladech.** Kontrola se skutečně provedla — doplněna
  do `research.md` jako vlastní kontrola nástrojem (21. 9. 2026, typ `ImageObject`, 0 chyb)
  a v článku je uvedená s datem.
- **[WARNING] Chybějící verze knihovny sharp.** Doplněno `sharp 0.34.5` a „v našem testu“.
- **[WARNING] „Metadata se běžně nepřenesou“ zobecňovalo.** Přepsáno na „mohou ztratit“ + věta,
  která rozsah přiznává: netvrdíme to o každém redakčním systému a nastavení exportu, tvrdíme,
  že se to stává a bez kontroly se to nepozná. Stejně upravena i karta chyby č. 03.
- **[WARNING] Digital Source Type.** Přeformulováno na „může nést klasifikaci způsobu vzniku“.
- **[TIP] „Strukturovaná data přežijí spolehlivěji“.** Nahrazeno technickým důvodem: nejsou
  závislá na tom, jestli zmenšování a export zachovají metadata uvnitř souboru.

### Nezapracováno

Žádný nález nebyl odmítnut. Jeden nález ([WARNING] o počítačovém vidění) přišel bez odkazu na
zdroj, takže se podle osy faktů nesměl zapracovat naslepo — ověřil jsem ho v dokumentaci Google
Obrázků, potvrdil se a teprve pak se zapracoval s citací.

### Vlastní nález nad rámec auditu

Nadpis „Pět vlastností“ nad tabulkou, která má šest řádků. Opraveno na „Šest vlastností“ ještě
před odesláním auditu.

## Kolo 2 — osa jazyka a struktury (`audit2-result.md`, 2 × BLOCKER, 5 × WARNING, 1 × TIP)

Osa zabrala přesně tam, kde měla: **oba blockery jsou nedotažené opravy z 1. kola**, ne nové téma.

### Zapracováno

- **[BLOCKER] Vypořádání z 1. kola tvrdilo víc, než bylo v textu.** Auditor měl pravdu a je to
  nález na mě, ne na článek: napsal jsem „doplněno na všech čtyřech místech“, přitom úplná podmínka
  byla jen v jednom odstavci. Doplněno do FAQ i do sekce o hranicích, a výše uvedený zápis
  vypořádání je přepsaný tak, aby odpovídal skutečnosti.
- **[BLOCKER] Zmírnění zobecnění o IPTC nedošlo až do nadpisu.** H2 dál tvrdil kategoricky
  „a cestou na web mizí“. Přepsáno na „**při exportu se mohou ztratit**“ — tedy stejná míra jistoty
  jako v textu sekce. Poučení je učebnicové k pravidlu Z17: grep při opravě musí projít i nadpisy.
- **[WARNING] Kvalita H2.** Čtyři nadpisy nesly v `hl` obecné slovo („hranice“, „odnést“) nebo měly
  v `<strong>` druhý pojem místo pointy. Přepsány tak, aby `hl` nesl entitu (`ImageObject`,
  `Alt text`, `IPTC metadata`) a tučně stála pointa.
- **[WARNING] Sebestačnost odpovědí ve FAQ.** Čtyři odpovědi začínaly zájmenem nebo negací
  („Doložit se to nedá“, „Není to zaručené“). Přepsány tak, aby první věta nesla předmět.
- **[WARNING] CTA bez rozlišení DPH.** Doplněno „3 600 Kč bez DPH“ a „PDF návod za 1 490 Kč včetně
  DPH“ — kanonické znění podle `audit.ts` a `pack.ts`.
- **[WARNING] Anglicismus „crawlovatelné“ a obecné „robot“.** Nahrazeno „dostupné pro procházení
  a indexaci“ a „vyhledávací robot“ na čtyřech místech (Stepper, karta chyby, seznam Dělejte,
  odstavec o technickém minimu).

### Nezapracováno

Žádný nález nebyl odmítnut. U `answer` jsem **nepřijal** doslovný návrh znění (vešel by se, ale
zněl by jako výčet direktiv v definici) — podmínku tam nese zkrácená formulace a úplný výčet je
v těle článku a ve FAQ; je to rozhodnutí o rozsahu, ne odmítnutí nálezu.

## Jazykový průchod

- **Mechanický checker:** 2 nálezy → **0**. Oba na množném čísle „v Přehledech od AI“ v mé vlastní
  větě (ne v citaci), opraveno na jednotné „v Přehledu od AI“ — korpus drží jednotné číslo, protože
  tak se to hledá. **Výjimka na úrovni souboru se tady nepoužila a použít nesměla**: článek ten tvar
  necituje, jen ho použil špatně.
- **LLM průchod (gpt-5.4, článek + celý slovník):** 7 nálezů, všech 7 zapracováno — „Google k němu
  pracuje s víc signály“, „platí to nad rámec“, „stránka k vyřízení licence“ (sjednoceno na
  „stránka pro vyřízení licence“ ve tabulce, v komponentě i ve FAQ), slovosled „nepřežila metadata
  ani jedna dvojice“, „nechce nic navíc nad“ → „nevyžaduje nic nad“ (2 místa), „čtenému obsahu
  přičítaly“ → „k ImageObject přihlížely“, „z čeho má systém co citovat“ → „z čeho může systém
  citovat“.
- **Nové pravidlo do slovníku: žádné.** Všech 7 nálezů závisí na významu celé věty — neprojdou
  testem „poznám vadu bez toho, abych rozuměl zbytku věty?“. Zůstávají jen v auditním logu.
  Slovník zůstává na **v72**.
