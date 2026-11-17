import type { Exercise } from '../../types'

// P01 — Sistem Bilangan Real dan Sifatnya
// All source references point at the rendered page of p01.pdf.

const p01: Exercise[] = [
  // ------------------------------------------------------------------ Unit 1
  {
    id: 'p01-u1-e1',
    moduleId: 'p01',
    unitId: 'p01-u1',
    type: 'mc',
    difficulty: 'mudah',
    origin: 'source',
    prompt: 'Manakah urutan himpunan bilangan yang benar menurut sumber P01?',
    choices: [
      { id: 'a', md: '$N \\subset W \\subset I \\subset Q \\subset R$' },
      { id: 'b', md: '$W \\subset N \\subset I \\subset Q \\subset R$' },
      { id: 'c', md: '$N \\subset I \\subset W \\subset Q \\subset R$' },
      { id: 'd', md: '$I \\subset N \\subset W \\subset Q \\subset R$' },
    ],
    answer: 'a',
    explanation:
      'Sumber menuliskan hubungan bertingkat $N \\subset W \\subset I \\subset Q \\subset R$: setiap bilangan asli juga cacah, setiap cacah juga bulat, setiap bulat juga rasional, dan setiap rasional juga real. Perhatikan $W$ memuat $0$ sedangkan $N$ tidak, jadi $W$ tidak mungkin himpunan bagian dari $N$.',
    sourceRef: 'P01 hlm. 1–2',
  },
  {
    id: 'p01-u1-e2',
    moduleId: 'p01',
    unitId: 'p01-u1',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Menurut konvensi yang dipakai sumber P01, bilangan $0$ termasuk himpunan apa saja?',
    choices: [
      { id: 'a', md: '$W, I, Q, R$' },
      { id: 'b', md: '$N, W, I, Q, R$' },
      { id: 'c', md: '$I, Q, R$ saja' },
      { id: 'd', md: '$Q, R$ saja' },
    ],
    answer: 'a',
    explanation:
      'Sumber menyatakan angka $0$ **bukan** anggota $N$ menurut konvensinya, tetapi $0 \\in W, I, Q, R$. Untuk rasionalitas, $0 = 0/1$, sehingga $0$ tetap rasional.',
    sourceRef: 'P01 hlm. 3 (Worked Example 2 — Nol)',
  },
  {
    id: 'p01-u1-e3',
    moduleId: 'p01',
    unitId: 'p01-u1',
    type: 'tf',
    difficulty: 'mudah',
    origin: 'application',
    prompt:
      'Pernyataan: "Karena $5$ adalah bilangan bulat, maka $5$ bukan bilangan rasional."',
    answer: 'false',
    explanation:
      'Salah. Sumber justru menyatakan $I \\subset Q$: setiap bilangan bulat dapat ditulis $k/1$, sehingga $5 = 5/1$ adalah rasional. Ini kesalahan klasifikasi yang dibahas khusus di Unit 6 — klasifikasi lebih sempit tidak menghapus keanggotaan pada himpunan yang lebih luas.',
    sourceRef: 'P01 hlm. 3, hlm. 11–12',
  },
  {
    id: 'p01-u1-e4',
    moduleId: 'p01',
    unitId: 'p01-u1',
    type: 'short',
    difficulty: 'mudah',
    origin: 'source',
    prompt:
      'Klasifikasikan $-11$ dan tuliskan semua himpunan bilangan yang memuatnya, dipisahkan koma (gunakan huruf $N, W, I, Q, R$).',
    answer: ['I,Q,R', 'I, Q, R'],
    explanation:
      '$-11$ adalah bilangan bulat, jadi ia juga rasional dan real: $I, Q, R$. Ia bukan cacah ($W$) karena negatif, dan bukan asli ($N$).',
    sourceRef: 'P01 hlm. 3 (Checkpoint Unit 1)',
  },

  // ------------------------------------------------------------------ Unit 2
  {
    id: 'p01-u2-e1',
    moduleId: 'p01',
    unitId: 'p01-u2',
    type: 'mc',
    difficulty: 'mudah',
    origin: 'source',
    prompt: 'Manakah bilangan berikut yang **irasional**?',
    choices: [
      { id: 'a', md: '$\\sqrt{6}$' },
      { id: 'b', md: '$\\sqrt{25}$' },
      { id: 'c', md: '$0,125$' },
      { id: 'd', md: '$-12$' },
    ],
    answer: 'a',
    explanation:
      'Sumber menyebut $\\sqrt{6}$ tidak menyederhana menjadi bilangan rasional, sehingga diklasifikasikan irasional. Sebaliknya $\\sqrt{25} = 5$ rasional, $0,125 = 1/8$ rasional, dan $-12 = -12/1$ rasional.',
    sourceRef: 'P01 hlm. 3–4 (Worked Example 3)',
  },
  {
    id: 'p01-u2-e2',
    moduleId: 'p01',
    unitId: 'p01-u2',
    type: 'short',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Nyatakan $0,375$ sebagai pecahan paling sederhana (format $a/b$, tanpa spasi).',
    answer: ['3/8', '0,375', '0.375', '0,375=3/8'],
    explanation:
      '$0,375 = 375/1000$. Bagi pembilang dan penyebut dengan $125$: $375/1000 = 3/8$. Karena dapat ditulis sebagai hasil bagi dua bilangan bulat dengan penyebut tidak nol, $0,375$ rasional.',
    sourceRef: 'P01 hlm. 5 (Checkpoint Unit 2)',
  },
  {
    id: 'p01-u2-e3',
    moduleId: 'p01',
    unitId: 'p01-u2',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Mengapa $\\sqrt{49}$ **tidak** boleh langsung diklasifikasikan sebagai irasional hanya karena memakai simbol akar?',
    choices: [
      { id: 'a', md: 'Karena $\\sqrt{49} = 7$, sehingga ia bilangan asli, cacah, bulat, rasional, dan real.' },
      { id: 'b', md: 'Karena semua bilangan berakar selalu rasional.' },
      { id: 'c', md: 'Karena $\\sqrt{49}$ bukan bilangan real.' },
      { id: 'd', md: 'Karena $49$ adalah bilangan prima.' },
    ],
    answer: 'a',
    explanation:
      'Simbol akar tidak otomatis berarti irasional. Sumber menegaskan nilai $\\sqrt{49}$ adalah $7$, sehingga bukan irasional — ia masuk $N, W, I, Q, R$. Aturannya: sederhanakan bentuk sebelum memutuskan klasifikasi.',
    sourceRef: 'P01 hlm. 4–5 (Jangan Keliru, Ringkasan Unit 2)',
  },
  {
    id: 'p01-u2-e4',
    moduleId: 'p01',
    unitId: 'p01-u2',
    type: 'tf',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Pernyataan: "Desimal tak berhingga yang **tidak** berulang menggambarkan bilangan irasional."',
    answer: 'true',
    explanation:
      'Benar, dan ini dinyatakan sumber secara eksplisit: desimal berhingga atau berulang merupakan representasi bilangan rasional, sedangkan desimal tak berhingga yang tidak berulang menggambarkan bilangan irasional. Karena itu pola desimal dapat dipakai sebagai alat klasifikasi.',
    sourceRef: 'P01 hlm. 4 (Mengapa Pola Desimal Membantu?)',
  },

  // ------------------------------------------------------------------ Unit 3
  {
    id: 'p01-u3-e1',
    moduleId: 'p01',
    unitId: 'p01-u3',
    type: 'mc',
    difficulty: 'mudah',
    origin: 'source',
    prompt:
      'Dari $-2 < 4$, kedua ruas dikalikan $-3$. Hasil yang benar adalah:',
    choices: [
      { id: 'a', md: '$6 > -12$' },
      { id: 'b', md: '$6 < -12$' },
      { id: 'c', md: '$-6 < 12$' },
      { id: 'd', md: '$6 = -12$' },
    ],
    answer: 'a',
    explanation:
      'Mengalikan kedua ruas dengan bilangan negatif membalik arah tanda. $(-2)(-3) = 6$ dan $4(-3) = -12$, sehingga $6 > -12$. Sumber menampilkan ini sebagai contoh geometris: perkalian negatif memantulkan posisi terhadap $0$.',
    sourceRef: 'P01 hlm. 5–7 (Worked Example 3)',
  },
  {
    id: 'p01-u3-e2',
    moduleId: 'p01',
    unitId: 'p01-u3',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'application',
    prompt: 'Jika $p < q$, bagaimana perbandingan $-5p$ dan $-5q$?',
    choices: [
      { id: 'a', md: '$-5p > -5q$' },
      { id: 'b', md: '$-5p < -5q$' },
      { id: 'c', md: '$-5p = -5q$' },
      { id: 'd', md: 'Tidak dapat ditentukan' },
    ],
    answer: 'a',
    explanation:
      'Mengalikan pertidaksamaan dengan bilangan negatif ($-5$) membalik arah tanda. Karena $p < q$, maka $-5p > -5q$. Ini persis pertanyaan Checkpoint Unit 3 nomor 2.',
    sourceRef: 'P01 hlm. 7 (Checkpoint Unit 3)',
  },
  {
    id: 'p01-u3-e3',
    moduleId: 'p01',
    unitId: 'p01-u3',
    type: 'tf',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Pernyataan: "Arah tanda pertidaksamaan berbalik karena kedua ruas dipindahkan, bukan karena dikalikan bilangan negatif."',
    answer: 'false',
    explanation:
      'Salah. Sumber menegaskan pembalikan tanda **tidak** terjadi karena "memindahkan ruas". Ia terjadi khusus ketika kedua ruas dikalikan atau dibagi dengan bilangan negatif. Menambah/mengurangi nilai yang sama hanya menggeser kedua bilangan, sehingga urutan tetap.',
    sourceRef: 'P01 hlm. 7 (Jangan Keliru)',
  },
  {
    id: 'p01-u3-e4',
    moduleId: 'p01',
    unitId: 'p01-u3',
    type: 'mc',
    difficulty: 'sulit',
    origin: 'source',
    prompt:
      'Urutkan $-\\sqrt{9},\\; -2,\\; \\frac{1}{2},\\; \\sqrt{4}$ dari terkecil ke terbesar.',
    choices: [
      { id: 'a', md: '$-\\sqrt{9} < -2 < \\frac{1}{2} < \\sqrt{4}$' },
      { id: 'b', md: '$-2 < -\\sqrt{9} < \\frac{1}{2} < \\sqrt{4}$' },
      { id: 'c', md: '$-\\sqrt{9} < \\frac{1}{2} < -2 < \\sqrt{4}$' },
      { id: 'd', md: '$-2 < \\frac{1}{2} < -\\sqrt{9} < \\sqrt{4}$' },
    ],
    answer: 'a',
    explanation:
      'Sederhanakan dahulu: $-\\sqrt{9} = -3$, $-2$ tetap, $\\frac{1}{2} = 0{,}5$, $\\sqrt{4} = 2$. Urutannya $-3 < -2 < 0{,}5 < 2$, yaitu $-\\sqrt{9} < -2 < \\frac{1}{2} < \\sqrt{4}$. Ini Worked Example 4 dari sumber.',
    sourceRef: 'P01 hlm. 7 (Worked Example 4)',
  },

  // ------------------------------------------------------------------ Unit 4
  {
    id: 'p01-u4-e1',
    moduleId: 'p01',
    unitId: 'p01-u4',
    type: 'mc',
    difficulty: 'mudah',
    origin: 'source',
    prompt: 'Sifat apakah yang ditunjukkan oleh $x + y = y + x$?',
    choices: [
      { id: 'a', md: 'Komutatif penjumlahan' },
      { id: 'b', md: 'Asosiatif penjumlahan' },
      { id: 'c', md: 'Distributif' },
      { id: 'd', md: 'Elemen netral' },
    ],
    answer: 'a',
    explanation:
      'Komutatif mengubah **urutan** dua suku. Asosiatif mengubah pengelompokan (tanda kurung), bukan urutan. Distributif menyebarkan perkalian terhadap penjumlahan.',
    sourceRef: 'P01 hlm. 8 (bagian 1. Komutatif)',
  },
  {
    id: 'p01-u4-e2',
    moduleId: 'p01',
    unitId: 'p01-u4',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Bentuk $(x + y) + z = x + (y + z)$ menggunakan sifat apa?',
    choices: [
      { id: 'a', md: 'Asosiatif' },
      { id: 'b', md: 'Komutatif' },
      { id: 'c', md: 'Distributif' },
      { id: 'd', md: 'Kebalikan perkalian' },
    ],
    answer: 'a',
    explanation:
      'Asosiatif mengubah **pengelompokan** sementara urutan unsur tetap $x, y, z$. Sumber menekankan perbedaan ini secara eksplisit: komutatif mengubah urutan, asosiatif mengubah tanda kurung.',
    sourceRef: 'P01 hlm. 8 (bagian 2 & Jangan Keliru)',
  },
  {
    id: 'p01-u4-e3',
    moduleId: 'p01',
    unitId: 'p01-u4',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Manakah pernyataan distributif yang benar?',
    choices: [
      { id: 'a', md: '$3(x + 2) = 3x + 6$' },
      { id: 'b', md: '$3(x + 2) = 3x + 2$' },
      { id: 'c', md: '$3(x + 2) = x + 6$' },
      { id: 'd', md: '$3(x + 2) = 3x \\cdot 6$' },
    ],
    answer: 'a',
    explanation:
      'Faktor $3$ harus didistribusikan ke **kedua** suku di dalam kurung: $3 \\cdot x = 3x$ dan $3 \\cdot 2 = 6$. Sumber mendiagnosis $3(x+2)$ menjadi $3x + 2$ sebagai kesalahan distributif khas.',
    sourceRef: 'P01 hlm. 8, hlm. 12',
  },
  {
    id: 'p01-u4-e4',
    moduleId: 'p01',
    unitId: 'p01-u4',
    type: 'short',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Sebutkan nama sifat: $xy + xz = x(y + z)$ ditulis dalam arah terbalik. (satu kata)',
    answer: ['distributif', 'sifat distributif'],
    explanation:
      'Sumber menyatakan sifat distributif juga dapat dibaca terbalik: $xy + xz = x(y + z)$. Arah terbalik ini adalah dasar "menggabungkan suku sejenis dengan memfaktorkan".',
    sourceRef: 'P01 hlm. 8 (bagian 3), hlm. 12',
  },

  // ------------------------------------------------------------------ Unit 5
  {
    id: 'p01-u5-e1',
    moduleId: 'p01',
    unitId: 'p01-u5',
    type: 'mc',
    difficulty: 'mudah',
    origin: 'source',
    prompt: 'Pengurangan $a - b$ dapat ditulis sebagai penjumlahan dengan…',
    choices: [
      { id: 'a', md: 'lawan penjumlahan dari $b$, yaitu $a + (-b)$' },
      { id: 'b', md: 'kebalikan perkalian dari $b$, yaitu $a + \\frac{1}{b}$' },
      { id: 'c', md: 'elemen netral, yaitu $a + 0$' },
      { id: 'd', md: 'pangkat dari $b$, yaitu $a + b^2$' },
    ],
    answer: 'a',
    explanation:
      'Sumber menegaskan pengurangan bukan operasi terpisah: ia dibangun menggunakan **lawan** penjumlahan, $a - b = a + (-b)$. Kebalikan perkalian dipakai untuk pembagian, bukan pengurangan.',
    sourceRef: 'P01 hlm. 9–10 (bagian 1)',
  },
  {
    id: 'p01-u5-e2',
    moduleId: 'p01',
    unitId: 'p01-u5',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Pembagian $a \\div b$ (dengan $b \\neq 0$) ditulis sebagai perkalian dengan…',
    choices: [
      { id: 'a', md: 'kebalikan $b$, yaitu $a \\cdot \\frac{1}{b}$' },
      { id: 'b', md: 'lawan $b$, yaitu $a \\cdot (-b)$' },
      { id: 'c', md: 'kuadrat $b$, yaitu $a \\cdot b^2$' },
      { id: 'd', md: 'nol, yaitu $a \\cdot 0$' },
    ],
    answer: 'a',
    explanation:
      'Sumber menyatakan: jika $b \\neq 0$, maka pembagian adalah perkalian dengan kebalikan, $\\frac{a}{b} = a \\cdot \\frac{1}{b}$. Kebalikan $\\frac{1}{b}$ ada justru karena $b \\neq 0$ — inilah sebabnya pembagian dengan nol tidak didefinisikan.',
    sourceRef: 'P01 hlm. 9–10 (bagian 2 & Jangan Keliru)',
  },
  {
    id: 'p01-u5-e3',
    moduleId: 'p01',
    unitId: 'p01-u5',
    type: 'short',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Tentukan $x$ jika $x + 7 = 15$.',
    answer: ['8', 'x=8'],
    explanation:
      'Tambahkan lawan $7$, yaitu $-7$, pada kedua ruas: $x + 7 + (-7) = 15 + (-7)$, sehingga $x = 8$. Ini persis Worked Example 3 sumber.',
    sourceRef: 'P01 hlm. 10 (Worked Example 3)',
  },
  {
    id: 'p01-u5-e4',
    moduleId: 'p01',
    unitId: 'p01-u5',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Tentukan $x$ jika $5x = 20$.',
    choices: [
      { id: 'a', md: '$x = 4$' },
      { id: 'b', md: '$x = 15$' },
      { id: 'c', md: '$x = 25$' },
      { id: 'd', md: '$x = 100$' },
    ],
    answer: 'a',
    explanation:
      'Kalikan kedua ruas dengan kebalikan $5$, yaitu $\\frac{1}{5}$: $x = 20 \\cdot \\frac{1}{5} = 4$. Kebalikan $5$ ada karena $5 \\neq 0$ — syarat yang selalu menyertai rumus kebalikan.',
    sourceRef: 'P01 hlm. 10 (Worked Example 4)',
  },

  // ------------------------------------------------------------------ Unit 6
  {
    id: 'p01-u6-e1',
    moduleId: 'p01',
    unitId: 'p01-u6',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Langkah pertama menyederhanakan $4(x + 3) + 2x$ dibenarkan oleh sifat apa?',
    choices: [
      { id: 'a', md: 'Distributif' },
      { id: 'b', md: 'Komutatif' },
      { id: 'c', md: 'Asosiatif' },
      { id: 'd', md: 'Elemen netral' },
    ],
    answer: 'a',
    explanation:
      'Sumber menyatakan untuk $4(x+3) + 2x$ alasan pertama adalah **distributif**: angka $4$ dikalikan ke setiap suku dalam kurung, menghasilkan $4x + 12 + 2x$. Setelah itu suku sejenis digabung, yang secara struktural memakai distributif terbalik.',
    sourceRef: 'P01 hlm. 11–12',
  },
  {
    id: 'p01-u6-e2',
    moduleId: 'p01',
    unitId: 'p01-u6',
    type: 'mc',
    difficulty: 'sulit',
    origin: 'source',
    prompt: 'Dari $-3 < 8$, jika dikalikan $-2$, hasil yang benar adalah:',
    choices: [
      { id: 'a', md: '$6 > -16$' },
      { id: 'b', md: '$6 < -16$' },
      { id: 'c', md: '$-6 < 16$' },
      { id: 'd', md: '$6 > 16$' },
    ],
    answer: 'a',
    explanation:
      'Ini kesalahan ketidaksamaan yang didiagnosis sumber: hasilnya $6 > -16$, **bukan** $6 < -16$. Penyebabnya faktor pengali negatif, yang membalik arah tanda sekaligus mengubah kedua nilai.',
    sourceRef: 'P01 hlm. 12 (Diagnosis Kesalahan Ketidaksamaan)',
  },
  {
    id: 'p01-u6-e3',
    moduleId: 'p01',
    unitId: 'p01-u6',
    type: 'tf',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Pernyataan: "Kalau hasil akhir suatu langkah kebetulan benar, langkah itu sudah cukup dibenarkan."',
    answer: 'false',
    explanation:
      'Salah. Sumber menegaskan hasil akhir yang kebetulan benar belum cukup untuk membenarkan langkah yang salah — setiap transformasi harus sesuai sifat yang berlaku. Inilah alasan P01 menuntut alasan struktural, bukan hanya jawaban numerik.',
    sourceRef: 'P01 hlm. 12 (Jangan Keliru & Ringkasan Unit 6)',
  },
  {
    id: 'p01-u6-e4',
    moduleId: 'p01',
    unitId: 'p01-u6',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Klaim "$\\sqrt{8}$ irasional karena memakai simbol akar" perlu diperbaiki bagaimana?',
    choices: [
      {
        id: 'a',
        md: 'Periksa dulu apakah bentuknya menyederhana: $\\sqrt{8} = 2\\sqrt{2}$, dan $2\\sqrt{2}$ tetap irasional karena $\\sqrt{2}$ irasional.',
      },
      { id: 'b', md: 'Semua bilangan berakar rasional, jadi $\\sqrt{8}$ rasional.' },
      { id: 'c', md: 'Simbol akar selalu menghasilkan bilangan bulat.' },
      { id: 'd', md: '$\\sqrt{8}$ bukan bilangan real.' },
    ],
    answer: 'a',
    explanation:
      'Alasan yang benar bukan "karena ada simbol akar", melainkan hasil penyederhanaan. $\\sqrt{8} = 2\\sqrt{2}$; karena $\\sqrt{2}$ irasional dan perkalian dengan bilangan rasional tak nol mempertahankan irasionalitas, $\\sqrt{8}$ irasional. Bandingkan $\\sqrt{9} = 3$ yang justru rasional.',
    sourceRef: 'P01 hlm. 12 (Checkpoint Unit 6), hlm. 4',
  },
]

export default p01
