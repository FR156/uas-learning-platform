import type { Module, Section, Unit } from '../types'

// P05 — Konsep Fungsi dan Sifat Pemetaan
// The source PDF contains only page 1: it was printed while the app was still
// loading, so the app itself rendered "1/1". Nothing beyond this page exists to
// transcribe, and nothing has been invented to fill the gap.

const mappingDiagrams: Section = {
  kind: 'figure',
  title: 'Dua diagram pemetaan: Relasi I dan Relasi II',
  md: 'Kotak diagram memuat dua pemetaan berdampingan, masing-masing dari himpunan $A$ ke himpunan $B$.\n\n**Relasi I** — $A = \\{1, 2, 3\\}$, $B = \\{a, b, c\\}$, dengan panah $1 \\to a$, $2 \\to b$, $3 \\to b$.\n\n**Relasi II** — $A = \\{1, 2, 3\\}$, $B = \\{a, b, c\\}$, dengan panah $1 \\to a$, $2 \\to b$, $2 \\to c$, $3 \\to a$.',
}

const units: Unit[] = [
  {
    id: 'p05-u1',
    number: 1,
    title: 'Kapan Sebuah Relasi Disebut Fungsi?',
    pageFrom: 1,
    pageTo: 1,
    sections: [
      mappingDiagrams,
      {
        kind: 'goal',
        md: 'Setelah unit ini, Anda dapat menentukan apakah suatu relasi dari himpunan $A$ ke himpunan $B$ merupakan fungsi, baik dari pasangan berurutan maupun diagram pemetaan.',
      },
      {
        kind: 'prereq',
        md: 'Ingat bahwa pasangan berurutan $(x, y)$ menunjukkan bahwa elemen pertama $x$ dipasangkan dengan elemen kedua $y$.',
      },
    ],
  },
]

const m: Module = {
  id: 'p05',
  code: 'P05',
  title: 'Konsep Fungsi dan Sifat Pemetaan',
  pageFrom: 1,
  pageTo: 1,
  incomplete:
    'Sumber P05 hanya memuat halaman pertama: berkas PDF dicetak saat aplikasi sumber masih memuat, sehingga aplikasi itu sendiri menampilkan "1/1". Unit selanjutnya dari modul ini tidak tersedia dalam sumber dan tidak digubah di sini.',
  units,
}

export default m
