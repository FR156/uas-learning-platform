import type { Exercise } from '../../types'

// P08 — Determinan dan Invers Matriks

const p08: Exercise[] = [
  // ------------------------------------------------------------------ Unit 1
  {
    id: 'p08-u1-e1',
    moduleId: 'p08',
    unitId: 'p08-u1',
    type: 'mc',
    difficulty: 'mudah',
    origin: 'source',
    prompt: 'Hitung $\\det \\begin{pmatrix} 3 & 1 \\\\ 5 & 7 \\end{pmatrix}$.',
    choices: [
      { id: 'a', md: '$16$' },
      { id: 'b', md: '$26$' },
      { id: 'c', md: '$22$' },
      { id: 'd', md: '$8$' },
    ],
    answer: 'a',
    explanation:
      '$\\det = ad - bc = 3(7) - 1(5) = 21 - 5 = 16$.',
    sourceRef: 'P08 hlm. 2 (Worked Example 1)',
  },
  {
    id: 'p08-u1-e2',
    moduleId: 'p08',
    unitId: 'p08-u1',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Hitung $\\det \\begin{pmatrix} 2 & -3 \\\\ 4 & 1 \\end{pmatrix}$.',
    choices: [
      { id: 'a', md: '$14$' },
      { id: 'b', md: '$10$' },
      { id: 'c', md: '$-14$' },
      { id: 'd', md: '$2$' },
    ],
    answer: 'a',
    explanation:
      '$\\det = 2(1) - (-3)(4) = 2 + 12 = 14$. Perhatikan tanda: mengurangkan bilangan negatif berarti menambah.',
    sourceRef: 'P08 hlm. 2 (Worked Example 2)',
  },
  {
    id: 'p08-u1-e3',
    moduleId: 'p08',
    unitId: 'p08-u1',
    type: 'short',
    difficulty: 'sulit',
    origin: 'source',
    prompt:
      'Tentukan $k$ agar $C = \\begin{pmatrix} k & 2 \\\\ 3 & 6 \\end{pmatrix}$ singular.',
    answer: ['1', 'k=1'],
    explanation:
      'Singular berarti $\\det(C) = 0$: $6k - 6 = 0$, sehingga $k = 1$.',
    sourceRef: 'P08 hlm. 3 (Worked Example 3)',
  },
  {
    id: 'p08-u1-e4',
    moduleId: 'p08',
    unitId: 'p08-u1',
    type: 'tf',
    difficulty: 'mudah',
    origin: 'source',
    prompt: 'Pernyataan: Matriks berordo $3 \\times 2$ mempunyai determinan.',
    answer: 'false',
    explanation:
      'Salah. Determinan hanya didefinisikan untuk matriks **bujur sangkar** (jumlah baris = jumlah kolom). Matriks $3 \\times 2$ bukan bujur sangkar, jadi tidak mempunyai determinan dalam ruang lingkup P08.',
    sourceRef: 'P08 hlm. 1–2 (Penjelasan Konsep)',
  },
  {
    id: 'p08-u1-e5',
    moduleId: 'p08',
    unitId: 'p08-u1',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Apa hubungan antara nilai $\\det(A)$ dan keberadaan invers $A$?',
    choices: [
      { id: 'a', md: '$A$ mempunyai invers jika dan hanya jika $\\det(A) \\neq 0$' },
      { id: 'b', md: '$A$ mempunyai invers jika $\\det(A) = 0$' },
      { id: 'c', md: 'Determinan tidak berhubungan dengan invers' },
      { id: 'd', md: '$A$ selalu mempunyai invers selama bujur sangkar' },
    ],
    answer: 'a',
    explanation:
      'Sumber menyatakan $A$ mempunyai invers $\\iff \\det(A) \\neq 0$. Jika $\\det(A) = 0$, matriks disebut singular dan tidak mempunyai invers.',
    sourceRef: 'P08 hlm. 2 (Matematika Utama)',
  },

  // ------------------------------------------------------------------ Unit 2
  {
    id: 'p08-u2-e1',
    moduleId: 'p08',
    unitId: 'p08-u2',
    type: 'short',
    difficulty: 'sulit',
    origin: 'source',
    prompt:
      'Hitung $\\det \\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 2 & 0 & 1 \\end{pmatrix}$ dengan metode Sarrus.',
    answer: ['11'],
    explanation:
      'Diagonal turun: $1 \\cdot 1 \\cdot 1 + 2 \\cdot 4 \\cdot 2 + 3 \\cdot 0 \\cdot 0 = 1 + 16 + 0 = 17$. Diagonal naik: $3 \\cdot 1 \\cdot 2 + 2 \\cdot 0 \\cdot 1 + 1 \\cdot 4 \\cdot 0 = 6 + 0 + 0 = 6$. Jadi $\\det = 17 - 6 = 11$.',
    sourceRef: 'P08 hlm. 4 (Worked Example 1)',
  },
  {
    id: 'p08-u2-e2',
    moduleId: 'p08',
    unitId: 'p08-u2',
    type: 'mc',
    difficulty: 'sulit',
    origin: 'source',
    prompt:
      'Hitung $\\det \\begin{pmatrix} 2 & 1 & 0 \\\\ 3 & -1 & 2 \\\\ 1 & 4 & 5 \\end{pmatrix}$.',
    choices: [
      { id: 'a', md: '$-39$' },
      { id: 'b', md: '$39$' },
      { id: 'c', md: '$-31$' },
      { id: 'd', md: '$-9$' },
    ],
    answer: 'a',
    explanation:
      'Diagonal turun: $2(-1)(5) + 1(2)(1) + 0(3)(4) = -10 + 2 + 0$. Diagonal naik: $0(-1)(1) + 1(3)(5) + 2(4)(2) = 0 + 15 + 16$. Jadi $\\det = (-8) - (31) = -39$. Kelompok diagonal naik **seluruhnya** dikurangkan.',
    sourceRef: 'P08 hlm. 5 (Worked Example 2)',
  },
  {
    id: 'p08-u2-e3',
    moduleId: 'p08',
    unitId: 'p08-u2',
    type: 'mc',
    difficulty: 'mudah',
    origin: 'source',
    prompt: 'Berapa banyak hasil kali diagonal yang dihitung dalam metode Sarrus?',
    choices: [
      { id: 'a', md: '$6$ — tiga turun dan tiga naik' },
      { id: 'b', md: '$3$ — hanya diagonal turun' },
      { id: 'c', md: '$9$ — semua kombinasi' },
      { id: 'd', md: '$4$ — dua turun, dua naik' },
    ],
    answer: 'a',
    explanation:
      'Sarrus memakai enam hasil kali: tiga diagonal turun (dijumlah) dan tiga diagonal naik (dikurangkan).',
    sourceRef: 'P08 hlm. 5 (Checkpoint Unit 2)',
  },
  {
    id: 'p08-u2-e4',
    moduleId: 'p08',
    unitId: 'p08-u2',
    type: 'tf',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Pernyataan: Metode Sarrus dapat dipakai untuk matriks $4 \\times 4$.',
    answer: 'false',
    explanation:
      'Salah. Sarrus **hanya** untuk matriks $3 \\times 3$. Untuk ordo lebih besar, sumber mengarahkan ke ekspansi kofaktor.',
    sourceRef: 'P08 hlm. 5 (Jangan Keliru)',
  },

  // ------------------------------------------------------------------ Unit 3
  {
    id: 'p08-u3-e1',
    moduleId: 'p08',
    unitId: 'p08-u3',
    type: 'mc',
    difficulty: 'sulit',
    origin: 'source',
    prompt:
      'Untuk $A = \\begin{pmatrix} 2 & 1 & 3 \\\\ 0 & 4 & 5 \\\\ 1 & -2 & 6 \\end{pmatrix}$, hitung $M_{12}$.',
    choices: [
      { id: 'a', md: '$-5$' },
      { id: 'b', md: '$5$' },
      { id: 'c', md: '$6$' },
      { id: 'd', md: '$-6$' },
    ],
    answer: 'a',
    explanation:
      'Hapus baris $1$ dan kolom $2$, sisa $\\begin{pmatrix} 0 & 5 \\\\ 1 & 6 \\end{pmatrix}$. Maka $M_{12} = 0(6) - 5(1) = -5$.',
    sourceRef: 'P08 hlm. 7 (Worked Example 1)',
  },
  {
    id: 'p08-u3-e2',
    moduleId: 'p08',
    unitId: 'p08-u3',
    type: 'mc',
    difficulty: 'sulit',
    origin: 'source',
    prompt:
      'Masih dengan $A = \\begin{pmatrix} 2 & 1 & 3 \\\\ 0 & 4 & 5 \\\\ 1 & -2 & 6 \\end{pmatrix}$ dan $M_{12} = -5$, berapa $C_{12}$?',
    choices: [
      { id: 'a', md: '$5$' },
      { id: 'b', md: '$-5$' },
      { id: 'c', md: '$0$' },
      { id: 'd', md: '$10$' },
    ],
    answer: 'a',
    explanation:
      'Posisi $(1,2)$ memberi $i+j = 3$ (ganjil), sehingga tanda negatif: $C_{12} = (-1)^{1+2} M_{12} = -(-5) = 5$.',
    sourceRef: 'P08 hlm. 7 (Worked Example 1)',
  },
  {
    id: 'p08-u3-e3',
    moduleId: 'p08',
    unitId: 'p08-u3',
    type: 'short',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Pada matriks yang sama, $M_{11} = 34$. Berapa $C_{11}$?',
    answer: ['34'],
    explanation:
      'Posisi $(1,1)$ memberi $i+j = 2$ (genap), sehingga tandanya positif: $C_{11} = +M_{11} = 34$.',
    sourceRef: 'P08 hlm. 7 (Worked Example 2)',
  },
  {
    id: 'p08-u3-e4',
    moduleId: 'p08',
    unitId: 'p08-u3',
    type: 'tf',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Pernyataan: Minor dan kofaktor adalah hal yang sama.',
    answer: 'false',
    explanation:
      'Salah. Kofaktor adalah minor yang sudah dikalikan tanda posisi $(-1)^{i+j}$. Minor belum memasukkan faktor tanda itu.',
    sourceRef: 'P08 hlm. 7 (Jangan Keliru)',
  },

  // ------------------------------------------------------------------ Unit 4
  {
    id: 'p08-u4-e1',
    moduleId: 'p08',
    unitId: 'p08-u4',
    type: 'mc',
    difficulty: 'sulit',
    origin: 'source',
    prompt:
      'Hitung $\\det \\begin{pmatrix} 1 & 0 & 2 \\\\ 0 & 3 & 0 \\\\ 4 & 0 & 5 \\end{pmatrix}$ dengan ekspansi kofaktor.',
    choices: [
      { id: 'a', md: '$-9$' },
      { id: 'b', md: '$9$' },
      { id: 'c', md: '$15$' },
      { id: 'd', md: '$-15$' },
    ],
    answer: 'a',
    explanation:
      'Baris 2 paling efisien karena hanya unsur tengah tidak nol: $\\det = 3C_{22} = 3 \\det\\begin{pmatrix} 1 & 2 \\\\ 4 & 5 \\end{pmatrix} = 3(5 - 8) = -9$.',
    sourceRef: 'P08 hlm. 9 (Worked Example 1)',
  },
  {
    id: 'p08-u4-e2',
    moduleId: 'p08',
    unitId: 'p08-u4',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Hitung $\\det \\begin{pmatrix} 2 & 0 & 0 \\\\ 1 & 3 & 4 \\\\ 0 & 5 & 6 \\end{pmatrix}$.',
    choices: [
      { id: 'a', md: '$-4$' },
      { id: 'b', md: '$4$' },
      { id: 'c', md: '$-2$' },
      { id: 'd', md: '$38$' },
    ],
    answer: 'a',
    explanation:
      'Ekspansi baris 1 hanya menyisakan satu suku: $\\det = 2\\det\\begin{pmatrix} 3 & 4 \\\\ 5 & 6 \\end{pmatrix} = 2(18 - 20) = -4$.',
    sourceRef: 'P08 hlm. 9 (Worked Example 2)',
  },
  {
    id: 'p08-u4-e3',
    moduleId: 'p08',
    unitId: 'p08-u4',
    type: 'tf',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Pernyataan: Ekspansi kofaktor harus dilakukan pada baris yang paling banyak nol; baris lain memberi hasil berbeda.',
    answer: 'false',
    explanation:
      'Salah. Nilai determinan **tidak bergantung** pada baris/kolom yang dipilih. Memilih baris banyak nol hanyalah strategi efisiensi, bukan syarat matematis.',
    sourceRef: 'P08 hlm. 9 (Mengapa & Jangan Keliru)',
  },
  {
    id: 'p08-u4-e4',
    moduleId: 'p08',
    unitId: 'p08-u4',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Jika koefisien suatu suku ekspansi adalah $0$, apakah kofaktornya perlu dihitung?',
    choices: [
      { id: 'a', md: 'Tidak — kontribusi suku itu $0$, sehingga boleh dilewati' },
      { id: 'b', md: 'Ya, karena kofaktor harus selalu dihitung' },
      { id: 'c', md: 'Ya, jika tidak determinan menjadi nol' },
      { id: 'd', md: 'Hanya bila barisnya bernomor ganjil' },
    ],
    answer: 'a',
    explanation:
      'Suku berbentuk $a_{ij}C_{ij}$. Jika $a_{ij} = 0$, suku itu bernilai $0$ berapa pun kofaktornya, sehingga dapat dilewati — inilah sumber efisiensi memilih baris/kolom banyak nol.',
    sourceRef: 'P08 hlm. 9 (Mengapa & Checkpoint)',
  },

  // ------------------------------------------------------------------ Unit 5
  {
    id: 'p08-u5-e1',
    moduleId: 'p08',
    unitId: 'p08-u5',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Tentukan invers $A = \\begin{pmatrix} 2 & 1 \\\\ 1 & 1 \\end{pmatrix}$.',
    choices: [
      { id: 'a', md: '$\\begin{pmatrix} 1 & -1 \\\\ -1 & 2 \\end{pmatrix}$' },
      { id: 'b', md: '$\\begin{pmatrix} 1 & 1 \\\\ 1 & 2 \\end{pmatrix}$' },
      { id: 'c', md: '$\\begin{pmatrix} 2 & -1 \\\\ -1 & 1 \\end{pmatrix}$' },
      { id: 'd', md: '$\\begin{pmatrix} -1 & 1 \\\\ 1 & -2 \\end{pmatrix}$' },
    ],
    answer: 'a',
    explanation:
      '$\\det(A) = 2(1) - 1(1) = 1$. Rumus $\\dfrac{1}{ad-bc}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix} = \\begin{pmatrix} 1 & -1 \\\\ -1 & 2 \\end{pmatrix}$.',
    sourceRef: 'P08 hlm. 10 (Worked Example 1)',
  },
  {
    id: 'p08-u5-e2',
    moduleId: 'p08',
    unitId: 'p08-u5',
    type: 'tf',
    difficulty: 'mudah',
    origin: 'source',
    prompt:
      'Pernyataan: $B = \\begin{pmatrix} 1 & 2 \\\\ 2 & 4 \\end{pmatrix}$ mempunyai invers.',
    answer: 'false',
    explanation:
      'Salah. $\\det(B) = 1(4) - 2(2) = 4 - 4 = 0$, sehingga $B$ singular dan tidak mempunyai invers.',
    sourceRef: 'P08 hlm. 11 (Worked Example 2)',
  },
  {
    id: 'p08-u5-e3',
    moduleId: 'p08',
    unitId: 'p08-u5',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Aturan mengingat rumus invers $2 \\times 2$ yang benar adalah:',
    choices: [
      {
        id: 'a',
        md: 'Tukar $a$ dan $d$, ubah tanda $b$ dan $c$, lalu bagi dengan determinan',
      },
      { id: 'b', md: 'Tukar $b$ dan $c$, ubah tanda $a$ dan $d$, lalu bagi dengan determinan' },
      { id: 'c', md: 'Ubah tanda semua unsur, lalu bagi dengan determinan' },
      { id: 'd', md: 'Tukar $a$ dan $b$, ubah tanda $c$ dan $d$, lalu bagi dengan determinan' },
    ],
    answer: 'a',
    explanation:
      'Sumber menegaskan: tukar $a$ dan $d$, ubah tanda $b$ dan $c$, lalu bagi dengan determinan — **bukan** sebaliknya. Menukar $b,c$ adalah kesalahan yang khusus didiagnosis.',
    sourceRef: 'P08 hlm. 11, hlm. 14 (Jangan Keliru & Worked Example 3)',
  },
  {
    id: 'p08-u5-e4',
    moduleId: 'p08',
    unitId: 'p08-u5',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Definisi invers matriks adalah matriks $A^{-1}$ yang memenuhi:',
    choices: [
      { id: 'a', md: '$AA^{-1} = A^{-1}A = I$' },
      { id: 'b', md: '$AA^{-1} = 0$' },
      { id: 'c', md: '$A + A^{-1} = I$' },
      { id: 'd', md: '$A^{-1} = A^T$' },
    ],
    answer: 'a',
    explanation:
      'Invers didefinisikan melalui $AA^{-1} = A^{-1}A = I$. Verifikasi hasil invers dilakukan dengan memeriksa hasil kali terhadap matriks identitas.',
    sourceRef: 'P08 hlm. 10 (Penjelasan Konsep & Worked Example 3)',
  },

  // ------------------------------------------------------------------ Unit 6
  {
    id: 'p08-u6-e1',
    moduleId: 'p08',
    unitId: 'p08-u6',
    type: 'mc',
    difficulty: 'sulit',
    origin: 'source',
    prompt:
      'Diketahui $A = \\begin{pmatrix} 1 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 2 \\end{pmatrix}$ dengan $\\det(A) = 1$ dan matriks kofaktor $C = \\begin{pmatrix} 2 & 0 & -1 \\\\ 0 & 1 & 0 \\\\ -1 & 0 & 1 \\end{pmatrix}$. Berapa $A^{-1}$?',
    choices: [
      {
        id: 'a',
        md: '$\\begin{pmatrix} 2 & 0 & -1 \\\\ 0 & 1 & 0 \\\\ -1 & 0 & 1 \\end{pmatrix}$',
      },
      {
        id: 'b',
        md: '$\\begin{pmatrix} 2 & 0 & -1 \\\\ 0 & 1 & 0 \\\\ -1 & 0 & 1 \\end{pmatrix}^T$',
      },
      {
        id: 'c',
        md: '$\\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}$',
      },
      {
        id: 'd',
        md: '$\\begin{pmatrix} 2 & 0 & -1 \\\\ 0 & 2 & 0 \\\\ -1 & 0 & 2 \\end{pmatrix}$',
      },
    ],
    answer: 'a',
    explanation:
      'Karena matriks kofaktornya simetris, transposenya sama, sehingga $\\text{adj}(A) = C$. Dengan $\\det(A) = 1$, $A^{-1} = \\frac{1}{1}\\text{adj}(A) = C$.',
    sourceRef: 'P08 hlm. 12 (Worked Example 1)',
  },
  {
    id: 'p08-u6-e2',
    moduleId: 'p08',
    unitId: 'p08-u6',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Langkah pertama dalam prosedur invers dengan adjoin adalah:',
    choices: [
      { id: 'a', md: 'Hitung $\\det(A)$; jika nol, berhenti' },
      { id: 'b', md: 'Langsung menghitung semua kofaktor' },
      { id: 'c', md: 'Transpose matriks asal' },
      { id: 'd', md: 'Kalikan dengan matriks identitas' },
    ],
    answer: 'a',
    explanation:
      'Urutan wajib: (1) hitung determinan; (2) jika nol, berhenti karena invers tidak ada; baru kemudian (3) hitung kofaktor, (4) bentuk matriks kofaktor, (5) transpose menjadi adjoin, (6) kalikan $1/\\det(A)$.',
    sourceRef: 'P08 hlm. 11–12 (Alur & Mengapa)',
  },
  {
    id: 'p08-u6-e3',
    moduleId: 'p08',
    unitId: 'p08-u6',
    type: 'tf',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Pernyataan: Adjoin adalah transpose dari matriks kofaktor.',
    answer: 'true',
    explanation:
      'Benar. $\\text{adj}(A) = (\\text{matriks kofaktor})^T$. Sumber memperingatkan bahwa matriks kofaktor belum tentu sama dengan adjoin.',
    sourceRef: 'P08 hlm. 12 (Matematika Utama & Jangan Keliru)',
  },
  {
    id: 'p08-u6-e4',
    moduleId: 'p08',
    unitId: 'p08-u6',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Untuk matriks diagonal $D = \\text{diag}(2, 3, 4)$ dengan $\\det(D) = 24$, manakah $D^{-1}$?',
    choices: [
      {
        id: 'a',
        md: '$\\text{diag}\\left(\\tfrac{1}{2}, \\tfrac{1}{3}, \\tfrac{1}{4}\\right)$',
      },
      { id: 'b', md: '$\\text{diag}(2, 3, 4)$' },
      { id: 'c', md: '$\\text{diag}(12, 8, 6)$' },
      { id: 'd', md: '$\\text{diag}(24, 24, 24)$' },
    ],
    answer: 'a',
    explanation:
      'Sumber menyatakan hasilnya konsisten dengan $D^{-1} = \\text{diag}\\left(\\frac{1}{2}, \\frac{1}{3}, \\frac{1}{4}\\right)$ — invers matriks diagonal adalah kebalikan tiap unsur diagonalnya.',
    sourceRef: 'P08 hlm. 13 (Worked Example 2)',
  },

  // ------------------------------------------------------------------ Unit 7
  {
    id: 'p08-u7-e1',
    moduleId: 'p08',
    unitId: 'p08-u7',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Rumus invers hasil kali adalah:',
    choices: [
      { id: 'a', md: '$(AB)^{-1} = B^{-1}A^{-1}$' },
      { id: 'b', md: '$(AB)^{-1} = A^{-1}B^{-1}$' },
      { id: 'c', md: '$(AB)^{-1} = A^{-1} + B^{-1}$' },
      { id: 'd', md: '$(AB)^{-1} = (BA)^{-1}$ selalu' },
    ],
    answer: 'a',
    explanation:
      'Urutan faktor harus **dibalik**. Verifikasi: $(AB)(B^{-1}A^{-1}) = A(BB^{-1})A^{-1} = AIA^{-1} = I$.',
    sourceRef: 'P08 hlm. 14 (Matematika Utama)',
  },
  {
    id: 'p08-u7-e2',
    moduleId: 'p08',
    unitId: 'p08-u7',
    type: 'mc',
    difficulty: 'sulit',
    origin: 'source',
    prompt:
      'Jika $A^{-1} = \\begin{pmatrix} 1 & 0 \\\\ 2 & 1 \\end{pmatrix}$ dan $B^{-1} = \\begin{pmatrix} 2 & 1 \\\\ 0 & 1 \\end{pmatrix}$, berapa $(AB)^{-1}$?',
    choices: [
      { id: 'a', md: '$\\begin{pmatrix} 4 & 1 \\\\ 2 & 1 \\end{pmatrix}$' },
      { id: 'b', md: '$\\begin{pmatrix} 2 & 1 \\\\ 4 & 3 \\end{pmatrix}$' },
      { id: 'c', md: '$\\begin{pmatrix} 1 & 0 \\\\ 2 & 1 \\end{pmatrix}$' },
      { id: 'd', md: '$\\begin{pmatrix} 3 & 1 \\\\ 2 & 2 \\end{pmatrix}$' },
    ],
    answer: 'a',
    explanation:
      '$(AB)^{-1} = B^{-1}A^{-1}$, dengan urutan $B^{-1}$ lebih dulu: $\\begin{pmatrix} 2 & 1 \\\\ 0 & 1 \\end{pmatrix}\\begin{pmatrix} 1 & 0 \\\\ 2 & 1 \\end{pmatrix} = \\begin{pmatrix} 4 & 1 \\\\ 2 & 1 \\end{pmatrix}$.',
    sourceRef: 'P08 hlm. 14 (Worked Example 1)',
  },
  {
    id: 'p08-u7-e3',
    moduleId: 'p08',
    unitId: 'p08-u7',
    type: 'tf',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Pernyataan: Karena $\\det(A) = 0$, kita masih boleh memakai $1/\\det(A)$ asalkan hati-hati.',
    answer: 'false',
    explanation:
      'Salah. Pembagian dengan nol tidak terdefinisi. Kesimpulan yang benar: invers tidak ada. Ini Worked Example 2 sumber.',
    sourceRef: 'P08 hlm. 14 (Worked Example 2)',
  },
  {
    id: 'p08-u7-e4',
    moduleId: 'p08',
    unitId: 'p08-u7',
    type: 'tf',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Pernyataan: Untuk matriks $2 \times 2$, aturan invers yang benar adalah tukar $b$ dan $c$ lalu ubah tanda $a$ dan $d$.',
    answer: 'false',
    explanation:
      'Salah. Sumber menandai klaim itu sebagai salah: aturan yang benar adalah tukar $a$ dan $d$, lalu ubah tanda $b$ dan $c$. Ini salah satu dari empat kesalahan penting P08.',
    sourceRef: 'P08 hlm. 14–15 (Worked Example 3 & Jangan Keliru)',
  },
]

export default p08
