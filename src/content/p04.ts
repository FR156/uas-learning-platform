import type { Module, Unit } from '../types'

// P04 — Persamaan dan Pertidaksamaan Linear
// Prose from the PDF text layer; formula gaps filled from the rendered pages.

const units: Unit[] = [
  {
    id: 'p04-u1',
    number: 1,
    title: 'Makna Penyelesaian, Prinsip Setara, dan Persamaan Ekuivalen',
    pageFrom: 1,
    pageTo: 3,
    sections: [
      {
        kind: 'goal',
        md: 'Setelah unit ini, Anda dapat menjelaskan arti penyelesaian persamaan, memeriksa suatu calon solusi dengan substitusi, serta menjelaskan mengapa operasi yang sama pada kedua ruas menghasilkan persamaan yang tetap ekuivalen.',
      },
      {
        kind: 'prereq',
        md: 'Anda hanya memerlukan operasi hitung dasar dan kemampuan mengganti variabel dengan sebuah nilai. Persamaan mempunyai dua ruas yang dihubungkan tanda sama dengan.',
      },
      {
        kind: 'concept',
        title: '1. Apa arti menyelesaikan persamaan?',
        md: 'Persamaan adalah pernyataan matematika yang menyatakan bahwa dua ekspresi mempunyai nilai yang sama. Jika ditulis $L = R$, sebuah nilai variabel disebut *penyelesaian* apabila setelah nilai itu disubstitusikan, nilai ruas kiri $L$ benar-benar sama dengan nilai ruas kanan $R$.\n\nKarena itu, menyelesaikan persamaan berarti mencari semua nilai yang membuat pernyataan menjadi benar. Ini lebih mendasar daripada sekadar mengingat aturan "pindah ruas".',
      },
      {
        kind: 'example',
        title: 'Contoh 1 — verifikasi',
        md: 'Pada $3x = 21$, nilai $x = 7$ adalah penyelesaian karena $3(7) = 21$. Sebaliknya, $x = 5$ bukan penyelesaian karena $3(5) = 15 \\neq 21$.',
      },
      {
        kind: 'concept',
        title: '2. Menjaga kedua ruas tetap setara',
        md: 'Jika $a = b$, menambah bilangan yang sama pada kedua ruas memberi $a + c = b + c$. Mengurangi bilangan yang sama adalah kasus yang sama dengan menambahkan lawannya. Jika kedua ruas dikalikan bilangan yang sama, diperoleh $ac = bc$. Untuk pembagian, jika $c \\neq 0$, berlaku $\\dfrac{a}{c} = \\dfrac{b}{c}$.',
      },
      {
        kind: 'why',
        title: 'Mengapa?',
        md: 'Sebuah langkah penyelesaian harus mempertahankan kebenaran persamaan. Jika hanya satu ruas yang diubah, keseimbangan nilai kedua ruas umumnya rusak. Ungkapan "pindah ruas ganti tanda" boleh dipakai sebagai singkatan kerja, tetapi alasan matematisnya tetap operasi yang sama pada kedua ruas.',
      },
      {
        kind: 'example',
        title: 'Contoh 2 — penyelesaian bertahap',
        md: 'Selesaikan $3x - 2 = 31$. Tambah 2 pada kedua ruas: $3x = 33$. Bagi kedua ruas dengan 3: $x = 11$. Verifikasi: $3(11) - 2 = 31$, sehingga hasil benar.',
      },
      {
        kind: 'concept',
        title: '3. Persamaan ekuivalen',
        md: 'Dua persamaan disebut *ekuivalen* jika keduanya mempunyai himpunan penyelesaian yang sama. Misalnya, $2x = 12$ dan $x = 6$ ekuivalen karena keduanya tepat dipenuhi oleh $x = 6$. Operasi setara yang sah digunakan untuk berpindah dari satu persamaan ke persamaan ekuivalen berikutnya.',
      },
      {
        kind: 'example',
        title: 'Contoh 3',
        md: 'Dari $2x + 8 = x + 13$, kurangi $x$ dari kedua ruas sehingga $x + 8 = 13$, lalu kurangi 8 dari kedua ruas sehingga $x = 5$. Setiap baris tetap mempunyai penyelesaian yang sama.',
      },
      {
        kind: 'mistake',
        md: 'Dari $2x + 5 = 13$, langkah $2x = 13 + 5$ tidak menjaga kesetaraan. Yang benar adalah mengurangi 5 pada kedua ruas: $2x = 8$, sehingga $x = 4$.',
      },
      {
        kind: 'checkpoint',
        md: 'Apakah $x = -2$ menyelesaikan $5x - 1 = -11$? Ya, karena $5(-2) - 1 = -11$. Apakah $3x = 15$ dan $x = 5$ ekuivalen? Ya, keduanya mempunyai penyelesaian $x = 5$.',
      },
      {
        kind: 'summary',
        md: 'Solusi membuat kedua ruas sama. Langkah aljabar yang benar melakukan operasi yang sama pada kedua ruas sehingga himpunan penyelesaian tetap terjaga.',
      },
    ],
  },
  {
    id: 'p04-u2',
    number: 2,
    title: 'Persamaan Linear dengan Suku Sejenis dan Tanda Kurung',
    pageFrom: 3,
    pageTo: 4,
    sections: [
      {
        kind: 'goal',
        md: 'Anda dapat menyelesaikan persamaan linear satu variabel ketika variabel muncul pada kedua ruas dan ketika tanda kurung harus dibuka dengan sifat distributif.',
      },
      {
        kind: 'prereq',
        md: 'Ingat sifat distributif $a(b + c) = ab + ac$ dan $a(b - c) = ab - ac$. Suku sejenis adalah suku yang mempunyai bagian variabel sama, misalnya $3x$ dan $-5x$.',
      },
      {
        kind: 'concept',
        title: '1. Strategi umum',
        md: '1. Buka tanda kurung dengan distributif jika ada.\n2. Gabungkan suku sejenis pada masing-masing ruas.\n3. Kumpulkan suku yang memuat variabel pada satu ruas dan konstanta pada ruas lain dengan operasi setara.\n4. Bagi dengan koefisien variabel jika koefisiennya bukan nol.\n5. Verifikasi hasil bila diperlukan.',
      },
      {
        kind: 'example',
        title: 'Contoh 1 — variabel pada kedua ruas',
        md: '$7x - 9 = 12$. Tambah 9 pada kedua ruas: $7x = 21$. Bagi 7: $x = 3$.',
      },
      {
        kind: 'example',
        title: 'Contoh 2 — distributif',
        md: 'Selesaikan $3(x - 1) - 1 = 5 - 5(x + 5)$. Buka kurung: $3x - 3 - 1 = 5 - 5x - 25$. Gabungkan suku: $3x - 4 = -5x - 20$. Tambah $5x$ pada kedua ruas: $8x - 4 = -20$. Tambah 4: $8x = -16$. Jadi $x = -2$. Substitusi kembali memberi nilai ruas kiri dan kanan yang sama.',
      },
      {
        kind: 'example',
        title: 'Contoh 3 — beberapa langkah',
        md: '$3(2x - 1) - 5 = x + 8$. Setelah distributif, $6x - 3 - 5 = x + 8$, sehingga $6x - 8 = x + 8$. Kurangi $x$: $5x - 8 = 8$. Tambah 8: $5x = 16$, maka $x = \\dfrac{16}{5}$.',
      },
      {
        kind: 'why',
        title: 'Mengapa urutan ini membantu?',
        md: 'Membuka kurung dan menggabungkan suku sejenis lebih dahulu membuat struktur persamaan terlihat jelas. Setelah itu, prinsip dari Unit 1 dapat digunakan tanpa menebak-nebak "suku mana yang dipindahkan".',
      },
      {
        kind: 'mistake',
        md: 'Pada $2(x - 3)$, faktor 2 harus mengalikan kedua suku dalam kurung, sehingga hasilnya $2x - 6$, bukan $2x - 3$.',
      },
      {
        kind: 'checkpoint',
        md: 'Sederhanakan $4(x - 2) + 3$: hasilnya $4x - 5$. Jika $4x - 5 = 2x + 9$, maka $2x = 14$ dan $x = 7$.',
      },
      {
        kind: 'summary',
        md: 'Untuk persamaan linear bertanda kurung, distribusikan faktor ke setiap suku, gabungkan suku sejenis, lalu gunakan operasi setara sampai variabel terisolasi.',
      },
    ],
  },
  {
    id: 'p04-u3',
    number: 3,
    title: 'Persamaan Linear Bentuk Pecahan',
    pageFrom: 4,
    pageTo: 5,
    sections: [
      {
        kind: 'goal',
        md: 'Anda dapat menyelesaikan persamaan linear yang memuat pecahan dengan penyebut berupa bilangan tetap melalui pengalian seluruh ruas dengan KPK penyebut.',
      },
      {
        kind: 'prereq',
        md: 'KPK adalah kelipatan persekutuan positif terkecil dari penyebut yang muncul. Misalnya KPK dari 2 dan 3 adalah 6.',
      },
      {
        kind: 'concept',
        title: '1. Mengapa penyebut dihilangkan?',
        md: 'Pecahan tidak boleh "dicoret" secara lokal tanpa operasi yang sah. Cara aman adalah mengalikan *setiap suku pada kedua ruas* dengan KPK penyebut. Karena operasi dilakukan pada kedua ruas dengan bilangan yang sama dan tidak nol, persamaan tetap ekuivalen.',
      },
      {
        kind: 'example',
        title: 'Contoh 1',
        md: '$\\dfrac{x}{3} + 1 = 5$. Kalikan seluruh ruas dengan 3: $x + 3 = 15$. Maka $x = 12$. Verifikasi: $\\dfrac{12}{3} + 1 = 5$.',
      },
      {
        kind: 'example',
        title: 'Contoh 2',
        md: '$\\dfrac{x}{4} + 2 = 5$. Kalikan seluruh ruas dengan 4: $x + 8 = 20$, sehingga $x = 12$.',
      },
      {
        kind: 'example',
        title: 'Contoh 3 — dua penyebut',
        md: '$\\dfrac{x}{2} + \\dfrac{x}{3} = 10$. KPK 2 dan 3 adalah 6. Kalikan seluruh persamaan dengan 6: $3x + 2x = 60$. Jadi $5x = 60$ dan $x = 12$.',
      },
      {
        kind: 'concept',
        title: '2. Cek struktur sebelum menghitung',
        md: 'Sebelum mengalikan, identifikasi semua penyebut. Setelah memilih KPK, pastikan faktor itu mengenai setiap suku. Untuk $\\dfrac{x}{4} + 1 = 3$, mengalikan dengan 4 menghasilkan $x + 4 = 12$, bukan $x + 1 = 12$.',
      },
      {
        kind: 'mistake',
        md: 'Dari $\\dfrac{x}{2} + 1 = 4$, mencoret 2 sehingga menjadi $x + 1 = 4$ adalah tidak sah. Yang benar: kalikan semua suku dengan 2, sehingga $x + 2 = 8$ dan $x = 6$.',
      },
      {
        kind: 'checkpoint',
        md: 'Untuk $\\dfrac{x}{3} - 2 = 4$, kalikan dengan 3 sehingga $x - 6 = 12$; maka $x = 18$. Untuk penyebut 4 dan 6, KPK yang digunakan adalah 12.',
      },
      {
        kind: 'summary',
        md: 'Pada persamaan pecahan dengan penyebut tetap, tentukan KPK lalu kalikan seluruh persamaan dengan KPK tersebut. Jangan menghapus penyebut hanya pada satu bagian.',
      },
    ],
  },
  {
    id: 'p04-u4',
    number: 4,
    title: 'Pertidaksamaan Linear dan Aturan Pembalikan Tanda',
    pageFrom: 5,
    pageTo: 6,
    sections: [
      {
        kind: 'goal',
        md: 'Anda dapat menyelesaikan pertidaksamaan linear satu variabel dan menjelaskan kapan tanda $<, >, \\le, \\ge$ harus dibalik.',
      },
      {
        kind: 'prereq',
        md: 'Pertidaksamaan membandingkan urutan dua nilai. Menambah atau mengurangi bilangan yang sama pada kedua ruas tidak mengubah urutan.',
      },
      {
        kind: 'concept',
        title: '1. Aturan operasi',
        md: '- Ditambah atau dikurangi bilangan yang sama: tanda tetap.\n- Dikali atau dibagi bilangan positif yang sama: tanda tetap.\n- Dikali atau dibagi bilangan negatif yang sama: tanda dibalik.',
      },
      {
        kind: 'why',
        title: 'Mengapa tanda dibalik?',
        md: 'Ambil pernyataan benar $-2 < 3$. Jika kedua ruas dikalikan $-1$, diperoleh $2 > -3$. Perkalian negatif membalik posisi bilangan pada urutan, sehingga arah tanda juga harus dibalik.',
      },
      {
        kind: 'example',
        title: 'Contoh 1',
        md: '$-2x < 6$. Bagi kedua ruas dengan $-2$. Karena pembaginya negatif, $x > -3$.',
      },
      {
        kind: 'example',
        title: 'Contoh 2',
        md: '$3x - 5 > x + 7$. Kurangi $x$: $2x - 5 > 7$. Tambah 5: $2x > 12$. Bagi 2: $x > 6$.',
      },
      {
        kind: 'example',
        title: 'Contoh 3',
        md: '$-4x \\le 12$. Bagi $-4$, maka tanda berbalik: $x \\ge -3$.',
      },
      {
        kind: 'mistake',
        md: 'Dari $-3x < 12$, hasilnya bukan $x < -4$. Karena kita membagi dengan $-3$, tanda harus dibalik: $x > -4$.',
      },
      {
        kind: 'checkpoint',
        md: '$2x - 4 < 6$ memberi $2x < 10$, sehingga $x < 5$. Pada $-5x \\ge 20$, pembagian dengan $-5$ menghasilkan $x \\le -4$.',
      },
      {
        kind: 'summary',
        md: 'Prosedur pertidaksamaan mirip persamaan, tetapi operasi dengan bilangan negatif membalik arah tanda. Ini adalah aturan yang tidak boleh dilewatkan.',
      },
    ],
  },
  {
    id: 'p04-u5',
    number: 5,
    title: 'Pertidaksamaan Majemuk',
    pageFrom: 6,
    pageTo: 7,
    sections: [
      {
        kind: 'goal',
        md: 'Anda dapat menyelesaikan pertidaksamaan majemuk dengan menerapkan operasi yang sama pada ketiga bagian dan menjaga arah tanda secara konsisten.',
      },
      {
        kind: 'prereq',
        md: 'Bentuk seperti $a < E < b$ menyatakan dua syarat sekaligus: $a < E$ dan $E < b$. Karena kedua syarat harus tetap benar, operasi dilakukan pada bagian kiri, tengah, dan kanan.',
      },
      {
        kind: 'concept',
        title: '1. Operasi pada tiga bagian',
        md: 'Contoh 1. $3 < x + 7 < 11$. Kurangi ketiga bagian dengan 7: $-4 < x < 4$.\n\nContoh 2. $-1 \\le 2x + 3 < 7$. Kurangi 3 pada ketiga bagian: $-4 \\le 2x < 4$. Bagi semua bagian dengan 2: $-2 \\le x < 2$.',
      },
      {
        kind: 'concept',
        title: '2. Jika harus membagi dengan bilangan negatif',
        md: 'Aturan pembalikan tanda dari Unit 4 tetap berlaku pada kedua tanda sekaligus. Misalnya, $-1 \\le -x < 3$. Kalikan semua bagian dengan $-1$: $1 \\ge x > -3$. Agar mudah dibaca dari kecil ke besar, tulis kembali sebagai $-3 < x \\le 1$.',
      },
      {
        kind: 'why',
        title: 'Mengapa ditulis ulang?',
        md: 'Bentuk $1 \\ge x > -3$ sudah benar, tetapi urutan $-3 < x \\le 1$ lebih mudah dibaca karena batas kecil berada di kiri dan batas besar di kanan.',
      },
      {
        kind: 'mistake',
        md: 'Mengurangi 5 hanya dari bagian tengah pada $2 < x + 5 < 9$ merusak dua hubungan sekaligus. Kurangi 5 dari ketiga bagian untuk memperoleh $-3 < x < 4$.',
      },
      {
        kind: 'checkpoint',
        md: 'Dari $1 < 2x + 3 \\le 9$, kurangi 3: $-2 < 2x \\le 6$. Bagi 2: $-1 < x \\le 3$.',
      },
      {
        kind: 'summary',
        md: 'Pertidaksamaan majemuk adalah dua batas yang harus dipertahankan sekaligus. Setiap operasi berlaku pada ketiga bagian; jika pengali atau pembagi negatif, kedua tanda berbalik.',
      },
    ],
  },
  {
    id: 'p04-u6',
    number: 6,
    title: 'Pertidaksamaan Pecahan dan Diagnosis Kesalahan',
    pageFrom: 7,
    pageTo: 8,
    sections: [
      {
        kind: 'goal',
        md: 'Anda dapat menyelesaikan pertidaksamaan bentuk pecahan dengan penyebut bilangan tetap, memilih operasi yang menjaga urutan, serta mendiagnosis kesalahan umum pada persamaan dan pertidaksamaan.',
      },
      {
        kind: 'prereq',
        md: 'Gunakan KPK seperti pada persamaan pecahan. Untuk penyebut positif, memilih KPK positif membuat tanda pertidaksamaan tetap. Jika suatu langkah menggunakan pengali negatif, aturan pembalikan tanda dari Unit 4 tetap berlaku.',
      },
      {
        kind: 'concept',
        title: '1. Menghilangkan penyebut tetap',
        md: 'Contoh 1. $\\dfrac{x}{3} > \\dfrac{x}{4} + 1$. KPK 3 dan 4 adalah 12. Kalikan seluruh pertidaksamaan dengan 12 yang positif: $4x > 3x + 12$. Maka $x > 12$.\n\nContoh 2. $\\dfrac{x}{4} > \\dfrac{x}{6} + 2$. Kalikan dengan KPK 12: $3x > 2x + 24$, sehingga $x > 24$.',
      },
      {
        kind: 'note',
        title: 'Catatan scope',
        md: 'Unit ini membahas bentuk pecahan sederhana dengan penyebut berupa bilangan tetap, sesuai sumber pertemuan. Penyebut yang memuat variabel tidak dibahas pada P04 ini.',
      },
      {
        kind: 'concept',
        title: '2. Jalur keputusan terpadu',
        md: '1. Tentukan apakah bentuknya persamaan atau pertidaksamaan.\n2. Jika ada kurung, gunakan distributif dengan benar.\n3. Jika ada pecahan berpenyebut tetap, pilih KPK dan kalikan seluruh ruas/bagian.\n4. Gabungkan suku sejenis dan lakukan operasi yang sama pada ruas yang dibandingkan.\n5. Pada pertidaksamaan, cek apakah Anda mengalikan atau membagi dengan bilangan negatif; jika ya, balik tanda.\n6. Periksa hasil dengan meninjau kembali langkah atau melakukan substitusi ketika sesuai.',
      },
      {
        kind: 'diagnosis',
        title: '3. Diagnosis tiga kesalahan khas',
        md: '**Kesalahan A — operasi salah ruas.** $2x + 5 = 13$ tidak boleh menjadi $2x = 13 + 5$. Kurangi 5 pada kedua ruas: $2x = 8$, sehingga $x = 4$.\n\n**Kesalahan B — tanda tidak dibalik.** $-3x < 12$ harus menjadi $x > -4$, bukan $x < -4$.\n\n**Kesalahan C — penyebut dicoret lokal.** $\\dfrac{x}{2} + 1 = 4$ harus dikalikan seluruh ruas dengan 2: $x + 2 = 8$, sehingga $x = 6$.',
      },
      {
        kind: 'mistake',
        md: 'Kecepatan manipulasi tidak menggantikan alasan. Setiap langkah harus dapat dijelaskan sebagai operasi yang menjaga kesetaraan atau urutan.',
      },
      {
        kind: 'checkpoint',
        md: 'Pada $\\dfrac{x}{2} - \\dfrac{x}{4} \\ge 3$, kalikan dengan 4: $2x - x \\ge 12$, sehingga $x \\ge 12$. Tanda tetap karena pengali 4 positif.',
      },
      {
        kind: 'summary',
        md: 'Pecahan tidak mengubah prinsip dasar: gunakan operasi pada keseluruhan ruas/bagian. Untuk pertidaksamaan, selalu periksa tanda pengali atau pembagi. Diagnosis kesalahan membantu memastikan setiap langkah mempertahankan makna matematika.',
      },
    ],
  },
]

const m: Module = {
  id: 'p04',
  code: 'P04',
  title: 'Persamaan dan Pertidaksamaan Linear',
  pageFrom: 1,
  pageTo: 9,
  units,
}

export default m
