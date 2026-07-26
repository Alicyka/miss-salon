export interface PreferenceOption {
  value: string;
  label: string;
}

export const changeLevels: PreferenceOption[] = [
  { value: 'subtil', label: 'Subtil — vreau doar un refresh' },
  { value: 'vizibil', label: 'Vizibil — dar să pot merge la muncă' },
  { value: 'radical', label: 'Radical — vreau să întorc capete' },
];

export const budgets: PreferenceOption[] = [
  { value: 'pana-300', label: 'Până în 300 lei' },
  { value: '300-500', label: '300 – 500 lei' },
  { value: '500-800', label: '500 – 800 lei' },
  { value: 'flexibil', label: 'Flexibil, contează rezultatul' },
];

export const timings: PreferenceOption[] = [
  { value: 'saptamana-asta', label: 'Săptămâna asta' },
  { value: 'urmatoarele-2', label: 'În următoarele 2 săptămâni' },
  { value: 'flexibil', label: 'Nu mă grăbesc' },
];

export const maintenanceLevels: PreferenceOption[] = [
  { value: 'minim', label: 'Minim — nu vreau retuș des' },
  { value: 'mediu', label: 'Pot veni la 2–3 luni' },
  { value: 'oricat', label: 'Vin oricât de des e nevoie' },
];