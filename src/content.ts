// Turns the plain lists in src/data into what the page needs: full file addresses, sorting, filtering.
// Nothing to edit here when updating content.
import { audios } from './data/audios'
import { events } from './data/events'
import { profile } from './data/profile'
import type { SpokenLang } from './data/types'

// Files placed in /public are served from the site root (BASE_URL handles GitHub Pages sub-paths)
export const publicFile = (path: string) => `${import.meta.env.BASE_URL}${path}`

// "© …": Elina's name unless another author is given
export const copyrightOf = (item: { copyright?: string }) => item.copyright ?? profile.name

// Filmmakers video player. background_color=121212 = the site's dark background (the player then uses white text);
// playlist=h: the clips of that group are shown as thumbnails to switch between
export const filmmakersVideo = (id: number) =>
  `https://www.filmmakers.eu/es/actors/elina-fernandez/video/${id}?autoplay=false&background_color=121212&iframe=v2&playlist=h`

export const filmmakersAudio = (code: string) => `https://static.filmmakers.eu/production/${code}.mp3`

// Audios grouped by language in this order
const langOrder: SpokenLang[] = ['de', 'es', 'en']
export const sortedAudios = [...audios].sort((a, b) => langOrder.indexOf(a.lang) - langOrder.indexOf(b.lang))

// Events from today on, soonest first
const today = new Date().toISOString().slice(0, 10)
export const upcoming = events.filter(event => event.date >= today).sort((a, b) => a.date.localeCompare(b.date))
