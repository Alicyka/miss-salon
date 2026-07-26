export interface HairAnalysis {
  length: string;
  texture: string;
  thickness: string;
  currentColor: string;
  undertone: string;
  condition: 'bună' | 'medie' | 'deteriorată';
  observations: string[];
  suggestions: string[];
  disclaimer: string;
}