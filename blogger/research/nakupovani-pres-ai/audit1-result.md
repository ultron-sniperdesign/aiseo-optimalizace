## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek má dobrý základ: struktura je logická, CTA míří na konkrétní produkty, zdroje jsou uvedené a krátká odpověď má správnou délku i formát. Před publikací ale opravit několik věcných a formulačních přehnaných tvrzení. Největší problém je příliš široké tvrzení, že se celé „nakupování přes AI“ ustálilo na jednom modelu, a absolutní tvrzení o měření konverzí.

---

## Nálezy a opravy

### [BLOCKER] Příliš široký závěr pro celé „nakupování přes AI“

**Citace:**

> „Nakupování přes AI se v roce 2026 ustálilo na modelu „objev v AI, nákup na webu“.“

**Problém:**  
To je příliš široké tvrzení. Podle zadání se tento obrat týká hlavně OpenAI/ChatGPT a změny plánu kolem Instant Checkoutu. Současně ale zadání říká, že Instant Checkout přes ACP/Stripe zůstává pro část partnerů a že Mastercard/Visa agentní platby pokračují. Tvrzení proto nesmí znít jako definitivní popis celého trhu.

**Návrh opravy:**

> „U ChatGPT se v roce 2026 pro většinu obchodníků prosadil praktičtější model „objev v AI, nákup na webu“. Neznamená to konec agentních plateb ani ACP; část řešení dál běží u vybraných partnerů.“

Stejnou úpravu promítnout do `answer`, prvního odstavce i shrnutí.

---

### [BLOCKER] „0 změn v měření konverzí“ je zavádějící absolutní claim

**Citace:**

```yaml
- value: "0"
  label: "změn v měření konverzí — nákup končí na vašem webu, kde jste měřili vždycky"
```

A dále:

> „Měření se nemění. Konverze končí tam, kde vždycky — na vašem webu.“

**Problém:**  
Místo dokončení objednávky zůstává web, ale měření zdrojů se mění nebo komplikuje. Návštěvy z AI nástrojů nemusí být vždy správně vidět jako referral, část může spadnout do direct/unknown, záleží na aplikaci, prohlížeči, parametrech a analytice.

**Návrh opravy statistiky:**

```yaml
- value: "web"
  label: "zůstává místem dokončení nákupu — nově je potřeba hlídat zdroje návštěv z AI nástrojů"
```

**Návrh opravy v textu:**

> „Objednávku dál měříte na vlastním webu. Mění se hlavně práce se zdroji návštěv: část prokliků z AI nástrojů uvidíte v analytice jako referral, část může skončit jako direct nebo neznámý zdroj.“

---

### [WARNING] Tvrzení, že pokladna „vydržela půl roku“, je potřeba zpřesnit

**Citace:**

> „Pokladna uvnitř ChatGPT vydržela zhruba půl roku…“

**Problém:**  
Podle zadání se změnil plán nativního checkoutu v ChatGPT, ale ACP/Stripe a Instant Checkout pro část partnerů nezmizely úplně. Formulace může vyvolat dojem, že celá technologie skončila.

**Návrh opravy:**

> „Původní plán plošného nativního checkoutu v ChatGPT se po zhruba půl roce změnil; ACP a vybrané transakční integrace dál pokračují u části partnerů.“

Totéž upravit ve statistikách a shrnutí.

---

### [WARNING] Chybí kontext Mastercard/Visa z briefu

**Citace:**  
V článku není zmínka o Mastercard live ani Visa TAP komerčně.

**Problém:**  
Brief výslovně uvádí, že Mastercard je live a Visa TAP komerčně. Bez tohoto kontextu článek působí, jako by změna OpenAI znamenala obecný útlum agentního commerce. To je věcně neúplné.

**Návrh opravy:**  
Doplnit krátký odstavec například do části „Co zůstává“ nebo „Časté omyly“:

> „Neznamená to, že agentní platby mizí. Vedle změny u ChatGPT pokračují vybraná platební řešení pro agentní nákupy, včetně komerčních iniciativ Mastercard a Visa TAP. Pro běžný e-shop je ale v roce 2026 praktičtější počítat s tím, že doporučení vzniká v AI a objednávka se dokončuje na vlastním webu.“

Nutné doplnit zdroj a datum, pokud se tato fakta použijí.

---

### [WARNING] Absolutní tvrzení o doporučování produktů AI

**Citace:**

> „Co systém neumí spolehlivě přečíst, to nedoporučí.“

**Problém:**  
Příliš absolutní. Nelze tvrdit, že AI systém produkt určitě nedoporučí. Bezpečnější claim podle brand pravidel: „může snížit šanci“, „pomáhá AI lépe pochopit obsah“.

**Návrh opravy:**

> „Co systém neumí spolehlivě přečíst, má menší šanci dostat se do doporučení.“

---

### [WARNING] Další absolutní claim v FAQ

**Citace:**

> „Do doporučení se dostane ten, o kom má systém spolehlivé údaje.“

**Problém:**  
Zní jako záruka. Produktová data šanci zvyšují, ale negarantují doporučení.

**Návrh opravy:**

> „Vyšší šanci na doporučení má produkt, u kterého systém najde spolehlivé a konzistentní údaje.“

---

### [WARNING] Absolutní tvrzení o analytice AI odkazů

**Citace:**

> „Odkazy z AI odpovědí v analytice vidíte.“

**Problém:**  
Ne vždy. Některé AI nástroje referral předají, jiné ne; část návštěv může vypadat jako direct.

**Návrh opravy:**

> „Část odkazů z AI odpovědí v analytice uvidíte jako samostatné zdroje, část může spadnout do direct nebo neznámých návštěv. Proto nespoléhejte jen na jeden měsíc dat.“

---

### [WARNING] Relativní časové označení „loni“

**Citace:**

> „Ještě loni to vypadalo na jiný scénář…“

**Problém:**  
Článek je vázaný na rok 2026. Brief zakazuje neukotvené formulace typu „letos / příští rok“. „Loni“ je podobně relativní a po čase bude matoucí.

**Návrh opravy:**

> „V roce 2025 to vypadalo na jiný scénář: nákup od dotazu po zaplacení bez opuštění chatu.“

---

### [WARNING] Poplatky z agregátorů nejsou dostatečně ukotvené

**Citace:**

> „Odvětvové přehledy uvádějí u agentních nákupů poplatek řádově v jednotkách procent z transakce.“

A ve zdrojích:

> „Údaje o poplatcích pocházejí z odvětvových přehledů, ne z primárních zdrojů.“

**Problém:**  
Brief říká, že čísla z agregátorů se mají uvádět se zdrojem a datem a nepřepočítávat na Kč. Článek sice správně upozorňuje, že nejde o primární zdroj, ale neuvádí konkrétní zdroj ani datum. Navíc FAQ slibuje odpověď „kolik“, ale dává jen vágní formulaci.

**Návrh opravy — varianta A, pokud chcete číslo ponechat:**

> „Odvětvové přehledy z let 2025–2026 uváděly u agentních nákupů orientačně poplatek kolem 4 % z transakce; s platebním zpracováním mohly celkové náklady vycházet výrazně výš. Nejde o primární zdroj, proto číslo nepoužívejte pro kalkulaci marže bez ověření konkrétní platformy.“

Doplnit konkrétní zdroj a datum.

**Návrh opravy — varianta B, pokud zdroj nemáte:**  
FAQ o poplatku odstranit nebo ponechat bez čísla:

> „Veřejně ověřitelné podmínky se liší podle platformy a partnera. Pokud počítáte marži, vycházejte z aktuálních smluvních podmínek konkrétního řešení, ne z odvětvových odhadů.“

---

### [WARNING] Formulace o Shopify může znít jako skutečné zapojení milionu obchodníků

**Citace:**

> „Etsy naživo, u Shopify se mluví o milionu obchodníků, kteří se mají přidat.“

**Problém:**  
Podle research šlo o „coming soon“, ne o reálné zapojení milionu obchodníků. V další části článek správně uvádí, že reálně šlo asi o tucet obchodníků. Tady je potřeba formulaci zpřesnit, aby nevznikl rozpor.

**Návrh opravy:**

> „Etsy naživo, přes milion obchodníků Shopify bylo oznámeno jako „coming soon“.“

---

### [TIP] Krátká odpověď je formálně dobrá, ale musí převzít věcné zpřesnění

**Citace:**

```yaml
answer: "Nakupování přes AI se v roce 2026 ustálilo na modelu..."
```

**Co je dobře:**  
Má 40–60 slov, začíná definicí, dává samostatný smysl.

**Co opravit:**  
Přepsat kvůli příliš širokému claimu.

**Návrh opravy:**

> „Nakupování přes AI u ChatGPT se v roce 2026 posunulo k modelu „objev v AI, nákup na webu“. OpenAI podle zpravodajství v březnu 2026 změnil plán nativní pokladny a obchodníkům nechal vlastní checkout. Pro e-shop to znamená hlavně tlak na přesná produktová data a měření návštěv z AI nástrojů.“

---

### [TIP] CTA je relevantní, jen sjednotit označení bezplatného materiálu

**Citace:**

> „Kdo chce začít sám, má k dispozici [návod zdarma](/navod-zdarma/)…“

**Co je dobře:**  
CTA míří na konkrétní produkty: Audit 3 600 Kč, Pack 1 490 Kč i bezplatný materiál. To odpovídá zadání.

**Návrh drobné opravy:**  
Pokud je produkt v nabídce vedený jako Free PDF, sjednotit pojmenování:

> „Kdo chce začít sám, má k dispozici [bezplatný PDF návod](/navod-zdarma/) a šablony v [AI SEO Wireframe Packu za 1 490 Kč](/pack/).“

---

### [TIP] SEO metadata jsou v pořádku

**Kontrola:**

- `seoTitle`: „Nakupování přes AI 2026: pokladna se vrátila na weby“ — cca 52 znaků, klíčové slovo je vepředu.
- `description`: cca 140 znaků, v limitu 70–160.
- `slug`: `nakupovani-pres-ai` je smysluplný a krátký.
- Struktura H2 je logická.
- Interní odkazy na související články jsou relevantní.

**Bez nutné opravy.**

---

### [TIP] Drobné jazykové zpřesnění

**Citace:**

> „OpenAI podle vyjádření uvedl…“

**Problém:**  
Kostrbatá formulace.

**Návrh opravy:**

> „OpenAI ve vyjádření uvedla…“

nebo neutrálněji:

> „Podle vyjádření OpenAI první verze nenabídla dostatečnou flexibilitu…“