import type { Module, Unit } from '../types'

// P08 — Determinan dan Invers Matriks
// Prose from the PDF text layer; every matrix entry and formula verified against
// the rendered pages. Matrix row breaks use \\ inside pmatrix environments.

const units: Unit[] = [
  {
    id: 'p08-u1',
    number: 1,
    title: 'Determinan 2×2 dan Peran Determinan',
    pageFrom: 1,
    pageTo: 3,
    sections: [
      {
        kind: 'figure',
        title: 'Determinan $2 \\times 2$: diagonal utama dikurangi diagonal silang',
        md: '$$A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} \\qquad \\det(A) = ad - bc$$\n\ngaris penuh: $ad$ (diagonal utama). garis putus: $bc$ (diagonal silang).',
      },
      {
        kind: 'goal',
        md: 'Anda dapat menjelaskan kapan determinan didefinisikan, menghitung determinan matriks $2 \\times 2$, dan menghubungkan nilai determinan dengan kemungkinan adanya invers.',
      },
      {
        kind: 'prereq',
        md: 'Ingat kembali bahwa matriks bujur sangkar mempunyai jumlah baris dan kolom yang sama. Operasi bilangan bulat dan tanda negatif harus dikerjakan dengan teliti.',
      },
      {
        kind: 'concept',
        title: 'Penjelasan Konsep Lengkap',
        md: 'Determinan adalah satu bilangan yang diperoleh dari sebuah matriks bujur sangkar. Pada P08, determinan dipakai untuk menghitung karakteristik matriks dan sebagai gerbang untuk menentukan apakah matriks dapat dibalik.\n\nMatriks nonbujur sangkar, misalnya berordo $2 \\times 3$, tidak mempunyai determinan dalam ruang lingkup ini. Matriks $2 \\times 2$, $3 \\times 3$, dan $4 \\times 4$ adalah bujur sangkar sehingga determinannya dapat dibicarakan.',
      },
      {
        kind: 'main',
        md: 'Untuk $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$,\n\n$$\\det(A) = ad - bc.$$\n\nUrutannya adalah hasil kali diagonal utama dikurangi hasil kali diagonal silang. Hubungan penting yang akan dipakai kemudian adalah\n\n$$A \\text{ mempunyai invers} \\iff \\det(A) \\neq 0.$$',
      },
      {
        kind: 'why',
        md: 'Nilai $\\det(A) = 0$ menandakan bahwa matriks kehilangan kemampuan untuk mempunyai kebalikan. Pada tahap ini cukup gunakan kriteria tersebut; pembuktian teoretisnya bukan target P08.',
      },
      {
        kind: 'example',
        title: 'Worked Example 1',
        md: 'Untuk $A = \\begin{pmatrix} 3 & 1 \\\\ 5 & 7 \\end{pmatrix}$,\n\n$$\\det(A) = 3(7) - 1(5) = 21 - 5 = 16.$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 2',
        md: 'Untuk $B = \\begin{pmatrix} 2 & -3 \\\\ 4 & 1 \\end{pmatrix}$,\n\n$$\\det(B) = 2(1) - (-3)(4) = 2 + 12 = 14.$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 3',
        md: 'Tentukan $k$ agar $C = \\begin{pmatrix} k & 2 \\\\ 3 & 6 \\end{pmatrix}$ singular. Kita perlukan $\\det(C) = 0$:\n\n$$6k - 6 = 0 \\Rightarrow k = 1.$$',
      },
      {
        kind: 'mistake',
        md: 'Untuk matriks $2 \\times 2$, rumusnya $ad - bc$, bukan $ad + bc$. Selain itu, jangan mencoba menghitung determinan matriks yang tidak bujur sangkar.',
      },
      {
        kind: 'checkpoint',
        md: '1. Apakah matriks $3 \\times 2$ mempunyai determinan?\n2. Hitung $\\det \\begin{pmatrix} 4 & 1 \\\\ 2 & 3 \\end{pmatrix}$.\n3. Jika $\\det(A) = 0$, apakah $A^{-1}$ ada?',
      },
      {
        kind: 'summary',
        md: 'Determinan hanya untuk matriks bujur sangkar. Untuk $2 \\times 2$, gunakan $ad - bc$. Determinan nol berarti matriks tidak mempunyai invers.',
      },
    ],
  },
  {
    id: 'p08-u2',
    number: 2,
    title: 'Determinan 3×3 dengan Metode Sarrus',
    pageFrom: 3,
    pageTo: 5,
    sections: [
      {
        kind: 'figure',
        title: 'Metode Sarrus: salin dua kolom pertama; turun dijumlah, naik dikurang',
        md: '$$\\begin{array}{ccc|cc} a & b & c & a & b \\\\ d & e & f & d & e \\\\ g & h & i & g & h \\end{array}$$\n\n- turun: $+$ — $aei$, $bfg$, $cdh$\n- naik: $-$ — $ceg$, $afh$, $bdi$\n- khusus $3 \\times 3$',
      },
      {
        kind: 'goal',
        md: 'Anda dapat menghitung determinan matriks $3 \\times 3$ dengan metode Sarrus dan mengetahui batas penggunaan metode tersebut.',
      },
      {
        kind: 'prereq',
        md: 'Anda harus sudah nyaman menjumlahkan dan mengurangkan hasil kali tiga bilangan serta menjaga tanda negatif.',
      },
      {
        kind: 'concept',
        title: 'Penjelasan Konsep Lengkap',
        md: 'Metode Sarrus adalah cara khusus untuk matriks $3 \\times 3$. Salin dua kolom pertama ke sebelah kanan matriks, bentuk tiga diagonal turun dan tiga diagonal naik, lalu hitung\n\n$$\\det(A) = \\text{jumlah hasil kali diagonal turun} - \\text{jumlah hasil kali diagonal naik}.$$',
      },
      {
        kind: 'main',
        md: 'Jika $A = \\begin{pmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i \\end{pmatrix}$, maka Sarrus menghasilkan\n\n$$\\det(A) = aei + bfg + cdh - ceg - bdi - afh.$$',
      },
      {
        kind: 'why',
        md: 'Penyalinan dua kolom pertama hanyalah alat bantu visual untuk mengingat enam hasil kali. Itu bukan operasi yang mengubah matriks. Metode ini tidak diperluas ke $4 \\times 4$; untuk ordo lebih besar, sumber mengarahkan kita ke ekspansi kofaktor.',
      },
      {
        kind: 'example',
        title: 'Worked Example 1',
        md: 'Untuk $A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 2 & 0 & 1 \\end{pmatrix}$,\n\n$$\\det(A) = (1 \\cdot 1 \\cdot 1 + 2 \\cdot 4 \\cdot 2 + 3 \\cdot 0 \\cdot 0) - (3 \\cdot 1 \\cdot 2 + 2 \\cdot 0 \\cdot 1 + 1 \\cdot 4 \\cdot 0) = 17 - 6 = 11.$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 2',
        md: 'Untuk $B = \\begin{pmatrix} 2 & 1 & 0 \\\\ 3 & -1 & 2 \\\\ 1 & 4 & 5 \\end{pmatrix}$,\n\n$$\\det(B) = (-10 + 2 + 0) - (0 + 15 + 16) = -39.$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 3',
        md: 'Jika salah satu hasil kali diagonal mengandung nol, suku tersebut langsung nol. Ini dapat memperpendek perhitungan, tetapi seluruh enam pola diagonal tetap harus diperiksa.',
      },
      {
        kind: 'mistake',
        md: 'Sarrus hanya untuk $3 \\times 3$. Jangan memakai pola ini untuk matriks $4 \\times 4$, dan jangan lupa bahwa kelompok diagonal naik seluruhnya dikurangkan.',
      },
      {
        kind: 'checkpoint',
        md: '1. Berapa banyak hasil kali diagonal yang dihitung dalam Sarrus?\n2. Apakah Sarrus boleh dipakai untuk $4 \\times 4$?\n3. Pada formula umum, apakah $ceg$ ditambah atau dikurang?',
      },
      {
        kind: 'summary',
        md: 'Sarrus = 3 diagonal turun dikurangi 3 diagonal naik, dan hanya berlaku untuk matriks $3 \\times 3$.',
      },
    ],
  },
  {
    id: 'p08-u3',
    number: 3,
    title: 'Minor dan Kofaktor',
    pageFrom: 5,
    pageTo: 7,
    sections: [
      {
        kind: 'figure',
        title: 'Minor $M_{12}$: hapus baris 1 dan kolom 2',
        md: '$$\\begin{pmatrix} a_{11} & a_{12} & a_{13} \\\\ a_{21} & a_{22} & a_{23} \\\\ a_{31} & a_{32} & a_{33} \\end{pmatrix}$$\n\nBaris 1 dan kolom 2 dihapus, lalu determinan matriks $2 \\times 2$ yang tersisa diambil:\n\n$$M_{12} = \\det \\begin{pmatrix} a_{21} & a_{23} \\\\ a_{31} & a_{33} \\end{pmatrix}$$\n\n$$C_{12} = (-1)^{(1+2)}M_{12} = -M_{12}$$\n\npola tanda: $+\\ -\\ +\\ /\\ -\\ +\\ -\\ /\\ +\\ -\\ +$',
      },
      {
        kind: 'goal',
        md: 'Anda dapat menentukan minor $M_{ij}$, kofaktor $C_{ij}$, serta tanda kofaktor pada posisi mana pun.',
      },
      {
        kind: 'prereq',
        md: 'Anda harus dapat membaca indeks baris-kolom dan menghitung determinan $2 \\times 2$.',
      },
      {
        kind: 'concept',
        title: 'Penjelasan Konsep Lengkap',
        md: 'Untuk memperoleh minor $M_{ij}$, hapus baris ke-$i$ dan kolom ke-$j$, kemudian hitung determinan matriks yang tersisa. Kofaktor menambahkan pola tanda:\n\n$$C_{ij} = (-1)^{i+j} M_{ij}.$$',
      },
      {
        kind: 'main',
        md: 'Pola tanda kofaktor untuk tiga baris pertama adalah\n\n$$\\begin{pmatrix} + & - & + \\\\ - & + & - \\\\ + & - & + \\end{pmatrix}$$\n\nJadi posisi dengan $i+j$ genap bertanda positif, sedangkan $i+j$ ganjil bertanda negatif.',
      },
      {
        kind: 'why',
        md: 'Minor menjawab: "berapa determinan yang tersisa setelah satu baris dan satu kolom dihilangkan?" Kofaktor adalah minor yang sudah diberi tanda sesuai posisi. Pemisahan dua ide ini penting agar tanda tidak tercampur dengan perhitungan determinan minor.',
      },
      {
        kind: 'example',
        title: 'Worked Example 1',
        md: 'Gunakan $A = \\begin{pmatrix} 2 & 1 & 3 \\\\ 0 & 4 & 5 \\\\ 1 & -2 & 6 \\end{pmatrix}$. Untuk $M_{12}$, hapus baris 1 dan kolom 2:\n\n$$M_{12} = \\det \\begin{pmatrix} 0 & 5 \\\\ 1 & 6 \\end{pmatrix} = 0 - 5 = -5.$$\n\nKarena posisi $(1,2)$ bertanda negatif, $C_{12} = -M_{12} = 5$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 2',
        md: 'Pada matriks yang sama,\n\n$$M_{11} = \\det \\begin{pmatrix} 4 & 5 \\\\ -2 & 6 \\end{pmatrix} = 24 + 10 = 34, \\qquad C_{11} = 34.$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 3',
        md: 'Untuk posisi $(2,3)$, tanda kofaktor negatif karena $2+3 = 5$ ganjil. Jadi setelah menghitung $M_{23}$, hasilnya harus dikalikan $-1$.',
      },
      {
        kind: 'mistake',
        md: 'Minor dan kofaktor bukan hal yang sama. Minor belum memasukkan faktor tanda $(-1)^{i+j}$.',
      },
      {
        kind: 'checkpoint',
        md: '1. Apa tanda $C_{32}$?\n2. Baris dan kolom mana yang dihapus untuk $M_{23}$?\n3. Jika $M_{12} = -7$, berapa $C_{12}$?',
      },
      {
        kind: 'summary',
        md: 'Minor = hapus satu baris dan satu kolom lalu ambil determinan. Kofaktor = minor $\\times$ tanda $(-1)^{i+j}$.',
      },
    ],
  },
  {
    id: 'p08-u4',
    number: 4,
    title: 'Ekspansi Kofaktor yang Efisien',
    pageFrom: 8,
    pageTo: 9,
    sections: [
      {
        kind: 'goal',
        md: 'Anda dapat menghitung determinan dengan ekspansi kofaktor dan memilih baris atau kolom yang membuat perhitungan paling efisien.',
      },
      {
        kind: 'prereq',
        md: 'Kuasai minor, kofaktor, dan perkalian skalar sederhana.',
      },
      {
        kind: 'concept',
        title: 'Penjelasan Konsep Lengkap',
        md: 'Determinan matriks bujur sangkar dapat dihitung dengan memilih satu baris atau satu kolom lalu menjumlahkan setiap unsur pada baris/kolom itu dikalikan kofaktornya.',
      },
      {
        kind: 'main',
        md: 'Ekspansi sepanjang baris ke-$i$:\n\n$$\\det(A) = \\sum_{j=1}^{n} a_{ij} C_{ij}$$\n\nEkspansi sepanjang kolom ke-$j$:\n\n$$\\det(A) = \\sum_{i=1}^{n} a_{ij} C_{ij}$$',
      },
      {
        kind: 'why',
        md: 'Nilai determinan tidak bergantung pada baris/kolom mana yang dipilih. Namun jumlah kerja sangat bergantung pada pilihan. Jika satu baris memiliki banyak nol, suku-suku dengan koefisien nol langsung hilang.',
      },
      {
        kind: 'example',
        title: 'Worked Example 1',
        md: 'Untuk $A = \\begin{pmatrix} 1 & 0 & 2 \\\\ 0 & 3 & 0 \\\\ 4 & 0 & 5 \\end{pmatrix}$, baris 2 sangat efisien karena hanya elemen tengah yang tidak nol. Maka\n\n$$\\det(A) = 3C_{22} = 3 \\det \\begin{pmatrix} 1 & 2 \\\\ 4 & 5 \\end{pmatrix} = 3(5 - 8) = -9.$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 2',
        md: 'Untuk $B = \\begin{pmatrix} 2 & 0 & 0 \\\\ 1 & 3 & 4 \\\\ 0 & 5 & 6 \\end{pmatrix}$, ekspansi baris 1 memberi\n\n$$\\det(B) = 2 \\det \\begin{pmatrix} 3 & 4 \\\\ 5 & 6 \\end{pmatrix} = 2(18 - 20) = -4.$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 3',
        md: 'Pada matriks $3 \\times 3$, hasil ekspansi kofaktor harus sama dengan hasil Sarrus. Kesamaan ini dapat dipakai sebagai verifikasi ketika waktu memungkinkan.',
      },
      {
        kind: 'mistake',
        md: '"Pilih baris yang banyak nol" adalah strategi efisiensi, bukan syarat matematis. Baris atau kolom mana pun memberi determinan yang sama jika kofaktornya dihitung benar.',
      },
      {
        kind: 'checkpoint',
        md: '1. Baris mana paling efisien pada $\\begin{pmatrix} 2 & 0 & 0 \\\\ 1 & 4 & 3 \\\\ 5 & 6 & 7 \\end{pmatrix}$?\n2. Jika koefisien suatu suku ekspansi adalah nol, apakah kofaktornya perlu dihitung untuk memperoleh kontribusi suku?',
      },
      {
        kind: 'summary',
        md: 'Ekspansi kofaktor dapat dilakukan sepanjang satu baris atau satu kolom. Pilih yang paling banyak nol untuk mengurangi pekerjaan.',
      },
    ],
  },
  {
    id: 'p08-u5',
    number: 5,
    title: 'Keberadaan Invers dan Invers Matriks 2×2',
    pageFrom: 10,
    pageTo: 11,
    sections: [
      {
        kind: 'goal',
        md: 'Anda dapat menentukan apakah matriks mempunyai invers, menghitung invers $2 \\times 2$, dan memverifikasinya dengan perkalian.',
      },
      {
        kind: 'prereq',
        md: 'Kuasai determinan $2 \\times 2$, perkalian matriks, dan matriks identitas.',
      },
      {
        kind: 'concept',
        title: 'Penjelasan Konsep Lengkap',
        md: 'Invers $A^{-1}$ adalah matriks yang memenuhi\n\n$$A A^{-1} = A^{-1} A = I.$$\n\nUntuk matriks bujur sangkar dalam P08, syarat keberadaan invers adalah $\\det(A) \\neq 0$. Jika $\\det(A) = 0$, matriks disebut singular dan invers tidak ada.',
      },
      {
        kind: 'main',
        md: 'Untuk $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$ dengan $ad - bc \\neq 0$,\n\n$$A^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}.$$',
      },
      {
        kind: 'why',
        md: 'Rumus ini terdiri dari dua bagian: ubah susunan matriks menjadi $\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$, lalu skala dengan $\\dfrac{1}{ad-bc}$. Jika determinan nol, faktor $\\dfrac{1}{ad-bc}$ tidak terdefinisi; karena itu perhitungan harus berhenti.',
      },
      {
        kind: 'example',
        title: 'Worked Example 1',
        md: 'Untuk $A = \\begin{pmatrix} 2 & 1 \\\\ 1 & 1 \\end{pmatrix}$, $\\det(A) = 1$, sehingga\n\n$$A^{-1} = \\begin{pmatrix} 1 & -1 \\\\ -1 & 2 \\end{pmatrix}.$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 2',
        md: 'Untuk $B = \\begin{pmatrix} 1 & 2 \\\\ 2 & 4 \\end{pmatrix}$, $\\det(B) = 4 - 4 = 0$. Jadi $B$ singular dan tidak mempunyai invers.',
      },
      {
        kind: 'example',
        title: 'Worked Example 3',
        md: 'Verifikasi contoh pertama:\n\n$$\\begin{pmatrix} 2 & 1 \\\\ 1 & 1 \\end{pmatrix} \\begin{pmatrix} 1 & -1 \\\\ -1 & 2 \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} = I.$$',
      },
      {
        kind: 'mistake',
        md: 'Aturan mengingat yang benar: tukar $a$ dan $d$, ubah tanda $b$ dan $c$, lalu bagi dengan determinan. Bukan menukar $b, c$ atau mengubah tanda $a, d$.',
      },
      {
        kind: 'checkpoint',
        md: '1. Jika $\\det(A) = -5$, apakah $A$ mempunyai invers?\n2. Apa langkah pertama sebelum memakai rumus invers $2 \\times 2$?\n3. Bagaimana memverifikasi hasil invers?',
      },
      {
        kind: 'summary',
        md: 'Invers ada tepat ketika determinan tidak nol. Untuk $2 \\times 2$, gunakan rumus praktis dan cek dengan hasil kali terhadap identitas.',
      },
    ],
  },
  {
    id: 'p08-u6',
    number: 6,
    title: 'Invers Matriks dengan Adjoin',
    pageFrom: 11,
    pageTo: 13,
    sections: [
      {
        kind: 'figure',
        title: 'Alur invers dengan adjoin',
        md: '1. Hitung $\\det(A)$ — bila $\\det = 0 \\rightarrow$ berhenti\n2. Hitung semua kofaktor $C_{ij}$\n3. Matriks kofaktor\n4. Transpose $=$ $\\text{adj}(A)$\n5. Kalikan $1/\\det(A)$\n\n$$A^{-1} = \\frac{1}{\\det(A)}\\text{adj}(A), \\quad \\text{hanya jika } \\det(A) \\neq 0$$',
      },
      {
        kind: 'goal',
        md: 'Anda dapat mengikuti urutan lengkap pembentukan adjoin dan menggunakan\n\n$$A^{-1} = \\frac{1}{\\det(A)}\\text{adj}(A)$$\n\nuntuk matriks sederhana.',
      },
      {
        kind: 'prereq',
        md: 'Kuasai minor, kofaktor, transpose, determinan, dan syarat $\\det(A) \\neq 0$.',
      },
      {
        kind: 'concept',
        title: 'Penjelasan Konsep Lengkap',
        md: 'Untuk matriks bujur sangkar yang lebih besar, sumber menggunakan matriks kofaktor dan adjoin. Adjoin diperoleh dengan mentranspose matriks kofaktor.',
      },
      {
        kind: 'main',
        md: '$$\\text{adj}(A) = (\\text{matriks kofaktor})^T, \\qquad A^{-1} = \\frac{1}{\\det(A)}\\text{adj}(A), \\quad \\det(A) \\neq 0.$$',
      },
      {
        kind: 'why',
        md: 'Urutannya harus disiplin: (1) hitung determinan; (2) jika nol, berhenti; (3) hitung semua kofaktor; (4) bentuk matriks kofaktor; (5) transpose menjadi adjoin; (6) kalikan dengan $\\dfrac{1}{\\det(A)}$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 1',
        md: 'Ambil $A = \\begin{pmatrix} 1 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 2 \\end{pmatrix}$. Ekspansi baris 2 memberi $\\det(A) = 1$. Matriks kofaktornya adalah\n\n$$C = \\begin{pmatrix} 2 & 0 & -1 \\\\ 0 & 1 & 0 \\\\ -1 & 0 & 1 \\end{pmatrix}.$$\n\nKarena matriks ini simetris, transposenya sama, sehingga $\\text{adj}(A) = C$ dan\n\n$$A^{-1} = \\begin{pmatrix} 2 & 0 & -1 \\\\ 0 & 1 & 0 \\\\ -1 & 0 & 1 \\end{pmatrix}.$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 2',
        md: 'Untuk matriks diagonal $D = \\text{diag}(2, 3, 4)$, metode adjoin juga berlaku. Determinan $24$, dan hasil akhirnya konsisten dengan $D^{-1} = \\text{diag}\\left(\\tfrac{1}{2}, \\tfrac{1}{3}, \\tfrac{1}{4}\\right)$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 3',
        md: 'Jika pada langkah pertama diperoleh $\\det(A) = 0$, tidak perlu menghitung seluruh kofaktor untuk mencari invers karena invers memang tidak ada.',
      },
      {
        kind: 'mistake',
        md: 'Matriks kofaktor belum tentu sama dengan adjoin. Adjoin adalah transpose dari matriks kofaktor.',
      },
      {
        kind: 'checkpoint',
        md: '1. Apa yang dilakukan segera setelah memperoleh matriks kofaktor?\n2. Apa yang harus dilakukan jika determinan nol?\n3. Mengapa syarat determinan diperiksa sebelum pekerjaan kofaktor yang panjang?',
      },
      {
        kind: 'summary',
        md: 'Adjoin = transpose matriks kofaktor. Invers dengan adjoin hanya boleh dihitung jika determinan tidak nol.',
      },
    ],
  },
  {
    id: 'p08-u7',
    number: 7,
    title: 'Invers Hasil Kali dan Diagnosis Terpadu',
    pageFrom: 13,
    pageTo: 15,
    sections: [
      {
        kind: 'goal',
        md: 'Anda dapat menggunakan aturan invers hasil kali, menjelaskan mengapa urutan faktor dibalik, dan mendiagnosis kesalahan umum pada determinan/invers.',
      },
      {
        kind: 'prereq',
        md: 'Ingat bahwa perkalian matriks secara umum tidak komutatif: $AB$ tidak harus sama dengan $BA$.',
      },
      {
        kind: 'concept',
        title: 'Penjelasan Konsep Lengkap',
        md: 'Jika $A$ dan $B$ dapat dibalik dan hasil kali relevan terdefinisi, maka\n\n$$(AB)^{-1} = B^{-1}A^{-1}.$$\n\nUrutan faktor harus dibalik. Ini bukan pilihan notasi, melainkan konsekuensi dari cara invers membatalkan hasil kali.',
      },
      {
        kind: 'main',
        md: 'Verifikasi:\n\n$$(AB)(B^{-1}A^{-1}) = A(BB^{-1})A^{-1} = AIA^{-1} = I.$$\n\nSebaliknya, $(AB)(A^{-1}B^{-1})$ tidak dapat disederhanakan menjadi identitas kecuali ada kondisi tambahan yang tidak diasumsikan pada P08.',
      },
      {
        kind: 'why',
        md: 'Pikirkan urutan operasi. Jika transformasi $A$ lalu $B$ sudah dilakukan dalam hasil kali, untuk membatalkannya kita harus melepas faktor terakhir terlebih dahulu. Inilah alasan urutan invers dibalik.',
      },
      {
        kind: 'example',
        title: 'Worked Example 1',
        md: 'Jika $A^{-1} = \\begin{pmatrix} 1 & 0 \\\\ 2 & 1 \\end{pmatrix}$ dan $B^{-1} = \\begin{pmatrix} 2 & 1 \\\\ 0 & 1 \\end{pmatrix}$, maka\n\n$$(AB)^{-1} = B^{-1}A^{-1} = \\begin{pmatrix} 4 & 1 \\\\ 2 & 1 \\end{pmatrix}.$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 2',
        md: 'Pernyataan "$\det(A) = 0$, tetapi tetap gunakan $1/\det(A)$" salah karena pembagian dengan nol tidak terdefinisi. Kesimpulan yang benar: invers tidak ada.',
      },
      {
        kind: 'example',
        title: 'Worked Example 3',
        md: 'Pernyataan "untuk $2 \\times 2$, tukar $b$ dan $c$, lalu ubah tanda $a$ dan $d$" juga salah. Aturan yang benar adalah tukar $a$ dan $d$ dan ubah tanda $b$ dan $c$.',
      },
      {
        kind: 'mistake',
        md: 'Empat kesalahan penting P08: memakai $ad + bc$, membagi dengan determinan nol, salah mengubah susunan pada invers $2 \\times 2$, dan tidak membalik urutan pada invers hasil kali.',
      },
      {
        kind: 'checkpoint',
        md: '1. Lengkapi: $(AB)^{-1} = \\ldots$\n2. Mana yang diperiksa lebih dahulu untuk invers dengan adjoin: determinan atau seluruh kofaktor?\n3. Mengapa $(AB)^{-1} = A^{-1}B^{-1}$ tidak benar secara umum?',
      },
      {
        kind: 'summary',
        md: 'Invers hasil kali membalik urutan faktor. Seluruh prosedur P08 bergantung pada disiplin tanda, urutan, dan syarat determinan tidak nol.',
      },
    ],
  },
]

const m: Module = {
  id: 'p08',
  code: 'P08',
  title: 'Determinan dan Invers Matriks',
  pageFrom: 1,
  pageTo: 15,
  units,
}

export default m
