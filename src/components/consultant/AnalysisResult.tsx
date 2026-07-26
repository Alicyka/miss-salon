import type { HairAnalysis } from '../../content/analysis';

interface Props {
  analysis: HairAnalysis;
}

const conditionClass: Record<HairAnalysis['condition'], string> = {
  'bună': 'good',
  'medie': 'medium',
  'deteriorată': 'poor',
};

const AnalysisResult = ({ analysis }: Props) => {
  return (
    <div className="analysis">
      <h3 className="analysis-title">Ce văd în poza ta</h3>

      <dl className="analysis-facts">
        <div><dt>Lungime</dt><dd>{analysis.length}</dd></div>
        <div><dt>Textură</dt><dd>{analysis.texture}</dd></div>
        <div><dt>Densitate</dt><dd>{analysis.thickness}</dd></div>
        <div><dt>Culoare</dt><dd>{analysis.currentColor}</dd></div>
        <div><dt>Subton</dt><dd>{analysis.undertone}</dd></div>
        <div>
          <dt>Stare</dt>
          <dd>
            <span className={`condition condition-${conditionClass[analysis.condition]}`}>
              {analysis.condition}
            </span>
          </dd>
        </div>
      </dl>

      {analysis.observations.length > 0 && (
        <div className="analysis-block">
          <h4>Observații</h4>
          <ul>
            {analysis.observations.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      )}

      {analysis.suggestions.length > 0 && (
        <div className="analysis-block">
          <h4>Ce ți s-ar potrivi</h4>
          <ul className="analysis-suggestions">
            {analysis.suggestions.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      )}

      <p className="analysis-disclaimer">{analysis.disclaimer}</p>
    </div>
  );
};

export default AnalysisResult;