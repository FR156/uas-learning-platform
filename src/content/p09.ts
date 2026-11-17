import type { Module, Unit } from '../types'

// P09 — Nilai Mutlak, Persamaan, dan Pertidaksamaan
//
// NOTE on source defects: the original web app failed to render two display
// formulas (Unit 5 and Unit 6 "Matematika Utama"). The printed PDF shows the raw
// `\[|x-a|` code with the inequality cut off. Those two statements are recorded
// here from the prose of the same section plus the correctly rendered non-strict
// variants that immediately follow them, and are flagged with kind 'note'.
// Nothing was invented; see the note sections in units 5 and 6.

const units: Unit[] = [
  {
    id: 'p09-u1',
    number: 1,
    title: 'Nilai Mutlak sebagai Jarak dan Definisi',
    pageFrom: 1,
    pageTo: 3,
    sections: [
      {
        kind: 'figure',
        title: '$|x|$ menyatakan jarak titik $x$ dari $0$',
        md: 'Garis bilangan dengan titik $0$ di tengah dan titik $x = -6$ di sebelah kirinya. Jarak dari $-6$ ke $0$ adalah $6$ satuan, dan itulah nilai $|-6|$.',
      },
      {
        kind: 'goal',
        md: 'Anda dapat memaknai nilai mutlak sebagai jarak dari nol, menghitung nilai mutlak dengan definisi, dan menjelaskan mengapa nilai mutlak tidak pernah negatif.',
      },
      {
        kind: 'prereq',
        md: 'Ingat urutan bilangan pada garis bilangan: bilangan negatif berada di kiri $0$ dan bilangan positif berada di kanan $0$. Jarak adalah panjang, sehingga nilainya tidak negatif.',
      },
      {
        kind: 'concept',
        title: 'Penjelasan Konsep Lengkap',
        md: 'Nilai mutlak suatu bilangan real bukan sekadar aturan "hapus tanda minus". Makna dasarnya adalah jarak bilangan tersebut dari $0$. Titik $5$ berjarak $5$ satuan dari $0$, dan titik $-5$ juga berjarak $5$ satuan dari $0$. Karena jarak tidak mungkin negatif, selalu berlaku $|x| \\ge 0$.',
      },
      {
        kind: 'main',
        md: 'Definisi nilai mutlak adalah\n\n$$|x| = \\begin{cases} x, & x \\ge 0, \\\\ -x, & x < 0. \\end{cases}$$\n\nBagian kedua sering menimbulkan salah paham. Jika $x < 0$, maka $-x$ justru positif. Contoh: jika $x = -6$, maka $|x| = -(-6) = 6$.',
      },
      {
        kind: 'why',
        md: 'Dua bilangan yang berlawanan tanda dapat mempunyai nilai mutlak sama karena keduanya dapat memiliki jarak yang sama dari $0$. Karena itu $|a| = |-a|$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 1',
        md: '$|7| = 7$ karena $7$ berada $7$ satuan dari $0$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 2',
        md: '$|-9| = -(-9) = 9$. Hasilnya positif karena jarak $-9$ dari $0$ adalah $9$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 3',
        md: 'Jika $x = -4$, maka $-x = 4$. Jadi $|x| = 4$, bukan $-4$.',
      },
      {
        kind: 'mistake',
        md: 'Jika isi tanda mutlak negatif, hasil nilai mutlak tidak ikut menjadi negatif. Tanda mutlak menghasilkan jarak, sehingga hasilnya selalu tidak negatif.',
      },
      {
        kind: 'checkpoint',
        md: '1. Berapa $|-12|$?\n2. Apakah mungkin $|x| = -3$?\n3. Untuk $x = -5$, cabang definisi mana yang dipakai?',
      },
      {
        kind: 'summary',
        md: 'Nilai mutlak adalah jarak dari $0$. Gunakan cabang $x$ untuk $x \\ge 0$ dan $-x$ untuk $x < 0$.',
      },
    ],
  },
  {
    id: 'p09-u2',
    number: 2,
    title: 'Jarak dari Suatu Titik dan Persamaan Geometris',
    pageFrom: 3,
    pageTo: 4,
    sections: [
      {
        kind: 'figure',
        title: '$|x - 3| = 5$: dua titik berjarak $5$ dari $3$',
        md: 'Garis bilangan dengan titik pusat $3$. Dua titik solusi ditandai: $-2$ di kiri dan $8$ di kanan, masing-masing berjarak $5$ satuan dari $3$.',
      },
      {
        kind: 'goal',
        md: 'Anda dapat membaca $|x - a|$ sebagai jarak dari $x$ ke titik $a$, lalu menyelesaikan persamaan $|x - a| = r$ melalui makna jarak.',
      },
      {
        kind: 'prereq',
        md: 'Jarak dua titik $p$ dan $q$ pada garis bilangan dapat ditulis $|p - q|$. Posisi di kiri dan kanan titik pusat sama-sama mungkin.',
      },
      {
        kind: 'concept',
        title: 'Penjelasan Konsep Lengkap',
        md: 'Bentuk $|x - a|$ menyatakan jarak antara titik $x$ dan titik $a$. Jadi $|x - 2| = 3$ berarti "titik $x$ berjarak 3 satuan dari 2". Ada satu titik 3 satuan di kanan 2 dan satu titik 3 satuan di kiri 2.',
      },
      {
        kind: 'main',
        md: 'Untuk $|x - a| = r$ dengan $r > 0$,\n\n$$x = a + r \\quad \\text{atau} \\quad x = a - r.$$\n\nUntuk $r = 0$, hanya ada satu solusi, yaitu $x = a$. Jika ruas kanan negatif, tidak ada solusi real karena jarak tidak negatif.',
      },
      {
        kind: 'why',
        md: 'Dua solusi muncul bukan karena aturan hafalan, melainkan karena dua titik berbeda dapat memiliki jarak yang sama dari sebuah pusat: satu di kiri dan satu di kanan.',
      },
      {
        kind: 'example',
        title: 'Worked Example 1',
        md: '$|x - 4| = 2$ berarti $x$ berjarak $2$ dari $4$. Jadi $x = 6$ atau $x = 2$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 2',
        md: '$|x + 3| = 4$ sama dengan $|x - (-3)| = 4$. Pusatnya $-3$, sehingga $x = 1$ atau $x = -7$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 3',
        md: '$|x - 7| = 0$ hanya memberi $x = 7$, sebab hanya titik $7$ yang berjarak $0$ dari $7$.',
      },
      {
        kind: 'mistake',
        md: 'Pada $|x + 3|$, titik acuannya adalah $-3$, bukan $3$. Tuliskan sebagai $|x - (-3)|$ jika perlu.',
      },
      {
        kind: 'checkpoint',
        md: '1. Apa arti $|x - 5| = 2$?\n2. Selesaikan $|x - 1| = 8$.\n3. Berapa banyak solusi $|x + 2| = 0$?',
      },
      {
        kind: 'summary',
        md: '$|x - a|$ adalah jarak dari $x$ ke $a$. Persamaan jarak positif biasanya memberi dua titik yang simetris terhadap $a$.',
      },
    ],
  },
  {
    id: 'p09-u3',
    number: 3,
    title: 'Persamaan Nilai Mutlak dengan Definisi dan Dua Kasus',
    pageFrom: 5,
    pageTo: 6,
    sections: [
      {
        kind: 'goal',
        md: 'Anda dapat menyelesaikan persamaan nilai mutlak dengan membagi kasus sesuai tanda ekspresi di dalam tanda mutlak dan memeriksa konsistensi hasil dengan syarat kasus.',
      },
      {
        kind: 'prereq',
        md: 'Gunakan definisi $|u| = u$ bila $u \\ge 0$ dan $|u| = -u$ bila $u < 0$. Setelah tanda mutlak dibuka, selesaikan persamaan linear seperti pada P04.',
      },
      {
        kind: 'concept',
        title: 'Penjelasan Konsep Lengkap',
        md: 'Jika isi tanda mutlak berupa ekspresi, misalnya $2x - 1$, kita dapat membagi penyelesaian menjadi dua kasus. Setiap kasus memiliki syarat sendiri. Hasil akhir perlu diperiksa agar benar-benar berada pada kasus yang digunakan.',
      },
      {
        kind: 'main',
        md: 'Untuk persamaan $|2x - 1| = 7$:\n\n**Kasus 1:** $2x - 1 \\ge 0$. Maka $|2x - 1| = 2x - 1$, sehingga $2x - 1 = 7 \\Rightarrow x = 4$. Nilai ini memenuhi syarat kasus.\n\n**Kasus 2:** $2x - 1 < 0$. Maka $|2x - 1| = -(2x - 1)$, sehingga $-2x + 1 = 7 \\Rightarrow x = -3$. Nilai ini juga memenuhi syarat kasus.\n\nJadi himpunan penyelesaiannya $\\{-3, 4\\}$.',
      },
      {
        kind: 'why',
        md: 'Pembagian kasus bukan prosedur terpisah dari makna jarak. Ia adalah cara aljabar untuk mewakili dua sisi pada garis bilangan.',
      },
      {
        kind: 'example',
        title: 'Worked Example 1',
        md: 'Selesaikan $|x + 2| = 6$. Dua kasus memberi $x + 2 = 6 \\Rightarrow x = 4$ dan $-(x + 2) = 6 \\Rightarrow x = -8$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 2',
        md: 'Selesaikan $|3x - 3| = 9$. Diperoleh $3x - 3 = 9 \\Rightarrow x = 4$ atau $3x - 3 = -9 \\Rightarrow x = -2$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 3',
        md: 'Untuk setiap kandidat, substitusi kembali ke persamaan asal. Pada contoh kedua, $|3(4) - 3| = 9$ dan $|3(-2) - 3| = 9$, sehingga keduanya valid.',
      },
      {
        kind: 'mistake',
        md: 'Jangan berhenti setelah memperoleh satu persamaan. Nilai mutlak yang sama dengan bilangan positif memiliki dua kemungkinan tanda pada ekspresi di dalamnya.',
      },
      {
        kind: 'checkpoint',
        md: '1. Selesaikan $|x - 6| = 4$.\n2. Apa syarat kasus ketika $|2x + 5|$ dibuka menjadi $-(2x + 5)$?\n3. Mengapa substitusi kembali berguna?',
      },
      {
        kind: 'summary',
        md: 'Definisi nilai mutlak menghasilkan dua kasus. Selesaikan masing-masing kasus dan periksa bahwa hasilnya sesuai syarat.',
      },
    ],
  },
  {
    id: 'p09-u4',
    number: 4,
    title: 'Bentuk Cepat Persamaan dan Kasus Tanpa Solusi',
    pageFrom: 6,
    pageTo: 8,
    sections: [
      {
        kind: 'goal',
        md: 'Anda dapat menggunakan bentuk cepat $|u| = k$ dan segera mengenali kapan persamaan nilai mutlak tidak mempunyai solusi real.',
      },
      {
        kind: 'prereq',
        md: 'Anda sudah memahami bahwa nilai mutlak tidak negatif dan bahwa persamaan dengan ruas kanan positif mewakili dua jarak yang sama.',
      },
      {
        kind: 'concept',
        title: 'Penjelasan Konsep Lengkap',
        md: 'Dari makna jarak dan definisi dua kasus, kita memperoleh aturan cepat. Jika $k > 0$, maka ekspresi di dalam nilai mutlak dapat bernilai $k$ atau $-k$. Jika $k = 0$, kedua kemungkinan bertemu menjadi satu. Jika $k < 0$, tidak ada nilai real yang dapat memenuhi persamaan.',
      },
      {
        kind: 'main',
        md: '$$|u| = k \\iff u = k \\text{ atau } u = -k, \\quad k \\ge 0.$$\n\nJika $k < 0$, persamaan $|u| = k$ tidak mempunyai solusi real.',
      },
      {
        kind: 'why',
        md: 'Aturan cepat bukan aturan baru. Ia hanya bentuk ringkas dari dua kasus yang sudah dipahami. Karena itu, sebelum menggunakannya, selalu lihat tanda ruas kanan.',
      },
      {
        kind: 'example',
        title: 'Worked Example 1',
        md: '$|3x + 2| = 8$ memberi $3x + 2 = 8 \\Rightarrow x = 2$ atau $3x + 2 = -8 \\Rightarrow x = -\\dfrac{10}{3}$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 2',
        md: '$|5 - 2x| = 3$ memberi $5 - 2x = 3 \\Rightarrow x = 1$ atau $5 - 2x = -3 \\Rightarrow x = 4$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 3',
        md: '$|x + 7| = -2$ tidak mempunyai solusi real. Tidak perlu membentuk dua persamaan karena ruas kanan sudah bertentangan dengan sifat $|u| \\ge 0$.',
      },
      {
        kind: 'mistake',
        md: 'Jangan membuat "$u = k$ atau $u = -k$" jika $k$ negatif. Langkah pertama adalah memeriksa apakah ruas kanan memungkinkan.',
      },
      {
        kind: 'checkpoint',
        md: '1. Selesaikan $|2x - 4| = 10$.\n2. Berapa banyak solusi $|x - 3| = 0$?\n3. Apakah $|4x + 1| = -5$ memiliki solusi?',
      },
      {
        kind: 'summary',
        md: 'Untuk ruas kanan tidak negatif, ubah $|u| = k$ menjadi $u = \\pm k$. Ruas kanan negatif berarti tidak ada solusi real.',
      },
    ],
  },
  {
    id: 'p09-u5',
    number: 5,
    title: 'Pertidaksamaan Nilai Mutlak: Daerah di Antara Dua Batas',
    pageFrom: 8,
    pageTo: 9,
    sections: [
      {
        kind: 'note',
        title: 'Ilustrasi materi',
        md: 'Halaman sumber menampilkan kotak ilustrasi, tetapi gambar tidak termuat di aplikasi asal (hanya tampil sebagai ikon gambar rusak dengan label "Ilustrasi materi"). Tidak ada isi gambar yang dapat ditranskrip.',
      },
      {
        kind: 'goal',
        md: 'Anda dapat menyelesaikan pertidaksamaan nilai mutlak bertanda lebih kecil dan menuliskan hasilnya sebagai pertidaksamaan majemuk maupun interval.',
      },
      {
        kind: 'prereq',
        md: 'Ingat bahwa $|x - a|$ adalah jarak dari $x$ ke $a$. "Kurang dari $r$" berarti titik harus berada lebih dekat daripada radius $r$.',
      },
      {
        kind: 'concept',
        title: 'Penjelasan Konsep Lengkap',
        md: 'Jika $|x - a| < r$ dengan $r > 0$, titik $x$ harus berada di antara dua batas yang masing-masing berjarak $r$ dari $a$. Batas kiri adalah $a - r$ dan batas kanan adalah $a + r$.',
      },
      {
        kind: 'note',
        title: 'Matematika Utama',
        md: 'Rumus bentuk ketat tampil **rusak** pada sumber asli: halaman tercetak menampilkan kode mentah `\\[|x-a|` dengan sisa pertidaksamaan terpotong, sehingga tidak terbaca.\n\nBentuk tidak ketat pada sumber tercetak dengan benar:\n\n$$|x - a| \\le r \\iff a - r \\le x \\le a + r.$$\n\nMengikuti uraian prosa pada bagian yang sama (batas kiri $a - r$, batas kanan $a + r$, solusi "di antara dua batas"), bentuk ketat yang dimaksud adalah $|x - a| < r \\iff a - r < x < a + r$. Penyelesaian semua contoh di bawah ini juga konsisten dengan bentuk tersebut.',
      },
      {
        kind: 'example',
        title: 'Interval',
        md: 'Interval untuk bentuk pertama adalah $(a - r,\\ a + r)$, sedangkan bentuk kedua adalah $[a - r,\\ a + r]$.',
      },
      {
        kind: 'why',
        md: 'Kata kunci adalah **di antara**. Semua titik yang jaraknya dari pusat kurang dari radius berada di bagian dalam dua batas.',
      },
      {
        kind: 'example',
        title: 'Worked Example 1',
        md: '$|x - 2| < 3 \\Rightarrow -3 < x - 2 < 3 \\Rightarrow -1 < x < 5$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 2',
        md: '$|x + 4| \\le 2$ berarti $|x - (-4)| \\le 2$, sehingga $-6 \\le x \\le -2$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 3',
        md: '$|2x - 6| < 4 \\Rightarrow -4 < 2x - 6 < 4 \\Rightarrow 2 < 2x < 10 \\Rightarrow 1 < x < 5$.',
      },
      {
        kind: 'mistake',
        md: 'Tanda $<$ atau $\\le$ menghasilkan satu daerah di antara dua batas, bukan dua daerah terpisah.',
      },
      {
        kind: 'checkpoint',
        md: '1. Selesaikan $|x - 5| < 1$.\n2. Tuliskan $2 \\le x \\le 8$ sebagai interval.\n3. Apa perbedaan titik batas untuk $<$ dan $\\le$?',
      },
      {
        kind: 'summary',
        md: 'Pertidaksamaan nilai mutlak bertanda lebih kecil menyatakan jarak yang dibatasi dari atas, sehingga solusi berada di antara dua batas.',
      },
    ],
  },
  {
    id: 'p09-u6',
    number: 6,
    title: 'Pertidaksamaan Nilai Mutlak: Daerah di Luar Dua Batas',
    pageFrom: 10,
    pageTo: 11,
    sections: [
      {
        kind: 'figure',
        title: '$|x + 1| > 4$: solusi berada di luar $-5$ dan $3$',
        md: 'Garis bilangan dengan pusat $-1$. Dua titik batas terbuka ditandai pada $-5$ dan $3$, dengan daerah solusi di sebelah kiri $-5$ dan di sebelah kanan $3$.',
      },
      {
        kind: 'goal',
        md: 'Anda dapat menyelesaikan pertidaksamaan nilai mutlak bertanda lebih besar dan menuliskan solusi sebagai gabungan dua daerah.',
      },
      {
        kind: 'prereq',
        md: 'Jika jarak dari pusat harus lebih besar daripada radius tertentu, titik tidak boleh berada di bagian dalam interval radius tersebut.',
      },
      {
        kind: 'concept',
        title: 'Penjelasan Konsep Lengkap',
        md: 'Untuk $|x - a| > r$ dengan $r > 0$, titik $x$ harus berada lebih jauh daripada $r$ dari $a$. Artinya, $x$ berada di kiri batas $a - r$ atau di kanan batas $a + r$.',
      },
      {
        kind: 'note',
        title: 'Matematika Utama',
        md: 'Rumus bentuk ketat tampil **rusak** pada sumber asli: halaman tercetak menampilkan `\\[|x-a|>r\\iff xa+r.\\]` sehingga bagian "$x < a - r$ atau $x > a + r$" hilang dan tidak terbaca.\n\nBentuk tidak ketat pada sumber tercetak dengan benar:\n\n$$|x - a| \\ge r \\iff x \\le a - r \\text{ atau } x \\ge a + r.$$\n\nMengikuti uraian prosa pada bagian yang sama ("$x$ berada di kiri batas $a - r$ atau di kanan batas $a + r$"), bentuk ketat yang dimaksud adalah $|x - a| > r \\iff x < a - r \\text{ atau } x > a + r$. Penyelesaian contoh di bawah konsisten dengan bentuk tersebut.',
      },
      {
        kind: 'why',
        md: 'Kata kunci adalah **di luar**. Karena garis bilangan mempunyai dua arah, daerah luar terdiri atas dua bagian yang terpisah.',
      },
      {
        kind: 'example',
        title: 'Worked Example 1',
        md: '$|x + 1| > 4 \\Rightarrow x + 1 < -4$ atau $x + 1 > 4$, sehingga $x < -5$ atau $x > 3$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 2',
        md: '$|x + 2| \\ge 3 \\Rightarrow x \\le -5$ atau $x \\ge 1$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 3',
        md: '$|2x - 4| > 6 \\Rightarrow |x - 2| > 3 \\Rightarrow x < -1$ atau $x > 5$.',
      },
      {
        kind: 'mistake',
        md: 'Tanda $>$ atau $\\ge$ tidak menghasilkan pertidaksamaan majemuk "di antara". Solusi justru berada di luar dan menggunakan kata "atau".',
      },
      {
        kind: 'checkpoint',
        md: '1. Selesaikan $|x - 3| > 2$.\n2. Selesaikan $|x + 1| \\ge 4$.\n3. Mengapa jawabannya berupa dua daerah?',
      },
      {
        kind: 'summary',
        md: 'Pertidaksamaan nilai mutlak bertanda lebih besar menyatakan jarak minimum, sehingga solusi berada di luar dua batas.',
      },
    ],
  },
  {
    id: 'p09-u7',
    number: 7,
    title: 'Memilih Strategi, Cara Kuadrat, dan Diagnosis Kesalahan',
    pageFrom: 11,
    pageTo: 13,
    sections: [
      {
        kind: 'goal',
        md: 'Anda dapat memilih strategi penyelesaian yang sesuai, menggunakan cara menguadratkan kedua ruas pada bentuk yang aman, dan mendiagnosis kesalahan umum pada persamaan/pertidaksamaan nilai mutlak.',
      },
      {
        kind: 'prereq',
        md: 'Anda sudah menguasai makna jarak, definisi dua kasus, aturan cepat persamaan, serta pola "di antara" dan "di luar".',
      },
      {
        kind: 'concept',
        title: 'Penjelasan Konsep Lengkap',
        md: 'Sumber menampilkan beberapa cara: makna jarak, definisi, dua kasus, dan menguadratkan kedua ruas. Tidak semua soal membutuhkan cara yang sama. Untuk bentuk langsung $|x - a| < r$ atau $|x - a| > r$, makna jarak biasanya paling singkat. Cara kuadrat dapat dipakai bila kedua ruas memang tidak negatif dan hasil kuadrat lebih mudah ditangani.',
      },
      {
        kind: 'main',
        md: 'Jika $r \\ge 0$, maka hubungan $|u|$ dan $r$ dapat dibandingkan melalui kuadrat karena keduanya tidak negatif. Misalnya\n\n$$|2x + 3| > 3 \\iff (2x + 3)^2 > 9.$$\n\nKemudian\n\n$$4x^2 + 12x + 9 > 9 \\iff 4x(x + 3) > 0 \\iff x < -3 \\text{ atau } x > 0.$$',
      },
      {
        kind: 'why',
        md: 'Menguadratkan bukan tujuan utama; ia hanyalah representasi alternatif. Sebelum menguadratkan, periksa tanda ruas kanan. Jika ruas kanan negatif, sifat tidak negatif dari nilai mutlak sering sudah menyelesaikan soal.',
      },
      {
        kind: 'example',
        title: 'Worked Example 1',
        md: '$|x - 4| < 2$ paling cepat dibaca sebagai jarak: $x$ berjarak kurang dari $2$ dari $4$, sehingga $-2 < x - 4 < 2$ dan $2 < x < 6$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 2',
        md: '$|2x + 1| > 5$ dapat dibaca langsung: $2x + 1 > 5$ atau $2x + 1 < -5$, sehingga $x > 2$ atau $x < -3$.',
      },
      {
        kind: 'diagnosis',
        title: 'Worked Example 3 — Diagnosis',
        md: 'Seorang mahasiswa menulis $|x - 2| > 4 \\Rightarrow -2 < x < 6$. Kesalahannya: tanda $>$ berarti daerah **di luar**, bukan "di antara". Jawaban yang benar adalah $x - 2 < -4$ atau $x - 2 > 4$, yaitu $x < -2$ atau $x > 6$.',
      },
      {
        kind: 'mistake',
        md: 'Empat kesalahan utama P09: menganggap nilai mutlak dari bilangan negatif tetap negatif; mengambil hanya satu cabang persamaan; menukar pola "di antara" dan "di luar"; serta mengabaikan bahwa ruas kanan negatif dapat membuat persamaan mustahil.',
      },
      {
        kind: 'checkpoint',
        md: '1. Metode apa yang paling singkat untuk $|x - 3| < 5$?\n2. Mengapa $|u| = -1$ tidak perlu dikuadratkan?\n3. Perbaiki: $|x + 2| > 3 \\Rightarrow -5 < x < 1$.',
      },
      {
        kind: 'summary',
        md: 'Pilih cara yang paling jelas. Makna jarak adalah fondasi; definisi/dua kasus memberi dasar aljabar; kuadrat adalah alternatif bila syaratnya aman.',
      },
    ],
  },
]

const m: Module = {
  id: 'p09',
  code: 'P09',
  title: 'Nilai Mutlak, Persamaan, dan Pertidaksamaan',
  pageFrom: 1,
  pageTo: 13,
  units,
}

export default m
