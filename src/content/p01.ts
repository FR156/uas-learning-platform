import type { Module, Section, Unit } from '../types'

const numberSetDiagram: Section = {
  kind: 'figure',
  title: 'Hubungan Himpunan Bilangan Real',
  md: 'Diagram bersarang: $R$ (bilangan real) memuat $Q$ (rasional, $a/b$ dengan $b \\neq 0$), $Q$ memuat $I$ (bilangan bulat), $I$ memuat $W$ ($0, 1, 2, \\dots$), dan $W$ memuat $N$ ($1, 2, 3, \\dots$). Di luar $Q$ tetapi di dalam $R$ terdapat bilangan irasional: real, bukan rasional, contoh $\\sqrt{2}, \\pi, e$.\n\nHubungan yang dinyatakan diagram:\n\n$$N \\subset W \\subset I \\subset Q \\subset R$$',
}

const units: Unit[] = [
  {
    id: 'p01-u1',
    number: 1,
    title: 'Sistem Bilangan Real dan Klasifikasi Bilangan',
    pageFrom: 1,
    pageTo: 3,
    sections: [
      numberSetDiagram,
      {
        kind: 'goal',
        md: 'Anda dapat mengklasifikasikan suatu bilangan ke semua himpunan bilangan yang memuatnya dan membaca hubungan bertingkat $N \\subset W \\subset I \\subset Q \\subset R$ sesuai notasi pada sumber P01.',
      },
      {
        kind: 'prereq',
        md: 'Ingat makna simbol $\\in$ sebagai "anggota" dan $\\subset$ sebagai "himpunan bagian". Dalam P01, notasi yang dipakai adalah $N$ untuk bilangan asli, $W$ untuk bilangan cacah, $I$ untuk bilangan bulat, $Q$ untuk bilangan rasional, dan $R$ untuk bilangan real.',
      },
      {
        kind: 'concept',
        title: '1. Himpunan-Himpunan Dasar',
        md: '- $N = \\{1, 2, 3, \\dots\\}$: bilangan asli.\n- $W = \\{0, 1, 2, 3, \\dots\\}$: bilangan cacah.\n- $I = \\{\\dots, -2, -1, 0, 1, 2, \\dots\\}$: bilangan bulat.\n- $Q$: bilangan rasional, yaitu bilangan yang dapat ditulis $a/b$ dengan $a, b \\in I$ dan $b \\neq 0$.\n- Bilangan irasional: bilangan real yang tidak dapat dinyatakan sebagai $a/b$ dengan syarat tersebut, misalnya $\\sqrt{2}, \\pi, e$.\n- $R$: seluruh bilangan real, yaitu gabungan bilangan rasional dan irasional.',
      },
      {
        kind: 'concept',
        title: '2. Hubungan Bertingkat',
        md: 'Sumber menggunakan hubungan\n\n$$N \\subset W \\subset I \\subset Q \\subset R.$$\n\nArtinya, setiap bilangan asli juga cacah; setiap bilangan cacah juga bulat; setiap bilangan bulat juga rasional; dan setiap bilangan rasional juga real. Karena itu satu bilangan dapat memiliki beberapa klasifikasi sekaligus.',
      },
      {
        kind: 'why',
        title: 'Mengapa Bilangan Bulat Selalu Rasional?',
        md: 'Setiap bilangan bulat $k$ dapat ditulis sebagai $k/1$. Karena pembilang dan penyebutnya bilangan bulat dan penyebutnya tidak nol, maka $k \\in Q$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 1 — Bilangan Positif',
        md: 'Klasifikasikan 6. Karena $6 \\in N$, maka otomatis $6 \\in W, I, Q, R$. Jadi semua himpunan yang memuat 6 adalah $N, W, I, Q, R$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 2 — Nol',
        md: 'Angka 0 bukan anggota $N$ menurut konvensi sumber P01, tetapi $0 \\in W, I, Q, R$. Untuk rasionalitas, $0 = 0/1$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 3 — Pecahan dan Akar',
        md: '$-3/5 \\in Q$ dan karena itu juga $R$, tetapi bukan $I, W, N$. Sementara $\\sqrt{7}$ tidak menyederhana menjadi bilangan rasional, sehingga diklasifikasikan sebagai irasional dan real.',
      },
      {
        kind: 'mistake',
        md: 'Jika sebuah bilangan adalah bilangan bulat, hal itu tidak berarti ia "bukan rasional". Hubungan subset justru menyatakan $I \\subset Q$.',
      },
      {
        kind: 'checkpoint',
        md: '1. Klasifikasikan $-11$ ke semua himpunan yang memuatnya.\n2. Klasifikasikan $0$.\n3. Mengapa $\\sqrt{36}$ harus disederhanakan sebelum diklasifikasikan?',
      },
      {
        kind: 'summary',
        md: 'Gunakan struktur bertingkat $N \\subset W \\subset I \\subset Q \\subset R$. Klasifikasi yang lebih sempit tidak menghapus keanggotaan pada himpunan yang lebih luas.',
      },
    ],
  },
  {
    id: 'p01-u2',
    number: 2,
    title: 'Bilangan Rasional, Irasional, dan Representasi Desimal',
    pageFrom: 3,
    pageTo: 5,
    sections: [
      {
        kind: 'goal',
        md: 'Anda dapat menentukan apakah suatu bilangan rasional atau irasional dengan menggunakan bentuk pecahan, penyederhanaan akar, dan pola desimal.',
      },
      {
        kind: 'prereq',
        md: 'Gunakan definisi sumber: $x$ rasional jika dapat ditulis $x = a/b$ dengan $a, b \\in I$ dan $b \\neq 0$.',
      },
      {
        kind: 'concept',
        title: '1. Tiga Cara Mengenali Bilangan Rasional',
        md: '- Sudah ditulis sebagai pecahan dua bilangan bulat, misalnya $-7/3$.\n- Dapat diubah menjadi pecahan, misalnya $0,75 = 75/100 = 3/4$.\n- Desimalnya berhingga atau berulang. Contoh $0,333\\dots = 1/3$.',
      },
      {
        kind: 'concept',
        title: '2. Bilangan Irasional',
        md: 'Bilangan irasional tidak dapat ditulis sebagai hasil bagi dua bilangan bulat. Dalam cakupan sumber, contoh utamanya adalah $\\sqrt{2}, \\pi, e$, serta akar dari bilangan yang tidak menjadi akar rasional sederhana seperti $\\sqrt{7}$.',
      },
      {
        kind: 'concept',
        title: '3. Sederhanakan Sebelum Mengklasifikasikan',
        md: 'Simbol akar tidak otomatis berarti irasional. Misalnya $\\sqrt{9} = 3$, sehingga $\\sqrt{9}$ justru bilangan asli, cacah, bulat, rasional, dan real.',
      },
      {
        kind: 'example',
        title: 'Worked Example 1 — Desimal Berhingga',
        md: '$0,125 = 125/1000 = 1/8$. Jadi $0,125 \\in Q \\subset R$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 2 — Bilangan Bulat Negatif',
        md: '$-12 = -12/1$, maka $-12$ rasional. Ia juga bulat dan real.',
      },
      {
        kind: 'example',
        title: 'Worked Example 3 — Membedakan Dua Akar',
        md: '$\\sqrt{25} = 5$ adalah rasional. Sebaliknya $\\sqrt{6}$ tidak menyederhana menjadi bilangan rasional dalam cakupan ini, sehingga diklasifikasikan sebagai irasional.',
      },
      {
        kind: 'why',
        title: 'Mengapa Pola Desimal Membantu?',
        md: 'Sumber menegaskan bahwa desimal berhingga atau berulang merupakan representasi bilangan rasional, sedangkan desimal tak berhingga yang tidak berulang menggambarkan bilangan irasional. Karena itu pola desimal dapat dipakai sebagai alat klasifikasi.',
      },
      {
        kind: 'mistake',
        md: 'Jangan mengklasifikasikan dari bentuk luar saja. Nilai $\\sqrt{49}$ adalah 7, sehingga bukan irasional.',
      },
      {
        kind: 'checkpoint',
        md: '1. Nyatakan $0,375$ sebagai pecahan paling sederhana.\n2. Apakah $-19$ rasional? Berikan bentuk $a/b$.\n3. Bandingkan klasifikasi $\\sqrt{16}$ dan $\\sqrt{11}$.',
      },
      {
        kind: 'summary',
        md: 'Rasional berarti dapat ditulis $a/b$ dengan penyebut tidak nol. Desimal berhingga/berulang rasional; desimal tak berhingga tak berulang irasional. Sederhanakan bentuk sebelum memutuskan klasifikasi.',
      },
    ],
  },
  {
    id: 'p01-u3',
    number: 3,
    title: 'Urutan Bilangan Real dan Sifat Ketidaksamaan',
    pageFrom: 5,
    pageTo: 7,
    sections: [
      {
        kind: 'figure',
        title: 'Mengapa Tanda Berbalik Saat Dikali Bilangan Negatif?',
        md: 'Mulai: $-2 < 4$\n\nPada garis bilangan, $-2$ berada di kiri dan $4$ di kanan.\n\nKalikan kedua nilai dengan $-3$: posisi terpantul terhadap 0\n\n$-12 = 4(-3)$ dan $6 = (-2)(-3)$\n\nJadi $6 > -12$: arah pertidaksamaan berbalik.',
      },
      {
        kind: 'goal',
        md: 'Anda dapat membandingkan bilangan real, menggunakan sifat transitif, dan menentukan bagaimana suatu pertidaksamaan berubah setelah operasi yang sama dilakukan pada kedua ruas.',
      },
      {
        kind: 'prereq',
        md: 'Untuk dua bilangan real $a$ dan $b$, tepat satu keadaan berlaku: $a < b$, $a = b$, atau $b < a$. Bilangan yang lebih ke kanan pada garis bilangan bernilai lebih besar.',
      },
      {
        kind: 'concept',
        title: '1. Sifat Transitif',
        md: 'Jika $a < b$ dan $b < c$, maka $a < c$. Sifat ini memungkinkan kita merangkai informasi urutan.',
      },
      {
        kind: 'concept',
        title: '2. Menambah Bilangan yang Sama',
        md: 'Jika $a < b$, maka untuk setiap real $c$,\n\n$$a + c < b + c.$$\n\nMenambah atau mengurangi nilai yang sama hanya menggeser kedua bilangan dengan jarak yang sama, sehingga urutannya tetap.',
      },
      {
        kind: 'concept',
        title: '3. Mengalikan dengan Bilangan Positif',
        md: 'Jika $a < b$ dan $c > 0$, maka $ac < bc$. Skala positif mempertahankan arah urutan.',
      },
      {
        kind: 'concept',
        title: '4. Mengalikan dengan Bilangan Negatif',
        md: 'Jika $a < b$ dan $c < 0$, maka\n\n$$ac > bc.$$\n\nArah tanda berbalik. Secara geometris, perkalian dengan bilangan negatif membalik posisi terhadap 0 sekaligus mengubah skala.',
      },
      {
        kind: 'example',
        title: 'Worked Example 1 — Penjumlahan',
        md: 'Dari $-4 < 3$, tambahkan 7 pada kedua ruas: $3 < 10$. Tanda tetap.',
      },
      {
        kind: 'example',
        title: 'Worked Example 2 — Perkalian Positif',
        md: 'Dari $2 < 5$, kalikan 4: $8 < 20$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 3 — Perkalian Negatif',
        md: 'Dari $-2 < 4$, kalikan $-3$: $6 > -12$. Tanda harus berbalik.',
      },
      {
        kind: 'example',
        title: 'Worked Example 4 — Mengurutkan Bentuk',
        md: 'Urutkan $-\\sqrt{9}, -2, 1/2, \\sqrt{4}$. Sederhanakan dahulu: $-3, -2, 0,5, 2$. Jadi\n\n$$-\\sqrt{9} < -2 < 1/2 < \\sqrt{4}.$$',
      },
      {
        kind: 'mistake',
        md: 'Pembalikan tanda tidak terjadi karena "memindahkan ruas". Ia terjadi khusus ketika kedua ruas dikalikan atau dibagi dengan bilangan negatif.',
      },
      {
        kind: 'checkpoint',
        md: '1. Jika $p < q$, bandingkan $p - 9$ dan $q - 9$.\n2. Jika $p < q$, bandingkan $-5p$ dan $-5q$.\n3. Jika $a < b$ dan $b < 10$, apa yang dapat disimpulkan?',
      },
      {
        kind: 'summary',
        md: 'Penjumlahan yang sama dan perkalian positif mempertahankan arah ketidaksamaan; perkalian atau pembagian dengan bilangan negatif membalik arah tanda.',
      },
    ],
  },
  {
    id: 'p01-u4',
    number: 4,
    title: 'Sifat Operasi pada Bilangan Real',
    pageFrom: 7,
    pageTo: 9,
    sections: [
      {
        kind: 'goal',
        md: 'Anda dapat mengenali dan menggunakan sifat komutatif, asosiatif, distributif, elemen netral, lawan penjumlahan, dan kebalikan perkalian pada bilangan real.',
      },
      {
        kind: 'prereq',
        md: 'Pada unit ini $x, y, z \\in R$. Sifat-sifat ini menjelaskan mengapa transformasi aljabar tertentu sah.',
      },
      {
        kind: 'concept',
        title: '1. Komutatif: Urutan Dapat Ditukar',
        md: 'Penjumlahan: $x + y = y + x$. Perkalian: $xy = yx$.\n\nKomutatif mengubah **urutan**, bukan pengelompokan.',
      },
      {
        kind: 'concept',
        title: '2. Asosiatif: Pengelompokan Dapat Diubah',
        md: 'Penjumlahan: $(x + y) + z = x + (y + z)$. Perkalian: $(xy)z = x(yz)$.\n\nAsosiatif mengubah **tanda kurung/pengelompokan**, bukan urutan unsur.',
      },
      {
        kind: 'concept',
        title: '3. Distributif',
        md: '$$x(y + z) = xy + xz.$$\n\nSifat distributif menghubungkan perkalian dengan penjumlahan. Ia juga dapat dibaca terbalik: $xy + xz = x(y + z)$.',
      },
      {
        kind: 'concept',
        title: '4. Elemen Netral',
        md: '$x + 0 = x$ menunjukkan 0 sebagai elemen netral penjumlahan.\n\n$x \\cdot 1 = x$ menunjukkan 1 sebagai elemen netral perkalian.',
      },
      {
        kind: 'concept',
        title: '5. Lawan dan Kebalikan',
        md: 'Untuk setiap $x$, $x + (-x) = 0$. Untuk $x \\neq 0$, $x(1/x) = 1$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 1 — Komutatif',
        md: '$8 + 13 = 13 + 8$: urutan dua suku ditukar, jadi sifat komutatif penjumlahan.',
      },
      {
        kind: 'example',
        title: 'Worked Example 2 — Asosiatif',
        md: '$(2 + 5) + 7 = 2 + (5 + 7)$: urutan tetap, pengelompokan berubah, jadi asosiatif.',
      },
      {
        kind: 'example',
        title: 'Worked Example 3 — Distributif',
        md: '$4(x + 3) = 4x + 12$. Angka 4 dikalikan ke setiap suku di dalam kurung.',
      },
      {
        kind: 'mistake',
        md: 'Komutatif dan asosiatif berbeda. $a + b = b + a$ adalah komutatif; $(a + b) + c = a + (b + c)$ adalah asosiatif.',
      },
      {
        kind: 'checkpoint',
        md: '1. Nama sifat pada $7 \\cdot 1 = 7$?\n2. Nama sifat pada $5(a + b) = 5a + 5b$?\n3. Apakah $(ab)c = a(bc)$ komutatif atau asosiatif?',
      },
      {
        kind: 'summary',
        md: 'Komutatif mengubah urutan, asosiatif mengubah pengelompokan, distributif menyebarkan perkalian, sedangkan 0 dan 1 bertindak sebagai elemen netral.',
      },
    ],
  },
  {
    id: 'p01-u5',
    number: 5,
    title: 'Selisih, Hasil Bagi, Nol, Satu, Lawan, dan Kebalikan',
    pageFrom: 9,
    pageTo: 10,
    sections: [
      {
        kind: 'goal',
        md: 'Anda dapat membaca pengurangan sebagai penjumlahan dengan lawan dan pembagian sebagai perkalian dengan kebalikan, serta menggunakan struktur ini untuk menentukan nilai yang belum diketahui.',
      },
      {
        kind: 'concept',
        title: '1. Pengurangan sebagai Penjumlahan dengan Lawan',
        md: 'Hubungan sumber dapat dibaca: jika $x + z = y$, maka $z = y - x$. Secara struktural,\n\n$$y - x = y + (-x).$$\n\nJadi pengurangan bukan operasi yang terpisah dari penjumlahan; ia dapat dibangun menggunakan lawan penjumlahan.',
      },
      {
        kind: 'concept',
        title: '2. Pembagian sebagai Perkalian dengan Kebalikan',
        md: 'Jika $x \\neq 0$ dan $xz = y$, maka $z = y/x$. Karena $1/x$ adalah kebalikan dari $x$,\n\n$$\\frac{y}{x} = y\\left(\\frac{1}{x}\\right), \\quad x \\neq 0.$$',
      },
      {
        kind: 'concept',
        title: '3. Peran 0 dan 1',
        md: '0 tidak mengubah nilai ketika ditambahkan: $a + 0 = a$. Angka 1 tidak mengubah nilai ketika dikalikan: $a \\cdot 1 = a$. Keduanya menjadi target ketika suatu bilangan digabungkan dengan lawan atau kebalikannya.',
      },
      {
        kind: 'example',
        title: 'Worked Example 1 — Menulis Ulang Selisih',
        md: '$8 - 13 = 8 + (-13)$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 2 — Menulis Ulang Hasil Bagi',
        md: '$15/4 = 15 \\cdot (1/4)$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 3 — Menentukan Nilai pada Penjumlahan',
        md: 'Jika $7 + z = -2$, tambahkan lawan 7 pada kedua sisi: $z = -2 - 7 = -9$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 4 — Menentukan Nilai pada Perkalian',
        md: 'Jika $5z = 18$, kalikan kedua ruas dengan $1/5$: $z = 18/5$. Kebalikan 5 ada karena $5 \\neq 0$.',
      },
      {
        kind: 'mistake',
        md: 'Pembagian dengan nol tidak didefinisikan. Rumus kebalikan $1/x$ selalu disertai syarat $x \\neq 0$.',
      },
      {
        kind: 'checkpoint',
        md: '1. Tulis $11 - 17$ sebagai penjumlahan.\n2. Tulis $9/5$ sebagai perkalian dengan kebalikan.\n3. Tentukan $z$ jika $4z = -7$.',
      },
      {
        kind: 'summary',
        md: 'Pengurangan memakai lawan penjumlahan dan pembagian memakai kebalikan perkalian. 0 dan 1 adalah elemen netral yang menjadi dasar struktur operasi ini.',
      },
    ],
  },
  {
    id: 'p01-u6',
    number: 6,
    title: 'Membenarkan Langkah Aljabar dan Mendiagnosis Kesalahan',
    pageFrom: 11,
    pageTo: 13,
    sections: [
      {
        kind: 'goal',
        md: 'Anda dapat menjelaskan alasan di balik setiap langkah transformasi aljabar sederhana dan menemukan kesalahan konsep pada klasifikasi bilangan, ketidaksamaan, dan sifat operasi.',
      },
      {
        kind: 'prereq',
        md: 'Gunakan Unit 1–5 sebagai kamus alasan: subset himpunan bilangan, definisi rasional, sifat ketidaksamaan, komutatif, asosiatif, distributif, elemen netral, lawan, dan kebalikan.',
      },
      {
        kind: 'concept',
        title: '1. Aljabar yang Benar Harus Mempertahankan Nilai',
        md: 'Transformasi aljabar yang sah menghasilkan ekspresi yang ekuivalen untuk semua nilai variabel pada domainnya. Karena itu setiap perubahan perlu memiliki alasan, bukan sekadar kebiasaan simbolik.',
      },
      {
        kind: 'concept',
        title: '2. Contoh Audit Langkah demi Langkah',
        md: 'Mulai dari $3(x - 2) + 5x$.\n\n1. $3x - 6 + 5x$ — sifat distributif.\n2. $3x + 5x - 6$ — penataan ulang menggunakan sifat komutatif/asosiatif penjumlahan.\n3. $8x - 6$ — gabungkan suku sejenis; secara struktural $3x + 5x = (3 + 5)x = 8x$ melalui distributif terbalik.\n\nCek cepat pada $x = 2$: bentuk awal $3(0) + 10 = 10$, bentuk akhir $16 - 6 = 10$. Cek numerik mendukung bahwa transformasi konsisten, meskipun alasan sifat tetap diperlukan.',
      },
      {
        kind: 'diagnosis',
        title: '3. Diagnosis Kesalahan Klasifikasi',
        md: 'Pernyataan "5 adalah bulat, maka bukan rasional" salah karena $I \\subset Q$. Faktanya $5 = 5/1$.',
      },
      {
        kind: 'diagnosis',
        title: '4. Diagnosis Kesalahan Ketidaksamaan',
        md: 'Dari $-2 < 4$, jika dikalikan $-3$, hasilnya $6 > -12$, bukan $6 < -12$. Penyebabnya adalah faktor pengali negatif.',
      },
      {
        kind: 'diagnosis',
        title: '5. Diagnosis Kesalahan Distributif',
        md: '$3(x + 5)$ harus menjadi $3x + 15$. Faktor 3 harus didistribusikan ke kedua suku dalam kurung.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Memilih Alasan yang Tepat',
        md: 'Untuk $2(a + 4) + 3a \\rightarrow 2a + 8 + 3a$, alasan pertama adalah distributif. Untuk $2a + 3a + 8 \\rightarrow 5a + 8$, suku sejenis digabung dengan memfaktorkan $a$:\n\n$$(2 + 3)a = 5a.$$',
      },
      {
        kind: 'mistake',
        md: 'Hasil akhir yang kebetulan benar belum cukup untuk membenarkan langkah yang salah. Setiap transformasi harus sesuai sifat yang berlaku.',
      },
      {
        kind: 'checkpoint',
        md: '1. Jelaskan alasan $6(y + 2) = 6y + 12$.\n2. Perbaiki klaim "$\\sqrt{64}$ irasional karena memakai simbol akar".\n3. Perbaiki $-3 < 5 \\Rightarrow 12 < -20$ setelah dikali $-4$.',
      },
      {
        kind: 'summary',
        md: 'P01 tidak hanya menuntut jawaban numerik, tetapi juga alasan struktural. Gunakan definisi dan sifat untuk memeriksa setiap langkah dan mendiagnosis kesalahan.',
      },
      {
        kind: 'note',
        title: 'Siap berlatih?',
        md: '18 soal latihan · boleh diulang · tidak masuk nilai resmi\n\nMulai Latihan',
      },
    ],
  },
]

const m: Module = {
  id: 'p01',
  code: 'P01',
  title: 'Sistem Bilangan Real dan Sifatnya',
  pageFrom: 1,
  pageTo: 13,
  units,
}

export default m
