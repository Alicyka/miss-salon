import type { HairAnalysis } from '../content/analysis';
import type { HairColor } from '../content/colors';

export interface BriefInput {
  analysis: HairAnalysis | null;
  color: HairColor | null;
  changeLevel: string;
  budget: string;
  timing: string;
  maintenance: string;
  note: string;
}

const labelOf = (options: { value: string; label: string }[], value: string) =>
  options.find((option) => option.value === value)?.label ?? '';

export const buildBrief = (
  input: BriefInput,
  labels: {
    changeLevels: { value: string; label: string }[];
    budgets: { value: string; label: string }[];
    timings: { value: string; label: string }[];
    maintenanceLevels: { value: string; label: string }[];
  }
): string => {
  const lines: (string | false)[] = [
    'Bună! Am folosit consultantul de pe site și uite ce mi-a ieșit:',
    '',
    input.color ? `CE ÎMI DORESC: ${input.color.name}` : false,
    input.color?.needsBleach ? '(am văzut că necesită decolorare)' : false,
    input.color ? '' : false,

    input.analysis ? 'PĂRUL MEU ACUM (estimare din poză):' : false,
    input.analysis ? `• Lungime: ${input.analysis.length}` : false,
    input.analysis ? `• Textură: ${input.analysis.texture}` : false,
    input.analysis ? `• Densitate: ${input.analysis.thickness}` : false,
    input.analysis ? `• Culoare actuală: ${input.analysis.currentColor}` : false,
    input.analysis ? `• Stare: ${input.analysis.condition}` : false,
    input.analysis ? '' : false,

    'PREFERINȚE:',
    input.changeLevel && `• Schimbare: ${labelOf(labels.changeLevels, input.changeLevel)}`,
    input.budget && `• Buget: ${labelOf(labels.budgets, input.budget)}`,
    input.timing && `• Când: ${labelOf(labels.timings, input.timing)}`,
    input.maintenance && `• Întreținere: ${labelOf(labels.maintenanceLevels, input.maintenance)}`,

    input.note.trim() ? '' : false,
    input.note.trim() ? `MENȚIUNI: ${input.note.trim()}` : false,
    '',
    'Ce zici, se poate?',
  ];

  return lines.filter(Boolean).join('\n');
};