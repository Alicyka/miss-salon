import { useState, useEffect } from 'react';
import { site } from '../../content/site';

interface Props {
  brief: string;
}

const BriefPanel = ({ brief }: Props) => {
  const [text, setText] = useState(brief);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setText(brief);
  }, [brief]);

  useEffect(() => {
    if (!copied) return;
    const id = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(id);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  const encoded = encodeURIComponent(text);
  const tooLong = encoded.length > 1800;
  const waUrl = `https://wa.me/${site.phone}?text=${encoded}`;

  return (
    <div className="brief-panel">
      <h3 className="brief-title">Mesajul tău, gata de trimis</h3>
      <p className="brief-hint">
        Poți edita textul înainte să-l trimiți — e mesajul tău.
      </p>

      <textarea
        className="brief-textarea"
        rows={12}
        value={text}
        onChange={(e) => setText(e.target.value)}
        aria-label="Mesajul care va fi trimis"
      />

      {tooLong && (
        <p className="brief-warning">
          Mesajul e cam lung pentru trimitere directă. Folosește butonul de
          copiere și lipește-l în WhatsApp.
        </p>
      )}

      <div className="brief-actions">
        {!tooLong && (
          <a
            href={waUrl}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Trimite pe WhatsApp
          </a>
        )}

        <button className="btn btn-secondary" onClick={copy}>
          {copied ? '✓ Copiat' : 'Copiază textul'}
        </button>
      </div>

      <p className="brief-note">
        Nu uita să atașezi și poza în conversație — o vede direct pe telefon.
      </p>
    </div>
  );
};

export default BriefPanel;