// Name, contact and links. Files in public/ are written as just their name.
import headshot from '../assets/headshot.webp'

export const profile = {
  name: 'Elina Fernandez',
  creator: 'PedroG',
  email: 'elinafernandez.losproductores@gmail.com',
  // Agency: uncomment when there is one, and it shows up under Contact
  // agency: { name: 'Agency Name', url: 'https://example.com' },
  heroPhoto: headshot, // big photo on the start page (src/assets/headshot.webp)
  heroPhotoBy: 'Hugo Sánchez', // photographer of that photo, shown as ©
  // CV per language, files in public/. The button downloads the one for the language the visitor has chosen
  resume: { de: 'vita-de.pdf', en: 'vita-en.pdf', es: 'vita-es.pdf' },
  links: [
    // { label: 'IMDb', url: 'https://www.imdb.com' }, // uncomment with the profile link once there is one
    { label: 'Filmmakers', url: 'https://www.filmmakers.eu/es/actors/elina-fernandez/' },
    // { label: 'Crew United', url: 'https://www.crew-united.com' }, // same
    { label: 'Instagram', url: 'https://www.instagram.com/elinaliz/' },
  ],
}
