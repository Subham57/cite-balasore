import json, os, math, hashlib

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUB = os.path.join(ROOT, "public", "images")

PALETTE = [
    ("#7A69F5", "#372B8A"),
    ("#2FC3AC", "#0F8377"),
    ("#5A4FCF", "#281F63"),
    ("#17A398", "#0F8377"),
    ("#9689FF", "#4739B0"),
]

def pick_colors(key):
    h = int(hashlib.md5(key.encode()).hexdigest(), 16)
    return PALETTE[h % len(PALETTE)]

ICONS = {
    "web-dev-fundamentals": "</> ",
    "react-frontend": "⚛",
    "python-programming": "Py",
    "java-programming": "Jv",
    "digital-marketing": "▲",
    "graphic-design": "✎",
    "tally-accounting": "₹",
    "ms-office": "▦",
    "hardware-networking": "⛁",
    "data-analytics": "📊",
}

def course_svg(key, label, w=640, h=440):
    c1, c2 = pick_colors(key)
    icon = ICONS.get(key, "◆")
    gid = f"g_{key.replace('-', '_')}"
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}">
  <defs>
    <linearGradient id="{gid}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{c1}"/>
      <stop offset="100%" stop-color="{c2}"/>
    </linearGradient>
  </defs>
  <rect width="{w}" height="{h}" fill="url(#{gid})"/>
  <circle cx="{w-70}" cy="70" r="150" fill="rgba(255,255,255,0.08)"/>
  <circle cx="60" cy="{h-40}" r="110" fill="rgba(255,255,255,0.07)"/>
  <g transform="translate({w/2},{h/2 - 20})">
    <circle r="80" fill="rgba(255,255,255,0.14)"/>
    <text x="0" y="28" font-family="'Space Grotesk', Arial, sans-serif" font-size="64" font-weight="700" fill="#ffffff" text-anchor="middle">{icon}</text>
  </g>
  <text x="{w/2}" y="{h - 42}" font-family="'Inter', Arial, sans-serif" font-size="26" font-weight="600" fill="#ffffff" text-anchor="middle" opacity="0.95">{label}</text>
</svg>'''
    return svg

def achievement_svg(key, label, w=520, h=520):
    c1, c2 = pick_colors(key)
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}">
  <defs>
    <linearGradient id="g_{key}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{c1}"/>
      <stop offset="100%" stop-color="{c2}"/>
    </linearGradient>
  </defs>
  <rect width="{w}" height="{h}" fill="url(#g_{key})"/>
  <g transform="translate({w/2},{h/2 - 30})" fill="#ffffff">
    <polygon points="0,-90 21,-28 88,-28 33,10 54,72 0,34 -54,72 -33,10 -88,-28 -21,-28"
      fill="rgba(255,255,255,0.92)"/>
  </g>
  <text x="{w/2}" y="{h - 50}" font-family="'Inter', Arial, sans-serif" font-size="24" font-weight="600" fill="#ffffff" text-anchor="middle">{label}</text>
</svg>'''
    return svg

def about_svg(key, label, w=800, h=560):
    c1, c2 = pick_colors(key)
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}">
  <defs>
    <linearGradient id="g_{key}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{c1}"/>
      <stop offset="100%" stop-color="{c2}"/>
    </linearGradient>
  </defs>
  <rect width="{w}" height="{h}" fill="url(#g_{key})"/>
  <rect x="60" y="60" width="{w-120}" height="{h-120}" rx="28" fill="rgba(255,255,255,0.10)" stroke="rgba(255,255,255,0.35)" stroke-width="2"/>
  <circle cx="{w*0.28}" cy="{h*0.42}" r="70" fill="rgba(255,255,255,0.25)"/>
  <rect x="{w*0.45}" y="{h*0.30}" width="{w*0.35}" height="18" rx="9" fill="rgba(255,255,255,0.55)"/>
  <rect x="{w*0.45}" y="{h*0.38}" width="{w*0.28}" height="14" rx="7" fill="rgba(255,255,255,0.35)"/>
  <rect x="{w*0.45}" y="{h*0.45}" width="{w*0.30}" height="14" rx="7" fill="rgba(255,255,255,0.35)"/>
  <text x="{w/2}" y="{h - 55}" font-family="'Inter', Arial, sans-serif" font-size="26" font-weight="600" fill="#ffffff" text-anchor="middle">{label}</text>
</svg>'''
    return svg

def gallery_svg(key, label, w=640, h=480):
    c1, c2 = pick_colors(key)
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}">
  <defs>
    <linearGradient id="g_{key}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{c1}"/>
      <stop offset="100%" stop-color="{c2}"/>
    </linearGradient>
  </defs>
  <rect width="{w}" height="{h}" fill="url(#g_{key})"/>
  <g opacity="0.9">
    <rect x="40" y="40" width="{w-80}" height="{h-80}" rx="18" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="3" stroke-dasharray="10 8"/>
  </g>
  <circle cx="{w/2}" cy="{h/2 - 20}" r="56" fill="rgba(255,255,255,0.18)"/>
  <path d="M {w/2 - 26} {h/2 - 12} l 16 -20 l 14 16 l 10 -10 l 20 24 z" fill="rgba(255,255,255,0.85)" transform="translate(0,0)"/>
  <text x="{w/2}" y="{h - 34}" font-family="'Inter', Arial, sans-serif" font-size="20" font-weight="600" fill="#ffffff" text-anchor="middle">{label}</text>
</svg>'''
    return svg

def logo_svg():
    return '''<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120">
  <defs>
    <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#9689FF"/>
      <stop offset="100%" stop-color="#5A4FCF"/>
    </linearGradient>
  </defs>
  <rect width="120" height="120" rx="28" fill="url(#logoGrad)"/>
  <text x="60" y="76" font-family="'Space Grotesk', Arial, sans-serif" font-size="46" font-weight="700" fill="#ffffff" text-anchor="middle">CC</text>
</svg>'''

def qr_svg():
    # Deterministic pseudo-QR pattern (decorative placeholder, not scannable)
    import random
    random.seed(42)
    size = 25
    cell = 12
    pad = 20
    total = size * cell + pad * 2
    cells = []
    for r in range(size):
        for c in range(size):
            in_corner = (r < 7 and c < 7) or (r < 7 and c >= size-7) or (r >= size-7 and c < 7)
            if in_corner:
                continue
            if random.random() < 0.42:
                x = pad + c * cell
                y = pad + r * cell
                cells.append(f'<rect x="{x}" y="{y}" width="{cell}" height="{cell}" fill="#232742"/>')

    def finder(x, y):
        return f'''
        <rect x="{x}" y="{y}" width="{7*cell}" height="{7*cell}" fill="#232742"/>
        <rect x="{x+cell}" y="{y+cell}" width="{5*cell}" height="{5*cell}" fill="#ffffff"/>
        <rect x="{x+2*cell}" y="{y+2*cell}" width="{3*cell}" height="{3*cell}" fill="#232742"/>
        '''

    finders = finder(pad, pad) + finder(pad + (size-7)*cell, pad) + finder(pad, pad + (size-7)*cell)

    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="{total}" height="{total}" viewBox="0 0 {total} {total}">
  <rect width="{total}" height="{total}" fill="#ffffff"/>
  {''.join(cells)}
  {finders}
</svg>'''
    return svg

def write(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w") as f:
        f.write(content)

# Courses
courses = json.load(open(os.path.join(ROOT, "src", "data", "courses.json")))
for c in courses:
    fname = os.path.basename(c["image"])
    key = fname.replace(".svg", "")
    write(os.path.join(PUB, "courses", fname), course_svg(key, c["name"]))

# Config-driven images
config = json.load(open(os.path.join(ROOT, "src", "data", "config.json")))

for a in config["achievements"]:
    fname = os.path.basename(a["image"])
    key = fname.replace(".svg", "")
    write(os.path.join(PUB, "achievements", fname), achievement_svg(key, a["title"]))

for i, img in enumerate(config["aboutUs"]["images"]):
    fname = os.path.basename(img)
    key = fname.replace(".svg", "")
    labels = ["Our Classroom", "Practical Training", "Graduation Day"]
    write(os.path.join(PUB, "about", fname), about_svg(key, labels[i % len(labels)]))

for g in config["gallery"]:
    fname = os.path.basename(g["image"])
    key = fname.replace(".svg", "")
    write(os.path.join(PUB, "gallery", fname), gallery_svg(key, g["caption"]))

write(os.path.join(PUB, "payment-qr.svg"), qr_svg())
write(os.path.join(PUB, "logo.svg"), logo_svg())

print("Generated all placeholder images.")
