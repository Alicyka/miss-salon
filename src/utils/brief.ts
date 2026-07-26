import type { HairAnalysis } from '../content/analysis';
import type { HairColor } from '../content/colors';

export interface Preferences {
  goal: string;
  changeLevel: 'subtil' | 'mediu' | 'radical';
  timing: 'saptamana-asta' | 'luna-asta' | 'flexibil';
  previouslyColored: 'nu' | 'vopsit' | 'decolorat';
}

const timingLabels: Record<Preferences['timing'], string> = {
  'saptamana-asta': 'săptămâna asta',
  'luna-asta': 'luna aceasta',
  'flexibil': 'sunt flexibilă',
};

const historyLabels: Record<Preferences['previouslyColored'], string> = {
  'nu': 'părul meu este natural, nevopsit',
  'vopsit': 'am părul vopsit',
  'decolorat': 'am părul decolorat',
};

export const buildBrief = (
  prefs: Preferences,
  color: HairColor | null,
  analysis: HairAnalysis | null
): string => {
  const lines: string[] = ['Bună! Am folosit consultantul de pe site și am pregătit ce îmi doresc:'];

  if (prefs.goal.trim()) {
    lines.push('', `CE ÎMI DORESC: ${prefs.goal.trim()}`);
  }

  if (color) {
    const bleach = color.needsBleach ? ' (știu că necesită decolorare)' : '';
    lines.push('', `CULOARE DORITĂ: ${color.name}${bleach}`);
  }

  lines.push('', `SCHIMBARE: ${prefs.changeLevel}`);
  lines.push(`ISTORIC: ${historyLabels[prefs.previouslyColored]}`);
  lines.push(`CÂND: ${timingLabels[prefs.timing]}`);

  if (analysis) {
    lines.push(
      '',
      'ANALIZA AUTOMATĂ (orientativă):',
      `${analysis.length}, ${analysis.texture}, ${analysis.thickness}`,
      `culoare actuală: ${analysis.currentColor} (subton ${analysis.undertone})`,
      `stare: ${analysis.condition}`
    );

    if (analysis.observations.length > 0) {
      lines.push(`observații: ${analysis.observations.join('; ')}`);
    }
  }

  lines.push('', 'Îți trimit și o poză. Când ai o programare liberă?');

  return lines.join('\n');
};