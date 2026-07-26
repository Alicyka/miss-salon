import {
  changeLevels,
  budgets,
  timings,
  maintenanceLevels,
  type PreferenceOption,
} from '../../content/preferences';

interface Props {
  changeLevel: string;
  budget: string;
  timing: string;
  maintenance: string;
  note: string;
  onChange: (field: string, value: string) => void;
}

const RadioGroup = ({
  legend,
  name,
  options,
  value,
  onChange,
}: {
  legend: string;
  name: string;
  options: PreferenceOption[];
  value: string;
  onChange: (value: string) => void;
}) => (
  <fieldset className="pref-group">
    <legend>{legend}</legend>
    {options.map((option) => (
      <label key={option.value} className="pref-option">
        <input
          type="radio"
          name={name}
          value={option.value}
          checked={value === option.value}
          onChange={(e) => onChange(e.target.value)}
        />
        <span>{option.label}</span>
      </label>
    ))}
  </fieldset>
);

const PreferencesForm = ({ changeLevel, budget, timing, maintenance, note, onChange }: Props) => (
  <div className="prefs">
    <h3 className="analysis-title">Câteva detalii despre tine</h3>

    <RadioGroup
      legend="Cât de mult vrei să se schimbe?"
      name="change"
      options={changeLevels}
      value={changeLevel}
      onChange={(v) => onChange('changeLevel', v)}
    />

    <RadioGroup
      legend="Ce buget ai în minte?"
      name="budget"
      options={budgets}
      value={budget}
      onChange={(v) => onChange('budget', v)}
    />

    <RadioGroup
      legend="Când ai vrea să vii?"
      name="timing"
      options={timings}
      value={timing}
      onChange={(v) => onChange('timing', v)}
    />

    <RadioGroup
      legend="Cât de des poți veni la retuș?"
      name="maintenance"
      options={maintenanceLevels}
      value={maintenance}
      onChange={(v) => onChange('maintenance', v)}
    />

    <label className="pref-note">
      <span>Altceva ce ar trebui să știu? (opțional)</span>
      <textarea
        rows={3}
        value={note}
        maxLength={300}
        placeholder="Ex: am părul vopsit negru de acasă, sunt alergică la..."
        onChange={(e) => onChange('note', e.target.value)}
      />
    </label>
  </div>
);

export default PreferencesForm;