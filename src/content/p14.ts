import type { Module, Unit } from '../types'

// P14 — Integral Parsial dan Integral Tentu

const units: Unit[] = [
  {
    id: 'p14-u1',
    number: 1,
    title: 'Dari Aturan Hasil Kali ke Integral Parsial',
    pageFrom: 1,
    pageTo: 3,
    sections: [
      {
        kind: 'figure',
        title: 'Dari Aturan Hasil Kali ke Integral Parsial',
        md: '$$d(uv) = u\\,dv + v\\,du$$\n\n$$\\int d(uv) = \\int u\\,dv + \\int v\\,du$$\n\n$$\\int u\\,dv = uv - \\int v\\,du$$',
      },
      {
        kind: 'goal',
        md: 'Anda dapat menjelaskan kapan integral parsial dipakai, membaca rumusnya, dan memahami asal rumus tersebut dari aturan hasil kali pada turunan.',
      },
      {
        kind: 'prereq',
        title: 'Prasyarat',
        md: 'P13 membahas integral langsung dan substitusi. P14 dimulai ketika substitusi tidak langsung menyederhanakan integran, terutama pada hasil kali dua bentuk yang berbeda.',
      },
      {
        kind: 'concept',
        title: 'Asal Rumus',
        md: 'Dari aturan hasil kali dalam bentuk diferensial,\n\n$$d(uv) = u\\,dv + v\\,du.$$\n\nIntegralkan kedua ruas:\n\n$$uv = \\int u\\,dv + \\int v\\,du.$$\n\nSusun ulang:\n\n$$\\int u\\,dv = uv - \\int v\\,du.$$',
      },
      {
        kind: 'concept',
        title: 'Cara Membaca',
        md: 'Integral $u$ kali $dv$ sama dengan $u$ kali $v$ dikurangi integral $v$ kali $du$.',
      },
      {
        kind: 'concept',
        title: 'Kapan Dipertimbangkan?',
        md: 'Integral parsial cocok ketika integran dapat dipandang sebagai hasil kali dan kita dapat memilih satu bagian sebagai $u$ sehingga turunannya lebih sederhana, sementara bagian lain sebagai $dv$ sehingga antiturunannya $v$ mudah dicari.',
      },
      {
        kind: 'note',
        title: 'Perbandingan dengan Substitusi',
        md: '- Substitusi mencari **fungsi dalam dan turunannya**.\n- Integral parsial memecah integran menjadi **$u$** dan **$dv$** untuk mengubah hasil kali menjadi integral yang lebih mudah.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Membaca Komponen',
        md: 'Pada $\\int x\\cos x\\,dx$, pilihan alami adalah $u = x$ dan $dv = \\cos x\\,dx$. Maka $du = dx$ dan $v = \\sin x$.',
      },
      {
        kind: 'mistake',
        md: 'Tanda pada rumus adalah minus: $uv - \\int v\\,du$, bukan plus.',
      },
      {
        kind: 'checkpoint',
        md: '1. Tuliskan rumus integral parsial.\n2. Setelah memilih $u$, apa yang harus dihitung?\n3. Setelah memilih $dv$, apa yang harus dicari?',
      },
      {
        kind: 'summary',
        md: 'Integral parsial berasal dari aturan hasil kali dan dipakai bila pemecahan menjadi $u$ dan $dv$ membuat integral baru lebih sederhana.',
      },
    ],
  },
  {
    id: 'p14-u2',
    number: 2,
    title: 'Menjalankan Integral Parsial pada Hasil Kali',
    pageFrom: 3,
    pageTo: 4,
    sections: [
      {
        kind: 'goal',
        md: 'Anda dapat menjalankan integral parsial pada bentuk hasil kali sederhana dan memeriksa hasil dengan turunan.',
      },
      {
        kind: 'concept',
        title: 'Prosedur Empat Langkah',
        md: '1. Pilih $u$ dan $dv$.\n2. Hitung $du$ dan cari $v = \\int dv$.\n3. Substitusikan ke $\\int u\\,dv = uv - \\int v\\,du$.\n4. Selesaikan integral baru dan verifikasi dengan menurunkan hasil.',
      },
      {
        kind: 'example',
        title: 'Worked Example 1 — $\\int x \\sin x \\, dx$',
        md: 'Pilih $u = x$, sehingga $du = dx$. Pilih $dv = \\sin x\\,dx$, sehingga $v = -\\cos x$. Maka\n\n$$\\int x\\sin x\\,dx = x(-\\cos x) - \\int (-\\cos x)\\,dx = -x\\cos x + \\sin x + C.$$\n\nCek: turunan $-x\\cos x + \\sin x$ adalah $x\\sin x$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 2 — $\\int x \\cos x \\, dx$',
        md: 'Pilih $u = x$, $dv = \\cos x\\,dx$. Maka $du = dx$, $v = \\sin x$:\n\n$$\\int x\\cos x\\,dx = x\\sin x - \\int \\sin x\\,dx = x\\sin x + \\cos x + C.$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 3 — $\\int x e^x \\, dx$',
        md: 'Pilih $u = x$, $dv = e^x\\,dx$. Maka $du = dx$, $v = e^x$:\n\n$$\\int x e^x\\,dx = x e^x - \\int e^x\\,dx = x e^x - e^x + C.$$',
      },
      {
        kind: 'diagnosis',
        title: 'Miskonsepsi Kritis',
        md: '- Jika $dv = \\sin x\\,dx$, maka $v = -\\cos x$, bukan $\\cos x$.\n- Jika $dv = \\cos x\\,dx$, maka $v = \\sin x$.\n- Jangan lupa menyelesaikan integral baru $\\int v\\,du$.',
      },
      {
        kind: 'checkpoint',
        md: '1. Hitung $\\int x\\cos x\\,dx$.\n2. Hitung $\\int x e^x\\,dx$.\n3. Bagaimana cara mengecek jawaban integral tak tentu?',
      },
      {
        kind: 'summary',
        md: 'Keakuratan integral parsial bergantung pada pemilihan $u$, perhitungan $dv$, tanda minus pada rumus, dan verifikasi melalui turunan.',
      },
    ],
  },
  {
    id: 'p14-u3',
    number: 3,
    title: 'Integral ln x dan Strategi Memilih u–dv',
    pageFrom: 4,
    pageTo: 5,
    sections: [
      {
        kind: 'figure',
        title: 'Memilih u dan dv secara Rasional',
        md: 'Tiga langkah uji:\n\n1. **Pilih $u$** — Apakah $du$ lebih sederhana? Jika ya, kandidat baik.\n2. **Pilih $dv$** — Apakah $v$ mudah dicari? Integralkan $dv$.\n3. **Uji integral baru** — Apakah $\\int v\\,du$ lebih sederhana?\n\nContoh pembacaan struktur:\n\n$$\\int x\\cos x\\,dx \\rightarrow u = x,\\ dv = \\cos x\\,dx$$\n\n$$du = dx,\\ v = \\sin x \\rightarrow \\int v\\,du = \\int \\sin x\\,dx \\text{ lebih sederhana}$$\n\nTidak ada daftar urutan wajib pada sumber; pilih berdasarkan penyederhanaan.',
      },
      {
        kind: 'goal',
        md: 'Anda dapat menggunakan integral parsial ketika hasil kali tidak tampak secara eksplisit dan memilih $u$ serta $dv$ berdasarkan penyederhanaan, bukan hafalan urutan.',
      },
      {
        kind: 'concept',
        title: 'Hasil Kali Tersembunyi',
        md: 'Fungsi $\\ln x$ dapat ditulis sebagai $(\\ln x) \\cdot 1$. Karena itu\n\n$$\\int \\ln x\\,dx$$\n\ndapat diproses dengan integral parsial.',
      },
      {
        kind: 'example',
        title: 'Worked Example — $\\int \\ln x \\, dx$',
        md: 'Untuk $x > 0$, pilih $u = \\ln x$, sehingga $du = \\dfrac{dx}{x}$. Pilih $dv = dx$, sehingga $v = x$. Maka\n\n$$\\int \\ln x\\,dx = x\\ln x - \\int x\\frac{dx}{x} = x\\ln x - x + C.$$\n\nTurunan $x\\ln x - x$ kembali menjadi $\\ln x$.',
      },
      {
        kind: 'example',
        title: 'Worked Example — $\\int \\ln(2x) \\, dx$',
        md: 'Dengan $u = \\ln(2x)$, diperoleh $du = \\dfrac{dx}{x}$; dengan $dv = dx$, diperoleh $v = x$. Jadi\n\n$$\\int \\ln(2x)\\,dx = x\\ln(2x) - x + C.$$',
      },
      {
        kind: 'concept',
        title: 'Prinsip Pemilihan dari Sumber',
        md: 'Sumber tidak menetapkan daftar urutan pilihan khusus. Gunakan tiga pertanyaan:\n\n1. Apakah $u$ menjadi lebih sederhana setelah diturunkan?\n2. Apakah $dv$ mudah diintegralkan untuk memperoleh $v$?\n3. Apakah $\\int v\\,du$ lebih sederhana daripada integral semula?',
      },
      {
        kind: 'example',
        title: 'Contoh Pemilihan tanpa Menghitung Penuh',
        md: '- $\\int x^2 \\sin x\\,dx$: pilih $u = x^2$, $dv = \\sin x\\,dx$.\n- $\\int \\ln(4x)\\,dx$: pilih $u = \\ln(4x)$, $dv = dx$.',
      },
      {
        kind: 'checkpoint',
        md: '1. Mengapa $dv = dx$ sederhana pada $\\int \\ln x\\,dx$?\n2. Apa tujuan utama ketika memilih $u$?\n3. Jika integral baru lebih sulit, apa yang sebaiknya dilakukan?',
      },
      {
        kind: 'summary',
        md: 'Pemilihan $u$ dan $dv$ dinilai dari apakah proses menjadi lebih sederhana dan tetap dapat dihitung.',
      },
    ],
  },
  {
    id: 'p14-u4',
    number: 4,
    title: 'Integral Tentu dari Antiturunan',
    pageFrom: 5,
    pageTo: 7,
    sections: [
      {
        kind: 'goal',
        md: 'Anda dapat menghitung integral tentu dengan antiturunan, memperlakukan batas dengan benar, dan menjelaskan mengapa jawaban akhir tidak memuat $+C$.',
      },
      {
        kind: 'concept',
        title: 'Rumus Evaluasi',
        md: 'Jika $F\'(x) = f(x)$, maka pada cakupan P14\n\n$$\\int_{a}^{b} f(x)\\,dx = [F(x)]_{a}^{b} = F(b) - F(a).$$',
      },
      {
        kind: 'concept',
        title: 'Urutan Aman',
        md: '1. Cari antiturunan $F(x)$.\n2. Hitung $F(b)$.\n3. Hitung $F(a)$.\n4. Kurangkan $F(b) - F(a)$.',
      },
      {
        kind: 'why',
        title: 'Mengapa Tidak Ada +C?',
        md: 'Jika kita menulis antiturunan sebagai $F(x) + C$, maka\n\n$$(F(b) + C) - (F(a) + C) = F(b) - F(a).$$\n\nKonstanta saling menghapus, sehingga jawaban integral tentu berupa satu nilai.',
      },
      {
        kind: 'example',
        title: 'Worked Example Internal yang Konsisten',
        md: 'Controlling source sengaja menggunakan contoh internal karena contoh buku yang dirujuk mempunyai ketidakkonsistenan antara soal dan langkah penyelesaian. Contoh konsisten:\n\n$$\\int_{1}^{2} (x - 3)\\,dx = \\left[\\frac{x^2}{2} - 3x\\right]_{1}^{2} = -\\frac{3}{2}.$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 2',
        md: '$$\\int_{0}^{2} (x + 1)\\,dx = \\left[\\frac{x^2}{2} + x\\right]_{0}^{2} = 4.$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 3',
        md: '$$\\int_{-1}^{1} x^2\\,dx = \\left[\\frac{x^3}{3}\\right]_{-1}^{1} = \\frac{2}{3}.$$',
      },
      {
        kind: 'diagnosis',
        title: 'Miskonsepsi Kritis',
        md: 'Jawaban $\\int_0^2 x\\,dx = \\dfrac{x^2}{2} + C$ belum mengevaluasi batas. Yang benar adalah $\\left[\\dfrac{x^2}{2}\\right]_0^2 = 2$.',
      },
      {
        kind: 'checkpoint',
        md: '1. Apa yang dihitung lebih dahulu: $F(a)$ atau antiturunannya?\n2. Apa arti notasi $[F(x)]_a^b$?\n3. Mengapa tidak ada $+C$ pada hasil akhir?',
      },
      {
        kind: 'summary',
        md: 'Integral tentu dievaluasi dengan antiturunan pada batas atas dikurangi batas bawah.',
      },
    ],
  },
  {
    id: 'p14-u5',
    number: 5,
    title: 'Sifat-Sifat Dasar Integral Tentu',
    pageFrom: 7,
    pageTo: 8,
    sections: [
      {
        kind: 'figure',
        title: 'Sifat Batas dan Pemecahan Interval',
        md: 'Garis bilangan dengan titik $a$, $b$, $c$ berurutan, menunjukkan dua integral yang bersambung:\n\n$$\\int_a^b f \\quad \\text{dan} \\quad \\int_b^c f$$\n\n$$\\int_a^b f + \\int_b^c f = \\int_a^c f$$\n\n- **Batas sama:** $\\int_a^a f(x)\\,dx = 0$\n- **Batas dibalik:** $\\int_b^a f = -\\int_a^b f$',
      },
      {
        kind: 'goal',
        md: 'Anda dapat menggunakan sifat batas, pemecahan interval, jumlah fungsi, dan kelipatan konstanta untuk menentukan integral tentu tanpa selalu menghitung antiturunan dari awal.',
      },
      {
        kind: 'main',
        title: 'Lima Sifat yang Dipakai pada P14',
        md: '$$\\int_a^a f(x)\\,dx = 0.$$\n\n$$\\int_b^a f(x)\\,dx = -\\int_a^b f(x)\\,dx.$$\n\n$$\\int_a^b f(x)\\,dx + \\int_b^c f(x)\\,dx = \\int_a^c f(x)\\,dx.$$\n\n$$\\int_a^b [f(x) + g(x)]\\,dx = \\int_a^b f(x)\\,dx + \\int_a^b g(x)\\,dx.$$\n\n$$\\int_a^b k f(x)\\,dx = k\\int_a^b f(x)\\,dx.$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 1 — Batas Dibalik',
        md: 'Jika $\\int_1^4 f(x)\\,dx = 7$, maka $\\int_4^1 f(x)\\,dx = -7$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 2 — Memecah Interval',
        md: 'Jika $\\int_0^2 f(x)\\,dx = 3$ dan $\\int_2^5 f(x)\\,dx = 8$, maka\n\n$$\\int_0^5 f(x)\\,dx = 3 + 8 = 11.$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 3 — Kelipatan',
        md: 'Jika $\\int_0^3 f(x)\\,dx = 4$, maka\n\n$$\\int_0^3 5f(x)\\,dx = 5(4) = 20.$$',
      },
      {
        kind: 'mistake',
        md: '- Membalik batas mengubah tanda.\n- Memecah interval harus memakai titik sambungan yang konsisten.\n- Konstanta dapat dikeluarkan dari integral.',
      },
      {
        kind: 'checkpoint',
        md: '1. Berapa $\\int_a^a f(x)\\,dx$?\n2. Apa yang terjadi jika batas dibalik?\n3. Bagaimana menggabungkan integral pada $[a,b]$ dan $[b,c]$?',
      },
      {
        kind: 'summary',
        md: 'Sifat integral tentu memungkinkan transformasi aljabar terhadap batas, interval, jumlah fungsi, dan faktor konstanta.',
      },
    ],
  },
  {
    id: 'p14-u6',
    number: 6,
    title: 'Membedakan Integral Tak Tentu dan Integral Tentu serta Audit Kesalahan',
    pageFrom: 9,
    pageTo: 10,
    sections: [
      {
        kind: 'goal',
        md: 'Anda dapat membedakan jenis integral, memilih metode sesuai struktur soal, dan mendeteksi empat kesalahan inti P14.',
      },
      {
        kind: 'concept',
        title: 'Perbandingan Inti',
        md: '| Aspek | Integral Tak Tentu | Integral Tentu |\n|---|---|---|\n| Batas | Tidak ada | Ada batas bawah dan atas |\n| Hasil | Keluarga antiturunan | Satu nilai |\n| Konstanta $C$ | Ditulis | Tidak muncul pada hasil akhir |',
      },
      {
        kind: 'concept',
        title: 'Peta Pemilihan Metode',
        md: '1. Jika integral cocok dengan rumus dasar atau substitusi P13, gunakan cara yang lebih langsung.\n2. Jika integran berupa hasil kali dan substitusi tidak menyederhanakan, pertimbangkan integral parsial.\n3. Jika ada batas, selesaikan sebagai integral tentu: antiturunan lalu evaluasi batas atau gunakan sifat integral tentu.',
      },
      {
        kind: 'diagnosis',
        title: 'Diagnosis Kesalahan yang Harus Dikenali',
        md: '1. Tanda rumus salah: $uv - \\int v\\,du$, bukan plus.\n2. Antiturunan $dv$ salah: jika $dv = \\sin x\\,dx$, maka $v = -\\cos x$.\n3. Batas tidak dievaluasi: integral tentu harus menghasilkan nilai.\n4. Batas dibalik tanpa tanda: $\\int_b^a f = -\\int_a^b f$.',
      },
      {
        kind: 'note',
        title: 'Catatan Integritas Sumber',
        md: 'Controlling source menandai dua anomali sumber buku yang tidak boleh disalin mentah: (1) satu contoh integral tentu tidak konsisten antara soal dan langkah penyelesaian; (2) satu butir latihan hanya meminta "tentukan nilai $x$" setelah mendefinisikan suatu fungsi integral tanpa syarat tambahan. Keduanya tidak digunakan sebagai item evaluasi apa adanya.',
      },
      {
        kind: 'example',
        title: 'Worked Example Synthesis',
        md: 'Untuk $\\int_{0}^{1} (3x^2 + 2)\\,dx$, karena integral tentu dan antiturunannya langsung, tidak perlu integral parsial:\n\n$$[x^3 + 2x]_{0}^{1} = 3.$$',
      },
      {
        kind: 'checkpoint',
        md: '1. Jenis integral mana yang memerlukan $+C$?\n2. Kapan integral parsial dipertimbangkan?\n3. Apa efek membalik batas integral tentu?',
      },
      {
        kind: 'summary',
        md: 'Turunan menghasilkan laju perubahan, integral tak tentu mencari keluarga antiturunan, dan integral tentu mengevaluasi antiturunan pada dua batas.',
      },
    ],
  },
]

const m: Module = {
  id: 'p14',
  code: 'P14',
  title: 'Integral Parsial dan Integral Tentu',
  pageFrom: 1,
  pageTo: 10,
  units,
}

export default m
