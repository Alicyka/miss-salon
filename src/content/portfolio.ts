export type WorkCategory = 'fantasy' | 'balayage' | 'blond' | 'rosu' | 'tuns';

export interface Work {
  id: string;
  src: string;
  alt: string;
  category: WorkCategory;
  caption?: string;
}

export interface BeforeAfter {
  id: string;
  before: string;
  after: string;
  alt: string;
  title: string;
  description: string;
}

export const workCategories: { id: WorkCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'Toate' },
  { id: 'fantasy', label: 'Fantasy' },
  { id: 'balayage', label: 'Balayage' },
  { id: 'blond', label: 'Blond & argintiu' },
  { id: 'rosu', label: 'Roșu & aramiu' },
  { id: 'tuns', label: 'Tuns' },
];

export const works: Work[] = [
  { id: 'w1', src: '/images/portfolio/1.jpg', alt: 'Păr vopsit roz și albastru electric', category: 'fantasy' },
  { id: 'w2', src: '/images/portfolio/2.jpg', alt: 'Ombre turcoaz pe bază închisă', category: 'fantasy' },
  { id: 'w3', src: '/images/portfolio/3.jpg', alt: 'Împletitură cu șuvițe curcubeu', category: 'fantasy' },
  { id: 'w4', src: '/images/portfolio/4.jpg', alt: 'Roșu arămiu cu bucle', category: 'rosu' },
  { id: 'w5', src: '/images/portfolio/5.jpg', alt: 'Blond argintiu, lungime medie', category: 'blond' },
  { id: 'w6', src: '/images/portfolio/6.jpg', alt: 'Balayage caramel', category: 'balayage' },
];

export const beforeAfters: BeforeAfter[] = [
  {
    id: 'ba1',
    before: '/images/before-after/1-before.jpg',
    after: '/images/before-after/1-after.jpg',
    alt: 'Transformare din brunet în roz fantasy',
    title: 'Din brunet în roz fantasy',
    description: 'Două ședințe de decolorare, cu tratament de reconstrucție între ele.',
  },
];

