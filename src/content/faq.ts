export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faq: FaqItem[] = [
  {
    id: 'f1',
    question: 'Cât durează o decolorare?',
    answer:
      'Între 3 și 6 ore, în funcție de lungime și de culoarea de start. Dacă părul a mai fost vopsit închis, poate fi nevoie de mai multe ședințe ca să ajungem la nuanța dorită fără să distrugem părul.',
  },
  {
    id: 'f2',
    question: 'Vin cu părul spălat sau nespălat?',
    answer:
      'Nespălat, ideal la 1–2 zile de la ultima spălare. Sebumul natural protejează scalpul în timpul decolorării.',
  },
  {
    id: 'f3',
    question: 'Cât rezistă culorile fantasy?',
    answer:
      'În general 4–8 săptămâni, în funcție de nuanță și de cum îngrijești părul. Nuanțele de albastru și mov rezistă cel mai mult, roșul și rozul se estompează mai repede.',
  },
  {
    id: 'f4',
    question: 'Ce fac dacă vreau să anulez?',
    answer:
      'Anunță-mă cu cel puțin 24 de ore înainte, ca să pot oferi intervalul altcuiva. La colorările lungi, blochez o jumătate de zi din program.',
  },
  {
    id: 'f5',
    question: 'Pot veni dacă am părul deteriorat?',
    answer:
      'Da, dar prima ședință poate fi de tratament, nu de culoare. Îți spun sincer dacă părul suportă ce îți dorești sau dacă mergem pe pași — nu risc sănătatea părului pentru un rezultat rapid.',
  },
];