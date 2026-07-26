import { Link } from 'react-router-dom';
import { useConsent } from '../../context/ConsentContext';

const CookieBanner = () => {
  const { consent, accept, reject } = useConsent();

  if (consent !== null) return null;

  return (
    <div className="cookie-banner" role="region" aria-label="Consimțământ cookies">
      <p className="cookie-text">
        Folosim un minim de cookie-uri ca site-ul să funcționeze, iar harta Google
        din pagina de contact se încarcă doar dacă ești de acord.{' '}
        <Link to="/legal/cookies">Detalii</Link>
      </p>

      <div className="cookie-actions">
        <button className="btn btn-secondary" onClick={reject}>
          Doar necesare
        </button>
        <button className="btn btn-primary" onClick={accept}>
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;