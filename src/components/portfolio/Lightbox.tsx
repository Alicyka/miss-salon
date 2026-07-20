import { useEffect } from 'react';
import type { Work } from '../../content/portfolio';

interface Props {
  work: Work;
  onClose: () => void;
}

const Lightbox = ({ work, onClose }: Props) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true" aria-label={work.alt}>
      <button className="lightbox-close" onClick={onClose} aria-label="Închide">✕</button>
      <img
        src={work.src}
        alt={work.alt}
        className="lightbox-image"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

export default Lightbox;