import type { Module, Unit } from '../types'

// P12 — Turunan Trigonometri, Aturan Rantai, De L'Hospital, dan Turunan Tingkat Tinggi

const units: Unit[] = [
  {
    id: 'p12-u1',
    number: 1,
    title: 'Turunan Fungsi Trigonometri Dasar dan Hubungannya',
    pageFrom: 1,
    pageTo: 2,
    sections: [
      {
        kind: 'goal',
        md: 'Anda dapat menurunkan enam fungsi trigonometri dasar dan memahami tanda serta hubungan yang menghubungkan rumus-rumus tersebut.',
      },
      {
        kind: 'prereq',
        md: 'Dari P11, ingat aturan kelipatan konstanta, jumlah, selisih, hasil kali, dan hasil bagi. Identitas $\\sin^2 x + \\cos^2 x = 1$ juga digunakan saat menurunkan beberapa rumus trigonometri dari rumus dasar.',
      },
      {
        kind: 'concept',
        title: 'Penjelasan Konsep Lengkap',
        md: 'P12 memperluas aturan turunan ke fungsi trigonometri. Rumus yang perlu dikenali adalah:\n\n$$D_x(\\sin x) = \\cos x, \\quad D_x(\\cos x) = -\\sin x,$$\n\n$$D_x(\\tan x) = \\sec^2 x, \\quad D_x(\\cot x) = -\\csc^2 x,$$\n\n$$D_x(\\sec x) = \\sec x \\tan x, \\quad D_x(\\csc x) = -\\csc x \\cot x.$$\n\nTanda negatif terutama harus diperhatikan pada turunan $\\cos x$, $\\cot x$, dan $\\csc x$.',
      },
      {
        kind: 'why',
        md: 'Rumus $\\tan x$, $\\cot x$, $\\sec x$, dan $\\csc x$ tidak berdiri terpisah dari aturan P11. Contohnya, karena $\\tan x = \\dfrac{\\sin x}{\\cos x}$, aturan hasil bagi memberi\n\n$$D_x(\\tan x) = \\frac{\\cos^2 x + \\sin^2 x}{\\cos^2 x} = \\sec^2 x.$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 1',
        md: 'Jika $y = 3 \\sin x + 2 \\cos x$, maka $y\' = 3 \\cos x - 2 \\sin x$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 2',
        md: 'Jika $y = 5 \\tan x - 4 \\cot x$, maka $y\' = 5 \\sec^2 x + 4 \\csc^2 x$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 3',
        md: 'Jika $y = 2 \\sec x + 3 \\csc x$, maka $y\' = 2 \\sec x \\tan x - 3 \\csc x \\cot x$.',
      },
      {
        kind: 'mistake',
        md: 'Jangan menghilangkan tanda negatif pada turunan $\\cos x$, $\\cot x$, atau $\\csc x$. Jangan pula menulis $(\\tan x)\' = \\tan^2 x$; hasil yang benar adalah $\\sec^2 x$.',
      },
      {
        kind: 'checkpoint',
        md: '1. Apa turunan $\\cos x$?\n2. Apa turunan $\\cot x$?\n3. Mengapa aturan hasil bagi dapat dipakai untuk memperoleh turunan $\\tan x$?',
      },
      {
        kind: 'summary',
        md: 'Kuasai enam rumus turunan trigonometri dasar dan hubungkan rumus turunan rasio dengan aturan hasil bagi dari P11.',
      },
    ],
  },
  {
    id: 'p12-u2',
    number: 2,
    title: 'Aturan Rantai untuk Fungsi Komposisi',
    pageFrom: 2,
    pageTo: 4,
    sections: [
      {
        kind: 'goal',
        md: 'Anda dapat mengenali fungsi di dalam fungsi dan menggunakan aturan rantai untuk komposisi satu lapis.',
      },
      {
        kind: 'prereq',
        md: 'Anda harus dapat menurunkan fungsi luar dengan aturan dasar/trigonometri dan menurunkan fungsi dalam secara terpisah.',
      },
      {
        kind: 'concept',
        title: 'Penjelasan Konsep Lengkap',
        md: 'Jika $y = f(u)$ dan $u = g(x)$, maka perubahan $y$ terhadap $x$ diperoleh dengan mengalikan turunan luar terhadap $u$ dan turunan $u$ terhadap $x$:\n\n$$\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}.$$\n\nVersi operasionalnya: **turunkan fungsi luar, pertahankan fungsi dalam, lalu kalikan dengan turunan fungsi dalam.**',
      },
      {
        kind: 'example',
        title: 'Worked Example 1',
        md: 'Untuk $y = \\sin(3x + 1)$, fungsi luar adalah $\\sin u$, bagian dalam $u = 3x + 1$. Jadi\n\n$$y\' = \\cos(3x + 1) \\cdot 3 = 3\\cos(3x + 1).$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 2',
        md: 'Untuk $y = \\cos(x^2 + 4)$,\n\n$$y\' = -\\sin(x^2 + 4) \\cdot 2x = -2x \\sin(x^2 + 4).$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 3',
        md: 'Untuk $y = (2x^3 - 1)^5$,\n\n$$y\' = 5(2x^3 - 1)^4 \\cdot 6x^2 = 30x^2(2x^3 - 1)^4.$$',
      },
      {
        kind: 'mistake',
        md: 'Kesalahan khas adalah berhenti setelah menurunkan fungsi luar. Pada $\\sin(3x)$, jawaban $\\cos(3x)$ belum selesai; masih harus dikalikan turunan $3x$, yaitu $3$.',
      },
      {
        kind: 'checkpoint',
        md: '1. Dalam $\\sin(3x + 1)$, apa fungsi dalamnya?\n2. Mengapa $(\\sin 5x)\' = 5\\cos 5x$?\n3. Apa dua turunan yang dikalikan pada notasi Leibniz aturan rantai?',
      },
      {
        kind: 'summary',
        md: 'Aturan rantai diperlukan ketika input sebuah fungsi masih merupakan fungsi dari $x$.',
      },
    ],
  },
  {
    id: 'p12-u3',
    number: 3,
    title: 'Aturan Rantai Berlapis',
    pageFrom: 4,
    pageTo: 6,
    sections: [
      {
        kind: 'figure',
        title: 'Aturan Rantai Berlapis',
        md: 'Tiga lapisan pada $[\\sin(u)]^4$ dengan $u = 2x^3$:\n\n- **Lapisan luar:** $[\\sin(u)]^4$\n- **Lapisan tengah:** $\\sin(u)$\n- **Lapisan dalam:** $u = 2x^3$\n\nTurunkan tiap lapisan, lalu kalikan:\n\n$$4\\sin^3(2x^3) \\cdot \\cos(2x^3) \\cdot 6x^2 = 24x^2\\sin^3(2x^3)\\cos(2x^3)$$',
      },
      {
        kind: 'goal',
        md: 'Anda dapat menerapkan aturan rantai lebih dari sekali pada fungsi yang mempunyai beberapa lapisan komposisi.',
      },
      {
        kind: 'prereq',
        md: 'Kuasai aturan pangkat, turunan trigonometri, dan aturan rantai satu lapis.',
      },
      {
        kind: 'concept',
        title: 'Penjelasan Konsep Lengkap',
        md: 'Fungsi seperti $[\\sin(2x^3)]^4$ mempunyai tiga lapisan: pangkat sebagai lapisan luar, sinus sebagai lapisan tengah, dan $2x^3$ sebagai lapisan dalam. Setiap lapisan yang masih bergantung pada $x$ memberi faktor turunan.',
      },
      {
        kind: 'main',
        md: '$$\\frac{d}{dx}\\left[\\sin(2x^3)\\right]^4 = 4\\sin^3(2x^3) \\cdot \\cos(2x^3) \\cdot 6x^2.$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 1',
        md: '$y = \\sin^4(2x^3)$ memberi\n\n$$y\' = 24x^2\\sin^3(2x^3)\\cos(2x^3).$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 2',
        md: '$y = [\\cos(3x)]^5$ memberi\n\n$$y\' = 5\\cos^4(3x)(-\\sin(3x)) \\cdot 3 = -15\\cos^4(3x)\\sin(3x).$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 3',
        md: '$y = (x^2 + 1)^7$ hanya memerlukan dua lapisan:\n\n$$y\' = 7(x^2 + 1)^6(2x) = 14x(x^2 + 1)^6.$$',
      },
      {
        kind: 'mistake',
        md: 'Jika setelah satu kali menurunkan masih ada fungsi bagian dalam yang bergantung pada $x$, aturan rantai belum selesai.',
      },
      {
        kind: 'checkpoint',
        md: '1. Berapa banyak lapisan pada $[\\sin(5x^2)]^3$?\n2. Faktor apa yang berasal dari turunan $5x^2$?\n3. Mengapa turunan $[\\cos(3x)]^5$ bertanda negatif?',
      },
      {
        kind: 'summary',
        md: 'Pada komposisi berlapis, turunkan dari lapisan luar ke dalam dan kalikan semua faktor turunan yang muncul.',
      },
    ],
  },
  {
    id: 'p12-u4',
    number: 4,
    title: "De L'Hospital: Syarat dan Prosedur",
    pageFrom: 6,
    pageTo: 7,
    sections: [
      {
        kind: 'figure',
        title: "Keputusan De L'Hospital",
        md: 'Alur keputusan:\n\n1. **Substitusi terlebih dahulu.**\n2. **Bentuk $0/0$ atau $\\infty/\\infty$?**\n   - Tidak → gunakan cara yang lebih langsung.\n   - Ya → turunkan pembilang & penyebut.\n3. **Hitung limit baru; ulangi bila masih tak tentu** (kembali ke pemeriksaan bentuk).',
      },
      {
        kind: 'goal',
        md: "Anda dapat menentukan kapan De L'Hospital boleh digunakan dan menerapkan prosedurnya dengan urutan yang benar.",
      },
      {
        kind: 'prereq',
        md: 'Dari P10, ingat substitusi limit dan bentuk tak tentu. Dari P11–P12, Anda perlu dapat menurunkan pembilang dan penyebut.',
      },
      {
        kind: 'concept',
        title: 'Penjelasan Konsep Lengkap',
        md: "Pada cakupan P12, De L'Hospital digunakan setelah substitusi menghasilkan bentuk tak tentu $\\dfrac{0}{0}$ atau $\\dfrac{\\infty}{\\infty}$, dan fungsi yang terlibat dapat diturunkan di sekitar titik tujuan. Bentuk dasarnya adalah\n\n$$\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f\'(x)}{g\'(x)},$$\n\nketika syarat De L'Hospital yang relevan terpenuhi. Jika limit baru masih berbentuk tak tentu yang sesuai, proses dapat diulang.",
      },
      {
        kind: 'concept',
        title: 'Urutan Kerja',
        md: "1. Substitusi terlebih dahulu.\n2. Pastikan terbentuk $\\dfrac{0}{0}$ atau $\\dfrac{\\infty}{\\infty}$.\n3. Turunkan pembilang dan penyebut secara terpisah.\n4. Hitung limit baru.\n5. Ulangi jika masih diperlukan dan masih memenuhi syarat.",
      },
      {
        kind: 'example',
        title: 'Worked Example 1',
        md: '$\\lim_{x \\to 0} \\dfrac{\\sin x}{x}$ memberi $\\dfrac{0}{0}$, sehingga\n\n$$\\lim_{x \\to 0} \\frac{\\cos x}{1} = 1.$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 2',
        md: "$\\lim_{x \\to 0} \\dfrac{1 - \\cos x}{x^2}$ memberi $\\dfrac{0}{0}$. Satu kali De L'Hospital memberi $\\lim \\dfrac{\\sin x}{2x}$, masih $\\dfrac{0}{0}$, sehingga diulang: $\\lim \\dfrac{\\cos x}{2} = \\dfrac{1}{2}$.",
      },
      {
        kind: 'mistake',
        md: "De L'Hospital bukan aturan untuk setiap pecahan. Selalu cek hasil substitusi sebelum menurunkan pembilang dan penyebut.",
      },
      {
        kind: 'checkpoint',
        md: '1. Dua bentuk tak tentu apa yang digunakan dalam cakupan P12?\n2. Apa langkah pertama sebelum memakai De L\'Hospital?\n3. Kapan proses boleh diulang?',
      },
      {
        kind: 'summary',
        md: "De L'Hospital adalah prosedur bersyarat: cek bentuk tak tentu, turunkan pembilang/penyebut, lalu hitung limit baru.",
      },
    ],
  },
  {
    id: 'p12-u5',
    number: 5,
    title: "Memilih: De L'Hospital atau Cara Lebih Sederhana",
    pageFrom: 8,
    pageTo: 9,
    sections: [
      {
        kind: 'goal',
        md: "Anda dapat membaca struktur limit dan memutuskan apakah De L'Hospital diperlukan.",
      },
      {
        kind: 'concept',
        title: 'Penjelasan Konsep Lengkap',
        md: "Tidak semua limit pecahan memerlukan De L'Hospital. Jika substitusi langsung memberi nilai tentu, gunakan substitusi. Jika dapat diselesaikan secara sederhana dengan teknik yang sudah dikuasai dan tidak menghasilkan bentuk tak tentu yang sesuai, jangan memaksakan De L'Hospital.",
      },
      {
        kind: 'example',
        title: 'Worked Example 1',
        md: "$$\\lim_{x \\to 2} \\frac{x+1}{x+3} = \\frac{3}{5}.$$\n\nPenyebut tidak nol; De L'Hospital tidak diperlukan.",
      },
      {
        kind: 'example',
        title: 'Worked Example 2',
        md: "$\\lim_{x \\to 0} \\dfrac{\\sin(2x)}{x}$ memberi $\\dfrac{0}{0}$, sehingga De L'Hospital dapat dipakai:\n\n$$\\lim 2\\cos(2x) = 2.$$",
      },
      {
        kind: 'example',
        title: 'Worked Example 3',
        md: 'Jika substitusi memberi pembilang $4$ dan penyebut $2$, hasilnya langsung $2$. Menurunkan pembilang dan penyebut justru mengubah persoalan tanpa alasan.',
      },
      {
        kind: 'why',
        md: 'Keputusan metode merupakan bagian dari kompetensi. Tujuannya bukan memakai alat paling rumit, tetapi memilih aturan yang sah dan efisien untuk struktur yang diberikan.',
      },
      {
        kind: 'mistake',
        md: '"Berbentuk pecahan" tidak sama dengan "berbentuk tak tentu". De L\'Hospital memerlukan pemeriksaan bentuk limit setelah substitusi.',
      },
      {
        kind: 'checkpoint',
        md: '1. Jika substitusi memberi $\\dfrac{5}{2}$, apakah De L\'Hospital diperlukan?\n2. Jika substitusi memberi $\\dfrac{0}{0}$, apa pemeriksaan berikutnya?\n3. Mengapa memilih metode merupakan bagian dari pemahaman, bukan sekadar perhitungan?',
      },
      {
        kind: 'summary',
        md: "Substitusi adalah pemeriksaan awal. De L'Hospital hanya digunakan pada kondisi yang sesuai.",
      },
    ],
  },
  {
    id: 'p12-u6',
    number: 6,
    title: 'Turunan Tingkat Tinggi',
    pageFrom: 9,
    pageTo: 10,
    sections: [
      {
        kind: 'goal',
        md: 'Anda dapat menghitung turunan kedua, ketiga, dan tingkat lebih tinggi sebagai proses penurunan berulang.',
      },
      {
        kind: 'concept',
        title: 'Penjelasan Konsep Lengkap',
        md: "Turunan tingkat tinggi diperoleh dengan menurunkan hasil turunan sebelumnya:\n\n$$f'(x), \\quad f''(x), \\quad f'''(x), \\quad \\dots, \\quad f^{(n)}(x).$$\n\nTurunan kedua bukan kuadrat dari turunan pertama. Notasi $f''$ berarti \"turunkan $f'$ sekali lagi\".",
      },
      {
        kind: 'example',
        title: 'Worked Example 1',
        md: 'Jika $y = x^4$, maka $y\' = 4x^3$, $y\'\' = 12x^2$, dan $y\'\'\' = 24x$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 2',
        md: 'Jika $y = \\sin x$, maka $y\' = \\cos x$, $y\'\' = -\\sin x$, $y\'\'\' = -\\cos x$, dan $y^{(4)} = \\sin x$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 3',
        md: 'Jika $y = 3x^5 - 2x^3$, maka $y\' = 15x^4 - 6x^2$, $y\'\' = 60x^3 - 12x$, dan $y\'\'\' = 180x^2 - 12$.',
      },
      {
        kind: 'mistake',
        md: 'Jika $y\' = 3x^2$, maka $y\'\' = 6x$, bukan $(3x^2)^2 = 9x^4$.',
      },
      {
        kind: 'checkpoint',
        md: '1. Apa arti $f\'\'\'(x)$?\n2. Jika $f\'(x) = 5x^4$, berapa $f\'\'(x)$?\n3. Apakah $f\'\' = (f\')^2$?',
      },
      {
        kind: 'summary',
        md: 'Turunan tingkat tinggi adalah turunan berulang dari hasil sebelumnya, bukan pemangkatan.',
      },
    ],
  },
  {
    id: 'p12-u7',
    number: 7,
    title: 'Menggabungkan Aturan dan Mendiagnosis Strategi',
    pageFrom: 10,
    pageTo: 12,
    sections: [
      {
        kind: 'figure',
        title: 'Baca Struktur Sebelum Menurunkan',
        md: 'Peta aturan berdasarkan bentuk fungsi:\n\n- $\\sin x, \\cos x, \\dots$ → **aturan trigonometri**\n- $f(g(x))$ → **aturan rantai**\n- $f(x)g(x)$ → **hasil kali + rantai**\n- $f(x)/g(x)$ → **hasil bagi + rantai**\n\nJika yang diminta limit pecahan: cek bentuk tak tentu sebelum De L\'Hospital.',
      },
      {
        kind: 'goal',
        md: 'Anda dapat membaca struktur fungsi yang lebih panjang, memilih kombinasi aturan yang diperlukan, dan mengenali kesalahan strategi.',
      },
      {
        kind: 'prereq',
        md: "Gunakan aturan hasil kali/hasil bagi dari P11, turunan trigonometri, aturan rantai, De L'Hospital, dan turunan tingkat tinggi sesuai struktur masalah.",
      },
      {
        kind: 'concept',
        title: 'Penjelasan Konsep Lengkap',
        md: 'Satu fungsi dapat memerlukan lebih dari satu aturan. Contohnya, $x^2\\sin(3x)$ merupakan hasil kali; faktor kedua sekaligus merupakan fungsi komposisi. Karena itu aturan hasil kali dan aturan rantai digunakan bersama.',
      },
      {
        kind: 'example',
        title: 'Worked Example 1',
        md: 'Jika $y = x^2 \\sin(3x)$,\n\n$$y\' = 2x\\sin(3x) + x^2 \\cdot 3\\cos(3x).$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 2',
        md: 'Jika $y = (x^2 + 1)\\cos(2x)$,\n\n$$y\' = 2x\\cos(2x) - 2(x^2 + 1)\\sin(2x).$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 3',
        md: 'Jika $y = \\dfrac{\\sin x}{x+1}$, aturan utama adalah hasil bagi; turunan sinus digunakan pada pembilang:\n\n$$y\' = \\frac{(x+1)\\cos x - \\sin x}{(x+1)^2}.$$',
      },
      {
        kind: 'diagnosis',
        title: 'Diagnosis Kesalahan Utama',
        md: '- $(\\cos x)\' = \\sin x$ — salah karena tanda negatif hilang.\n- $(\\sin(3x))\' = \\cos(3x)$ — belum lengkap karena faktor $3$ hilang.\n- "Setiap pecahan boleh memakai De L\'Hospital" — salah.\n- Turunan kedua bukan kuadrat turunan pertama.',
      },
      {
        kind: 'checkpoint',
        md: '1. Aturan apa yang diperlukan untuk $\\sin(4x)$?\n2. Aturan apa yang diperlukan untuk $x\\cos x$?\n3. Apa pemeriksaan pertama sebelum De L\'Hospital?',
      },
      {
        kind: 'summary',
        md: "Baca struktur terlebih dahulu; gunakan kombinasi aturan yang memang diperlukan dan audit tanda, faktor rantai, syarat De L'Hospital, serta makna turunan tingkat tinggi.",
      },
    ],
  },
]

const m: Module = {
  id: 'p12',
  code: 'P12',
  title: "Turunan Trigonometri, Aturan Rantai, De L'Hospital, dan Turunan Tingkat Tinggi",
  pageFrom: 1,
  pageTo: 12,
  units,
}

export default m
