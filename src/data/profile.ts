// Language-independent content. Edit this file to update the website.
// Translated texts live in src/i18n.
import headshot from '../assets/headshot.webp'
import headshot2 from '../assets/headshot.webp'

// Files placed in /public are served from the site root (BASE_URL handles GitHub Pages sub-paths)
const publicFile = (path: string) => `${import.meta.env.BASE_URL}${path}`

// A showreel is one of:
// - Vimeo: the number in vimeo.com/123456789
// - Filmmakers: the src="..." address from the Filmmakers embed (iframe) code
// - Self-hosted: an H.264 .mp4 in public/videos/ (keep each file under 100 MB for GitHub)
type Showreel = { title: string } & ({ vimeoId: string } | { filmmakersUrl: string } | { src: string; poster?: string })

const showreels: Showreel[] = [
  { title: 'Showreel 2026', vimeoId: '1084537' },
  { title: 'Video1', src: publicFile('videos/mitbewohner.mp4') },
  // Filmmakers: paste the real address from the embed code, then uncomment
  // { title: 'Showreel Filmmakers', filmmakersUrl: 'https://www.filmmakers.eu/…/iframe' },
  // Self-hosted example: add public/videos/comedy.mp4 (and optionally a poster image), then uncomment
  // { title: 'Comedy', src: publicFile('videos/comedy.mp4'), poster: publicFile('videos/comedy.jpg') },
]

export const profile = {
  name: 'Elina Fernandez',
  creator: 'PedroG',
  email: 'elina@example.com',
  agency: { name: 'Agency Name', url: 'https://example.com' },
  headshot: headshot,
  headshot2: headshot2,
  resume: publicFile('resume.pdf'),
  links: [
    { label: 'IMDb', url: 'https://www.imdb.com' },
    { label: 'Filmmakers', url: 'https://www.filmmakers.eu' },
    { label: 'Crew United', url: 'https://www.crew-united.com' },
    { label: 'Instagram', url: 'https://www.instagram.com' },
  ],
  showreels,
  photos: [
    publicFile('photos/1.webp'),
    publicFile('photos/2.webp'),
    publicFile('photos/3.webp'),
    publicFile('photos/4.webp'),
    publicFile('photos/5.webp'),
    publicFile('photos/6.webp'),
    publicFile('photos/7.webp'),
    publicFile('photos/8.webp'),
    publicFile('photos/9.webp'),
    publicFile('photos/10.webp'),
  ],
  voicereels: [
    { title: 'Audio1', src: publicFile('audios/commercial-en.mp3') },
    { title: 'Audio2', src: publicFile('audios/narration-de.mp3') },
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
