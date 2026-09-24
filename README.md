# Personal Website (Actors)
1. Easy and less files and folders as possible
2. Easy to read and to mantain
3. One-glance Portfolio design website for casting directors with zero patience.
4. Readable in less than 30 seconds.

# Tech Stack
1. Build it with: React + TypeScript + Vite
2. Deployment with Github Pages: `npm run deploy` (publishes the `dist` build to the `gh-pages` branch)
3. Responsive
4. Good IT practices
5. Simple

# Idea
my-actor-portfolio/
├── public/
│   └── resume.pdf
├── src/
│   ├── assets/
│   │   ├── headshot-main.webp
│   │   ├── headshot-2.webp
│   │   └── background.jpg
│   ├── i18n/
│   │   ├── en.json
│   │   ├── es.json
│   │   └── de.json
│   ├── components/         <-- All page components go here
│   │   ├── Home.tsx            
│   │   ├── Showreels.tsx       
│   │   ├── Gallery.tsx         
│   │   ├── Voicereels.tsx      
│   │   ├── Credits.tsx         
│   │   └── Contact.tsx         
│   ├── App.tsx             <-- Unified coordinator & header layout
│   ├── index.css
│   └── main.tsx
├── package.json
├── tsconfig.json
└── vite.config.ts

# Content
0. Structure:
  * Header (The Navigation Bar). 
      This bar is fixed/sticky at the very top of the screen on every single page. 
      [ Flags/Language Selector: 🌐 EN | ES | DE ]
  * Top-Left (Clickable Link to Home): [ YOUR FIRST & LAST NAME ]
  * Top-Right Menu Links (In order):
    + Home
    + Showreels (Video embed)
    + Gallery (Fotos load)
    + Voicereels (Audio embed)
    + Acting Credits
    + Contact
    + Download Resume (Styled as a distinct button, not just text)
  * Bottom:
    ---------------------------------------------------------------------------
    © 2026 [Your Professional Name]. All Rights Reserved.
    Website created by [Creator's Name]
    
    Impressum  |  Privacy Policy (Datenschutzerklärung)
    ---------------------------------------------------------------------------
