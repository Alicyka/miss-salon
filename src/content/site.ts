export const site = {
  name: 'Miss Salon',
  tagline: 'Rock. Color. Attitude.',
  stylist: 'Alice',

  phone: '40712345678',
  phoneDisplay: '+40 712 345 678',
  whatsappMessage: 'Bună! Am văzut site-ul și aș vrea o programare.',

  instagram: 'https://instagram.com/...',
  facebook: 'https://facebook.com/...',

  address: 'Strada Exemplu 12, București',
} as const;

export const navLinks = [
  { to: '/', label: 'Acasă' },
  { to: '/servicii', label: 'Servicii' },
  { to: '/portofoliu', label: 'Portofoliu' },
  { to: '/despre', label: 'Despre mine' },
  { to: '/consultant', label: 'Consultant AI', highlight: true },
  { to: '/contact', label: 'Contact' },
] as const;

export const salonLocation = {
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=INLOCUIESTE_CU_LINKUL_REAL',
  mapLinkUrl: 'https://maps.app.goo.gl/INLOCUIESTE',
  directions: 'La 5 minute de stația de metrou X. Parcare disponibilă în față.',
} as const;