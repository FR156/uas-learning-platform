import type { Module } from '../types'

const m: Module = {
  id: 'p02',
  code: 'P02',
  title: 'Pangkat, Bentuk Akar, dan Logaritma',
  pageFrom: 1,
  pageTo: 13,
  units: [
    {
      id: 'p02-u1',
      number: 1,
      title: 'Pangkat Bulat, Pangkat Nol, dan Pangkat Negatif',
      pageFrom: 1,
      pageTo: 3,
      sections: [
        {
          kind: 'goal',
          md: `Anda dapat membaca notasi pangkat sebagai perkalian berulang, menggunakan aturan pangkat bulat, serta menafsirkan pangkat nol dan pangkat negatif dengan benar.`,
        },
        {
          kind: 'prereq',
          md: `Anda perlu nyaman dengan perkalian, pembagian, dan penggunaan variabel. Untuk pembagian, penyebut tidak boleh nol.`,
        },
        {
          kind: 'concept',
          title: '1. Pangkat sebagai Perkalian Berulang',
          md: `Untuk bilangan bulat positif $n$, notasi $a^n$ berarti $a$ dikalikan dengan dirinya sendiri sebanyak $n$ faktor:

$$a^n = \\underbrace{a \\cdot a \\cdot \\ldots \\cdot a}_{n \\text{ faktor}}$$

Pada $a^n$, $a$ disebut **basis** dan $n$ disebut **eksponen**. Eksponen bukan bilangan yang dikalikan dengan basis. Contoh, $3^2 = 3 \\cdot 3 = 9$, bukan $3 \\cdot 2$.`,
        },
        {
          kind: 'concept',
          title: '2. Aturan Pangkat Bulat',
          md: `- Basis sama dikalikan: $a^p a^q = a^{p+q}$.
- Basis sama dibagi: $\\dfrac{a^p}{a^q} = a^{p-q}$, dengan $a \\neq 0$.
- Pangkat dari pangkat: $(a^p)^q = a^{pq}$.
- Pangkat pada hasil kali: $(ab)^p = a^p b^p$.
- Pangkat nol: $a^0 = 1$, dengan $a \\neq 0$.`,
        },
        {
          kind: 'concept',
          title: '3. Mengapa Pangkat Nol Bernilai 1?',
          md: `Ambil $a \\neq 0$. Dari aturan pembagian, $a^m / a^m = a^{m-m} = a^0$. Tetapi suatu bilangan tak nol dibagi dirinya sendiri bernilai 1. Jadi $a^0 = 1$.`,
        },
        {
          kind: 'concept',
          title: '4. Pangkat Negatif Menyatakan Kebalikan',
          md: `Untuk $a \\neq 0$,

$$a^{-n} = \\frac{1}{a^n}.$$

Tanda negatif berada pada *eksponen*, bukan pada nilai hasil. Misalnya $2^{-3} = 1/2^3 = 1/8$.`,
        },
        {
          kind: 'example',
          title: 'Worked Example 1 — Aturan Perkalian dan Pembagian',
          md: `Sederhanakan $\\dfrac{x^5 \\cdot x^4}{x^2}$, dengan $x \\neq 0$.

Gabungkan pangkat pada pembilang: $x^5 x^4 = x^9$. Lalu $x^9 / x^2 = x^{9-2} = x^7$.`,
        },
        {
          kind: 'example',
          title: 'Worked Example 2 — Pangkat dari Pangkat',
          md: `Sederhanakan $(2a^3b)^2$.

Pangkat 2 berlaku pada semua faktor: $(2a^3b)^2 = 2^2(a^3)^2b^2 = 4a^6b^2$.`,
        },
        {
          kind: 'example',
          title: 'Worked Example 3 — Pangkat Negatif',
          md: `Hitung $5^{-2}$. Karena pangkat negatif berarti kebalikan, $5^{-2} = 1/5^2 = 1/25$.`,
        },
        {
          kind: 'mistake',
          md: `$x^3 x^4 = x^7$, bukan $x^{12}$. Eksponen dijumlahkan ketika basis yang sama dikalikan. Eksponen dikalikan hanya pada bentuk $(x^3)^4$.`,
        },
        {
          kind: 'checkpoint',
          md: `1. Sederhanakan $m^6 m^2$.
2. Hitung $7^0$.
3. Ubah $4^{-3}$ menjadi pecahan positif.`,
        },
        {
          kind: 'summary',
          md: `Pangkat memadatkan perkalian berulang. Pilih aturan berdasarkan struktur: perkalian basis sama menjumlahkan eksponen, pembagian mengurangkan, pangkat dari pangkat mengalikan, dan eksponen negatif mengambil kebalikan.`,
        },
      ],
    },
    {
      id: 'p02-u2',
      number: 2,
      title: 'Bentuk Akar dan Penyederhanaannya',
      pageFrom: 3,
      pageTo: 5,
      sections: [
        {
          kind: 'goal',
          md: `Anda dapat menyederhanakan bentuk akar, menggunakan aturan perkalian/pembagian akar pada bilangan real yang sesuai, dan menjumlahkan atau mengurangkan suku akar sejenis.`,
        },
        {
          kind: 'prereq',
          md: `Ingat kuadrat sempurna seperti $1, 4, 9, 16, 25, 36, 49, 64, 81, 100$. Kuadrat sempurna membantu mengeluarkan faktor dari tanda akar.`,
        },
        {
          kind: 'concept',
          title: '1. Akar sebagai Kebalikan Perpangkatan',
          md: `Jika $5^2 = 25$, maka $\\sqrt{25} = 5$. Dalam pembahasan bilangan real, akar kuadrat utama bernilai tidak negatif.`,
        },
        {
          kind: 'concept',
          title: '2. Aturan Perkalian dan Pembagian Akar',
          md: `Untuk kondisi real yang sesuai,

$$\\sqrt{a}\\sqrt{b} = \\sqrt{ab}, \\qquad \\frac{\\sqrt{a}}{\\sqrt{b}} = \\sqrt{\\frac{a}{b}}, \\quad b > 0.$$

Sesuai sumber, ketika menggunakan aturan tersebut pada bilangan real kita memperhatikan agar bentuk akar tetap real.`,
        },
        {
          kind: 'concept',
          title: '3. Menyederhanakan Bentuk Akar',
          md: `Carilah faktor kuadrat sempurna terbesar. Contoh, $72 = 36 \\cdot 2$, sehingga $\\sqrt{72} = \\sqrt{36}\\sqrt{2} = 6\\sqrt{2}$.`,
        },
        {
          kind: 'concept',
          title: '4. Menjumlahkan Suku Akar Sejenis',
          md: `Hanya suku dengan bagian akar yang sama yang dapat digabungkan:

$$p\\sqrt{x} + q\\sqrt{x} = (p + q)\\sqrt{x}.$$

Karena itu $3\\sqrt{2} + 4\\sqrt{2} = 7\\sqrt{2}$. Sebaliknya, $\\sqrt{2} + \\sqrt{3}$ tidak boleh diubah menjadi $\\sqrt{5}$.`,
        },
        {
          kind: 'example',
          title: 'Worked Example 1 — Menyederhanakan Akar',
          md: `$$\\sqrt{50} = \\sqrt{25 \\cdot 2} = 5\\sqrt{2}.$$`,
        },
        {
          kind: 'example',
          title: 'Worked Example 2 — Menyatukan Suku Sejenis',
          md: `$$\\sqrt{12} + \\sqrt{27} = 2\\sqrt{3} + 3\\sqrt{3} = 5\\sqrt{3}.$$`,
        },
        {
          kind: 'example',
          title: 'Worked Example 3 — Perkalian Akar',
          md: `$$\\sqrt{18} \\cdot \\sqrt{2} = \\sqrt{36} = 6.$$`,
        },
        {
          kind: 'mistake',
          md: `Operasi di dalam akar tidak mengikuti pola $\\sqrt{a} + \\sqrt{b} = \\sqrt{a + b}$.

Sederhanakan masing-masing akar lebih dahulu, lalu gabungkan hanya jika bagian akarnya sama.`,
        },
        {
          kind: 'checkpoint',
          md: `1. Sederhanakan $\\sqrt{98}$.
2. Sederhanakan $2\\sqrt{5} + 7\\sqrt{5}$.
3. Apakah $\\sqrt{7} + \\sqrt{2} = \\sqrt{9}$? Jelaskan.`,
        },
        {
          kind: 'summary',
          md: `Bentuk akar disederhanakan dengan mengeluarkan faktor kuadrat sempurna. Suku akar hanya dapat dijumlahkan atau dikurangkan jika setelah penyederhanaan bagian akarnya sama.`,
        },
      ],
    },
    {
      id: 'p02-u3',
      number: 3,
      title: 'Merasionalkan Penyebut',
      pageFrom: 5,
      pageTo: 7,
      sections: [
        {
          kind: 'figure',
          title: 'Mengapa Pasangan Sekawan Merasionalkan Penyebut?',
          md: `$$a + \\sqrt{b} \\quad \\times \\quad a - \\sqrt{b} \\quad = \\quad a^2 - b$$

penyebut semula × pasangan sekawan

$$(a + \\sqrt{b})(a - \\sqrt{b}) = a^2 - (\\sqrt{b})^2 = a^2 - b$$

Akar hilang dari penyebut karena terbentuk selisih dua kuadrat.`,
        },
        {
          kind: 'goal',
          md: `Anda dapat menghilangkan bentuk akar dari penyebut tanpa mengubah nilai pecahan, baik untuk penyebut satu suku maupun penyebut dua suku.`,
        },
        {
          kind: 'prereq',
          md: `Mengalikan pecahan dengan bentuk $k/k$ untuk $k \\neq 0$ tidak mengubah nilainya. Untuk dua suku, ingat identitas $(a + b)(a - b) = a^2 - b^2$.`,
        },
        {
          kind: 'concept',
          title: '1. Penyebut Satu Akar',
          md: `Jika penyebut berbentuk $\\sqrt{b}$, kalikan pembilang dan penyebut dengan $\\sqrt{b}$:

$$\\frac{a}{\\sqrt{b}} \\cdot \\frac{\\sqrt{b}}{\\sqrt{b}} = \\frac{a\\sqrt{b}}{b}.$$

Tujuannya bukan “menghilangkan akar” secara sembarang, tetapi membentuk penyebut rasional melalui perkalian yang bernilai 1.`,
        },
        {
          kind: 'concept',
          title: '2. Penyebut Dua Suku: Pasangan Sekawan',
          md: `Untuk penyebut $a + \\sqrt{b}$, gunakan pasangan sekawan $a - \\sqrt{b}$. Produk keduanya adalah

$$(a + \\sqrt{b})(a - \\sqrt{b}) = a^2 - b.$$

Karena hasilnya tidak lagi mengandung akar, penyebut menjadi rasional.`,
        },
        {
          kind: 'example',
          title: 'Worked Example 1 — Satu Akar',
          md: `$$\\frac{5}{\\sqrt{3}} = \\frac{5}{\\sqrt{3}} \\cdot \\frac{\\sqrt{3}}{\\sqrt{3}} = \\frac{5\\sqrt{3}}{3}.$$`,
        },
        {
          kind: 'example',
          title: 'Worked Example 2 — Pasangan Sekawan',
          md: `Rasionalkan $\\dfrac{1}{3 + \\sqrt{2}}$.

Kalikan dengan $(3 - \\sqrt{2})/(3 - \\sqrt{2})$:

$$\\frac{1}{3 + \\sqrt{2}} = \\frac{3 - \\sqrt{2}}{9 - 2} = \\frac{3 - \\sqrt{2}}{7}.$$`,
        },
        {
          kind: 'example',
          title: 'Worked Example 3 — Penyederhanaan Akhir',
          md: `$$\\frac{2}{\\sqrt{5} - 1} \\cdot \\frac{\\sqrt{5} + 1}{\\sqrt{5} + 1} = \\frac{2(\\sqrt{5} + 1)}{5 - 1} = \\frac{\\sqrt{5} + 1}{2}.$$`,
        },
        {
          kind: 'why',
          md: `Pasangan sekawan dipilih karena selisih dua kuadrat mengubah $(\\sqrt{b})^2$ menjadi $b$. Jadi strategi ini mempunyai alasan aljabar yang jelas.`,
        },
        {
          kind: 'mistake',
          md: `Kalikan **pembilang dan penyebut** dengan faktor yang sama. Mengalikan penyebut saja akan mengubah nilai pecahan.`,
        },
        {
          kind: 'checkpoint',
          md: `1. Rasionalkan $2/\\sqrt{7}$.
2. Apa pasangan sekawan dari $4 + \\sqrt{3}$?
3. Mengapa $(2 + \\sqrt{3})(2 - \\sqrt{3})$ menjadi bilangan rasional?`,
        },
        {
          kind: 'summary',
          md: `Penyebut satu akar dirasionalkan dengan faktor akar yang sama. Penyebut dua suku dirasionalkan dengan pasangan sekawan agar terbentuk selisih dua kuadrat.`,
        },
      ],
    },
    {
      id: 'p02-u4',
      number: 4,
      title: 'Pangkat Pecahan dan Hubungannya dengan Bentuk Akar',
      pageFrom: 7,
      pageTo: 8,
      sections: [
        {
          kind: 'goal',
          md: `Anda dapat mengubah pangkat pecahan ke bentuk akar dan sebaliknya, menghitung nilai pangkat pecahan, serta memperhatikan syarat bilangan real yang diberikan sumber.`,
        },
        {
          kind: 'concept',
          title: '1. Dua Notasi untuk Ide yang Sama',
          md: `Hubungan dasar adalah

$$a^{1/n} = \\sqrt[n]{a}, \\qquad a^{m/n} = \\sqrt[n]{a^m} = (\\sqrt[n]{a})^m.$$

Penyebut $n$ pada eksponen menunjukkan indeks akar, sedangkan pembilang $m$ menunjukkan pangkat.`,
        },
        {
          kind: 'concept',
          title: '2. Syarat pada Bilangan Real',
          md: `Sesuai cakupan sumber, jika indeks akar $n$ genap, bentuk di dalam akar harus tidak negatif agar hasilnya real. Karena itu kita tidak memaksakan akar genap dari bilangan negatif sebagai bilangan real.`,
        },
        {
          kind: 'example',
          title: 'Worked Example 1 — Dari Pangkat Pecahan ke Akar',
          md: `$$x^{3/5} = \\sqrt[5]{x^3}.$$`,
        },
        {
          kind: 'example',
          title: 'Worked Example 2 — Menghitung Nilai',
          md: `$$64^{2/3} = (\\sqrt[3]{64})^2 = 4^2 = 16.$$`,
        },
        {
          kind: 'example',
          title: 'Worked Example 3 — Indeks Genap',
          md: `$$81^{3/4} = (\\sqrt[4]{81})^3 = 3^3 = 27.$$`,
        },
        {
          kind: 'note',
          title: 'Strategi Perhitungan',
          md: `Jika bilangan mempunyai akar yang mudah, ambil akar lebih dahulu lalu pangkatkan. Ini biasanya menghindari angka besar. Misalnya untuk $32^{3/5}$, hitung $\\sqrt[5]{32} = 2$, lalu $2^3 = 8$.`,
        },
        {
          kind: 'mistake',
          md: `Penyebut eksponen pecahan menjadi indeks akar. Bentuk $a^{3/4}$ bukan $\\sqrt[3]{a^4}$, melainkan $\\sqrt[4]{a^3}$.`,
        },
        {
          kind: 'checkpoint',
          md: `1. Ubah $\\sqrt[3]{y^2}$ menjadi pangkat pecahan.
2. Hitung $27^{2/3}$.
3. Dalam bilangan real, mengapa $(-16)^{1/4}$ tidak dipakai sebagai nilai real?`,
        },
        {
          kind: 'summary',
          md: `Pangkat pecahan dan akar adalah representasi yang ekuivalen. Baca penyebut eksponen sebagai indeks akar dan perhatikan batas real untuk akar berindeks genap.`,
        },
      ],
    },
    {
      id: 'p02-u5',
      number: 5,
      title: 'Logaritma sebagai Kebalikan dari Perpangkatan',
      pageFrom: 8,
      pageTo: 10,
      sections: [
        {
          kind: 'figure',
          title: 'Perpangkatan dan Logaritma adalah Hubungan Kebalikan',
          md: `$$a^p = b \\quad \\Longleftrightarrow \\quad \\log_a b = p$$

“$a$ dipangkatkan $p$ menghasilkan $b$” $\\iff$ “$p$ adalah pangkat yang dicari”

Syarat bilangan real: $a > 0$, $a \\neq 1$, dan $b > 0$.

Contoh: $2^3 = 8 \\Longleftrightarrow \\log_2 8 = 3$`,
        },
        {
          kind: 'goal',
          md: `Anda dapat membaca logaritma sebagai pertanyaan tentang eksponen, mengubah bentuk pangkat ke logaritma dan sebaliknya, serta memeriksa syarat basis dan argumen.`,
        },
        {
          kind: 'prereq',
          md: `Anda sudah dapat membaca $a^p = b$. Logaritma menggunakan hubungan yang sama, tetapi nilai yang dicari adalah eksponennya.`,
        },
        {
          kind: 'concept',
          title: '1. Definisi Hubungan Kebalikan',
          md: `Untuk bilangan real yang memenuhi syarat,

$$a^p = b \\iff \\log_a b = p, \\quad a > 0, \\ a \\neq 1, \\ b > 0.$$

Jadi $\\log_a b$ menjawab pertanyaan: “basis $a$ harus dipangkatkan berapa agar menghasilkan $b$?”`,
        },
        {
          kind: 'concept',
          title: '2. Mengubah Bentuk',
          md: `Contoh $3^4 = 81$ setara dengan $\\log_3 81 = 4$. Sebaliknya $\\log_5 125 = 3$ setara dengan $5^3 = 125$.`,
        },
        {
          kind: 'concept',
          title: '3. Logaritma Biasa',
          md: `Dalam sumber, notasi $\\log b$ tanpa basis digunakan untuk logaritma basis 10. Karena $10^3 = 1000$, maka $\\log 1000 = 3$.`,
        },
        {
          kind: 'example',
          title: 'Worked Example 1 — Nilai Positif',
          md: `$\\log_2 64 = 6$ karena $2^6 = 64$.`,
        },
        {
          kind: 'example',
          title: 'Worked Example 2 — Eksponen Negatif',
          md: `$\\log 0.001 = -3$ karena $10^{-3} = 0.001$.`,
        },
        {
          kind: 'example',
          title: 'Worked Example 3 — Memeriksa Syarat',
          md: `Ekspresi $\\log_1 7$ tidak memenuhi syarat karena basis logaritma tidak boleh 1. Ekspresi $\\log_3 0$ juga tidak memenuhi syarat karena argumen harus positif.`,
        },
        {
          kind: 'why',
          title: 'Mengapa Basis Tidak Boleh 1?',
          md: `Jika basis 1, maka $1^p = 1$ untuk setiap $p$, sehingga tidak dapat menghasilkan bilangan positif lain dan tidak memberi nilai eksponen yang unik sesuai makna logaritma.`,
        },
        {
          kind: 'mistake',
          md: `Basis harus positif dan bukan 1; argumen harus positif. Syarat ini bagian dari definisi, bukan tambahan opsional.`,
        },
        {
          kind: 'checkpoint',
          md: `1. Ubah $4^3 = 64$ ke bentuk logaritma.
2. Hitung $\\log_7 49$.
3. Apakah $\\log_{-2} 8$ memenuhi syarat sumber pada bilangan real?`,
        },
        {
          kind: 'summary',
          md: `Logaritma adalah bentuk kebalikan dari perpangkatan: $a^p = b$ dan $\\log_a b = p$ menyatakan hubungan yang sama.`,
        },
      ],
    },
    {
      id: 'p02-u6',
      number: 6,
      title: 'Sifat-Sifat Logaritma dan Strategi Terpadu',
      pageFrom: 11,
      pageTo: 13,
      sections: [
        {
          kind: 'goal',
          md: `Anda dapat menggunakan sifat perkalian, pembagian, pangkat, dan perubahan basis pada logaritma, serta memilih transformasi yang tepat tanpa mengubah makna ekspresi.`,
        },
        {
          kind: 'prereq',
          md: `Semua logaritma yang digunakan harus memenuhi syarat definisi. Pada sifat-sifat berikut, besaran yang masuk ke logaritma harus berada pada domain yang sesuai.`,
        },
        {
          kind: 'concept',
          title: '1. Empat Sifat Utama',
          md: `- Perkalian: $\\log_a (MN) = \\log_a M + \\log_a N$.
- Pembagian: $\\log_a (M/N) = \\log_a M - \\log_a N$.
- Pangkat: $\\log_a (M^p) = p \\log_a M$.
- Perubahan basis: $\\log_a N = \\dfrac{\\log N}{\\log a}$.`,
        },
        {
          kind: 'concept',
          title: '2. Arah Pemakaian Sifat',
          md: `Sifat dapat dipakai untuk **menggabungkan** beberapa logaritma menjadi satu atau **menguraikan** satu logaritma menjadi beberapa bagian. Pilih arah yang membuat ekspresi lebih mudah dihitung atau dibandingkan.`,
        },
        {
          kind: 'example',
          title: 'Worked Example 1 — Perkalian',
          md: `$$\\log 20 + \\log 5 = \\log(100) = 2.$$`,
        },
        {
          kind: 'example',
          title: 'Worked Example 2 — Pembagian',
          md: `$$\\log_2 48 - \\log_2 3 = \\log_2 16 = 4.$$`,
        },
        {
          kind: 'example',
          title: 'Worked Example 3 — Pangkat dan Penggabungan',
          md: `Untuk $x > 0$ dan $y > 0$,

$$2 \\log_3 x - \\log_3 y = \\log_3(x^2) - \\log_3 y = \\log_3 \\left( \\frac{x^2}{y} \\right).$$`,
        },
        {
          kind: 'example',
          title: 'Worked Example 4 — Perubahan Basis',
          md: `$$\\log_5 7 = \\frac{\\log 7}{\\log 5}.$$`,
        },
        {
          kind: 'note',
          title: 'Strategi Terpadu: Pangkat, Akar, atau Logaritma?',
          md: `- Jika bentuk memakai basis sama dan eksponen, gunakan aturan pangkat.
- Jika terdapat faktor kuadrat sempurna di dalam akar, sederhanakan akar dahulu.
- Jika penyebut memuat akar, pertimbangkan rasionalisasi.
- Jika pertanyaan mencari eksponen, baca dalam bentuk logaritma.
- Jika beberapa logaritma berbasis sama dijumlah/dikurangkan, gunakan sifat produk/hasil bagi.`,
        },
        {
          kind: 'example',
          title: 'Contoh Terpadu dari Data Logaritma',
          md: `Jika $\\log 2 = 0.3010$ dan $\\log 3 = 0.4771$, maka

$$\\log 18 = \\log(2 \\cdot 3^2) = \\log 2 + 2 \\log 3 = 0.3010 + 0.9542 = 1.2552.$$`,
        },
        {
          kind: 'mistake',
          md: `$\\log M + \\log N = \\log(MN)$, bukan $\\log(M + N)$. Operasi antarlogaritma berubah menjadi operasi pada argumen sesuai sifat yang tepat.`,
        },
        {
          kind: 'checkpoint',
          md: `1. Hitung $\\log_5 25 + \\log_5 5$.
2. Gabungkan $3 \\log_2 x - \\log_2 y$ menjadi satu logaritma.
3. Tuliskan $\\log_7 11$ menggunakan logaritma basis 10.`,
        },
        {
          kind: 'summary',
          md: `Logaritma mengubah perkalian menjadi penjumlahan, pembagian menjadi pengurangan, dan pangkat menjadi faktor. Keberhasilan penyederhanaan bergantung pada membaca struktur sebelum memilih sifat.`,
        },
      ],
    },
  ],
}

export default m
