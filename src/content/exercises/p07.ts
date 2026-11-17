import type { Exercise } from '../../types'

// P07 — Matriks dan Operasi Matriks
// Matrix entries are taken verbatim from the worked examples in p07.pdf.

const p07: Exercise[] = [
  // ------------------------------------------------------------------ Unit 1
  {
    id: 'p07-u1-e1',
    moduleId: 'p07',
    unitId: 'p07-u1',
    type: 'mc',
    difficulty: 'mudah',
    origin: 'source',
    prompt:
      'Berapa ordo matriks $A = \\begin{pmatrix} 2 & -3 & 1 \\\\ 0 & 4 & 5 \\end{pmatrix}$?',
    choices: [
      { id: 'a', md: '$2 \\times 3$' },
      { id: 'b', md: '$3 \\times 2$' },
      { id: 'c', md: '$6 \\times 1$' },
      { id: 'd', md: '$2 \\times 2$' },
    ],
    answer: 'a',
    explanation:
      'Ordo ditulis baris × kolom. Matriks $A$ memiliki 2 baris dan 3 kolom, sehingga ordonya $2 \\times 3$ dengan $2 \\cdot 3 = 6$ unsur. Perhatikan $2 \\times 3 \\neq 3 \\times 2$ walaupun jumlah unsurnya sama.',
    sourceRef: 'P07 hlm. 1 (Penjelasan Konsep & Jangan Keliru)',
  },
  {
    id: 'p07-u1-e2',
    moduleId: 'p07',
    unitId: 'p07-u1',
    type: 'short',
    difficulty: 'mudah',
    origin: 'source',
    prompt:
      'Pada matriks $C = \\begin{pmatrix} 3 & 7 & 1 \\\\ -2 & 4 & 5 \\end{pmatrix}$, berapa nilai $c_{12}$?',
    answer: ['7'],
    explanation:
      '$c_{12}$ berarti baris ke-1, kolom ke-2. Indeks pertama selalu menunjuk baris, indeks kedua menunjuk kolom, sehingga $c_{12} = 7$.',
    sourceRef: 'P07 hlm. 2 (Worked Example 2)',
  },
  {
    id: 'p07-u1-e3',
    moduleId: 'p07',
    unitId: 'p07-u1',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Pada matriks $D = \\begin{pmatrix} 5 & -1 & 2 \\\\ 0 & 3 & 7 \\\\ 4 & 6 & 8 \\end{pmatrix}$, di posisi manakah unsur $7$?',
    choices: [
      { id: 'a', md: 'Baris 2, kolom 3 — sehingga $d_{23} = 7$' },
      { id: 'b', md: 'Baris 3, kolom 2 — sehingga $d_{32} = 7$' },
      { id: 'c', md: 'Baris 1, kolom 2 — sehingga $d_{12} = 7$' },
      { id: 'd', md: 'Baris 3, kolom 3 — sehingga $d_{33} = 7$' },
    ],
    answer: 'a',
    explanation:
      'Unsur $7$ berada pada baris kedua dan kolom ketiga, jadi posisinya $(2, 3)$ dan notasinya $d_{23} = 7$. Ini Worked Example 3 sumber.',
    sourceRef: 'P07 hlm. 2 (Worked Example 3)',
  },
  {
    id: 'p07-u1-e4',
    moduleId: 'p07',
    unitId: 'p07-u1',
    type: 'short',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Berapa jumlah unsur matriks $B = \\begin{pmatrix} 4 & 1 \\\\ -2 & 0 \\\\ 5 & 7 \\end{pmatrix}$?',
    answer: ['6'],
    explanation:
      '$B$ memiliki 3 baris dan 2 kolom, jadi ordonya $3 \\times 2$. Jumlah unsur $= 3 \\cdot 2 = 6$.',
    sourceRef: 'P07 hlm. 2 (Worked Example 1)',
  },

  // ------------------------------------------------------------------ Unit 2
  {
    id: 'p07-u2-e1',
    moduleId: 'p07',
    unitId: 'p07-u2',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Matriks $\\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix}$ termasuk jenis apa?',
    choices: [
      { id: 'a', md: 'Matriks skalar — tetapi bukan matriks identitas' },
      { id: 'b', md: 'Matriks identitas orde 2' },
      { id: 'c', md: 'Matriks nol' },
      { id: 'd', md: 'Matriks baris' },
    ],
    answer: 'a',
    explanation:
      'Ia matriks skalar karena diagonal utamanya sama-sama $2$ dan unsur di luar diagonal nol. Ia **bukan** identitas karena diagonalnya bukan $1$ — sumber menegaskan diagonal tidak otomatis identitas.',
    sourceRef: 'P07 hlm. 3–4 (Worked Example 1 & Jangan Keliru)',
  },
  {
    id: 'p07-u2-e2',
    moduleId: 'p07',
    unitId: 'p07-u2',
    type: 'tf',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Pernyataan: Setiap matriks bujur sangkar otomatis simetris.',
    answer: 'false',
    explanation:
      'Salah. Simetris berarti $S^T = S$; tidak semua matriks bujur sangkar memenuhi itu. Sumber secara eksplisit memperingatkan: "Diagonal tidak otomatis identitas, dan bujur sangkar tidak otomatis simetris."',
    sourceRef: 'P07 hlm. 4 (Jangan Keliru)',
  },
  {
    id: 'p07-u2-e3',
    moduleId: 'p07',
    unitId: 'p07-u2',
    type: 'mc',
    difficulty: 'mudah',
    origin: 'source',
    prompt: 'Matriks identitas orde 3 adalah:',
    choices: [
      {
        id: 'a',
        md: '$I_3 = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}$',
      },
      {
        id: 'b',
        md: '$\\begin{pmatrix} 1 & 1 & 1 \\\\ 1 & 1 & 1 \\\\ 1 & 1 & 1 \\end{pmatrix}$',
      },
      {
        id: 'c',
        md: '$\\begin{pmatrix} 0 & 0 & 0 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{pmatrix}$',
      },
      {
        id: 'd',
        md: '$\\begin{pmatrix} 3 & 0 & 0 \\\\ 0 & 3 & 0 \\\\ 0 & 0 & 3 \\end{pmatrix}$',
      },
    ],
    answer: 'a',
    explanation:
      'Matriks identitas punya $1$ pada diagonal utama dan $0$ di luar diagonal. Pilihan (d) adalah matriks skalar, bukan identitas, karena diagonalnya $3$.',
    sourceRef: 'P07 hlm. 4 (Worked Example 2)',
  },
  {
    id: 'p07-u2-e4',
    moduleId: 'p07',
    unitId: 'p07-u2',
    type: 'mc',
    difficulty: 'mudah',
    origin: 'source',
    prompt: 'Matriks nol adalah matriks yang…',
    choices: [
      { id: 'a', md: 'semua unsurnya $0$' },
      { id: 'b', md: 'semua unsur diagonalnya $0$ tetapi unsur lain bebas' },
      { id: 'c', md: 'memiliki tepat satu baris' },
      { id: 'd', md: 'tidak memiliki ordo' },
    ],
    answer: 'a',
    explanation:
      'Menurut daftar jenis matriks di sumber, matriks nol adalah matriks yang semua unsurnya $0$. Matriks dengan tepat satu baris disebut matriks baris, dan yang tepat satu kolom disebut matriks kolom.',
    sourceRef: 'P07 hlm. 3 (Daftar jenis matriks)',
  },

  // ------------------------------------------------------------------ Unit 3
  {
    id: 'p07-u3-e1',
    moduleId: 'p07',
    unitId: 'p07-u3',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Tentukan $A^T$ untuk $A = \\begin{pmatrix} 8 & 2 \\\\ 9 & -8 \\\\ 1 & 3 \\end{pmatrix}$.',
    choices: [
      {
        id: 'a',
        md: '$A^T = \\begin{pmatrix} 8 & 9 & 1 \\\\ 2 & -8 & 3 \\end{pmatrix}$',
      },
      {
        id: 'b',
        md: '$A^T = \\begin{pmatrix} 3 & 1 \\\\ -8 & 9 \\\\ 2 & 8 \\end{pmatrix}$',
      },
      {
        id: 'c',
        md: '$A^T = \\begin{pmatrix} 8 & 2 \\\\ 9 & -8 \\\\ 1 & 3 \\end{pmatrix}$',
      },
      {
        id: 'd',
        md: '$A^T = \\begin{pmatrix} -8 & -2 \\\\ -9 & 8 \\\\ -1 & -3 \\end{pmatrix}$',
      },
    ],
    answer: 'a',
    explanation:
      'Transpose menukar baris menjadi kolom: baris pertama $(8, 2)$ menjadi kolom pertama, dan seterusnya. Ordo berubah dari $3 \\times 2$ menjadi $2 \\times 3$. Nilai unsur tidak berubah — hanya posisinya.',
    sourceRef: 'P07 hlm. 5–6 (Worked Example 1)',
  },
  {
    id: 'p07-u3-e2',
    moduleId: 'p07',
    unitId: 'p07-u3',
    type: 'tf',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Pernyataan: Transpose mengubah tanda setiap unsur matriks menjadi negatif.',
    answer: 'false',
    explanation:
      'Salah. Sumber menegaskan transpose bukan operasi mengubah tanda atau mengubah nilai — yang berubah hanya posisi baris dan kolom.',
    sourceRef: 'P07 hlm. 6 (Jangan Keliru)',
  },
  {
    id: 'p07-u3-e3',
    moduleId: 'p07',
    unitId: 'p07-u3',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Unsur yang semula di posisi $a_{23}$ akan berada di posisi apa setelah transpose?',
    choices: [
      { id: 'a', md: '$(3, 2)$' },
      { id: 'b', md: '$(2, 3)$ — tidak berubah' },
      { id: 'c', md: '$(3, 3)$' },
      { id: 'd', md: '$(1, 2)$' },
    ],
    answer: 'a',
    explanation:
      'Unsur pada posisi $(i, j)$ berpindah ke $(j, i)$, sehingga $a_{23}$ menjadi posisi $(3, 2)$. Nilai unsurnya tetap sama.',
    sourceRef: 'P07 hlm. 6 (Worked Example 3)',
  },
  {
    id: 'p07-u3-e4',
    moduleId: 'p07',
    unitId: 'p07-u3',
    type: 'short',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Jika $A$ berordo $3 \\times 4$, berapa ordo $A^T$? (format $a \\times b$)',
    answer: ['4 x 3', '4x3', '4 times 3'],
    explanation:
      'Transpose menukar baris dan kolom, sehingga ordo $m \\times n$ menjadi $n \\times m$. Untuk $3 \\times 4$ hasilnya $4 \\times 3$.',
    sourceRef: 'P07 hlm. 5 (Penjelasan Konsep Transpose)',
  },

  // ------------------------------------------------------------------ Unit 4
  {
    id: 'p07-u4-e1',
    moduleId: 'p07',
    unitId: 'p07-u4',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Diketahui $A = \\begin{pmatrix} 2 & 0 \\\\ 1 & 4 \\end{pmatrix}$ dan $B = \\begin{pmatrix} -1 & 5 \\\\ 2 & 3 \\end{pmatrix}$. Hitung $A + B$.',
    choices: [
      {
        id: 'a',
        md: '$\\begin{pmatrix} 1 & 5 \\\\ 3 & 7 \\end{pmatrix}$',
      },
      {
        id: 'b',
        md: '$\\begin{pmatrix} 3 & 5 \\\\ -1 & 7 \\end{pmatrix}$',
      },
      {
        id: 'c',
        md: '$\\begin{pmatrix} -2 & 0 \\\\ 2 & 12 \\end{pmatrix}$',
      },
      {
        id: 'd',
        md: '$\\begin{pmatrix} 1 & -5 \\\\ -1 & 1 \\end{pmatrix}$',
      },
    ],
    answer: 'a',
    explanation:
      'Penjumlahan matriks dilakukan unsur per unsur pada posisi yang bersesuaian: $2 + (-1) = 1$, $0 + 5 = 5$, $1 + 2 = 3$, $4 + 3 = 7$.',
    sourceRef: 'P07 hlm. 7 (Worked Example 1)',
  },
  {
    id: 'p07-u4-e2',
    moduleId: 'p07',
    unitId: 'p07-u4',
    type: 'mc',
    difficulty: 'sulit',
    origin: 'source',
    prompt:
      'Jika $\\begin{pmatrix} x & 2 \\\\ 3 & y \\end{pmatrix} = \\begin{pmatrix} 5 & 2 \\\\ 3 & -1 \\end{pmatrix}$, maka:',
    choices: [
      { id: 'a', md: '$x = 5$ dan $y = -1$' },
      { id: 'b', md: '$x = -1$ dan $y = 5$' },
      { id: 'c', md: '$x = 2$ dan $y = 3$' },
      { id: 'd', md: '$x = 5$ dan $y = 3$' },
    ],
    answer: 'a',
    explanation:
      'Dua matriks sama jika ordonya sama dan setiap unsur pada posisi bersesuaian sama. Dari posisi $(1,1)$: $x = 5$; dari posisi $(2,2)$: $y = -1$.',
    sourceRef: 'P07 hlm. 7 (Worked Example 2)',
  },
  {
    id: 'p07-u4-e3',
    moduleId: 'p07',
    unitId: 'p07-u4',
    type: 'tf',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Pernyataan: Matriks $2 \\times 3$ dan $3 \\times 2$ dapat dijumlahkan karena keduanya punya enam unsur.',
    answer: 'false',
    explanation:
      'Salah. Syarat penjumlahan/pengurangan adalah **ordo sama**, bukan sekadar jumlah unsur sama. Posisi baris-kolom pada $2 \\times 3$ dan $3 \\times 2$ tidak bersesuaian.',
    sourceRef: 'P07 hlm. 8 (Worked Example 3 & Jangan Keliru)',
  },
  {
    id: 'p07-u4-e4',
    moduleId: 'p07',
    unitId: 'p07-u4',
    type: 'mc',
    difficulty: 'mudah',
    origin: 'source',
    prompt:
      'Dari $A = \\begin{pmatrix} 2 & 0 \\\\ 1 & 4 \\end{pmatrix}$ dan $B = \\begin{pmatrix} -1 & 5 \\\\ 2 & 3 \\end{pmatrix}$, nilai $A - B$ adalah:',
    choices: [
      {
        id: 'a',
        md: '$\\begin{pmatrix} 3 & -5 \\\\ -1 & 1 \\end{pmatrix}$',
      },
      {
        id: 'b',
        md: '$\\begin{pmatrix} 1 & 5 \\\\ 3 & 7 \\end{pmatrix}$',
      },
      {
        id: 'c',
        md: '$\\begin{pmatrix} -3 & 5 \\\\ 1 & -1 \\end{pmatrix}$',
      },
      {
        id: 'd',
        md: '$\\begin{pmatrix} 2 & 0 \\\\ 1 & 4 \\end{pmatrix}$',
      },
    ],
    answer: 'a',
    explanation:
      'Pengurangan juga unsur per unsur: $2 - (-1) = 3$, $0 - 5 = -5$, $1 - 2 = -1$, $4 - 3 = 1$.',
    sourceRef: 'P07 hlm. 7 (Worked Example 1)',
  },

  // ------------------------------------------------------------------ Unit 5
  {
    id: 'p07-u5-e1',
    moduleId: 'p07',
    unitId: 'p07-u5',
    type: 'mc',
    difficulty: 'mudah',
    origin: 'source',
    prompt:
      'Jika $A = \\begin{pmatrix} -3 & 0 \\\\ 1 & -7 \\end{pmatrix}$, maka $2A = \\ldots$',
    choices: [
      {
        id: 'a',
        md: '$\\begin{pmatrix} -6 & 0 \\\\ 2 & -14 \\end{pmatrix}$',
      },
      {
        id: 'b',
        md: '$\\begin{pmatrix} -6 & 0 \\\\ 2 & -7 \\end{pmatrix}$',
      },
      {
        id: 'c',
        md: '$\\begin{pmatrix} -1 & 2 \\\\ 3 & -5 \\end{pmatrix}$',
      },
      {
        id: 'd',
        md: '$\\begin{pmatrix} -6 & 2 \\\\ 0 & -14 \\end{pmatrix}$',
      },
    ],
    answer: 'a',
    explanation:
      'Perkalian skalar mengalikan **setiap** unsur dengan $c$: $2 \\cdot (-3) = -6$, $2 \\cdot 0 = 0$, $2 \\cdot 1 = 2$, $2 \\cdot (-7) = -14$. Mengalikan hanya sebagian unsur adalah kesalahan yang diperingatkan sumber.',
    sourceRef: 'P07 hlm. 8–9 (Worked Example 1 & Jangan Keliru)',
  },
  {
    id: 'p07-u5-e2',
    moduleId: 'p07',
    unitId: 'p07-u5',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Untuk $A = \\begin{pmatrix} 2 & -1 \\\\ 3 & 4 \\end{pmatrix}$, nilai $-A$ adalah:',
    choices: [
      {
        id: 'a',
        md: '$\\begin{pmatrix} -2 & 1 \\\\ -3 & -4 \\end{pmatrix}$',
      },
      {
        id: 'b',
        md: '$\\begin{pmatrix} 2 & 1 \\\\ 3 & -4 \\end{pmatrix}$',
      },
      {
        id: 'c',
        md: '$\\begin{pmatrix} -2 & -1 \\\\ -3 & -4 \\end{pmatrix}$',
      },
      {
        id: 'd',
        md: '$\\begin{pmatrix} 1 & 2 \\\\ -4 & 3 \\end{pmatrix}$',
      },
    ],
    answer: 'a',
    explanation:
      '$-A$ adalah perkalian skalar dengan $-1$, yaitu mengubah tanda **semua** unsur: $-2$, $1$, $-3$, $-4$. Perhatikan $-(-1) = 1$, bukan $-1$.',
    sourceRef: 'P07 hlm. 9 (Worked Example 2)',
  },
  {
    id: 'p07-u5-e3',
    moduleId: 'p07',
    unitId: 'p07-u5',
    type: 'tf',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Pernyataan: Pada perkalian skalar, cukup unsur diagonal saja yang dikalikan dengan skalar.',
    answer: 'false',
    explanation:
      'Salah. Sumber menegaskan skalar harus dikalikan ke **semua** unsur, bukan hanya diagonal, satu baris, atau satu kolom.',
    sourceRef: 'P07 hlm. 9 (Jangan Keliru)',
  },
  {
    id: 'p07-u5-e4',
    moduleId: 'p07',
    unitId: 'p07-u5',
    type: 'mc',
    difficulty: 'sulit',
    origin: 'source',
    prompt:
      'Diketahui $A = \\begin{pmatrix} 1 & 2 \\\\ 0 & -1 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 3 & 0 \\\\ 2 & 4 \\end{pmatrix}$. Hitung $2A + B$.',
    choices: [
      {
        id: 'a',
        md: '$\\begin{pmatrix} 5 & 4 \\\\ 2 & 2 \\end{pmatrix}$',
      },
      {
        id: 'b',
        md: '$\\begin{pmatrix} 5 & 4 \\\\ 2 & -2 \\end{pmatrix}$',
      },
      {
        id: 'c',
        md: '$\\begin{pmatrix} 4 & 4 \\\\ 2 & 2 \\end{pmatrix}$',
      },
      {
        id: 'd',
        md: '$\\begin{pmatrix} 5 & 2 \\\\ 2 & 2 \\end{pmatrix}$',
      },
    ],
    answer: 'a',
    explanation:
      '$2A = \\begin{pmatrix} 2 & 4 \\\\ 0 & -2 \\end{pmatrix}$. Lalu tambahkan $B$ unsur per unsur: $2+3 = 5$, $4+0 = 4$, $0+2 = 2$, $-2+4 = 2$.',
    sourceRef: 'P07 hlm. 9 (Worked Example 3)',
  },

  // ------------------------------------------------------------------ Unit 6
  {
    id: 'p07-u6-e1',
    moduleId: 'p07',
    unitId: 'p07-u6',
    type: 'mc',
    difficulty: 'sulit',
    origin: 'source',
    prompt:
      'Hitung $AB$ untuk $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 2 & 0 \\\\ 1 & 5 \\end{pmatrix}$.',
    choices: [
      {
        id: 'a',
        md: '$\\begin{pmatrix} 4 & 10 \\\\ 10 & 20 \\end{pmatrix}$',
      },
      {
        id: 'b',
        md: '$\\begin{pmatrix} 2 & 0 \\\\ 3 & 20 \\end{pmatrix}$',
      },
      {
        id: 'c',
        md: '$\\begin{pmatrix} 3 & 2 \\\\ 4 & 9 \\end{pmatrix}$',
      },
      {
        id: 'd',
        md: '$\\begin{pmatrix} 4 & 10 \\\\ 10 & 25 \\end{pmatrix}$',
      },
    ],
    answer: 'a',
    explanation:
      'Baris × kolom: $(1,2)$ dengan $(2,1)$ memberi $1\\cdot2 + 2\\cdot1 = 4$; $(1,2)$ dengan $(0,5)$ memberi $1\\cdot0 + 2\\cdot5 = 10$; $(3,4)$ dengan $(2,1)$ memberi $3\\cdot2 + 4\\cdot1 = 10$; $(3,4)$ dengan $(0,5)$ memberi $3\\cdot0 + 4\\cdot5 = 20$.',
    sourceRef: 'P07 hlm. 11 (Worked Example 1)',
  },
  {
    id: 'p07-u6-e2',
    moduleId: 'p07',
    unitId: 'p07-u6',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Jika $A$ berordo $2 \\times 3$ dan $B$ berordo $3 \\times 4$, apa yang benar?',
    choices: [
      {
        id: 'a',
        md: '$AB$ terdefinisi dan berordo $2 \\times 4$; $BA$ tidak terdefinisi',
      },
      { id: 'b', md: 'Keduanya terdefinisi dan berordo $2 \\times 4$' },
      { id: 'c', md: '$AB$ tidak terdefinisi karena ordonya berbeda' },
      {
        id: 'd',
        md: 'Keduanya terdefinisi, dengan $AB = BA$',
      },
    ],
    answer: 'a',
    explanation:
      'Angka "dalam" harus cocok: $A$ punya 3 kolom, $B$ punya 3 baris, jadi $AB$ berordo $2 \\times 4$. Untuk $BA$, angka dalamnya $4$ dan $2$ — tidak cocok, sehingga tidak terdefinisi.',
    sourceRef: 'P07 hlm. 11 (Worked Example 2)',
  },
  {
    id: 'p07-u6-e3',
    moduleId: 'p07',
    unitId: 'p07-u6',
    type: 'tf',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Pernyataan: Perkalian matriks selalu komutatif, $AB = BA$.',
    answer: 'false',
    explanation:
      'Salah. Sumber menyatakan $AB = BA$ **tidak** berlaku secara umum. Contoh sumber: $A = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}$, $B = \\begin{pmatrix} 1 & 0 \\\\ 1 & 1 \\end{pmatrix}$ memberi $AB = \\begin{pmatrix} 2 & 1 \\\\ 1 & 1 \\end{pmatrix}$ sedangkan $BA = \\begin{pmatrix} 1 & 1 \\\\ 1 & 2 \\end{pmatrix}$.',
    sourceRef: 'P07 hlm. 11–12 (Sifat & Worked Example 3)',
  },
  {
    id: 'p07-u6-e4',
    moduleId: 'p07',
    unitId: 'p07-u6',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Sifat mana yang **tidak** berlaku umum untuk perkalian matriks?',
    choices: [
      {
        id: 'a',
        md: 'Komutatif — $AB$ tidak selalu sama dengan $BA$',
      },
      {
        id: 'b',
        md: 'Asosiatif — $A(BC) = (AB)C$ bila semua terdefinisi',
      },
      {
        id: 'c',
        md: 'Distributif — $A(B + C) = AB + AC$ bila semua terdefinisi',
      },
      { id: 'd', md: 'Sifat-sifat di atas semuanya berlaku umum' },
    ],
    answer: 'a',
    explanation:
      'Menurut daftar sifat di sumber, $A + B = B + A$, $A + (B + C) = (A + B) + C$, $A(BC) = (AB)C$, dan $A(B + C) = AB + AC$ berlaku bila terdefinisi — tetapi $AB = BA$ tidak.',
    sourceRef: 'P07 hlm. 11 (Sifat Operasi yang Perlu Diingat)',
  },

  // ------------------------------------------------------------------ Unit 7
  {
    id: 'p07-u7-e1',
    moduleId: 'p07',
    unitId: 'p07-u7',
    type: 'mc',
    difficulty: 'sulit',
    origin: 'source',
    prompt:
      'Hitung $A^2$ untuk $A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix}$.',
    choices: [
      {
        id: 'a',
        md: '$\\begin{pmatrix} 4 & 5 \\\\ 0 & 9 \\end{pmatrix}$',
      },
      {
        id: 'b',
        md: '$\\begin{pmatrix} 4 & 1 \\\\ 0 & 9 \\end{pmatrix}$',
      },
      {
        id: 'c',
        md: '$\\begin{pmatrix} 4 & 2 \\\\ 0 & 6 \\end{pmatrix}$',
      },
      {
        id: 'd',
        md: '$\\begin{pmatrix} 5 & 4 \\\\ 0 & 9 \\end{pmatrix}$',
      },
    ],
    answer: 'a',
    explanation:
      '$A^2 = A \\cdot A$ memakai perkalian matriks, bukan kuadrat unsur per unsur: $(2,1)$ dengan $(1,3)$ memberi $2\\cdot1 + 1\\cdot3 = 5$ pada posisi $(1,2)$. Pilihan (b) adalah kesalahan menguadratkan tiap unsur.',
    sourceRef: 'P07 hlm. 13 (Worked Example 1)',
  },
  {
    id: 'p07-u7-e2',
    moduleId: 'p07',
    unitId: 'p07-u7',
    type: 'short',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Jika $B = \\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix}$, berapa unsur $b_{12}$ pada $B^2$?',
    answer: ['4'],
    explanation:
      '$B^2 = \\begin{pmatrix} 1 & 4 \\\\ 0 & 1 \\end{pmatrix}$, jadi $b_{12} = 4$. Hitungannya: $(1,2)$ dengan $(1,1)$ memberi $1\\cdot1 + 2\\cdot0 = 1$; $(1,2)$ dengan $(2,1)$ memberi $1\\cdot2 + 2\\cdot1 = 4$.',
    sourceRef: 'P07 hlm. 13 (Worked Example 2)',
  },
  {
    id: 'p07-u7-e3',
    moduleId: 'p07',
    unitId: 'p07-u7',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Mengapa matriks berordo $2 \\times 3$ tidak dapat dipangkatkan menjadi $A^2$ dalam cakupan P07?',
    choices: [
      {
        id: 'a',
        md: 'Karena $(2 \\times 3)(2 \\times 3)$ tidak terdefinisi — angka dalamnya $3$ dan $2$ tidak cocok.',
      },
      { id: 'b', md: 'Karena matriks $2 \\times 3$ tidak memiliki unsur diagonal.' },
      { id: 'c', md: 'Karena pangkat hanya berlaku untuk matriks nol.' },
      { id: 'd', md: 'Karena $A^2$ selalu sama dengan matriks identitas.' },
    ],
    answer: 'a',
    explanation:
      'Perpangkatan matriks adalah perkalian berulang, jadi $A^2 = A \\cdot A$ menuntut $A$ dapat dikalikan dengan dirinya sendiri. Untuk ordo $2 \\times 3$, perkalian $(2 \\times 3)(2 \\times 3)$ tidak terdefinisi karena jumlah kolom pertama (3) tidak sama dengan jumlah baris kedua (2). Karena itu perpangkatan dibatasi pada matriks bujur sangkar.',
    sourceRef: 'P07 hlm. 12–13 (Penjelasan Konsep & Jangan Keliru)',
  },
  {
    id: 'p07-u7-e4',
    moduleId: 'p07',
    unitId: 'p07-u7',
    type: 'mc',
    difficulty: 'sulit',
    origin: 'source',
    prompt:
      'Diagnosis dari sumber: hitung $C^2$ untuk $C = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$. Manakah hasil yang benar?',
    choices: [
      {
        id: 'a',
        md: '$\\begin{pmatrix} 7 & 10 \\\\ 15 & 22 \\end{pmatrix}$',
      },
      {
        id: 'b',
        md: '$\\begin{pmatrix} 1 & 4 \\\\ 9 & 16 \\end{pmatrix}$',
      },
      {
        id: 'c',
        md: '$\\begin{pmatrix} 2 & 4 \\\\ 6 & 8 \\end{pmatrix}$',
      },
      {
        id: 'd',
        md: '$\\begin{pmatrix} 4 & 6 \\\\ 12 & 16 \\end{pmatrix}$',
      },
    ],
    answer: 'a',
    explanation:
      '$C^2 = C \\cdot C$: posisi $(1,1)$: $1\\cdot1 + 2\\cdot3 = 7$; $(1,2)$: $1\\cdot2 + 2\\cdot4 = 10$; $(2,1)$: $3\\cdot1 + 4\\cdot3 = 15$; $(2,2)$: $3\\cdot2 + 4\\cdot4 = 22$. Pilihan (b) — menguadratkan tiap unsur — adalah kesalahan yang khusus didiagnosis sumber.',
    sourceRef: 'P07 hlm. 13 (Worked Example 3 — Diagnosis)',
  },
]

export default p07
