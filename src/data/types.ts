// The shape of every list in src/data. TypeScript checks the lists against these,
// so a typo or a missing field shows up as an error before the site is published.
import type { Text } from '../i18n'

// Language spoken in a video or audio, shown as a small coloured tag. 'multi': several languages (mint tag)
export type SpokenLang = 'de' | 'es' | 'en' | 'multi'

// copyright: author shown as "© …". When left out, Elina's name is used.

export type Showreel = {
  title: string
  lang: SpokenLang
  copyright?: string
} & (
  | { video: string; poster?: string } // file in public/videos/
  // One button per group. id: from the Filmmakers embed code.
  // poster: a still from the video, saved in public/videos/ (shown before loading; must not come from Filmmakers)
  // lang: only when that group is in another language than the reel; a list if it holds clips in several ('de', 'es')
  | { filmmakers: { label: string; id: number; poster?: string; lang?: SpokenLang | SpokenLang[] }[] }
)

export type Photo = { file: string; copyright?: string } // file in public/photos/

export type Audio = {
  title: string
  lang: SpokenLang
  filmmakers: string // the <code> in static.filmmakers.eu/production/<code>.mp3
  copyright?: string
}

export type Event = {
  date: string // 'YYYY-MM-DD'
  title: string
  place: string
  url?: string
}

export type Detail = { label: Text; value: Text }
export type Skill = { name: Text; level?: 1 | 2 | 3; note?: Text }
export type SkillGroup = { label: Text; items: Skill[] }

export type VitaEntry = {
  year: number | string
  title: Text
  tag?: 'feature' | 'short' | 'inDevelopment'
  author?: Text
  role?: Text
  part?: 'lead' | 'supporting' | 'episodeLead'
  director?: string
  production?: string
  place: string // production company (film), theatre (theater) or school (training)
  image?: { file: string; copyright: string } // file in public/photos/vita/
  url?: string
}
