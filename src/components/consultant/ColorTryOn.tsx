import { useState, useRef, useEffect } from 'react';
import { getSegmenter, applyHairColor } from '../../utils/hairColor';
import { hairColors, type HairColor } from '../../content/colors';

interface Props {
  photo: string;
  onColorPicked: (color: HairColor | null) => void;
}

const ColorTryOn = ({ photo, onColorPicked }: Props) => {
  const [selected, setSelected] = useState<HairColor | null>(null);
  const [intensity, setIntensity] = useState(0.6);
  const [lift, setLift] = useState(0.15);
  const [status, setStatus] = useState<'idle' | 'loading' | 'ready' | 'error'>('idle');

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const maskRef = useRef<Uint8Array | null>(null);

  useEffect(() => {
    let cancelled = false;
    setStatus('loading');

    const prepare = async () => {
      try {
        const img = new Image();
        img.src = photo;
        await img.decode();
        if (cancelled) return;

        const segmenter = await getSegmenter();
        if (cancelled) return;

        const result = segmenter.segment(img);
        const mask = result.categoryMask?.getAsUint8Array();
        result.close();

        if (!mask) {
          setStatus('error');
          return;
        }

        imageRef.current = img;
        maskRef.current = new Uint8Array(mask);
        setStatus('ready');
      } catch {
        if (!cancelled) setStatus('error');
      }
    };

    prepare();
    return () => { cancelled = true; };
  }, [photo]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const img = imageRef.current;
    const mask = maskRef.current;
    if (status !== 'ready' || !canvas || !img || !mask) return;

    if (!selected) {
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      canvas.getContext('2d')?.drawImage(img, 0, 0);
      return;
    }

    applyHairColor(canvas, img, mask, selected.hex, intensity, lift);
  }, [selected, intensity, lift, status]);

  const pick = (color: HairColor) => {
    const next = selected?.id === color.id ? null : color;
    setSelected(next);
    onColorPicked(next);
  };

  return (
    <div className="tryon">
      <div className="tryon-canvas-wrap">
        <canvas ref={canvasRef} className="tryon-canvas" />

        {status === 'loading' && (
          <div className="tryon-overlay">
            <span className="analysis-spinner" aria-hidden="true" />
            <p>Pregătesc simulatorul...</p>
            <small>Prima dată durează câteva secunde.</small>
          </div>
        )}

        {status === 'error' && (
          <div className="tryon-overlay">
            <p>Nu am putut detecta părul în poza asta.</p>
            <small>Încearcă o poză cu părul mai vizibil, pe fundal simplu.</small>
          </div>
        )}
      </div>

      {status === 'ready' && (
        <>
          <div className="tryon-swatches" role="group" aria-label="Alege o culoare">
            {hairColors.map((color) => (
              <button
                key={color.id}
                className={selected?.id === color.id ? 'swatch active' : 'swatch'}
                style={{ backgroundColor: color.hex }}
                onClick={() => pick(color)}
                aria-pressed={selected?.id === color.id}
                title={color.name}
              >
                <span className="sr-only">{color.name}</span>
              </button>
            ))}
          </div>

          {selected && (
            <>
              <p className="tryon-selected">
                <strong>{selected.name}</strong>
                {selected.needsBleach && (
                  <span className="tryon-bleach">
                    necesită decolorare prealabilă
                  </span>
                )}
              </p>

              <div className="tryon-sliders">
                <label>
                  Intensitate
                  <input
                    type="range" min="0.3" max="1" step="0.05"
                    value={intensity}
                    onChange={(e) => setIntensity(Number(e.target.value))}
                  />
                </label>
                <label>
                  Cât de deschis
                  <input
                    type="range" min="0" max="0.75" step="0.05"
                    value={lift}
                    onChange={(e) => setLift(Number(e.target.value))}
                  />
                </label>
              </div>
            </>
          )}

          <p className="tryon-note">
            🔒 Simularea rulează integral în browserul tău. Poza nu se trimite nicăieri.
          </p>
          <p className="tryon-note">
            ⚠️ Simularea e doar orientativă. Rezultatul real depinde de culoarea și starea părului tău.
          </p>
        </>
      )}
    </div>
  );
};

export default ColorTryOn;