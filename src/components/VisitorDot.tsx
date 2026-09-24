import React from 'react'

// Hidden visitor counter: a tiny dot in the footer corner, the number only shows on hover (or tap).
// Counts are stored on abacus.jasoncameron.dev (free, no account). Each browser counts once per visit (session);
// while developing on localhost it only reads the number, so your own testing is not counted.
const COUNTER = 'https://abacus.jasoncameron.dev'
const KEY = 'elina-fernandez-website/visits'

export const VisitorDot: React.FC = () => {
  const [count, setCount] = React.useState<number | null>(null)

  React.useEffect(() => {
    let counted = import.meta.env.DEV
    try {
      counted ||= sessionStorage.getItem('visit-counted') === '1'
    } catch {
      // Storage blocked: count anyway
    }
    fetch(`${COUNTER}/${counted ? 'get' : 'hit'}/${KEY}`)
      .then(response => response.json())
      .then((data: { value?: number }) => {
        if (typeof data.value !== 'number') return
        setCount(data.value)
        try {
          sessionStorage.setItem('visit-counted', '1')
        } catch {
          // Storage blocked: nothing to remember
        }
      })
      .catch(() => {
        // Counter unreachable: the dot simply stays hidden
      })
  }, [])

  if (count === null) return null
  return (
    <span className='visitor-dot' tabIndex={0} aria-hidden='true'>
      <span className='visitor-count'>{count}</span>
    </span>
  )
}
