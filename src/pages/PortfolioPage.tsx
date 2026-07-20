import SectionHeading from '../components/ui/SectionHeading';
import Gallery from '../components/portfolio/Gallery';
import BeforeAfterSlider from '../components/portfolio/BeforeAfterSlider';
import { beforeAfters } from '../content/portfolio';

const PortfolioPage = () => (
  <>
    <section className="page-header">
      <div className="container">
        <SectionHeading eyebrow="Portofoliu" title="Lucrări reale, cliente reale">
          Fiecare poză e din salon, fără filtre și fără retuș. Ce vezi e ce iese.
        </SectionHeading>
      </div>
    </section>

    <section className="section">
      <div className="container"><Gallery /></div>
    </section>

    {beforeAfters.length > 0 && (
      <section className="section section-alt">
        <div className="container">
          <SectionHeading eyebrow="Transformări" title="Înainte & după">
            Trage de slider ca să vezi diferența.
          </SectionHeading>
          <div className="ba-list">
            {beforeAfters.map((item) => (
              <BeforeAfterSlider key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    )}
  </>
);

export default PortfolioPage;