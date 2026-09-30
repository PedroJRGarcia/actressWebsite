// "Showreels" section, in this order. The first one is shown big.
// Own video: an H.264 .mp4 in public/videos/ (under 100 MB for GitHub), poster = still image shown before playing.
// Filmmakers: one button per group; `id` is the number in that group's embed code.
import type { Showreel } from './types'

export const showreels: Showreel[] = [
  { title: 'Mitbewohner', lang: 'de', video: 'mitbewohner.mp4', poster: 'mitbewohner.webp' },
  { title: 'Geschwister', lang: 'de', video: 'geschwister.mp4', poster: 'geschwister.webp' },
  { title: 'Vergewaltigung', lang: 'de', video: 'vergewaltigung.mp4', poster: 'vergewaltigung.webp' },
  {
    title: 'Geschwister',
    lang: 'de',
    filmmakers: [
      { label: '2023', id: 121502 },
      { label: '2023 Sub ESP', id: 121503 },
      { label: 'About me', id: 155593 },
    ],
  },
]
