import SectionHeading from '../components/ui/SectionHeading';
import { site, salonLocation } from '../content/site';
import { schedule } from '../content/about';
import { whatsappUrl } from '../utils/whatsapp';
import { useConsent } from '../context/ConsentContext';

const ContactPage = () => {
  const { consent } = useConsent();

  return (
    <>
      <section className="page-header">
        <div className="container">
          <SectionHeading eyebrow="Contact" title="Hai să ne vedem">
            Cel mai rapid răspuns îl primești pe WhatsApp. Scrie-mi ce vrei să faci
            și îți spun ce se poate și cât durează.
          </SectionHeading>
        </div>
      </section>

    <section className="section">
      <div className="container contact-grid">
        <div className="contact-info">
          <div className="contact-block">
            <h2>Programări</h2>
            <a href={whatsappUrl()} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Scrie-mi pe WhatsApp
            </a>
            <p className="contact-hint">Răspund de obicei în câteva ore, în timpul programului.</p>
          </div>

          <div className="contact-block">
            <h2>Telefon</h2>
            <a href={`tel:+${site.phone}`} className="contact-link">{site.phoneDisplay}</a>
          </div>

          <div className="contact-block">
            <h2>Adresă</h2>
            <p>{site.address}</p>
            <p className="contact-hint">{salonLocation.directions}</p>
            <a href={salonLocation.mapLinkUrl} className="contact-link" target="_blank" rel="noopener noreferrer">
              Deschide în Google Maps →
            </a>
          </div>

          <div className="contact-block">
            <h2>Program</h2>
            <ul className="contact-schedule">
              {schedule.map((row) => (
                <li key={row.day}>
                  <span>{row.day}</span>
                  <span className={row.hours === 'Închis' ? 'closed' : ''}>{row.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="contact-block">
            <h2>Social</h2>
            <div className="contact-social">
              <a href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href={site.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>
          </div>
        </div>

<div className="contact-map">
  {consent === 'accepted' ? (
    <iframe
      src={salonLocation.mapEmbedUrl}
      title={`Harta către ${site.name}`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  ) : (
    <div className="map-placeholder">
      <p>Harta Google se încarcă doar cu acordul tău pentru cookie-uri.</p>
      <a
        href={salonLocation.mapLinkUrl}
        className="btn btn-secondary"
        target="_blank"
        rel="noopener noreferrer"
      >
        Deschide în Google Maps
      </a>
    </div>
  )}
</div>
      </div>
    </section>
  </>
);
}
export default ContactPage;