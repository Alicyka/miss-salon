export interface HairColor {
  id: string;
  name: string;
  hex: string;
  needsBleach: boolean;
}

export const hairColors: HairColor[] = [
  { id: 'pink',      name: 'Roz șocant',    hex: '#ff3d9a', needsBleach: true },
  { id: 'purple',    name: 'Mov electric',  hex: '#9b4dff', needsBleach: true },
  { id: 'blue',      name: 'Albastru',      hex: '#2bb8ff', needsBleach: true },
  { id: 'teal',      name: 'Turcoaz',       hex: '#00c2a8', needsBleach: true },
  { id: 'green',     name: 'Verde acid',    hex: '#2fe06a', needsBleach: true },
  { id: 'silver',    name: 'Argintiu',      hex: '#b9bec4', needsBleach: true },
  { id: 'blonde',    name: 'Blond auriu',   hex: '#d9b45b', needsBleach: true },
  { id: 'red',       name: 'Roșu intens',   hex: '#e0245e', needsBleach: false },
  { id: 'copper',    name: 'Aramiu',        hex: '#c2571a', needsBleach: false },
  { id: 'chocolate', name: 'Ciocolatiu',    hex: '#4a2c20', needsBleach: false },
];