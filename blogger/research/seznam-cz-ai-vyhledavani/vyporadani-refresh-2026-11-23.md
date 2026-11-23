# Vypořádání auditů — refresh `seznam-cz-ai-vyhledavani` (23. 11. 2026)

Audity přes nezávislé Claude subagenty (Codex v limitu do 24. 11. 2026 15:01, rozhodnutí Kamila 23. 11. 2026).
Kolo 1 = fakta a tvrzení (`auditor-osa-fakta.md`), kolo 2 = jazyk, struktura, SEO, čtenářská hodnota a kontrola tohoto
vypořádání. Výsledky: `audit1-refresh-2026-11-23.md`, `audit2-refresh-2026-11-23.md`. Research a tabulky:
`research-refresh-2026-11-23.md`.

## Kolo 1 — fakta

**Verdikt: OPRAVIT PŘED PUBLIKACÍ, 18 nálezů (4 BLOCKER, 9 WARNING, 5 TIP).** Než jsem nálezy zapracoval, doověřil
jsem, co auditor označil za nepřečtené: **export dat StatCounteru** (CSV za srpen–říjen 2026), **nápovědu Seznamu**
„Protokol IndexNow“ a „Optimalizace (SEO)“ a **nápovědu Skliku** (registrace, specifikace feedu); texty v
`research-refresh-2026-11-23.md` (Z16). Po každé opravě grep přes celý soubor včetně frontmatteru (Z17).

### Zapracováno

| # | Nález | Co se změnilo |
|---|---|---|
| 1 | zdroje Seznam AI bez rozporu mezi stránkami nápovědy | answer: modely „podle nápovědy“, zdroje a uživatelé „podle tiskové zprávy z 15. 10. 2026“ (57 slov); tučný úvod s výhradou „stránka nápovědy o betě je ještě vede mezi budoucími“; FAQ 3 podle návrhu (včetně Zboží.cz a TV programu na stránce o betě); krok 3 „(stránka o betě ho zatím vede mezi budoucími)“ |
| 2 | FAQ 2 — modely bez časové kotvy | FAQ 2 podle návrhu: oba názvy v nápovědě, Gemma „podle častých dotazů (bez data, stav k 23. 11. 2026)“, „ještě 14. 10. 2026 tam stály modely OpenAI přes Microsoft Azure“; neověřený titulek asistent.seznam.cz pryč |
| 3 | podíl bez měsíce a revize, „drží“ | H2 „13 % prokliků v říjnu 2026“ (na kotvu nic neodkazuje — ověřeno grepem v `src/`); úvod „v říjnu 2026 připadlo 13,11 % … (předběžná data, v září 14,96 %)“ |
| 4 | věty o rozhraní jen z nápovědy | reklama a nabídky „podle nápovědy“ (FAQ 6, odstavec o reklamě, checklist), „od května 2026 podle Seznamu“ (FAQ 3, odrážka e-shopu, krok 4), zdroje u odpovědi „podle nápovědy“ (krok 6, chyba 04); doplněno průběžné testování ploch a chybějící samostatná statistika |
| 5 | „hlavní zdroj“ nápověda neříká | úvod sekce SEO „Odpovědi Seznam AI podle nápovědy vznikají z dat Vyhledávání a dalších zdrojů Seznamu, jen výjimečně přímo z jazykového modelu … kroky níž mohou zvýšit šanci, nic nezaručují“; FAQ 5 totéž; odrážka „časté dotazy ho jmenují mezi zdroji jako první“ |
| 6 | „tiskové zprávy modely nemají“ × listopad 2025 | „které tiskové zprávy z května a října 2026 nemají“; „tisková zpráva z 25. 11. 2025“ (v textu i ve zdrojích) |
| 7 | časté dotazy si odporují v tom, kdo Seznam AI má | buňka tabulky „stačí být přihlášený; v odpovědi pro autory obsahu ale beta jen pro omezený počet uživatelů“; krok 6 „podle stránky o betě ho navíc zatím nemusí mít každý účet“ |
| 8 | rozpor se stránkou o betě i u Zboží.cz a TV programu | věta v sekci „Odkud čerpá“ a odrážka e-shopu podle návrhu; v tabulce sloupec stránky o betě doplněn o TV program |
| 9 | „do konce roku“ bez roku; „Co sledovat“ jen podle stránky o betě | všude „do konce roku 2026“; první věta „Co sledovat“ podle návrhu; ověření po 1. 1. 2027 je v plánu (řádek `seznam ai nove sluzby do konce roku`) |
| 10 | IndexNow bez podmínky | **místo dokumentace protokolu nápověda Seznamu**: krok 1 „podle nápovědy jde jen o informaci pro algoritmy, stažení ani indexace zaručené nejsou“; FAQ 5 „(indexaci nezaručuje)“; zdroj „Protokol IndexNow“ v nápovědě Vyhledávání |
| 11 | září 15,05 % ve stažené stránce není | **stažen export CSV**: září 14,96 % (finální), říjen 13,11 % / Google 80,07 % / Bing 5,19 % (souhrn na stránce měl 13,07 % a 5,23 % — data se mezitím revidovala); opraveno v FAQ 1, úvodu i sekci o podílu, doplněn srpen 15,79 % |
| 12 | titulek asistent.seznam.cz bez dokladu | vyřešeno v nálezu 2 (věta pryč, místo ní ověřené míchání názvů v nápovědě) |
| 13 | „stav k 23. 11.“ i pro nepřečtenou nápovědu Skliku | **nápověda Skliku přečtena 23. 11.** (registrace zdarma, kredit) — věta v úvodu platí; patička rozlišuje, co jsem četl 23. 11. a co 14. 10. (květnová zpráva, listopad 2025, blog 25. 6., podmínky Newsfeedu) |
| 14 | sumarizace | „z obsahu prvních pěti organických výsledků“, „z titulků a perexů zpravodajských článků“ |
| 15 | Seznam Webmaster v betě | krok 1 „kolik hlásí chybu; je v betě, takže propad v grafu ještě nemusí znamenat vypadnutí z indexu“ |
| 16 | „lidí“ → „uživatelů“ | FAQ 7 a odstavec o tiskové zprávě |
| 17 | Sreality „od října 2026“ | „podle tiskové zprávy z 15. 10. 2026 nově pracuje Seznam AI“ |
| 18 | citovat přímo Seznam u SEO | FAQ 5 a úvod sekce SEO podle nápovědy „Optimalizace (SEO)“ (psát pro uživatele, text ne do obrázků, nezahlcovat klíčovými slovy); zdroje „Optimalizace“ a „Protokol IndexNow“ |

### Nezapracováno + důvod

| # | Návrh | Proč ne |
|---|---|---|
| — | — | zapracováno vše; u nálezů 10 a 18 silnějším zdrojem (nápověda Seznamu místo indexnow.org) |

### Jazykový průchod

- `jazyk-check.py` 0 nálezů, `kontrola-komponent.py` 0 nálezů, build v pořádku, v HTML žádné syrové značky, 7 FAQ
  v JSON-LD, všechny interní odkazy i kotvy (`#co-statcounter-doopravdy-meri`, `#postup`, `#odhlaseni-ze-seznam-ai-…`)
  existují. Answer 57 slov, description 155 znaků.

### C5b — cílené ověření kola 1

`c5b-refresh-2026-11-23.md`: auditor kola 1 ověřil jedno kolo navíc všech 18 bodů včetně nových zdrojů (export
StatCounteru, nápověda Seznamu „Protokol IndexNow“ a „Optimalizace (SEO)“, nápověda Skliku) — **vše OBSTOJÍ**, nový
zásadní nález není. Nepovinný tip (funkce „Přidat stránku do hledání“ v Seznam Webmasteru zaručí zařazení
indexovatelné stránky během několika minut, s denní kvótou) ověřen ve zdroji a zapracován do kroku 1.

## Kolo 2 — jazyk, struktura, SEO a kontrola vypořádání

**Verdikt: OPRAVIT PŘED PUBLIKACÍ, 19 nálezů (1 BLOCKER, 5 WARNING, 13 TIP).** Kontrola vypořádání: 17 z 18 nálezů
kola 1 sedí bez zbytku; zbytek nálezu 1 v Checklistu (BLOCKER). Fakta auditor znovu neprocházel; hlavní výtka je
přehuštění atribucemi po kole 1 („nápověda“ 53×).

### Zapracováno

| # | Nález | Oprava |
|---|---|---|
| 1 | Checklist „Jste lokální firma“ bez výhrady stránky o betě | „Firmy.cz je katalog Seznamu. Časté dotazy v nápovědě i tisková zpráva z 15. 10. 2026 ho řadí mezi zdroje Seznam AI, stránka o betě zatím mezi budoucí.“ |
| 2 | úvod zahlcený, druhá věta míchá dva podměty | rozdělen: uživatelé Seznam AI zvlášť, podíl vyhledávače Seznam zvlášť; vsuvka v závorce místo „—,“ |
| 3 | „odbaví“ s podmětem uživatelé; „Asistenta Seznam spustil“ | „Seznam spustil asistenta…“; „…a asistent odbaví nižší miliony konverzací“ |
| 4 | „plochy nejde cílit“, dvakrát „podle nápovědy“ | „Seznam je podle ní vydává…“; „Na plochy v Seznam AI nejde zvlášť cílit ani je vyloučit…“ |
| 5 | FAQ 2–5 bez otázky nedávají smysl | FAQ 2 „Seznam AI je zdarma…“; FAQ 3 „Seznam AI podle častých dotazů … odpovídá z…“; FAQ 4 „Web se z AI odpovědí Seznamu … odhlásí…“; FAQ 5 „Základ SEO pro Seznam.cz a pro Google je podobný: web musí být dostupný robotovi SeznamBot a v indexu.“ + rada z nápovědy zvlášť; věta o Heurece zkrácena |
| 6 | chybí odkaz na sesterský článek o Seznam-Extended | odkaz v FAQ 4 a v řádku zdrojů pod postupem (`/blog/seznam-asistent-sellma/`); v komponentách odkaz není, protože se tam nevykreslí |
| 7 | odrážka e-shopu dlouhá, u Sreality chybí výhrada | odrážka e-shopu rozdělena; Sreality „(stránka o betě je zatím řadí mezi budoucí)“ |
| 8 | „ho“ se váže k jinému slovu | odrážka indexu „index Vyhledávání jmenují časté dotazy…“; krok 3 „řadí katalog Firmy.cz mezi zdroje…“ |
| 9 | „k optimalizaci k tomu radí“ | „Seznam v nápovědě k optimalizaci radí…“ |
| 10 | krok 1 „je v betě“ s podmětem nápověda | krok 1 přepsán podle návrhu + funkce „Přidat stránku do hledání“ (tip C5b) |
| 11 | krok 2 a chyba 03 „Pro AI odpovědi“ | krok 2 „Chcete být zdrojem odpovědí Seznam AI? Pak v robots.txt nesmí být…“; chyba 03 „Pro zákaz AI odpovědí…“ |
| 12 | krok 6 bez pokynu | „Položte Seznam AI dotazy, které kladou vaši zákazníci, a zapište si, které weby uvádí mezi zdroji…“ |
| 13 | Checklist e-shop — tři atribuce | podle návrhu |
| 14 | chyba 04 dvojznačná | „Seznam AI podle své nápovědy uvádí…“ |
| 15 | „Co sledovat“ — dlouhá věta, nelogické „proto ověřujte“ | „Nejisté zůstávají čtyři věci: …“; „…takže než se podle ní rozhodnete, ověřte si její aktuální znění.“ |
| 16 | CTA jedna věta, dvojznačný „robot Seznamu“ | rozděleno; „roboti Seznamu včetně Seznam-Extended“ (rozsah podle `audit.ts`) |
| 17 | „dokumentace IndexNow“ po nálezu 10 nic nedokládá; data čtení | úvodní odstavec a patička bez IndexNow, rozlišují 23. 11. a 14. 10.; „jsem četl 14. 10. 2026“ |
| 18 | poslední věta answer má podmět Seznam AI | „Vyhledávač Seznam zůstává pro většinu firem doplňkem ke Googlu.“ (59 slov) |
| 19 | H2 s upoutávkou místo pointy | „Odkud Seznam AI čerpá — firma ovlivní hlavně web, feed a zápisy ve službách Seznamu“ (na kotvy nic neodkazuje) |

### Nezapracováno + důvod

| # | Návrh | Proč ne |
|---|---|---|
| — | — | zapracováno vše |

Třetí kolo není potřeba: kolo 2 mělo jen zbytek nálezu 1 (doplněna tatáž výhrada jako jinde) a jazykové úpravy
fakta nemění; zásadní nálezy kola 1 obstály v C5b. Po opravách `jazyk-check.py` 0, `kontrola-komponent.py` 0, build
v pořádku, v HTML žádné syrové značky, 7 FAQ, odkazy i kotvy existují; „nápověda“ ve 42 výskytech místo 53.
