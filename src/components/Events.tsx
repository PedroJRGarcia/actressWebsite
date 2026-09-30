import React from 'react'
import { upcoming } from '../data/profile'
import type { SectionProps } from '../i18n'

export const Events: React.FC<SectionProps> = ({ t }) => {
  if (upcoming.length === 0) return null
  return (
    <section id='events' className='events'>
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
