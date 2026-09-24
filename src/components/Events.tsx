import React from 'react'
import { profile } from '../data/profile'
import type { SectionProps } from '../i18n'

// Only events from today on, soonest first
const today = new Date().toISOString().slice(0, 10)
const upcoming = profile.events.filter(event => event.date >= today).sort((a, b) => a.date.localeCompare(b.date))

export const Events: React.FC<SectionProps> = ({ t }) => {
  if (upcoming.length === 0) return null
  return (
    <section className='events'>
      <h2>{t.events.title}</h2>
      <ul>
        {upcoming.map(event => {
          // Noon avoids the date shifting a day in other time zones
          const date = new Date(`${event.date}T12:00:00`)
          return (
            <li key={`${event.date}-${event.title}`}>
              <time dateTime={event.date}>
                <span className='event-day'>{date.getDate()}</span>
                <span className='event-month'>
                  {date.toLocaleDateString(t.locale, { month: 'short', year: 'numeric' })}
                </span>
              </time>
              <div>
                <p className='strong'>{event.title}</p>
                <p className='muted'>{event.place}</p>
              </div>
              {event.url && (
                <a className='event-link' href={event.url} target='_blank' rel='noreferrer'>
                  {t.events.more} ↗
                </a>
              )}
            </li>
          )
        })}
      </ul>
    </section>
  )
}
