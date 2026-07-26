
import { useRef, useState } from 'react';
import type { BeforeAfter } from '../../content/portfolio';

interface Props {
  item: BeforeAfter;
}

const BeforeAfterSlider = ({ item }: Props) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = (clientX: number) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const percent = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, percent)));
  };

  return (
    <div className="ba-wrapper">
      <div
        className="ba-container"
        ref={containerRef}
        onPointerMove={(e) => {
          if (e.buttons === 1) updatePosition(e.clientX);
        }}
        onPointerDown={(e) => updatePosition(e.clientX)}
      >
        <img src={item.after} alt={`După: ${item.alt}`} className="ba-image" draggable={false} />

        <div className="ba-before-layer" style={{ width: `${position}%` }}>
          <img src={item.before} alt={`Înainte: ${item.alt}`} className="ba-image ba-image-fixed" draggable={false} />
        </div>

        <div className="ba-handle" style={{ left: `${position}%` }} aria-hidden="true">
          <span className="ba-handle-grip">⟷</span>
        </div>

        <span className="ba-label ba-label-left">Înainte</span>
        <span className="ba-label ba-label-right">După</span>
      </div>

      <input
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        className="ba-range"
        aria-label={`Compară înainte și după: ${item.title}`}
      />

      <h3 className="ba-title">{item.title}</h3>
      <p className="ba-description">{item.description}</p>
    </div>
  );
};

export default BeforeAfterSlider;