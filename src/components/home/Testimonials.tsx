import SectionHeading from '../ui/SectionHeading';
import { testimonials } from '../../content/testimonials';

const Testimonials = () => {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="Ce spun clientele" title="Recenzii" />

        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <blockquote key={item.id} className="testimonial">
              <p className="testimonial-quote">{item.quote}</p>
              <footer className="testimonial-meta">
                <span className="testimonial-author">{item.author}</span>
                <span className="testimonial-service">{item.service}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;