import { createContext, useContext, useEffect, useState } from 'react';

type ConsentValue = 'accepted' | 'rejected' | null;

interface ConsentContextType {
  consent: ConsentValue;
  accept: () => void;
  reject: () => void;
}

const STORAGE_KEY = 'miss-salon-consent';

const ConsentContext = createContext<ConsentContextType | undefined>(undefined);

export const ConsentProvider = ({ children }: { children: React.ReactNode }) => {
  const [consent, setConsent] = useState<ConsentValue>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'accepted' || stored === 'rejected') {
        setConsent(stored);
      }
    } catch {
    }
  }, []);

  const save = (value: Exclude<ConsentValue, null>) => {
    setConsent(value);
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      
    }
  };

  return (
    <ConsentContext.Provider
      value={{ consent, accept: () => save('accepted'), reject: () => save('rejected') }}
    >
      {children}
    </ConsentContext.Provider>
  );
};

export const useConsent = () => {
  const context = useContext(ConsentContext);
  if (!context) {
    throw new Error('useConsent trebuie folosit în interiorul ConsentProvider');
  }
  return context;
};