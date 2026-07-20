import { useState, useRef } from 'react';
import { compressImage, validateImageFile } from '../../utils/image';

interface Props {
  onPhotoReady: (dataUrl: string) => void;
}

const PhotoUpload = ({ onPhotoReady }: Props) => {
  const [error, setError] = useState('');
  const [isProcessing, setProcessing] = useState(false);
  const [isDragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = async (file: File) => {
    setError('');

    const validationError = validateImageFile(file);
    if (validationError) {
      setError(validationError);
      return;
    }

    setProcessing(true);
    try {
      const dataUrl = await compressImage(file);
      onPhotoReady(dataUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ceva n-a mers. Mai încearcă o dată.');
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="upload">
      <div
        className={isDragging ? 'upload-zone dragging' : 'upload-zone'}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          const file = e.dataTransfer.files[0];
          if (file) handleFile(file);
        }}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="upload-input"
          id="photo-input"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) handleFile(file);
            e.target.value = '';
          }}
        />

        <label htmlFor="photo-input" className="upload-label">
          <span className="upload-icon" aria-hidden="true">📷</span>
          <span className="upload-title">
            {isProcessing ? 'Se procesează...' : 'Încarcă o poză cu părul tău'}
          </span>
          <span className="upload-hint">
            Apasă aici sau trage poza. Ideal: lumină naturală, părul vizibil, fără filtre.
          </span>
        </label>
      </div>

      {error && <p className="upload-error" role="alert">{error}</p>}

      <p className="upload-privacy">
        🔒 Poza ta este redimensionată direct în browser. Pentru proba de culoare nu
        pleacă deloc de pe dispozitivul tău.
      </p>
    </div>
  );
};

export default PhotoUpload;