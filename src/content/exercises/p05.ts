import type { Exercise } from '../../types'

// P05 — Konsep Fungsi dan Sifat Pemetaan
// The source contains only page 1, so the bank is deliberately small: it can
// only test what that single page actually states.

const p05: Exercise[] = [
  {
    id: 'p05-u1-e1',
    moduleId: 'p05',
    unitId: 'p05-u1',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Pada diagram pemetaan **Relasi II** di sumber, panah yang ada adalah $1 \\to a$, $2 \\to b$, $2 \\to c$, dan $3 \\to a$. Mengapa relasi ini bermasalah sebagai fungsi?',
    choices: [
      {
        id: 'a',
        md: 'Karena satu anggota domain, yaitu $2$, dipasangkan dengan dua anggota kodomain ($b$ dan $c$).',
      },
      { id: 'b', md: 'Karena ada anggota kodomain yang tidak dipasangkan.' },
      { id: 'c', md: 'Karena $A$ dan $B$ memiliki jumlah anggota yang sama.' },
      { id: 'd', md: 'Karena panahnya mengarah dari $A$ ke $B$.' },
    ],
    answer: 'a',
    explanation:
      'Ciri fungsi yang diuji unit ini adalah ketegasan pemasangan: setiap anggota domain dipasangkan dengan tepat satu anggota kodomain. Pada Relasi II, anggota $2$ memiliki dua panah, sehingga pemetasannya tidak tunggal. (Anggota kodomain yang tidak terpakai, seperti pada Relasi I dengan $c$, tidak merusak sifat fungsi.)',
    sourceRef: 'P05 hlm. 1 (diagram Relasi I & II)',
  },
  {
    id: 'p05-u1-e2',
    moduleId: 'p05',
    unitId: 'p05-u1',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Pada **Relasi I**, pemetaannya adalah $1 \\to a$, $2 \\to b$, $3 \\to b$. Apa yang dapat dikatakan?',
    choices: [
      {
        id: 'a',
        md: 'Setiap anggota $A$ terpasang tepat satu kali, sehingga relasi ini memenuhi syarat fungsi.',
      },
      { id: 'b', md: 'Relasi ini bukan fungsi karena $a$ tidak dipasangkan.' },
      { id: 'c', md: 'Relasi ini bukan fungsi karena $b$ menerima dua panah.' },
      { id: 'd', md: 'Relasi ini bukan fungsi karena $A$ dan $B$ berukuran sama.' },
    ],
    answer: 'a',
    explanation:
      'Setiap anggota domain ($1, 2, 3$) muncul tepat satu kali sebagai titik awal panah. Bahwa $b$ menerima dua panah tidak melanggar sifat fungsi; yang dilarang adalah satu anggota domain memiliki dua pasangan.',
    sourceRef: 'P05 hlm. 1 (diagram Relasi I)',
  },
  {
    id: 'p05-u1-e3',
    moduleId: 'p05',
    unitId: 'p05-u1',
    type: 'tf',
    difficulty: 'mudah',
    origin: 'source',
    prompt:
      'Pernyataan: Menurut Prasyarat Singkat unit ini, pasangan berurutan $(x, y)$ menunjukkan bahwa elemen pertama $x$ dipasangkan dengan elemen kedua $y$.',
    answer: 'true',
    explanation:
      'Benar. Sumber menyatakan tepat demikian: pada $(x, y)$, elemen pertama $x$ dipasangkan dengan elemen kedua $y$. Ini dasar untuk membaca relasi dari himpunan pasangan berurutan.',
    sourceRef: 'P05 hlm. 1 (Prasyarat Singkat)',
  },
  {
    id: 'p05-u1-e4',
    moduleId: 'p05',
    unitId: 'p05-u1',
    type: 'mc',
    difficulty: 'mudah',
    origin: 'source',
    prompt: 'Apa tujuan unit pada modul P05?',
    choices: [
      {
        id: 'a',
        md: 'Menentukan apakah suatu relasi dari himpunan $A$ ke $B$ merupakan fungsi, baik dari pasangan berurutan maupun diagram pemetaan.',
      },
      { id: 'b', md: 'Menghitung nilai fungsi kuadrat pada titik tertentu.' },
      { id: 'c', md: 'Menggambar grafik fungsi linear dari dua titik.' },
      { id: 'd', md: 'Membuktikan sifat komposisi dua fungsi.' },
    ],
    answer: 'a',
    explanation:
      'Itu bunyi Tujuan Unit pada halaman satu-satunya yang tersedia di sumber P05.',
    sourceRef: 'P05 hlm. 1 (Tujuan Unit)',
  },
]

export default p05
