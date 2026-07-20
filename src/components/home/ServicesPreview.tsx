import { Link } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';
import { services } from '../../content/services';
import { whatsappUrl } from '../../utils/whatsapp';

const ServicesPreview = () => {
  const featured = services.filter((service) => service.featured);

  return (
    <section className="section" aria-labelledby="servicii-titlu">
      <div className="container">
        <SectionHeading eyebrow="Ce fac" title="Servicii">
          Prețurile pornesc de la sumele de mai jos și se ajustează după lungime
          și starea părului. Îți spun exact cât costă înainte să începem.
        </SectionHeading>

        <div className="services-grid">
          {featured.map((service) => (
            <article key={service.id} className="service-card">
              <div className="service-card-head">
                <h3>{service.name}</h3>
                <span className="service-duration">{service.duration}</span>
              </div>

              <p className="service-desc">{service.description}</p>

              <div className="service-card-foot">
                <p className="service-price">
                  de la <strong>{service.priceFrom}</strong> lei
                </p>
                <a
                  href={whatsappUrl(
                    `Bună! Aș vrea o programare pentru ${service.name}.`
                  )}
                
                  className="service-book"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Programează
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="section-cta">
          <Link to="/servicii" className="btn btn-secondary">
            Vezi toate serviciile și prețurile
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;