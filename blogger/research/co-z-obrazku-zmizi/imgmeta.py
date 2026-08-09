# -*- coding: utf-8 -*-
"""Čtečka metadatových segmentů v JPEG a WebP — bez exiftoolu.

JPEG: prochází markery a hlásí, které APP segmenty tam jsou.
WebP: prochází RIFF chunky (EXIF, XMP, ICCP).
Vrací dict {segment: délka v bajtech}.
"""
import struct

JPEG_APP = {
    0xE0: 'APP0/JFIF', 0xE1: 'APP1', 0xE2: 'APP2/ICC', 0xE9: 'APP9',
    0xED: 'APP13/IPTC', 0xEE: 'APP14/Adobe', 0xFE: 'COM',
}


def jpeg_segments(data):
    out = {}
    if data[:2] != b'\xff\xd8':
        return None
    i = 2
    while i < len(data) - 1:
        if data[i] != 0xFF:
            i += 1
            continue
        m = data[i + 1]
        if m in (0xD8, 0x01) or 0xD0 <= m <= 0xD7:
            i += 2
            continue
        if m == 0xDA:  # start of scan → dál už jsou obrazová data
            break
        if i + 4 > len(data):
            break
        ln = struct.unpack('>H', data[i + 2:i + 4])[0]
        payload = data[i + 4:i + 2 + ln]
        name = JPEG_APP.get(m)
        if name == 'APP1':
            if payload.startswith(b'Exif\x00'):
                name = 'EXIF'
            elif b'ns.adobe.com/xap' in payload[:40] or payload.startswith(b'http://ns.adobe.com'):
                name = 'XMP'
            else:
                name = 'APP1/jiné'
        elif name == 'APP13/IPTC':
            name = 'IPTC' if b'Photoshop' in payload[:20] else 'APP13/jiné'
        elif name == 'APP11' or m == 0xEB:
            name = 'JUMBF/C2PA'
        if name:
            out[name] = out.get(name, 0) + len(payload)
        i += 2 + ln
    return out


def webp_chunks(data):
    out = {}
    if data[:4] != b'RIFF' or data[8:12] != b'WEBP':
        return None
    i = 12
    while i + 8 <= len(data):
        cid = data[i:i + 4].decode('latin-1')
        sz = struct.unpack('<I', data[i + 4:i + 8])[0]
        label = {'EXIF': 'EXIF', 'XMP ': 'XMP', 'ICCP': 'ICC'}.get(cid)
        if label:
            out[label] = sz
        i += 8 + sz + (sz & 1)
    return out


def read(data):
    """Vrátí (formát, {segment: bajty})."""
    if data[:2] == b'\xff\xd8':
        return 'JPEG', jpeg_segments(data) or {}
    if data[:4] == b'RIFF' and data[8:12] == b'WEBP':
        return 'WebP', webp_chunks(data) or {}
    if data[:8] == b'\x89PNG\r\n\x1a\n':
        out, i = {}, 8
        while i + 8 <= len(data):
            ln = struct.unpack('>I', data[i:i + 4])[0]
            typ = data[i + 4:i + 8].decode('latin-1', 'replace')
            if typ in ('eXIf', 'iTXt', 'tEXt', 'iCCP'):
                out[{'eXIf': 'EXIF', 'iTXt': 'XMP/iTXt',
                     'tEXt': 'tEXt', 'iCCP': 'ICC'}[typ]] = ln
            if typ == 'IEND':
                break
            i += 12 + ln
        return 'PNG', out
    return '?', {}


def fmt(segs):
    return ', '.join('%s %d B' % (k, v) for k, v in sorted(segs.items())) if segs else '— žádné —'
