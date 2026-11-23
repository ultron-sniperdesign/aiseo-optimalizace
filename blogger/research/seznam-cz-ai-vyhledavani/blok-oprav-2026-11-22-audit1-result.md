# Audit kola 1 (fakta) — blok oprav „Seznam Asistent → Seznam AI“ (22. 11. 2026)

> Auditor: nezávislý Claude subagent (čerstvý kontext) se zadáním `zadani-audit1.md` (auditor-system + osa fakta),
> protože Codex měl vyčerpaný limit do 24. 11. 2026 15:01 — rozhodnutí Kamila 23. 11. 2026. Ověřoval jen proti
> textům zdrojů ve složce (tisková zpráva Seznamu 15. 10. 2026, nápověda Seznam AI, partnerská nápověda, `audit.ts`).
> Text níže je zkrácený přepis výstupu auditora (nálezy, doklady a návrhy beze změny smyslu).

## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

21 nálezů: 0 BLOCKER, 6 WARNING, 15 TIP (z toho 9 „mimo blok“). Věcně blok sedí: přejmenování dokládá tisková
zpráva z 15. 10. 2026 („Seznam AI (dříve Seznam Asistent)“), žádná změna nevytváří nepravdivé současné tvrzení
a v článcích nezůstal starý název použitý jako současný. Verdikt stojí na nálezech 1–6.

Zařazení všech výskytů „Seznam Asistent“ a „Asistent“ v 17 článcích: dovětek u současného názvu, historická zmínka
nebo citace (datované události a zdroje), obecné „asistent“, klíčová slova, URL a domény, hodnoty UTM — nic jako
současný název.

## Nálezy

1. **[WARNING] CTA v `test-viditelnosti-v-ai` mění rozsah produktu místo přejmenování.** `audit.ts` v FAQ (ř. 486–487)
   Seznam výslovně zahrnuje („Zahrnuje audit i Seznam Asistenta?“ — „Ano, v rozsahu, který dává smysl pro český trh…“),
   původní věta byla doložená. Oprava: jen přejmenovat („… i Seznam AI“).
2. **[WARNING] Dovětek „(dříve Seznam Asistent)“ u první zmínky chybí** v `google-cituje-sam-sebe`, `gsc-ai-segmenty-mereni`,
   `jak-ai-cituje-zdroje`, `jazykove-mutace-pro-ai`; v `test-viditelnosti-v-ai` je jen ve FAQ, první viditelná zmínka je štítek
   tabulky. Seznam je sám v přechodu (titulek nápovědy „Nápověda Seznam Asistent“).
3. **[WARNING] Ženský rod v `seznam-cz-ai-vyhledavani`** (ř. 33, 64, 169: „ji používá“, „na ní“, „Kdo ji má“) vedle
   mužského rodu opraveného místa ř. 23. Opravit jen rod.
4. **[WARNING] Kruhová věta v `ai-sumarizace-a-vydavatele` ř. 51** — „Seznam AI“ je v článku souhrnné jméno AI funkcí
   a po změně se tak jmenuje i jedno ze tří míst. Oprava: „samotný chat Seznam AI (partnerská nápověda ho ještě vede jako
   Seznam Asistent)…“.
5. **[WARNING] Zdvojení „Seznam … Seznam AI“** — `google-cituje-sam-sebe` ř. 29 („Seznam u Seznam AI jmenuje“),
   `jak-se-dostat-do-ai-odpovedi` ř. 55 („Seznam se Seznam AI“ se čte jako zvratné „se“).
6. **[WARNING] Tisková zpráva z 15. 10. 2026 bez odkazu a mimo řádky „Zdroje:“** v `seznam-cz-ai-vyhledavani`
   (ř. 23, 60, 76, patička 179) a `zbozi-cz-pro-ai` (ř. 51, 60). Doplnit odkaz (URL jako v `oborove-katalogy-ai` ř. 94)
   a ověřit, že vede na tutéž zprávu.
7. **[TIP]** `seznam-asistent-sellma` ř. 80: listopadový cíl pod novým jménem → „provozovat asistenta (dnes Seznam AI)…“.
8. **[TIP]** `ai-sumarizace-a-vydavatele`: popisek ř. 93 „Asistent (dnes Seznam AI)“, ř. 104 jako hodnoty UTM, ř. 51 „ještě“ datovat.
9. **[TIP]** `zbozi-cz-pro-ai` ř. 4, 5, 45: „svého asistenta (dnes Seznam AI)“ místo dvou služeb / „kterého nápověda už nazývá“.
10. **[TIP]** Dva přejmenované H2 mění kotvy — prohledat `src/` na staré kotvy.
11. **[TIP]** `seznam-asistent-sellma` ř. 42: opakování jména v jedné větě.
12. **[TIP]** `updated` 22. 11. u článků se starším „Stav k …“ — patičky jsou pravdivé, nechat; čtyři články
    (seznam-cz-ai-vyhledavani, seznam-asistent-sellma, zbozi-cz-pro-ai, oborove-katalogy-ai) zapsat jako prioritní refresh.
13. **[TIP – mimo blok]** Starý název v `audit.ts` (ř. 192, 486–487) a ve slovníku — adminovi přes board.
14. **[TIP – mimo blok]** `seznam-cz-ai-vyhledavani`: modely (OpenAI × nápověda SeLLMa + Gemma), zdroje (Firmy.cz už
    ve výčtu), počet uživatelů („vyšší statisíce týdně“ podle zprávy), seznam.ai.
15. **[TIP – mimo blok]** `seznam-asistent-sellma`: Gemma chybí, výčet zdrojů jen květnový, Zboží.cz doložené jen říjnovou
    zprávou; gramatika ř. 108 „by ji spolehlivě oddělila“.
16. **[TIP – mimo blok]** `jak-se-dostat-do-ai-odpovedi` ř. 133 „stojí na vlastním modelu“ (SeLLMa + Gemma), ř. 139 text odkazu.
17. **[TIP – mimo blok]** `zbozi-cz-pro-ai` tabulka ř. 53–58 bez říjnové zprávy, ř. 56 zastaralý výčet.
18. **[TIP – mimo blok]** `oborove-katalogy-ai` ř. 99 — Firmy.cz už ve výčtu nápovědy je.
19. **[TIP – mimo blok]** `test-viditelnosti-v-ai` radí odhlášený test, Seznam AI ale vyžaduje přihlášení.
20. **[TIP – mimo blok]** „Rozšíření je marginální“ bez zdroje (`ai-search-trendy-cesko-2026` ř. 154, `geo-optimalizace` ř. 41).
21. **[TIP – mimo blok]** Neukotvený čas: `recenze-srovnavace-pro-ai` ř. 133 „dnes ráno“, `firmy-cz-pro-ai` ř. 41 „Od letoška“.
