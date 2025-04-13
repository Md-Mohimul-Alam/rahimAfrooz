
import React from 'react';
import { useKiosk } from '../context/KioskContext';
import { Button } from '@/components/ui/button';

const LanguageSelector = () => {
  const { language, setLanguage } = useKiosk();

  return (
    <div className="flex justify-center mt-4 space-x-4">
      <Button
        variant={language === 'en' ? 'default' : 'outline'}
        className={`px-6 py-4 text-lg ${language === 'en' ? 'bg-rahimafrooz-blue' : ''}`}
        onClick={() => setLanguage('en')}
      >
        English
      </Button>
      <Button
        variant={language === 'bn' ? 'default' : 'outline'} 
        className={`px-6 py-4 text-lg ${language === 'bn' ? 'bg-rahimafrooz-blue' : ''}`}
        onClick={() => setLanguage('bn')}
      >
        বাংলা
      </Button>
    </div>
  );
};

export default LanguageSelector;
