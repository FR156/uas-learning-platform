import type { Exercise } from '../../types'

// P06 — Fungsi Linear dan Fungsi Kuadrat
// Source contains only page 1 (a graph of y = 2x + 3 and a unit objective), so
// the bank tests only what that page shows.

const p06: Exercise[] = [
  {
    id: 'p06-u1-e1',
    moduleId: 'p06',
    unitId: 'p06-u1',
    type: 'mc',
    difficulty: 'mudah',
    origin: 'source',
    prompt:
      'Grafik pada sumber adalah $y = 2x + 3$. Berapa nilai $y$ ketika $x = 0$?',
    choices: [
      { id: 'a', md: '$3$' },
      { id: 'b', md: '$0$' },
      { id: 'c', md: '$2$' },
      { id: 'd', md: '$-1{,}5$' },
    ],
    answer: 'a',
    explanation:
      'Substitusi $x = 0$ memberi $y = 2(0) + 3 = 3$. Grafik pada sumber menandai titik $(0, 3)$ tepat di sumbu $y$ — inilah titik potong terhadap sumbu $y$.',
    sourceRef: 'P06 hlm. 1 (grafik $y = 2x + 3$, titik $(0,3)$)',
  },
  {
    id: 'p06-u1-e2',
    moduleId: 'p06',
    unitId: 'p06-u1',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Titik mana pada grafik sumber yang merupakan titik potong terhadap sumbu $x$?',
    choices: [
      { id: 'a', md: '$(-1{,}5;\\ 0)$' },
      { id: 'b', md: '$(0;\\ 3)$' },
      { id: 'c', md: '$(1;\\ 5)$' },
      { id: 'd', md: '$(-1;\\ 1)$' },
    ],
    answer: 'a',
    explanation:
      'Titik potong sumbu $x$ terjadi saat $y = 0$. Pada grafik sumber, titik itu adalah $(-1{,}5;\\ 0)$. Periksa: $2(-1{,}5) + 3 = -3 + 3 = 0$ ✓.',
    sourceRef: 'P06 hlm. 1 (grafik, titik $(-1{,}5;0)$)',
  },
  {
    id: 'p06-u1-e3',
    moduleId: 'p06',
    unitId: 'p06-u1',
    type: 'short',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Dengan rumus grafik sumber $y = 2x + 3$, hitung $y$ ketika $x = 1$.',
    answer: ['5', 'y=5'],
    explanation:
      '$y = 2(1) + 3 = 5$. Grafik sumber memang menandai titik $(1;\\ 5)$.',
    sourceRef: 'P06 hlm. 1 (grafik, titik $(1;5)$)',
  },
  {
    id: 'p06-u1-e4',
    moduleId: 'p06',
    unitId: 'p06-u1',
    type: 'tf',
    difficulty: 'mudah',
    origin: 'source',
    prompt:
      'Pernyataan: Menurut Tujuan Unit P06, salah satu kemampuan yang dituju adalah menentukan titik potong terhadap kedua sumbu.',
    answer: 'true',
    explanation:
      'Benar. Tujuan Unit menyebut: membaca bentuk fungsi linear, menghitung nilai fungsi, menentukan titik potong terhadap kedua sumbu, dan menggambar garis dari titik-titik yang diketahui.',
    sourceRef: 'P06 hlm. 1 (Tujuan Unit)',
  },
  {
    id: 'p06-u1-e5',
    moduleId: 'p06',
    unitId: 'p06-u1',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'application',
    prompt:
      'Pada $y = 2x + 3$, berapa perubahan nilai $y$ setiap kali $x$ bertambah $1$?',
    choices: [
      { id: 'a', md: '$y$ bertambah $2$' },
      { id: 'b', md: '$y$ bertambah $3$' },
      { id: 'c', md: '$y$ bertambah $1$' },
      { id: 'd', md: '$y$ tidak berubah' },
    ],
    answer: 'a',
    explanation:
      'Koefisien $x$ adalah $2$, sehingga setiap penambahan $1$ pada $x$ menambah $2$ pada $y$. Ini terlihat pada titik-titik grafik sumber: dari $(0,3)$ ke $(1,5)$, $y$ naik $2$.',
    sourceRef: 'P06 hlm. 1 (grafik & bentuk $y = mx + c$)',
  },
]

export default p06
