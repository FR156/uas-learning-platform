import type { Module, Unit } from '../types'

// P11 — Definisi Turunan dan Aturan Dasar

const units: Unit[] = [
  {
    id: 'p11-u1',
    number: 1,
    title: 'Definisi Turunan dari Limit dan Hasil Bagi Selisih',
    pageFrom: 1,
    pageTo: 3,
    sections: [
      {
        kind: 'figure',
        title: 'Anatomi definisi turunan',
        md: 'Empat tahap berurutan: (1) **Pilih titik** $c$; (2) **Bentuk perubahan** $f(c + h) - f(c)$; (3) **Bagi dengan** $h$ sehingga diperoleh hasil bagi selisih $\\dfrac{f(c+h) - f(c)}{h}$; (4) **Ambil limit** $h \\to 0$.\n\nCatatan pada diagram: setelah disederhanakan, barulah $h \\to 0$. Jangan mengganti $h = 0$ pada bentuk awal karena penyebut masih $h$.',
      },
      {
        kind: 'goal',
        md: 'Anda dapat membaca definisi turunan pada suatu titik, mengenali hasil bagi selisih, dan menjelaskan mengapa limit baru dihitung setelah bentuk aljabarnya disederhanakan.',
      },
      {
        kind: 'prereq',
        md: 'Dari P10, ingat bahwa $\\lim_{h \\to 0}$ memeriksa perilaku suatu ekspresi ketika $h$ semakin dekat ke $0$. Nilai $h$ tidak harus langsung diganti dengan $0$ pada awal proses.',
      },
      {
        kind: 'concept',
        title: 'Penjelasan Konsep Lengkap',
        md: 'Untuk fungsi $f$, turunan pada titik $c$ didefinisikan sebagai fungsi baru yang diperoleh melalui limit\n\n$$f\'(c) = \\lim_{h \\to 0} \\frac{f(c + h) - f(c)}{h},$$\n\nasalkan limit tersebut ada. Bagian $\\dfrac{f(c+h) - f(c)}{h}$ disebut **hasil bagi selisih**. Pembilang mengukur perubahan nilai fungsi ketika input berubah dari $c$ menjadi $c + h$, sedangkan penyebut $h$ adalah perubahan inputnya.',
      },
      {
        kind: 'why',
        md: 'Definisi menunjukkan bahwa turunan bukan aturan hafalan yang berdiri sendiri. Aturan pangkat, jumlah, hasil kali, dan hasil bagi yang digunakan kemudian merupakan cara ringkas untuk memperoleh hasil yang konsisten dengan definisi limit.',
      },
      {
        kind: 'example',
        title: 'Worked Example 1',
        md: 'Untuk $f(x) = x^2 + 6$ pada $c = 3$:\n\n$$f\'(3) = \\lim_{h \\to 0} \\frac{(3+h)^2 + 6 - 15}{h} = \\lim_{h \\to 0} \\frac{6h + h^2}{h} = \\lim_{h \\to 0} (6 + h) = 6.$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 2',
        md: 'Untuk $f(x) = 2x + 1$:\n\n$$f\'(c) = \\lim_{h \\to 0} \\frac{2(c+h) + 1 - (2c + 1)}{h} = \\lim_{h \\to 0} \\frac{2h}{h} = 2.$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 3',
        md: 'Untuk $f(x) = x$, hasil bagi selisihnya $\\dfrac{(c+h) - c}{h} = 1$, sehingga $f\'(c) = 1$.',
      },
      {
        kind: 'mistake',
        md: 'Jangan mengganti $h = 0$ pada bentuk awal. Hal itu membuat penyebut $0$. Sederhanakan dahulu untuk $h \\neq 0$, kemudian ambil limit saat $h \\to 0$.',
      },
      {
        kind: 'checkpoint',
        md: '1. Apa penyebut pada definisi turunan?\n2. Bagian mana yang disebut hasil bagi selisih?\n3. Mengapa $h$ tidak langsung diganti $0$?',
      },
      {
        kind: 'summary',
        md: 'Turunan pada titik dibangun dari hasil bagi perubahan nilai fungsi terhadap perubahan input, lalu diambil limit ketika perubahan input menuju nol.',
      },
    ],
  },
  {
    id: 'p11-u2',
    number: 2,
    title: 'Menghitung Turunan dengan Definisi dan Membaca Notasi',
    pageFrom: 3,
    pageTo: 4,
    sections: [
      {
        kind: 'goal',
        md: 'Anda dapat menghitung turunan fungsi sederhana langsung dari definisi serta membedakan notasi turunan sebagai fungsi dan nilai turunan pada suatu titik.',
      },
      {
        kind: 'prereq',
        md: 'Gunakan pemfaktoran sederhana dan definisi dari Unit 1. Ingat bahwa setelah faktor dicoret, barulah limit $h \\to 0$ diterapkan.',
      },
      {
        kind: 'concept',
        title: 'Penjelasan Konsep Lengkap',
        md: 'Buku menggunakan beberapa notasi yang ekuivalen untuk turunan terhadap $x$: $f\'(x)$, $y\'$, $D_x y$, dan $\\dfrac{dy}{dx}$. Notasi $f\'(x)$ menyatakan **fungsi turunan**, sedangkan $f\'(2)$ menyatakan nilai fungsi turunan ketika $x = 2$.\n\nNotasi Leibniz $\\dfrac{dy}{dx}$ adalah notasi turunan. Buku juga mengingatkan bahwa $dy$ sendiri adalah diferensial, sehingga tidak boleh diperlakukan seolah-olah sama dengan $\\dfrac{dy}{dx}$.',
      },
      {
        kind: 'main',
        md: 'Jika $f(x) = x^2$, maka\n\n$$f\'(c) = \\lim_{h \\to 0} \\frac{(c+h)^2 - c^2}{h} = \\lim_{h \\to 0} (2c + h) = 2c.$$\n\nJadi $f\'(x) = 2x$, dan khususnya $f\'(2) = 4$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 1',
        md: 'Untuk $f(x) = x^2$, diperoleh $f\'(2) = 4$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 2',
        md: 'Untuk $f(x) = 3x + 2$, definisi memberi $f\'(1) = 3$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 3',
        md: 'Jika $f\'(x) = 3x^2 - 4$, maka $f\'(2) = 3(2)^2 - 4 = 8$. Ini nilai turunan pada titik, bukan fungsi baru yang berbeda.',
      },
      {
        kind: 'mistake',
        md: 'Bedakan $f\'(x)$, yang masih bergantung pada $x$, dari $f\'(a)$, yang merupakan satu nilai setelah $x = a$ disubstitusikan.',
      },
      {
        kind: 'checkpoint',
        md: '1. Sebutkan tiga notasi turunan terhadap $x$.\n2. Apa perbedaan $f\'(x)$ dan $f\'(3)$?\n3. Jika $f\'(x) = 5x - 1$, hitung $f\'(2)$.',
      },
      {
        kind: 'summary',
        md: 'Definisi menghasilkan fungsi turunan. Notasi dapat berbeda, tetapi maknanya sama; nilai turunan di titik diperoleh dengan mengevaluasi fungsi turunan pada titik itu.',
      },
    ],
  },
  {
    id: 'p11-u3',
    number: 3,
    title: 'Aturan Konstanta, Identitas, dan Pangkat',
    pageFrom: 4,
    pageTo: 5,
    sections: [
      {
        kind: 'goal',
        md: 'Anda dapat menggunakan aturan turunan konstanta, fungsi identitas, dan fungsi pangkat dengan benar.',
      },
      {
        kind: 'prereq',
        md: 'Ingat arti pangkat bilangan bulat positif dan operasi mengurangi pangkat satu satuan.',
      },
      {
        kind: 'concept',
        title: 'Penjelasan Konsep Lengkap',
        md: 'Menggunakan definisi limit untuk setiap soal benar tetapi tidak efisien. Untuk bentuk yang sering muncul, buku merangkum hasil definisi menjadi aturan dasar.',
      },
      {
        kind: 'main',
        md: '- Konstanta: $D_x(k) = 0$.\n- Identitas: $D_x(x) = 1$.\n- Pangkat: $D_x(x^n) = n x^{n-1}$, untuk $n$ bilangan bulat positif.',
      },
      {
        kind: 'why',
        md: 'Fungsi konstanta tidak berubah saat $x$ berubah, sehingga laju perubahannya $0$. Pada aturan pangkat, pangkat lama menjadi faktor pengali dan pangkat baru berkurang satu.',
      },
      {
        kind: 'example',
        title: 'Worked Example 1',
        md: '$$D_x(9) = 0.$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 2',
        md: '$$D_x(x^7) = 7x^6.$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 3',
        md: '$$D_x(x^2) = 2x.$$\n\nKesalahan umum adalah menulis hanya $x$ karena lupa faktor $2$.',
      },
      {
        kind: 'mistake',
        md: 'Aturan pangkat bukan sekadar "kurangi pangkat 1". Pangkat semula juga menjadi koefisien di depan.',
      },
      {
        kind: 'checkpoint',
        md: '1. Berapa turunan $14$?\n2. Berapa turunan $x$?\n3. Turunkan $x^8$.',
      },
      {
        kind: 'summary',
        md: 'Konstanta turunannya $0$, identitas turunannya $1$, dan $x^n$ diturunkan menjadi $n x^{n-1}$.',
      },
    ],
  },
  {
    id: 'p11-u4',
    number: 4,
    title: 'Kelipatan Konstanta, Jumlah, dan Selisih',
    pageFrom: 5,
    pageTo: 7,
    sections: [
      {
        kind: 'goal',
        md: 'Anda dapat menurunkan kombinasi polinom dengan aturan kelipatan konstanta, jumlah, dan selisih.',
      },
      {
        kind: 'prereq',
        md: 'Kuasai aturan konstanta dan pangkat dari Unit 3.',
      },
      {
        kind: 'concept',
        title: 'Penjelasan Konsep Lengkap',
        md: 'Jika suatu fungsi terdiri dari beberapa suku yang dijumlahkan atau dikurangkan, setiap suku dapat diturunkan secara terpisah. Koefisien tetap dipertahankan sebagai pengali.',
      },
      {
        kind: 'main',
        md: '$$D_x[k f(x)] = k f\'(x), \\quad D_x[f(x) + g(x)] = f\'(x) + g\'(x), \\quad D_x[f(x) - g(x)] = f\'(x) - g\'(x)$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 1',
        md: 'Jika $y = 5x^4 + 2x^2 - 3$, maka $y\' = 20x^3 + 4x$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 2',
        md: 'Jika $y = 7x^6 - 4x + 9$, maka $y\' = 42x^5 - 4$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 3',
        md: 'Jika $y = 3x^5 - 4x^3 + x^2 - 7$, maka $y\' = 15x^4 - 12x^2 + 2x$.',
      },
      {
        kind: 'why',
        md: 'Aturan ini membuat turunan polinom dapat dihitung suku demi suku. Konstanta yang berdiri sendiri hilang karena turunannya $0$, tetapi konstanta yang menjadi koefisien tetap mengalikan turunan sukunya.',
      },
      {
        kind: 'mistake',
        md: 'Jangan menghapus koefisien. Pada $5x^4$, angka $5$ tetap ada dan dikalikan hasil aturan pangkat.',
      },
      {
        kind: 'checkpoint',
        md: '1. Turunkan $3x^4 + 6x$.\n2. Turunkan $2x^3 - 8x^2 + 5$.\n3. Apa turunan konstanta pada akhir polinom?',
      },
      {
        kind: 'summary',
        md: 'Turunkan setiap suku secara terpisah, pertahankan koefisien sebagai pengali, dan ubah konstanta bebas menjadi $0$.',
      },
    ],
  },
  {
    id: 'p11-u5',
    number: 5,
    title: 'Aturan Hasil Kali',
    pageFrom: 7,
    pageTo: 8,
    sections: [
      {
        kind: 'goal',
        md: 'Anda dapat mengenali struktur hasil kali dua fungsi dan menerapkan aturan hasil kali tanpa menggantinya dengan perkalian turunan.',
      },
      {
        kind: 'prereq',
        md: 'Anda perlu dapat menurunkan masing-masing faktor dengan aturan dasar.',
      },
      {
        kind: 'concept',
        title: 'Penjelasan Konsep Lengkap',
        md: 'Untuk $y = f(x)g(x)$, turunan hasil kali mempunyai dua suku. Satu faktor diturunkan sementara faktor lain dipertahankan, kemudian perannya ditukar dan kedua hasil dijumlahkan.',
      },
      {
        kind: 'main',
        md: '$$(fg)\' = f\'g + fg\'.$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 1',
        md: 'Jika $y = (x^2 + 1)(x^3 - 2)$, maka\n\n$$y\' = (2x)(x^3 - 2) + (x^2 + 1)(3x^2).$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 2',
        md: 'Jika $y = x^2(x^3 + 1)$, maka $y\' = 2x(x^3 + 1) + x^2(3x^2) = 5x^4 + 2x$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 3',
        md: 'Jika fungsi dapat dikembangkan terlebih dahulu, hasilnya harus sama. Misalnya $x^2(x^3 + 1) = x^5 + x^2$, sehingga turunannya $5x^4 + 2x$.',
      },
      {
        kind: 'why',
        md: 'Dua faktor sama-sama dapat berubah ketika $x$ berubah. Karena itu kontribusi perubahan berasal dari perubahan faktor pertama dan perubahan faktor kedua.',
      },
      {
        kind: 'mistake',
        md: '$(fg)\' \\neq f\'g\'$ secara umum. Rumus yang benar adalah $f\'g + fg\'$.',
      },
      {
        kind: 'checkpoint',
        md: '1. Berapa banyak suku dalam aturan hasil kali?\n2. Turunkan $(x + 1)(x^2 + 2)$ tanpa menyederhanakan akhir.\n3. Mengapa $f\'g\'$ saja tidak cukup?',
      },
      {
        kind: 'summary',
        md: 'Pada hasil kali, turunkan faktor pertama dan pertahankan faktor kedua, lalu tambahkan faktor pertama dikali turunan faktor kedua.',
      },
    ],
  },
  {
    id: 'p11-u6',
    number: 6,
    title: 'Aturan Hasil Bagi',
    pageFrom: 8,
    pageTo: 9,
    sections: [
      {
        kind: 'goal',
        md: 'Anda dapat menggunakan aturan hasil bagi, menjaga urutan pembilang dengan benar, dan memeriksa syarat penyebut.',
      },
      {
        kind: 'prereq',
        md: 'Anda perlu dapat menurunkan pembilang dan penyebut secara terpisah.',
      },
      {
        kind: 'concept',
        title: 'Penjelasan Konsep Lengkap',
        md: 'Untuk $y = \\dfrac{f(x)}{g(x)}$, turunan tidak diperoleh dengan membagi turunan pembilang oleh turunan penyebut. Buku menggunakan aturan hasil bagi berikut.',
      },
      {
        kind: 'main',
        md: '$$\\left(\\frac{f}{g}\\right)\' = \\frac{f\'g - fg\'}{g^2}, \\quad g(x) \\neq 0.$$\n\nUrutannya penting: **turunan pembilang $\\times$ penyebut $-$ pembilang $\\times$ turunan penyebut**, lalu dibagi kuadrat penyebut.',
      },
      {
        kind: 'example',
        title: 'Worked Example 1',
        md: 'Untuk $y = \\dfrac{x}{x+1}$:\n\n$$y\' = \\frac{1(x + 1) - x(1)}{(x + 1)^2} = \\frac{1}{(x + 1)^2}.$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 2',
        md: 'Untuk $y = \\dfrac{x^2+1}{x+2}$:\n\n$$y\' = \\frac{2x(x + 2) - (x^2 + 1)}{(x + 2)^2}.$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 3',
        md: 'Untuk $y = \\dfrac{3x-1}{x^2+4}$:\n\n$$y\' = \\frac{3(x^2 + 4) - (3x - 1)(2x)}{(x^2 + 4)^2}.$$',
      },
      {
        kind: 'mistake',
        md: 'Jangan menulis $\\left(\\dfrac{f}{g}\\right)\' = \\dfrac{f\'}{g\'}$. Selain salah, bentuk itu dapat kehilangan informasi penting tentang fungsi semula. Pastikan juga penyebut fungsi asal tidak nol.',
      },
      {
        kind: 'checkpoint',
        md: '1. Apa penyebut pada rumus hasil bagi?\n2. Apa urutan dua suku pada pembilang?\n3. Syarat apa yang harus dipenuhi $g(x)$?',
      },
      {
        kind: 'summary',
        md: 'Aturan hasil bagi menggunakan $\\dfrac{f\'g - fg\'}{g^2}$, dengan penyebut fungsi asal tidak nol.',
      },
    ],
  },
  {
    id: 'p11-u7',
    number: 7,
    title: 'Memilih Aturan, Mengevaluasi Turunan, dan Mendiagnosis Kesalahan',
    pageFrom: 9,
    pageTo: 12,
    sections: [
      {
        kind: 'figure',
        title: 'Baca struktur fungsi sebelum memilih aturan',
        md: 'Peta keputusan berdasarkan bentuk fungsi:\n\n- $k$ → **konstanta**\n- $x^n$ → **pangkat**\n- $f \\pm g$ → **jumlah/selisih**\n- $k \\cdot f$ → **kelipatan konstanta**\n- $f \\cdot g$ → **hasil kali**\n- $f/g$ → **hasil bagi**\n\nCatatan pada diagram: pangkat di dalam faktor tidak otomatis berarti "aturan pangkat saja".',
      },
      {
        kind: 'goal',
        md: 'Anda dapat membaca struktur fungsi sebelum menghitung, memilih aturan utama yang sesuai, menggabungkan beberapa aturan bila diperlukan, dan mengevaluasi fungsi turunan pada titik tertentu.',
      },
      {
        kind: 'prereq',
        md: 'Kuasai Unit 3–6. Fokuskan perhatian pada operasi paling luar dari fungsi.',
      },
      {
        kind: 'concept',
        title: 'Penjelasan Konsep Lengkap',
        md: 'Pemilihan aturan dimulai dari struktur fungsi. Bentuk $k$ memakai aturan konstanta, $x^n$ memakai aturan pangkat, $f \\pm g$ memakai aturan jumlah/selisih, $k f$ memakai kelipatan konstanta, $f \\cdot g$ memakai hasil kali, dan $\\dfrac{f}{g}$ memakai hasil bagi.\n\nSebuah fungsi dapat memerlukan lebih dari satu aturan. Misalnya pada $(x^2 + 1)(x - 4)$, aturan utamanya adalah hasil kali; di dalam masing-masing faktor masih digunakan aturan pangkat, jumlah, dan konstanta.',
      },
      {
        kind: 'main',
        md: 'Setelah memperoleh $f\'(x)$, nilai turunan pada titik $a$ diperoleh dengan substitusi:\n\n$$f\'(a) = \\left. f\'(x) \\right|_{x=a}.$$',
      },
      {
        kind: 'example',
        title: 'Worked Example 1',
        md: 'Untuk $y = x^3 - 5x^2 + 2x$, struktur utamanya jumlah/selisih; hasilnya $y\' = 3x^2 - 10x + 2$.',
      },
      {
        kind: 'example',
        title: 'Worked Example 2',
        md: 'Untuk $y = (x^2 + 1)(x - 4)$, pilih aturan hasil kali terlebih dahulu.',
      },
      {
        kind: 'example',
        title: 'Worked Example 3',
        md: 'Jika $f(x) = 3x^2 - 2x$, maka $f\'(x) = 6x - 2$, sehingga $f\'(2) = 10$.',
      },
      {
        kind: 'diagnosis',
        title: 'Diagnosis Kesalahan',
        md: '- $D_x(5) = 5$ — salah; konstanta turunannya $0$.\n- $D_x(x^5) = x^4$ — salah; faktor $5$ hilang.\n- $(fg)\' = f\'g\'$ — salah; gunakan dua suku.\n- $\\left(\\dfrac{f}{g}\\right)\' = \\dfrac{f\'}{g\'}$ — salah; gunakan aturan hasil bagi lengkap.',
      },
      {
        kind: 'mistake',
        md: 'Jangan memilih aturan hanya karena melihat suatu pangkat di dalam fungsi. Baca operasi paling luar terlebih dahulu.',
      },
      {
        kind: 'checkpoint',
        md: '1. Aturan utama untuk $(3x + 1)(x^2 - 2)$?\n2. Jika $f(x) = x^4$, berapa $f\'(3)$?\n3. Apa kesalahan pada pernyataan $D_x(x^5) = x^4$?',
      },
      {
        kind: 'summary',
        md: 'Baca struktur → pilih aturan utama → turunkan bagian-bagiannya → sederhanakan bila perlu → evaluasi di titik jika diminta → periksa kesalahan aturan umum.',
      },
    ],
  },
]

const m: Module = {
  id: 'p11',
  code: 'P11',
  title: 'Definisi Turunan dan Aturan Dasar',
  pageFrom: 1,
  pageTo: 12,
  units,
}

export default m
