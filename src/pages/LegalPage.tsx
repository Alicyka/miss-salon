
import { useParams, Navigate } from 'react-router-dom';
import { legalDocs } from '../content/legal';

const LegalPage = () => {
  const { slug } = useParams();
  const doc = slug ? legalDocs[slug] : undefined;

  if (!doc) return <Navigate to="/" replace />;

  return (
    <section className="section">
      <div className="container legal">
        <h1 className="legal-title">{doc.title}</h1>
        <p className="legal-updated">Ultima actualizare: {doc.updated}</p>
        <p className="legal-intro">{doc.intro}</p>

        {doc.sections.map((section) => (
          <div key={section.heading} className="legal-section">
            <h2>{section.heading}</h2>
            {section.body.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default LegalPage;