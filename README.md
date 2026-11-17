# MDAS — Belajar & Latihan

A self-contained, static, interactive learning website for exam preparation on
**Matematika Dasar** (PSIK.26A, semester ganjil 2026/2027), rebuilt from the
printed course handouts P01–P14.

Everything runs in the browser. There is no backend, no database, no
authentication, no analytics, and no network calls at runtime. Learning progress
is stored in `localStorage` and never leaves the device.

---

## Contents

- [Project overview](#project-overview)
- [What the source contained](#what-the-source-contained)
- [Technology stack](#technology-stack)
- [Installation](#installation)
- [Local development](#local-development)
- [Production build](#production-build)
- [Vercel deployment](#vercel-deployment)
- [Project structure](#project-structure)
- [Adding learning materials](#adding-learning-materials)
- [Adding exercises](#adding-exercises)
- [Content validation](#content-validation)
- [Known limitations](#known-limitations)

---

## Project overview

| Feature | Description |
| --- | --- |
| **Dashboard** | Course overview, 14 module cards with per-module progress, quick access to practice and quiz, resume point for the last unit. |
| **Learning materials** | 81 units across 14 modules, rendered as structured sections (objective, prerequisites, concept, main theory, worked examples, "Jangan Keliru", checkpoint, summary). Every unit cites its source page range. |
| **Practice mode** | 376 exercises with filters (status, difficulty, origin). Submit → immediate feedback → explanation → source reference → retry. |
| **Quiz mode** | Randomised questions from selected modules, configurable count (10/15/20/30) and time limit (none/5/10/20 min). Score, timer, and review of incorrect answers. |
| **Progress** | Completed units, per-exercise attempts, quiz history. Persisted locally, survives refresh, resets cleanly. |
| **Themes** | Light and dark, applied before first paint so there is no flash. |

Current content totals — verified by `npm run verify:content`:

```
modules   : 14
units     : 81
sections  : 846
formulas  : 4690
exercises : 376   (mc: 247, tf: 67, short: 62)
```

---

## What the source contained

The source is 14 PDFs, 148 pages total, from the Matematika Dasar course
handouts. They were read in place from a local directory outside this project
and are not redistributed here.
Two facts shaped the entire content pipeline:

1. **The mathematical formulas are vector outlines, not text.** The PDFs are
   Chrome print-to-PDF exports where prose is selectable text but every formula
   is drawn as vector paths. `pdftotext`, `pdftohtml`, Ghostscript, and
   `pdftocairo -svg` all recover the prose and return nothing for the math.
   Prose therefore came from the text layer; **every formula was transcribed by
   inspecting the rendered pages visually** at 150 dpi. Nothing was guessed and
   nothing was reconstructed from a "likely" form.

2. **The PDFs contain no question bank.** The course had practice questions, but
   they lived in the original web app and were not captured in the printouts.
   Every exercise in this project was therefore **authored from the material**,
   under two rules that are enforced in the data:
   - `origin: 'source'` — the answer is stated directly in the unit's text,
     definitions, or worked examples, ideally reusing the source's own numbers.
   - `origin: 'application'` — applies only rules the source states, to a
     different input. It never introduces a concept the materials do not cover.

   Each exercise carries a `sourceRef` page citation so any claim can be checked
   against the original PDF.

Source defects were **documented, not papered over**. For example, P09 units 5–6
have genuinely broken display math in the printed original (raw `\[|x-a|`). Those
are rendered as an explicit `note` rather than silently invented into something
that looks correct. P05 and P06 are single-page in the source (the app printed
"1/1"); both modules carry an `incomplete` note and a reduced exercise bank
instead of padding.

---

## Technology stack

| Layer | Choice | Why |
| --- | --- | --- |
| Build tool | Vite 6 | Fast dev server, static output, zero config for SPAs. |
| UI | React 18 + TypeScript 5.7 | Required by the brief; types keep 846 content sections honest. |
| Routing | react-router-dom 6 | Client-side routes only; static hosting friendly. |
| Math | KaTeX 0.16 | Renders 4,690 formulas to HTML+MathML at build-independent runtime; no external CDN, fonts are bundled. |
| Styling | Plain CSS (`src/styles.css`) | Single stylesheet with design tokens. No Tailwind, no CSS-in-JS, no runtime cost. |
| Persistence | `localStorage` | No backend requirement. |
| State | React Context + `useState` | One provider for progress and theme. No Redux/Zustand. |

Deliberately **not** used: any backend, database, auth, ORM, API client,
animation library, component library, or state-management framework.

---

## Installation

Requires **Node.js 20 or newer** (developed on v24.18.0) and npm.

```bash
cd ~/AI/hermes/uas-learning-platform
npm install
```

There are no system-level dependencies and nothing to install globally.

---

## Local development

```bash
npm run dev
```

Vite serves on <http://localhost:5173> with hot module replacement. Routes:

| Route | Page |
| --- | --- |
| `/` | Dashboard |
| `/modul/:moduleId` | Module overview, e.g. `/modul/p07` |
| `/modul/:moduleId/latihan` | Practice filtered to one module |
| `/unit/:unitId` | A single unit, e.g. `/unit/p01-u1` |
| `/latihan` | All exercises |
| `/kuis` | Quiz setup and runner |
| `/progres` | Progress detail and reset |

Useful scripts:

```bash
npm run typecheck       # tsc --noEmit
npm run verify:content  # validate every formula + exercise in the corpus
```

---

## Production build

```bash
npm run build           # tsc -b && vite build  →  dist/
```

Output is fully static in `dist/`. Asset paths are relative-root (`/assets/...`),
which is correct for Vercel and for any root-served static host.

To verify the built output locally **with working deep links** (a plain
`python3 -m http.server` returns 404 for `/unit/p01-u1` because it has no SPA
fallback):

```bash
python3 scripts/serve-dist.py 4174
# then open http://127.0.0.1:4174/unit/p01-u1
```

`scripts/serve-dist.py` mirrors what `vercel.json`'s rewrite does in production:
any path that is not a real file serves `index.html`.

---

## Vercel deployment

No authorisation has been given to deploy, and nothing has been pushed anywhere.
When you want to deploy, either drag the folder into the Vercel dashboard or use
the CLI:

```bash
npm i -g vercel        # one-time, if not installed
vercel                 # preview deployment
vercel --prod          # production deployment
```

`vercel.json` is already configured and needs no edits:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

The rewrite is what makes client-side routes work on refresh or direct entry.
Vercel detects Vite automatically; no environment variables are required.

`source-extraction/` is already covered by `.gitignore`, so it will not be
pushed. It is intermediate material, not an app dependency — nothing in `src/`
reads from it.

---

## Project structure

```
uas-learning-platform/
├── index.html                  # App shell + pre-paint theme script
├── vite.config.ts
├── tsconfig.json
├── vercel.json                 # SPA rewrite for static hosting
├── package.json
│
├── scripts/
│   ├── verify-content.mjs      # Validates formulas and exercise data
│   └── serve-dist.py           # Static server with SPA fallback (local testing)
│
├── src/
│   ├── main.tsx                # Entry point
│   ├── App.tsx                 # Routes
│   ├── styles.css              # Design tokens, light/dark, all layout
│   ├── types.ts                # Content and progress data models
│   │
│   ├── content/                # LEARNING MATERIALS (data, not components)
│   │   ├── p01.ts … p14.ts     # One module per file
│   │   ├── exercises/          # One exercise bank per module
│   │   │   └── p01.ts … p14.ts
│   │   ├── exercises.ts        # Aggregates all banks
│   │   └── index.ts            # Aggregates modules + derived lookups
│   │
│   ├── lib/                    # Shared logic
│   │   ├── answers.ts          # Answer normalisation and checking
│   │   ├── markdown.ts         # Markdown + $math$ → React
│   │   ├── quiz.ts             # Shuffle, balanced sampling, scoring
│   │   ├── storage.ts          # localStorage read/write with corruption guards
│   │   └── theme.ts            # Light/dark persistence
│   │
│   ├── progress/ProgressContext.tsx   # Progress provider
│   ├── components/             # Presentational components
│   │   ├── Layout.tsx, Markdown.tsx, ExerciseCard.tsx, SectionView.tsx
│   ├── pages/
│   │   ├── Dashboard.tsx, ModulePage.tsx, UnitPage.tsx
│   │   └── PracticePage.tsx, QuizPage.tsx, ProgressPage.tsx
│   │
├── source-extraction/          # Intermediate artifacts (git-ignored, local only)
│   ├── txt/                    # pdftotext output, prose only
│   ├── pagetext/               # Custom extractor output, per page
│   ├── pages/                  # 148 rendered PNGs at 150 dpi
│   └── json/
│
├── CONTENT_INVENTORY.md        # Module → unit → page map from Stage 1
└── dist/                       # Build output (git-ignored)
```

Separation of concerns is strict: **no learning text is hardcoded in a
component.** Components read from `src/content/index.ts`, which is the only
place that knows the list of modules.

---

## Adding learning materials

Adding a module is a two-file change plus two one-line registrations.

### 1. Create the module file

`src/content/p15.ts`:

```ts
import type { Module, Unit } from '../types'

const units: Unit[] = [
  {
    id: 'p15-u1',
    number: 1,
    title: 'Judul Unit',
    pageFrom: 1,          // page inside the source PDF
    pageTo: 3,
    sections: [
      {
        kind: 'goal',
        md: 'Anda dapat …',
      },
      {
        kind: 'concept',
        title: '1. Subjudul',
        md: 'Teks dengan $x^2$ inline dan display:\n\n$$\\int_0^1 x\\,dx = \\tfrac{1}{2}$$',
      },
    ],
  },
]

const m: Module = {
  id: 'p15',
  code: 'P15',
  title: 'Judul Modul',
  pageFrom: 1,
  pageTo: 12,
  units,
}

export default m
```

**Section kinds** (`SectionKind` in `src/types.ts`) map to the visual treatment
used throughout the course:

| `kind` | Renders as |
| --- | --- |
| `goal` | Tujuan Unit |
| `prereq` | Prasyarat Singkat |
| `concept` | Penjelasan Konsep / numbered subsections |
| `main` | Matematika Utama |
| `why` | Mengapa / Interpretasi |
| `example` | Worked Example |
| `mistake` | Jangan Keliru (warning callout) |
| `checkpoint` | Checkpoint |
| `summary` | Ringkasan Unit |
| `diagnosis` | Diagnosis Kesalahan |
| `note` | Framing / origin-of-formula note |
| `figure` | Diagram or figure caption |

### 2. Register it

In `src/content/index.ts`, add the import and both lists:

```ts
import p15 from '../content/p15'

export const modules: Module[] = [ /* … */, p15 ]
```

That is all — the dashboard, module count, unit count, and navigation derive
from `modules`. No component needs editing.

### 3. Register its exercises

See the next section. If you have no exercises yet, create an empty bank; the UI
handles a module with zero exercises.

### Math notation rules

- Inline math: `$x^2$`. Display math: `$$ … $$` on its own paragraph.
- The content files are single-quoted TypeScript strings, so **a literal LaTeX
  backslash must be written as `\\`** — e.g. `'$\\frac{1}{2}$'`.
- Matrix row separators are `\\\\` (doubled) **inside** `\begin{pmatrix}`,
  because the file-level escape and the LaTeX separator stack. The validator
  distinguishes these automatically; do not "fix" a `\\` inside an environment.
- The renderer does not post-process backslashes — it passes the string to KaTeX
  as-is, which is why the escaping must be correct at the data level.

---

## Adding exercises

Exercise banks live in `src/content/exercises/pNN.ts`, one array per module:

```ts
import type { Exercise } from '../../types'

const p15: Exercise[] = [
  {
    id: 'p15-u1-e1',
    moduleId: 'p15',
    unitId: 'p15-u1',
    type: 'mc',                       // 'mc' | 'tf' | 'short'
    difficulty: 'sedang',             // 'mudah' | 'sedang' | 'sulit'
    origin: 'source',                 // 'source' | 'application'
    prompt: 'Hitung $\\int_0^1 2x\\,dx$.',
    choices: [
      { id: 'a', md: '$1$' },
      { id: 'b', md: '$2$' },
      { id: 'c', md: '$\\tfrac{1}{2}$' },
      { id: 'd', md: '$0$' },
    ],
    answer: 'a',                      // choice id for mc
    explanation: '$\\int_0^1 2x\\,dx = [x^2]_0^1 = 1$.',
    sourceRef: 'P15 hlm. 2',
  },
  {
    id: 'p15-u1-e2',
    moduleId: 'p15',
    unitId: 'p15-u1',
    type: 'tf',
    difficulty: 'mudah',
    origin: 'source',
    prompt: 'Pernyataan: …',
    answer: 'false',                  // 'true' | 'false'
    explanation: 'Salah, karena …',
    sourceRef: 'P15 hlm. 3 (Jangan Keliru)',
  },
  {
    id: 'p15-u1-e3',
    moduleId: 'p15',
    unitId: 'p15-u1',
    type: 'short',
    difficulty: 'sedang',
    origin: 'application',
    prompt: 'Hitung nilai $x$.',
    answer: ['8', 'x=8'],             // every acceptable form
    explanation: '…',
    sourceRef: 'P15 hlm. 4',
  },
]

export default p15
```

### Rules that keep the bank trustworthy

1. **`sourceRef` is mandatory.** Every item cites a page so the learner can
   verify it against the original PDF. Never leave it vague.
2. **Tag origin honestly.** Use `'source'` only when the answer is stated in the
   material; use `'application'` when you are applying a stated rule to a new
   input. Do not disguise invented questions as source questions.
3. **Verify the number before committing it.** Every numerical answer key in
   this project was checked computationally (determinants, matrix products, set
   operations, equation roots) rather than trusted. Do the same for new items —
   a wrong key teaches the wrong thing and is worse than no question.
4. **List every acceptable short answer.** Answer checking normalises case,
   whitespace, `$`, `{}`, Unicode math (`≥ → >=`), minus signs, and Indonesian
   decimal commas (`0,375 → 0.375`), and falls back to ignoring list punctuation
   (`"I Q R"` matches `"I, Q, R"`). It still cannot read minds: `0.375` will not
   match a stored `3/8` unless you list it.
5. **Prefer quality over quantity.** A short, correct, well-explained item beats
   five variants of the same question.

### 4. Register the bank

In `src/content/exercises.ts`:

```ts
import p15 from './exercises/p15'

const all: Exercise[] = [ /* … */, ...p15 ]
```

---

## Content validation

```bash
npm run verify:content
```

This parses every content and exercise file and checks:

- every `$…$` and `$$…$$` string compiles with **KaTeX `throwOnError: true`**;
- no accidental doubled backslashes outside a matrix/array environment;
- exercise IDs are unique and every `moduleId` / `unitId` resolves to a real
  unit;
- `mc` items have a valid choice id as the answer, `tf` items answer
  `true`/`false`, `short` items have at least one accepted string.

A clean run prints:

```
=== Content verification ===
modules   : 14
units     : 81
sections  : 846
formulas  : 4690
exercises : 376
by type   : {"mc":247,"tf":67,"short":62}

All content parsed and validated: OK
```

Run it before every commit that touches `src/content/`. The production build
does **not** run it automatically — `tsc` catches type errors, not bad LaTeX.

---

## Known limitations

Documented honestly rather than hidden:

- **Incomplete source modules.** P05 and P06 contain only 1 page each in the
  source PDFs (the original app printed "1/1"). Their modules are short and
  carry an `incomplete` note; their exercise banks are deliberately small. This
  reflects the source, not an extraction failure.
- **Broken display math in P09 units 5–6.** The printed original contains raw
  `\[|x-a|` fragments. These are preserved and flagged with a `note` section
  rather than invented into something that looks correct.
- **Math was transcribed visually.** Formulas are vector outlines in the source,
  so they were read from rendered pages. Prose is authoritative from the text
  layer; the math is a careful human-level transcription. If you find a
  discrepancy against the PDF, the PDF wins.
- **No source question bank.** All 376 exercises are authored from the material
  (see [What the source contained](#what-the-source-contained)). They are
  labelled `source` vs `application` so you always know which is which.
- **Bundle size.** The production build is a single ~838 kB JS chunk
  (~232 kB gzipped), dominated by KaTeX plus the full typed content corpus.
  Correct and fine for personal use; Vercel will warn about the 500 kB chunk
  threshold. The fix, if you ever want it, is `manualChunks` in
  `vite.config.ts` to split KaTeX from content — not done here because it adds
  config surface for no functional gain.
- **No automated browser test suite.** The app was validated by driving the
  built output in a real browser (all 81 unit pages, practice submission, a full
  quiz run, reload persistence, corrupted-storage recovery, 390 px mobile
  layout). That verification was manual and is not yet encoded as regression
  tests.
- **`source-extraction/` is 31 MB** of intermediates (including 148 rendered
  page images and extracted prose). It contains verbatim copies of the course
  material, so it is **git-ignored and never committed**. It is not needed to
  build or run the site.
- **Not deployed.** No repository has been published and no source material has
  been uploaded anywhere, per the project constraints.

---

## License and source material

The learning content is derived from course handouts for personal study. The
original PDFs were read only and were never modified, moved, or deleted. Redistribute
the derived material only as far as the course allows.
