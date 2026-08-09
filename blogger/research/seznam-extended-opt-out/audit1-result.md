1. **KRITICKÉ — Frontmatter `answer` překračuje doložený rozsah opt-outu**
   - **Citace:** `answer: "Seznam dokumentuje user-agenta Seznam-Extended, kterým jde v robots.txt odhlásit obsah z funkcí Seznam AI. ... Odhlášením ale mizí i návštěvnost z těch ploch."`
   - **Problém:** Tohle je napsané jako obecně platný výrok. Jenže podle podkladu je dokumentace zasazená do **partnerské nápovědy** a mluví o odhlášení „z této nové služby“. U webů mimo program to dokumentace **neřeší**. Tělo článku ten limit naštěstí přiznává, ale `answer` ho shazuje.
   - **Návrh:** Přepsat na podmíněný a přesný tvar. Např.:  
     **„Seznam v partnerské nápovědě k Seznam AI uvádí user-agenta Seznam-Extended jako způsob odhlášení z této služby přes robots.txt. U webů mimo tento kontext dokumentace účinek neupřesňuje. Ve vzorku 33 českých médií ho měl jeden web.“**

2. **VÁŽNÉ — Titulek je na hraně zavádějící, protože neříká „v partnerské nápovědě“**
   - **Citace:** `title: "Seznam má opt-out z AI. V robots.txt ho má 1 web z 33"`
   - **Problém:** Titulek čtenáři podsouvá obecný, plně zavedený „opt-out z AI“, a teprve v textu se ukáže, že jde o formulaci v partnerské nápovědě. To je přesně ten typ zkratky, na kterém se pak staví přestřelené interpretace.
   - **Návrh:** Zpřesnit už v titulku. Např.:  
     **„Seznam v partnerské nápovědě uvádí opt-out z AI. V robots.txt ho má 1 web z 33“**  
     nebo  
     **„Seznam-Extended: opt-out z AI je popsaný v partnerské nápovědě, v robots.txt ho má 1 web z 33“**

3. **VÁŽNÉ — Shrnutí znovu zobecňuje víc, než je bezpečné**
   - **Citace:** „**Český opt-out z AI existuje**, jmenuje se `Seznam-Extended` a nastaví se jedním odstavcem v robots.txt.“
   - **Problém:** Tohle je rétoricky silnější než zbytek článku. Neříká „Seznam takto popisuje odhlášení v partnerské nápovědě“, ale rovnou konstatuje existenci obecného českého opt-outu. To je přesně hlavní riziko zadání.
   - **Návrh:** Přepsat na:  
     **„Seznam v partnerské nápovědě k Seznam AI popisuje odhlášení přes `Seznam-Extended` v robots.txt.“**  
     Když chceš být poctivý, zahoď slovo „český opt-out z AI“ úplně.

4. **VÁŽNÉ — Místy podsouváš konkrétní nakládání s obsahem, ač ho neměříš**
   - **Citace:** „Není to tedy jednosměrná ochrana obsahu, ale volba: **buď s mým obsahem nepracujte, nebo mi z něj posílejte lidi**.“
   - **Problém:** To je interpretace jedné věty z dokumentace, ale zní to jako přesný provozní model služby. Ty jsi neměřil chování Seznamu, jen text dokumentace a stav robots.txt. Formulace „s mým obsahem nepracujte“ je ještě udržitelná jako parafráze citace; problém je, že to podáváš jako jistou binární volbu.
   - **Návrh:** Připsat zdrojování přímo do věty:  
     **„Podle této formulace Seznam staví věc jako volbu mezi nepoužíváním obsahu v rámci Seznam AI a přiváděním návštěvnosti z těchto ploch.“**  
     Tím omezíš dojem, že popisuješ ověřené chování.

5. **VÁŽNÉ — FAQ „Přijdu odhlášením o něco?“ je příliš definitivní**
   - **Citace:** „**Podle Seznamu ano.** Ve stejné větě uvádí, že po zákazu už na váš web nebude uživatele přivádět…“
   - **Problém:** Lepší než nic, ale pořád to může čtenář přečíst jako obecně ověřený dopad. U webů mimo program je to zvlášť citlivé.
   - **Návrh:**  
     **„V partnerské nápovědě Seznam uvádí, že po tomto zákazu už na web nebude uživatele přivádět ani s jeho obsahem v rámci Seznam AI pracovat. U webů mimo tento kontext dokumentace účinek nerozvádí.“**

6. **VÁŽNÉ — Formulace „domácí páka“ je zbytečně silná**
   - **Citace:** „…a **domácí páku, kterou Seznam sám dokumentuje**, má jeden web z třiatřiceti.“
   - **Problém:** „Páka“ implikuje prakticky použitelný a obecný nástroj. Jenže dokumentovaný je v partnerské nápovědě a rozsah mimo ni neznáš.
   - **Návrh:**  
     **„…a pravidlo pro `Seznam-Extended`, které Seznam uvádí v partnerské nápovědě, má jeden web z třiatřiceti.“**

7. **DROBNÉ — FAQ „Co je Seznam-Extended?“ by mělo víc držet kontext**
   - **Citace:** „Je to jméno user-agenta, který Seznam uvádí ve své partnerské nápovědě jako způsob, jak se odhlásit z funkcí Seznam AI.“
   - **Problém:** Tohle je v zásadě správně. Chybí jen dovětek, že dokumentace mluví o odhlášení „z této nové služby“, ne o univerzálním režimu pro celý webový ekosystém.
   - **Návrh:** Přidat půl věty:  
     **„…v kontextu zapojení do této služby.“**

8. **DROBNÉ — „Mechanismus je úplně obyčejný“ je hodnotící zkratka**
   - **Citace:** „**Mechanismus je úplně obyčejný.** Žádné rozhraní, žádná žádost, žádný formulář…“
   - **Problém:** Fakticky tím říkáš jen to, že jde o pravidlo v robots.txt. „Úplně obyčejný“ je stylizace navíc.
   - **Návrh:**  
     **„Mechanismus je popsán jako běžné pravidlo v robots.txt…“**

9. **DROBNÉ — Blok „Málem jsem publikoval opak“ je už na hraně sebestřednosti**
   - **Citace:** celý blok `<Insight tone="warn"...>`
   - **Problém:** Není vyloženě mimo, protože čtenáři vysvětluje metodickou lekci: nevyvozovat neexistenci z jedné dokumentační stránky. Jen je zbytečně dlouhý a obsahuje odbočku na starší článek o Anthropicu, která tady slouží hlavně autorovi.
   - **Návrh:** Zkrátit na 2–3 věty a vyhodit osobní analogii:  
     **„Dokumentace procházení jmenuje jen SeznamBota a `*`, takže by bylo snadné mylně usoudit, že žádný AI opt-out neexistuje. To by byla chyba: Seznam-Extended je popsán jinde, v partnerské nápovědě. Absence na jednom dokumentačním místě není důkaz neexistence.“**

10. **DROBNÉ — Čísla ve vzorku drží pohromadě, ale jedna vazba by měla být explicitnější**
   - **Citace:**  
     - „pravidlo aspoň pro jednoho zahraničního AI robota | 16“  
     - „žádné pravidlo pro AI robota | 17“
   - **Problém:** Aritmeticky to sedí jen tehdy, když „žádné pravidlo pro AI robota“ zahrnuje i absenci všech zahraničních robotů **i** Seznam-Extended. To čtenář odvodí, ale není to napsané úplně blbuvzdorně.
   - **Návrh:** Upřesnit label:  
     **„žádné pravidlo pro sledovaného AI robota“**  
     nebo pod tabulku přidat větu:  
     **„Součet 16 + 17 dělí vzorek podle toho, zda web má aspoň jedno pravidlo pro některého ze sledovaných AI robotů včetně Seznam-Extended.“**

11. **DROBNÉ — „SeznamBot 2“ je izolované číslo bez interpretační hodnoty**
   - **Citace:** „pravidlo pro `SeznamBot` | 2“
   - **Problém:** Samo o sobě je to zajímavost, ale text ji nijak nevyužívá. Navíc hrozí, že méně pozorný čtenář začne směšovat SeznamBot a Seznam-Extended, proti čemuž sice později bojuješ, ale zbytečně si to sám komplikuješ.
   - **Návrh:** Buď číslo vypustit, nebo hned dodat:  
     **„To ale není AI opt-out; jde o běžného crawlera vyhledávání.“**

12. **DROBNÉ — Rozhodovací část je použitelná, ale mohla by být tvrdší v tom, co víme a nevíme**
   - **Citace:** „**Nejste v programu Seznam Partner:** dokumentace k vám mlčí. Pravidlo si přidat můžete, ale nečekejte doložený efekt.“
   - **Problém:** Tohle je jedna z nejsilnějších a nejpoctivějších vět v článku. Měla by být výš, klidně už u prvního vysvětlení mechanismu, ne až v rozhodovací části.
   - **Návrh:** Přesunout nebo zopakovat hned po citaci dokumentace jako krátké varování.

13. **DROBNÉ — Oddělení Seznamových čísel jako tvrzení provozovatele je správně, tady problém nevidím**
   - **Citace:** „Jsou to údaje provozovatele o vlastní službě, neověřené třetí stranou…“
   - **Problém:** Žádný zásadní. Tohle je poctivé a dostatečně explicitní.
   - **Návrh:** Neměnit.

14. **DROBNÉ — Popis dokumentace procházení by mohl být přesnější v návaznosti na podklad**
   - **Citace:** „Dokumentace procházení webu | `SeznamBot`, zástupný `*`, direktivy Disallow, Allow, Request-rate, Sitemap“
   - **Problém:** V podkladu je důležité hlavně to, že dokumentace jmenuje jen SeznamBota a `*` a **Seznam-Extended tam není**. To sice říkáš, ale tabulka to rozmělňuje.
   - **Návrh:** Zvýraznit absenci explicitně:  
     **„Dokumentace procházení webu: jmenuje `SeznamBot` a `*`; `Seznam-Extended` zde uveden není.“**

## Verdikt

**Publikovat po opravách.**

Jádro článku je použitelné a většinu limitů poctivě přiznává. Největší problém je opakované **zobecnění rozsahu opt-outu** ve frontmatteru, titulku a shrnutí. To musí pryč nebo se aspoň musí důsledně zarámovat jako **to, co Seznam uvádí v partnerské nápovědě k této službě**, ne jako univerzálně doložený režim pro všechny weby. Bez této opravy si článek koleduje o to, že bude citován silněji, než co skutečně stojí v dokumentaci.