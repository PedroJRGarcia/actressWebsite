// Language-independent content. Edit this file to update the website.
// Translated texts live in src/i18n.

// Placeholders: replace with your own files, e.g.
// import headshot from '../assets/headshot-main.webp'
const placeholder = (id: number) => `https://picsum.photos/id/${id}/800/1200`

// Files placed in /public are served from the site root (BASE_URL handles GitHub Pages sub-paths)
const publicFile = (path: string) => `${import.meta.env.BASE_URL}${path}`

// A showreel is either a Vimeo video (the number in vimeo.com/123456789)
// or a self-hosted .mp4 in public/video/ (keep each file under 100 MB for GitHub)
type Showreel = { title: string } & ({ vimeoId: string } | { src: string; poster?: string })

const showreels: Showreel[] = [
  { title: 'Showreel 2026', vimeoId: '1084537' },
  { title: 'Drama', vimeoId: '1084537' },
  // Self-hosted example: add public/video/comedy.mp4 (and optionally a poster image), then uncomment
  // { title: 'Comedy', src: publicFile('video/comedy.mp4'), poster: publicFile('video/comedy.jpg') },
]

export const profile = {
  name: 'Elina Surname',
  creator: "Creator's Name",
  email: 'elina@example.com',
  agency: { name: 'Agency Name', url: 'https://example.com' },
  headshot: publicFile('photos/headshot.webp'),
  resume: publicFile('resume.pdf'),
  links: [
    { label: 'IMDb', url: 'https://www.imdb.com' },
    { label: 'Filmmakers', url: 'https://www.filmmakers.eu' },
    { label: 'Crew United', url: 'https://www.crew-united.com' },
    { label: 'Instagram', url: 'https://www.instagram.com' },
  ],
  showreels,
  photos: [placeholder(64), placeholder(65), placeholder(338), placeholder(1011), placeholder(1027), placeholder(996)],
  voicereels: [
    { title: 'Commercial (EN)', src: publicFile('audio/commercial-en.mp3') },
    { title: 'Narration (DE)', src: publicFile('audio/narration-de.mp3') },
  ],
  credits: [
    { year: 2026, title: 'Cine-Project Berlin', role: 'Lead', director: 'M. Müller', company: 'ZDF / UFA' },
    {
      year: 2025,
      title: 'The London Stage Play',
      role: 'Supporting',
      director: 'S. Jenkins',
      company: 'National Theatre',
    },
    { year: 2024, title: 'Indie Short Film', role: 'Lead', director: 'A. Garcia', company: 'Film Academy' },
  ],
}
