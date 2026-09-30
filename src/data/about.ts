// "About me": details (label + value) and skills (stars = level 1–3, note = small text after it).
// The intro text is in src/i18n/texts.ts (about.text).
import type { Detail, SkillGroup } from './types'

export const details: Detail[] = [
  {
    label: { de: 'Spielalter', en: 'Playing age', es: 'Edad escénica' },
    value: { de: '24 – 35 Jahre', en: '24 – 35', es: '24 – 35 años' },
  },
  { label: { de: 'Größe', en: 'Height', es: 'Altura' }, value: '160 cm' },
  {
    label: { de: 'Augenfarbe', en: 'Eyes', es: 'Ojos' },
    value: { de: 'grau-grün', en: 'grey-green', es: 'gris verdoso' },
  },
  {
    label: { de: 'Haarfarbe', en: 'Hair', es: 'Pelo' },
    value: { de: 'dunkelblond', en: 'dark blonde', es: 'rubio oscuro' },
  },
  { label: { de: 'Stimmlage', en: 'Voice type', es: 'Tesitura' }, value: { de: 'Alt', en: 'Alto', es: 'Contralto' } },
  {
    label: { de: 'Wohnort', en: 'Based in', es: 'Residencia' },
    value: { de: 'München', en: 'Munich', es: 'Múnich' },
  },
  {
    label: { de: 'Wohnmöglichkeiten', en: 'Can work as local in', es: 'Puede trabajar como local en' },
    value: {
      de: 'Berlin (DE), Bogotá (CO), Barcelona (ES), Madrid (ES), Palma (ES)',
      en: 'Berlin (DE), Bogotá (CO), Barcelona (ES), Madrid (ES), Palma (ES)',
      es: 'Berlín (DE), Bogotá (CO), Barcelona (ES), Madrid (ES), Palma (ES)',
    },
  },
  {
    label: { de: 'Geburtsort', en: 'Place of birth', es: 'Lugar de nacimiento' },
    value: { de: 'Bogotá, Kolumbien', en: 'Bogotá, Colombia', es: 'Bogotá, Colombia' },
  },
  {
    label: { de: 'Nationalität', en: 'Nationality', es: 'Nacionalidad' },
    value: { de: 'kolumbianisch', en: 'Colombian', es: 'colombiana' },
  },
  {
    label: { de: 'Ethnische Zugehörigkeit', en: 'Ethnicity', es: 'Etnia' },
    value: {
      de: 'Hispanoamerikanisch, Latina, Weiß / Kaukasisch',
      en: 'Hispanic, Latina, White / Caucasian',
      es: 'Hispanoamericana, latina, blanca / caucásica',
    },
  },
  {
    label: { de: 'Spezialisierung', en: 'Specialisation', es: 'Especialización' },
    value: { de: 'Synchronsprecherin', en: 'Dubbing actress', es: 'Actriz de doblaje' },
  },
]

export const skills: SkillGroup[] = [
  {
    label: { de: 'Sprachen', en: 'Languages', es: 'Idiomas' },
    items: [
      {
        name: { de: 'Spanisch', en: 'Spanish', es: 'Español' },
        level: 3,
        note: { de: 'Muttersprache', en: 'native', es: 'lengua materna' },
      },
      { name: { de: 'Deutsch', en: 'German', es: 'Alemán' }, level: 3 },
      { name: { de: 'Englisch', en: 'English', es: 'Inglés' }, level: 2 },
    ],
  },
  {
    label: { de: 'Dialekte', en: 'Dialects', es: 'Dialectos' },
    items: [
      { name: { de: 'Mexikanisch', en: 'Mexican', es: 'Mexicano' } },
      {
        name: {
          de: 'Nordpeninsular (Kastilisch-Nord)',
          en: 'Northern Peninsular (Northern Castilian)',
          es: 'Peninsular del norte (castellano del norte)',
        },
      },
    ],
  },
  {
    label: { de: 'Akzente', en: 'Accents', es: 'Acentos' },
    items: [{ name: { de: 'Spanisch', en: 'Spanish', es: 'Español' } }],
  },
  {
    label: { de: 'Tanz', en: 'Dance', es: 'Baile' },
    items: [
      { name: 'Bachata', level: 2 },
      { name: { de: 'Jazzdance', en: 'Jazz dance', es: 'Jazz' }, level: 2 },
      { name: 'Merengue', level: 2 },
      { name: { de: 'Modern Dance', en: 'Modern dance', es: 'Danza moderna' }, level: 2 },
      { name: 'Salsa', level: 2 },
    ],
  },
  {
    label: { de: 'Gesang', en: 'Singing', es: 'Canto' },
    items: [
      { name: 'Pop', level: 1 },
      { name: 'Rock', level: 1 },
    ],
  },
  {
    label: { de: 'Sport', en: 'Sports', es: 'Deportes' },
    items: [
      { name: 'Fitness', level: 2 },
      { name: { de: 'Schlittschuhlaufen', en: 'Ice skating', es: 'Patinaje sobre hielo' }, level: 2 },
      { name: { de: 'Ballett', en: 'Ballet', es: 'Ballet' }, level: 1 },
      { name: { de: 'Bouldern', en: 'Bouldering', es: 'Búlder' }, level: 1 },
      { name: 'Pilates', level: 1 },
      { name: { de: 'Schwimmen', en: 'Swimming', es: 'Natación' }, level: 1 },
    ],
  },
  {
    label: { de: 'Besondere Fähigkeiten', en: 'Special skills', es: 'Habilidades especiales' },
    items: [
      { name: { de: 'Improvisation', en: 'Improvisation', es: 'Improvisación' }, level: 2 },
      { name: { de: 'Hörbuch', en: 'Audiobook', es: 'Audiolibro' }, level: 1 },
    ],
  },
]
