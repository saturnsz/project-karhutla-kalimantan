# 🎮 Console Dashboard — Spesifikasi Desain UI (Frontend Web)

Desain dashboard web bergaya **Xbox / PS5 home screen**, berdasarkan referensi gambar: latar belakang artwork game layar penuh, baris tile horizontal, tile terpilih ber-border putih, dan info game di atasnya.

---

## 1. Konsep & Prinsip Desain

| Prinsip | Penjelasan |
|---|---|
| **Immersive** | Artwork game jadi background layar penuh, UI "melayang" di atasnya |
| **Content-first** | Minim chrome/navigasi; tile game adalah fokus utama |
| **Focus-driven** | Navigasi pakai keyboard/gamepad; elemen terfokus selalu jelas (border putih + scale) |
| **Dark & cinematic** | Palet gelap, kontras tinggi, aksen tipis |
| **Smooth** | Transisi 200–400 ms, tidak ada perubahan yang mendadak |

---

## 2. Layout (Wireframe)

```
┌──────────────────────────────────────────────────────────────┐
│ ⌃ My Space                                         3:54 PM   │  ← Top Bar
│                                                              │
│                                                              │
│  Spider-Man II: Dark Times                                   │  ← Hero Info
│  ▬▬▬▬▬▭▭▭▭  45%  4h 28min   🏆 10/36 Rewards                 │
│                                                              │
│ ┌────┐ ╔══════╗ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐     │  ← Tile Row
│ │ TLOU│ ║ ACTIVE║ │CTRL│ │mixer│ │SEA │ │RDR │ │BORD│ │ ... │     │
│ └────┘ ╚══════╝ └────┘ └────┘ └────┘ └────┘ └────┘ └────┘     │
│                                                              │
│ ⌄ What's New                                (Y) Details  🎙   │  ← Bottom Bar
└──────────────────────────────────────────────────────────────┘
        ▲ Background: artwork game aktif (full-bleed + overlay gradient)
```

### Zona Layar (viewport 1920×1080 sebagai acuan)

| Zona | Posisi | Isi |
|---|---|---|
| Top Bar | `top: 32px`, padding horizontal `48px` | Label section kiri, jam kanan |
| Hero Info | `left: 80px`, `top: ~90px` dari tile row | Judul game, progress, rewards |
| Tile Row | Vertikal ±58% dari atas | Carousel horizontal tile game |
| Bottom Bar | `bottom: 32px` | Section "What's New", hint tombol, mic |

---

## 3. Design Tokens

### 3.1 Warna

```css
:root {
  /* Background */
  --bg-base:        #07080C;
  --bg-overlay-top: rgba(7, 8, 12, 0.55);
  --bg-overlay-bot: rgba(7, 8, 12, 0.92);
  --surface:        #14161D;
  --surface-hover:  #1D2029;

  /* Text */
  --text-primary:   #FFFFFF;
  --text-secondary: #B8BCC8;
  --text-muted:     #6E7383;

  /* Accent (pilih salah satu tema) */
  --accent-xbox:    #107C10;   /* hijau Xbox */
  --accent-ps:      #0070D1;   /* biru PlayStation */
  --accent:         var(--accent-xbox);

  /* Fokus & status */
  --focus-ring:     #FFFFFF;
  --progress-track: rgba(255, 255, 255, 0.2);
  --progress-fill:  #FFFFFF;
  --reward-gold:    #F5C542;
  --btn-y:          #F5C518;   /* tombol Y kuning */
}
```

### 3.2 Tipografi

| Elemen | Font | Ukuran | Weight |
|---|---|---|---|
| Judul game (hero) | `Segoe UI`, `Inter`, sans-serif | 32px | 600 |
| Label section | Inter | 14px | 500 |
| Jam | Inter | 16px | 500 |
| Meta (progress/rewards) | Inter | 12px | 400 |
| Hint tombol | Inter | 13px | 500 |

> Rekomendasi Google Font: **Inter** atau **Outfit**. Fallback: `system-ui, -apple-system, sans-serif`.

### 3.3 Spacing, Radius, Shadow

```css
:root {
  --space-1: 4px;  --space-2: 8px;  --space-3: 12px;
  --space-4: 16px; --space-6: 24px; --space-8: 32px; --space-12: 48px;

  --radius-tile: 4px;      /* console UI cenderung hampir kotak */
  --radius-pill: 999px;

  --shadow-focus: 0 12px 40px rgba(0, 0, 0, 0.65);
  --ease: cubic-bezier(0.22, 0.61, 0.36, 1);
  --dur-fast: 150ms;
  --dur-base: 250ms;
  --dur-slow: 500ms;
}
```

---

## 4. Komponen

### 4.1 Background Hero (Full-bleed Artwork)

- Gambar game aktif, `object-fit: cover`, posisi ke kanan (subjek karakter tampil di sisi kanan).
- Overlay gradient agar teks tetap terbaca.
- Saat fokus pindah ke tile lain → **crossfade** background (500 ms).

```css
.hero-bg {
  position: fixed; inset: 0; z-index: -1;
  background-size: cover;
  background-position: right center;
  transition: opacity var(--dur-slow) var(--ease);
}
.hero-bg::after {
  content: ""; position: absolute; inset: 0;
  background:
    linear-gradient(90deg, var(--bg-overlay-bot) 0%, transparent 60%),
    linear-gradient(180deg, var(--bg-overlay-top) 0%, transparent 30%, var(--bg-overlay-bot) 100%);
}
```

### 4.2 Top Bar

- **Kiri:** ikon chevron `⌃` + label section (`My Space`), warna `--text-secondary`.
- **Kanan:** jam format 12 jam (`3:54 PM`), update tiap menit.

```html
<header class="topbar">
  <button class="section-label"><span class="chev">⌃</span> My Space</button>
  <time class="clock" id="clock">3:54 PM</time>
</header>
```

### 4.3 Hero Info (Judul + Progress + Rewards)

| Elemen | Detail |
|---|---|
| Judul | 32px, putih, `text-shadow` ringan |
| Progress bar | Lebar 64px, tinggi 3px, track transparan, isi putih |
| Persentase | `45%` + waktu main `4h 28min` |
| Rewards | Ikon badge + `10/36 Rewards` |

```html
<section class="hero-info">
  <h1 class="game-title">Spider-Man II: Dark Times</h1>
  <div class="game-meta">
    <div class="progress"><span style="width:45%"></span></div>
    <span>45%</span>
    <span>4h 28min</span>
    <span class="rewards">🏆 10/36 Rewards</span>
  </div>
</section>
```

### 4.4 Tile Carousel (Komponen Utama)

| State | Ukuran | Style |
|---|---|---|
| Default | 150×150 px | opacity 0.85, tanpa border |
| **Focused** | 190×190 px | border 3px putih, scale halus, shadow, opacity 1 |
| Hover (mouse) | 160×160 px | opacity 1 |
| Disabled / loading | 150×150 | skeleton shimmer |

```css
.tile-row {
  display: flex; align-items: center; gap: var(--space-3);
  padding: 0 var(--space-12);
  overflow-x: auto; scroll-snap-type: x proximity;
  scrollbar-width: none;
}
.tile {
  flex: 0 0 150px; height: 150px;
  border-radius: var(--radius-tile);
  overflow: hidden; opacity: .85;
  scroll-snap-align: center;
  transition: all var(--dur-base) var(--ease);
  outline: none;
}
.tile img { width: 100%; height: 100%; object-fit: cover; }

.tile:hover { opacity: 1; }
.tile:focus-visible,
.tile.is-active {
  flex-basis: 190px; height: 190px; opacity: 1;
  box-shadow: 0 0 0 3px var(--focus-ring), var(--shadow-focus);
  z-index: 2;
}
```

> **Tip:** tile pertama dan terakhir boleh **terpotong di tepi layar** (seperti referensi) untuk memberi petunjuk bahwa bisa di-scroll.

### 4.5 Bottom Bar

- **Kiri:** `⌄ What's New` (section berikutnya, tekan ↓ untuk masuk).
- **Kanan:** hint tombol `(Y) Details` dan ikon mic (voice search).

```html
<footer class="bottombar">
  <button class="section-label"><span class="chev">⌄</span> What's New</button>
  <div class="hints">
    <span class="hint"><i class="btn-y">Y</i> Details</span>
    <button class="icon-btn" aria-label="Voice search">🎙</button>
  </div>
</footer>
```

```css
.btn-y {
  display: inline-grid; place-items: center;
  width: 24px; height: 24px; border-radius: 50%;
  border: 1.5px solid var(--btn-y); color: var(--btn-y);
  font-style: normal; font-size: 12px; margin-right: 8px;
}
```

---

## 5. Interaksi & Navigasi

| Input | Aksi |
|---|---|
| `←` / `→` | Pindah fokus antar tile |
| `↑` / `↓` | Pindah antar section (My Space ↔ What's New) |
| `Enter` / `A` | Buka/jalankan game |
| `Y` / `I` | Buka panel Details |
| `Esc` / `B` | Kembali |
| Mouse hover | Preview fokus tile |
| Scroll / swipe | Geser carousel (mobile & tablet) |

**Saat fokus berpindah:**
1. Tile lama mengecil (250 ms).
2. Tile baru membesar + border putih.
3. Background crossfade ke artwork game baru (500 ms).
4. Judul & meta berubah dengan fade + translateY 8px (200 ms).

Opsional: bunyi "tick" halus saat pindah fokus (toggle di pengaturan).

---

## 6. Section Lanjutan (Ide Pengembangan)

| Section | Isi |
|---|---|
| **My Space** | Game terakhir dimainkan / pinned |
| **What's New** | Update, DLC, berita, promo |
| **Library** | Seluruh koleksi game (grid) |
| **Store** | Rekomendasi & diskon |
| **Friends** | Online status, party |
| **Settings** | Tema, akun, bahasa |

---

## 7. Responsif

| Breakpoint | Perubahan |
|---|---|
| ≥ 1440px (TV/desktop) | Layout penuh seperti wireframe |
| 1024–1439px | Tile 130px (fokus 165px), judul 28px |
| 768–1023px | Tile 110px, hint tombol disembunyikan |
| < 768px (mobile) | Judul 22px, tile 96px, bottom bar jadi tab bar ikon, swipe untuk geser |

---

## 8. Aksesibilitas

- Kontras teks ≥ 4.5:1 (overlay gradient wajib ada).
- Fokus **selalu terlihat** (`:focus-visible`), tidak hanya mengandalkan warna.
- ARIA: `role="listbox"` untuk carousel, `role="option"` untuk tile, `aria-selected` pada tile aktif.
- Hormati `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  * { transition-duration: 0.01ms !important; animation: none !important; }
}
```

- Semua gambar punya `alt` (nama game).

---

## 9. Struktur Proyek (Saran)

```
console-dashboard/
├── index.html
├── src/
│   ├── styles/
│   │   ├── tokens.css
│   │   ├── layout.css
│   │   └── components.css
│   ├── components/
│   │   ├── TopBar
│   │   ├── HeroInfo
│   │   ├── TileCarousel
│   │   ├── Tile
│   │   └── BottomBar
│   ├── hooks/
│   │   ├── useGamepad.js      # Gamepad API
│   │   └── useKeyboardNav.js
│   ├── data/games.json
│   └── main.js
└── assets/covers/ , assets/backgrounds/
```

**Stack yang cocok:** React / Next.js + Tailwind (atau CSS Modules), Framer Motion untuk animasi, **Gamepad API** bawaan browser untuk dukungan controller.

---

## 10. Contoh Data

```json
[
  {
    "id": "spiderman-2",
    "title": "Spider-Man II: Dark Times",
    "cover": "/assets/covers/spiderman.jpg",
    "background": "/assets/backgrounds/spiderman.jpg",
    "progress": 45,
    "playtime": "4h 28min",
    "rewards": { "earned": 10, "total": 36 }
  },
  {
    "id": "control",
    "title": "Control",
    "cover": "/assets/covers/control.jpg",
    "background": "/assets/backgrounds/control.jpg",
    "progress": 12,
    "playtime": "1h 05min",
    "rewards": { "earned": 3, "total": 40 }
  }
]
```

---

## 11. Prompt Aset Gambar (untuk AI image generator)

- **Background:** *"cinematic dark game artwork, superhero hanging from web at night, dramatic rim light, deep black background, 16:9, ultra detailed, no text"*
- **Cover tile:** *"square game cover art, bold character close-up, high contrast, minimal logo, dark moody palette, 1:1"*

> ⚠️ Gunakan artwork milik sendiri atau berlisensi. Logo/karakter game komersial (Spider-Man, Control, dll.) dilindungi hak cipta, jadi pakai sebagai placeholder saat prototyping saja.

---

## 12. Checklist Implementasi

- [ ] Setup design tokens (warna, spacing, tipografi)
- [ ] Background hero + overlay gradient
- [ ] Top bar + jam realtime
- [ ] Hero info (judul, progress, rewards)
- [ ] Tile carousel + state fokus
- [ ] Navigasi keyboard & gamepad
- [ ] Crossfade background saat fokus berubah
- [ ] Bottom bar + hint tombol
- [ ] Responsif & reduced-motion
- [ ] Uji kontras & aksesibilitas
