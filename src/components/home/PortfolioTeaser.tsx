import { Link } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';
import { works } from '../../content/portfolio';

const PortfolioTeaser = () => {
  const preview = works.slice(0, 6);

  return (
    <section className="section section-alt">
      <div className="container">
        <SectionHeading eyebrow="Dovada" title="Lucrări reale" />

        <div className="works-grid">
          {preview.map((work) => (
            <figure key={work.id} className="work-tile">
              <img src={work.src} alt={work.alt} loading="lazy" />
              <figcaption className="work-tag">{work.category}</figcaption>
            </figure>
          ))}
        </div>

        <div className="section-cta">
          <Link to="/portofoliu" className="btn btn-primary">
            Vezi tot portofoliul
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioTeaser;