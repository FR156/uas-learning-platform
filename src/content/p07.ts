import type { Module, Unit } from '../types'

const units: Unit[] = [
  {
    id: 'p07-u1',
    number: 1,
    title: 'Matriks, Ordo, dan Unsur',
    pageFrom: 1,
    pageTo: 3,
    sections: [
      {
        kind: 'figure',
        title: 'Anatomi matriks 3 × 3 dan posisi a₂₃',
        md: 'Diagram matriks $3 \\times 3$: baris ke-2 dan kolom ke-3 ditandai, dan sel pada perpotongannya (baris 2, kolom 3) disorot.\n\n$$\\begin{pmatrix} 4 & -1 & 2 \\\\ 0 & 3 & 7 \\\\ 5 & 6 & 8 \\end{pmatrix}$$\n\n$a_{23}$ berarti unsur pada baris 2, kolom 3; pada contoh nilainya 7.',
      },
      {
        kind: 'goal',
        md: 'Anda dapat membaca suatu matriks sebagai susunan baris-kolom, menentukan ordonya, menghitung banyak unsur, dan menemukan unsur $a_{ij}$ pada posisi yang tepat.',
      },
      {
        kind: 'prereq',
        md: 'Cukup pahami arti baris (mendatar), kolom (tegak), dan indeks sebagai penunjuk posisi.',
      },
      {
        kind: 'concept',
        title: 'Penjelasan Konsep Lengkap',
        md: 'Matriks adalah susunan bilangan yang diatur dalam baris dan kolom. Contoh:\n\n$$A = \\begin{pmatrix} 2 & -3 & 1 \\\\ 0 & 4 & 5 \\end{pmatrix}$$\n\nMatriks $A$ memiliki 2 baris dan 3 kolom, sehingga ordonya $2 \\times 3$. Secara umum, matriks berordo $m \\times n$ mempunyai $m$ baris dan $n$ kolom serta memuat $mn$ unsur.',
      },
      {
        kind: 'main',
        md: 'Unsur pada baris ke-$i$, kolom ke-$j$ ditulis $a_{ij}$. Indeks pertama selalu menunjuk **baris**, indeks kedua menunjuk **kolom**.',
      },
      {
        kind: 'why',
        title: 'Mengapa / Interpretasi',
        md: 'Notasi $a_{ij}$ berfungsi seperti alamat: $i$ menentukan baris lalu $j$ menentukan kolom. Karena itu $a_{23}$ dan $a_{32}$ biasanya merupakan dua unsur berbeda.',
      },
      {
        kind: 'example',
        title: 'Worked Example 1',
        md: 'Untuk $B = \\begin{pmatrix} 4 & 1 \\\\ -2 & 0 \\\\ 5 & 7 \\end{pmatrix}$, banyak baris 3 dan kolom 2, jadi ordo $B$ adalah $3 \\times 2$ dan jumlah unsurnya $3 \\cdot 2 = 6$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 2',
        md: 'Jika $C = \\begin{pmatrix} 3 & 7 & 1 \\\\ -2 & 4 & 5 \\end{pmatrix}$, maka $c_{12} = 7$ karena 7 berada pada baris 1 kolom 2, sedangkan $c_{23} = 5$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 3',
        md: 'Pada matriks $D = \\begin{pmatrix} 5 & -1 & 2 \\\\ 0 & 3 & 7 \\\\ 4 & 6 & 8 \\end{pmatrix}$, unsur 7 berada pada posisi $(2, 3)$, sehingga $d_{23} = 7$.',
      },
      {
        kind: 'mistake',
        md: 'Ordo $2 \\times 3$ bukan sama dengan $3 \\times 2$, walaupun keduanya memiliki enam unsur. Demikian pula $a_{23}$ berarti baris 2 kolom 3, bukan sebaliknya.',
      },
      {
        kind: 'checkpoint',
        md: '1. Berapa jumlah unsur matriks berordo $4 \\times 3$?\n2. Jika $e_{31} = -4$, pada baris dan kolom mana nilai itu berada?',
      },
      {
        kind: 'summary',
        md: 'Ordo = banyak baris $\\times$ banyak kolom. Banyak unsur = hasil kali keduanya. $a_{ij}$ menunjuk baris $i$, kolom $j$.',
      },
    ],
  },
  {
    id: 'p07-u2',
    number: 2,
    title: 'Mengenali Jenis-Jenis Matriks',
    pageFrom: 3,
    pageTo: 4,
    sections: [
      {
        kind: 'goal',
        md: 'Anda dapat mengenali matriks baris, kolom, nol, bujur sangkar, diagonal, skalar, identitas, dan simetris dari ciri yang diberikan sumber.',
      },
      {
        kind: 'prereq',
        md: 'Gunakan kembali konsep ordo dan posisi unsur dari Unit 1.',
      },
      {
        kind: 'concept',
        title: 'Penjelasan Konsep Lengkap',
        md: '- **Matriks baris:** tepat satu baris.\n- **Matriks kolom:** tepat satu kolom.\n- **Matriks nol:** semua unsur 0.\n- **Matriks bujur sangkar:** jumlah baris = jumlah kolom.\n- **Matriks diagonal:** bujur sangkar dan semua unsur di luar diagonal utama bernilai 0.\n- **Matriks skalar:** matriks diagonal dengan semua unsur diagonal utama sama.\n- **Matriks identitas:** matriks skalar dengan diagonal utama semuanya 1.\n- **Matriks simetris:** memenuhi $A^T = A$.',
      },
      {
        kind: 'why',
        title: 'Mengapa / Interpretasi',
        md: 'Beberapa jenis memiliki hubungan berlapis. Matriks identitas juga merupakan matriks skalar, diagonal, dan bujur sangkar. Karena itu ketika pertanyaan meminta jenis yang paling khusus, pilih ciri yang paling kuat yang benar.',
      },
      {
        kind: 'example',
        title: 'Worked Example 1',
        md: '$$\\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix}$$\n\nadalah matriks skalar karena diagonal utama sama-sama 2 dan unsur di luar diagonal nol. Ia bukan identitas karena diagonalnya bukan 1.',
      },
      {
        kind: 'example',
        title: 'Worked Example 2',
        md: '$$I_3 = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}$$\n\nadalah matriks identitas orde 3.',
      },
      {
        kind: 'example',
        title: 'Worked Example 3',
        md: '$$S = \\begin{pmatrix} 1 & 2 \\\\ 2 & 3 \\end{pmatrix}$$\n\nsimetris karena menukar baris dan kolom tidak mengubah matriks:\n\n$$S^T = S.$$',
      },
      {
        kind: 'note',
        title: 'Batas P07',
        md: 'Singular dan non-singular ditentukan melalui determinan. Determinan dan invers baru dipelajari pada P08, sehingga keduanya tidak digunakan sebagai konstruk pada P07.',
      },
      {
        kind: 'mistake',
        md: 'Diagonal tidak otomatis identitas, dan bujur sangkar tidak otomatis simetris.',
      },
      {
        kind: 'checkpoint',
        md: '1. Apakah $\\begin{pmatrix} 4 & 0 \\\\ 0 & 4 \\end{pmatrix}$ identitas?\n2. Apa syarat sederhana matriks simetris menurut sumber?',
      },
      {
        kind: 'summary',
        md: 'Kenali jenis matriks dari jumlah baris/kolom dan pola unsurnya. Identitas $\\subset$ skalar $\\subset$ diagonal $\\subset$ bujur sangkar.',
      },
    ],
  },
  {
    id: 'p07-u3',
    number: 3,
    title: 'Transpose Matriks',
    pageFrom: 5,
    pageTo: 7,
    sections: [
      {
        kind: 'figure',
        title: 'Transpose: baris menjadi kolom',
        md: '$A$ berordo $2 \\times 3$:\n\n$$A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix}$$\n\n$A^T$ berordo $3 \\times 2$:\n\n$$A^T = \\begin{pmatrix} 1 & 4 \\\\ 2 & 5 \\\\ 3 & 6 \\end{pmatrix}$$\n\nPanah berlabel $A^T$ menghubungkan kedua matriks: baris pertama $A$ menjadi kolom pertama $A^T$, baris kedua $A$ menjadi kolom kedua $A^T$. Unsur pada posisi $(i, j)$ berpindah ke posisi $(j, i)$.',
      },
      {
        kind: 'goal',
        md: 'Anda dapat membentuk transpose, menentukan ordonya, dan melacak perpindahan posisi unsur.',
      },
      {
        kind: 'prereq',
        md: 'Pastikan Anda dapat membaca baris, kolom, ordo, dan notasi $a_{ij}$.',
      },
      {
        kind: 'concept',
        title: 'Penjelasan Konsep Lengkap',
        md: 'Transpose matriks $A$, ditulis $A^T$, diperoleh dengan menukar setiap baris menjadi kolom. Jika $A$ berordo $m \\times n$, maka $A^T$ berordo $n \\times m$.',
      },
      {
        kind: 'main',
        md: 'Unsur pada posisi $(i, j)$ berpindah ke $(j, i)$. Dalam notasi unsur: unsur $a_{ij}$ pada $A$ menjadi unsur pada baris $j$, kolom $i$ di $A^T$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 1',
        md: 'Jika $A = \\begin{pmatrix} 8 & 2 \\\\ 9 & -8 \\\\ 1 & 3 \\end{pmatrix}$, maka $A$ berordo $3 \\times 2$ dan\n\n$$A^T = \\begin{pmatrix} 8 & 9 & 1 \\\\ 2 & -8 & 3 \\end{pmatrix},$$\n\nyang berordo $2 \\times 3$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 2',
        md: 'Untuk $B = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix},$\n\n$$B^T = \\begin{pmatrix} 1 & 4 \\\\ 2 & 5 \\\\ 3 & 6 \\end{pmatrix}.$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 3',
        md: 'Jika suatu unsur berada di posisi $a_{23}$, setelah transpose posisinya menjadi $(3, 2)$. Nilai unsurnya tidak berubah; hanya posisinya yang bertukar.',
      },
      {
        kind: 'note',
        title: 'Verifikasi Tambahan dari Latihan Sumber',
        md: 'Melakukan transpose dua kali mengembalikan matriks semula: $(A^T)^T = A$. Pertama baris menjadi kolom; transpose kedua menukar kembali kolom itu menjadi baris semula.',
      },
      {
        kind: 'mistake',
        md: 'Transpose bukan operasi mengubah tanda atau mengubah nilai. Yang berubah hanya posisi baris dan kolom.',
      },
      {
        kind: 'checkpoint',
        md: '1. Jika $A$ berordo $4 \\times 2$, berapa ordo $A^T$?\n2. Ke posisi mana unsur $(1, 3)$ berpindah?',
      },
      {
        kind: 'summary',
        md: 'Transpose menukar baris $\\leftrightarrow$ kolom: $m \\times n \\rightarrow n \\times m$ dan $(i, j) \\rightarrow (j, i)$.',
      },
    ],
  },
  {
    id: 'p07-u4',
    number: 4,
    title: 'Kesamaan, Penjumlahan, dan Pengurangan',
    pageFrom: 7,
    pageTo: 8,
    sections: [
      {
        kind: 'goal',
        md: 'Anda dapat memeriksa kesamaan dua matriks dan melakukan penjumlahan/pengurangan dengan syarat ukuran yang benar.',
      },
      {
        kind: 'prereq',
        md: 'Gunakan konsep ordo dan posisi unsur bersesuaian.',
      },
      {
        kind: 'concept',
        title: 'Penjelasan Konsep Lengkap',
        md: 'Dua matriks $A$ dan $B$ sama jika ordonya sama dan semua unsur pada posisi yang bersesuaian sama. Secara ringkas:\n\n$$A = B \\iff \\text{ordo sama dan } a_{ij} = b_{ij} \\text{ untuk semua } i, j.$$\n\nPenjumlahan dan pengurangan matriks juga hanya terdefinisi jika ordonya sama. Operasi dilakukan unsur demi unsur pada posisi yang sama.',
      },
      {
        kind: 'example',
        title: 'Worked Example 1',
        md: 'Jika $A = \\begin{pmatrix} 2 & 0 \\\\ 1 & 4 \\end{pmatrix}$ dan $B = \\begin{pmatrix} -1 & 5 \\\\ 2 & 3 \\end{pmatrix}$, maka\n\n$$A + B = \\begin{pmatrix} 1 & 5 \\\\ 3 & 7 \\end{pmatrix}, \\quad A - B = \\begin{pmatrix} 3 & -5 \\\\ -1 & 1 \\end{pmatrix}.$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 2',
        md: '$$\\begin{pmatrix} x & 2 \\\\ 3 & y \\end{pmatrix} = \\begin{pmatrix} 5 & 2 \\\\ 3 & -1 \\end{pmatrix} \\text{ berarti } x = 5 \\text{ dan } y = -1, \\text{ karena unsur bersesuaian harus sama.}$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 3',
        md: 'Matriks berordo $2 \\times 3$ dan $3 \\times 2$ sama-sama memiliki enam unsur, tetapi tidak dapat dijumlahkan karena posisi baris-kolomnya tidak bersesuaian.',
      },
      {
        kind: 'mistake',
        md: 'Syarat penjumlahan/pengurangan adalah **ordo sama**, bukan sekadar jumlah unsur sama.',
      },
      {
        kind: 'checkpoint',
        md: '1. Dapatkah matriks $3 \\times 1$ dijumlahkan dengan $1 \\times 3$?\n2. Jika $A = B$, apa dua hal yang harus benar?',
      },
      {
        kind: 'summary',
        md: 'Kesamaan dan operasi $A \\pm B$ memerlukan struktur posisi yang sama; pada penjumlahan/pengurangan, gabungkan unsur yang bersesuaian.',
      },
    ],
  },
  {
    id: 'p07-u5',
    number: 5,
    title: 'Perkalian Skalar dengan Matriks',
    pageFrom: 8,
    pageTo: 10,
    sections: [
      {
        kind: 'goal',
        md: 'Anda dapat mengalikan matriks dengan satu bilangan (skalar) dan menggabungkannya dengan operasi matriks lain yang sesuai.',
      },
      {
        kind: 'prereq',
        md: 'Mampu mengalikan bilangan bertanda dan melakukan penjumlahan/pengurangan matriks seordo.',
      },
      {
        kind: 'concept',
        title: 'Penjelasan Konsep Lengkap',
        md: 'Skalar adalah satu bilangan. Jika $c$ skalar dan $A = [a_{ij}]$, maka $cA$ diperoleh dengan mengalikan **setiap** unsur $A$ oleh $c$:\n\n$$cA = [ca_{ij}].$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 1',
        md: 'Jika $A = \\begin{pmatrix} -3 & 0 \\\\ 1 & -7 \\end{pmatrix}$, maka\n\n$$2A = \\begin{pmatrix} -6 & 0 \\\\ 2 & -14 \\end{pmatrix}.$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 2',
        md: 'Untuk $A = \\begin{pmatrix} 2 & -1 \\\\ 3 & 4 \\end{pmatrix},$\n\n$$-A = \\begin{pmatrix} -2 & 1 \\\\ -3 & -4 \\end{pmatrix}.$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 3',
        md: 'Jika $A = \\begin{pmatrix} 1 & 2 \\\\ 0 & -1 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 3 & 0 \\\\ 2 & 4 \\end{pmatrix}$, maka\n\n$$2A + B = \\begin{pmatrix} 2 & 4 \\\\ 0 & -2 \\end{pmatrix} + \\begin{pmatrix} 3 & 0 \\\\ 2 & 4 \\end{pmatrix} = \\begin{pmatrix} 5 & 4 \\\\ 2 & 2 \\end{pmatrix}.$$',
      },
      {
        kind: 'why',
        title: 'Mengapa / Interpretasi',
        md: 'Perkalian skalar tidak mengubah ordo matriks. Karena itu $cA$ tetap mempunyai ukuran yang sama dengan $A$; namun untuk menjumlahkan $cA + B$, $B$ tetap harus berordo sama.',
      },
      {
        kind: 'mistake',
        md: 'Skalar harus dikalikan ke semua unsur, bukan hanya diagonal, satu baris, atau satu kolom.',
      },
      {
        kind: 'checkpoint',
        md: '1. Apa ordo $-4A$ jika $A$ berordo $2 \\times 5$?\n2. Berapa $0A$?',
      },
      {
        kind: 'summary',
        md: 'Dalam $cA$, semua unsur dikalikan $c$ dan ordo tidak berubah.',
      },
    ],
  },
  {
    id: 'p07-u6',
    number: 6,
    title: 'Perkalian Dua Matriks dan Sifat Operasinya',
    pageFrom: 10,
    pageTo: 12,
    sections: [
      {
        kind: 'figure',
        title: 'Perkalian matriks: baris A × kolom B',
        md: 'Perkalian matriks: baris $A$ $\\times$ kolom $B$\n\n$$A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}, \\quad B = \\begin{pmatrix} 2 & 0 \\\\ 1 & 5 \\end{pmatrix}, \\quad AB = \\begin{pmatrix} 4 & 10 \\\\ 10 & 20 \\end{pmatrix}$$\n\nPanah dari baris pertama $A$ dan kolom pertama $B$ menunjuk ke elemen $(1,1)$ hasil. Elemen $(1,1)$: $1 \\cdot 2 + 2 \\cdot 1 = 4$. Syarat struktur: kolom $A$ = baris $B$.',
      },
      {
        kind: 'goal',
        md: 'Anda dapat memeriksa apakah perkalian matriks terdefinisi, menentukan ordo hasil, menghitung hasil dengan aturan baris-kolom, dan menjelaskan mengapa urutan perkalian penting.',
      },
      {
        kind: 'prereq',
        md: 'Anda harus dapat membaca ordo serta melakukan penjumlahan dan perkalian bilangan.',
      },
      {
        kind: 'concept',
        title: 'Langkah 1 — Periksa Struktur Sebelum Menghitung',
        md: 'Jika $A$ berordo $m \\times n$ dan $B$ berordo $n \\times r$, maka $AB$ terdefinisi dan berordo $m \\times r$:\n\n$$A_{m \\times n} B_{n \\times r} \\longrightarrow (AB)_{m \\times r}.$$\n\nAngka "di dalam" harus sama: banyak kolom $A$ = banyak baris $B$. Angka "di luar" menjadi ukuran hasil.',
      },
      {
        kind: 'concept',
        title: 'Langkah 2 — Hitung dengan Baris × Kolom',
        md: 'Setiap unsur hasil diperoleh dari hasil kali titik satu baris pada matriks pertama dengan satu kolom pada matriks kedua.',
      },
      {
        kind: 'example',
        title: 'Worked Example 1',
        md: 'Untuk $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 2 & 0 \\\\ 1 & 5 \\end{pmatrix}$,\n\n$$AB = \\begin{pmatrix} 1 \\cdot 2 + 2 \\cdot 1 & 1 \\cdot 0 + 2 \\cdot 5 \\\\ 3 \\cdot 2 + 4 \\cdot 1 & 3 \\cdot 0 + 4 \\cdot 5 \\end{pmatrix} = \\begin{pmatrix} 4 & 10 \\\\ 10 & 20 \\end{pmatrix}.$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 2',
        md: 'Jika $A$ berordo $2 \\times 3$ dan $B$ berordo $3 \\times 4$, maka $AB$ terdefinisi dan berordo $2 \\times 4$. Sebaliknya $BA$ tidak terdefinisi karena untuk $(3 \\times 4)(2 \\times 3)$, angka dalamnya 4 dan 2 tidak sama.',
      },
      {
        kind: 'concept',
        title: 'Sifat Operasi yang Perlu Diingat',
        md: '- $A + B = B + A$, jika ordo sesuai.\n- $A + (B + C) = (A + B) + C$.\n- $A(BC) = (AB)C$, jika semua perkalian terdefinisi.\n- $A(B + C) = AB + AC$, jika semua operasi terdefinisi.\n- $AB = BA$ tidak berlaku secara umum.',
      },
      {
        kind: 'example',
        title: 'Worked Example 3 — Urutan Penting',
        md: 'Ambil $A = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 1 & 0 \\\\ 1 & 1 \\end{pmatrix}$. Diperoleh\n\n$$AB = \\begin{pmatrix} 2 & 1 \\\\ 1 & 1 \\end{pmatrix}, \\quad BA = \\begin{pmatrix} 1 & 1 \\\\ 1 & 2 \\end{pmatrix}.$$\n\nKeduanya terdefinisi tetapi tidak sama. Jadi perkalian matriks tidak komutatif secara umum.',
      },
      {
        kind: 'mistake',
        md: 'Jangan gunakan aturan penjumlahan untuk perkalian. Periksa ukuran dahulu, lalu gunakan baris × kolom. Jika $AB$ terdefinisi, belum tentu $BA$ terdefinisi; jika keduanya terdefinisi, belum tentu hasilnya sama.',
      },
      {
        kind: 'checkpoint',
        md: '1. Jika $A$ berordo $4 \\times 2$ dan $B$ berordo $2 \\times 5$, berapa ordo $AB$?\n2. Apakah pernyataan $AB = BA$ boleh dipakai sebagai aturan umum?',
      },
      {
        kind: 'summary',
        md: 'Perkalian matriks ditentukan oleh kompatibilitas kolom–baris dan dihitung baris × kolom. Urutan perkalian merupakan bagian dari makna operasi.',
      },
    ],
  },
  {
    id: 'p07-u7',
    number: 7,
    title: 'Perpangkatan Matriks Bujur Sangkar',
    pageFrom: 12,
    pageTo: 13,
    sections: [
      {
        kind: 'goal',
        md: 'Anda dapat menjelaskan arti $A^2$, menghitung pangkat sederhana matriks bujur sangkar, dan membedakannya dari kuadrat unsur per unsur.',
      },
      {
        kind: 'prereq',
        md: 'Anda harus menguasai perkalian dua matriks dari Unit 6 dan mengenali matriks bujur sangkar dari Unit 2.',
      },
      {
        kind: 'concept',
        title: 'Penjelasan Konsep Lengkap',
        md: 'Dalam scope P07, perpangkatan matriks digunakan untuk matriks bujur sangkar. Pangkat menyatakan perkalian matriks berulang:\n\n$$A^2 = A \\cdot A, \\qquad A^3 = A \\cdot A \\cdot A.$$\n\nMatriks bujur sangkar diperlukan karena $A$ harus dapat dikalikan dengan dirinya sendiri dengan ordo hasil yang tetap kompatibel untuk perkalian berikutnya.',
      },
      {
        kind: 'example',
        title: 'Worked Example 1',
        md: 'Jika $A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix}$, maka\n\n$$A^2 = \\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix} \\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix} = \\begin{pmatrix} 4 & 5 \\\\ 0 & 9 \\end{pmatrix}.$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 2',
        md: 'Untuk $B = \\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix},$\n\n$$B^2 = \\begin{pmatrix} 1 & 4 \\\\ 0 & 1 \\end{pmatrix}.$$',
      },
      {
        kind: 'diagnosis',
        title: 'Worked Example 3 — Diagnosis',
        md: 'Jika $C = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$, hasil $\\begin{pmatrix} 1 & 4 \\\\ 9 & 16 \\end{pmatrix}$ adalah kuadrat unsur per unsur, **bukan** $C^2$. Yang benar:\n\n$$C^2 = C \\cdot C = \\begin{pmatrix} 7 & 10 \\\\ 15 & 22 \\end{pmatrix}.$$',
      },
      {
        kind: 'mistake',
        md: 'Notasi pangkat pada matriks mengikuti perkalian matriks, bukan operasi unsur-per-unsur. Matriks $2 \\times 3$ tidak dapat membentuk $A^2 = A \\cdot A$ karena ukuran $(2 \\times 3)(2 \\times 3)$ tidak kompatibel.',
      },
      {
        kind: 'checkpoint',
        md: '1. Apa arti $A^3$?\n2. Mengapa matriks $3 \\times 2$ tidak dapat dikuadratkan dengan definisi P07?',
      },
      {
        kind: 'summary',
        md: 'Untuk matriks bujur sangkar, pangkat adalah perkalian berulang: $A^2 = A \\cdot A$, bukan kuadrat setiap unsur.',
      },
    ],
  },
]

const m: Module = {
  id: 'p07',
  code: 'P07',
  title: 'Matriks dan Operasi Matriks',
  pageFrom: 1,
  pageTo: 14,
  units,
}

export default m
