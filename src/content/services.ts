export type ServiceCategory = 'color' | 'cut' | 'extensions' | 'events' | 'care';

export interface Service {
  id: string;
  name: string;
  description: string;
  priceFrom: number;
  duration: string;
  category: ServiceCategory;
  featured?: boolean;
  note?: string;
}

export const categories: { id: ServiceCategory; label: string; intro: string }[] = [
  {
    id: 'color',
    label: 'Culoare',
    intro: 'De la nuanțe naturale la curcubeu. Prețul depinde de lungime, densitate și de câte ședințe de decolorare are nevoie părul tău.',
  },
  {
    id: 'cut',
    label: 'Coafor & tuns',
    intro: 'Tuns adaptat formei feței și texturii părului, cu spălat și styling incluse.',
  },
  {
    id: 'extensions',
    label: 'Extensii de păr',
    intro: 'Lungime și volum instant. Alegem împreună metoda care se potrivește cu părul tău natural.',
  },
  {
    id: 'events',
    label: 'Ocazii & machiaj',
    intro: 'Nuntă, botez, banchet sau ședință foto — coafură și machiaj, făcute să reziste toată ziua.',
  },
  {
    id: 'care',
    label: 'Îngrijire',
    intro: 'Tratamente de reconstrucție, mai ales pentru păr decolorat sau deteriorat.',
  },
];

export const services: Service[] = [
  // ——— colors ———
  {
    id: 'color-fantasy',
    name: 'Culori fantasy',
    description: 'Roz, mov, turcoaz, curcubeu. Decolorare + pigment, adaptat la lungimea și starea părului.',
    priceFrom: 450,
    duration: '4–6 h',
    category: 'color',
    featured: true,
  },
  {
    id: 'balayage',
    name: 'Balayage',
    description: 'Tranziție naturală, fără linie de demarcație. Crește frumos, fără retuș lunar.',
    priceFrom: 350,
    duration: '3–4 h',
    category: 'color',
    featured: true,
  },
  {
    id: 'vopsit-complet',
    name: 'Vopsit complet',
    description: 'Culoare uniformă pe toată lungimea, în orice nuanță — de la natural la intens.',
    priceFrom: 200,
    duration: '2–3 h',
    category: 'color',
  },
  {
    id: 'retus-radacina',
    name: 'Retuș rădăcină',
    description: 'Pentru culoarea deja existentă, la 4–8 săptămâni de la ultima ședință.',
    priceFrom: 150,
    duration: '1,5–2 h',
    category: 'color',
  },
  {
    id: 'decolorare',
    name: 'Decolorare completă',
    description: 'Baza pentru orice culoare intensă. Cu tratament de refacere inclus.',
    priceFrom: 300,
    duration: '3–5 h',
    category: 'color',
    note: 'Părul foarte închis sau vopsit anterior poate necesita mai multe ședințe.',
  },

  // ——— hair styles and cutting ———
  {
    id: 'tuns-modern',
    name: 'Tunsori moderne',
    description: 'Bob, shag, wolf cut, breton — tunsori actuale, adaptate formei feței.',
    priceFrom: 120,
    duration: '1 h',
    category: 'cut',
  },
  {
    id: 'spalat-coafat',
    name: 'Spălat & coafat',
    description: 'Spălat, tratament rapid și styling: bucle, îndreptat sau volum.',
    priceFrom: 80,
    duration: '45 min',
    category: 'cut',
  },

  // ——— Extensions ———
  {
    id: 'extensii-montaj',
    name: 'Montaj extensii',
    description: 'Lungime și volum, cu păr natural. Alegem împreună metoda și nuanța potrivită.',
    priceFrom: 400,
    duration: '2–4 h',
    category: 'extensions',
    featured: true,
    note: 'Prețul nu include costul părului. Îți spun exact totalul la consultație.',
  },
  {
    id: 'extensii-intretinere',
    name: 'Întreținere extensii',
    description: 'Repoziționare la 2–3 luni, ca extensiile să arate bine și să nu îți afecteze părul.',
    priceFrom: 200,
    duration: '2–3 h',
    category: 'extensions',
  },

  // ——— Ocasions and make-up ———
  {
    id: 'coafat-ocazii',
    name: 'Coafat ocazii',
    description: 'Nuntă, botez, banchet. Coafură construită să reziste toată ziua și toată noaptea.',
    priceFrom: 180,
    duration: '1–1,5 h',
    category: 'events',
    featured: true,
  },
  {
    id: 'machiaj',
    name: 'Machiaj',
    description: 'Machiaj de zi sau de seară, potrivit cu ținuta și cu lumina evenimentului.',
    priceFrom: 150,
    duration: '1 h',
    category: 'events',
  },
  {
    id: 'pachet-ocazie',
    name: 'Pachet coafură + machiaj',
    description: 'Amândouă într-o singură ședință, la preț mai bun decât separat.',
    priceFrom: 300,
    duration: '2–2,5 h',
    category: 'events',
    note: 'Pentru mirese, recomand o probă în prealabil.',
  },

  // ——— Caring ———
  {
    id: 'tratament',
    name: 'Tratament de refacere',
    description: 'Pentru păr decolorat sau deteriorat. Reconstrucție în profunzime.',
    priceFrom: 150,
    duration: '45 min',
    category: 'care',
  },
];