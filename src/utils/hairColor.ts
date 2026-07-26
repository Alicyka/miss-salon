import { ImageSegmenter, FilesetResolver } from '@mediapipe/tasks-vision';

let segmenterPromise: Promise<ImageSegmenter> | null = null;

export const getSegmenter = () => {
  if (!segmenterPromise) {
    segmenterPromise = (async () => {
      const vision = await FilesetResolver.forVisionTasks(
        'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm'
      );
      return ImageSegmenter.createFromOptions(vision, {
        baseOptions: {
          modelAssetPath:
            'https://storage.googleapis.com/mediapipe-models/image_segmenter/hair_segmenter/float32/latest/hair_segmenter.tflite',
          delegate: 'GPU',
        },
        runningMode: 'IMAGE',
        outputCategoryMask: true,
      });
    })();
  }
  return segmenterPromise;
};

const hexToRgb = (hex: string) => ({
  r: parseInt(hex.slice(1, 3), 16),
  g: parseInt(hex.slice(3, 5), 16),
  b: parseInt(hex.slice(5, 7), 16),
});

const rgbToHsl = (r: number, g: number, b: number) => {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  let h = 0;
  let s = 0;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
    else if (max === g) h = ((b - r) / d + 2) / 6;
    else h = ((r - g) / d + 4) / 6;
  }
  return { h, s, l };
};

const hue2rgb = (p: number, q: number, t: number) => {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
};

const hslToRgb = (h: number, s: number, l: number) => {
  if (s === 0) {
    const v = Math.round(l * 255);
    return { r: v, g: v, b: v };
  }
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  return {
    r: Math.round(hue2rgb(p, q, h + 1 / 3) * 255),
    g: Math.round(hue2rgb(p, q, h) * 255),
    b: Math.round(hue2rgb(p, q, h - 1 / 3) * 255),
  };
};

export const applyHairColor = (
  canvas: HTMLCanvasElement,
  source: HTMLImageElement,
  mask: Uint8Array,
  hex: string,
  intensity: number,
  lift: number
) => {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  canvas.width = source.naturalWidth;
  canvas.height = source.naturalHeight;
  ctx.drawImage(source, 0, 0);

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const pixels = imageData.data;

  const target = hexToRgb(hex);
  const targetHsl = rgbToHsl(target.r, target.g, target.b);

  for (let i = 0; i < mask.length; i++) {
    if (mask[i] !== 1) continue;

    const p = i * 4;
    const original = rgbToHsl(pixels[p], pixels[p + 1], pixels[p + 2]);

    const lightness = Math.min(1, original.l + lift * (1 - original.l));

    const newColor = hslToRgb(targetHsl.h, targetHsl.s, lightness);

    pixels[p]     = pixels[p]     + (newColor.r - pixels[p])     * intensity;
    pixels[p + 1] = pixels[p + 1] + (newColor.g - pixels[p + 1]) * intensity;
    pixels[p + 2] = pixels[p + 2] + (newColor.b - pixels[p + 2]) * intensity;
  }

  ctx.putImageData(imageData, 0, 0);
};