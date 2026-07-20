import { faq } from '../../content/faq';

const Faq = () => {
  return (
    <div className="faq">
      {faq.map((item) => (
        <details key={item.id} className="faq-item">
          <summary className="faq-question">
            {item.question}
            <span className="faq-icon" aria-hidden="true">+</span>
          </summary>
          <p className="faq-answer">{item.answer}</p>
        </details>
      ))}
    </div>
  );
};

export default Faq;