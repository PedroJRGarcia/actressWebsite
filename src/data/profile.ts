// Language-independent content. Edit this file to update the website.
// Translated texts live in src/i18n.
import headshot from '../assets/headshot.webp'

// Files placed in /public are served from the site root (BASE_URL handles GitHub Pages sub-paths)
const publicFile = (path: string) => `${import.meta.env.BASE_URL}${path}`

// Filmmakers video player address. `id` comes from the embed code: …/elina-fernandez/video/<id>?…
// background_color=121212 = the site's dark background (the player then uses white text)
// playlist=h: the clips of that group are shown as thumbnails to switch between
export const filmmakersVideo = (id: number) =>
  `https://www.filmmakers.eu/es/actors/elina-fernandez/video/${id}?autoplay=false&background_color=121212&iframe=v2&playlist=h`

// A showreel is one of:
// - Filmmakers: one or more groups ("folders" on Filmmakers), shown as buttons above the player.
//   `id` is the number from each group's embed code
// - Self-hosted: an H.264 .mp4 in public/videos/ (keep each file under 100 MB for GitHub)
type Showreel = { title: string; copyright: string } & (
  { filmmakers: { label: string; id: number }[] } | { src: string; poster?: string }
)

// Copyright: the author shown as "© …" on each photo, video and audio. Change it per file.
// COPYRIGHT is the default; replace it on any item with the real author, e.g. copyright: 'Anna Schmidt'
const COPYRIGHT = 'Elina Fernandez'

// An audio file stored on Filmmakers
const filmmakersAudio = (code: string) => `https://static.filmmakers.eu/production/${code}.mp3`

const showreels: Showreel[] = [
  {
    title: 'Mitbewohner',
    src: publicFile('videos/mitbewohner.mp4'),
    poster: publicFile('videos/mitbewohner.webp'),
    copyright: COPYRIGHT,
  },
  {
    title: 'Geschwister',
    src: publicFile('videos/geschwister.mp4'),
    poster: publicFile('videos/geschwister.webp'),
    copyright: COPYRIGHT,
  },
  {
    title: 'Vergewaltigung',
    src: publicFile('videos/vergewaltigung.mp4'),
    poster: publicFile('videos/vergewaltigung.webp'),
    copyright: COPYRIGHT,
  },
  {
    title: 'Geschwister',
    filmmakers: [
      { label: '2023', id: 121502 },
      { label: '2023 Sub ESP', id: 121503 },
      { label: 'About me', id: 155593 },
    ],
    copyright: COPYRIGHT,
  },
  // Self-hosted example: add public/videos/comedy.mp4 (and optionally a poster image), then uncomment
  // { title: 'Comedy', src: publicFile('videos/comedy.mp4'), poster: publicFile('videos/comedy.jpg'), copyright: COPYRIGHT },
]

export const profile = {
  name: 'Elina Fernandez',
  creator: 'PedroG',
  email: 'elina@example.com',
  agency: { name: 'Agency Name', url: 'https://example.com' },
  // Start page: the big photo on arrival (fills the screen, faces are kept in frame)
  heroPhoto: { src: headshot, copyright: COPYRIGHT },
  resume: publicFile('resume.pdf'),
  links: [
    { label: 'IMDb', url: 'https://www.imdb.com' },
    { label: 'Filmmakers', url: 'https://www.filmmakers.eu/es/actors/elina-fernandez/' },
    { label: 'Crew United', url: 'https://www.crew-united.com' },
    { label: 'Instagram', url: 'https://www.instagram.com/elinaliz/' },
  ],
  showreels,
  photos: [
    { src: publicFile('photos/1.webp'), copyright: 'Hugo Sánchez' },
    { src: publicFile('photos/2.webp'), copyright: 'Hugo Sánchez' },
    { src: publicFile('photos/3.webp'), copyright: 'Hugo Sánchez' },
    { src: publicFile('photos/4.webp'), copyright: 'Hugo Sánchez' },
    { src: publicFile('photos/5.webp'), copyright: 'Hugo Sánchez' },
    { src: publicFile('photos/6.webp'), copyright: 'Hugo Sánchez' },
    { src: publicFile('photos/7.webp'), copyright: 'Hugo Sánchez' },
    { src: publicFile('photos/8.webp'), copyright: 'Hugo Sánchez' },
    { src: publicFile('photos/9.webp'), copyright: 'Hugo Sánchez' },
    { src: publicFile('photos/10.webp'), copyright: 'Hugo Sánchez' },
    { src: publicFile('photos/11.webp'), copyright: 'Hugo Sánchez' },
    { src: publicFile('photos/12.webp'), copyright: 'Hugo Sánchez' },
  ],
  // "Audio" section: the audio files hosted on Filmmakers, played with the site's own player.
  // To add one: open its Filmmakers embed address, find the ".mp3" link (static.filmmakers.eu/production/<code>.mp3)
  // and paste the <code> here
  voicereels: [
    {
      title: 'Hundert Jahre Einsamkeit (DE)',
      src: filmmakersAudio('695eedfd-4c02-4367-9b22-48feb37d13d3'),
      copyright: COPYRIGHT,
    },
    {
      title: 'Cien años de soledad (ES)',
      src: filmmakersAudio('87d8682b-82f5-47cd-9e58-18ae842c2283'),
      copyright: COPYRIGHT,
    },
    { title: 'La vida es sueño', src: filmmakersAudio('cd0cf919-eeab-4110-9537-cc96c2a368cb'), copyright: COPYRIGHT },
    {
      title: 'Spiegel im Spiegel (DE)',
      src: filmmakersAudio('136d0be7-bf79-4fd3-8a88-8087317c187f'),
      copyright: COPYRIGHT,
    },
    { title: 'Nachricht (DE)', src: filmmakersAudio('d2a9c27e-8fc9-4995-aa7c-31a13f554597'), copyright: COPYRIGHT },
    {
      title: 'Comercial - Werbung Spanisch',
      src: filmmakersAudio('bb5bf990-665b-4f62-9340-ca875f9bd021'),
      copyright: COPYRIGHT,
    },
  ],
  // "Upcoming events" (under "About me"). Date as 'YYYY-MM-DD'; past events hide themselves,
  // and the whole block hides when there is nothing coming up. `url` is optional (tickets, info…)
  events: [
    // Placeholder: replace with the real events
    {
      date: '2026-10-17',
      title: 'Premiere: Cine-Project Berlin',
      place: 'Berlinale Palast, Berlin',
      url: 'https://example.com',
    },
    { date: '2026-11-08', title: 'Theaterstück – Lesung', place: 'Kammerspiele, München' },
  ] as { date: string; title: string; place: string; url?: string }[],
  // "Vita" section: one dropdown per group, shown in this order: training, film, theater
  credits: {
    training: [
      // Placeholder: replace with the real schools / workshops
      { year: '2018 – 2021', title: 'Schauspielstudium', school: 'Schauspielschule München' },
      { year: 2022, title: 'Camera Acting Workshop', school: 'Film Academy Berlin' },
    ],
    film: [
      { year: 2026, title: 'Cine-Project Berlin', role: 'Lead', director: 'M. Müller', company: 'ZDF / UFA' },
      { year: 2024, title: 'Indie Short Film', role: 'Lead', director: 'A. Garcia', company: 'Film Academy' },
    ],
    theater: [
      {
        year: 2025,
        title: 'The London Stage Play',
        role: 'Supporting',
        director: 'S. Jenkins',
        company: 'National Theatre',
      },
    ],
  },
}
