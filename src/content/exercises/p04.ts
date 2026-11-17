import type { Exercise } from '../../types'

// P04 — Persamaan dan Pertidaksamaan Linear
// Numbers follow the worked examples in p04.pdf.

const p04: Exercise[] = [
  // ------------------------------------------------------------------ Unit 1
  {
    id: 'p04-u1-e1',
    moduleId: 'p04',
    unitId: 'p04-u1',
    type: 'mc',
    difficulty: 'mudah',
    origin: 'source',
    prompt: 'Pada persamaan $3x = 21$, manakah yang merupakan penyelesaian?',
    choices: [
      { id: 'a', md: '$x = 7$, karena $3(7) = 21$' },
      { id: 'b', md: '$x = 5$, karena $3(5) = 15$' },
      { id: 'c', md: '$x = 21$, karena $3(21) = 63$' },
      { id: 'd', md: '$x = 3$, karena $3(3) = 9$' },
    ],
    answer: 'a',
    explanation:
      'Penyelesaian adalah nilai yang membuat kedua ruas benar-benar sama. Untuk $x = 7$: $3(7) = 21$ ✓. Sumber secara eksplisit menyebut $x = 5$ bukan penyelesaian karena $3(5) = 15 \\neq 21$.',
    sourceRef: 'P04 hlm. 1 (Contoh 1 — verifikasi)',
  },
  {
    id: 'p04-u1-e2',
    moduleId: 'p04',
    unitId: 'p04-u1',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Selesaikan $3x - 2 = 31$.',
    choices: [
      { id: 'a', md: '$x = 11$' },
      { id: 'b', md: '$x = 9$' },
      { id: 'c', md: '$x = 33$' },
      { id: 'd', md: '$x = 29$' },
    ],
    answer: 'a',
    explanation:
      'Tambah $2$ pada kedua ruas: $3x = 33$. Bagi kedua ruas dengan $3$: $x = 11$. Verifikasi: $3(11) - 2 = 31$ ✓.',
    sourceRef: 'P04 hlm. 2 (Contoh 2)',
  },
  {
    id: 'p04-u1-e3',
    moduleId: 'p04',
    unitId: 'p04-u1',
    type: 'tf',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Pernyataan: Dari $2x + 5 = 13$, langkah yang sah adalah $2x = 13 + 5$.',
    answer: 'false',
    explanation:
      'Salah. Itu tidak menjaga kesetaraan karena $5$ ditambahkan, padahal seharusnya dikurangkan. Yang benar: kurangi $5$ pada kedua ruas, sehingga $2x = 8$ dan $x = 4$.',
    sourceRef: 'P04 hlm. 2 (Jangan Keliru)',
  },
  {
    id: 'p04-u1-e4',
    moduleId: 'p04',
    unitId: 'p04-u1',
    type: 'short',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Selesaikan $2x + 8 = x + 13$. Tuliskan nilai $x$.',
    answer: ['5', 'x=5'],
    explanation:
      'Kurangi $x$ dari kedua ruas: $x + 8 = 13$. Kurangi $8$: $x = 5$. Setiap baris tetap mempunyai penyelesaian yang sama karena operasi dilakukan pada kedua ruas.',
    sourceRef: 'P04 hlm. 2 (Contoh 3)',
  },
  {
    id: 'p04-u1-e5',
    moduleId: 'p04',
    unitId: 'p04-u1',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Dua persamaan disebut **ekuivalen** apabila:',
    choices: [
      { id: 'a', md: 'keduanya mempunyai himpunan penyelesaian yang sama' },
      { id: 'b', md: 'keduanya memiliki koefisien yang sama' },
      { id: 'c', md: 'keduanya memiliki bentuk penulisan yang identik' },
      { id: 'd', md: 'keduanya memiliki jumlah suku yang sama' },
    ],
    answer: 'a',
    explanation:
      'Ekuivalen berarti himpunan penyelesaiannya sama. Contoh sumber: $2x = 12$ dan $x = 6$ ekuivalen karena keduanya tepat dipenuhi oleh $x = 6$, walaupun bentuk penulisannya berbeda.',
    sourceRef: 'P04 hlm. 2 (Persamaan ekuivalen)',
  },

  // ------------------------------------------------------------------ Unit 2
  {
    id: 'p04-u2-e1',
    moduleId: 'p04',
    unitId: 'p04-u2',
    type: 'short',
    difficulty: 'mudah',
    origin: 'source',
    prompt: 'Selesaikan $7x - 9 = 12$. Tuliskan nilai $x$.',
    answer: ['3', 'x=3'],
    explanation:
      'Tambah $9$ pada kedua ruas: $7x = 21$. Bagi $7$: $x = 3$.',
    sourceRef: 'P04 hlm. 3 (Contoh 1)',
  },
  {
    id: 'p04-u2-e2',
    moduleId: 'p04',
    unitId: 'p04-u2',
    type: 'mc',
    difficulty: 'sulit',
    origin: 'source',
    prompt: 'Selesaikan $3(x - 1) - 1 = 5 - 5(x + 5)$.',
    choices: [
      { id: 'a', md: '$x = -2$' },
      { id: 'b', md: '$x = 2$' },
      { id: 'c', md: '$x = -3$' },
      { id: 'd', md: '$x = 1$' },
    ],
    answer: 'a',
    explanation:
      'Buka kurung: $3x - 3 - 1 = 5 - 5x - 25$. Gabungkan suku: $3x - 4 = -5x - 20$. Tambah $5x$: $8x - 4 = -20$. Tambah $4$: $8x = -16$. Jadi $x = -2$.',
    sourceRef: 'P04 hlm. 3 (Contoh 2 — distributif)',
  },
  {
    id: 'p04-u2-e3',
    moduleId: 'p04',
    unitId: 'p04-u2',
    type: 'mc',
    difficulty: 'sulit',
    origin: 'source',
    prompt: 'Selesaikan $3(2x - 1) - 5 = x + 8$.',
    choices: [
      { id: 'a', md: '$x = \\dfrac{16}{5}$' },
      { id: 'b', md: '$x = 3$' },
      { id: 'c', md: '$x = \\dfrac{5}{16}$' },
      { id: 'd', md: '$x = 4$' },
    ],
    answer: 'a',
    explanation:
      'Setelah distributif: $6x - 3 - 5 = x + 8$, yaitu $6x - 8 = x + 8$. Kurangi $x$: $5x - 8 = 8$. Tambah $8$: $5x = 16$, maka $x = \\frac{16}{5}$.',
    sourceRef: 'P04 hlm. 3 (Contoh 3)',
  },
  {
    id: 'p04-u2-e4',
    moduleId: 'p04',
    unitId: 'p04-u2',
    type: 'mc',
    difficulty: 'mudah',
    origin: 'source',
    prompt: 'Bentuk $2(x - 3)$ yang benar adalah:',
    choices: [
      { id: 'a', md: '$2x - 6$' },
      { id: 'b', md: '$2x - 3$' },
      { id: 'c', md: '$2x + 6$' },
      { id: 'd', md: '$x - 6$' },
    ],
    answer: 'a',
    explanation:
      'Faktor $2$ harus mengalikan **kedua** suku dalam kurung: $2 \\cdot x = 2x$ dan $2 \\cdot 3 = 6$, sehingga hasilnya $2x - 6$. Sumber menandai $2x - 3$ sebagai kesalahan khas.',
    sourceRef: 'P04 hlm. 3 (Jangan Keliru)',
  },

  // ------------------------------------------------------------------ Unit 3
  {
    id: 'p04-u3-e1',
    moduleId: 'p04',
    unitId: 'p04-u3',
    type: 'short',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Selesaikan $\\dfrac{x}{3} + 1 = 5$. Tuliskan nilai $x$.',
    answer: ['12', 'x=12'],
    explanation:
      'Kalikan seluruh ruas dengan $3$: $x + 3 = 15$. Maka $x = 12$. Verifikasi: $\\frac{12}{3} + 1 = 4 + 1 = 5$ ✓.',
    sourceRef: 'P04 hlm. 4 (Contoh 1)',
  },
  {
    id: 'p04-u3-e2',
    moduleId: 'p04',
    unitId: 'p04-u3',
    type: 'mc',
    difficulty: 'sulit',
    origin: 'source',
    prompt: 'Selesaikan $\\dfrac{x}{2} + \\dfrac{x}{3} = 10$.',
    choices: [
      { id: 'a', md: '$x = 12$' },
      { id: 'b', md: '$x = 10$' },
      { id: 'c', md: '$x = 6$' },
      { id: 'd', md: '$x = 60$' },
    ],
    answer: 'a',
    explanation:
      'KPK dari $2$ dan $3$ adalah $6$. Kalikan seluruh persamaan dengan $6$: $3x + 2x = 60$. Jadi $5x = 60$ dan $x = 12$.',
    sourceRef: 'P04 hlm. 4 (Contoh 3 — dua penyebut)',
  },
  {
    id: 'p04-u3-e3',
    moduleId: 'p04',
    unitId: 'p04-u3',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Untuk $\\dfrac{x}{4} + 1 = 3$, hasil yang benar setelah mengalikan seluruh ruas dengan $4$ adalah:',
    choices: [
      { id: 'a', md: '$x + 4 = 12$' },
      { id: 'b', md: '$x + 1 = 12$' },
      { id: 'c', md: '$x + 4 = 3$' },
      { id: 'd', md: '$x = 12$' },
    ],
    answer: 'a',
    explanation:
      'Faktor pengali harus mengenai **setiap** suku. Suku $+1$ juga dikalikan $4$, menjadi $+4$. Jadi $x + 4 = 12$ (dan $x = 8$), bukan $x + 1 = 12$.',
    sourceRef: 'P04 hlm. 4 (Cek struktur sebelum menghitung)',
  },
  {
    id: 'p04-u3-e4',
    moduleId: 'p04',
    unitId: 'p04-u3',
    type: 'tf',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Pernyataan: Dari $\\dfrac{x}{2} + 1 = 4$, mencoret $2$ sehingga menjadi $x + 1 = 4$ adalah langkah yang sah.',
    answer: 'false',
    explanation:
      'Salah. Yang benar adalah mengalikan **semua** suku dengan $2$: $x + 2 = 8$, sehingga $x = 6$. Mencoret penyebut secara lokal mengubah nilai pecahan.',
    sourceRef: 'P04 hlm. 5 (Jangan Keliru)',
  },

  // ------------------------------------------------------------------ Unit 4
  {
    id: 'p04-u4-e1',
    moduleId: 'p04',
    unitId: 'p04-u4',
    type: 'mc',
    difficulty: 'mudah',
    origin: 'source',
    prompt: 'Selesaikan $-2x < 6$.',
    choices: [
      { id: 'a', md: '$x > -3$' },
      { id: 'b', md: '$x < -3$' },
      { id: 'c', md: '$x > 3$' },
      { id: 'd', md: '$x < 3$' },
    ],
    answer: 'a',
    explanation:
      'Bagi kedua ruas dengan $-2$. Karena pembaginya negatif, arah tanda dibalik: $x > -3$.',
    sourceRef: 'P04 hlm. 5 (Contoh 1)',
  },
  {
    id: 'p04-u4-e2',
    moduleId: 'p04',
    unitId: 'p04-u4',
    type: 'mc',
    difficulty: 'sulit',
    origin: 'source',
    prompt: 'Selesaikan $3x - 5 > x + 7$.',
    choices: [
      { id: 'a', md: '$x > 6$' },
      { id: 'b', md: '$x > 1$' },
      { id: 'c', md: '$x < 6$' },
      { id: 'd', md: '$x > 12$' },
    ],
    answer: 'a',
    explanation:
      'Kurangi $x$: $2x - 5 > 7$. Tambah $5$: $2x > 12$. Bagi $2$ (positif, tanda tetap): $x > 6$.',
    sourceRef: 'P04 hlm. 5 (Contoh 2)',
  },
  {
    id: 'p04-u4-e3',
    moduleId: 'p04',
    unitId: 'p04-u4',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Selesaikan $-4x \\le 12$.',
    choices: [
      { id: 'a', md: '$x \\ge -3$' },
      { id: 'b', md: '$x \\le -3$' },
      { id: 'c', md: '$x \\ge 3$' },
      { id: 'd', md: '$x \\le 3$' },
    ],
    answer: 'a',
    explanation:
      'Bagi dengan $-4$; karena negatif, tanda berbalik dari $\\le$ menjadi $\\ge$: $x \\ge -3$.',
    sourceRef: 'P04 hlm. 5 (Contoh 3)',
  },
  {
    id: 'p04-u4-e4',
    moduleId: 'p04',
    unitId: 'p04-u4',
    type: 'tf',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Pernyataan: Dari $-3x < 12$, hasilnya adalah $x < -4$.',
    answer: 'false',
    explanation:
      'Salah, tanda harus dibalik karena dibagi bilangan negatif: $x > -4$. Sumber memakai contoh ini sebagai kesalahan B yang khas.',
    sourceRef: 'P04 hlm. 6 (Jangan Keliru), hlm. 8 (Kesalahan B)',
  },
  {
    id: 'p04-u4-e5',
    moduleId: 'p04',
    unitId: 'p04-u4',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Menurut aturan operasi pertidaksamaan, apa yang terjadi bila kedua ruas dikali bilangan **positif** yang sama?',
    choices: [
      { id: 'a', md: 'Tanda tetap' },
      { id: 'b', md: 'Tanda dibalik' },
      { id: 'c', md: 'Tanda selalu menjadi $=$' },
      { id: 'd', md: 'Pertidaksamaan menjadi tidak terdefinisi' },
    ],
    answer: 'a',
    explanation:
      'Sumber: dikali/dibagi bilangan positif → tanda tetap; dikali/dibagi bilangan negatif → tanda dibalik; ditambah/dikurangi bilangan sama → tanda tetap.',
    sourceRef: 'P04 hlm. 5 (Aturan operasi)',
  },

  // ------------------------------------------------------------------ Unit 5
  {
    id: 'p04-u5-e1',
    moduleId: 'p04',
    unitId: 'p04-u5',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Selesaikan $3 < x + 7 < 11$.',
    choices: [
      { id: 'a', md: '$-4 < x < 4$' },
      { id: 'b', md: '$4 < x < 18$' },
      { id: 'c', md: '$-4 < x < 18$' },
      { id: 'd', md: '$-10 < x < -4$' },
    ],
    answer: 'a',
    explanation:
      'Operasi dilakukan pada **ketiga** bagian. Kurangi $7$: $3 - 7 < x < 11 - 7$, yaitu $-4 < x < 4$.',
    sourceRef: 'P04 hlm. 6 (Contoh 1)',
  },
  {
    id: 'p04-u5-e2',
    moduleId: 'p04',
    unitId: 'p04-u5',
    type: 'mc',
    difficulty: 'sulit',
    origin: 'source',
    prompt: 'Selesaikan $-1 \\le 2x + 3 < 7$.',
    choices: [
      { id: 'a', md: '$-2 \\le x < 2$' },
      { id: 'b', md: '$-2 < x \\le 2$' },
      { id: 'c', md: '$-4 \\le x < 4$' },
      { id: 'd', md: '$1 \\le x < 5$' },
    ],
    answer: 'a',
    explanation:
      'Kurangi $3$ pada ketiga bagian: $-4 \\le 2x < 4$. Bagi $2$ (positif, tanda tetap): $-2 \\le x < 2$.',
    sourceRef: 'P04 hlm. 6 (Contoh 2)',
  },
  {
    id: 'p04-u5-e3',
    moduleId: 'p04',
    unitId: 'p04-u5',
    type: 'mc',
    difficulty: 'sulit',
    origin: 'source',
    prompt:
      'Dari $-1 \\le -x < 3$, hasil setelah dikalikan $-1$ dan ditulis ulang dari kecil ke besar adalah:',
    choices: [
      { id: 'a', md: '$-3 < x \\le 1$' },
      { id: 'b', md: '$-3 \\le x < 1$' },
      { id: 'c', md: '$1 \\le x < -3$' },
      { id: 'd', md: '$-1 < x \\le 3$' },
    ],
    answer: 'a',
    explanation:
      'Kalikan semua bagian dengan $-1$; keduanya berbalik: $1 \\ge x > -3$. Ditulis ulang dari kecil ke besar: $-3 < x \\le 1$. Perhatikan batas $1$ tetap tertutup ($\\le$ pada bentuk aslinya menjadi $\\le$ setelah ditulis ulang di kanan).',
    sourceRef: 'P04 hlm. 6 (Membagi dengan bilangan negatif)',
  },
  {
    id: 'p04-u5-e4',
    moduleId: 'p04',
    unitId: 'p04-u5',
    type: 'tf',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Pernyataan: Pada $2 < x + 5 < 9$, cukup mengurangi $5$ dari bagian tengah saja.',
    answer: 'false',
    explanation:
      'Salah. Mengurangi hanya bagian tengah merusak dua hubungan sekaligus. Kurangi $5$ dari **ketiga** bagian untuk memperoleh $-3 < x < 4$.',
    sourceRef: 'P04 hlm. 7 (Jangan Keliru)',
  },
  {
    id: 'p04-u5-e5',
    moduleId: 'p04',
    unitId: 'p04-u5',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Selesaikan $1 < 2x + 3 \\le 9$.',
    choices: [
      { id: 'a', md: '$-1 < x \\le 3$' },
      { id: 'b', md: '$-1 \\le x < 3$' },
      { id: 'c', md: '$2 < x \\le 6$' },
      { id: 'd', md: '$-2 < x \\le 6$' },
    ],
    answer: 'a',
    explanation:
      'Kurangi $3$: $-2 < 2x \\le 6$. Bagi $2$: $-1 < x \\le 3$.',
    sourceRef: 'P04 hlm. 7 (Checkpoint Unit 5)',
  },

  // ------------------------------------------------------------------ Unit 6
  {
    id: 'p04-u6-e1',
    moduleId: 'p04',
    unitId: 'p04-u6',
    type: 'mc',
    difficulty: 'sulit',
    origin: 'source',
    prompt: 'Selesaikan $\\dfrac{x}{3} > \\dfrac{x}{4} + 1$.',
    choices: [
      { id: 'a', md: '$x > 12$' },
      { id: 'b', md: '$x < 12$' },
      { id: 'c', md: '$x > 1$' },
      { id: 'd', md: '$x > 24$' },
    ],
    answer: 'a',
    explanation:
      'KPK dari $3$ dan $4$ adalah $12$. Kalikan seluruh pertidaksamaan dengan $12$ (positif, tanda tetap): $4x > 3x + 12$. Maka $x > 12$.',
    sourceRef: 'P04 hlm. 7 (Contoh 1)',
  },
  {
    id: 'p04-u6-e2',
    moduleId: 'p04',
    unitId: 'p04-u6',
    type: 'mc',
    difficulty: 'sulit',
    origin: 'source',
    prompt: 'Selesaikan $\\dfrac{x}{4} > \\dfrac{x}{6} + 2$.',
    choices: [
      { id: 'a', md: '$x > 24$' },
      { id: 'b', md: '$x > 12$' },
      { id: 'c', md: '$x < 24$' },
      { id: 'd', md: '$x > 2$' },
    ],
    answer: 'a',
    explanation:
      'Kalikan dengan KPK $12$: $3x > 2x + 24$. Maka $x > 24$. Pengali positif, sehingga tanda tetap.',
    sourceRef: 'P04 hlm. 7 (Contoh 2)',
  },
  {
    id: 'p04-u6-e3',
    moduleId: 'p04',
    unitId: 'p04-u6',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Diagnosis sumber menyebut tiga kesalahan khas. Manakah yang **bukan** salah satunya?',
    choices: [
      { id: 'a', md: 'Menukar kedua ruas tanpa membalik tanda' },
      { id: 'b', md: 'Operasi salah ruas — $2x + 5 = 13$ menjadi $2x = 13 + 5$' },
      { id: 'c', md: 'Tanda tidak dibalik — $-3x < 12$ menjadi $x < -4$' },
      { id: 'd', md: 'Penyebut dicoret lokal — $\\frac{x}{2} + 1 = 4$ menjadi $x + 1 = 4$' },
    ],
    answer: 'a',
    explanation:
      'Sumber mendaftar tiga kesalahan: (A) operasi salah ruas, (B) tanda tidak dibalik, (C) penyebut dicoret lokal. "Menukar kedua ruas" bukan salah satu dari ketiganya.',
    sourceRef: 'P04 hlm. 8 (Diagnosis tiga kesalahan khas)',
  },
  {
    id: 'p04-u6-e4',
    moduleId: 'p04',
    unitId: 'p04-u6',
    type: 'short',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Selesaikan $\\dfrac{x}{2} - \\dfrac{x}{4} \\ge 3$. Tuliskan batas untuk $x$ (format $x>=n$).',
    answer: ['x>=12', 'x ≥ 12', '12', 'x>=12'],
    explanation:
      'Kalikan dengan $4$ (positif, tanda tetap): $2x - x \\ge 12$, sehingga $x \\ge 12$.',
    sourceRef: 'P04 hlm. 8 (Checkpoint Unit 6)',
  },
  {
    id: 'p04-u6-e5',
    moduleId: 'p04',
    unitId: 'p04-u6',
    type: 'tf',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Pernyataan: Pada pertidaksamaan pecahan dengan penyebut positif, mengalikan seluruh ruas dengan KPK positif membuat tanda pertidaksamaan tetap.',
    answer: 'true',
    explanation:
      'Benar. Sumber menyatakan untuk penyebut positif, memilih KPK positif membuat tanda pertidaksamaan tetap. Aturan pembalikan tanda hanya berlaku bila pengali/pembaginya negatif.',
    sourceRef: 'P04 hlm. 7 (Prasyarat Singkat Unit 6)',
  },
]

export default p04
