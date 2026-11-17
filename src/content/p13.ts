import type { Module, Unit } from '../types'

// P13 — Integral sebagai Antiturunan, Rumus Dasar, dan Teknik Substitusi

const units: Unit[] = [
  {
    id: 'p13-u1',
    number: 1,
    title: 'Integral sebagai Antiturunan dan Notasi Integral Tak Tentu',
    pageFrom: 1,
    pageTo: 3,
    sections: [
      {
        kind: 'figure',
        title: 'Turunan dan Antiturunan',
        md: 'Diagram dua arah:\n\n- **turunkan**: $F(x) + C \\longrightarrow f(x)$\n- **integralkan**: $f(x) \\longrightarrow F(x) + C$\n\nKeterangan: $F(x) + C$ adalah keluarga antiturunan, $f(x)$ adalah fungsi/integran.\n\n$$F\'(x) = f(x) \\iff \\int f(x)\\,dx = F(x) + C$$\n\nKonstanta $C$ wajib karena turunan setiap konstanta adalah $0$.',
      },
      {
        kind: 'goal',
        md: 'Anda dapat menjelaskan integral sebagai kebalikan dari turunan, mengenali antiturunan, membaca notasi integral tak tentu, dan menjelaskan mengapa konstanta $C$ harus muncul.',
      },
      {
        kind: 'prereq',
        md: 'Dari P11–P12, Anda sudah mengenal turunan. Hubungan itu sekarang dibaca secara terbalik: jika turunan suatu fungsi menghasilkan fungsi lain, maka fungsi semula merupakan antiturunan.',
      },
      {
        kind: 'concept',
        title: 'Penjelasan Konsep Lengkap',
        md: 'Fungsi $F$ disebut antiturunan dari $f$ apabila\n\n$$F\'(x) = f(x).$$\n\nIntegral tak tentu menyatakan seluruh keluarga antiturunan:\n\n$$\\int f(x)\\,dx = F(x) + C.$$\n\nDi sini $f(x)$ disebut **integran**, $dx$ menunjukkan variabel integrasi, dan $C$ adalah konstanta sembarang.',
      },
      {
        kind: 'why',
        title: 'Mengapa Harus Ada C?',
        md: 'Karena turunan konstanta adalah nol, fungsi $F(x)$, $F(x) + 1$, dan $F(x) - 10$ mempunyai turunan yang sama. Karena itu integral tak tentu tidak mewakili satu fungsi saja, tetapi keluarga fungsi yang berbeda sebesar konstanta.',
      },
      {
        kind: 'example',
        title: 'Worked Example 1',
        md: 'Karena $(x^4)\' = 4x^3$, maka\n\n$$\\int 4x^3\\,dx = x^4 + C.$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 2',
        md: '$x^3$, $x^3 + 2$, dan $x^3 - 10$ semuanya antiturunan dari $3x^2$, karena turunan ketiganya adalah $3x^2$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 3 — Cek Jawaban',
        md: 'Jika diperoleh $\\int f(x)\\,dx = F(x) + C$, turunkan kembali hasilnya. Jika $(F(x) + C)\' = f(x)$, jawaban konsisten.',
      },
      {
        kind: 'mistake',
        md: 'Integral tak tentu bukan satu nilai tunggal. Menuliskan jawaban tanpa $+C$ menghilangkan seluruh antiturunan lain yang berbeda hanya sebesar konstanta.',
      },
      {
        kind: 'checkpoint',
        md: '1. Apa syarat agar $F$ menjadi antiturunan dari $f$?\n2. Apa arti integran?\n3. Mengapa $+C$ wajib pada integral tak tentu?',
      },
      {
        kind: 'summary',
        md: 'Integral tak tentu adalah keluarga antiturunan: $F\'(x) = f(x)$ setara dengan $\\int f(x)\\,dx = F(x) + C$.',
      },
    ],
  },
  {
    id: 'p13-u2',
    number: 2,
    title: 'Aturan Pangkat, Jumlah, Selisih, dan Kelipatan Konstanta',
    pageFrom: 3,
    pageTo: 4,
    sections: [
      {
        kind: 'goal',
        md: 'Anda dapat menghitung integral polinomial dan bentuk berpangkat menggunakan aturan pangkat serta sifat linear integral.',
      },
      {
        kind: 'main',
        md: 'Untuk $n \\neq -1$,\n\n$$\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C.$$\n\nIntegral juga dapat dikerjakan suku demi suku:\n\n$$\\int [f(x) \\pm g(x)]\\,dx = \\int f(x)\\,dx \\pm \\int g(x)\\,dx,$$\n\n$$\\int k f(x)\\,dx = k \\int f(x)\\,dx.$$',
      },
      {
        kind: 'concept',
        title: 'Cara Membaca Aturan Pangkat',
        md: 'Tambah pangkat satu, lalu bagi dengan pangkat baru. Pengecualian penting adalah $n = -1$, yaitu integran $\\dfrac{1}{x}$; bentuk itu mempunyai rumus khusus pada unit berikutnya.',
      },
      {
        kind: 'example',
        title: 'Worked Example 1',
        md: '$$\\int 6x^2\\,dx = 6\\frac{x^3}{3} + C = 2x^3 + C.$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 2',
        md: '$$\\int (4x^3 - 6x + 5)\\,dx = x^4 - 3x^2 + 5x + C.$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 3',
        md: 'Tulis $\\dfrac{3}{x^2} = 3x^{-2}$. Maka\n\n$$\\int 3x^{-2}\\,dx = 3\\frac{x^{-1}}{-1} + C = -\\frac{3}{x} + C.$$',
      },
      {
        kind: 'diagnosis',
        title: 'Cek dengan Turunan',
        md: 'Turunan $-\\dfrac{3}{x}$ adalah $\\dfrac{3}{x^2}$, sehingga hasil Worked Example 3 benar.',
      },
      {
        kind: 'mistake',
        md: 'Pada $\\int x^4\\,dx$, hasilnya bukan $x^5 + C$, melainkan $\\dfrac{x^5}{5} + C$. Pembagian oleh pangkat baru tidak boleh hilang.',
      },
      {
        kind: 'checkpoint',
        md: '1. Apa syarat pada $n$ untuk aturan pangkat?\n2. Bagaimana mengintegralkan jumlah tiga suku?\n3. Mengapa $\\dfrac{1}{x}$ tidak diproses dengan aturan pangkat biasa?',
      },
      {
        kind: 'summary',
        md: 'Untuk pangkat selain $-1$, tambah satu pada pangkat lalu bagi dengan pangkat baru; gunakan linearitas untuk jumlah, selisih, dan kelipatan konstanta.',
      },
    ],
  },
  {
    id: 'p13-u3',
    number: 3,
    title: 'Rumus Dasar Integral yang Perlu Dikenali',
    pageFrom: 5,
    pageTo: 6,
    sections: [
      {
        kind: 'goal',
        md: 'Anda dapat menggunakan rumus integral dasar yang berasal dari pembalikan rumus turunan sebelumnya.',
      },
      {
        kind: 'main',
        title: 'Rumus Dasar',
        md: '$$\\int \\frac{1}{x}\\,dx = \\ln|x| + C,$$\n\n$$\\int \\sin x\\,dx = -\\cos x + C, \\quad \\int \\cos x\\,dx = \\sin x + C,$$\n\n$$\\int \\sec^2 x\\,dx = \\tan x + C, \\quad \\int \\csc^2 x\\,dx = -\\cot x + C,$$\n\n$$\\int \\sec x \\tan x\\,dx = \\sec x + C.$$',
      },
      {
        kind: 'why',
        title: 'Mengapa Rumus Ini Masuk Akal?',
        md: 'Integral dibaca sebagai kebalikan turunan. Karena $(\\sin x)\' = \\cos x$, maka $\\int \\cos x\\,dx = \\sin x + C$. Karena $(\\cos x)\' = -\\sin x$, maka antiturunan $\\sin x$ adalah $-\\cos x$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 1',
        md: '$$\\int (2\\cos x + 3\\sec^2 x)\\,dx = 2\\sin x + 3\\tan x + C.$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 2',
        md: '$$\\int \\frac{5}{x}\\,dx = 5\\ln|x| + C.$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 3',
        md: '$$\\int (4\\sin x - 2\\csc^2 x)\\,dx = -4\\cos x + 2\\cot x + C.$$',
      },
      {
        kind: 'mistake',
        md: 'Jangan memaksa $\\int \\dfrac{1}{x}\\,dx$ ke aturan pangkat karena pangkat $n = -1$ membuat penyebut $n+1$ menjadi nol. Gunakan $\\int \\dfrac{1}{x}\\,dx = \\ln|x| + C$.',
      },
      {
        kind: 'checkpoint',
        md: '1. Apa antiturunan $\\cos x$?\n2. Apa antiturunan $\\sec^2 x$?\n3. Mengapa $\\int \\sin x\\,dx$ bertanda negatif?',
      },
      {
        kind: 'summary',
        md: 'Rumus dasar integral dapat diverifikasi dengan menurunkan kembali hasilnya.',
      },
    ],
  },
  {
    id: 'p13-u4',
    number: 4,
    title: 'Memilih dan Menjalankan Substitusi Sederhana',
    pageFrom: 6,
    pageTo: 8,
    sections: [
      {
        kind: 'figure',
        title: 'Alur Teknik Substitusi',
        md: 'Lima langkah berurutan:\n\n1. Pilih $u = g(x)$\n2. Hitung $du = g\'(x)\\,dx$\n3. Ubah semua ke variabel $u$\n4. Integralkan dalam $u$\n5. Kembali ke $x$\n\nContoh struktur: $\\int 2x(x^2+1)^3\\,dx \\rightarrow u = x^2+1,\\ du = 2x\\,dx \\rightarrow \\int u^3\\,du \\rightarrow \\dfrac{u^4}{4} + C \\rightarrow \\dfrac{(x^2+1)^4}{4} + C$\n\nJangan meninggalkan campuran $x$ dan $u$ tanpa mengubah bagian yang tersisa.',
      },
      {
        kind: 'goal',
        md: 'Anda dapat mengenali jejak aturan rantai dan mengubah integral ke variabel baru secara konsisten.',
      },
      {
        kind: 'note',
        title: 'Ide Inti',
        md: 'Substitusi adalah kebalikan dari aturan rantai. Jika integran memuat fungsi dalam beserta faktor yang sebanding dengan turunannya, bagian dalam itu merupakan kandidat kuat untuk dimisalkan.',
      },
      {
        kind: 'concept',
        title: 'Urutan Kerja',
        md: '1. Pilih $u = g(x)$.\n2. Hitung $du = g\'(x)\\,dx$.\n3. Ubah **seluruh** integral ke variabel $u$.\n4. Integralkan terhadap $u$.\n5. Kembalikan $u$ ke bentuk $x$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 1',
        md: 'Untuk $\\int 2x(x^2 + 1)^3\\,dx$, ambil $u = x^2 + 1$, sehingga $du = 2x\\,dx$.\n\n$$\\int u^3\\,du = \\frac{u^4}{4} + C = \\frac{(x^2 + 1)^4}{4} + C.$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 2',
        md: 'Untuk $\\int 3(3x + 1)^5\\,dx$, ambil $u = 3x + 1$, $du = 3\\,dx$:\n\n$$\\int u^5\\,du = \\frac{(3x + 1)^6}{6} + C.$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 3',
        md: 'Untuk $\\int x(x^2 + 9)^2\\,dx$, ambil $u = x^2 + 9$, sehingga $du = 2x\\,dx$:\n\n$$\\frac{1}{2}\\int u^2\\,du = \\frac{(x^2 + 9)^3}{6} + C.$$',
      },
      {
        kind: 'concept',
        title: 'Kandidat Substitusi',
        md: '- $\\int 2x(x^2 + 1)^5\\,dx$: pilih $u = x^2 + 1$.\n- $\\int \\cos(3x)\\,dx$: pilih $u = 3x$.\n- $\\int x\\sqrt{x^2 + 4}\\,dx$: pilih $u = x^2 + 4$.\n- $\\int \\dfrac{2x+1}{x^2+x+5}\\,dx$: pilih $u = x^2 + x + 5$.',
      },
      {
        kind: 'mistake',
        md: 'Setelah memilih $u$, jangan meninggalkan campuran $x$ dan $u$ dalam satu integral tanpa mengubah bagian yang tersisa.',
      },
      {
        kind: 'checkpoint',
        md: '1. Apa hubungan substitusi dengan aturan rantai?\n2. Mengapa $du$ harus dihitung?\n3. Apa tanda bahwa substitusi belum selesai?',
      },
      {
        kind: 'summary',
        md: 'Pilih fungsi dalam, cari diferensialnya, ubah seluruh integral, integralkan, lalu kembali ke variabel semula.',
      },
    ],
  },
  {
    id: 'p13-u5',
    number: 5,
    title: 'Substitusi pada Pangkat Pecahan dan Bentuk Akar',
    pageFrom: 8,
    pageTo: 9,
    sections: [
      {
        kind: 'goal',
        md: 'Anda dapat mengubah bentuk akar atau pangkat pecahan ke variabel baru dan menurunkan relasi $x = x(u)$ serta $dx$ yang konsisten.',
      },
      {
        kind: 'concept',
        title: 'Penjelasan Konsep Lengkap',
        md: 'Pada beberapa bentuk akar, substitusi dipakai bukan hanya untuk mengganti ekspresi dalam kurung tetapi juga untuk mengubah hubungan antara $x$ dan variabel baru. Prinsipnya tetap sama: setelah substitusi, semua bagian integral harus dinyatakan dalam variabel baru.',
      },
      {
        kind: 'example',
        title: 'Contoh Struktural dari Sumber',
        md: 'Untuk bentuk yang memuat $\\sqrt[3]{x - 5}$, pilih $z = \\sqrt[3]{x - 5}$. Maka\n\n$$z^3 = x - 5, \\qquad x = z^3 + 5, \\qquad dx = 3z^2\\,dz.$$\n\nDengan demikian akar pangkat tiga berubah menjadi $z$, dan faktor $dx$ juga berubah menjadi bentuk dalam $z$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 1',
        md: 'Jika $u = \\sqrt{x - 2}$, maka $u^2 = x - 2$, sehingga $x = u^2 + 2$ dan $dx = 2u\\,du$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 2',
        md: 'Jika $u = \\sqrt[3]{x+1}$, maka $u^3 = x + 1$, sehingga\n\n$$x = u^3 - 1, \\quad dx = 3u^2\\,du.$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 3',
        md: 'Integral $\\int \\dfrac{x}{\\sqrt{x^2+9}}\\,dx$ dapat disederhanakan dengan $u = x^2 + 9$, $du = 2x\\,dx$:\n\n$$\\frac{1}{2}\\int u^{-1/2}\\,du = \\sqrt{u} + C = \\sqrt{x^2 + 9} + C.$$',
      },
      {
        kind: 'mistake',
        md: 'Jika variabel baru didefinisikan melalui akar, jangan lupa mengubah juga $dx$. Relasi $x = x(u)$ dibutuhkan agar integral tidak mencampur dua variabel.',
      },
      {
        kind: 'checkpoint',
        md: '1. Jika $u = \\sqrt{x-2}$, berapa $x$ dalam $u$?\n2. Jika $u = \\sqrt[3]{x+1}$, berapa $dx$?\n3. Mengapa $\\dfrac{x}{\\sqrt{x^2+9}}$ cocok untuk substitusi sederhana?',
      },
      {
        kind: 'summary',
        md: 'Pada substitusi akar, turunkan relasi balik $x = x(u)$ dan diferensial $dx$, lalu ubah seluruh integral.',
      },
    ],
  },
  {
    id: 'p13-u6',
    number: 6,
    title: 'Mengenali Pola Substitusi Trigonometri',
    pageFrom: 9,
    pageTo: 11,
    sections: [
      {
        kind: 'figure',
        title: 'Pola Substitusi Trigonometri untuk Bentuk Akar',
        md: 'Tiga pola:\n\n- $\\sqrt{a^2 + x^2}$ → pilih $x = a\\tan t$, karena $1 + \\tan^2 t = \\sec^2 t$. Contoh: $\\sqrt{9 + x^2}$.\n- $\\sqrt{a^2 - x^2}$ → pilih $x = a\\sin t$, karena $1 - \\sin^2 t = \\cos^2 t$. Contoh: $\\sqrt{16 - x^2}$.\n- $\\sqrt{x^2 - a^2}$ → pilih $x = a\\sec t$, karena $\\sec^2 t - 1 = \\tan^2 t$. Contoh: $\\sqrt{x^2 - 25}$.\n\nCatatan: P13 menekankan pengenalan pola dan langkah substitusi. Gunakan substitusi trigonometri hanya ketika bentuk akar sesuai dan cara aljabar sederhana tidak lebih efisien.',
      },
      {
        kind: 'goal',
        md: 'Anda dapat memilih substitusi trigonometri yang sesuai untuk tiga pola akar yang diperkenalkan pada P13.',
      },
      {
        kind: 'concept',
        title: 'Pola yang Digunakan',
        md: 'Sumber P13 memberikan tiga pola:\n\n$$\\sqrt{a^2 + x^2} \\Rightarrow x = a\\tan t,$$\n\n$$\\sqrt{a^2 - x^2} \\Rightarrow x = a\\sin t,$$\n\n$$\\sqrt{x^2 - a^2} \\Rightarrow x = a\\sec t.$$',
      },
      {
        kind: 'why',
        title: 'Mengapa Pola Ini Membantu?',
        md: 'Ketiga pilihan cocok dengan identitas $1 + \\tan^2 t = \\sec^2 t$, $1 - \\sin^2 t = \\cos^2 t$, dan $\\sec^2 t - 1 = \\tan^2 t$. Akar kemudian berubah menjadi bentuk trigonometri yang lebih sederhana.',
      },
      {
        kind: 'example',
        title: 'Worked Example 1 — Pengenalan Pola',
        md: 'Pada $\\sqrt{16 - x^2}$, $a = 4$ dan bentuknya $\\sqrt{a^2 - x^2}$, sehingga pilih $x = 4\\sin t$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 2',
        md: 'Pada $\\sqrt{9 + x^2}$, pilih $x = 3\\tan t$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 3',
        md: 'Pada $\\sqrt{x^2 - 25}$, pilih $x = 5\\sec t$.',
      },
      {
        kind: 'note',
        title: 'Batas P13',
        md: 'Fokus P13 adalah mengenali pola dan menjalankan substitusi yang sesuai. Latihan trigonometri yang panjang tetap mengikuti contoh buku; jangan memperluas ke metode integral lain yang baru dipelajari pada P14.',
      },
      {
        kind: 'mistake',
        md: 'Substitusi trigonometri bukan pilihan pertama untuk setiap integral berakar. Jika substitusi aljabar sederhana sudah menyelesaikan struktur, gunakan cara yang lebih langsung.',
      },
      {
        kind: 'checkpoint',
        md: '1. Substitusi apa untuk $\\sqrt{25 - x^2}$?\n2. Substitusi apa untuk $\\sqrt{x^2 - 36}$?\n3. Substitusi apa untuk $\\sqrt{4 + x^2}$?',
      },
      {
        kind: 'summary',
        md: 'Cocokkan bentuk akar dengan pola $a^2 + x^2$, $a^2 - x^2$, atau $x^2 - a^2$, lalu pilih $\\tan$, $\\sin$, atau $\\sec$.',
      },
    ],
  },
  {
    id: 'p13-u7',
    number: 7,
    title: 'Pemilihan Metode, Diagnosis Kesalahan, dan Verifikasi',
    pageFrom: 11,
    pageTo: 13,
    sections: [
      {
        kind: 'goal',
        md: 'Anda dapat memilih antara rumus dasar, substitusi aljabar, atau substitusi trigonometri, serta mendeteksi kesalahan prosedural utama pada P13.',
      },
      {
        kind: 'concept',
        title: 'Peta Keputusan',
        md: '1. **Kenali bentuk.** Jika langsung cocok dengan aturan pangkat atau rumus dasar, gunakan cara langsung.\n2. **Cari fungsi dalam.** Jika ada komposisi bersama turunannya, pertimbangkan substitusi $u = g(x)$.\n3. **Periksa bentuk akar khusus.** Jika cocok dengan tiga pola akar P13 dan substitusi aljabar sederhana tidak cukup, pertimbangkan substitusi trigonometri.\n4. **Ubah seluruh integral.** Jangan campur variabel.\n5. **Cek hasil.** Turunkan kembali antiturunan.',
      },
      {
        kind: 'example',
        title: 'Contoh Pemilihan',
        md: '- $\\int (2x^3 - 3x + 4)\\,dx$: aturan dasar langsung.\n- $\\int \\dfrac{3x^2}{x^3+1}\\,dx$: substitusi $u = x^3 + 1$.\n- $\\int x\\sqrt{x^2 + 4}\\,dx$: substitusi aljabar $u = x^2 + 4$, tidak perlu substitusi trigonometri.\n- Ekspresi dengan $\\sqrt{16 - x^2}$ tanpa jejak turunan bagian dalam yang menyederhanakan: pola trigonometri $x = 4\\sin t$ dapat dipertimbangkan.',
      },
      {
        kind: 'diagnosis',
        title: 'Diagnosis Kesalahan Sumber',
        md: '- $\\int x^4\\,dx = x^5 + C$ — salah karena faktor $\\dfrac{1}{5}$ hilang.\n- $\\int \\dfrac{1}{x}\\,dx$ tidak memakai aturan pangkat; hasilnya $\\ln|x| + C$.\n- Jika $u = x^2 + 1$, maka $du = 2x\\,dx$, bukan $2\\,dx$.\n- Setelah substitusi, integral tidak boleh dibiarkan memuat $x$ dan $u$ secara campur tanpa transformasi yang konsisten.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Verifikasi',
        md: 'Untuk\n\n$$\\int \\frac{3x^2}{x^3 + 1}\\,dx = \\ln|x^3 + 1| + C,$$\n\nturunan hasil adalah $\\dfrac{3x^2}{x^3+1}$, sehingga jawaban lolos cek.',
      },
      {
        kind: 'checkpoint',
        md: '1. Metode apa untuk integral polinomial murni?\n2. Kapan substitusi aljabar lebih tepat daripada trigonometri?\n3. Apa verifikasi paling sederhana untuk integral tak tentu?',
      },
      {
        kind: 'summary',
        md: 'Urutan aman P13: kenali bentuk → pilih aturan dasar jika cocok → cari substitusi jika ada fungsi dalam → ubah seluruh integral → integralkan → kembali ke variabel semula → cek dengan turunan.',
      },
    ],
  },
]

const m: Module = {
  id: 'p13',
  code: 'P13',
  title: 'Integral sebagai Antiturunan, Rumus Dasar, dan Teknik Substitusi',
  pageFrom: 1,
  pageTo: 13,
  units,
}

export default m
