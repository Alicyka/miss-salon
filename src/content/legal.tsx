export interface LegalSection {
  heading: string;
  body: string[];
}

export interface LegalDoc {
  slug: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}

export const legalDocs: Record<string, LegalDoc> = {
  gdpr: {
    slug: 'gdpr',
    title: 'Politica de confidențialitate (GDPR)',
    updated: 'iulie 2026',
    intro: 'Această politică explică ce date colectăm, de ce și ce drepturi ai.',
    sections: [
      {
        heading: 'Ce date colectăm',
        body: [
          'Când ne scrii pe WhatsApp sau ne suni, primim numărul tău de telefon și mesajul trimis.',
          'Site-ul nu are formulare și nu îți cere date personale ca să îl poți naviga.',
        ],
      },
      {
        heading: 'Fotografiile încărcate în consultantul AI',
        body: [
          'Fotografiile pe care le încarci pentru proba de culoare sunt procesate direct în browserul tău și nu sunt trimise sau stocate pe niciun server.',
          'Pentru analiza părului, fotografia este trimisă temporar către un serviciu de procesare, folosită o singură dată pentru a genera analiza și nu este stocată.',
        ],
      },
      {
        heading: 'Drepturile tale',
        body: [
          'Ai dreptul de a solicita accesul la datele tale, corectarea sau ștergerea lor.',
          'Ne poți contacta oricând la numărul de telefon din pagina de contact.',
        ],
      },
    ],
  },
  cookies: {
    slug: 'cookies',
    title: 'Politica de cookies',
    updated: 'iulie 2026',
    intro: 'Folosim un număr minim de cookie-uri, doar cât să funcționeze site-ul.',
    sections: [
      {
        heading: 'Cookie-uri necesare',
        body: ['Rețin dacă ai acceptat sau respins cookie-urile, ca să nu te întrebăm de fiecare dată.'],
      },
      {
        heading: 'Cookie-uri de la terți',
        body: [
          'Harta Google încorporată în pagina de contact poate seta cookie-uri proprii. Aceasta se încarcă doar după ce accepți.',
        ],
      },
      {
        heading: 'Cum le controlezi',
        body: ['Poți șterge sau bloca cookie-urile oricând din setările browserului tău.'],
      },
    ],
  },
  termeni: {
    slug: 'termeni',
    title: 'Termeni și condiții',
    updated: 'iulie 2026',
    intro: 'Câteva reguli simple pentru programări și servicii.',
    sections: [
      {
        heading: 'Programări și anulări',
        body: [
          'Programările se fac telefonic sau pe WhatsApp.',
          'Te rugăm să anunți orice anulare cu cel puțin 24 de ore înainte.',
        ],
      },
      {
        heading: 'Prețuri',
        body: [
          'Prețurile afișate sunt prețuri de pornire. Prețul final depinde de lungimea și starea părului și îți este comunicat înainte de începerea lucrării.',
        ],
      },
      {
        heading: 'Consultantul AI',
        body: [
          'Analiza și recomandările generate automat sunt orientative și nu înlocuiesc consultația directă cu stilistul.',
        ],
      },
    ],
  },
};