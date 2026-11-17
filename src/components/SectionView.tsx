import type { Section, SectionKind } from '../types'
import { Markdown } from './Markdown'

const LABELS: Partial<Record<SectionKind, string>> = {
  goal: 'Tujuan Unit',
  prereq: 'Prasyarat Singkat',
  main: 'Matematika Utama',
  why: 'Mengapa / Interpretasi',
  mistake: 'Jangan Keliru',
  checkpoint: 'Checkpoint',
  summary: 'Ringkasan Unit',
  diagnosis: 'Diagnosis Kesalahan',
  note: 'Catatan',
  figure: 'Gambar',
}

/** Kinds that render as a bordered callout instead of a plain section. */
const CALLOUTS: SectionKind[] = [
  'goal',
  'main',
  'why',
  'mistake',
  'summary',
  'diagnosis',
]

const CALLOUT_CLASS: Partial<Record<SectionKind, string>> = {
  goal: 'callout-goal',
  main: 'callout-main',
  why: 'callout-why',
  mistake: 'callout-mistake',
  summary: 'callout-summary',
  diagnosis: 'callout-mistake',
}

interface Props {
  section: Section
  index: number
}

export function SectionView({ section, index }: Props) {
  const id = `sec-${index}`
  const label = section.title ?? LABELS[section.kind] ?? ''
  const isCallout = CALLOUTS.includes(section.kind)

  if (isCallout) {
    return (
      <section className="section" id={id}>
        <div className={`callout ${CALLOUT_CLASS[section.kind] ?? ''}`}>
          {label && <span className="callout-label">{label}</span>}
          <Markdown md={section.md} />
        </div>
      </section>
    )
  }

  return (
    <section className="section" id={id}>
      {label && (
        <div className="section-head">
          <h2 className="section-title">{label}</h2>
          <span className="section-rule" aria-hidden="true" />
        </div>
      )}
      <Markdown md={section.md} />
    </section>
  )
}
