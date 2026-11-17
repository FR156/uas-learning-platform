import type { Module } from '../types'

const m: Module = {
  id: 'p03',
  code: 'P03',
  title: 'Himpunan dan Operasinya',
  pageFrom: 1,
  pageTo: 11,
  units: [
    {
      id: 'p03-u1',
      number: 1,
      title: 'Konsep Himpunan, Keanggotaan, dan Kardinalitas',
      pageFrom: 1,
      pageTo: 2,
      sections: [
        {
          kind: 'goal',
          md: `Anda dapat menentukan apakah suatu kumpulan merupakan himpunan, membaca notasi keanggotaan, dan menentukan kardinalitas dengan benar.`,
        },
        {
          kind: 'concept',
          title: '1. Himpunan Harus Memiliki Keanggotaan yang Jelas',
          md: `Dalam matematika, **himpunan** adalah kumpulan objek yang anggotanya dapat ditentukan dengan jelas. Pertanyaannya harus dapat dijawab tegas: suatu objek *anggota* atau *bukan anggota*.

Contoh: “bilangan genap positif kurang dari 10” adalah himpunan, yaitu $\\{2, 4, 6, 8\\}$. Sebaliknya, “film yang bagus” tidak menentukan himpunan secara matematis karena kata *bagus* bergantung pada penilaian.`,
        },
        {
          kind: 'concept',
          title: '2. Keanggotaan',
          md: `Jika $A = \\{2, 4, 6, 8\\}$, maka $4 \\in A$ dibaca “4 anggota A”, sedangkan $5 \\notin A$.`,
        },
        {
          kind: 'concept',
          title: '3. Kardinalitas',
          md: `Banyak anggota berbeda pada $A$ disebut kardinalitas dan ditulis $|A|$ atau $n(A)$. Jika $B = \\{a, b, b, c\\}$, maka secara himpunan $B = \\{a, b, c\\}$, sehingga $|B| = 3$.`,
        },
        {
          kind: 'note',
          title: 'Ide Inti',
          md: `- Urutan penulisan tidak memengaruhi himpunan.
- Anggota yang sama tidak dihitung berulang.
- Notasi $\\in$ dipakai untuk anggota, bukan untuk hubungan antarhimpunan.`,
        },
        {
          kind: 'example',
          title: 'Worked Example',
          md: `Misalkan $C = \\{1, 3, 5, 7, 7\\}$. Maka $7 \\in C$, $2 \\notin C$, dan $|C| = 4$, bukan 5.`,
        },
        {
          kind: 'mistake',
          md: `Nilai yang ditulis dua kali tetap satu anggota. Himpunan tidak menyimpan “duplikasi” sebagai anggota baru.`,
        },
        {
          kind: 'checkpoint',
          md: `1. Apakah “mahasiswa yang lahir bulan Januari” membentuk himpunan?
2. Jika $D = \\{p, q, p, r\\}$, tentukan $|D|$.
3. Apa perbedaan $x \\in A$ dan $x \\notin A$?`,
        },
        {
          kind: 'summary',
          md: `Himpunan menuntut keanggotaan yang jelas; $\\in$ menyatakan keanggotaan; kardinalitas menghitung anggota yang berbeda.`,
        },
      ],
    },
    {
      id: 'p03-u2',
      number: 2,
      title: 'Cara Menuliskan Himpunan, Himpunan Kosong, dan Semesta',
      pageFrom: 2,
      pageTo: 3,
      sections: [
        {
          kind: 'goal',
          md: `Anda dapat berpindah antara cara tabulasi dan pencirian, serta membedakan himpunan kosong dan himpunan semesta.`,
        },
        {
          kind: 'concept',
          title: '1. Tabulasi',
          md: `Anggota ditulis satu per satu di dalam kurung kurawal. Contoh: $A = \\{1, 3, 5, 7\\}$.`,
        },
        {
          kind: 'concept',
          title: '2. Pencirian',
          md: `Anggota ditentukan melalui sifat yang harus dipenuhi. Contoh yang sama dapat ditulis $A = \\{x \\in \\mathbb{N} \\mid x < 8 \\text{ dan } x \\text{ ganjil}\\}$.`,
        },
        {
          kind: 'concept',
          title: '3. Simbol Baku',
          md: `Himpunan bilangan yang umum dapat ditulis dengan simbol seperti $\\mathbb{N}$ untuk bilangan asli, $\\mathbb{Z}$ untuk bilangan bulat, dan $\\mathbb{R}$ untuk bilangan real.`,
        },
        {
          kind: 'concept',
          title: '4. Himpunan Kosong',
          md: `Himpunan yang tidak mempunyai anggota ditulis $\\varnothing$ atau $\\{\\}$. Perhatikan bahwa $\\varnothing$ berbeda dengan $\\{\\varnothing\\}$: yang pertama mempunyai 0 anggota, yang kedua mempunyai 1 anggota, yaitu himpunan kosong.`,
        },
        {
          kind: 'concept',
          title: '5. Himpunan Semesta',
          md: `Himpunan semesta $U$ memuat semua objek yang sedang dibicarakan. Untuk $A = \\{2, 4, 6\\}$, semesta dapat dipilih, misalnya, $U = \\{1, 2, 3, 4, 5, 6\\}$ atau himpunan bilangan asli tertentu. Karena konteks dapat berbeda, semesta tidak harus tunggal.`,
        },
        {
          kind: 'example',
          title: 'Worked Example',
          md: `Himpunan $B = \\{x \\in \\mathbb{Z} \\mid -2 \\le x < 3\\}$ secara tabulasi adalah $\\{-2, -1, 0, 1, 2\\}$.`,
        },
        {
          kind: 'mistake',
          md: `Tanda titik tiga (…) hanya aman bila pola anggota sudah jelas. Jika polanya tidak tunggal, gunakan pencirian.`,
        },
        {
          kind: 'checkpoint',
          md: `1. Tuliskan bilangan genap positif kurang dari 10 dengan tabulasi dan pencirian.
2. Berapa $|\\varnothing|$? Berapa $|\\{\\varnothing\\}|$?
3. Apakah semesta selalu hanya satu?`,
        },
        {
          kind: 'summary',
          md: `Himpunan dapat ditulis dengan tabulasi atau pencirian; $\\varnothing$ tidak memiliki anggota; semesta ditentukan oleh konteks.`,
        },
      ],
    },
    {
      id: 'p03-u3',
      number: 3,
      title: 'Hubungan Antarhimpunan',
      pageFrom: 4,
      pageTo: 5,
      sections: [
        {
          kind: 'figure',
          title: 'Diagram tiga hubungan antarhimpunan',
          md: `Tiga diagram berdampingan, masing-masing dengan label di atasnya:

- $A \\subset B$: satu lingkaran kecil berlabel $A$ berada seluruhnya di dalam lingkaran besar berlabel $B$.
- A dan B lepas: dua lingkaran berlabel $A$ dan $B$ terpisah, tidak berpotongan.
- A dan B bersilangan: dua lingkaran berlabel $A$ dan $B$ berpotongan; bagian tumpang tindih diwarnai.

Keterangan di bawah ketiga diagram: “Sama berarti anggota sama; ekuivalen (~) hanya berarti kardinalitas sama.”`,
        },
        {
          kind: 'goal',
          md: `Anda dapat membedakan kesamaan, himpunan bagian, himpunan bagian sejati, lepas, bersilangan, dan ekuivalen.`,
        },
        {
          kind: 'concept',
          title: 'Kesamaan',
          md: `$A = B$ jika dan hanya jika keduanya mempunyai anggota yang sama. Urutan tidak berpengaruh: $\\{1, 2, 3\\} = \\{3, 1, 2\\}$.`,
        },
        {
          kind: 'concept',
          title: 'Himpunan Bagian',
          md: `$A \\subseteq B$ berarti setiap anggota $A$ juga anggota $B$. Jika selain itu $A \\neq B$, maka $A$ disebut bagian sejati dari $B$, sering ditulis $A \\subset B$ sesuai konvensi sumber.`,
        },
        {
          kind: 'concept',
          title: 'Lepas dan Bersilangan',
          md: `Dua himpunan lepas jika $A \\cap B = \\varnothing$. Mereka bersilangan jika $A \\cap B \\neq \\varnothing$ tetapi tidak satu menjadi himpunan bagian dari yang lain.`,
        },
        {
          kind: 'concept',
          title: 'Ekuivalen',
          md: `$A \\sim B$ berarti keduanya mempunyai kardinalitas yang sama: $|A| = |B|$. Ekuivalen tidak berarti anggotanya sama.`,
        },
        {
          kind: 'example',
          title: 'Worked Example',
          md: `Jika $A = \\{1, 2\\}$, $B = \\{1, 2, 3\\}$, dan $C = \\{a, b\\}$, maka $A \\subseteq B$ dan $A \\sim C$, tetapi $A \\neq C$.`,
        },
        {
          kind: 'diagnosis',
          title: 'Diagnosis Penting',
          md: `Dari $A = B$ selalu diperoleh $A \\sim B$. Sebaliknya, dari $A \\sim B$ belum tentu $A = B$.`,
        },
        {
          kind: 'checkpoint',
          md: `1. Jika $A = \\{1, 2\\}$ dan $B = \\{2, 1\\}$, bagaimana hubungannya?
2. Jika $A = \\{1, 2\\}$ dan $B = \\{2, 3\\}$, apakah lepas?
3. Apakah dua himpunan yang masing-masing berisi 3 anggota selalu sama?`,
        },
        {
          kind: 'summary',
          md: `Kesamaan membandingkan anggota; ekuivalensi membandingkan banyak anggota; subset memeriksa inklusi; lepas/bersilangan memeriksa irisan.`,
        },
      ],
    },
    {
      id: 'p03-u4',
      number: 4,
      title: 'Himpunan Kuasa',
      pageFrom: 5,
      pageTo: 6,
      sections: [
        {
          kind: 'goal',
          md: `Anda dapat menuliskan himpunan kuasa dan menentukan kardinalitasnya.`,
        },
        {
          kind: 'concept',
          title: 'Definisi',
          md: `Himpunan kuasa $\\mathcal{P}(A)$ adalah himpunan yang anggotanya **semua himpunan bagian** dari $A$, termasuk $\\varnothing$ dan $A$ sendiri.`,
        },
        {
          kind: 'concept',
          title: 'Contoh',
          md: `Jika $A = \\{a, b\\}$, maka

$$\\mathcal{P}(A) = \\{\\varnothing, \\{a\\}, \\{b\\}, \\{a, b\\}\\}.$$

Jadi $|\\mathcal{P}(A)| = 4$.`,
        },
        {
          kind: 'concept',
          title: 'Pola Kardinalitas',
          md: `Jika $|A| = n$, maka setiap anggota A mempunyai dua pilihan saat membentuk subset: dimasukkan atau tidak. Karena ada $n$ keputusan dua-pilihan,

$$|\\mathcal{P}(A)| = 2^n.$$`,
        },
        {
          kind: 'example',
          title: 'Worked Example',
          md: `Jika $B = \\{1, 2, 3\\}$, maka $|\\mathcal{P}(B)| = 2^3 = 8$. Anda tidak harus menuliskan delapan subset jika soal hanya meminta kardinalitas.`,
        },
        {
          kind: 'mistake',
          md: `$\\varnothing \\subseteq A$ selalu benar untuk setiap himpunan $A$, sehingga $\\varnothing$ selalu menjadi anggota $\\mathcal{P}(A)$.`,
        },
        {
          kind: 'checkpoint',
          md: `1. Tuliskan $\\mathcal{P}(\\{p, q\\})$.
2. Jika $|A| = 5$, berapa $|\\mathcal{P}(A)|$?
3. Apakah $A \\in \\mathcal{P}(A)$?`,
        },
        {
          kind: 'summary',
          md: `Himpunan kuasa memuat semua subset; untuk himpunan berhingga dengan n anggota, banyak subset adalah $2^n$.`,
        },
      ],
    },
    {
      id: 'p03-u5',
      number: 5,
      title: 'Operasi Himpunan: Irisan, Gabungan, Komplemen, dan Selisih',
      pageFrom: 6,
      pageTo: 8,
      sections: [
        {
          kind: 'figure',
          title: 'Empat operasi dasar',
          md: `Empat diagram berjajar, masing-masing dengan label di atasnya:

- $A \\cap B$: dua lingkaran berpotongan berlabel $A$ dan $B$; hanya bagian tumpang tindih yang diwarnai.
- $A \\cup B$: dua lingkaran berpotongan berlabel $A$ dan $B$; seluruh area kedua lingkaran, termasuk bagian tumpang tindih, diwarnai.
- $A \\setminus B$: dua lingkaran berpotongan; hanya bagian $A$ yang tidak tumpang tindih dengan $B$ diwarnai.
- $A^c$: persegi panjang berlabel $U$ memuat satu lingkaran berlabel $A$; area di dalam $U$ tetapi di luar $A$ diwarnai.

Keterangan di bawah diagram: “Irisan: sekaligus • Gabungan: minimal salah satu • Selisih: di A bukan B • Komplemen: di U bukan A”.`,
        },
        {
          kind: 'goal',
          md: `Anda dapat menghitung empat operasi himpunan dan menghubungkannya dengan daerah pada diagram Venn.`,
        },
        {
          kind: 'concept',
          title: 'Irisan',
          md: `$A \\cap B$ memuat anggota yang berada di $A$ dan $B$ sekaligus.`,
        },
        {
          kind: 'concept',
          title: 'Gabungan',
          md: `$A \\cup B$ memuat anggota yang berada di $A$ atau $B$, termasuk yang berada di keduanya.`,
        },
        {
          kind: 'concept',
          title: 'Komplemen',
          md: `Terhadap semesta $U$, $A^c = U \\setminus A$: semua anggota semesta yang bukan anggota A.`,
        },
        {
          kind: 'concept',
          title: 'Selisih',
          md: `$A \\setminus B$ memuat anggota A yang tidak berada di B. Operasi ini tidak komutatif; umumnya $A \\setminus B \\neq B \\setminus A$.`,
        },
        {
          kind: 'example',
          title: 'Worked Example',
          md: `Ambil $U = \\{1, 2, 3, 4, 5, 6\\}$, $A = \\{1, 2, 3, 4\\}$, $B = \\{3, 4, 5\\}$. Maka:

- $A \\cap B = \\{3, 4\\}$
- $A \\cup B = \\{1, 2, 3, 4, 5\\}$
- $A^c = \\{5, 6\\}$
- $A \\setminus B = \\{1, 2\\}$
- $B \\setminus A = \\{5\\}$`,
        },
        {
          kind: 'concept',
          title: 'Prosedur Aman',
          md: `1. Tetapkan semesta jika ada komplemen.
2. Tuliskan anggota A dan B dengan jelas.
3. Untuk irisan cari yang sama; untuk gabungan kumpulkan tanpa duplikasi; untuk selisih mulai dari himpunan pertama; untuk komplemen mulai dari U.`,
        },
        {
          kind: 'checkpoint',
          md: `Dengan data contoh, hitung $(A \\cap B)^c$ terhadap U.`,
        },
        {
          kind: 'summary',
          md: `Irisan = bersama; gabungan = minimal salah satu; komplemen = di semesta tetapi bukan A; selisih = di himpunan pertama tetapi bukan kedua.`,
        },
      ],
    },
    {
      id: 'p03-u6',
      number: 6,
      title: 'Sifat Operasi Himpunan dan Hukum De Morgan',
      pageFrom: 8,
      pageTo: 9,
      sections: [
        {
          kind: 'figure',
          title: 'Diagram hukum De Morgan',
          md: `Kartu berisi rumus $(A \\cup B)^c = A^c \\cap B^c$ dan dua diagram Venn berdampingan yang dipisahkan tanda sama dengan.

- Diagram kiri: persegi panjang berlabel $U$ memuat dua lingkaran berpotongan berlabel $A$ dan $B$; area di dalam $U$ tetapi di luar kedua lingkaran diwarnai. Keterangan di bawahnya: “Di luar A ∪ B”.
- Diagram kanan: susunan yang sama dengan daerah yang sama diwarnai. Keterangan di bawahnya: “Bukan A dan bukan B”.

Kedua diagram menampilkan daerah yang identik, yaitu $(A \\cup B)^c = A^c \\cap B^c$.`,
        },
        {
          kind: 'goal',
          md: `Anda dapat mengenali sifat dasar operasi himpunan dan menggunakan hukum De Morgan.`,
        },
        {
          kind: 'concept',
          title: 'Sifat Penting',
          md: `- Identitas: $A \\cup \\varnothing = A$, $A \\cap U = A$.
- Dominasi: $A \\cup U = U$, $A \\cap \\varnothing = \\varnothing$.
- Idempoten: $A \\cup A = A$, $A \\cap A = A$.
- Komutatif: $A \\cup B = B \\cup A$, $A \\cap B = B \\cap A$.
- Komplemen: $A \\cup A^c = U$, $A \\cap A^c = \\varnothing$.`,
        },
        {
          kind: 'concept',
          title: 'Hukum De Morgan',
          md: `$$(A \\cup B)^c = A^c \\cap B^c, \\quad (A \\cap B)^c = A^c \\cup B^c.$$

Cara mengingat yang aman bukan sekadar hafalan tanda: ketika komplemen melewati kurung, setiap himpunan dikomplemenkan dan operasi di dalam berubah—gabungan menjadi irisan atau irisan menjadi gabungan.`,
        },
        {
          kind: 'example',
          title: 'Worked Example',
          md: `Jika $U = \\{1, 2, 3, 4, 5, 6\\}$, $A = \\{1, 2, 3\\}$, dan $B = \\{3, 4\\}$, maka $(A \\cup B)^c = \\{5, 6\\}$.

Di sisi lain, $A^c = \\{4, 5, 6\\}$ dan $B^c = \\{1, 2, 5, 6\\}$, sehingga $A^c \\cap B^c = \\{5, 6\\}$.`,
        },
        {
          kind: 'mistake',
          md: `$(A \\cup B)^c$ bukan $A^c \\cup B^c$. Operasi di dalam harus berubah.`,
        },
        {
          kind: 'checkpoint',
          md: `1. Lengkapi: $(A \\cap B)^c = \\dots$
2. Sederhanakan $A \\cup \\varnothing$.
3. Apakah $A \\setminus B$ komutatif?`,
        },
        {
          kind: 'summary',
          md: `Sifat operasi membantu menyederhanakan bentuk; De Morgan mengubah operasi sekaligus mengomplemenkan setiap himpunan.`,
        },
      ],
    },
    {
      id: 'p03-u7',
      number: 7,
      title: 'Membaca dan Membuat Diagram Venn serta Diagnosis Terpadu',
      pageFrom: 10,
      pageTo: 11,
      sections: [
        {
          kind: 'figure',
          title: 'Membaca daerah diagram Venn',
          md: `Persegi panjang berlabel $U$ memuat dua lingkaran berpotongan berlabel $A$ dan $B$, dengan empat daerah berlabel:

- “A saja”: bagian lingkaran $A$ yang tidak tumpang tindih dengan $B$.
- “$A \\cap B$”: bagian tumpang tindih kedua lingkaran.
- “B saja”: bagian lingkaran $B$ yang tidak tumpang tindih dengan $A$.
- “di luar $A \\cup B$”: bagian persegi panjang di luar kedua lingkaran.`,
        },
        {
          kind: 'goal',
          md: `Anda dapat menerjemahkan informasi himpunan ke diagram Venn dan sebaliknya, serta mendiagnosis kesalahan notasi/konsep yang umum.`,
        },
        {
          kind: 'concept',
          title: 'Empat Daerah Dasar untuk Dua Himpunan',
          md: `Pada diagram dua himpunan A dan B di dalam semesta U, ada empat tipe wilayah: A saja, $A \\cap B$, B saja, dan bagian U di luar $A \\cup B$. Banyak pertanyaan dapat diselesaikan dengan mengidentifikasi wilayah ini lebih dahulu.`,
        },
        {
          kind: 'concept',
          title: 'Dari Notasi ke Wilayah',
          md: `- $A \\cap B$: bagian tumpang tindih.
- $A \\cup B$: seluruh bagian A dan B.
- $A \\setminus B$: bagian A yang tidak tumpang tindih dengan B.
- $(A \\cup B)^c$: bagian semesta di luar kedua lingkaran.`,
        },
        {
          kind: 'concept',
          title: 'Dari Hubungan ke Diagram',
          md: `Jika $A \\subseteq B$, gambar A seluruhnya berada di dalam B. Jika A dan B lepas, kedua lingkaran tidak berpotongan. Jika bersilangan, lingkaran berpotongan tetapi tidak saling memuat seluruhnya.`,
        },
        {
          kind: 'diagnosis',
          title: 'Diagnosis Kesalahan Umum',
          md: `1. $\\{1, 1, 2\\}$ dikatakan memiliki 3 anggota — salah, kardinalitasnya 2.
2. Dari $A \\subseteq B$ disimpulkan $A = B$ — salah; subset boleh sejati.
3. Gabungan dianggap hanya bagian bersama — salah; itu adalah irisan.
4. Dari $A \\sim B$ disimpulkan $A = B$ — salah; ekuivalen hanya sama banyak anggota.`,
        },
        {
          kind: 'concept',
          title: 'Strategi Menjawab',
          md: `Baca simbol utama terlebih dahulu, tentukan operasi/hubungan yang dimaksud, baru hitung anggota atau pilih wilayah diagram. Jangan memulai dari gambar secara intuitif tanpa memeriksa notasinya.`,
        },
        {
          kind: 'checkpoint',
          md: `1. Bagian mana yang mewakili $A \\setminus B$?
2. Jika A berada seluruhnya di dalam B, hubungan apa yang pasti benar?
3. Apakah dua himpunan ekuivalen harus digambar pada posisi yang sama?`,
        },
        {
          kind: 'summary',
          md: `Diagram Venn adalah representasi hubungan dan operasi; ketepatan membaca simbol tetap menjadi dasar sebelum menafsirkan gambar.`,
        },
      ],
    },
  ],
}

export default m
