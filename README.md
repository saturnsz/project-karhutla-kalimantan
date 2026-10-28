# Console Dashboard (Xbox / PS5 Style UI)

Aplikasi web Console Dashboard bertema gaming modern (ala Xbox Series X / PlayStation 5) dengan latar belakang sinematik, efek dynamic crossfade, navigasi carousel game tile, dukungan keyboard dan Gamepad Controller API.

---

## 🚀 Cara Deploy ke Vercel

Proyek ini telah dikonfigurasi penuh dengan `vercel.json` dan siap di-deploy secara instan.

### Opsi 1: Deploy Otomatis via GitHub (Direkomendasikan)

1. **Commit & Push ke GitHub**:
   ```bash
   git add .
   git commit -m "feat: tambahkan konfigurasi vercel deployment"
   git push origin main
   ```
2. **Buka Dashboard Vercel**:
   - Masuk ke [vercel.com](https://vercel.com/)
   - Klik tombol **"Add New..."** lalu pilih **"Project"**
   - Hubungkan akun GitHub Anda dan pilih repository **`project-karhutla-kalimantan`**
3. **Deploy**:
   - Semua pengaturan sudah otomatis terdeteksi via file [vercel.json](file:///d:/kuliah/project%20karhutla/vercel.json) di root repository.
   - *(Opsional)* Jika Anda ingin mendeploy khusus folder dashboard saja, Anda juga dapat mengatur **Root Directory** ke `console-dashboard`.
   - Klik **Deploy**! Web app Anda akan langsung live dalam beberapa detik.

---

### Opsi 2: Deploy Cepat via Terminal (Vercel CLI)

1. Buka terminal di folder proyek ini (`d:\kuliah\project karhutla`).
2. Jalankan perintah:
   ```bash
   npx vercel
   ```
3. Ikuti panduan interaktif di terminal:
   - Login ke akun Vercel Anda (jika belum login).
   - Tekan `Y` untuk mengonfirmasi direktori.
   - Vercel akan langsung mengunggah dan memberikan tautan domain publik (`https://...vercel.app`).
4. Untuk deploy ke production domain:
   ```bash
   npx vercel --prod
   ```

---

## 💻 Menjalankan di Lokal (Localhost)

Untuk menjalankan server pengembangan lokal:

```bash
# Dari root proyek:
npm run dev

# Atau masuk ke folder console-dashboard:
cd console-dashboard
npm run dev
```

Buka peramban di `http://localhost:8080/`.

---

## 🎮 Kontrol Navigasi

- **Panah Kiri / Kanan (`←` / `→`)**: Pilih game berikutnya/sebelumnya
- **Enter / Spasi**: Mainkan game (Play)
- **Tombol `Y`**: Buka detail game
- **Tombol `Home` / `End`**: Langsung ke game pertama / terakhir
- **Gamepad / Controller**: Dukungan penuh D-pad dan tombol A/Y
- **Sentuh / Geser (Touch/Swipe)**: Geser layar ke kiri atau kanan untuk perangkat layar sentuh / mobile
