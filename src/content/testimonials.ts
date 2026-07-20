export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  service: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote:
      'Am venit cu părul ars de la altă vopsea și am plecat cu roz-ul din capul meu, exact cum îl visam. Mi-a explicat tot ce face și de ce.',
    author: 'Ioana M.',
    service: 'Culori fantasy',
  },
  {
    id: 't2',
    quote:
      'Prima dată când o coafeză nu a încercat să mă convingă să fac altceva decât voiam. A ascultat, apoi a făcut mai bine decât ceream.',
    author: 'Alexandra P.',
    service: 'Balayage',
  },
  {
    id: 't3',
    quote:
      'Am stat 5 ore și n-am simțit. Rezultatul l-am purtat 4 luni și încă arăta bine.',
    author: 'Cristina D.',
    service: 'Decolorare completă',
  },
];