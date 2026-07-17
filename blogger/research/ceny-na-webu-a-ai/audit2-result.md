[WARNING]  
**Citace:** „**Google u strukturovaných dat očekává shodu s viditelným obsahem** a nesoulad je problém pro interpretaci i důvěryhodnost — data mají popisovat obsah stránky, ne říkat něco vedle.“  
**Proč:** Tvrzení je formulované jako jistota o požadavku třetí strany. Bez opory/citace v textu je to pořád kategorické. V zadání výslovně zmiňujete kontrolu „sedí tvrzení o očekávané shodě dat s viditelným obsahem?“ — obsahově to dává smysl, ale jako auditní standard bych doporučil ještě mírněji formulovat, aby to nebylo čtené jako univerzální závazné pravidlo pro všechny případy a typy značení.  
**Návrh:** Změkčit např. na: „U strukturovaných dat dává smysl držet shodu s viditelným obsahem stránky; když se údaje rozcházejí, je to problém pro interpretaci i důvěryhodnost.“

[WARNING]  
**Citace:** „Cena patří k **nejčastějším prázdným místům na českých webech** a zároveň k prvním věcem, na které se lidé ptají.“  
**Proč:** Je to zobecnění/superlativ bez opory v textu. „Nejčastějším“ implikuje srovnání nebo znalost četnosti. V prvním kole se řešilo změkčení kategorických formulací; tady podobný typ tvrzení zůstal.  
**Návrh:** Např. „Cena patří k častým prázdným místům na webech…“ nebo „Cena bývá časté prázdné místo…“

[WARNING]  
**Citace:** „Prázdné místo se nedrží prázdné — **vyplní ho cizí a často starší zdroj**.“  
**Proč:** Jádro teze je v článku konzistentní, ale formulace je dost jistá. Výše v textu je opatrnější verze: „prostor často vyplní cizí zdroje“. Tady by bylo lepší držet stejnou míru opatrnosti.  
**Návrh:** „Prázdné místo často vyplní cizí, někdy starší zdroj.“

[DOPORUČENÍ]  
**Citace:** JSON ukázka:
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI SEO audit",
  "offers": {
    "@type": "Offer",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "minPrice": 15000,
      "maxPrice": 45000,
      "priceCurrency": "CZK"
    }
  }
}
```  
**Proč:** Po odstranění duplicitního `priceCurrency` je ukázka syntakticky v pořádku a významově dává smysl jako příklad rozpětí. Současně ale text nad tím říká „u rozpětí například přes `PriceSpecification`…“ — tedy správně jako příklad, ne jediná možnost. Nevidím BLOKER. Jen upozornění: protože článek je tutorial, můžete ještě zvýšit srozumitelnost tím, že naznačíte, že jde o ilustrativní ukázku a konkrétní implementace se může lišit podle typu stránky.  
**Návrh:** Přidat jednu větu typu: „Je to ilustrativní příklad; konkrétní značení se může lišit podle typu nabídky a stránky.“

[DOPORUČENÍ]  
**Citace:** `answer: "Cena na webu je pro AI nejčitelnější tehdy, když je na stránce napsaná jako text. Údaj schovaný v obrázku, v PDF nebo za formulářem systém přečíst nemusí a může sáhnout po cizím nebo zastaralém zdroji. I tam, kde konkrétní číslo dát nejde, pomůže rozpětí, od-cena nebo popis toho, co cenu určuje."`  
**Proč:** Začíná definicí a věcně sedí. Délkou je zhruba v požadovaném rozsahu 40–60 slov. Bez výhrady k formátu; jen konstatuji splnění.  
**Návrh:** Není nutný.

[KOSMETIKA]  
**Citace:** „Často jde říct aspoň něco.“ / „Většinou jde uvést aspoň rozpětí…“  
**Proč:** Není to BLOKER ani věcný rozpor, ale po prvním kole zaměřeném na změkčování bych zvažoval sjednocení opatrného tónu. „Většinou“ je měkké, ale pořád zobecňuje. Zvlášť když zároveň správně říkáte, že „cena na dotaz je legitimní volba“.  
**Návrh:** Pokud chcete být úplně konzistentní, můžete z „Většinou jde uvést aspoň…“ udělat „Často jde uvést aspoň…“ nebo „Někdy jde uvést aspoň…“

[KOSMETIKA]  
**Citace:** „…které **mohou zvýšit šanci**, že se o firmě a jejích cenách budou čerpat přesnější údaje.“  
**Proč:** Tohle je naopak v pořádku a není to slib výsledku. Uvádím explicitně, že CTA nepřekračuje hranici zakázaného „garantujeme citaci/umístění“.  
**Návrh:** Bez zásahu.

[KOSMETIKA]  
**Citace:** „Neslibuje citaci ani lepší umístění. Jasná cena **zvyšuje šanci**, že se bude čerpat z vás a ne odjinud. Záruka to není…“  
**Proč:** Vnitřně konzistentní, správně opatrné, bez slibu výsledku.  
**Návrh:** Bez zásahu.

[KOSMETIKA]  
**Citace:** „Ať je jasné, o čem tenhle text není: **neradí vám ceny zveřejnit.** … „cena na dotaz" je legitimní volba.“ + „Cena na dotaz jako jediná informace. Obchodně legitimní, informačně prázdné.“  
**Proč:** Nejde o rozpor. Článek rozlišuje legitimitu obchodního rozhodnutí a informační kvalitu sdělení pro člověka/stroj. To je obhajitelné a konzistentní.  
**Návrh:** Bez zásahu.

VERDIKT: **OPRAVIT PŘED PUBLIKACÍ**

Prioritní zásahy:
1. Změkčit nepodložené zobecnění „**nejčastějším prázdným místům na českých webech**“.  
2. Změkčit jistotu v závěru „**vyplní ho cizí a často starší zdroj**“ na pravděpodobnostní formulaci.  
3. Zvážit jemnější formulaci u věty „**Google … očekává shodu**“, aby nepůsobila jako nepodložené absolutnější tvrzení o třetí straně.

Jinak nevidím BLOKER: slib výsledku se po úpravách nevrátil, JSON ukázka po odstranění duplicitního `priceCurrency` drží pohromadě, `answer` splňuje zadání a zásadní vnitřní rozpor jsem nenašel.