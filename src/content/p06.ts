import type { Module, Section, Unit } from '../types'

// P06 — Fungsi Linear dan Fungsi Kuadrat
// Source PDF contains only page 1 (printed before the app finished loading; the
// app itself shows "1/1"). Only this page is transcribed.

const graphFigure: Section = {
  kind: 'figure',
  title: 'Contoh grafik $y = 2x + 3$',
  md: 'Grafik pada sistem koordinat Kartesius. Sumbu $x$ bertanda dari $-3$ sampai $4$; sumbu $y$ bertanda dari $-4$ sampai $8$.\n\nSebuah garis lurus naik dari kiri ke bawah menuju kanan atas, memotong sumbu $y$ di $3$ dan sumbu $x$ di $-1{,}5$.\n\nTitik yang ditandai: $(-1{,}5;\\ 0)$, $(-1;\\ 1)$, $(0;\\ 3)$, dan $(1;\\ 5)$.',
}

const units: Unit[] = [
  {
    id: 'p06-u1',
    number: 1,
    title: 'Fungsi Linear dan Cara Membaca Grafik',
    pageFrom: 1,
    pageTo: 1,
    sections: [
      graphFigure,
      {
        kind: 'goal',
        md: 'Anda dapat membaca bentuk fungsi linear, menghitung nilai fungsi, menentukan titik potong terhadap kedua sumbu, dan menggambar garis dari titik-titik yang diketahui.',
      },
    ],
  },
]

const m: Module = {
  id: 'p06',
  code: 'P06',
  title: 'Fungsi Linear dan Fungsi Kuadrat',
  pageFrom: 1,
  pageTo: 1,
  incomplete:
    'Sumber P06 hanya memuat halaman pertama: berkas PDF dicetak saat aplikasi sumber masih memuat, sehingga aplikasi itu sendiri menampilkan "1/1". Unit selanjutnya dari modul ini tidak tersedia dalam sumber dan tidak digubah di sini.',
  units,
}

export default m
