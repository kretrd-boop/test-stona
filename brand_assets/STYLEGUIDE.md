# Mansard — Style Guide

> **Zakres:** Jedyne źródło prawdy o designie — kolory, typografia, spacing, komponenty, ikony, breakpointy, wzorce sekcji, ton komunikacji.
> Instrukcje dla Claude (workflow, screenshots) → patrz **CLAUDE.md**.
> Dane o firmie, USP, customer journey → patrz **COMPANY.md**.
>
> Dokument aktualizowany na bieżąco z każdą zmianą designu.

---

## 1. Kolory

### Akcenty i CTA

| Rola             | HEX / Tailwind                        | Zastosowanie                              |
|------------------|---------------------------------------|-------------------------------------------|
| Akcent / CTA     | `#dc2626` (red-600)                   | Przyciski, bordery aktywne, ikony CTA     |
| Akcent hover     | `#b91c1c` (red-700)                   | Hover na przyciskach red                  |
| Nadtytuł / badge | `#dc2626`, uppercase, `tracking-widest` | Labele sekcji, badge                    |
| Tło ikona red    | `rgba(220,38,38,0.15)`                | Tło ikonek akcentowych (nav, menu)        |
| Tło ikona red mocne | `rgba(220,38,38,0.45)` + border `rgba(220,38,38,0.3)` | Feature cards na dark tle |
| Info-box ostrzeż.| `#fef2f2` / border `#fee2e2`          | red-50 / red-100                          |
| Mały badge tło   | `#fee2e2` / tekst `#dc2626`           | Myth badge, małe labele                   |
| Red tint border  | `rgba(220,38,38,0.3)`                 | Subtelne obramowania na akcent kartach    |

### Tła sekcji

| Token               | HEX             | Zastosowanie                                  |
|---------------------|-----------------|-----------------------------------------------|
| Tło jasne           | `#ffffff`       | Sekcje białe (hero prawa, porównanie, FAQ, kroki) |
| Tło hero lewy panel | `#f5f6f7`       | Tło lewego panelu hero                        |
| Tło compare         | `#f0f2f5`       | Mansard vs inne firmy, opinie                 |
| Tło FAQ             | `#f3f4f6`       | Sekcja FAQ                                    |
| Tło subtle/warm     | `#f9f8f5`       | Specyfikacja techniczna, mity, cena           |
| Tło ciemne          | `#1e2124`       | Sekcja zalet, wyceny (z overlay s2-1.jpg)     |
| Nawigacja / footer / CTA banner | `#111827` | Nav sticky, footer, pre-footer CTA banner |
| Karty na dark bg    | `#2e3138` / border `#454952` | Feature cards w dark sekcjach  |
| Dropdown nav        | `#1f2937`       | Dropdown menu w nawigacji                     |

### Typografia — kolory tekstu

| Rola                 | HEX              | Tailwind     | Zastosowanie                         |
|----------------------|------------------|--------------|--------------------------------------|
| Tekst główny / H1–H6 | `#111827`        | gray-900     | Nagłówki na jasnym tle               |
| Tekst body           | `#374151`        | gray-700     | Paragrafy, opisy (niekiedy gray-600) |
| Tekst drugorzędny    | `#6b7280`        | gray-500     | Podtytuły, metadane, muted           |
| Tekst trzeciorzędny  | `#9ca3af`        | gray-400     | Placeholdery, daty, FAQ number       |
| Tekst na dark bg     | `#fff`           | white        | Nagłówki na `#1e2124` / `#111827`    |
| Tekst muted dark     | `#d1d5db`        | gray-300     | Body text na dark tle                |
| Tekst bardzo muted   | `rgba(255,255,255,0.55)` | —    | Drobny tekst na dark bg              |
| Akcent / link        | `#dc2626`        | red-600      | Linki, ikony CTA, czerwone dane      |

### Kolory pomocnicze

| Rola            | HEX / Tailwind                                  | Zastosowanie                        |
|-----------------|-------------------------------------------------|-------------------------------------|
| Border domyślny | `#e5e7eb` (gray-200)                            | Karty, separatory, tabele           |
| Border ciemny   | `#454952`                                       | Karty na dark bg, separatory dark   |
| Border header   | `rgba(255,255,255,0.08)`                        | Nav scrolled, separatory na dark    |
| Sukces / check  | `#16a34a` (green-600)                           | Checkmarki, potwierdzenia           |
| Tło sukces      | `#dcfce7`                                       | Zielone kółko w myth-fact           |
| Ostrzeżenie     | `#f59e0b` (amber-400)                           | Gwiazdki, ikona szlifierki          |
| Star rating     | `#f59e0b`                                       | Gwiazdki opinii                     |

---

## 2. Typografia

### Kroje pisma

| Rola              | Rodzina  | Waga          | Źródło       |
|-------------------|----------|---------------|--------------|
| Nagłówki H1–H6    | Inter    | 700 / 800     | Google Fonts |
| Body / UI text    | DM Sans  | 400 / 500 / 700 | Google Fonts |

```html
<!-- Import do <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

```css
body { font-family: 'DM Sans', ui-sans-serif, system-ui, sans-serif; color: #1a1a1a; }
h1, h2, h3, h4, h5, h6 { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
```

### Skala typograficzna

| Tag              | font-size (clamp)                                | Min → Max   | Waga | letter-spacing | line-height |
|------------------|--------------------------------------------------|-------------|------|----------------|-------------|
| H1               | `clamp(3rem, 2.5385rem + 2.0513vw, 4rem)`        | 48 → 64px   | 800  | `-0.03em`      | `1.1`       |
| H2               | `clamp(2.4rem, 2.1231rem + 1.2308vw, 3rem)`      | 38 → 48px   | 800  | `-0.02em`      | `1.15`      |
| H3               | `clamp(2.1rem, 1.9154rem + 0.8205vw, 2.5rem)`    | 34 → 40px   | 700  | `-0.02em`      | `1.2`       |
| H4               | `clamp(1.8rem, 1.7077rem + 0.4103vw, 2rem)`      | 29 → 32px   | 700  | `-0.01em`      | `1.25`      |
| H5               | `clamp(1.6rem, 1.5308rem + 0.3077vw, 1.75rem)`   | 26 → 28px   | 700  | `0`            | `1.3`       |
| H6               | `clamp(1.4rem, 1.3538rem + 0.2051vw, 1.5rem)`    | 22 → 24px   | 700  | `0`            | `1.3`       |
| Body             | `1rem` (16px)                                    | —           | 400  | `0`            | `1.7`       |
| Small            | `0.875rem` (14px)                                | —           | 400  | `0`            | `1.5`       |
| Label / overline | `0.6875rem` (11px)                               | —           | 700  | `0.15em`       | `1`         |

### Ton i język komunikacji

- **Bezpośredni, rzeczowy, bez marketingowego bełkotu** — "0,5 mm stali" zamiast "premium quality steel"
- **Techniczny ale przystępny** — konkretne liczby (50 lat, 0,5 mm, 3–5 dni) zamiast ogólników
- **Uczciwy** — jeśli coś blaknie (kolor po latach), mówimy to wprost
- **Lokalny** — "Produkcja w Sanoku", "dostawa głównie na Podkarpacie", nie "cała Polska"
- **Bez pompowania** — unikamy "najlepszy", "wyjątkowy", "lider" — zastępujemy konkretem
- **Aktywny głos** — "Produkujemy blachę na wymiar" nie "Blacha jest produkowana"
- **Boldy tylko na kluczowych faktach** — "**0,5 mm** grubości", "**blacha cięta na wymiar**"

---

## 3. Spacing

| Token              | Wartość                          | Zastosowanie                     |
|--------------------|----------------------------------|----------------------------------|
| Section padding    | `py-20` (80px)                   | Wszystkie sekcje góra/dół (standard) |
| Section padding duży | `py-24` (96px)                 | Hero, kluczowe sekcje            |
| Container          | `max-w-7xl` + `px-6`             | Główna szerokość treści (domyślna) |
| Container narrow   | `max-w-6xl` + `px-6`             | Wycena, 3 kroki                  |
| Container medium   | `max-w-5xl` + `px-6`             | CTA banner, cennik                |
| Container text     | `max-w-4xl` + `px-6`             | Wąskie sekcje tekstowe, FAQ nagłówek |
| Card padding large | `p-8` (32px)                     | Karty główne, porównanie         |
| Card padding med   | `p-6` / `p-7` (24–28px)         | Karty poboczne, opinie           |
| Card padding small | `p-5` / `p-4` (16–20px)         | Małe karty, step cards           |
| Gap kart           | `gap-6` / `gap-8`                | Gridy kart                       |
| Section label mb   | `mb-3`                           | Overline → heading               |
| Heading mb         | `mb-2` / `mb-4`                  | H2 → subtitle                    |
| Section header mb  | `mb-12` / `mb-14`                | Section header → content         |

---

## 4. Border radius

| Element         | Wartość              |
|-----------------|----------------------|
| Karty duże      | `rounded-2xl` (16px) |
| Wycena karta    | `rounded-[20px]` (20px) |
| Karty małe      | `rounded-xl` (12px)  |
| Przyciski       | `rounded` (6px)      |
| Ikony / boxy    | `rounded-xl` (12px) lub `rounded-lg` (8px) |
| Swatch kolory   | `rounded-[10px]` (10px) |
| Badge / pill    | `rounded-full` (999px) |
| Nav dropdown    | `rounded-[14px]` (14px) |
| Galeria items   | `rounded-2xl` (16px) |

---

## 5. Shadows

| Element          | Wartość                                       |
|------------------|-----------------------------------------------|
| Karty neutralne  | `0 2px 16px rgba(0,0,0,0.06)`                 |
| Karty CTA        | `0 4px 20px rgba(220,38,38,0.08)`             |
| Karty hover      | `0 12px 32px rgba(0,0,0,0.12)`                |
| Compare right hover | `0 12px 32px rgba(220,38,38,0.22)`         |
| Feature card dark| `0 12px 32px rgba(0,0,0,0.35)` + red glow    |
| Feature card red glow | `0 0 0 1px rgba(220,38,38,0.15)`        |
| Drop shadow img  | `drop-shadow(0 24px 56px rgba(0,0,0,0.28))`   |
| Drop shadow produkt | `drop-shadow(0 28px 52px rgba(0,0,0,0.55))` |
| Nav dropdown     | `0 20px 48px rgba(0,0,0,0.5)`                 |
| Color swatch     | `0 2px 8px rgba(0,0,0,0.35)`                  |
| Color swatch active | `0 0 0 2px rgba(255,255,255,0.6), 0 4px 14px rgba(0,0,0,0.5)` |
| Pill active      | `0 1px 6px rgba(0,0,0,0.13)`                  |

---

## 6. Komponenty

### Section label (overline)
```css
.section-label {
  font-size: 11px; font-weight: 700; letter-spacing: 0.15em;
  color: #dc2626; text-transform: uppercase;
}
/* z liniami po bokach (wariant wyśrodkowany): */
display: flex; align-items: center; gap: 12px;
/* ::before / ::after: flex:1; height:1px; background: rgba(220,38,38,0.3) */
```

Przykład użycia w HTML:
```html
<p class="section-label mb-3">TYTUŁ SEKCJI</p>
<!-- lub z liniami: -->
<div class="wycena-label">BEZPŁATNA WYCENA</div>
```

### Przyciski

```css
/* .btn-red */
background: #dc2626; color: #fff; padding: 12px 28px;
border-radius: 6px; font-weight: 700; font-size: 15px;
cursor: pointer; border: none; display: inline-block;
transition: background .15s;
/* hover: */ background: #b91c1c;

/* .btn-red na dark tle — zwiększony padding (CTA banner): */
padding: 14px 32px; font-size: 1rem;

/* .btn-outline (na jasnym tle) */
background: transparent; color: #111827; border: 2px solid #d1d5db;
padding: 12px 28px; border-radius: 6px; font-weight: 600; font-size: 15px;
/* hover: */ border-color: #111827;
```

### System kart

| Klasa             | Użycie                              | Background         | Border                            | Shadow                              |
|-------------------|-------------------------------------|--------------------|-----------------------------------|-------------------------------------|
| `.card`           | Neutralna treść (opinie, kroki)     | `#fff`             | `1px solid #e5e7eb`               | `0 2px 16px rgba(0,0,0,0.06)`       |
| `.card-accent`    | Wyróżniona treść (CTA, kalkulator)  | `rgb(254,242,242)` | `1.5px solid rgba(220,38,38,0.3)` | `0 4px 20px rgba(220,38,38,0.08)`   |
| `.card-dark`      | Na ciemnych sekcjach                | `#2e3138`          | `1px solid #454952`               | —                                   |
| `.feature-card`   | Feature cards na dark tle           | `#2e3138`          | `1px solid #454952`               | hover: `0 12px 32px rgba(0,0,0,0.35)` |
| `.compare-card-right` | Rekomendowana opcja             | `#fff`             | `2px solid #dc2626`               | `0 4px 20px rgba(220,38,38,0.12)`   |
| `.myth-card`      | Mity, fakty                         | `#fff`             | `1px solid #e5e7eb`               | `0 2px 16px rgba(0,0,0,0.06)`       |
| `.step-card`      | Kroki procesu                       | `#fff`             | `1px solid #e5e7eb`               | `0 2px 16px rgba(0,0,0,0.06)`       |
| `.review-card`    | Opinie klientów                     | `#fff`             | `1px solid #e5e7eb`               | `0 2px 16px rgba(0,0,0,0.06)`       |

**Hover standard (karty jasne):**
```css
transform: translateY(-6px);
box-shadow: 0 12px 32px rgba(0,0,0,0.12);
transition: transform .25s cubic-bezier(.34,1.56,.64,1), box-shadow .25s ease;
```

### Pill switcher (zakładki)
```css
.tab-pill { background: #f3f4f6; border-radius: 999px; padding: 4px; }
.pill-btn { padding: 10px 28px; border-radius: 999px; font-size: 14px; font-weight: 600; color: #6b7280; }
.pill-btn.active { background: #fff; color: #111827; box-shadow: 0 1px 6px rgba(0,0,0,0.13); }
```

### Filter tabs (z borderem)
```css
.gallery-filter, .building-tab {
  padding: 8px 20px; border-radius: 999px; font-size: 14px; font-weight: 600;
  border: 1.5px solid #e5e7eb; background: #fff; color: #6b7280;
  transition: background .15s, color .15s, border-color .15s;
}
.gallery-filter:hover, .building-tab:hover { border-color: #dc2626; color: #dc2626; }
.gallery-filter.active, .building-tab.active { background: #dc2626; color: #fff; border-color: #dc2626; }
```

### Ikony i ikonki

**Na jasnym tle:**
```css
/* Standard */
width: 40px; height: 40px; border-radius: 8px;
background: rgba(220,38,38,0.15); /* lub #fee2e2 */

/* Nav dropdown */
width: 34px; height: 34px; border-radius: 8px;
background: rgba(220,38,38,0.15);

/* Step card icon */
width: 44px; height: 44px; border-radius: 8px;
background: #fee2e2;

/* Step number circle */
width: 52px; height: 52px; border-radius: 50%;
background: #dc2626; color: #fff; font-size: 18px; font-weight: 800;
```

**Na ciemnym tle:**
```css
/* Feature icon */
width: 40px; height: 40px; border-radius: 8px;
background: rgba(220,38,38,0.45); border: 1px solid rgba(220,38,38,0.3);
```

**SVG rozmiary:**
- `w-4 h-4` (16px) — nav, małe przyciski
- `w-5 h-5` (20px) — karty, lista
- `w-6 h-6` (24px) — większe ikony
- `w-8 h-8` (32px) — hero, wyróżnione

### Check mark i X mark

```css
/* check-icon (zielony — facts) */
width: 22px; height: 22px; border-radius: 50%;
background: #dcfce7; color: #16a34a; /* lub red na compare */

/* x-icon (szary — wady konkurencji) */
width: 22px; height: 22px; border-radius: 50%;
border: 1.5px solid #9ca3af; color: #9ca3af; font-size: 13px;

/* check-icon (czerwony — Mansard advantage) */
color: #dc2626; font-size: 16px; font-weight: 700;
```

### Badge / pill

```css
/* Myth badge */
display: inline-flex; align-items: center; gap: 6px;
background: #fee2e2; color: #dc2626;
font-size: 11px; font-weight: 700; letter-spacing: .1em;
padding: 4px 12px; border-radius: 999px; text-transform: uppercase;

/* Rekomendowany badge (na porównaniu) */
background: #dc2626; color: #fff;
font-size: 11px; font-weight: 700; letter-spacing: .08em;
padding: 5px 16px; border-radius: 999px;
position: absolute; top: -14px; left: 50%; transform: translateX(-50%);
```

### FAQ — styl editorial

```css
/* Numbered editorial style */
.faq-ed-item {
  border-top: 1px solid #e5e7eb; padding: 22px 0;
  display: grid; grid-template-columns: 40px 1fr; gap: 16px;
  cursor: pointer;
}
.faq-ed-num {
  font-size: 11px; font-weight: 700; letter-spacing: .1em;
  color: #9ca3af; font-family: monospace; /* → #dc2626 on open */
}
.faq-ed-q {
  font-size: 16px; font-weight: 600; color: #111827; line-height: 1.4;
  /* hover: color: #dc2626 */
}
.faq-ed-a { max-height: 0; overflow: hidden; transition: max-height .35s ease; }
.faq-ed-item.open .faq-ed-a { max-height: 400px; }
/* Chevron: color #9ca3af → #dc2626 on open, rotate 180deg */
```

### Feature number overlay (dekoracyjny)

```css
/* Wielka cyfra w tle karty — .feature-num */
position: absolute; top: -8px; right: 12px;
font-size: 88px; font-weight: 900;
color: rgba(255,255,255,0.04); /* na dark bg */
line-height: 1; pointer-events: none; user-select: none;
```

### Color swatch (sekcja Kolory — immersive)

```css
/* Sekcja zmienia background-color .55s na wybrany kolor */
.color-swatch {
  width: 52px; height: 52px; border-radius: 10px;
  border: 3px solid transparent; /* → #fff active */
  box-shadow: 0 2px 8px rgba(0,0,0,.35);
  transition: border-color .15s, transform .15s, box-shadow .15s;
}
.color-swatch:hover { transform: scale(1.1); }
.color-swatch.active {
  border-color: #fff;
  box-shadow: 0 0 0 2px rgba(255,255,255,0.6), 0 4px 14px rgba(0,0,0,.5);
}
/* Bestseller badge: ★ w rogu, biały krąg 18px, czerwona gwiazdka */
/* Active overlay: ✓ biały krąg 22px nad swatch */
```

### Ghost text w tle (color selector)

```css
/* Wielka nazwa koloru za produktem */
opacity: 0.055; font-size: 120px; font-weight: 900; letter-spacing: -0.03em;
color: currentColor; /* dziedziczy kolor po zmianie tła sekcji */
```

### Tło z nakładką s2-1.jpg

```css
/* Na ciemnych sekcjach (features-bg, wycena-bg) */
background: #1e2124; position: relative;
/* ::before */
background: url('...s2-1.jpg') center bottom/cover; mix-blend-mode: color; opacity: 1;

/* Na jasnych sekcjach (s2-overlay — opinie) */
/* ::before */
background: url('...s2-1.jpg') center bottom/cover; opacity: .5; mix-blend-mode: multiply;
```

### Brand-bg overlay (brand_assets/brand-bg.jpg)

```css
/* .brand-bg-light::before */
opacity: .09; background-position: center bottom; background-size: 100% auto;

/* .brand-bg-dark::before */
opacity: .15; filter: brightness(0) invert(1);
```

### Gallery overlay gradient

```css
.gallery-overlay {
  background: linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 100%);
  color: #fff; transform: translateY(4px); opacity: .9;
  transition: transform .25s ease, opacity .25s ease;
}
.gallery-item:hover .gallery-overlay { transform: translateY(0); opacity: 1; }
```

### Stage shadow na produkcie (floating effect)

```css
/* Radial gradient elipsa — "cień na podłodze" */
background: radial-gradient(ellipse at 50% 85%, rgba(0,0,0,0.28) 0%, transparent 70%);
```

### Pricing rows (cennik)

```css
/* Wiersz główny */
display: flex; justify-content: space-between; padding: 14px 0;
border-bottom: 1px solid #e5e7eb;

/* Wiersze szczegółowe (collapsed) */
border-left: 2px solid #e5e7eb; padding-left: 16px;
/* Font: text-sm, color: gray-600 */
/* Chevron rotuje 180deg na open */
```

### Wycena-label (dekoracyjna linia)

```css
.wycena-label {
  font-size: 11px; font-weight: 700; letter-spacing: .15em; color: #dc2626;
  text-align: center; padding: 22px 32px 0;
  display: flex; align-items: center; gap: 12px;
}
.wycena-label::before, .wycena-label::after {
  content: ''; flex: 1; height: 1px; background: rgba(220,38,38,0.3);
}
```

### Nawigacja (header sticky)

```css
/* Base */
background: #111827; height: 64px; position: sticky; top: 0; z-index: 50;

/* Scrolled */
border-bottom: 1px solid rgba(255,255,255,0.08);
backdrop-filter: blur(12px);
background: rgba(17,24,39,0.92);

/* Logo */
height: 36px (h-9);

/* Nav links */
color: #d1d5db; font-size: 14px; font-weight: 500;
/* hover/active: color #fff */

/* Dropdown */
background: #1f2937; border: 1px solid rgba(255,255,255,0.08);
border-radius: 14px; padding: 8px;
box-shadow: 0 20px 48px rgba(0,0,0,0.5);
/* item hover: background rgba(255,255,255,0.07) */

/* Dropdown icon */
34×34px, rounded-lg, background rgba(220,38,38,0.15), SVG: 16px #dc2626
```

### Animacje

```css
@keyframes badgePop {
  from { opacity: 0; transform: scale(.7); }
  to   { opacity: 1; transform: scale(1); }
}
/* Użycie: animation: badgePop .3s cubic-bezier(.34,1.56,.64,1) forwards; */

/* Spring/bounce easing (standard dla hover transform): */
transition: transform .25s cubic-bezier(.34,1.56,.64,1), box-shadow .25s ease;

/* Subtelne (kolor, opacity): */
transition: color .15s;
transition: background .15s;
transition: opacity .25s ease;

/* FAQ accordion: */
transition: max-height .35s ease;

/* NIGDY nie używaj: transition-all */
```

---

## 7. Sekcje — wzorce layoutów

### Nagłówek sekcji (standard)

```html
<div class="text-center mb-12">
  <p class="section-label mb-3">OVERLINE TEKST</p>
  <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Tytuł sekcji</h2>
  <p class="text-gray-500 text-sm max-w-2xl mx-auto">Podtytuł opcjonalny</p>
</div>
```

### Nagłówek asymetryczny (FAQ, porównanie)

```html
<div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
  <div>
    <p class="section-label mb-2">OVERLINE</p>
    <h2 class="text-3xl lg:text-4xl font-bold text-gray-900">Tytuł</h2>
  </div>
  <p class="text-gray-500 text-sm max-w-xs">Opis po prawej</p>
</div>
```

### Gridy kart

| Sekcja         | Grid                                | Klasy Tailwind                              |
|----------------|-------------------------------------|---------------------------------------------|
| Features       | 3 kolumny (md)                      | `grid grid-cols-1 md:grid-cols-3 gap-6`     |
| Comparison     | 2 kolumny (md)                      | `grid grid-cols-1 md:grid-cols-2 gap-6`     |
| Reviews row 1  | 3 kolumny (md)                      | `grid grid-cols-1 md:grid-cols-3 gap-6`     |
| Reviews row 2  | 2 kolumny centered (md)             | `grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto` |
| Myths          | 3 kolumny (lg), 2 (md)              | `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6` |
| Steps/Process  | 4 kolumny (md), 2 (sm)              | `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6` |
| Tech specs     | 2 kolumny (md)                      | `grid grid-cols-1 md:grid-cols-2 gap-8`     |
| Footer         | 4 kolumny (md)                      | `grid grid-cols-1 md:grid-cols-4 gap-10`    |
| Pricing layout | 3fr + 2fr (md)                      | `grid md:grid-cols-5 gap-8` (3+2)           |
| CTA banner stats | 3 kolumny                         | `grid grid-cols-3 gap-6 max-w-lg mx-auto`   |

### Wzorzec sekcji ciemnej (features-bg, wycena-bg)

```html
<section class="features-bg py-20">
  <!-- ::before = s2-1.jpg overlay, mix-blend-mode: color -->
  <div class="max-w-7xl mx-auto px-6 relative z-10">
    ...
  </div>
</section>
```

### Wzorzec CTA bannera (pre-footer)

```html
<section style="background:#111827">
  <div class="max-w-5xl mx-auto px-6 py-16 text-center">
    <p class="section-label mb-3">BEZPŁATNA WYCENA</p>
    <h2 class="text-3xl lg:text-4xl font-bold text-white mb-4">Nagłówek CTA</h2>
    <p class="text-gray-400 text-base mb-8 max-w-md mx-auto leading-relaxed">Podtytuł...</p>
    <a href="#wycena" class="btn-red inline-flex items-center gap-2">
      CTA tekst →
    </a>
    <!-- 3 liczby pod przyciskiem, border-top rgba(255,255,255,0.08) -->
    <div class="mt-12 pt-8 grid grid-cols-3 gap-6 max-w-lg mx-auto text-center"
         style="border-top:1px solid rgba(255,255,255,0.08)">
      <div>
        <div class="text-2xl font-bold text-white mb-0.5">X</div>
        <div class="text-xs text-gray-500 uppercase tracking-wider">opis</div>
      </div>
    </div>
  </div>
</section>
```

---

## 8. Assets

| Plik                          | Zastosowanie                      |
|-------------------------------|-----------------------------------|
| `brand_assets/logo.png`       | Logo na jasnym tle                |
| `brand_assets/logo_white.png` | Logo na ciemnym tle (nav, footer) |
| `brand_assets/brand-bg.jpg`   | Dekoracyjne tło brand (brand-bg-light/dark) |

---

## 9. Breakpoints

| Breakpoint | Wartość  | Tailwind prefix |
|------------|----------|-----------------|
| Mobile     | < 640px  | (default)       |
| Small      | ≥ 640px  | `sm:`           |
| Tablet     | ≥ 768px  | `md:`           |
| Desktop    | ≥ 1024px | `lg:`           |
| Wide       | ≥ 1280px | `xl:`           |

Fluid type: min `320px` → max `1440px` (zgodne z clamp powyżej)

---

## 10. Hard rules (guardrails)

- **NIGDY `transition-all`** — tylko `transform`, `opacity`, konkretne właściwości
- **NIGDY domyślna paleta Tailwind** (indigo-500, blue-600) jako kolor marki
- **NIGDY `shadow-md`** — używaj custom box-shadow z rgba
- **NIGDY te same fonty dla heading i body** — Inter + DM Sans
- **Każdy klikalny element** musi mieć hover, focus-visible i active state
- **Obrazy** z gradient overlay (`from-black/60`) i/lub color treatment layer
- **Spacing** — konsekwentne tokeny, nie losowe klasy Tailwind
- **Głębokość** — system warstw: base → elevated → floating (różne z-index i shadow)
- **Boldy w tekście** — tylko na kluczowych faktach, nie dekoracyjnie
