# -*- coding: utf-8 -*-
"""Jaké kombinace AI opt-outů mají české weby v robots.txt.

Pointa: podle dokumentace (viz článek co-vypne-ktery-opt-out) řeší GPTBot
trénink a OAI-SearchBot zobrazení v ChatGPT. Zajímá mě, kolik webů má
jen jeden z nich — tedy nastavení, které dělá něco jiného, než se běžně čeká.
"""
import json, re, sys, urllib.request, time

UA = ('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 '
      '(KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36')

# user-agent → co podle dokumentace řeší
KIND = {
    'gptbot': 'trénink',
    'oai-searchbot': 'zobrazení',
    'chatgpt-user': 'uživatelem',
    'google-extended': 'trénink',
    'googlebot': 'vyhledávání',
    'applebot-extended': 'trénink',
    'applebot': 'vyhledávání',
    'seznam-extended': 'obojí',
    'seznambot': 'vyhledávání',
    'claudebot': 'trénink',
    'anthropic-ai': 'trénink',
    'claude-web': 'zobrazení',
    'perplexitybot': 'zobrazení',
    'perplexity-user': 'uživatelem',
    'ccbot': 'trénink',
    'bytespider': 'trénink',
    'amazonbot': 'trénink',
    'meta-externalagent': 'trénink',
    'bingbot': 'vyhledávání',
}


def get(url, timeout=20):
    try:
        req = urllib.request.Request(url, headers={'User-Agent': UA})
        with urllib.request.urlopen(req, timeout=timeout) as r:
            return r.read(400000).decode('utf-8', 'replace'), r.status
    except Exception as e:
        return None, getattr(e, 'code', str(e)[:50])


def parse_groups(txt):
    """Vrátí {user-agent (lower): True} pro ty, kteří mají aspoň jeden Disallow s hodnotou."""
    out, current = {}, []
    for raw in (txt or '').splitlines():
        s = raw.split('#')[0].strip()
        if not s:
            continue
        m = re.match(r'(?i)^user-agent\s*:\s*(.+)$', s)
        if m:
            ua = m.group(1).strip().lower()
            # nová skupina začíná po řádku s pravidlem
            if out.get('_just_rule'):
                current = []
                out['_just_rule'] = False
            current.append(ua)
            continue
        m = re.match(r'(?i)^disallow\s*:\s*(.*)$', s)
        if m and current:
            val = m.group(1).strip()
            out['_just_rule'] = True
            if val:                      # Disallow: (prázdný) = povoleno
                for ua in current:
                    out[ua] = True
        elif re.match(r'(?i)^(allow|crawl-delay|sitemap|request-rate)\s*:', s) and current:
            out['_just_rule'] = True
    out.pop('_just_rule', None)
    return out


def main():
    doms = json.load(open(sys.argv[1]))
    res = []
    for i, d in enumerate(doms, 1):
        d = d.replace('https://', '').replace('http://', '').strip('/')
        txt, code = get('https://%s/robots.txt' % d)
        rec = {'domain': d, 'http': code}
        if txt is None:
            rec['error'] = True
            res.append(rec)
            print('%3d %-32s CHYBA %s' % (i, d, code))
            continue
        g = parse_groups(txt)
        blocked = sorted(ua for ua in g if ua in KIND)
        rec['blocked'] = blocked
        rec['bytes'] = len(txt)
        has = lambda x: x in blocked
        rec['gptbot'] = has('gptbot')
        rec['oai_search'] = has('oai-searchbot')
        rec['google_ext'] = has('google-extended')
        rec['googlebot'] = has('googlebot')
        rec['seznam_ext'] = has('seznam-extended')
        rec['apple_ext'] = has('applebot-extended')
        res.append(rec)
        print('%3d %-32s %s' % (i, d, ', '.join(blocked) if blocked else '—'))
        time.sleep(0.25)
    json.dump(res, open('optout_mix.json', 'w'), ensure_ascii=False, indent=1)
    print('\nuloženo optout_mix.json')


if __name__ == '__main__':
    main()
