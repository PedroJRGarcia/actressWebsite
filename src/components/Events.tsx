import { upcoming } from '../content'
import type { SectionProps } from '../i18n'
import { texts } from '../i18n/texts'
import { ExternalLink } from './ui'

// Upcoming dates: big day number, month + year, title, place, optional link.
// Hidden when nothing is coming up.
export function Events({ t }: SectionProps) {
  if (upcoming.length === 0) return null

  // "Okt. 2026" / "Oct 2026" in the chosen language. Noon avoids the date shifting a day in other time zones
  const date = (day: string) => new Date(`${day}T12:00:00`)
  const monthYear = (day: string) => date(day).toLocaleDateString(t(texts.locale), { month: 'short', year: 'numeric' })

  return (
    <section className='events'>
      <h2>{t(texts.events.title)}</h2>
      <ul>
        {upcoming.map(event => (
          <li key={event.date + event.title}>
            <time dateTime={event.date}>
              <span className='event-day'>{date(event.date).getDate()}</span>
              <span className='event-month'>{monthYear(event.date)}</span>
            </time>
            <div>
              <p className='strong'>{event.title}</p>
              <p className='muted'>{event.place}</p>
            </div>
            {event.url && (
              <ExternalLink className='more-link' href={event.url}>
                {t(texts.events.more)} ↗
              </ExternalLink>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
