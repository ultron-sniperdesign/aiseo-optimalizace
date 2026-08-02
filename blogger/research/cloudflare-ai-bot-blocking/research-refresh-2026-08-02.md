# Refresh + oprava — Cloudflare a AI roboti (2026-08-02)

**Dotčené články:** `cloudflare-ai-bot-blocking` (refresh) a `vydelavat-na-ai-robotech` (**oprava chyby**)

> Tenhle run nezačal jako oprava. Při trend researchi se ukázalo, že si dva články
> na webu **navzájem odporují** v datované, konkrétní věci — a ten mladší, který jsem
> publikoval 1. srpna, se mýlil; pravdu měl ten starší.

---

## 1. Rozpor, který to spustil

| Článek | Co tvrdil o 15. 9. 2026 |
|---|---|
| `cloudflare-ai-bot-blocking` (19. 7.) | „Nové výchozí hodnoty se týkají **nově zakládaných domén** — vám se 15. září nic samo nepřepne." |
| `vydelavat-na-ai-robotech` (1. 8., **můj**) | „Stávající zákazníci na **bezplatném tarifu**, kteří si nastavení nezmění, ho podle oznámení **dostanou automaticky**." |

Nemohlo platit obojí.

---

## 2. Rozhodnutí u primárního zdroje

**Změnový log Cloudflare** (`developers.cloudflare.com/changelog/product/bots/`), doslova:

> „Starting **September 15, 2026, new domains onboarding to Cloudflare** receive updated
> defaults: Bots classified as Training or as Agent are blocked on pages that display ads,
> while Search remains allowed."
>
> „On that date, **multi-purpose crawlers that combine Search and Training will be affected
> by the new defaults to block Training**."

**Blog Cloudflare** (`content-independence-day-ai-options`), doslova:

> „**For all new domains onboarding to Cloudflare**, the categories of Training and Agent
> will be blocked by default on the pages that display ads, while Search will remain
> allowed by default."

**Verdikt: starší článek měl pravdu.** Nové výchozí hodnoty se týkají nově zakládaných domén.
O automatickém přepnutí existujících domén — natož podle tarifu — není v žádném z těch
zdrojů ani slovo.

### Odkud se ta chyba vzala

Z **shrnutí tiskové zprávy Cloudflare**, které jsem v Run77 získal přes automatické
stažení. To shrnutí obsahovalo větu „Existing free customers unchanged by that date
receive these settings automatically". Nedohledal jsem ji v žádném primárním zdroji
a považuji ji za artefakt shrnutí, ne za znění Cloudflare.

**Poučení, které si beru:** shrnutí stránky není totéž co stránka. U datovaného,
konkrétního tvrzení musí padnout doslovná citace, ne parafráze.

### Definice kategorií — doslova z dokumentace

Doplňuji, protože audit je jinak (oprávněně) považoval za nedoložené — v tomhle
souboru chyběly, i když jsem je při refreshi četl:

> „**Search**: crawlers that collect or index your content to answer questions about it later."
>
> „**Agent**: automated activity acting in real time on a person's behalf, such as chat
> fetch bots and browser-use agents."
>
> „**Training**: crawlers taking your content to train or fine-tune a model, **including
> mixed-purpose crawlers that are used both for Training and for Search**."

Poslední citace je zároveň zdrojem toho, co článek říká o smíšených robotech.

---

## 3. Druhý nález — nedoložené tvrzení ve starším článku

`cloudflare-ai-bot-blocking` tvrdil na čtyřech místech, že **k 15. 9. „končí starý
přepínač Block AI bots"**.

- Ve změnovém logu **není**.
- V dokumentaci k blokaci AI botů **není**.
- V blogpostu **není**.

Co doložené **je** (dokumentace): *„Mixed-purpose crawlers that combine Search and Training
will also be blocked by all configurations to block AI training, **including the legacy
'Block AI bots' option**."* — tedy že se starý přepínač chová jinak než dřív, ne že končí.

**Tvrzení z článku odstraněno**, nahrazeno doloženým a doplněna otevřená poznámka.

---

## 4. Co se změnilo

### `vydelavat-na-ai-robotech` — oprava

| Místo | Bylo | Je |
|---|---|---|
| stat | „u části účtů se změní automaticky" | „nově zakládané domény mají jiné výchozí nastavení" |
| FAQ | „stávající na free tarifu dostanou automaticky" | „stávajícím doménám se nic samo nepřepne" |
| tělo | totéž + „aplikuje automaticky" | opraveno + **otevřená poznámka o opravě** |
| závěr | „u části účtů se provede automaticky" | „jen pro nově zakládané domény" |

### `cloudflare-ai-bot-blocking` — refresh

- odstraněno nedoložené „starý přepínač končí" (4 místa: answer, stat, FAQ, tělo)
- doplněno doložené: smíšení roboti spadnou pod blokaci tréninku
- poznámka o tom, co se z článku odebralo a proč
- `updated` na 2026-08-02

---

## 5. Zdroje

- developers.cloudflare.com/changelog/product/bots/ — změnový log (rozhodující)
- developers.cloudflare.com/bots/additional-configurations/block-ai-bots/ — dokumentace
- blog.cloudflare.com/content-independence-day-ai-options/ — blogpost
