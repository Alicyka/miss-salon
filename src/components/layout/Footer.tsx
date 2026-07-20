import { Link } from 'react-router-dom';
import { site } from '../../content/site';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <p className="footer-logo">{site.name}</p>
          <p className="footer-tagline">{site.tagline}</p>
        </div>

        <div className="footer-col">
          <h3>Contact</h3>
          <a href={`tel:+${site.phone}`}>{site.phoneDisplay}</a>
          <p>{site.address}</p>
        </div>

        <div className="footer-col">
          <h3>Urmărește-mă</h3>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href={site.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>

        <div className="footer-col">
          <h3>Legal</h3>
          <Link to="/legal/gdpr">Politica GDPR</Link>
          <Link to="/legal/cookies">Politica de cookies</Link>
          <Link to="/legal/termeni">Termeni și condiții</Link>
        </div>
      </div>

      <p className="footer-copy">
        © {year} {site.name}. Toate drepturile rezervate.
      </p>
    </footer>
  );
};

export default Footer;