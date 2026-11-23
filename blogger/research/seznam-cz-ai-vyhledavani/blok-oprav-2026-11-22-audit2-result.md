# Audit kola 2 (jazyk, struktura, kontrola vypořádání) — blok oprav „Seznam Asistent → Seznam AI“ (22.–23. 11. 2026)

> Auditor: nezávislý Claude subagent (čerstvý kontext) se zadáním `zadani-audit2.md` (auditor-system + osa jazyk
> a struktura), náhrada za Codex (limit do 24. 11. 2026 15:01, rozhodnutí Kamila 23. 11. 2026). Zkrácený přepis výstupu.

## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

0 BLOCKER · 4 WARNING · 9 TIP (3 mimo blok). Žádný řádek „Zapracováno“ nezůstal jako zbytková vada; po opravě nálezů 1–4
lze publikovat bez dalšího kola. Vypořádání kola 1: 22 z 25 přijato, 3 částečně (č. 5, 9 a předání adminovi přes board,
které v době auditu ještě neproběhlo).

1. **[WARNING]** `zbozi-cz-pro-ai` ř. 4, 5, 45 — „v něm“ se sváže se Zboží.cz místo se Seznam AI („ve kterém“, „kde“).
2. **[WARNING]** `seznam-cz-ai-vyhledavani` ř. 33 a 169 — „bez zveřejněných čísel o tom, kolik lidí ho používá“ odporuje
   tiskové zprávě z 15. 10. 2026, kterou blok nově cituje („vyšší statisíce“ uživatelů týdně).
3. **[WARNING]** `ai-sumarizace-a-vydavatele` ř. 61 — ženský rod („ze kterého čerpala“).
4. **[WARNING]** Zdvojení: `seznam-asistent-sellma` ř. 116 „Seznam AI podle Seznamu čerpá“; `google-cituje-sam-sebe` ř. 29
   tři „Seznam“ v jedné vazbě.
5. **[TIP]** `seznam-cz-ai-vyhledavani` ř. 60 — dvě tiskové zprávy v odstavci, „odporují“ míří na květnovou; dvojitá závorka.
6. **[TIP]** `seznam-cz-ai-vyhledavani` ř. 23 — FAQ odpovídá na „jak souvisí“ až na konci; přestavět.
7. **[TIP]** Poznámka o doplnění po datu stavu (`zbozi-cz-pro-ai` ř. 47; patička seznam-cz „potvrzení přejmenování“).
8. **[TIP]** `ai-sumarizace-a-vydavatele` ř. 51 — dvakrát „partnerská nápověda“.
9. **[TIP]** `seznam-asistent-sellma` ř. 29 — odpověď FAQ bez podmětu („nástroj“).
10. **[TIP]** Kostrbatý slovosled: `oborove-katalogy-ai` ř. 94, `recenze-srovnavace-pro-ai` ř. 29, `geo-optimalizace` ř. 41.
11. **[TIP – mimo blok]** `jak-se-dostat-do-ai-odpovedi` ř. 203 „testujte odhlášeně“ — Seznam AI vyžaduje přihlášení.
12. **[TIP – mimo blok]** Přejmenované H2 bez `hl` a `strong` (celé články je mají prosté; sjednotit při refreshi).
13. **[TIP – mimo blok]** `geo-optimalizace` FAQ ř. 41 — „schema“, „tracking výskyt v AIO pro CZ keywords“, „guest posty“, „notability criteria“.

Co sedí: pět nových odkazů na tiskovou zprávu (syntaxe, text odkazu, adresa shodná s `oborove-katalogy-ai`), CTA
`test-viditelnosti-v-ai` odpovídá FAQ v `audit.ts`, popisy 137–158 znaků, krátké odpovědi 44–56 slov, kotvy, předložky
„ze / se Seznam AI“, `jazyk-check.py` 0 nálezů na všech 17 kopiích.
