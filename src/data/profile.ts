// Language-independent content. Edit this file to update the website.
// Translated texts live in src/i18n.

// Placeholders: replace with your own files, e.g.
// import headshot from '../assets/headshot-main.webp'
const placeholder = (id: number) => `https://picsum.photos/id/${id}/800/1200`

export const profile = {
  name: 'Elina Surname',
  creator: "Creator's Name",
  email: 'elina@example.com',
  agency: { name: 'Agency Name', url: 'https://example.com' },
  headshot: placeholder(64),
  // Files placed in /public are served from the site root (BASE_URL handles GitHub Pages sub-paths)
  resume: `${import.meta.env.BASE_URL}resume.pdf`,
  links: [
    { label: 'IMDb', url: 'https://www.imdb.com' },
    { label: 'Filmmakers', url: 'https://www.filmmakers.eu' },
    { label: 'Crew United', url: 'https://www.crew-united.com' },
    { label: 'Instagram', url: 'https://www.instagram.com' },
  ],
  // YouTube video IDs (privacy-friendly youtube-nocookie embed is used)
  showreels: [
    { title: 'Showreel 2026', youtubeId: 'dQw4w9WgXcQ' },
    { title: 'Drama', youtubeId: 'dQw4w9WgXcQ' },
    { title: 'Comedy', youtubeId: 'dQw4w9WgXcQ' },
  ],
  photos: [placeholder(64), placeholder(65), placeholder(338), placeholder(1011), placeholder(1027), placeholder(996)],
  voicereels: [
    { title: 'Commercial (EN)', src: `${import.meta.env.BASE_URL}audio/commercial-en.mp3` },
    { title: 'Narration (DE)', src: `${import.meta.env.BASE_URL}audio/narration-de.mp3` },
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
