import { Link } from 'react-router-dom';
import { hero } from '../../content/home';
import { whatsappUrl } from '../../utils/whatsapp';

const Hero = () => {
  return (
    <section className="hero">
      <img
        src={hero.image}
        alt={hero.imageAlt}
        className="hero-image"
        fetchPriority="high"
      />
      <div className="hero-overlay" />

      <div className="hero-content">
        <p className="hero-eyebrow">{hero.eyebrow}</p>
        <h1 className="hero-title">{hero.title}</h1>
        <p className="hero-subtitle">{hero.subtitle}</p>

        <div className="hero-actions">
          <a
            href={whatsappUrl()}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {hero.primaryCta}
          </a>
          <Link to="/portofoliu" className="btn btn-secondary">
            {hero.secondaryCta}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;