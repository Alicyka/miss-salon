
import SectionHeading from '../components/ui/SectionHeading';
import { about, certifications, schedule } from '../content/about';
import { site } from '../content/site';
import { whatsappUrl } from '../utils/whatsapp';

const AboutPage = () => (
  <>
    <section className="section about-hero">
      <div className="container about-grid">
        <div className="about-portrait">
          <img src="/images/alice.jpg" alt={`${about.name}, stilist la ${site.name}`} />
        </div>

        <div className="about-text">
          <p className="section-eyebrow">Despre mine</p>
          <h1 className="about-name">{about.name}</h1>
          <p className="about-title">{about.title}</p>
          <p className="about-hook">{about.hook}</p>

          {about.paragraphs.map((paragraph, index) => (
            <p key={index} className="about-paragraph">{paragraph}</p>
          ))}

          <blockquote className="about-quote">{about.pullQuote}</blockquote>

          <a href={whatsappUrl()} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Hai să vorbim
          </a>
        </div>
      </div>
    </section>

    <section className="section section-alt">
      <div className="container">
        <SectionHeading eyebrow="Formare" title="Certificări" />
        <ul className="cert-list">
          {certifications.map((cert) => (
            <li key={cert.id} className="cert-item">
              <span className="cert-year">{cert.year}</span>
              <div>
                <h3 className="cert-name">{cert.name}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="Program" title="Când mă găsești" />
        <table className="schedule-table">
          <tbody>
            {schedule.map((row) => (
              <tr key={row.day}>
                <th scope="row">{row.day}</th>
                <td className={row.hours === 'Închis' ? 'closed' : ''}>{row.hours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  </>
);

export default AboutPage;