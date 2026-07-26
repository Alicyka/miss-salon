import type { Preferences } from '../../utils/brief';

interface Props {
  value: Preferences;
  onChange: (prefs: Preferences) => void;
}

const BriefForm = ({ value, onChange }: Props) => {
  const update = <K extends keyof Preferences>(key: K, val: Preferences[K]) => {
    onChange({ ...value, [key]: val });
  };

  return (
    <div className="brief-form">
      <label className="field">
        <span className="field-label">Ce îți dorești?</span>
        <textarea
          className="field-input"
          rows={3}
          maxLength={300}
          placeholder="Ex: vreau să trec de la șaten la roz pastel, dar să pot merge și la birou"
          value={value.goal}
          onChange={(e) => update('goal', e.target.value)}
        />
        <span className="field-counter">{value.goal.length}/300</span>
      </label>

      <fieldset className="field">
        <legend className="field-label">Cât de mare să fie schimbarea?</legend>
        <div className="chip-row">
          {(['subtil', 'mediu', 'radical'] as const).map((level) => (
            <button
              key={level}
              type="button"
              className={value.changeLevel === level ? 'chip active' : 'chip'}
              onClick={() => update('changeLevel', level)}
              aria-pressed={value.changeLevel === level}
            >
              {level}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="field">
        <legend className="field-label">Părul tău a mai fost vopsit?</legend>
        <div className="chip-row">
          {([
            { id: 'nu', label: 'Natural' },
            { id: 'vopsit', label: 'Vopsit' },
            { id: 'decolorat', label: 'Decolorat' },
          ] as const).map((option) => (
            <button
              key={option.id}
              type="button"
              className={value.previouslyColored === option.id ? 'chip active' : 'chip'}
              onClick={() => update('previouslyColored', option.id)}
              aria-pressed={value.previouslyColored === option.id}
            >
              {option.label}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="field">
        <legend className="field-label">Când ai vrea să vii?</legend>
        <div className="chip-row">
          {([
            { id: 'saptamana-asta', label: 'Săptămâna asta' },
            { id: 'luna-asta', label: 'Luna asta' },
            { id: 'flexibil', label: 'Sunt flexibilă' },
          ] as const).map((option) => (
            <button
              key={option.id}
              type="button"
              className={value.timing === option.id ? 'chip active' : 'chip'}
              onClick={() => update('timing', option.id)}
              aria-pressed={value.timing === option.id}
            >
              {option.label}
            </button>
          ))}
        </div>
      </fieldset>
    </div>
  );
};

export default BriefForm;