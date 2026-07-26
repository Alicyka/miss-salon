import { useState } from 'react';
import { site } from '../../content/site';

interface Props {
  brief: string;
}

const BriefPanel = ({ brief }: Props) => {
  const [copied, setCopied] = useState(false);

  const whatsappLink = `https://wa.me/${site.phone}?text=${encodeURIComponent(brief)}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(brief);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="brief">
      <h3 className="analysis-title">Mesajul tău, gata de trimis</h3>

      <pre className="brief-preview">{brief}</pre>

      <div className="brief-actions">
        <a
          href={whatsappLink}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Trimite pe WhatsApp
        </a>
        <button className="btn btn-secondary" onClick={copy}>
          {copied ? 'Copiat ✓' : 'Copiază textul'}
        </button>
      </div>

      <p className="brief-note">
        Poți edita mesajul în WhatsApp înainte să-l trimiți.
      </p>
    </div>
  );
};

export default BriefPanel;