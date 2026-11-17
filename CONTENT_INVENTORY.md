# Content Inventory — MDAS Mathematics (P01–P14)

Generated from direct inspection of the 14 source PDFs for the Matematika Dasar
course, read in place from a local directory outside this project. Original
PDFs were never modified, and are not redistributed in this repository.

## 1. Source documents

| File | ID | Title | Pages | Text layer |
|------|----|-------|-------|------------|
| p01.pdf | P01 | Sistem Bilangan Real dan Sifatnya | 13 | yes (prose), formulas vector-drawn |
| p02.pdf | P02 | Pangkat, Bentuk Akar, dan Logaritma | 13 | yes (prose), formulas vector-drawn |
| p03.pdf | P03 | Himpunan dan Operasinya | 11 | yes (prose), formulas vector-drawn |
| p04.pdf | P04 | Persamaan dan Pertidaksamaan Linear | 9 | yes (prose), formulas vector-drawn |
| p05.pdf | P05 | Konsep Fungsi dan Sifat Pemetaan | 1 | truncated source (renders "1/1") |
| p06.pdf | P06 | Fungsi Linear dan Fungsi Kuadrat | 1 | truncated source (renders "1/1") |
| p07.pdf | P07 | Matriks dan Operasi Matriks | 14 | yes (prose), formulas vector-drawn |
| p08.pdf | P08 | Determinan dan Invers Matriks | 15 | yes (prose), formulas vector-drawn |
| p09.pdf | P09 | Nilai Mutlak, Persamaan, dan Pertidaksamaan | 13 | yes (prose), formulas vector-drawn |
| p10.pdf | P10 | Limit dan Kekontinuan | 11 | yes (prose), formulas vector-drawn |
| p11.pdf | P11 | Definisi Turunan dan Aturan Dasar | 12 | yes (prose), formulas vector-drawn |
| p12.pdf | P12 | Turunan Trigonometri, Aturan Rantai, De L'Hospital, Turunan Tingkat Tinggi | 12 | yes (prose), formulas vector-drawn |
| p13.pdf | P13 | Integral sebagai Antiturunan, Rumus Dasar, Teknik Substitusi | 13 | yes (prose), formulas vector-drawn |
| p14.pdf | P14 | Integral Parsial dan Integral Tentu | 10 | yes (prose), formulas vector-drawn |

Total: **14 documents, 148 pages**.

All PDFs are Chrome "print to PDF" captures (Skia/PDF m156) of a Google Apps
Script web app titled *"Belajar & Latihan — Academic Learning & Assessment"*,
Universitas Negeri Medan, course MDAS (Matematika Dasar), class PSIK.26A,
semester Ganjil 26/27.

## 2. Extraction findings

The documents are **not scans** — every page has an embedded text layer, so no
OCR was required. There is one substantial complication:

- **Prose extracts cleanly.** Headings, paragraphs, bullets, tables, and
  checkpoint prompts all come through as real Unicode text.
- **Mathematical formulas do not extract as text.** Formulas are set in
  CambriaMath and drawn as *filled vector outlines* (`m`/`l`/`c` path
  operators) rather than glyph runs. Tools tried and their results:

  | Tool | Result |
  |------|--------|
  | `pdftotext` (raw, layout, UTF-8) | prose OK, every formula blank |
  | `pdftotext` + GS `txtwrite` | identical gaps |
  | `pdftohtml -xml` | formula gaps; `<image>` is only a page frame |
  | `pdftocairo -svg` | 283 paths / 1317 `<use>` glyph refs, zero `<text>` |
  | custom content-stream parser | recovered all 1320 prose glyphs + correct baselines; formulas still absent |
  | `pdfimages` | only a gray page-border frame, not content |

  Conclusion: formula geometry is unrecoverable as machine text. The only
  accurate route is to read the rendered page and re-set the math as LaTeX.

So the pipeline used is: **text layer for prose** (exact wording, positioned by
baseline) + **rendered page images for formulas** (transcribed to LaTeX and
checked against the page pixels). Page images were rendered at 150 dpi into
`source-extraction/pages/` for that purpose.

## 3. Course structure

14 modules (P01–P14), **77 units total**.

| Module | Units | Unit titles |
|--------|-------|-------------|
| P01 | 6 | 1 Sistem bilangan real & klasifikasi · 2 Rasional, irasional, desimal · 3 Urutan & sifat ketidaksamaan · 4 Sifat operasi bilangan real · 5 Selisih, hasil bagi, nol, satu, lawan, kebalikan · 6 Membenarkan langkah aljabar & diagnosis kesalahan |
| P02 | 6 | 1 Pangkat bulat/nol/negatif · 2 Bentuk akar & penyederhanaan · 3 Merasionalkan penyebut · 4 Pangkat pecahan & bentuk akar · 5 Logaritma sebagai kebalikan perpangkatan · 6 Sifat logaritma & strategi terpadu |
| P03 | 7 | 1 Konsep himpunan, keanggotaan, kardinalitas · 2 Cara menuliskan himpunan, himpunan kosong, semesta · 3 Hubungan antarhimpunan · 4 Himpunan kuasa · 5 Operasi himpunan · 6 Sifat operasi & Hukum De Morgan · 7 Diagram Venn & diagnosis terpadu |
| P04 | 6 | 1 Makna penyelesaian & prinsip setara · 2 Persamaan linear suku sejenis & tanda kurung · 3 Persamaan linear bentuk pecahan · 4 Pertidaksamaan linear & pembalikan tanda · 5 Pertidaksamaan majemuk · 6 Pertidaksamaan pecahan & diagnosis kesalahan |
| P05 | 1 | 1 Kapan relasi disebut fungsi? *(source truncated)* |
| P06 | 1 | 1 Fungsi linear & cara membaca grafik *(source truncated)* |
| P07 | 7 | 1 Matriks, ordo, unsur · 2 Jenis-jenis matriks · 3 Transpose · 4 Kesamaan, penjumlahan, pengurangan · 5 Perkalian skalar · 6 Perkalian dua matriks & sifatnya · 7 Perpangkatan matriks bujur sangkar |
| P08 | 7 | 1 Determinan 2×2 & perannya · 2 Determinan 3×3 metode Sarrus · 3 Minor & kofaktor · 4 Ekspansi kofaktor efisien · 5 Keberadaan invers & invers 2×2 · 6 Invers dengan adjoin · 7 Invers hasil kali & diagnosis terpadu |
| P09 | 7 | 1 Nilai mutlak sebagai jarak & definisi · 2 Jarak dari titik & persamaan geometris · 3 Persamaan nilai mutlak: definisi & dua kasus · 4 Bentuk cepat & kasus tanpa solusi · 5 Pertidaksamaan: daerah di antara dua batas · 6 Pertidaksamaan: daerah di luar dua batas · 7 Memilih strategi, cara kuadrat, diagnosis |
| P10 | 6 | 1 Makna limit & limit satu sisi · 2 Sifat limit & substitusi langsung · 3 Bentuk tak tentu & penyederhanaan aljabar · 4 Limit di tak hingga fungsi rasional · 5 Limit trigonometri dasar · 6 Kekontinuan & fungsi potongan |
| P11 | 7 | 1 Definisi turunan dari limit & hasil bagi selisih · 2 Menghitung turunan dengan definisi & notasi · 3 Aturan konstanta, identitas, pangkat · 4 Kelipatan konstanta, jumlah, selisih · 5 Aturan hasil kali · 6 Aturan hasil bagi · 7 Memilih aturan, evaluasi, diagnosis |
| P12 | 7 | 1 Turunan trigonometri dasar · 2 Aturan rantai fungsi komposisi · 3 Aturan rantai berlapis · 4 De L'Hospital: syarat & prosedur · 5 Memilih De L'Hospital atau cara sederhana · 6 Turunan tingkat tinggi · 7 Menggabungkan aturan & diagnosis strategi |
| P13 | 7 | 1 Integral sebagai antiturunan & notasi · 2 Aturan pangkat, jumlah, selisih, kelipatan · 3 Rumus dasar integral · 4 Substitusi sederhana · 5 Substitusi pangkat pecahan & bentuk akar · 6 Pola substitusi trigonometri · 7 Pemilihan metode, diagnosis, verifikasi |
| P14 | 6 | 1 Dari aturan hasil kali ke integral parsial · 2 Menjalankan integral parsial pada hasil kali · 3 Integral ln x & strategi memilih u–dv · 4 Integral tentu dari antiturunan · 5 Sifat-sifat dasar integral tentu · 6 Membedakan integral tak tentu vs tentu, audit kesalahan |

## 4. Pedagogical pattern inside each unit

Every unit follows the same authored structure, which maps cleanly onto the
site's section model:

1. **Tujuan Unit** — learning objective ("Anda dapat …")
2. **Prasyarat Singkat** — prerequisite recall
3. **Penjelasan Konsep Lengkap** — numbered concept subsections
4. **Matematika Utama** — the core formal statement/rule
5. **Mengapa / Interpretasi** — why the rule holds, intuition
6. **Worked Example 1–4** — fully worked examples
7. **Jangan Keliru** — common-mistake callout
8. **Checkpoint** — 2–3 short prompts (pedagogical, not auto-graded)
9. **Ringkasan Unit** — summary

Several units add **Diagnosis Kesalahan** blocks (P01 U6, P04 U6, P07, P09 U7,
P11 U7, P12 U7, P13 U7, P14 U6).

## 5. Existing exercises in the source

**There are none.** Each document ends with a teaser card reading
*"18 soal latihan · boleh diulang · tidak masuk nilai resmi"* and a
**Mulai Latihan** button — an interactive exercise bank that lived in the
original web app and was **not** captured by the print-to-PDF. The question
bank is therefore not recoverable from these files.

Consequence for this project: every auto-graded exercise has to be authored
from the material itself. The brief forbids fabricating content, so the exercise
bank is written as (a) direct-recall items answerable strictly from the text and
worked examples present in the sources, and (b) explicitly labelled
*application* items that combine only rules stated in the sources. Numbers in
worked-example items are taken from the source examples verbatim wherever
possible.

## 6. Content gaps to document

- **P05 and P06** exist only as a single page each. Their module pages were
  printed while the source app was still loading, so units 2+ never rendered.
  They are included in the site with the available content and flagged as
  incomplete rather than silently dropped or invented.
- P07/P08/P13 contain unit maps ("Batas P07", "Batas P13") indicating the
  source itself was assembled from per-unit templates; duplicated sub-headings
  (e.g. "Penjelasan Konsep Lengkap" repeated per unit) are normal.
- Figure-heavy pages (graphs in P06, P10; Venn diagrams in P03; matrix
  diagrams in P07/P08; number-line diagrams in P01/P09) carry their
  information implicitly in vector art. Where the surrounding prose states the
  figure's meaning, that meaning is preserved in text; otherwise the figure is
  described in a caption instead of being guessed at.
