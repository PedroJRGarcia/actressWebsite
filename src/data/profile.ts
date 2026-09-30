// Name, contact and links. Files in public/ are written as just their name.
import headshot from '../assets/headshot.webp'

export const profile = {
  name: 'Elina Fernandez',
  creator: 'PedroG',
  email: 'elinafernandez.losproductores@gmail.com',
  agency: { name: 'Agency Name', url: 'https://example.com' },
  heroPhoto: headshot, // big photo on the start page (src/assets/headshot.webp)
  resume: 'resume.pdf', // in public/
  links: [
    { label: 'IMDb', url: 'https://www.imdb.com' },
    { label: 'Filmmakers', url: 'https://www.filmmakers.eu/es/actors/elina-fernandez/' },
    { label: 'Crew United', url: 'https://www.crew-united.com' },
    { label: 'Instagram', url: 'https://www.instagram.com/elinaliz/' },
  ],
}
