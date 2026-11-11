#!/usr/bin/env python3
import math
import os
from PIL import Image, ImageDraw, ImageChops

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RES_DIR = os.path.join(ROOT, "android", "app", "src", "main", "res")
MASTER_ICON = os.path.join(ROOT, "icon.png")
BG_HEX = "#0A0C16"
BG_RGB = (10, 12, 22)


def extract_clean_shield_rgba(master_path: str) -> Image.Image:
    """Extrai o escudo azul/ciano central sem a borda externa arredondada do arquivo original."""
    src = Image.open(master_path).convert("RGBA")
    w, h = src.size
    # Recorta margem externa que contem a moldura fina do card original
    margin = int(w * 0.045)
    cropped = src.crop((margin, margin, w - margin, h - margin)).resize((w, h), Image.Resampling.LANCZOS)

    px = cropped.load()
    out = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    opx = out.load()

    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if a == 0:
                continue
            # Distancia cromatica ate o azul marinho de fundo (#0A0C16)
            dr = max(0, r - BG_RGB[0])
            dg = max(0, g - BG_RGB[1])
            db = max(0, b - BG_RGB[2])
            lum_diff = math.sqrt(dr * dr + dg * dg + db * db)

            # Fundo escuro fica transparente mantendo o brilho ciano suave ao redor do escudo
            if lum_diff < 12:
                new_a = 0
            elif lum_diff < 46:
                t = (lum_diff - 12) / 34.0
                new_a = int(min(255, a * (t ** 1.25)))
            else:
                new_a = a
            opx[x, y] = (r, g, b, new_a)

    # Recorta bounding box util do escudo + glow
    bbox = out.getbbox()
    if bbox:
        pad = 24
        x0 = max(0, bbox[0] - pad)
        y0 = max(0, bbox[1] - pad)
        x1 = min(w, bbox[2] + pad)
        y1 = min(h, bbox[3] + pad)
        bw, bh = x1 - x0, y1 - y0
        side = max(bw, bh)
        sq = Image.new("RGBA", (side, side), (0, 0, 0, 0))
        sq.paste(out.crop((x0, y0, x1, y1)), ((side - bw) // 2, (side - bh) // 2))
        return sq
    return out


def make_square_icon(shield: Image.Image, size: int) -> Image.Image:
    canvas = Image.new("RGBA", (size, size), BG_RGB + (255,))
    inner_sz = int(size * 0.72)
    s = shield.resize((inner_sz, inner_sz), Image.Resampling.LANCZOS)
    off = (size - inner_sz) // 2
    canvas.paste(s, (off, off), mask=s)
    return canvas


def make_round_icon(shield: Image.Image, size: int) -> Image.Image:
    sq = make_square_icon(shield, size)
    mask = Image.new("L", (size * 4, size * 4), 0)
    ImageDraw.Draw(mask).ellipse((0, 0, size * 4 - 1, size * 4 - 1), fill=255)
    mask = mask.resize((size, size), Image.Resampling.LANCZOS)
    out = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    out.paste(sq, (0, 0), mask=mask)
    return out


def make_foreground_icon(shield: Image.Image, size: int) -> Image.Image:
    # Adaptive icon 108dp com area segura de 66dp (61%); 62% garante margem elegante em qualquer mascara
    canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    inner_sz = int(size * 0.62)
    s = shield.resize((inner_sz, inner_sz), Image.Resampling.LANCZOS)
    off = (size - inner_sz) // 2
    canvas.paste(s, (off, off), mask=s)
    return canvas


def make_splash(shield: Image.Image, w: int, h: int) -> Image.Image:
    canvas = Image.new("RGBA", (w, h), BG_RGB + (255,))
    min_dim = min(w, h)
    badge_sz = max(64, int(min_dim * 0.34))
    s = shield.resize((badge_sz, badge_sz), Image.Resampling.LANCZOS)
    canvas.paste(s, ((w - badge_sz) // 2, (h - badge_sz) // 2), mask=s)
    return canvas.convert("RGB")


def main():
    shield = extract_clean_shield_rgba(MASTER_ICON)

    densities = {
        "mdpi": (48, 108),
        "hdpi": (72, 162),
        "xhdpi": (96, 216),
        "xxhdpi": (144, 324),
        "xxxhdpi": (192, 432),
    }
    for density, (icon_sz, fg_sz) in densities.items():
        folder = os.path.join(RES_DIR, f"mipmap-{density}")
        os.makedirs(folder, exist_ok=True)
        make_square_icon(shield, icon_sz).save(os.path.join(folder, "ic_launcher.png"), "PNG")
        make_round_icon(shield, icon_sz).save(os.path.join(folder, "ic_launcher_round.png"), "PNG")
        make_foreground_icon(shield, fg_sz).save(os.path.join(folder, "ic_launcher_foreground.png"), "PNG")
        print(f"Generated mipmap-{density}: {icon_sz}px / fg {fg_sz}px")

    # Atualizar todos os splashes existentes preservando exatamente as dimensoes Android
    for entry in os.listdir(RES_DIR):
        if entry == "drawable" or entry.startswith("drawable-"):
            splash_path = os.path.join(RES_DIR, entry, "splash.png")
            if os.path.exists(splash_path):
                with Image.open(splash_path) as cur:
                    w, h = cur.size
                make_splash(shield, w, h).save(splash_path, "PNG")
                print(f"Updated {entry}/splash.png ({w}x{h})")


if __name__ == "__main__":
    main()
