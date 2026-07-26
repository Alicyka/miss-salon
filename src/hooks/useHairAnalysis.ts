import { useState } from 'react';
import type { HairAnalysis } from '../content/analysis';

export const useHairAnalysis = () => {
  const [analysis, setAnalysis] = useState<HairAnalysis | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const analyze = async (image: string) => {
    setLoading(true);
    setError('');
    setAnalysis(null);

    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error ?? 'Analiza nu a reușit.');
        return;
      }

      setAnalysis(data as HairAnalysis);
    } catch {
      setError('Nu am putut contacta serviciul. Verifică conexiunea.');
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setAnalysis(null);
    setError('');
  };

  return { analysis, isLoading, error, analyze, reset };
};