import type { Exercise } from '../../types'

// P02 — Pangkat, Bentuk Akar, dan Logaritma
// Items marked 'source' restate rules/worked examples present in p02.pdf;
// 'application' items apply only those rules to fresh inputs.

const p02: Exercise[] = [
  // ------------------------------------------------------------------ Unit 1
  {
    id: 'p02-u1-e1',
    moduleId: 'p02',
    unitId: 'p02-u1',
    type: 'mc',
    difficulty: 'mudah',
    origin: 'source',
    prompt: 'Sederhanakan $m^6 \\cdot m^2$.',
    choices: [
      { id: 'a', md: '$m^8$' },
      { id: 'b', md: '$m^{12}$' },
      { id: 'c', md: '$m^4$' },
      { id: 'd', md: '$2m^8$' },
    ],
    answer: 'a',
    explanation:
      'Basis sama yang dikalikan menjumlahkan eksponen: $m^6 \\cdot m^2 = m^{6+2} = m^8$. Mengalikan eksponen ($m^{12}$) hanya berlaku pada bentuk pangkat-dari-pangkat seperti $(m^6)^2$ — ini kesalahan yang diperingatkan di bagian Jangan Keliru.',
    sourceRef: 'P02 hlm. 1–2 (Aturan Pangkat & Checkpoint)',
  },
  {
    id: 'p02-u1-e2',
    moduleId: 'p02',
    unitId: 'p02-u1',
    type: 'short',
    difficulty: 'mudah',
    origin: 'source',
    prompt: 'Hitung $7^0$.',
    answer: ['1'],
    explanation:
      'Setiap basis tak nol berpangkat nol bernilai $1$: $a^0 = 1$ untuk $a \\neq 0$. Alasannya dari aturan pembagian: $a^m/a^m = a^{m-m} = a^0$, sedangkan bilangan tak nol dibagi dirinya sendiri bernilai 1.',
    sourceRef: 'P02 hlm. 1–2 (Pangkat Nol)',
  },
  {
    id: 'p02-u1-e3',
    moduleId: 'p02',
    unitId: 'p02-u1',
    type: 'short',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Ubah $4^{-3}$ menjadi pecahan positif (format $1/\\ldots$).',
    answer: ['1/64', '1/4^3'],
    explanation:
      'Pangkat negatif berarti kebalikan: $4^{-3} = \\dfrac{1}{4^3} = \\dfrac{1}{64}$. Tanda negatif berada pada eksponen, bukan pada nilai hasil.',
    sourceRef: 'P02 hlm. 2 (Pangkat Negatif & Checkpoint)',
  },
  {
    id: 'p02-u1-e4',
    moduleId: 'p02',
    unitId: 'p02-u1',
    type: 'mc',
    difficulty: 'sulit',
    origin: 'source',
    prompt: 'Sederhanakan $\\dfrac{x^5 \\cdot x^4}{x^2}$, dengan $x \\neq 0$.',
    choices: [
      { id: 'a', md: '$x^7$' },
      { id: 'b', md: '$x^{11}$' },
      { id: 'c', md: '$x^{10}$' },
      { id: 'd', md: '$x^3$' },
    ],
    answer: 'a',
    explanation:
      'Gabungkan pangkat pada pembilang lebih dahulu: $x^5 x^4 = x^9$. Lalu bagi dengan basis sama: $x^9 / x^2 = x^{9-2} = x^7$. Syarat $x \\neq 0$ wajib karena ada pembagian dengan variabel.',
    sourceRef: 'P02 hlm. 2 (Worked Example 1)',
  },
  {
    id: 'p02-u1-e5',
    moduleId: 'p02',
    unitId: 'p02-u1',
    type: 'tf',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Pernyataan: $3^2$ berarti $3 \\cdot 2 = 6$.',
    answer: 'false',
    explanation:
      'Salah. Sumber menegaskan eksponen bukan bilangan yang dikalikan dengan basis: $3^2 = 3 \\cdot 3 = 9$. Pada $a^n$, $a$ adalah basis dan $n$ adalah eksponen, yang menyatakan berapa banyak faktor $a$.',
    sourceRef: 'P02 hlm. 1 (Pangkat sebagai Perkalian Berulang)',
  },

  // ------------------------------------------------------------------ Unit 2
  {
    id: 'p02-u2-e1',
    moduleId: 'p02',
    unitId: 'p02-u2',
    type: 'mc',
    difficulty: 'mudah',
    origin: 'source',
    prompt: 'Sederhanakan $\\sqrt{98}$.',
    choices: [
      { id: 'a', md: '$7\\sqrt{2}$' },
      { id: 'b', md: '$14\\sqrt{2}$' },
      { id: 'c', md: '$2\\sqrt{7}$' },
      { id: 'd', md: '$49\\sqrt{2}$' },
    ],
    answer: 'a',
    explanation:
      'Cari faktor kuadrat sempurna terbesar: $98 = 49 \\cdot 2$, sehingga $\\sqrt{98} = \\sqrt{49}\\,\\sqrt{2} = 7\\sqrt{2}$. Ini mengikuti contoh sumber $\\sqrt{72} = \\sqrt{36}\\sqrt{2} = 6\\sqrt{2}$.',
    sourceRef: 'P02 hlm. 4 (Menyederhanakan Bentuk Akar & Checkpoint)',
  },
  {
    id: 'p02-u2-e2',
    moduleId: 'p02',
    unitId: 'p02-u2',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Sederhanakan $\\sqrt{12} + \\sqrt{27}$.',
    choices: [
      { id: 'a', md: '$5\\sqrt{3}$' },
      { id: 'b', md: '$\\sqrt{39}$' },
      { id: 'c', md: '$7\\sqrt{3}$' },
      { id: 'd', md: '$5\\sqrt{6}$' },
    ],
    answer: 'a',
    explanation:
      '$\\sqrt{12} = 2\\sqrt{3}$ dan $\\sqrt{27} = 3\\sqrt{3}$. Setelah penyederhanaan bagian akarnya sama, koefisien dijumlahkan: $2\\sqrt{3} + 3\\sqrt{3} = 5\\sqrt{3}$.',
    sourceRef: 'P02 hlm. 4 (Worked Example 2)',
  },
  {
    id: 'p02-u2-e3',
    moduleId: 'p02',
    unitId: 'p02-u2',
    type: 'tf',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Pernyataan: $\\sqrt{7} + \\sqrt{2} = \\sqrt{9} = 3$.',
    answer: 'false',
    explanation:
      'Salah. Operasi di dalam akar tidak mengikuti pola $\\sqrt{a} + \\sqrt{b} = \\sqrt{a+b}$. $\\sqrt{7} + \\sqrt{2}$ tidak dapat digabungkan karena bagian akarnya berbeda; hanya suku dengan bagian akar sama (setelah penyederhanaan) yang boleh dijumlahkan.',
    sourceRef: 'P02 hlm. 4 (Jangan Keliru & Checkpoint)',
  },
  {
    id: 'p02-u2-e4',
    moduleId: 'p02',
    unitId: 'p02-u2',
    type: 'mc',
    difficulty: 'mudah',
    origin: 'source',
    prompt: 'Hitung $\\sqrt{18} \\cdot \\sqrt{2}$.',
    choices: [
      { id: 'a', md: '$6$' },
      { id: 'b', md: '$36$' },
      { id: 'c', md: '$3\\sqrt{2}$' },
      { id: 'd', md: '$2\\sqrt{18}$' },
    ],
    answer: 'a',
    explanation:
      'Aturan perkalian akar: $\\sqrt{a}\\sqrt{b} = \\sqrt{ab}$. Jadi $\\sqrt{18}\\sqrt{2} = \\sqrt{36} = 6$.',
    sourceRef: 'P02 hlm. 3–4 (Worked Example 3)',
  },

  // ------------------------------------------------------------------ Unit 3
  {
    id: 'p02-u3-e1',
    moduleId: 'p02',
    unitId: 'p02-u3',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Rasionalkan $\\dfrac{2}{\\sqrt{7}}$.',
    choices: [
      { id: 'a', md: '$\\dfrac{2\\sqrt{7}}{7}$' },
      { id: 'b', md: '$\\dfrac{\\sqrt{7}}{7}$' },
      { id: 'c', md: '$\\dfrac{2}{7}$' },
      { id: 'd', md: '$2\\sqrt{7}$' },
    ],
    answer: 'a',
    explanation:
      'Kalikan pembilang dan penyebut dengan $\\sqrt{7}$: $\\dfrac{2}{\\sqrt{7}} \\cdot \\dfrac{\\sqrt{7}}{\\sqrt{7}} = \\dfrac{2\\sqrt{7}}{7}$. Ingat: yang dikalikan harus pembilang **dan** penyebut, agar nilai pecahan tidak berubah.',
    sourceRef: 'P02 hlm. 5–6 (Penyebut Satu Akar & Checkpoint)',
  },
  {
    id: 'p02-u3-e2',
    moduleId: 'p02',
    unitId: 'p02-u3',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Apa pasangan sekawan dari $4 + \\sqrt{3}$?',
    choices: [
      { id: 'a', md: '$4 - \\sqrt{3}$' },
      { id: 'b', md: '$-4 + \\sqrt{3}$' },
      { id: 'c', md: '$4 + \\sqrt{3}$' },
      { id: 'd', md: '$\\sqrt{3} - 4$' },
    ],
    answer: 'a',
    explanation:
      'Pasangan sekawan mengubah tanda suku berakar, bukan suku rasionalnya: dari $4 + \\sqrt{3}$ menjadi $4 - \\sqrt{3}$. Produknya $(4+\\sqrt{3})(4-\\sqrt{3}) = 16 - 3 = 13$, bilangan rasional.',
    sourceRef: 'P02 hlm. 6 (Pasangan Sekawan & Checkpoint)',
  },
  {
    id: 'p02-u3-e3',
    moduleId: 'p02',
    unitId: 'p02-u3',
    type: 'mc',
    difficulty: 'sulit',
    origin: 'source',
    prompt: 'Rasionalkan $\\dfrac{1}{3 + \\sqrt{2}}$.',
    choices: [
      { id: 'a', md: '$\\dfrac{3 - \\sqrt{2}}{7}$' },
      { id: 'b', md: '$\\dfrac{3 + \\sqrt{2}}{7}$' },
      { id: 'c', md: '$\\dfrac{3 - \\sqrt{2}}{11}$' },
      { id: 'd', md: '$\\dfrac{1}{7}$' },
    ],
    answer: 'a',
    explanation:
      'Kalikan dengan $(3 - \\sqrt{2})/(3 - \\sqrt{2})$. Penyebut menjadi $9 - 2 = 7$, sehingga hasilnya $\\dfrac{3 - \\sqrt{2}}{7}$. Ini Worked Example 2 sumber.',
    sourceRef: 'P02 hlm. 6 (Worked Example 2)',
  },
  {
    id: 'p02-u3-e4',
    moduleId: 'p02',
    unitId: 'p02-u3',
    type: 'tf',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Pernyataan: Untuk merasionalkan penyebut, cukup mengalikan penyebutnya dengan pasangan sekawan.',
    answer: 'false',
    explanation:
      'Salah. Sumber menegaskan faktor pengali harus diberikan pada **pembilang dan penyebut**. Mengalikan penyebut saja akan mengubah nilai pecahan.',
    sourceRef: 'P02 hlm. 6 (Jangan Keliru)',
  },

  // ------------------------------------------------------------------ Unit 4
  {
    id: 'p02-u4-e1',
    moduleId: 'p02',
    unitId: 'p02-u4',
    type: 'short',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Hitung $27^{2/3}$.',
    answer: ['9'],
    explanation:
      'Penyebut eksponen adalah indeks akar: $27^{2/3} = (\\sqrt[3]{27})^2 = 3^2 = 9$. Ambil akar lebih dahulu agar angkanya tetap kecil.',
    sourceRef: 'P02 hlm. 7–8 (Worked Example & Checkpoint)',
  },
  {
    id: 'p02-u4-e2',
    moduleId: 'p02',
    unitId: 'p02-u4',
    type: 'mc',
    difficulty: 'sulit',
    origin: 'source',
    prompt: 'Bentuk $a^{3/4}$ sama dengan:',
    choices: [
      { id: 'a', md: '$\\sqrt[4]{a^3}$' },
      { id: 'b', md: '$\\sqrt[3]{a^4}$' },
      { id: 'c', md: '$\\sqrt[4]{a} \\cdot 3$' },
      { id: 'd', md: '$3\\sqrt[4]{a}$' },
    ],
    answer: 'a',
    explanation:
      'Penyebut eksponen ($4$) menjadi indeks akar, pembilang ($3$) menjadi pangkat: $a^{3/4} = \\sqrt[4]{a^3}$. Sumber secara khusus menandai $a^{3/4} \\neq \\sqrt[3]{a^4}$ sebagai kesalahan khas.',
    sourceRef: 'P02 hlm. 7–8 (Jangan Keliru)',
  },
  {
    id: 'p02-u4-e3',
    moduleId: 'p02',
    unitId: 'p02-u4',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Hitung $64^{2/3}$.',
    choices: [
      { id: 'a', md: '$16$' },
      { id: 'b', md: '$32$' },
      { id: 'c', md: '$8$' },
      { id: 'd', md: '$4$' },
    ],
    answer: 'a',
    explanation:
      '$64^{2/3} = (\\sqrt[3]{64})^2 = 4^2 = 16$. Bila dipangkatkan dahulu, $64^2 = 4096$, lalu akar pangkat tiga $= 16$ — hasil sama tetapi angkanya jauh lebih besar.',
    sourceRef: 'P02 hlm. 8 (Worked Example 2)',
  },
  {
    id: 'p02-u4-e4',
    moduleId: 'p02',
    unitId: 'p02-u4',
    type: 'tf',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Pernyataan: Dalam bilangan real, $(-16)^{1/4}$ dipakai sebagai nilai real karena indeksnya $4$.',
    answer: 'false',
    explanation:
      'Salah. Sumber menyatakan jika indeks akar $n$ genap, bentuk di dalam akar harus tidak negatif agar hasilnya real. Karena itu akar berindeks genap dari bilangan negatif tidak dipaksakan sebagai bilangan real.',
    sourceRef: 'P02 hlm. 7 (Syarat pada Bilangan Real)',
  },
  {
    id: 'p02-u4-e5',
    moduleId: 'p02',
    unitId: 'p02-u4',
    type: 'short',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Hitung $32^{3/5}$.',
    answer: ['8'],
    explanation:
      'Ambil akar lebih dahulu: $\\sqrt[5]{32} = 2$, lalu pangkatkan: $2^3 = 8$. Ini contoh strategi perhitungan yang dianjurkan sumber.',
    sourceRef: 'P02 hlm. 8 (Strategi Perhitungan)',
  },

  // ------------------------------------------------------------------ Unit 5
  {
    id: 'p02-u5-e1',
    moduleId: 'p02',
    unitId: 'p02-u5',
    type: 'mc',
    difficulty: 'mudah',
    origin: 'source',
    prompt: 'Tuliskan $4^3 = 64$ dalam bentuk logaritma.',
    choices: [
      { id: 'a', md: '$\\log_4 64 = 3$' },
      { id: 'b', md: '$\\log_3 64 = 4$' },
      { id: 'c', md: '$\\log_{64} 4 = 3$' },
      { id: 'd', md: '$\\log_4 3 = 64$' },
    ],
    answer: 'a',
    explanation:
      'Hubungannya $a^p = b \\iff \\log_a b = p$. Dengan $a = 4$, $p = 3$, $b = 64$, didapat $\\log_4 64 = 3$. Basis tetap $4$, hasilnya $64$, eksponennya $3$.',
    sourceRef: 'P02 hlm. 9 (Definisi & Checkpoint)',
  },
  {
    id: 'p02-u5-e2',
    moduleId: 'p02',
    unitId: 'p02-u5',
    type: 'short',
    difficulty: 'mudah',
    origin: 'source',
    prompt: 'Hitung $\\log_7 49$.',
    answer: ['2'],
    explanation:
      '$\\log_7 49 = 2$ karena $7^2 = 49$. Logaritma menjawab: basis $7$ harus dipangkatkan berapa agar menghasilkan $49$?',
    sourceRef: 'P02 hlm. 10 (Checkpoint)',
  },
  {
    id: 'p02-u5-e3',
    moduleId: 'p02',
    unitId: 'p02-u5',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Mengapa $\\log_1 7$ tidak memenuhi syarat?',
    choices: [
      {
        id: 'a',
        md: 'Karena basis logaritma tidak boleh $1$: $1^p = 1$ untuk setiap $p$, sehingga tidak menghasilkan bilangan positif lain secara unik.',
      },
      { id: 'b', md: 'Karena argumen $7$ bukan bilangan kuadrat.' },
      { id: 'c', md: 'Karena basis harus lebih besar dari argumen.' },
      { id: 'd', md: 'Karena logaritma hanya berlaku untuk basis $10$.' },
    ],
    answer: 'a',
    explanation:
      'Sumber menjelaskan: jika basis $1$, maka $1^p = 1$ untuk setiap $p$, sehingga tidak dapat menghasilkan bilangan positif lain dan tidak memberi nilai eksponen yang unik. Syaratnya $a > 0$, $a \\neq 1$, dan $b > 0$.',
    sourceRef: 'P02 hlm. 10 (Mengapa Basis Tidak Boleh 1?)',
  },
  {
    id: 'p02-u5-e4',
    moduleId: 'p02',
    unitId: 'p02-u5',
    type: 'tf',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Pernyataan: Notasi $\\log b$ tanpa basis dalam sumber berarti logaritma basis $10$.',
    answer: 'true',
    explanation:
      'Benar. Sumber menetapkan bahwa $\\log b$ tanpa basis digunakan untuk logaritma basis 10. Karena $10^3 = 1000$, maka $\\log 1000 = 3$.',
    sourceRef: 'P02 hlm. 9 (Logaritma Biasa)',
  },
  {
    id: 'p02-u5-e5',
    moduleId: 'p02',
    unitId: 'p02-u5',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Nilai $\\log 0{,}001$ adalah:',
    choices: [
      { id: 'a', md: '$-3$' },
      { id: 'b', md: '$3$' },
      { id: 'c', md: '$-1$' },
      { id: 'd', md: '$0{,}003$' },
    ],
    answer: 'a',
    explanation:
      'Karena $10^{-3} = 0{,}001$, maka $\\log 0{,}001 = -3$. Basis 10 dipakai karena tidak ada basis tertulis. Ini Worked Example 2 sumber.',
    sourceRef: 'P02 hlm. 10 (Worked Example 2)',
  },

  // ------------------------------------------------------------------ Unit 6
  {
    id: 'p02-u6-e1',
    moduleId: 'p02',
    unitId: 'p02-u6',
    type: 'short',
    difficulty: 'mudah',
    origin: 'source',
    prompt: 'Hitung $\\log_5 25 + \\log_5 5$.',
    answer: ['3'],
    explanation:
      '$\\log_5 25 = 2$ dan $\\log_5 5 = 1$, sehingga jumlahnya $3$. Alternatif: $\\log_5(25 \\cdot 5) = \\log_5 125 = 3$ — hasilnya sama karena sifat perkalian $\\log_a(MN) = \\log_a M + \\log_a N$.',
    sourceRef: 'P02 hlm. 11 (Sifat & Checkpoint)',
  },
  {
    id: 'p02-u6-e2',
    moduleId: 'p02',
    unitId: 'p02-u6',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Gabungkan $3\\log_2 x - \\log_2 y$ menjadi satu logaritma.',
    choices: [
      { id: 'a', md: '$\\log_2\\left(\\dfrac{x^3}{y}\\right)$' },
      { id: 'b', md: '$\\log_2(x^3 - y)$' },
      { id: 'c', md: '$\\log_2\\left(\\dfrac{x}{y^3}\\right)$' },
      { id: 'd', md: '$\\log_2(x^3y)$' },
    ],
    answer: 'a',
    explanation:
      'Sifat pangkat: $3\\log_2 x = \\log_2(x^3)$. Sifat pembagian: $\\log_2(x^3) - \\log_2 y = \\log_2\\!\\left(\\frac{x^3}{y}\\right)$. Ini persis Worked Example 3 sumber (dengan basis 3).',
    sourceRef: 'P02 hlm. 11 (Worked Example 3)',
  },
  {
    id: 'p02-u6-e3',
    moduleId: 'p02',
    unitId: 'p02-u6',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Hitung $\\log 20 + \\log 5$.',
    choices: [
      { id: 'a', md: '$2$' },
      { id: 'b', md: '$\\log 25$' },
      { id: 'c', md: '$4$' },
      { id: 'd', md: '$100$' },
    ],
    answer: 'a',
    explanation:
      'Sifat perkalian menggabungkan penjumlahan menjadi satu logaritma: $\\log 20 + \\log 5 = \\log(20 \\cdot 5) = \\log 100 = 2$, karena $10^2 = 100$.',
    sourceRef: 'P02 hlm. 11 (Worked Example 1)',
  },
  {
    id: 'p02-u6-e4',
    moduleId: 'p02',
    unitId: 'p02-u6',
    type: 'tf',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Pernyataan: $\\log M + \\log N = \\log(M + N)$.',
    answer: 'false',
    explanation:
      'Salah. $\\log M + \\log N = \\log(MN)$, bukan $\\log(M+N)$. Operasi antarlogaritma berubah menjadi operasi pada argumen sesuai sifat yang tepat — penjumlahan logaritma berarti perkalian argumen.',
    sourceRef: 'P02 hlm. 12 (Jangan Keliru)',
  },
  {
    id: 'p02-u6-e5',
    moduleId: 'p02',
    unitId: 'p02-u6',
    type: 'mc',
    difficulty: 'sulit',
    origin: 'source',
    prompt:
      'Jika $\\log 2 = 0{,}3010$ dan $\\log 3 = 0{,}4771$, maka $\\log 18 = \\ldots$',
    choices: [
      { id: 'a', md: '$1{,}2552$' },
      { id: 'b', md: '$0{,}7781$' },
      { id: 'c', md: '$1{,}5052$' },
      { id: 'd', md: '$0{,}1436$' },
    ],
    answer: 'a',
    explanation:
      '$18 = 2 \\cdot 3^2$, sehingga $\\log 18 = \\log 2 + 2\\log 3 = 0{,}3010 + 2(0{,}4771) = 0{,}3010 + 0{,}9542 = 1{,}2552$. Ini contoh terpadu dari data logaritma di sumber.',
    sourceRef: 'P02 hlm. 12 (Contoh Terpadu dari Data Logaritma)',
  },
  {
    id: 'p02-u6-e6',
    moduleId: 'p02',
    unitId: 'p02-u6',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Tuliskan $\\log_7 11$ menggunakan logaritma basis 10.',
    choices: [
      { id: 'a', md: '$\\dfrac{\\log 11}{\\log 7}$' },
      { id: 'b', md: '$\\dfrac{\\log 7}{\\log 11}$' },
      { id: 'c', md: '$\\log 11 - \\log 7$' },
      { id: 'd', md: '$\\log(11 \\cdot 7)$' },
    ],
    answer: 'a',
    explanation:
      'Sifat perubahan basis: $\\log_a N = \\dfrac{\\log N}{\\log a}$. Dengan $a = 7$ dan $N = 11$ diperoleh $\\dfrac{\\log 11}{\\log 7}$.',
    sourceRef: 'P02 hlm. 11–12 (Perubahan Basis & Checkpoint)',
  },
]

export default p02
