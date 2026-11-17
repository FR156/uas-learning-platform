// Aggregate content access + derived statistics.
//
// Keeping lookup logic here means components never hardcode module lists, so
// adding a module is a one-file change (see README).

import type { Exercise, Module, Unit } from '../types'
import p01 from '../content/p01'
import p02 from '../content/p02'
import p03 from '../content/p03'
import p04 from '../content/p04'
import p05 from '../content/p05'
import p06 from '../content/p06'
import p07 from '../content/p07'
import p08 from '../content/p08'
import p09 from '../content/p09'
import p10 from '../content/p10'
import p11 from '../content/p11'
import p12 from '../content/p12'
import p13 from '../content/p13'
import p14 from '../content/p14'
import exercises from '../content/exercises'

export const modules: Module[] = [
  p01,
  p02,
  p03,
  p04,
  p05,
  p06,
  p07,
  p08,
  p09,
  p10,
  p11,
  p12,
  p13,
  p14,
]

export const allExercises: Exercise[] = exercises

export const unitsById = new Map<string, { unit: Unit; module: Module }>()
for (const m of modules) {
  for (const u of m.units) unitsById.set(u.id, { unit: u, module: m })
}

export const moduleById = new Map(modules.map((m) => [m.id, m]))

export function getModule(id: string): Module | undefined {
  return moduleById.get(id)
}

export function getUnit(id: string): { unit: Unit; module: Module } | undefined {
  return unitsById.get(id)
}

export const totalUnits = modules.reduce((n, m) => n + m.units.length, 0)
export const totalPages = modules.reduce((n, m) => n + (m.pageTo - m.pageFrom + 1), 0)

export function exercisesForUnit(unitId: string): Exercise[] {
  return allExercises.filter((e) => e.unitId === unitId)
}

export function exercisesForModule(moduleId: string): Exercise[] {
  return allExercises.filter((e) => e.moduleId === moduleId)
}

/** Flattened unit order, used for prev/next navigation. */
export const unitOrder: string[] = modules.flatMap((m) => m.units.map((u) => u.id))

export function adjacentUnits(unitId: string): {
  prev?: { unit: Unit; module: Module }
  next?: { unit: Unit; module: Module }
} {
  const i = unitOrder.indexOf(unitId)
  if (i < 0) return {}
  const p = i > 0 ? unitsById.get(unitOrder[i - 1]) : undefined
  const n = i < unitOrder.length - 1 ? unitsById.get(unitOrder[i + 1]) : undefined
  return { prev: p, next: n }
}

export function moduleProgress(
  moduleId: string,
  completed: string[],
): { done: number; total: number; pct: number } {
  const m = moduleById.get(moduleId)
  if (!m) return { done: 0, total: 0, pct: 0 }
  const total = m.units.length
  const done = m.units.filter((u) => completed.includes(u.id)).length
  return { done, total, pct: total ? Math.round((done / total) * 100) : 0 }
}
