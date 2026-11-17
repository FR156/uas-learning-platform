import { useMemo } from 'react'
import { renderMarkdown } from '../lib/markdown'

interface Props {
  md: string
  className?: string
}

/** Renders authored Markdown+LaTeX into styled prose HTML. */
export function Markdown({ md, className = 'prose' }: Props) {
  const html = useMemo(() => renderMarkdown(md), [md])
  return <div className={className} dangerouslySetInnerHTML={{ __html: html }} />
}
