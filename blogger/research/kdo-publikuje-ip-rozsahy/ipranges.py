# -*- coding: utf-8 -*-
"""Kdo z provozovatelů robotů publikuje strojově čitelný seznam IP rozsahů.

Pro každý soubor zaznamená: stavový kód, Content-Type, délku, jestli je to
opravdu JSON s prefixy, kolik jich je, kolik z toho IPv6 a datum uvnitř.

Poučeno z minula: stavový kód NENÍ doklad existence. Rozhoduje typ a obsah.
"""
import json, urllib.request, ssl, re

UA = ('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 '
      '(KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36')

# (provozovatel, robot/účel, kandidátní adresy podle dokumentace nebo konvence)
TARGETS = [
    ('OpenAI', 'GPTBot (trénink)', ['https://openai.com/gptbot.json']),
    ('OpenAI', 'OAI-SearchBot (vyhledávání)', ['https://openai.com/searchbot.json']),
    ('OpenAI', 'ChatGPT-User (na žádost uživatele)', ['https://openai.com/chatgpt-user.json']),
    ('Anthropic', 'ClaudeBot a spol.', ['https://claude.com/crawling/bots.json',
                                        'https://www.anthropic.com/claudebot.json']),
    ('Perplexity', 'PerplexityBot', ['https://www.perplexity.ai/perplexitybot.json']),
    ('Perplexity', 'Perplexity-User', ['https://www.perplexity.ai/perplexity-user.json']),
    ('Google', 'Googlebot', ['https://developers.google.com/static/search/apis/ipranges/googlebot.json']),
    ('Google', 'zvláštní roboti', ['https://developers.google.com/static/search/apis/ipranges/special-crawlers.json']),
    ('Google', 'vyvolaní uživatelem', ['https://developers.google.com/static/search/apis/ipranges/user-triggered-fetchers.json']),
    ('Apple', 'Applebot', ['https://search.developer.apple.com/applebot.json']),
    ('Microsoft', 'Bingbot', ['https://www.bing.com/toolbox/bingbot.json']),
    ('ByteDance', 'Bytespider', ['https://www.bytedance.com/en/bots.json',
                                 'https://www.bytedance.com/bytespider.json',
                                 'https://bytespider.bytedance.com/bots.json']),
    ('Amazon', 'Amazonbot', ['https://developer.amazon.com/amazonbot.json',
                             'https://www.amazon.com/amazonbot.json']),
    ('Common Crawl', 'CCBot', ['https://commoncrawl.org/ccbot.json',
                               'https://index.commoncrawl.org/ccbot.json']),
    ('Meta', 'Meta-ExternalAgent', ['https://developers.facebook.com/meta-externalagent.json',
                                    'https://www.facebook.com/meta-externalagent.json']),
    ('Mistral', 'MistralAI-User', ['https://mistral.ai/mistralai-user.json']),
    ('Cohere', 'cohere-ai', ['https://cohere.com/cohere-ai.json']),
    ('DuckDuckGo', 'DuckAssistBot', ['https://duckduckgo.com/duckassistbot.json']),
]


def fetch(url, timeout=20):
    ctx = ssl.create_default_context()
    req = urllib.request.Request(url, headers={'User-Agent': UA})
    try:
        with urllib.request.urlopen(req, timeout=timeout, context=ctx) as r:
            body = r.read(600000)
            return {'http': r.status, 'ctype': r.headers.get('Content-Type', ''),
                    'bytes': len(body), 'body': body}
    except Exception as e:
        return {'http': getattr(e, 'code', str(e)[:60]), 'ctype': '', 'bytes': 0, 'body': b''}


def analyse(res):
    """Je to opravdu strojový seznam prefixů?"""
    out = {'json': False, 'prefixes': 0, 'ipv6': 0, 'date': None}
    if res['bytes'] == 0:
        return out
    txt = res['body'].decode('utf-8', 'replace').lstrip()
    if txt[:1] not in '{[':
        return out
    try:
        d = json.loads(txt)
    except Exception:
        return out
    out['json'] = True
    blob = json.dumps(d)
    out['prefixes'] = len(re.findall(r'"ipv[46]Prefix"', blob))
    out['ipv6'] = len(re.findall(r'"ipv6Prefix"', blob))
    for k in ('creationTime', 'lastUpdated', 'updated', 'generated'):
        if isinstance(d, dict) and k in d:
            out['date'] = str(d[k])[:19]
            break
    return out


rows = []
for op, bot, urls in TARGETS:
    rec = {'operator': op, 'bot': bot, 'found': False, 'url': None, 'tried': []}
    for u in urls:
        r = fetch(u)
        a = analyse(r)
        rec['tried'].append({'url': u, 'http': r['http'], 'ctype': r['ctype'][:40],
                             'bytes': r['bytes'], **a})
        if a['json'] and a['prefixes'] > 0:
            rec.update({'found': True, 'url': u, 'http': r['http'],
                        'ctype': r['ctype'][:40], 'bytes': r['bytes'], **a})
            break
    flag = '✓' if rec['found'] else '—'
    detail = ('%d prefixů, z toho %d IPv6%s' % (rec.get('prefixes', 0), rec.get('ipv6', 0),
              (', datum ' + rec['date']) if rec.get('date') else '')) if rec['found'] else \
             ('nenalezeno: ' + ', '.join('%s→%s' % (t['url'].split('/')[2], t['http']) for t in rec['tried']))
    print('%s %-13s %-34s %s' % (flag, op, bot, detail))
    rows.append(rec)

json.dump(rows, open('ipranges_results.json', 'w'), ensure_ascii=False, indent=1)
n = sum(1 for r in rows if r['found'])
print('\nnalezeno %d z %d sledovaných souborů' % (n, len(rows)))
