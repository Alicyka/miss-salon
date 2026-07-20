export const MAX_FILE_MB = 10;

export const compressImage = (
  file: File,
  maxSize = 1024,
  quality = 0.85
): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onerror = () => reject(new Error('Nu am putut citi fișierul.'));

    reader.onload = () => {
      const img = new Image();

      img.onerror = () => reject(new Error('Fișierul nu pare să fie o imagine validă.'));

      img.onload = () => {
        const scale = Math.min(1, maxSize / Math.max(img.width, img.height));
        const canvas = document.createElement('canvas');
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);

        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject(new Error('Browserul nu suportă procesarea imaginilor.'));
          return;
        }

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };

      img.src = reader.result as string;
    };

    reader.readAsDataURL(file);
  });

export const validateImageFile = (file: File): string | null => {
  if (!file.type.startsWith('image/')) {
    return 'Te rog alege o imagine (JPG sau PNG).';
  }
  if (file.size > MAX_FILE_MB * 1024 * 1024) {
    return `Imaginea e prea mare (max ${MAX_FILE_MB} MB).`;
  }
  return null;
};