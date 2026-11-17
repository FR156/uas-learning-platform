import type { Exercise } from '../../types'

// P03 — Himpunan dan Operasinya
// Set membership/operations items follow the worked examples in p03.pdf.

const p03: Exercise[] = [
  // ------------------------------------------------------------------ Unit 1
  {
    id: 'p03-u1-e1',
    moduleId: 'p03',
    unitId: 'p03-u1',
    type: 'short',
    difficulty: 'mudah',
    origin: 'source',
    prompt: 'Berapa kardinalitas himpunan $C = \\{1, 3, 5, 7, 7\\}$?',
    answer: ['4'],
    explanation:
      'Anggota yang sama tidak dihitung berulang: $C = \\{1, 3, 5, 7\\}$, sehingga $|C| = 4$, bukan $5$. Sumber memakai contoh ini justru untuk menegaskan bahwa himpunan tidak menyimpan "duplikasi" sebagai anggota baru.',
    sourceRef: 'P03 hlm. 1–2 (Worked Example & Jangan Keliru)',
  },
  {
    id: 'p03-u1-e2',
    moduleId: 'p03',
    unitId: 'p03-u1',
    type: 'tf',
    difficulty: 'mudah',
    origin: 'source',
    prompt:
      'Pernyataan: Urutan penulisan anggota memengaruhi suatu himpunan.',
    answer: 'false',
    explanation:
      'Salah. Sumber menyatakan urutan penulisan tidak memengaruhi himpunan, dan anggota yang sama tidak dihitung berulang. Karena itu $\\{a, b, b, c\\} = \\{a, b, c\\}$ dengan $|B| = 3$.',
    sourceRef: 'P03 hlm. 1–2 (Ide Inti)',
  },
  {
    id: 'p03-u1-e3',
    moduleId: 'p03',
    unitId: 'p03-u1',
    type: 'mc',
    difficulty: 'mudah',
    origin: 'source',
    prompt:
      'Jika $A = \\{2, 4, 6, 8\\}$, pernyataan manakah yang benar?',
    choices: [
      { id: 'a', md: '$4 \\in A$ dan $5 \\notin A$' },
      { id: 'b', md: '$4 \\subset A$ dan $5 \\subset A$' },
      { id: 'c', md: '$4 \\in A$ dan $5 \\in A$' },
      { id: 'd', md: '$A \\in 4$' },
    ],
    answer: 'a',
    explanation:
      '$4$ adalah anggota $A$ sehingga $4 \\in A$. Karena $5$ tidak ada di $A$, ditulis $5 \\notin A$. Simbol $\\in$ dipakai untuk hubungan anggota–himpunan, bukan untuk hubungan antarhimpunan.',
    sourceRef: 'P03 hlm. 1 (Keanggotaan & Ide Inti)',
  },
  {
    id: 'p03-u1-e4',
    moduleId: 'p03',
    unitId: 'p03-u1',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Mengapa "kumpulan mahasiswa yang lahir di bulan Januari" dapat membentuk himpunan, sedangkan "kumpulan orang baik" tidak?',
    choices: [
      {
        id: 'a',
        md: 'Karena keanggotaan himpunan harus dapat ditentukan dengan jelas untuk setiap objek.',
      },
      { id: 'b', md: 'Karena himpunan harus berisi lebih dari tiga anggota.' },
      { id: 'c', md: 'Karena himpunan hanya boleh berisi bilangan.' },
      { id: 'd', md: 'Karena "orang baik" adalah himpunan kosong.' },
    ],
    answer: 'a',
    explanation:
      'Sumber menekankan: himpunan adalah kumpulan objek yang anggotanya dapat ditentukan dengan jelas — pertanyaannya harus dapat dijawab tegas, anggota atau bukan. "Lahir di bulan Januari" tegas; "orang baik" tidak.',
    sourceRef: 'P03 hlm. 1–2 (Himpunan Harus Memiliki Keanggotaan yang Jelas)',
  },

  // ------------------------------------------------------------------ Unit 2
  {
    id: 'p03-u2-e1',
    moduleId: 'p03',
    unitId: 'p03-u2',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Himpunan $B = \\{x \\in \\mathbb{Z} \\mid -2 \\le x < 3\\}$ secara tabulasi adalah:',
    choices: [
      { id: 'a', md: '$\\{-2, -1, 0, 1, 2\\}$' },
      { id: 'b', md: '$\\{-2, -1, 0, 1, 2, 3\\}$' },
      { id: 'c', md: '$\\{-1, 0, 1, 2, 3\\}$' },
      { id: 'd', md: '$\\{-2, -1, 0, 1\\}$' },
    ],
    answer: 'a',
    explanation:
      'Batas bawah $\\le$ menyertakan $-2$; batas atas $<$ tidak menyertakan $3$. Karena $x$ bilangan bulat, anggotanya $\\{-2, -1, 0, 1, 2\\}$.',
    sourceRef: 'P03 hlm. 3 (Worked Example)',
  },
  {
    id: 'p03-u2-e2',
    moduleId: 'p03',
    unitId: 'p03-u2',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Apa perbedaan $\\varnothing$ dan $\\{\\varnothing\\}$?',
    choices: [
      {
        id: 'a',
        md: '$\\varnothing$ mempunyai $0$ anggota, sedangkan $\\{\\varnothing\\}$ mempunyai $1$ anggota — yaitu himpunan kosong itu sendiri.',
      },
      { id: 'b', md: 'Keduanya sama saja, hanya beda penulisan.' },
      { id: 'c', md: '$\\varnothing$ mempunyai $1$ anggota dan $\\{\\varnothing\\}$ tidak punya anggota.' },
      { id: 'd', md: '$\\{\\varnothing\\}$ bukan himpunan.' },
    ],
    answer: 'a',
    explanation:
      'Sumber membedakan keduanya secara eksplisit: $\\varnothing$ memiliki $0$ anggota, sedangkan $\\{\\varnothing\\}$ memiliki $1$ anggota, yaitu himpunan kosong.',
    sourceRef: 'P03 hlm. 3 (Himpunan Kosong)',
  },
  {
    id: 'p03-u2-e3',
    moduleId: 'p03',
    unitId: 'p03-u2',
    type: 'tf',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Pernyataan: Himpunan semesta selalu tunggal untuk setiap pembicaraan.',
    answer: 'false',
    explanation:
      'Salah. Sumber menyatakan semesta $U$ memuat semua objek yang sedang dibicarakan, dan karena konteks dapat berbeda, semesta tidak harus tunggal. Untuk $A = \\{2,4,6\\}$, semesta bisa $\\{1,2,3,4,5,6\\}$ atau himpunan bilangan asli tertentu.',
    sourceRef: 'P03 hlm. 3 (Himpunan Semesta & Checkpoint)',
  },
  {
    id: 'p03-u2-e4',
    moduleId: 'p03',
    unitId: 'p03-u2',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Kapan tanda titik tiga (…) **tidak aman** dipakai dalam penulisan himpunan?',
    choices: [
      {
        id: 'a',
        md: 'Ketika pola anggotanya tidak jelas/tidak tunggal — sebaiknya gunakan pencirian.',
      },
      { id: 'b', md: 'Ketika himpunan berisi lebih dari sepuluh anggota.' },
      { id: 'c', md: 'Ketika himpunan berisi bilangan negatif.' },
      { id: 'd', md: 'Titik tiga selalu aman dipakai.' },
    ],
    answer: 'a',
    explanation:
      'Sumber: tanda titik tiga hanya aman bila pola anggota sudah jelas. Jika polanya tidak tunggal, gunakan pencirian (notasi pembentuk himpunan).',
    sourceRef: 'P03 hlm. 3 (Jangan Keliru)',
  },

  // ------------------------------------------------------------------ Unit 3
  {
    id: 'p03-u3-e1',
    moduleId: 'p03',
    unitId: 'p03-u3',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Diketahui $A = \\{1, 2\\}$, $B = \\{1, 2, 3\\}$, dan $C = \\{a, b\\}$. Pernyataan mana yang benar?',
    choices: [
      { id: 'a', md: '$A \\subseteq B$ dan $A \\sim C$, tetapi $A \\neq C$' },
      { id: 'b', md: '$A \\subseteq B$ dan $A = C$' },
      { id: 'c', md: '$A \\sim B$ dan $A \\subset C$' },
      { id: 'd', md: '$A \\subseteq C$ dan $B \\sim C$' },
    ],
    answer: 'a',
    explanation:
      'Setiap anggota $A$ ada di $B$, jadi $A \\subseteq B$. Keduanya punya kardinalitas sama ($|A| = |C| = 2$), jadi $A \\sim C$. Tetapi anggotanya berbeda, sehingga $A \\neq C$ — ekuivalen tidak berarti sama.',
    sourceRef: 'P03 hlm. 4–5 (Worked Example)',
  },
  {
    id: 'p03-u3-e2',
    moduleId: 'p03',
    unitId: 'p03-u3',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Dua himpunan disebut **lepas** apabila:',
    choices: [
      { id: 'a', md: '$A \\cap B = \\varnothing$' },
      { id: 'b', md: '$A \\cap B \\neq \\varnothing$' },
      { id: 'c', md: '$|A| = |B|$' },
      { id: 'd', md: '$A \\subseteq B$' },
    ],
    answer: 'a',
    explanation:
      'Lepas berarti tidak ada anggota bersama: $A \\cap B = \\varnothing$. Jika $A \\cap B \\neq \\varnothing$ tetapi tidak satu pun menjadi himpunan bagian yang lain, hubungannya disebut **bersilangan**.',
    sourceRef: 'P03 hlm. 4 (Lepas dan Bersilangan)',
  },
  {
    id: 'p03-u3-e3',
    moduleId: 'p03',
    unitId: 'p03-u3',
    type: 'tf',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Pernyataan: Jika $|A| = |B|$ maka pasti $A = B$.',
    answer: 'false',
    explanation:
      'Salah. $|A| = |B|$ hanya berarti ekuivalen ($A \\sim B$) — kardinalitasnya sama. Kesamaan menuntut anggotanya sama. Sumber: dari $A \\sim B$ belum tentu $A = B$.',
    sourceRef: 'P03 hlm. 5 (Diagnosis Penting)',
  },
  {
    id: 'p03-u3-e4',
    moduleId: 'p03',
    unitId: 'p03-u3',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      '$A \\subseteq B$ berarti setiap anggota $A$ juga anggota $B$. Kapan $A$ disebut **bagian sejati** dari $B$?',
    choices: [
      { id: 'a', md: 'Ketika $A \\subseteq B$ dan $A \\neq B$' },
      { id: 'b', md: 'Ketika $|A| = |B|$' },
      { id: 'c', md: 'Ketika $A \\cap B = \\varnothing$' },
      { id: 'd', md: 'Ketika $B \\subseteq A$' },
    ],
    answer: 'a',
    explanation:
      'Menurut sumber, jika $A \\subseteq B$ dan selain itu $A \\neq B$, maka $A$ disebut bagian sejati dari $B$, sering ditulis $A \\subset B$ sesuai konvensi sumber.',
    sourceRef: 'P03 hlm. 4 (Himpunan Bagian)',
  },

  // ------------------------------------------------------------------ Unit 4
  {
    id: 'p03-u4-e1',
    moduleId: 'p03',
    unitId: 'p03-u4',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Jika $A = \\{a, b\\}$, maka $\\mathcal{P}(A) = \\ldots$',
    choices: [
      { id: 'a', md: '$\\{\\varnothing, \\{a\\}, \\{b\\}, \\{a, b\\}\\}$' },
      { id: 'b', md: '$\\{\\{a\\}, \\{b\\}, \\{a, b\\}\\}$' },
      { id: 'c', md: '$\\{a, b, \\{a, b\\}\\}$' },
      { id: 'd', md: '$\\{\\varnothing, \\{a, b\\}\\}$' },
    ],
    answer: 'a',
    explanation:
      'Himpunan kuasa memuat **semua** himpunan bagian, termasuk $\\varnothing$ dan $A$ sendiri. Untuk $A = \\{a,b\\}$ ada $4$ subset, sehingga $|\\mathcal{P}(A)| = 4 = 2^2$.',
    sourceRef: 'P03 hlm. 5–6 (Definisi & Contoh)',
  },
  {
    id: 'p03-u4-e2',
    moduleId: 'p03',
    unitId: 'p03-u4',
    type: 'short',
    difficulty: 'mudah',
    origin: 'source',
    prompt:
      'Jika $|A| = 4$, berapa $|\\mathcal{P}(A)|$?',
    answer: ['16'],
    explanation:
      'Pola kardinalitas: $|\\mathcal{P}(A)| = 2^n$ dengan $n = |A|$. Untuk $n = 4$ hasilnya $2^4 = 16$.',
    sourceRef: 'P03 hlm. 6 (Pola Kardinalitas)',
  },
  {
    id: 'p03-u4-e3',
    moduleId: 'p03',
    unitId: 'p03-u4',
    type: 'tf',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Pernyataan: $\\varnothing$ selalu menjadi anggota $\\mathcal{P}(A)$ untuk setiap himpunan $A$.',
    answer: 'true',
    explanation:
      'Benar. $\\varnothing \\subseteq A$ selalu benar untuk setiap himpunan $A$, sehingga $\\varnothing$ selalu menjadi anggota himpunan kuasa $\\mathcal{P}(A)$.',
    sourceRef: 'P03 hlm. 6 (Jangan Keliru)',
  },
  {
    id: 'p03-u4-e4',
    moduleId: 'p03',
    unitId: 'p03-u4',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Mengapa $|\\mathcal{P}(A)| = 2^n$ ketika $|A| = n$?',
    choices: [
      {
        id: 'a',
        md: 'Karena setiap anggota punya dua pilihan — dimasukkan atau tidak — sehingga ada $n$ keputusan dua-pilihan.',
      },
      { id: 'b', md: 'Karena himpunan kuasa selalu berisi dua kali lipat anggota aslinya.' },
      { id: 'c', md: 'Karena $\\mathcal{P}(A)$ hanya memuat $\\varnothing$ dan $A$.' },
      { id: 'd', md: 'Karena setiap anggota dihitung dua kali.' },
    ],
    answer: 'a',
    explanation:
      'Sumber menjelaskan: setiap anggota $A$ mempunyai dua pilihan saat membentuk subset (dimasukkan atau tidak). Ada $n$ keputusan dua-pilihan, sehingga $|\\mathcal{P}(A)| = 2^n$.',
    sourceRef: 'P03 hlm. 6 (Pola Kardinalitas)',
  },

  // ------------------------------------------------------------------ Unit 5
  {
    id: 'p03-u5-e1',
    moduleId: 'p03',
    unitId: 'p03-u5',
    type: 'mc',
    difficulty: 'mudah',
    origin: 'source',
    prompt:
      'Dengan $U = \\{1,2,3,4,5,6\\}$, $A = \\{1,2,3,4\\}$, $B = \\{3,4,5\\}$, nilai $A \\cap B$ adalah:',
    choices: [
      { id: 'a', md: '$\\{3, 4\\}$' },
      { id: 'b', md: '$\\{1, 2, 3, 4, 5\\}$' },
      { id: 'c', md: '$\\{1, 2\\}$' },
      { id: 'd', md: '$\\{5\\}$' },
    ],
    answer: 'a',
    explanation:
      'Irisan memuat anggota yang berada di $A$ **dan** $B$ sekaligus, yaitu $3$ dan $4$. Gabungan $A \\cup B = \\{1,2,3,4,5\\}$ adalah jawaban untuk operasi yang berbeda.',
    sourceRef: 'P03 hlm. 6–7 (Worked Example)',
  },
  {
    id: 'p03-u5-e2',
    moduleId: 'p03',
    unitId: 'p03-u5',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Dengan data yang sama ($U = \\{1..6\\}$, $A = \\{1,2,3,4\\}$), nilai $A^c$ adalah:',
    choices: [
      { id: 'a', md: '$\\{5, 6\\}$' },
      { id: 'b', md: '$\\{1, 2, 3, 4\\}$' },
      { id: 'c', md: '$\\{3, 4\\}$' },
      { id: 'd', md: '$\\varnothing$' },
    ],
    answer: 'a',
    explanation:
      'Komplemen dihitung terhadap semesta: $A^c = U \\setminus A$, yaitu semua anggota semesta yang bukan anggota $A$. Yang tersisa hanya $5$ dan $6$.',
    sourceRef: 'P03 hlm. 6–7 (Komplemen & Worked Example)',
  },
  {
    id: 'p03-u5-e3',
    moduleId: 'p03',
    unitId: 'p03-u5',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Dengan $A = \\{1,2,3,4\\}$ dan $B = \\{3,4,5\\}$, nilai $A \\setminus B$ adalah:',
    choices: [
      { id: 'a', md: '$\\{1, 2\\}$' },
      { id: 'b', md: '$\\{5\\}$' },
      { id: 'c', md: '$\\{3, 4\\}$' },
      { id: 'd', md: '$\\{1, 2, 5\\}$' },
    ],
    answer: 'a',
    explanation:
      '$A \\setminus B$ memuat anggota $A$ yang **tidak** berada di $B$: dari $\\{1,2,3,4\\}$ buang $3$ dan $4$, menyisakan $\\{1,2\\}$. Sebaliknya $B \\setminus A = \\{5\\}$, yang menunjukkan selisih tidak komutatif.',
    sourceRef: 'P03 hlm. 6–7 (Selisih & Worked Example)',
  },
  {
    id: 'p03-u5-e4',
    moduleId: 'p03',
    unitId: 'p03-u5',
    type: 'tf',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Pernyataan: Selisih himpunan bersifat komutatif, $A \\setminus B = B \\setminus A$.',
    answer: 'false',
    explanation:
      'Salah. Sumber menegaskan operasi selisih tidak komutatif: umumnya $A \\setminus B \\neq B \\setminus A$. Pada contoh sumber, $A \\setminus B = \\{1,2\\}$ sedangkan $B \\setminus A = \\{5\\}$.',
    sourceRef: 'P03 hlm. 6–7 (Selisih)',
  },

  // ------------------------------------------------------------------ Unit 6
  {
    id: 'p03-u6-e1',
    moduleId: 'p03',
    unitId: 'p03-u6',
    type: 'mc',
    difficulty: 'sulit',
    origin: 'source',
    prompt:
      'Dengan $U = \\{1,2,3,4,5,6\\}$, $A = \\{1,2,3\\}$, $B = \\{3,4\\}$, nilai $(A \\cup B)^c$ adalah:',
    choices: [
      { id: 'a', md: '$\\{5, 6\\}$' },
      { id: 'b', md: '$\\{4, 5, 6\\}$' },
      { id: 'c', md: '$\\{1, 2, 5, 6\\}$' },
      { id: 'd', md: '$\\{1, 2\\}$' },
    ],
    answer: 'a',
    explanation:
      '$A \\cup B = \\{1,2,3,4\\}$, sehingga komplemennya terhadap $U$ adalah $\\{5,6\\}$. Cek dengan De Morgan: $A^c \\cap B^c = \\{4,5,6\\} \\cap \\{1,2,5,6\\} = \\{5,6\\}$ — hasilnya konsisten.',
    sourceRef: 'P03 hlm. 8–9 (Worked Example)',
  },
  {
    id: 'p03-u6-e2',
    moduleId: 'p03',
    unitId: 'p03-u6',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Hukum De Morgan menyatakan:',
    choices: [
      { id: 'a', md: '$(A \\cup B)^c = A^c \\cap B^c$ dan $(A \\cap B)^c = A^c \\cup B^c$' },
      { id: 'b', md: '$(A \\cup B)^c = A^c \\cup B^c$ dan $(A \\cap B)^c = A^c \\cap B^c$' },
      { id: 'c', md: '$(A \\cup B)^c = A \\cap B$' },
      { id: 'd', md: '$(A \\cap B)^c = A^c \\cap B^c$' },
    ],
    answer: 'a',
    explanation:
      'Ketika komplemen melewati kurung, operasinya **berubah**: gabungan menjadi irisan, irisan menjadi gabungan, dan setiap himpunan dikomplemenkan. Sumber menandai $(A\\cup B)^c \\neq A^c \\cup B^c$ sebagai kesalahan khas.',
    sourceRef: 'P03 hlm. 8–9 (Hukum De Morgan & Jangan Keliru)',
  },
  {
    id: 'p03-u6-e3',
    moduleId: 'p03',
    unitId: 'p03-u6',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Menurut sifat dominasi, $A \\cup U = \\ldots$',
    choices: [
      { id: 'a', md: '$U$' },
      { id: 'b', md: '$A$' },
      { id: 'c', md: '$\\varnothing$' },
      { id: 'd', md: '$A^c$' },
    ],
    answer: 'a',
    explanation:
      'Sifat dominasi: $A \\cup U = U$ dan $A \\cap \\varnothing = \\varnothing$. Bandingkan dengan sifat identitas: $A \\cup \\varnothing = A$ dan $A \\cap U = A$.',
    sourceRef: 'P03 hlm. 9 (Sifat Penting)',
  },
  {
    id: 'p03-u6-e4',
    moduleId: 'p03',
    unitId: 'p03-u6',
    type: 'tf',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Pernyataan: $A \\cup \\varnothing = \\varnothing$.',
    answer: 'false',
    explanation:
      'Salah. Itu sifat identitas untuk gabungan dengan himpunan kosong: $A \\cup \\varnothing = A$. Yang bernilai $\\varnothing$ adalah $A \\cap \\varnothing = \\varnothing$ (sifat dominasi).',
    sourceRef: 'P03 hlm. 9 (Sifat Penting)',
  },

  // ------------------------------------------------------------------ Unit 7
  {
    id: 'p03-u7-e1',
    moduleId: 'p03',
    unitId: 'p03-u7',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Pada diagram Venn dua himpunan $A$ dan $B$ di dalam semesta $U$, ada berapa tipe wilayah dasar?',
    choices: [
      { id: 'a', md: 'Empat: $A$ saja, $A \\cap B$, $B$ saja, dan bagian $U$ di luar $A \\cup B$' },
      { id: 'b', md: 'Dua: di dalam dan di luar lingkaran' },
      { id: 'c', md: 'Tiga: $A$, $B$, dan $U$' },
      { id: 'd', md: 'Lima: termasuk $\\varnothing$' },
    ],
    answer: 'a',
    explanation:
      'Sumber menyebut empat tipe wilayah: $A$ saja, $A \\cap B$, $B$ saja, dan bagian $U$ di luar $A \\cup B$. Banyak pertanyaan diagram Venn diselesaikan dengan menghitung keempat wilayah ini.',
    sourceRef: 'P03 hlm. 10 (Empat Daerah Dasar untuk Dua Himpunan)',
  },
  {
    id: 'p03-u7-e2',
    moduleId: 'p03',
    unitId: 'p03-u7',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Pada diagram Venn, wilayah mana yang menyatakan $A \\setminus B$?',
    choices: [
      { id: 'a', md: 'Bagian $A$ yang tidak tumpang tindih dengan $B$' },
      { id: 'b', md: 'Bagian tumpang tindih $A$ dan $B$' },
      { id: 'c', md: 'Seluruh bagian $A$ dan $B$' },
      { id: 'd', md: 'Bagian $U$ di luar kedua lingkaran' },
    ],
    answer: 'a',
    explanation:
      'Sumber memetakan notasi ke wilayah: $A \\cap B$ = tumpang tindih, $A \\cup B$ = seluruh $A$ dan $B$, $A \\setminus B$ = bagian $A$ yang tidak tumpang tindih dengan $B$, $(A\\cup B)^c$ = bagian semesta di luar kedua lingkaran.',
    sourceRef: 'P03 hlm. 10 (Dari Notasi ke Wilayah)',
  },
  {
    id: 'p03-u7-e3',
    moduleId: 'p03',
    unitId: 'p03-u7',
    type: 'tf',
    difficulty: 'sedang',
    origin: 'source',
    prompt:
      'Pernyataan: Jika $A \\subseteq B$, maka pada diagram Venn lingkaran $A$ digambar seluruhnya di dalam lingkaran $B$.',
    answer: 'true',
    explanation:
      'Benar. Sumber: jika $A \\subseteq B$, gambar $A$ seluruhnya berada di dalam $B$. Jika lepas, kedua lingkaran tidak berpotongan. Jika bersilangan, lingkaran berpotongan tetapi tidak saling memuat seluruhnya.',
    sourceRef: 'P03 hlm. 10 (Dari Hubungan ke Diagram)',
  },
  {
    id: 'p03-u7-e4',
    moduleId: 'p03',
    unitId: 'p03-u7',
    type: 'mc',
    difficulty: 'sedang',
    origin: 'source',
    prompt: 'Apa langkah pertama strategi menjawab soal diagram Venn menurut sumber?',
    choices: [
      { id: 'a', md: 'Baca simbol utama terlebih dahulu untuk menentukan operasi/hubungan yang dimaksud' },
      { id: 'b', md: 'Warnai semua wilayah lalu hitung' },
      { id: 'c', md: 'Langsung menebak dari bentuk gambar' },
      { id: 'd', md: 'Menghitung kardinalitas semesta dahulu' },
    ],
    answer: 'a',
    explanation:
      'Sumber menekankan: baca simbol utama terlebih dahulu, tentukan operasi/hubungan yang dimaksud, baru hitung anggota atau pilih wilayah. Jangan memulai dari gambar secara intuitif tanpa memeriksa notasi.',
    sourceRef: 'P03 hlm. 11 (Strategi Menjawab)',
  },
]

export default p03
