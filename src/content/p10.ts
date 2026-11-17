import type { Module, Unit } from '../types'

// P10 — Limit dan Kekontinuan
// Prose from the PDF text layer; every limit expression verified against the
// rendered pages (the text layer drops most formulas in this module).

const units: Unit[] = [
  {
    id: 'p10-u1',
    number: 1,
    title: 'Makna Limit dan Limit Satu Sisi',
    pageFrom: 1,
    pageTo: 2,
    sections: [
      {
        kind: 'figure',
        title: 'Limit melihat perilaku di sekitar titik',
        md: 'Grafik fungsi pada bidang Kartesius dengan sumbu $x$ bertanda $0$ sampai $4$ dan sumbu $y$ sampai $6$. Pada $x = 2$ fungsi bernilai $f(2) = 5$ (titik terdefinisi), sedangkan nilai yang didekati dari kedua arah adalah $3$. Jadi grafik memperlihatkan dua nilai berbeda pada $x$ yang sama: nilai limit $3$ dan nilai fungsi $5$.',
      },
      {
        kind: 'goal',
        md: 'Anda dapat menjelaskan makna $\\lim_{x \\to a} f(x)$, membedakan nilai limit dari nilai fungsi $f(a)$, serta menentukan kapan limit dua sisi ada dari limit kiri dan limit kanan.',
      },
      {
        kind: 'prereq',
        md: 'Ingat bahwa notasi $x \\to a$ berarti nilai $x$ dibuat semakin dekat ke $a$. Pada limit, kita memeriksa perilaku fungsi di sekitar titik, bukan hanya nilai tepat pada titik tersebut.',
      },
      {
        kind: 'concept',
        title: 'Penjelasan Konsep Lengkap',
        md: 'Pernyataan $\\lim_{x \\to a} f(x) = L$ dibaca: ketika $x$ mendekati $a$, nilai $f(x)$ mendekati $L$.\n\nNilai $x$ tidak harus sama dengan $a$. Karena itu, suatu fungsi dapat mempunyai limit di $a$ meskipun nilai $f(a)$ berbeda dari limit, atau bahkan $f(a)$ tidak didefinisikan.\n\nPendekatan ke $a$ dapat dilakukan dari dua arah. Limit dari kiri ditulis $\\lim_{x \\to a^-} f(x)$, sedangkan limit dari kanan ditulis $\\lim_{x \\to a^+} f(x)$.',
      },
      {
        kind: 'main',
        md: '$$\\lim_{x \\to a} f(x) = L \\quad \\text{ada jika} \\quad \\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x) = L.$$\n\nJika kedua limit satu sisi berbeda, limit dua sisi tidak ada.',
      },
      {
        kind: 'why',
        md: 'Bayangkan bergerak menuju $a$ dari nilai yang lebih kecil dan dari nilai yang lebih besar. Jika kedua perjalanan menghasilkan kecenderungan nilai fungsi yang sama, kita mempunyai satu nilai limit dua sisi. Grafik pada unit ini menunjukkan bahwa nilai yang didekati dapat berbeda dari titik fungsi yang benar-benar didefinisikan pada $a$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 1',
        md: 'Jika $\\lim_{x \\to 2^-} f(x) = 5$ dan $\\lim_{x \\to 2^+} f(x) = 5$, maka $\\lim_{x \\to 2} f(x) = 5$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 2',
        md: 'Jika limit kiri di $x = 1$ adalah $3$ tetapi limit kanan adalah $7$, maka $\\lim_{x \\to 1} f(x)$ tidak ada karena kedua arah tidak menuju nilai yang sama.',
      },
      {
        kind: 'example',
        title: 'Worked Example 3',
        md: 'Misalkan semua nilai $f(x)$ di sekitar $x = 4$ mendekati $6$, tetapi $f(4) = 10$. Maka limitnya tetap $6$. Informasi $f(4) = 10$ baru menjadi penting ketika kita memeriksa kekontinuan.',
      },
      {
        kind: 'mistake',
        md: 'Mengetahui $f(a)$ saja tidak cukup untuk menentukan limit. Mengetahui limit dari satu sisi saja juga belum cukup untuk menyimpulkan limit dua sisi.',
      },
      {
        kind: 'checkpoint',
        md: '1. Apa arti $x \\to 3$?\n2. Jika limit kiri dan kanan sama-sama $-2$, berapa limit dua sisinya?\n3. Jika $f(a) = 7$, apakah otomatis $\\lim_{x \\to a} f(x) = 7$?',
      },
      {
        kind: 'summary',
        md: 'Limit adalah nilai yang didekati fungsi di sekitar titik. Limit dua sisi ada hanya jika limit kiri dan kanan ada dan sama.',
      },
    ],
  },
  {
    id: 'p10-u2',
    number: 2,
    title: 'Sifat Limit dan Substitusi Langsung',
    pageFrom: 2,
    pageTo: 4,
    sections: [
      {
        kind: 'goal',
        md: 'Anda dapat menghitung limit fungsi polinom dan fungsi rasional yang terdefinisi di titik tujuan dengan substitusi langsung serta menggunakan sifat-sifat dasar limit.',
      },
      {
        kind: 'prereq',
        md: 'Anda perlu dapat melakukan operasi aljabar dasar dan mengevaluasi fungsi, misalnya menghitung $f(2)$ dari suatu rumus $f(x)$.',
      },
      {
        kind: 'concept',
        title: 'Penjelasan Konsep Lengkap',
        md: 'Sifat limit mempertahankan operasi dasar. Jika $\\lim_{x \\to a} f(x) = L$ dan $\\lim_{x \\to a} g(x) = M$, maka limit jumlah, selisih, dan hasil kali diperoleh dengan melakukan operasi yang sama pada $L$ dan $M$. Untuk pembagian, penyebut limit tidak boleh nol.',
      },
      {
        kind: 'main',
        md: '$$\\lim (f + g) = L + M, \\quad \\lim (f - g) = L - M, \\quad \\lim (fg) = LM, \\quad \\lim \\frac{f}{g} = \\frac{L}{M} \\quad (M \\neq 0)$$\n\nUntuk polinom, substitusi langsung berlaku: $\\lim_{x \\to a} p(x) = p(a)$. Untuk fungsi rasional $\\dfrac{p(x)}{q(x)}$, substitusi langsung aman jika $q(a) \\neq 0$.',
      },
      {
        kind: 'why',
        md: 'Jika ekspresi tetap terdefinisi secara biasa di titik tujuan, tidak ada hambatan aljabar yang memaksa kita melakukan transformasi lain. Karena itu substitusi adalah pemeriksaan pertama yang paling efisien.',
      },
      {
        kind: 'example',
        title: 'Worked Example 1',
        md: '$$\\lim_{x \\to 3} (2x + 1) = 2(3) + 1 = 7.$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 2',
        md: '$$\\lim_{x \\to -1} (x^2 + 4x - 2) = 1 - 4 - 2 = -5.$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 3',
        md: '$$\\lim_{x \\to 2} \\frac{x+1}{x+3} = \\frac{3}{5},$$\n\nkarena penyebut pada $x = 2$ adalah $5$, bukan nol.',
      },
      {
        kind: 'mistake',
        md: 'Substitusi langsung pada fungsi rasional harus disertai pemeriksaan penyebut. Jika penyebut menjadi nol, hasil substitusi bukan otomatis nilai limit.',
      },
      {
        kind: 'checkpoint',
        md: '1. Hitung $\\lim_{x \\to 1} (x^2 + 2x)$.\n2. Apakah substitusi langsung aman untuk $\\lim_{x \\to 2} \\dfrac{x+1}{x-2}$?\n3. Sebutkan syarat pembagian pada sifat limit.',
      },
      {
        kind: 'summary',
        md: 'Mulailah dengan substitusi. Untuk polinom, substitusi langsung bekerja; untuk fungsi rasional, pastikan penyebut tidak menjadi nol.',
      },
    ],
  },
  {
    id: 'p10-u3',
    number: 3,
    title: 'Bentuk Tak Tentu dan Penyederhanaan Aljabar',
    pageFrom: 4,
    pageTo: 6,
    sections: [
      {
        kind: 'goal',
        md: 'Anda dapat mengenali $\\dfrac{0}{0}$ sebagai bentuk tak tentu, menyederhanakan ekspresi dengan pemfaktoran, lalu menghitung limit setelah faktor penyebab bentuk tak tentu dihilangkan secara sah.',
      },
      {
        kind: 'prereq',
        md: 'Ingat pemfaktoran selisih kuadrat: $x^2 - a^2 = (x - a)(x + a)$.',
      },
      {
        kind: 'concept',
        title: 'Penjelasan Konsep Lengkap',
        md: 'Jika substitusi menghasilkan $\\dfrac{0}{0}$, kita belum memperoleh jawaban. Bentuk $\\dfrac{0}{0}$ disebut **bentuk tak tentu** karena berbagai fungsi dapat menghasilkan perilaku limit yang berbeda walaupun substitusi formalnya sama-sama memberi $\\dfrac{0}{0}$.\n\nPada bentuk yang dapat difaktorkan, kita menyederhanakan ekspresi untuk semua $x$ yang dekat dengan titik tujuan tetapi tidak sama dengan titik itu. Hal ini sesuai dengan makna limit yang memang memeriksa nilai di sekitar titik.',
      },
      {
        kind: 'main',
        md: '$$\\lim_{x \\to a} \\frac{x^2 - a^2}{x - a} = \\lim_{x \\to a} \\frac{(x - a)(x + a)}{x - a} = \\lim_{x \\to a} (x + a) = 2a.$$\n\nPencoretan faktor berlaku pada ekspresi yang disederhanakan untuk $x \\neq a$; kita tidak sedang menyatakan bahwa pembagian $\\dfrac{0}{0}$ diperbolehkan.',
      },
      {
        kind: 'why',
        md: 'Ketika $x \\to a$, nilai $x$ dapat dipilih sangat dekat dengan $a$ tetapi berbeda dari $a$. Karena itu faktor $x - a$ tidak nol pada titik-titik yang sedang kita gunakan untuk mendekati $a$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 1',
        md: '$$\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3} = \\lim_{x \\to 3} (x + 3) = 6.$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 2',
        md: '$$\\lim_{x \\to 1} \\frac{x^2 - 1}{x - 1} = \\lim_{x \\to 1} (x + 1) = 2.$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 3',
        md: 'Untuk $\\lim_{x \\to 4} \\dfrac{x^2 - 16}{x - 4}$, substitusi mula-mula memberi $\\dfrac{0}{0}$. Setelah $x^2 - 16 = (x - 4)(x + 4)$, limit menjadi $\\lim_{x \\to 4} (x + 4) = 8$.',
      },
      {
        kind: 'mistake',
        md: 'Jangan berhenti pada $\\dfrac{0}{0}$, dan jangan mengatakan bahwa $\\dfrac{0}{0} = 0$. Bentuk itu adalah sinyal untuk menyederhanakan atau memilih teknik lain yang masih berada dalam materi.',
      },
      {
        kind: 'checkpoint',
        md: '1. Apa arti hasil substitusi $\\dfrac{0}{0}$?\n2. Faktorkan $x^2 - 25$.\n3. Mengapa pencoretan $x - a$ tidak berarti kita membagi nol dengan nol?',
      },
      {
        kind: 'summary',
        md: '$\\dfrac{0}{0}$ bukan jawaban. Faktorkan, sederhanakan untuk nilai di sekitar titik, lalu hitung limit dari bentuk yang sudah sederhana.',
      },
    ],
  },
  {
    id: 'p10-u4',
    number: 4,
    title: 'Limit di Tak Hingga pada Fungsi Rasional',
    pageFrom: 6,
    pageTo: 7,
    sections: [
      {
        kind: 'goal',
        md: 'Anda dapat menentukan perilaku limit fungsi rasional saat $x \\to \\infty$ dengan membandingkan pangkat tertinggi pembilang dan penyebut.',
      },
      {
        kind: 'prereq',
        md: 'Kenali derajat suku banyak dan koefisien utama. Misalnya, $3x^2 + 1$ berderajat $2$ dengan koefisien utama $3$.',
      },
      {
        kind: 'concept',
        title: 'Penjelasan Konsep Lengkap',
        md: 'Untuk $x$ yang sangat besar, suku dengan pangkat tertinggi mendominasi suku berpangkat lebih rendah. Karena itu, perilaku rasio dua polinom dapat dibaca dari derajat dan koefisien utamanya.',
      },
      {
        kind: 'main',
        md: '- Jika derajat pembilang lebih kecil daripada penyebut, limit menuju $0$.\n- Jika derajat sama, limit menuju rasio koefisien utama.\n- Jika derajat pembilang lebih besar, fungsi tidak mendekati suatu bilangan real hingga; besarnya mengikuti rasio suku pangkat tertinggi.\n\nCara aljabar yang aman adalah membagi pembilang dan penyebut dengan pangkat tertinggi yang relevan.',
      },
      {
        kind: 'why',
        md: 'Contoh $\\dfrac{2x + 1}{3x^2 + 1}$ berperilaku seperti $\\dfrac{2x}{3x^2} = \\dfrac{2}{3x}$, sehingga nilainya mendekati $0$ ketika $x$ membesar.',
      },
      {
        kind: 'example',
        title: 'Worked Example 1',
        md: '$$\\lim_{x \\to \\infty} \\frac{5x + 1}{x^2 + 2} = 0$$\n\nkarena derajat $1$ lebih kecil dari derajat $2$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 2',
        md: '$$\\lim_{x \\to \\infty} \\frac{3x^2 + 1}{x^2 - 4} = 3,$$\n\nyaitu rasio koefisien utama $3/1$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 3',
        md: 'Untuk $\\dfrac{x^3 + 1}{2x^2 + 5}$, pembilang berderajat lebih tinggi. Rasio dominannya $\\dfrac{x^3}{2x^2} = \\dfrac{x}{2}$, sehingga tidak mendekati bilangan real hingga ketika $x \\to \\infty$.',
      },
      {
        kind: 'mistake',
        md: 'Jangan membandingkan jumlah suku. Yang penting adalah pangkat tertinggi dan koefisien utamanya.',
      },
      {
        kind: 'checkpoint',
        md: '1. Apa limit jika derajat pembilang lebih kecil?\n2. Hitung rasio koefisien utama dari $\\dfrac{7x^2 + 1}{2x^2 - 3}$.\n3. Apa tanda utama bahwa limit tidak menuju bilangan real hingga?',
      },
      {
        kind: 'summary',
        md: 'Pada fungsi rasional di tak hingga, bandingkan derajat: lebih kecil $\\to 0$; sama $\\to$ rasio koefisien utama; lebih besar $\\to$ tidak menuju bilangan real hingga.',
      },
    ],
  },
  {
    id: 'p10-u5',
    number: 5,
    title: 'Limit Trigonometri Dasar',
    pageFrom: 7,
    pageTo: 9,
    sections: [
      {
        kind: 'goal',
        md: 'Anda dapat menggunakan limit dasar $\\lim_{x \\to 0} \\dfrac{\\sin x}{x} = 1$ untuk menghitung bentuk trigonometri sederhana yang ekuivalen secara aljabar.',
      },
      {
        kind: 'prereq',
        md: 'Gunakan sudut dalam radian untuk limit dasar ini. Anda juga perlu nyaman memfaktorkan konstanta dari suatu limit.',
      },
      {
        kind: 'concept',
        title: 'Penjelasan Konsep Lengkap',
        md: 'Substitusi langsung ke $\\dfrac{\\sin x}{x}$ memberi $\\dfrac{0}{0}$, sehingga kita menggunakan limit dasar yang diberikan dalam sumber. Bentuk dengan faktor konstanta dapat diubah menjadi kelipatan dari $\\dfrac{\\sin x}{x}$.',
      },
      {
        kind: 'main',
        md: '$$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1.$$\n\nKarena konstanta dapat dikeluarkan dari limit,\n\n$$\\lim_{x \\to 0} \\frac{k \\sin x}{mx} = \\frac{k}{m} \\lim_{x \\to 0} \\frac{\\sin x}{x} = \\frac{k}{m}, \\quad m \\neq 0.$$',
      },
      {
        kind: 'why',
        md: 'Tujuan penyesuaian aljabar adalah mengenali bagian yang persis berbentuk $\\dfrac{\\sin x}{x}$. Setelah itu, limit dasar dapat digunakan tanpa memperkenalkan teknik baru.',
      },
      {
        kind: 'example',
        title: 'Worked Example 1',
        md: '$$\\lim_{x \\to 0} \\frac{\\sin x}{5x} = \\frac{1}{5}.$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 2',
        md: '$$\\lim_{x \\to 0} \\frac{3 \\sin x}{x} = 3.$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 3',
        md: '$$\\lim_{x \\to 0} \\frac{4 \\sin x}{3x} = \\frac{4}{3}.$$',
      },
      {
        kind: 'mistake',
        md: 'Substitusi $x = 0$ ke $\\dfrac{\\sin x}{x}$ menghasilkan bentuk tak tentu, bukan nilai limit. Gunakan limit dasar dan penyesuaian aljabar.',
      },
      {
        kind: 'checkpoint',
        md: '1. Berapa $\\lim_{x \\to 0} \\dfrac{\\sin x}{x}$?\n2. Hitung $\\lim_{x \\to 0} \\dfrac{7 \\sin x}{2x}$.\n3. Apa langkah pertama jika fungsi trigonometri terdefinisi langsung pada titik tujuan? Coba substitusi terlebih dahulu.',
      },
      {
        kind: 'summary',
        md: 'Kenali $\\dfrac{\\sin x}{x}$ dan faktor konstanta. Jika substitusi langsung aman pada fungsi trig lain yang terdefinisi, gunakan substitusi terlebih dahulu.',
      },
    ],
  },
  {
    id: 'p10-u6',
    number: 6,
    title: 'Kekontinuan dan Fungsi Potongan',
    pageFrom: 9,
    pageTo: 11,
    sections: [
      {
        kind: 'figure',
        title: 'Limit ada, tetapi nilai fungsi berbeda → tidak kontinu',
        md: 'Grafik dengan sumbu $x$ bertanda $0$ sampai $4$. Limit kiri dan limit kanan di titik tersebut sama-sama $3$, sedangkan nilai fungsi di titik itu adalah $f(2) = 4$. Karena limit ($3$) tidak sama dengan nilai fungsi ($4$), fungsi tidak kontinu di titik tersebut.',
      },
      {
        kind: 'goal',
        md: 'Anda dapat memeriksa tiga syarat kekontinuan pada suatu titik dan menerapkannya pada fungsi biasa maupun titik sambungan fungsi potongan.',
      },
      {
        kind: 'prereq',
        md: 'Gunakan Unit 1 untuk menentukan keberadaan limit dua sisi dan Unit 2–5 untuk menghitung limit yang diperlukan.',
      },
      {
        kind: 'concept',
        title: 'Penjelasan Konsep Lengkap',
        md: 'Fungsi $f$ kontinu di $x = a$ hanya jika tiga syarat dipenuhi sekaligus: nilai fungsi ada, limit dua sisi ada, dan keduanya sama. Jadi kekontinuan menghubungkan perilaku fungsi di sekitar titik dengan nilai fungsi tepat pada titik tersebut.',
      },
      {
        kind: 'main',
        md: '1. $f(a)$ ada.\n2. $\\lim_{x \\to a} f(x)$ ada.\n3. $\\lim_{x \\to a} f(x) = f(a)$.\n\nPada fungsi potongan, syarat kedua biasanya diperiksa melalui limit kiri dan limit kanan. Jika keduanya berbeda, limit dua sisi tidak ada dan fungsi pasti tidak kontinu pada titik sambungan.',
      },
      {
        kind: 'why',
        md: 'Suatu fungsi dapat mempunyai limit tetapi tidak kontinu jika nilai fungsi di titik tersebut hilang atau berbeda. Sebaliknya, memiliki nilai $f(a)$ saja tidak menjamin kontinuitas karena fungsi mungkin mendekati nilai lain atau memiliki limit kiri dan kanan yang berbeda.',
      },
      {
        kind: 'example',
        title: 'Worked Example 1',
        md: 'Untuk $f(x) = 3x - 2$ pada $x = 4$, diperoleh $f(4) = 10$ dan $\\lim_{x \\to 4} (3x - 2) = 10$. Ketiga syarat terpenuhi, sehingga fungsi kontinu di $4$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 2',
        md: 'Jika $f(2) = 5$ tetapi $\\lim_{x \\to 2} f(x) = 4$, syarat ketiga gagal. Fungsi tidak kontinu di $2$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 3',
        md: 'Pada fungsi potongan, misalkan limit kiri dan kanan di $x = 2$ sama-sama $3$, tetapi $f(2) = 4$. Limit ada, nilai fungsi ada, tetapi keduanya tidak sama. Jadi fungsi tidak kontinu.',
      },
      {
        kind: 'mistake',
        md: 'Jangan menyimpulkan "kontinu" hanya karena limit ada atau hanya karena nilai fungsi ada. Semua tiga syarat harus diperiksa.',
      },
      {
        kind: 'checkpoint',
        md: '1. Sebutkan tiga syarat kekontinuan.\n2. Jika limit kiri $1$ dan limit kanan $4$, syarat mana yang gagal?\n3. Jika limit dua sisi $3$ tetapi $f(a) = 5$, apakah fungsi kontinu?',
      },
      {
        kind: 'summary',
        md: 'Kekontinuan di $a$ berarti nilai fungsi ada, limit ada, dan limit sama dengan nilai fungsi. Pada fungsi potongan, periksa kedua sisi di titik sambungan.',
      },
    ],
  },
]

const m: Module = {
  id: 'p10',
  code: 'P10',
  title: 'Limit dan Kekontinuan',
  pageFrom: 1,
  pageTo: 11,
  units,
}

export default m
