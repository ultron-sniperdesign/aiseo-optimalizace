## BLOKER

1. **ANSWER je pořád moc definitivní u citací**
   - Citace: `Tréninkové roboty (GPTBot, ClaudeBot, CCBot) můžete omezit, citace to nezhorší.`
   - Problém: zopakovaný absolutnější závěr z 1. kola. V těle už je správně měkčí formulace: `by blokace tréninkového neměla přímo omezit citace`.
   - Dopad: rozpor metadata × text.
   - Oprava: změnit na `... můžete omezit; podle deklarovaného rozdělení rolí by to samo o sobě nemělo přímo omezit citace.`

2. **FAQ 1 míchá roboty pro citace s tréninkovými bez vysvětlení**
   - Citace: `... přidejte pravidla pro konkrétní roboty (GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot) s direktivou Allow.`
   - Problém: doporučuje `Allow` i pro GPTBot a ClaudeBot, přestože článek radí tréninkové spíš zvážit/omezit.
   - Dopad: přímý rozpor s hlavní doporučenou konfigurací.
   - Oprava: uvést jen `OAI-SearchBot, Claude-SearchBot, PerplexityBot, ChatGPT-User, Claude-User` a doplnit, že tréninkové se řeší zvlášť podle cíle.

3. **Ukázka „omezte tréninkové roboty“ neodpovídá textu**
   - Citace: sekce říká `omezte tréninkové roboty`, ale kód obsahuje:
     ```txt
     User-agent: GPTBot
     Disallow: /

     User-agent: Google-Extended
     Disallow: /

     User-agent: CCBot
     Disallow: /
     ```
   - Problém: chybí `ClaudeBot`, který je jinde veden jako tréninkový a je v „kompletní“ ukázce.
   - Dopad: čtenář při kopírování dostane neúplný příklad.
   - Oprava: doplnit `ClaudeBot` nebo vysvětlit, že jde jen o dílčí příklad.

## DOPORUČENÍ

1. **FAQ o AIPREF je na hraně konkrétnosti syntaxe**
   - Citace: `... dvě kategorie (train-ai a search) a hodnoty y nebo n, připojené HTTP hlavičkou Content-Usage nebo pravidlem v robots.txt.`
   - Problém: v těle správně píšete, že se může změnit i název hlavičky; ve FAQ to zní skoro jako hotová věc.
   - Oprava: přidat `v aktuálním znění draftu` hned před syntax.

2. **STATS „13+“ působí nafouknutě a neříká moc**
   - Citace: `13+ AI robotů a řídicích tokenů, které dnes řešíte`
   - Problém: není jasné, kdo přesně „řeší“, a číslo je marketingové, ne instrukční.
   - Oprava: buď zpřesnit (`Příklady 13 AI robotů a tokenů v článku`), nebo vyhodit.

3. **STATS draft/milník je trochu moc detailní na metadata**
   - Citace: `standard IETF pro AI preference zatím není hotový (AIPREF, srpen 2026 milník)`
   - Problém: „srpen 2026 milník“ rychle zastará a v boxu to vypadá autoritativněji než v těle.
   - Oprava: zkrátit na `IETF standard pro AI preference je zatím ve draftu`.

4. **„Tudy vedou citace“ je lehce přestřelené**
   - Citace: `Povolit. Tudy vedou citace v AI odpovědích.`
   - Problém: jako zkratka OK, ale zní to exkluzivně/garantovaně.
   - Oprava: `To je obvyklá cesta k novým citacím v AI odpovědích.`

5. **„Pro většinu českých webů“ není ničím podložené**
   - Citace: `Pro většinu českých webů... vypadá výsledek takhle`
   - Problém: zobecnění bez opory.
   - Oprava: `Časté výchozí nastavení` nebo `Praktický kompromis pro weby, které...`

## DROBNOST

1. **Logický šev mezi FAQ a tělem u výčtu robotů**
   - FAQ 1 jmenuje `ClaudeBot`, ale tělo pro citace pracuje s `Claude-SearchBot` a `Claude-User`.
   - Není to jen detail; po opravách je vidět, že FAQ vznikalo starší optikou.

2. **HowTo krok 3 je technicky moc obecný**
   - Citace: `Pro každého robota uveďte User-agent a Allow nebo Disallow.`
   - Problém: po zjemnění už skoro neříká, koho typicky povolit a koho omezit.
   - Oprava: doplnit stručný default: `Typicky povolte vyhledávací/on-demand a zvažte omezení tréninkových.`

3. **„Bytespider ... pravidla robots.txt často nedodržoval“ je tvrdší než jinde**
   - V FAQ máte opatrnější `opakovaně objevují veřejná hlášení a spory`.
   - Doporučuji sjednotit na opatrnější formulaci i v těle.

## Verdikt

Po opravách je text **výrazně lepší**, ale **ještě ne čistý**. Největší problém zůstal v **ANSWER**, **FAQ 1** a v **neúplné ukázce tréninkových robotů**. To jsou věci, které mohou čtenáře dovést k jinému nastavení, než doporučuje samotný článek.