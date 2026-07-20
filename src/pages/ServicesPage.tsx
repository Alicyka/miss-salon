import SectionHeading from '../components/ui/SectionHeading';
import Faq from '../components/services/Faq';
import { services, categories } from '../content/services';
import { whatsappUrl } from '../utils/whatsapp';

const ServicesPage = () => {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <SectionHeading eyebrow="Servicii & prețuri" title="Ce pot face pentru părul tău">
            Toate prețurile sunt de pornire. Îți spun exact cât costă la
            consultația de dinainte, nu la final.
          </SectionHeading>
        </div>
      </section>

      {categories.map((category, index) => {
        const list = services.filter((s) => s.category === category.id);
        if (list.length === 0) return null;

        return (
          <section
            key={category.id}
            className={index % 2 === 1 ? 'section section-alt' : 'section'}
          >
            <div className="container">
              <h2 className="category-title">{category.label}</h2>
              <p className="category-intro">{category.intro}</p>

              <ul className="price-list">
                {list.map((service) => (
                  <li key={service.id} className="price-row">
                    <div className="price-row-main">
                      <h3>{service.name}</h3>
                      <p className="price-desc">{service.description}</p>
                      {service.note && <p className="price-note">{service.note}</p>}
                    </div>

                    <div className="price-row-meta">
                      <span className="price-duration">{service.duration}</span>
                      <span className="price-value">
                        de la <strong>{service.priceFrom}</strong> lei
                      </span>
                      <a
                        href={whatsappUrl(`Bună! Aș vrea o programare pentru ${service.name}.`)}
                        className="price-book"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Programează
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Bine de știut" title="Întrebări frecvente" />
          <Faq />
        </div>
      </section>
    </>
  );
};

export default ServicesPage;