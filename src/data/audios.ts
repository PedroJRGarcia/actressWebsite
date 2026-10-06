// "Audio" section. Any order: the site groups them by language (DE, ES, EN, then MULTI for several languages).
// filmmakers: open the audio's Filmmakers embed address, find the ".mp3" link
// (static.filmmakers.eu/production/<code>.mp3) and paste the <code>.
import type { Audio } from './types'

export const audios: Audio[] = [
  { title: 'Hundert Jahre Einsamkeit', lang: 'de', filmmakers: '695eedfd-4c02-4367-9b22-48feb37d13d3' },
  { title: 'Spiegel im Spiegel', lang: 'de', filmmakers: '136d0be7-bf79-4fd3-8a88-8087317c187f' },
  { title: 'Nachricht', lang: 'de', filmmakers: 'd2a9c27e-8fc9-4995-aa7c-31a13f554597' },
  { title: 'Cien años de soledad', lang: 'es', filmmakers: '87d8682b-82f5-47cd-9e58-18ae842c2283' },
  { title: 'La vida es sueño', lang: 'multi', filmmakers: 'cd0cf919-eeab-4110-9537-cc96c2a368cb' },
  { title: 'Comercial / Werbung', lang: 'es', filmmakers: 'bb5bf990-665b-4f62-9340-ca875f9bd021' },
]
