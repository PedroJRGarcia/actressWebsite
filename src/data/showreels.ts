// "Showreels" section, in this order. The first one is shown big.
// Own video: an H.264 .mp4 in public/videos/ (under 100 MB for GitHub), poster = still image shown before playing.
// Filmmakers: one button per group; `id` is the number in that group's embed code,
//   `poster` an optional still from that video (a screenshot saved in public/videos/), shown before it loads.
import type { Showreel } from './types'

export const showreels: Showreel[] = [
  { title: 'Mitbewohner', lang: 'de', video: 'mitbewohner.mp4', poster: 'mitbewohner.webp' },
  { title: 'Geschwister', lang: 'de', video: 'geschwister.mp4', poster: 'geschwister.webp' },
  { title: 'Vergewaltigung', lang: 'de', video: 'vergewaltigung.mp4', poster: 'vergewaltigung.webp' },
  {
    title: 'Geschwister',
    lang: 'de',
    filmmakers: [
      { label: '2023', id: 121502, poster: 'geschwister-filmmakers.webp' },
      { label: '2023 Sub ESP', id: 121503, poster: 'mitbewohner-filmmakers.webp' },
      { label: 'About me', id: 155593, poster: 'about-me-esp.webp' },
    ],
  },
]
