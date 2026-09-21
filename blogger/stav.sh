#!/usr/bin/env bash
# Vypíše MĚŘENÝ stav obsahového pipeline. Nahrazuje čísla, která dřív bydlela
# v blogger/CLAUDE.md § VII a zastarala do jednoho runu (17. 9. 2026 tam stálo
# 172 článků a slovník v70, o tři dny později to bylo 175 a v71).
#
#   bash blogger/stav.sh
set -euo pipefail
cd "$(git rev-parse --show-toplevel)"

echo "== Stav bloggera · $(date '+%-d. %-m. %Y %H:%M')"
echo "Článků v src/content/articles:  $(ls src/content/articles/*.mdx | wc -l | tr -d ' ')"

python3 - <<'PY'
import csv
rows = list(csv.reader(open('blogger/obsahovy-plan.csv', newline='', encoding='utf-8')))
data = rows[1:]
volne = [r for r in data if len(r) > 4 and r[4].strip().lower() == 'ne']
print(f'Obsahový plán:                 {len(data)} řádků, {len(volne)} volných')
print(f'První volný řádek:             {volne[0][0] if volne else "— plán vyčerpán"}')
PY

echo "Složek v blogger/research:      $(ls -d blogger/research/*/ | wc -l | tr -d ' ')"
echo "Verze slovníku:                 v$(sed -n 's/.*\*\*Verze: \([0-9]*\)\*\*.*/\1/p' blogger/JAZYK_SLOVNIK.md | head -1)"
echo "Pravidel ve slovníku:           $(grep -cE '^\| *(⛔|⚠️) *\| *`' blogger/JAZYK_SLOVNIK.md)"
echo "REFRESH_QUEUE — ve frontě:      $(awk '/^## Fronta/{f=1;next}/^## /{f=0}f&&/^[-|]/{c++}END{print c+0}' blogger/REFRESH_QUEUE.md)"
echo "REFRESH_QUEUE — kandidáti:      $(awk '/^## Otevřené kandidáty/{f=1;next}/^## /{f=0}f&&/^[-|]/{c++}END{print c+0}' blogger/REFRESH_QUEUE.md)"

echo
echo "-- Posledních 8 zásahů do blogu (kdo co kdy; kadence 2+1+1 se čte odtud)"
git log --format='   %ad · %h · %s' --date=format:'%-d. %-m. %H:%M' -8 -- src/content/articles blogger

echo
echo "-- Souběh: vzdálená větev"
git fetch -q origin 2>/dev/null || echo "   (fetch neproběhl — offline?)"
echo "   origin/main: $(git log --format='%h %s' origin/main -1)"
behind=$(git rev-list --count HEAD..origin/main)
echo "   lokálně chybí commitů: $behind"
