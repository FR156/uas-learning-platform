import type { Exercise } from '../../types'

// P10 — Limit dan Kekontinuan

const p10: Exercise[] = [
  // ------------------------------------------------------------------ Unit 1
  {
    id: 'p10-u1-e1',
    moduleId: 'p10',
    unitId: 'p10-u1',
    type: 'mc',
    difficulty: 'mudah',
    origin: 'source',
    prompt: 'Jika $\\lim_{x \\to 2^-} f(x) = 5$ dan $\\lim_{x \\to 2^+} f(x) = 5$, berapa $\\lim_{x \\to 2} f(x)$?',
    choices: [
      { id: 'a', md: '$5$' },
      { id: 'b', md: 'Tidak ada' },
      { id: 'c', md: '$10$' },
      { id: 'd', md: 'Tidak dapat ditentukan' },
    ],
    answer: 'a',
    explanation:
      'Limit dua sisi ada bila kedua limit satu sisi ada dan sama. Karena keduanya $5$, limit dua sisinya $5$.',
    sourceRef: 'P10 hlm. 2 (Worked Example 1)',
  },
  {
    id: 'p10-u1-e2',
    moduleId: 'p10',
    unitId: 'p10-u1',
    type: 'tf',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Pernyataan: Jika $\\lim_{x \\to 1^-} f(x) = 3$ dan $\\lim_{x \\to 1^+} f(x) = 7$, maka $\\lim_{x \\to 1} f(x)$ ada.',
    answer: 'false',
    explanation:
      'Salah. Kedua limit satu sisi berbeda, sehingga limit dua sisi tidak ada. Ini Worked Example 2 sumber.',
    sourceRef: 'P10 hlm. 2 (Worked Example 2)',
  },
  {
    id: 'p10-u1-e3',
    moduleId: 'p10',
    unitId: 'p10-u1',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Semua nilai $f(x)$ di sekitar $x = 4$ mendekati $6$, tetapi $f(4) = 10$. Berapa $\\lim_{x \\to 4} f(x)$?',
    choices: [
      { id: 'a', md: '$6$' },
      { id: 'b', md: '$10$' },
      { id: 'c', md: '$16$' },
      { id: 'd', md: 'Tidak ada' },
    ],
    answer: 'a',
    explanation:
      'Limit memeriksa perilaku **di sekitar** titik, bukan nilai tepat di titik. Karena nilai di sekitar mendekati $6$, limitnya $6$. Nilai $f(4) = 10$ baru relevan ketika memeriksa kekontinuan.',
    sourceRef: 'P10 hlm. 2 (Worked Example 3)',
  },
  {
    id: 'p10-u1-e4',
    moduleId: 'p10',
    unitId: 'p10-u1',
    type: 'mc',
    difficulty: 'mudah',
    origin: 'source',
    prompt: 'Limit dua sisi $\\lim_{x \\to a} f(x) = L$ ada apabila:',
    choices: [
      {
        id: 'a',
        md: '$\\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x) = L$',
      },
      { id: 'b', md: '$f(a) = L$' },
      { id: 'c', md: '$\\lim_{x \\to a^-} f(x)$ ada' },
      { id: 'd', md: '$\\lim_{x \\to a^+} f(x)$ ada' },
    ],
    answer: 'a',
    explanation:
      'Sumber menyatakan limit dua sisi ada jika dan hanya jika kedua limit satu sisi ada dan bernilai sama. Mengetahui hanya satu sisi, atau hanya $f(a)$, tidak cukup.',
    sourceRef: 'P10 hlm. 2 (Matematika Utama & Jangan Keliru)',
  },
  {
    id: 'p10-u1-e5',
    moduleId: 'p10',
    unitId: 'p10-u1',
    type: 'tf',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Pernyataan: Jika $f(a) = 7$, maka otomatis $\\lim_{x \\to a} f(x) = 7$.',
    answer: 'false',
    explanation:
      'Salah. Mengetahui $f(a)$ saja tidak cukup untuk menentukan limit; fungsi dapat mendekati nilai lain atau memiliki limit kiri/kanan berbeda.',
    sourceRef: 'P10 hlm. 2–3 (Jangan Keliru & Checkpoint)',
  },

  // ------------------------------------------------------------------ Unit 2
  {
    id: 'p10-u2-e1',
    moduleId: 'p10',
    unitId: 'p10-u2',
    type: 'short',
    difficulty: 'mudah',
    origin: 'source',
    prompt: 'Hitung $\\lim_{x \\to 3} (2x + 1)$.',
    answer: ['7'],
    explanation:
      'Fungsi polinom, jadi substitusi langsung sah: $2(3) + 1 = 7$.',
    sourceRef: 'P10 hlm. 4 (Worked Example 1)',
  },
  {
    id: 'p10-u2-e2',
    moduleId: 'p10',
    unitId: 'p10-u2',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Hitung $\\lim_{x \\to -1} (x^2 + 4x - 2)$.',
    choices: [
      { id: 'a', md: '$-5$' },
      { id: 'b', md: '$5$' },
      { id: 'c', md: '$-3$' },
      { id: 'd', md: '$3$' },
    ],
    answer: 'a',
    explanation:
      'Substitusi langsung: $(-1)^2 + 4(-1) - 2 = 1 - 4 - 2 = -5$.',
    sourceRef: 'P10 hlm. 4 (Worked Example 2)',
  },
  {
    id: 'p10-u2-e3',
    moduleId: 'p10',
    unitId: 'p10-u2',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Hitung $\\lim_{x \\to 2} \\dfrac{x+1}{x+3}$.',
    choices: [
      { id: 'a', md: '$\\dfrac{3}{5}$' },
      { id: 'b', md: '$\\dfrac{2}{5}$' },
      { id: 'c', md: 'Tidak terdefinisi' },
      { id: 'd', md: '$1$' },
    ],
    answer: 'a',
    explanation:
      'Penyebut pada $x = 2$ adalah $5$ (bukan nol), sehingga substitusi langsung aman: $\\frac{2+1}{2+3} = \\frac{3}{5}$.',
    sourceRef: 'P10 hlm. 4 (Worked Example 3)',
  },
  {
    id: 'p10-u2-e4',
    moduleId: 'p10',
    unitId: 'p10-u2',
    type: 'tf',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Pernyataan: Substitusi langsung aman untuk $\\lim_{x \\to 2} \\dfrac{x+1}{x-2}$.',
    answer: 'false',
    explanation:
      'Salah. Pada $x = 2$ penyebutnya menjadi $0$. Substitusi langsung pada fungsi rasional harus disertai pemeriksaan penyebut; jika penyebut nol, hasil substitusi bukan otomatis nilai limit.',
    sourceRef: 'P10 hlm. 4 (Checkpoint & Jangan Keliru)',
  },
  {
    id: 'p10-u2-e5',
    moduleId: 'p10',
    unitId: 'p10-u2',
    type: 'short',
    difficulty: 'mudah',
    origin: 'source',
    prompt: 'Hitung $\\lim_{x \\to 1} (x^2 + 2x)$.',
    answer: ['3'],
    explanation:
      'Polinom, substitusi langsung: $1^2 + 2(1) = 3$.',
    sourceRef: 'P10 hlm. 4 (Checkpoint Unit 2)',
  },

  // ------------------------------------------------------------------ Unit 3
  {
    id: 'p10-u3-e1',
    moduleId: 'p10',
    unitId: 'p10-u3',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Apa arti hasil substitusi $\\dfrac{0}{0}$ pada perhitungan limit?',
    choices: [
      {
        id: 'a',
        md: 'Bentuk tak tentu — bukan jawaban, tetapi sinyal untuk menyederhanakan atau memakai teknik lain.',
      },
      { id: 'b', md: 'Nilai limitnya adalah $0$.' },
      { id: 'c', md: 'Nilai limitnya $1$.' },
      { id: 'd', md: 'Limitnya tidak ada.' },
    ],
    answer: 'a',
    explanation:
      'Sumber menegaskan $\\frac{0}{0}$ adalah bentuk tak tentu: berbagai fungsi dapat berperilaku berbeda walau substitusi formalnya sama-sama $\\frac{0}{0}$. Jangan berhenti di situ.',
    sourceRef: 'P10 hlm. 5–6 (Penjelasan & Jangan Keliru)',
  },
  {
    id: 'p10-u3-e2',
    moduleId: 'p10',
    unitId: 'p10-u3',
    type: 'short',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Hitung $\\lim_{x \\to 3} \\dfrac{x^2 - 9}{x - 3}$.',
    answer: ['6'],
    explanation:
      'Faktorkan: $x^2 - 9 = (x-3)(x+3)$. Untuk $x \\neq 3$, ekspresinya menjadi $x + 3$, sehingga limitnya $3 + 3 = 6$.',
    sourceRef: 'P10 hlm. 5 (Worked Example 1)',
  },
  {
    id: 'p10-u3-e3',
    moduleId: 'p10',
    unitId: 'p10-u3',
    type: 'short',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Hitung $\\lim_{x \\to 4} \\dfrac{x^2 - 16}{x - 4}$.',
    answer: ['8'],
    explanation:
      'Substitusi memberi $\\frac{0}{0}$. Setelah $x^2 - 16 = (x-4)(x+4)$, limit menjadi $\\lim_{x \\to 4}(x+4) = 8$.',
    sourceRef: 'P10 hlm. 5 (Worked Example 3)',
  },
  {
    id: 'p10-u3-e4',
    moduleId: 'p10',
    unitId: 'p10-u3',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Mengapa pencoretan faktor $x - a$ dibenarkan?',
    choices: [
      {
        id: 'a',
        md: 'Karena pada limit $x \\to a$, nilai $x$ dipilih dekat dengan $a$ tetapi berbeda dari $a$, sehingga $x - a \\neq 0$.',
      },
      { id: 'b', md: 'Karena $\\dfrac{0}{0}$ boleh dianggap $1$.' },
      { id: 'c', md: 'Karena pembagian dengan nol selalu sah dalam aljabar.' },
      { id: 'd', md: 'Karena faktor tersebut tidak memengaruhi nilai fungsi.' },
    ],
    answer: 'a',
    explanation:
      'Sumber: ketika $x \\to a$, $x$ sangat dekat dengan $a$ tetapi berbeda, sehingga faktor $x - a$ tidak nol pada titik-titik yang dipakai untuk mendekati $a$. Ini bukan pernyataan bahwa $\\frac{0}{0}$ diperbolehkan.',
    sourceRef: 'P10 hlm. 5 (Mengapa / Interpretasi & Matematika Utama)',
  },
  {
    id: 'p10-u3-e5',
    moduleId: 'p10',
    unitId: 'p10-u3',
    type: 'mc',
    difficulty: 'mudah',
    origin: 'source',
    prompt: 'Faktorkan $x^2 - 25$.',
    choices: [
      { id: 'a', md: '$(x - 5)(x + 5)$' },
      { id: 'b', md: '$(x - 5)^2$' },
      { id: 'c', md: '$(x + 5)^2$' },
      { id: 'd', md: '$(x - 25)(x + 1)$' },
    ],
    answer: 'a',
    explanation:
      'Selisih kuadrat: $x^2 - a^2 = (x - a)(x + a)$ dengan $a = 5$.',
    sourceRef: 'P10 hlm. 6 (Checkpoint Unit 3)',
  },

  // ------------------------------------------------------------------ Unit 4
  {
    id: 'p10-u4-e1',
    moduleId: 'p10',
    unitId: 'p10-u4',
    type: 'short',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Hitung $\\lim_{x \\to \\infty} \\dfrac{5x + 1}{x^2 + 2}$.',
    answer: ['0'],
    explanation:
      'Derajat pembilang ($1$) lebih kecil daripada derajat penyebut ($2$), sehingga limitnya $0$.',
    sourceRef: 'P10 hlm. 7 (Worked Example 1)',
  },
  {
    id: 'p10-u4-e2',
    moduleId: 'p10',
    unitId: 'p10-u4',
    type: 'short',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Hitung $\\lim_{x \\to \\infty} \\dfrac{3x^2 + 1}{x^2 - 4}$.',
    answer: ['3'],
    explanation:
      'Derajat sama ($2$ dan $2$), sehingga limitnya rasio koefisien utama: $\\dfrac{3}{1} = 3$.',
    sourceRef: 'P10 hlm. 7 (Worked Example 2)',
  },
  {
    id: 'p10-u4-e3',
    moduleId: 'p10',
    unitId: 'p10-u4',
    type: 'mc',
    difficulty: 'sulit',
    origin: 'source',
    prompt:
      'Apa yang terjadi pada $\\lim_{x \\to \\infty} \\dfrac{x^3 + 1}{2x^2 + 5}$?',
    choices: [
      {
        id: 'a',
        md: 'Tidak mendekati bilangan real hingga; rasio dominannya $\\dfrac{x}{2}$.',
      },
      { id: 'b', md: 'Limitnya $0$ karena penyebut berderajat lebih rendah.' },
      { id: 'c', md: 'Limitnya $\\dfrac{1}{2}$.' },
      { id: 'd', md: 'Limitnya $\\infty$ karena koefisien utama $1$.' },
    ],
    answer: 'a',
    explanation:
      'Derajat pembilang ($3$) lebih besar daripada penyebut ($2$), sehingga fungsi tidak menuju bilangan real hingga. Rasio suku pangkat tertinggi $\\dfrac{x^3}{2x^2} = \\dfrac{x}{2}$ menunjukkan besarnya ikut membesar.',
    sourceRef: 'P10 hlm. 7 (Worked Example 3)',
  },
  {
    id: 'p10-u4-e4',
    moduleId: 'p10',
    unitId: 'p10-u4',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Jika derajat pembilang **sama** dengan derajat penyebut, limit di tak hingga menuju:',
    choices: [
      { id: 'a', md: 'rasio koefisien utama' },
      { id: 'b', md: '$0$' },
      { id: 'c', md: '$\\infty$' },
      { id: 'd', md: 'selisih koefisien utama' },
    ],
    answer: 'a',
    explanation:
      'Sumber: derajat lebih kecil → $0$; derajat sama → rasio koefisien utama; derajat pembilang lebih besar → tidak menuju bilangan real hingga.',
    sourceRef: 'P10 hlm. 6 (Matematika Utama)',
  },
  {
    id: 'p10-u4-e5',
    moduleId: 'p10',
    unitId: 'p10-u4',
    type: 'short',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Hitung rasio koefisien utama dari $\\dfrac{7x^2 + 1}{2x^2 - 3}$.',
    answer: ['7/2', '3.5'],
    explanation:
      'Kedua derajat $2$, jadi limitnya rasio koefisien utama: $\\dfrac{7}{2}$.',
    sourceRef: 'P10 hlm. 7 (Checkpoint Unit 4)',
  },

  // ------------------------------------------------------------------ Unit 5
  {
    id: 'p10-u5-e1',
    moduleId: 'p10',
    unitId: 'p10-u5',
    type: 'short',
    difficulty: 'mudah',
    origin: 'source',
    prompt: 'Berapa $\\lim_{x \\to 0} \\dfrac{\\sin x}{x}$?',
    answer: ['1'],
    explanation:
      'Ini limit dasar trigonometri yang diberikan sumber: $\\lim_{x \\to 0}\\frac{\\sin x}{x} = 1$, dengan sudut dalam radian.',
    sourceRef: 'P10 hlm. 8 (Matematika Utama)',
  },
  {
    id: 'p10-u5-e2',
    moduleId: 'p10',
    unitId: 'p10-u5',
    type: 'short',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Hitung $\\lim_{x \\to 0} \\dfrac{7 \\sin x}{2x}$.',
    answer: ['7/2', '3.5'],
    explanation:
      'Gunakan $\\lim \\frac{k\\sin x}{mx} = \\frac{k}{m}$: hasilnya $\\frac{7}{2}$.',
    sourceRef: 'P10 hlm. 8 (Matematika Utama & Checkpoint)',
  },
  {
    id: 'p10-u5-e3',
    moduleId: 'p10',
    unitId: 'p10-u5',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Hitung $\\lim_{x \\to 0} \\dfrac{\\sin x}{5x}$.',
    choices: [
      { id: 'a', md: '$\\dfrac{1}{5}$' },
      { id: 'b', md: '$5$' },
      { id: 'c', md: '$1$' },
      { id: 'd', md: '$0$' },
    ],
    answer: 'a',
    explanation:
      'Keluarkan konstanta: $\\frac{1}{5}\\lim\\frac{\\sin x}{x} = \\frac{1}{5}$.',
    sourceRef: 'P10 hlm. 8 (Worked Example 1)',
  },
  {
    id: 'p10-u5-e4',
    moduleId: 'p10',
    unitId: 'p10-u5',
    type: 'short',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Hitung $\\lim_{x \\to 0} \\dfrac{4 \\sin x}{3x}$.',
    answer: ['4/3'],
    explanation:
      '$\\frac{4}{3}\\lim\\frac{\\sin x}{x} = \\frac{4}{3}$.',
    sourceRef: 'P10 hlm. 8 (Worked Example 3)',
  },
  {
    id: 'p10-u5-e5',
    moduleId: 'p10',
    unitId: 'p10-u5',
    type: 'tf',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Pernyataan: Substitusi $x = 0$ langsung ke $\\dfrac{\\sin x}{x}$ memberi nilai limit $1$.',
    answer: 'false',
    explanation:
      'Salah. Substitusi langsung memberi $\\frac{0}{0}$ — bentuk tak tentu, bukan nilai limit. Nilai $1$ diperoleh dari limit dasar, bukan dari substitusi.',
    sourceRef: 'P10 hlm. 9 (Jangan Keliru)',
  },

  // ------------------------------------------------------------------ Unit 6
  {
    id: 'p10-u6-e1',
    moduleId: 'p10',
    unitId: 'p10-u6',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Tiga syarat kekontinuan fungsi $f$ di $x = a$ adalah:',
    choices: [
      {
        id: 'a',
        md: '$f(a)$ ada; $\\lim_{x \\to a} f(x)$ ada; $\\lim_{x \\to a} f(x) = f(a)$',
      },
      { id: 'b', md: '$f(a)$ ada; $f\'(a)$ ada; $f\'\'(a)$ ada' },
      { id: 'c', md: '$\\lim_{x \\to a^-} f(x)$ ada; $\\lim_{x \\to a^+} f(x)$ ada; $f(a) = 0$' },
      { id: 'd', md: '$f$ terdefinisi di semua bilangan real' },
    ],
    answer: 'a',
    explanation:
      'Ketiganya harus dipenuhi sekaligus: nilai fungsi ada, limit dua sisi ada, dan keduanya sama.',
    sourceRef: 'P10 hlm. 10 (Matematika Utama)',
  },
  {
    id: 'p10-u6-e2',
    moduleId: 'p10',
    unitId: 'p10-u6',
    type: 'tf',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Pernyataan: $f(x) = 3x - 2$ kontinu di $x = 4$ karena $f(4) = 10$ dan $\\lim_{x \\to 4}(3x-2) = 10$.',
    answer: 'true',
    explanation:
      'Benar. Nilai fungsi ada ($10$), limit ada ($10$), dan keduanya sama — ketiga syarat terpenuhi, sehingga fungsi kontinu di $4$.',
    sourceRef: 'P10 hlm. 10 (Worked Example 1)',
  },
  {
    id: 'p10-u6-e3',
    moduleId: 'p10',
    unitId: 'p10-u6',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Jika $f(2) = 5$ tetapi $\\lim_{x \\to 2} f(x) = 4$, apa kesimpulannya?',
    choices: [
      { id: 'a', md: 'Syarat ketiga gagal; fungsi tidak kontinu di $2$.' },
      { id: 'b', md: 'Fungsi kontinu karena nilai fungsi ada.' },
      { id: 'c', md: 'Fungsi kontinu karena limit ada.' },
      { id: 'd', md: 'Limitnya tidak ada.' },
    ],
    answer: 'a',
    explanation:
      'Limit ada ($4$) dan nilai fungsi ada ($5$), tetapi keduanya **tidak sama**. Syarat ketiga gagal, sehingga fungsi tidak kontinu di $2$.',
    sourceRef: 'P10 hlm. 10 (Worked Example 2)',
  },
  {
    id: 'p10-u6-e4',
    moduleId: 'p10',
    unitId: 'p10-u6',
    type: 'mc',
    difficulty: 'sulit',
    origin: 'source',
    prompt:
      'Pada fungsi potongan, limit kiri dan kanan di $x = 2$ sama-sama $3$, tetapi $f(2) = 4$. Apa kesimpulannya?',
    choices: [
      { id: 'a', md: 'Limit ada ($3$), nilai fungsi ada ($4$), tetapi tidak sama → tidak kontinu.' },
      { id: 'b', md: 'Fungsi kontinu karena limit dua sisi ada.' },
      { id: 'c', md: 'Fungsi kontinu karena $f(2)$ terdefinisi.' },
      { id: 'd', md: 'Limit dua sisi tidak ada.' },
    ],
    answer: 'a',
    explanation:
      'Limit dua sisi ada karena kedua sisi sama ($3$). Nilai fungsi juga ada ($4$). Namun $\\lim f(x) \\neq f(2)$, sehingga syarat ketiga gagal dan fungsi tidak kontinu.',
    sourceRef: 'P10 hlm. 11 (Worked Example 3)',
  },
  {
    id: 'p10-u6-e5',
    moduleId: 'p10',
    unitId: 'p10-u6',
    type: 'tf',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Pernyataan: Cukup memeriksa bahwa limit ada untuk menyimpulkan fungsi kontinu.',
    answer: 'false',
    explanation:
      'Salah. Semua tiga syarat harus diperiksa. Limit ada tanpa nilai fungsi yang sama tidak menjamin kekontinuan — dan sebaliknya.',
    sourceRef: 'P10 hlm. 11 (Jangan Keliru)',
  },
]

export default p10
