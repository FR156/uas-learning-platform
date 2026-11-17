// Exercise bank.
//
// Authoring rules (see CONTENT_INVENTORY.md §5): the source PDFs contain NO
// question bank — their practice questions lived in the original web app and
// were not captured. Every item here is therefore authored from the material,
// following two rules:
//
//   origin: 'source'      → the answer is stated verbatim in the unit's text,
//                           definitions, or worked examples. Numbers come from
//                           the source examples wherever possible.
//   origin: 'application' → combines only rules stated in the source, applied
//                           to a different input. Never introduces a concept the
//                           materials do not cover.
//
// Each item must carry a page reference so a learner can verify the claim.

import type { Exercise } from '../types'
import p01 from './exercises/p01'
import p02 from './exercises/p02'
import p03 from './exercises/p03'
import p04 from './exercises/p04'
import p05 from './exercises/p05'
import p06 from './exercises/p06'
import p07 from './exercises/p07'
import p08 from './exercises/p08'
import p09 from './exercises/p09'
import p10 from './exercises/p10'
import p11 from './exercises/p11'
import p12 from './exercises/p12'
import p13 from './exercises/p13'
import p14 from './exercises/p14'

const all: Exercise[] = [
  ...p01,
  ...p02,
  ...p03,
  ...p04,
  ...p05,
  ...p06,
  ...p07,
  ...p08,
  ...p09,
  ...p10,
  ...p11,
  ...p12,
  ...p13,
  ...p14,
]

export default all
