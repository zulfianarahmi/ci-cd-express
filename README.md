# Simulasi CI/CD Gratis dengan GitHub Actions (Express.js)

Ini adalah project latihan untuk menerapkan praktik CI/CD (Continuous Integration / Continuous Deployment) **tanpa menggunakan VPS**, 100% gratis menggunakan GitHub Actions. Proyek ini menggunakan aplikasi sederhana berbasis Node.js dengan Express.

## Tech Stack

- Node.js
- Express.js
- GitHub Actions (untuk CI/CD)
- curl (untuk testing endpoint)

---

## Cara Kerja CI/CD

1. Setiap kali ada push ke branch `main`:
   - Workflow di GitHub Actions akan berjalan otomatis.
2. Workflow melakukan langkah:
   - Install dependency
   - Build (simulasi)
   - Jalankan server di background
   - Tes endpoint `/` menggunakan `curl`

---

## Simulasi Output

```bash
Server jalan di http://localhost:3000
curl http://localhost:3000
> Halo dari CI/CD!
```
