import { useState } from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import PhotoUpload from '../components/consultant/PhotoUpload';
import { useHairAnalysis } from '../hooks/useHairAnalysis';
import AnalysisResult from '../components/consultant/AnalysisResult';

const ConsultantPage = () => {
  const [photo, setPhoto] = useState<string | null>(null);
  const { analysis, isLoading, error, analyze, reset } = useHairAnalysis();

  return (
    <>
      <section className="page-header">
        <div className="container">
          <SectionHeading eyebrow="Consultant AI" title="Ce ți s-ar potrivi?">
            Încarcă o poză cu părul tău. Primești o analiză scurtă, poți proba
            culori direct pe poza ta, iar la final îți generez un mesaj gata de
            trimis către mine — ca să știu exact ce îți dorești.
          </SectionHeading>
        </div>
      </section>

      <section className="section">
        <div className="container consultant">
          {!photo ? (
            <PhotoUpload onPhotoReady={setPhoto} />
          ) : (
            <div className="consultant-workspace">
              <div className="consultant-photo">
                <img src={photo} alt="Poza încărcată de tine" />
                <button className="btn btn-secondary" onClick={() =>{ setPhoto(null); reset()}}>
                  Schimbă poza
                </button>
              </div>
              <div className="consultant-panel">
  {!analysis && !isLoading && (
    <>
      <p className="consultant-intro">
        Apasă butonul și îți spun ce văd: lungime, textură, culoare actuală
        și în ce stare pare părul.
      </p>
      <button className="btn btn-primary" onClick={() => analyze(photo)}>
        Analizează-mi părul
      </button>
      <p className="consultant-note">
        Pentru analiză, poza e trimisă temporar către un serviciu de procesare
        și nu este stocată.
      </p>
    </>
  )}

  {isLoading && (
    <div className="analysis-loading">
      <span className="analysis-spinner" aria-hidden="true" />
      <p>Mă uit la poza ta...</p>
    </div>
  )}

  {error && <p className="upload-error" role="alert">{error}</p>}

  {analysis && (
    <>
      <AnalysisResult analysis={analysis} />
      <button className="btn btn-secondary" onClick={reset}>
        Analizează din nou
      </button>
    </>
  )}
</div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ConsultantPage;