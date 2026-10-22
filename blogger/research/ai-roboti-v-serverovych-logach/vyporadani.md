# Vypořádání auditů — AI roboti v serverových lozích

## Faktický audit

| # | Závažnost | Stav | Vypořádání |
|---|---|---|---|
| F1 | zásadní | Opraveno | Celřádkový `grep` nahradil filtr šestého uvozovaného pole formátu `combined`; text výslovně upozorňuje na vlastní formáty. |
| F2 | zásadní | Opraveno | Předověřené počty jsou označené jako nálezy podle user-agentu. Text požaduje ověření každé dvojice jména a IP, samostatný počet dnes ověřených řádků a kategorii „dnes neověřeno“. |
| F3 | zásadní | Opraveno | Do hlavního textu i FAQ přibyla podmínka důvěry v `CF-Connecting-IP` pouze u spojení z rozsahů proxy a oddělení přímého přístupu k původnímu serveru. |
| F4 | zásadní | Opraveno | Doporučení pro CDN nyní odděluje úplnost pokrytí od kvality identifikace a vyžaduje ověřit možnosti konkrétního tarifu. |
| F5 | zásadní | Opraveno | Záhlaví tabulky a okolní text mluví o možném použití při vývoji modelů. Doplněná je podmínka sdílení jednoho procházení OpenAI pro dva povolené účely. |
| F6 | zásadní | Odmítnuto po finální kontrole | První auditor vyšel ze zastaralého znění. Kanonický `src/content/pages/pack.ts` na řádcích 63–70 a živá stránka potvrzují konečnou cenu 1 490 Kč včetně DPH; článek byl vrácen k tomuto údaji. |
| F7 | drobný | Opraveno | Bytespider, CCBot a Applebot byly odstraněny ze základního filtru i počítacího příkazu; článek analyzuje jen vysvětlené skupiny. |
| F8 | drobný | Opraveno | FAQ i text vymezují výčet účely návodu a uvádějí, že reklamní `OAI-AdsBot` zůstává mimo rozsah. |
| F9 | drobný | Opraveno | Třicet dní je příklad prvního okna; text doporučuje prodloužení u malého webu a stejně dlouhá úplná období pro srovnání. |
| F10 | drobný | Opraveno | Interpretace 404 nyní zahrnuje staré odkazy, překlepy, změny směrování i vymyšlené URL. |
| F11 | drobný | Opraveno | Krátká odpověď začíná definicí analýzy a zůstává v požadovaném rozsahu. |
| F12 | drobný | Ověřeno, beze změny odkazu | Zdroj i sestavená route `dist/blog/cachovani-pro-ai-roboty/index.html` existují; po nasazení se ještě ověří HTTP 200. |

## Jazykový audit

| # | Závažnost | Stav | Vypořádání |
|---|---|---|---|
| J1 | zásadní | Opraveno | „Hledání nákladů“ nahrazeno náročnými požadavky a doplněn limit tohoto zjištění. |
| J2 | zásadní | Opraveno | „Vstup dodaný cizím klientem“ nahrazen textem vloženým návštěvníkem nebo cizím programem. |
| J3 | zásadní | Opraveno | Prázdný výsledek je popsán jako absence nálezu v daném logu, ne důkaz nepoužívání webu. |
| J4 | zásadní | Opraveno | „Čtyři řezy“ nahrazeny čtyřmi způsoby pohledu. |
| J5 | zásadní | Opraveno | Abstraktní „velký prostor“ nahrazen konkrétním popisem mnoha URL se stejným obsahem. |
| J6 | zásadní | Opraveno | Tvrzení o správném chování robota nahrazeno pozorovatelným faktem, že části webu navštěvuje. |
| J7 | zásadní | Opraveno | Doporučení nyní konkrétně uvádí kombinace filtrů, chybové adresy, dobu obsluhy a podíl odpovědí z mezipaměti. |
| J8 | drobný | Opraveno | Rotované a komprimované logy jsou vysvětleny srozumitelněji. |
| J9 | drobný | Opraveno | „Obnovit/zalogovat“ nahrazeno převzetím hlavičky a zápisem do logu. |
| J10 | drobný | Opraveno | „Honí nekonečné filtry“ nahrazeno procházením nových kombinací filtrů. |
| J11 | drobný | Opraveno | Formulace o IP nyní mluví o obsluze požadavků z více sítí a datových center. |
| J12 | drobný | Opraveno | Podrobnější je vysvětlení rozdílu, ne samotný rozdíl. |
| J13 | drobný | Opraveno | „Report“ a nejasná jména nahrazeny přehledem výsledků a přesnými označeními robotů. |
| J14 | drobný | Opraveno | Referrer je při prvním použití v FAQ vysvětlen jako odkazující stránka. |
| J15 | drobný | Opraveno | Neúplné spojení „součet AI provoz“ nahrazeno jediným součtem označeným jako provoz AI. |
| J16 | drobný | Opraveno | Absolutní „převrátí výsledek“ nahrazeno „zkreslí výsledek“. |
| J17 | drobný | Opraveno | „Užitečné URL“ nahrazeny adresami stránek určených ke zpřístupnění robotům. |

## Finální audit

| # | Závažnost | Stav | Vypořádání |
|---|---|---|---|
| K1 | zásadní | Opraveno | CTA sjednoceno s kanonickým `pack.ts` a živou stránkou na 1 490 Kč včetně DPH. |
| K2 | zásadní | Opraveno částečně, zbytek odmítnut | Povinná tabulka podmínek cizích platforem byla doplněna. Přidána byla i užitečná evidenční hlavička. Tvrzení, že ji vyžaduje náš workflow, ale vychází z Claude varianty `CONTENT_WORKFLOW.md`; závazný `Content Workflow Codex.md` ji nevyžaduje. |
| K3 | zásadní | Opraveno | Zápis do `JAZYK_AUDIT_LOG.md` byl doplněn a mechanický checker skončil s 0 nálezy. Externí gpt-5.4 průchod ze skillu zablokovala automatická kontrola kvůli odeslání interního slovníku; bezpečnou náhradou je dokončený nezávislý jazykový subagent nad článkem a projektovým slovníkem. Samotný `Content Workflow Codex.md` v C6 vyžaduje mechanický checker, který byl splněn. |
| K4 | drobný | Opraveno | `seoTitle`, klíčové slovo a nové nadpisy používají český tvar „v serverových lozích“. Historické audity zůstávají jako záznam stavu v okamžiku kontroly. |

