// Interface texts (menu, buttons, headings…), every language side by side.
// Change a text: edit it here. Same in every language: write just '…' instead of { de, en, es }.
// Legal texts (Impressum, privacy policy) are in legal.ts.
export const texts = {
  // Date format of each language (used for event dates)
  locale: { de: 'de-DE', en: 'en-GB', es: 'es-ES' },
  nav: {
    home: { de: 'Start', en: 'Home', es: 'Inicio' },
    events: { de: 'Upcoming', en: 'Upcoming', es: 'Agenda' },
    showreels: 'Showreels',
    gallery: { de: 'Gallery', en: 'Gallery', es: 'Galería' },
    audio: 'Audio',
    vita: { de: 'Vita', en: 'Background', es: 'Trayectoria' },
    contact: { de: 'Kontakt', en: 'Contact', es: 'Contacto' },
  },
  resume: { de: 'Vita herunterladen', en: 'Download Resume', es: 'Descargar CV' },
  role: { de: 'Schauspielerin', en: 'Actress', es: 'Actriz' },
  watchReel: { de: 'Showreel ansehen ▶', en: 'Watch Showreel ▶', es: 'Ver videobook ▶' },
  events: {
    title: { de: 'Upcoming', en: 'Upcoming events', es: 'Próximos eventos' },
    more: { de: 'Mehr Infos', en: 'More info', es: 'Más info' },
  },
  filmmakersConsent: {
    // Small line under the ▶ button, shown before the video is loaded (details: section 4 of the privacy policy)
    text: {
      de: 'Wird von Filmmakers abgespielt · Dabei werden Daten wie Ihre IP-Adresse übertragen und ein Cookie gesetzt (siehe Datenschutz)',
      en: 'Plays from Filmmakers · this sends them data such as your IP address and sets a cookie (see Privacy policy)',
      es: 'Se reproduce desde Filmmakers · se envían datos como tu dirección IP y se instala una cookie (ver Privacidad)',
    },
    button: { de: 'Video abspielen', en: 'Play video', es: 'Reproducir vídeo' },
  },
  // Small line under the audios (details: section 5 of the privacy policy)
  filmmakersAudioNote: {
    de: 'Wird beim Abspielen von Filmmakers geladen · Dabei wird Ihre IP-Adresse übertragen (siehe Datenschutz)',
    en: 'Loaded from Filmmakers when played · this sends them your IP address (see Privacy policy)',
    es: 'Se carga desde Filmmakers al reproducir · se envía tu dirección IP (ver Privacidad)',
  },
  about: {
    title: { de: 'Über mich', en: 'About me', es: 'Sobre mí' },
    text: {
      de: 'Ich bin Schauspielerin mit Sitz in München und spiele auf Deutsch, Englisch und Spanisch. Hier steht ein kurzer Text über meine Ausbildung, meine Erfahrung und was mich ausmacht.',
      en: 'I am an actress based in Munich, working in German, English and Spanish. This is a short text about my training, my experience and what makes me unique.',
      es: 'Soy actriz, vivo en Múnich y trabajo en alemán, inglés y español. Aquí va un breve texto sobre mi formación, mi experiencia y lo que me hace única.',
    },
  },
  vita: {
    training: { de: 'Ausbildung', en: 'Training', es: 'Formación' },
    film: { de: 'Film', en: 'Film', es: 'Cine' },
    theater: { de: 'Theater', en: 'Theatre', es: 'Teatro' },
    director: { de: 'Regie', en: 'Director', es: 'Dirección' },
    production: { de: 'Produktion', en: 'Production', es: 'Producción' },
    studio: { de: 'Produktionsfirma', en: 'Production company', es: 'Productora' },
    stage: { de: 'Theater', en: 'Theatre', es: 'Teatro' },
    school: { de: 'Schule', en: 'School', es: 'Escuela' },
    author: { de: 'Autor', en: 'Author', es: 'Autor' },
    photo: { de: 'Foto', en: 'Photo', es: 'Foto' },
    lead: { de: 'Hauptrolle', en: 'Lead role', es: 'Papel protagonista' },
    supporting: { de: 'Nebenrolle', en: 'Supporting role', es: 'Papel secundario' },
    episodeLead: { de: 'Episodenhauptrolle', en: 'Episode lead', es: 'Protagonista de episodio' },
    feature: { de: 'Kinofilm', en: 'Feature film', es: 'Largometraje' },
    short: { de: 'Kurzfilm', en: 'Short film', es: 'Cortometraje' },
    inDevelopment: { de: 'in Entwicklung', en: 'in development', es: 'en desarrollo' },
  },
  contact: {
    email: { de: 'E-Mail', en: 'Email', es: 'Email' },
    agency: { de: 'Agentur', en: 'Agency', es: 'Agencia' },
  },
  footer: {
    rights: { de: 'Alle Rechte vorbehalten.', en: 'All Rights Reserved.', es: 'Todos los derechos reservados.' },
    createdBy: { de: 'Website erstellt von', en: 'Website created by', es: 'Web creada por' },
    impressum: { de: 'Impressum', en: 'Impressum', es: 'Aviso legal (Impressum)' },
    privacy: { de: 'Datenschutzerklärung', en: 'Privacy Policy', es: 'Política de privacidad' },
  },
}
