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

// One row of the Vita. Leave out "author", "director" or "production" when there is none.
// company: production company for films, theatre for plays
type Training = { year: number | string; title: string; school: string }
type Credit = {
  year: number | string
  title: string
  author?: string
  role: string
  director?: string
  production?: string
  company: string
}

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
      date: '2026-10-08',
      title: 'Premiere: Eine Odyssee oder Backen ohne Mehl',
      place: 'Ithaka, München',
      url: 'https://dasvinzenz.de/reservierungen/',
    },
    { date: '2026-11-08', title: 'Theaterstück – Lesung', place: 'dasvinzenz, München' },
  ] as { date: string; title: string; place: string; url?: string }[],
  // "Vita" section: one dropdown per group, shown in this order: training, film, theater.
  // Newest first. "author" (optional) shows in small letters under the title.
  credits: {
    training: [
      { year: 2023, title: 'Acting for Film Weiterbildung', school: 'Theater Werkmünchen' },
      { year: 2021, title: 'Schauspiel und Vocal Coach Weiterbildung', school: 'Theater Werkmünchen' },
      {
        year: '2009 – 2013',
        title: 'Schauspielstudium',
        school: 'Universidad Central – Escuela Teatro Libre de Bogotá',
      },
    ] as Training[],
    film: [
      {
        year: 2025,
        title: 'Die Poesie des Scheiterns (Kinofilm)',
        role: 'Assistenzärztin (NR)',
        director: 'Holger Borggrefe',
        production: 'Basti Schwarz',
        company: 'Werkmünchen',
      },
      {
        year: 2023,
        title: 'Katastrophe (Kurzfilm)',
        role: 'Tine',
        director: 'Oliver Mohr, Julian Schwandner, Alexander Flatau',
        company: 'Werkmünchen',
      },
      {
        year: 2012,
        title: 'Calma Chicha (Kurzfilm)',
        author: 'nach Haruki Murakamis Roman „Die Chroniken des Aufziehvogels“',
        role: 'Nebenrolle',
        director: 'Alejandro Torrijos',
        company: '¿Para qué? Producciones',
      },
    ] as Credit[],
    theater: [
      {
        year: 2026,
        title: 'Die zweite Natur (in Entwicklung)',
        role: 'Nebenrolle',
        director: 'Eos Schopohl',
        company: 'Theater dasvinzenz',
      },
      {
        year: 2026,
        title: 'Eine Odyssee oder Backen ohne Mehl (in Entwicklung)',
        role: 'Reiseleiterin (HR)',
        director: 'Paulina Platzer / Eos Schopohl',
        company: 'Theater dasvinzenz',
      },
      {
        year: 2025,
        title: 'Ich will keinen Trost von Niemandem – De algún tiempo a esta parte',
        role: 'Emma (HR)',
        director: 'Eos Schopohl',
        company: 'Theater dasvinzenz',
      },
      {
        year: 2025,
        title: 'In Between | Në mes | dazwischen',
        role: 'Reiseleiterin (HR)',
        director: 'Paulina Platzer / Eos Schopohl',
        company: 'Theater dasvinzenz',
      },
      {
        year: 2022,
        title: 'PPP die Performance',
        author: 'Pier Paolo Pasolini',
        role: 'Adler, Frau, der Heilige Franziskus (NR)',
        director: 'Eos Schopohl, Robert Spitz',
        company: 'Theater dasvinzenz',
      },
      {
        year: 2021,
        title: 'Die Schlacht',
        author: 'Heiner Müller',
        role: 'Die Frau, ein Soldat – mehrere Rollen (EHR)',
        director: 'Eos Schopohl, Robert Spitz',
        company: 'Theater dasvinzenz',
      },
      {
        year: 2017,
        title: 'Vor dem Frühstück',
        author: "Eugene O'Neill",
        role: 'Frau Rowland (HR)',
        director: 'Helmer Erazo España',
        company: 'Barro Colorado Teatro',
      },
      {
        year: 2015,
        title: 'La Colección',
        author: 'Harold Pinter (Adaption)',
        role: 'Valeria (EHR)',
        director: 'Juan Alonso',
        company: 'L.P Los Productores',
      },
      {
        year: 2014,
        title: 'Persona a persona',
        author: 'Ingmar Bergman – Theateradaption des Films „Persona“',
        role: 'Elisabet Vogler (HR)',
        director: 'Rodrigo Rodríguez',
        company: 'Ditirambo Teatro',
      },
      {
        year: 2012,
        title: 'Yoshitsune, der junge Samurai',
        author: 'Kanze Nobumitsu',
        role: 'Yoshitsune (HR)',
        company: 'Teatro Libre – Universidad Central',
      },
      {
        year: 2012,
        title: 'Small Craft Warnings',
        author: 'Tennessee Williams',
        role: 'Violet (NR)',
        director: 'Nelson Celis',
        company: 'Teatro Libre – Universidad Central',
      },
      {
        year: '2010 – 2011',
        title: 'The Pillowman',
        author: 'Martin McDonagh',
        role: 'The Jesus Girl (EHR)',
        director: 'Pedro Salazar',
        company: 'La Compañía Estable',
      },
    ] as Credit[],
  },
}

// Only events from today on, soonest first (used by the Events section and the menu)
const today = new Date().toISOString().slice(0, 10)
export const upcoming = profile.events.filter(event => event.date >= today).sort((a, b) => a.date.localeCompare(b.date))
