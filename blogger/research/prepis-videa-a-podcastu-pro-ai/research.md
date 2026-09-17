# Přepis videa a podcastu pro AI — podklady

Datum ověření: 17. 9. 2026. Český trh. Nový tutorial, řádek 117 obsahového plánu; kategorie D=tutorial. Slug `prepis-videa-a-podcastu-pro-ai`.

## A — výběr a kontrola duplicity

Proveden sken metadat všech 168 článků (soubor, title, slug, tags), cílený H2 filtr přepis/video/podcast/feed/GTIN v článcích, sekcích a pilíři. Celé přečteny tři blízké články:

- `produktovy-feed-gtin.mdx`: identifikátory, obsah feedu, shoda cena/dostupnost/stránka, údržba. První volný řádek 115 „produktovy feed pro ai“ by opakoval jeho základní záměr. Přeskočen BEZE ZMĚNY.
- `youtube-pro-ai-viditelnost.mdx`: kanál YouTube, popis, kapitoly, citace; zmiňuje přepis, ale neukazuje redakční kontrolu a publikaci samostatně čitelného textu.
- `videoobject-strukturovana-data.mdx`: technické značení videa. Přepis doporučuje, neposkytuje redakční postup.

Nový článek se liší konkrétní prací s nahrávkou: co zachovat, co opravit, jak označit doplnění z obrazu a redakční poznámky, jak zveřejnit a zkontrolovat HTML přepisu. Zahrnuje podcast i video, netvrdí růst citací a neopakuje návod na YouTube Studio či VideoObject.

### Rozpor teze plánu se zdroji

Nadpis řádku 117 říká „obsah, který AI nevidí“. To obecně neplatí. Gemini API umí zpracování videa (viz S1), Google Search umí pracovat s video soubory (S7). Schopnost modelu zpracovat dodané video ovšem NEDOKAZUJE, že ho konkrétní vyhledávací služba automaticky získá a použije. Nosná teze: zpřístupnit ověřitelnou textovou podobu vlastního obsahu, nikoli obcházet údajnou slepotu AI. Text „Data:“ v plánu byl posouzen jako hypotéza.

### Nálezy pro samostatný nástroj aktualizací — bez úprav starých článků

- YouTube článek používá nedoložené zobecnění „Většina AI systémů video nepřehrává“ a „Cesta k citaci ... ne obraz“. Není jasný vzorek systémů ani režim použití. Pro revizi srovnat S1 a S7, oddělit modelové schopnosti od vyhledávací infrastruktury.
- VideoObject článek úvodem tvrdí, že vyhledávač vidí soubor, kterému bez další pomoci nerozumí. Opět příliš obecné vzhledem k S1 a S7. Nový článek tuto tezi nepřebírá. Staré články neopraveny, plánové řádky nezměněny.

## A1 — širší trendový průchod

- Seznam: https://blog.seznam.cz/2026/05/seznam-asistent-je-dostupny-vsem-prihlasenym-uzivatelum/ — beta pro přihlášené, české zdroje a ekosystém. https://blog.seznam.cz/2026/06/novinka-v-seznam-asistentovi-pod-odpovedmi-se-zobrazuji-inzeraty-z-skliku/ — reklama není organická citace. Nenalezeno doložené zvláštní pravidlo pro přepisy; nevymýšlet ho.
- Google: https://developers.google.com/search/blog/2026/05/a-new-resource-for-optimizing — průvodce z 15. 5. 2026 pokrývá původní obsah, obrázky/video, lokální a nákupní témata. https://developers.google.com/search/docs/fundamentals/ai-optimization-guide — užitečnost, původní zkušenost a struktura, nikoli výroba stránek pro každou variantu dotazu.
- Roboti: https://blog.cloudflare.com/ai-redirects/ — směrování trénovacích robotů k aktuálnímu obsahu; https://blog.cloudflare.com/content-signals-policy/ — deklarace preferencí použití. Odlišit vyhledávání od trénování, témata už má korpus/plán.
- Měření/citace: https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview — citované URL a agregace podporovaných služeb, nikoli univerzální pořadí či hodnocení kvality. Pokryto existujícím článkem o Bing AI Performance.
- E-shopy: https://openai.com/index/powering-product-discovery-in-chatgpt/ — produktové feedy a ACP. Náleží k již pokrytému nakupování a plánovaným protokolům ACP/UCP.
- Novinka 16. 9. 2026: https://openai.com/index/reimagining-advertising-with-ai/ — reklamy a aplikace pro obchodníky Shopify v USA. Z výsledku nelze dovodit dostupnost pro český e-shop. Bez hlubšího ověření české použitelnosti nezařazuji jako nový praktický návod.
- Perplexity: https://www.perplexity.ai/hub — průběžné webové zdroje a citace; nenalezena nová samostatná potřeba pro českého provozovatele.

**A5: žádný nový řádek.** Průchod přinesl hlavně upřesnění již pokrytých témat; u nové reklamy chybí ověřená česká použitelnost. Frontu nenafukuji kvótou.

## B2 — Marketing Miner a obohacení

Použit skill marketing-miner-api, připravené venv v `~/.claude/skills/marketing-miner-api/`; žádné instalace. Volby provedeny autonomně podle uživatele, bez potvrzování mezifází. Hrubé výstupy v `/tmp/prepis-ai-run/`, do repa jen interpretace.

Dva seedy „přepis videa“, „přepis podcastu“ × 4 typy suggestions (výchozí, questions, new, trending): všech 8 odpovědí úspěšných, 0 návrhů. Nominální cena 80 kreditů; search-volume 10 výrazů, deklarováno 30 kreditů. Celkem podle sazeb 110 kreditů (pole export_credits_cost=0 u prázdných suggestions není audit zůstatku účtu).

| Dotaz | Průměrná hledanost podle API | YoY | CPC |
|---|---:|---:|---:|
| přepis zvuku na text | 150 | +2 % | 14,41 Kč |
| titulky k videu | 40 | −23 % | 3,76 Kč |
| ai seo | 130 | +34 % | 43,96 Kč |

Bez vrácených dat: přepis videa, přepis podcastu, přepis videa do textu, přepis audia na text, automatický přepis, transkripce videa, přepis videa pro ai. Nejde o doloženou nulovou poptávku. YoY AI SEO je široká metrika, nikoli růst poptávky po přepisech. Pokles titulků −23 % rovněž nevztahovat na vybrané téma. Měsíční data bez úplné časové osy nepoužita k odvození sezónního efektu.

Google Suggest:
- přepis videa → přepis videa na text; prepis videa na youtube; přepis z videa do textu.
- přepis podcastu → přepis podcastu na text.
- přepis zvuku na text → zdarma; word; google.
- titulky k videu → automatické titulky k videu; jak udělat titulky k videu; platformové dotazy Instagram/YouTube/Canva.

YouTube Suggest: použitelné „přepis videa na youtube“, „jak udělat titulky k videu“. Šum „přepis zvuku na textil“, „přepis videa na světě“ vyřazen. Wikipedia u čtyř tematických dotazů nic; AISEO je název nástroje a jeho 97 zobrazení není zájem o obor ani přepisy, vyřazeno.

Trends první pokus CZ, today 5-y, 5 KW: HTTP 429 při prvním keywordu, zbytek neproveden. Prázdný JSON zde znamená selhání služby, NIKOLI nula rising queries. Druhý pokus pro 2 hlavní KW a today 12-m rovněž skončil HTTP 429 při prvním dotazu. Trendovou křivku ani rising queries tedy nelze vyhodnotit; dále používáme Suggest a doložené praktické problémy.

## Konkurence a hledaný záměr

https://www.beey.io/cs/docs/manual/rychly-start/ a https://www.beey.io/cs/docs/manual/aplikace/link/ řeší získání nahrávky/přepisu v aplikaci. https://www.beey.io/cs/tutorialy/ obsahuje úpravy a nadpisy. https://support.google.com/youtube/answer/15930243?hl=cs řeší zobrazení přepisu na YouTube. V ověřeném vzorku převládá práce s nástrojem; náš užitek je kontrolní a publikační postup pro vlastní stránku. Nejde o úplný audit českého SERPu ani tvrzení, že konkurence přepisy na webu vůbec neřeší. Doménové statistiky celé platformy by neodpovídaly úzkému záměru, proto nevolány.

## Primární zdroje a meze použití

| ID | URL | Co dokládá / omezení |
|---|---|---|
| S1 | https://ai.google.dev/gemini-api/docs/video-understanding | Gemini API zpracuje dodané video a vizuální informace. Nejde o důkaz automatického zpracování všech videí při webovém vyhledávání. |
| S2 | https://www.w3.org/WAI/media/av/transcripts/ | Přepis obsahuje relevantní zvuk i důležité vizuální informace; HTML, označení mluvčích, odstavce, jasně označené doplnění, umístění u média. Pravidla použitelnosti, nikoli studie zvýšení AI citací. |
| S3 | https://www.w3.org/WAI/media/av/transcribing/ | Kontrola proti nahrávce, význam záporu, přesnost, nesrozumitelné místo a úprava nepodstatných výplní bez posunu významu. |
| S4 | https://www.w3.org/WAI/media/av/captions/ | Titulky jsou synchronizované se zvukem; přepis a titulky slouží různým způsobům čtení. |
| S5 | https://support.google.com/youtube/answer/6373554?hl=cs | Automatické titulky mohou být chybné, vždy zkontrolovat a opravit; čeština podporovaná pro nahraná videa. Není záruka titulků u každého videa. |
| S6 | https://developers.google.com/search/docs/appearance/ai-features | Důležitý obsah textem; supporting link musí být indexovaný a způsobilý k úryvku; žádná další speciální AI strukturovaná data; ani splnění nezaručí zobrazení. |
| S7 | https://developers.google.com/search/docs/appearance/video | Odlišná pravidla videovýsledků, dostupnost souborů, watch page. Běžný textový výsledek není totéž co zařazené video. |
| S8 | https://developers.google.com/search/docs/crawling-indexing/javascript/lazy-loading | Google Search neinteraguje klikáním pro načtení obsahu; ověření vykresleného HTML přes kontrolu URL. |
| S9 | https://www.beey.io/cs/docs/manual/rychly-start/ | Český příklad převodu souboru v nástroji; do článku nepřebíráme cenu ani přesnost. |

Vlastní doporučení: pořadí redakčních kontrol, příklad s tlačítkem Uložit, prioritizace jmen/čísel/záporů, tematická stránka se shrnutím a přepisem, evidence dotazu/URL/dne při sledování. Nejde o vlastní experiment s růstem AI citací. Příklad bude výslovně modelový, ne klientská data. Záměrně žádné právní závěry o povinné přístupnosti.

## FAQ — původ každé otázky

Rising queries kvůli 429 nepoužitelné; využity další vrstvy, žádné vymyšlené naměřené četnosti.
1. Jak převést české video do textu? — Suggest „přepis videa na text“, „prepis videa na youtube“; S5 a S9 dokládají postup.
2. Stačí automatické titulky? — Suggest „automatické titulky k videu“ + konkrétní problém S5 a předchozího YouTube článku.
3. Stačí u podcastu krátké shrnutí? — Suggest „přepis podcastu na text“ je obecný záměr; konkrétní otázka z praktického rozdílu úplný text/shrnutí popsaného v předchozím VideoObject článku. Není doslovný dotaz ze Suggest.
4. Musí být přepis doslovný? — dokumentovaný praktický problém věrnosti a výplňových slov v S3.
5. Kam dát přepis na vlastním webu? — dokumentovaný publikační problém v S2 „Where to Put Transcripts“ a doporučení vlastního webu v předchozím YouTube článku.
6. Zajistí přepis citaci v AI odpovědi? — předchozí VideoObject FAQ výslovně řeší záruky, omezení doloženo S6. Není tvrzení o hledanosti otázky.

## Redakční rozhodnutí

České příklady; title 50–60 znaků, seoTitle samostatně do 60 (bez dolního limitu). Kategorie tutorial, tags obsah + technicke-zaklady. CTA AI SEO Wireframe Pack 1 490 Kč: aktuální data ověřena v `src/content/pages/pack.ts` (Product offer + FAQ). Pouze šablona blogového článku, neslibovat specializovanou šablonu přepisů. V tonalita.md se sedm typů stránek shoduje s hlavním popisem pack.ts, ale jeho izolovaný řetězec má osm; číslování nepotřebujeme a do CTA nepřebíráme. Žádné zásahy mimo vlastní nový článek a povolené artefakty.

### Doplnění ze závěrečného auditu

S10: https://support.google.com/webmasters/answer/9012289?hl=cs — odlišuje živý test aktuální publikované stránky a uloženou indexovanou verzi. Do článku doplněn konkrétní postup a limit živého testu. Doplněny také významové zvuky v praktických krocích podle S3. CTA doplněno o „bez DPH“ dle pack.ts:157; rozpor sedm/osm typů se nabídce v článku vyhnul.
