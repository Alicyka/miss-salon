import { useState } from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import PhotoUpload from '../components/consultant/PhotoUpload';

const ConsultantPage = () => {
  const [photo, setPhoto] = useState<string | null>(null);

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
                <button className="btn btn-secondary" onClick={() => setPhoto(null)}>
                  Schimbă poza
                </button>
              </div>

              <div className="consultant-panel">
                <p className="consultant-placeholder">
                  Here will apear the AI analysis and color try-on tools. This is a placeholder for the actual functionality that will be implemented later.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ConsultantPage;