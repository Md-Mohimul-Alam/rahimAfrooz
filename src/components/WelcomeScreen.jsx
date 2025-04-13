import React, { useEffect } from 'react';
import { useKiosk } from '../context/KioskContext';
import LanguageSelector from './LanguageSelector';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const WelcomeScreen = () => {
  const { language, setCurrentStep } = useKiosk();

  const translations = {
    welcome: {
      en: 'Welcome to AutoParts',
      bn: 'অটোপার্টসে আপনাকে স্বাগতম',
    },
    subtitle: {
      en: 'Rahimafrooz Car Parts & Accessories Finder',
      bn: 'রহিমাফরোজ গাড়ি পার্টস ও এক্সেসরিজ ফাইন্ডার',
    },
    instruction: {
      en: 'Select your language to continue',
      bn: 'চালিয়ে যেতে আপনার ভাষা নির্বাচন করুন',
    },
    startButton: {
      en: 'Start',
      bn: 'শুরু করুন',
    },
    features: {
      title: {
        en: 'Features',
        bn: 'বৈশিষ্ট্য',
      },
      vehicle: {
        en: 'Select your vehicle',
        bn: 'আপনার গাড়ি নির্বাচন করুন',
      },
      accessories: {
        en: 'Browse compatible accessories',
        bn: 'উপযুক্ত এক্সেসরিজ দেখুন',
      },
      details: {
        en: 'View product details',
        bn: 'পণ্যের বিবরণ দেখুন',
      },
      contacts: {
        en: 'Find where to buy',
        bn: 'কোথায় কিনবেন জানুন',
      },
    },
  };

  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-mount');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 100 * index);
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-6 text-center">
      <div
        className="animate-on-mount opacity-0 transform translate-y-4 transition-all duration-500"
        style={{ transitionDelay: '0.1s' }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-rahimafrooz-blue mb-4">
          {translations.welcome[language]}
        </h1>
      </div>

      <div
        className="animate-on-mount opacity-0 transform translate-y-4 transition-all duration-500"
        style={{ transitionDelay: '0.2s' }}
      >
        <p className="text-xl text-gray-600 mb-8">
          {translations.subtitle[language]}
        </p>
      </div>

      <div
        className="animate-on-mount opacity-0 transform translate-y-4 transition-all duration-500"
        style={{ transitionDelay: '0.3s' }}
      >
        <p className="text-lg mb-6">
          {translations.instruction[language]}
        </p>
      </div>

      <div
        className="animate-on-mount opacity-0 transform translate-y-4 transition-all duration-500"
        style={{ transitionDelay: '0.4s' }}
      >
        <LanguageSelector />
      </div>

      <div
        className="animate-on-mount opacity-0 transform translate-y-4 transition-all duration-500 mt-10"
        style={{ transitionDelay: '0.5s' }}
      >
        <Button
          className="kiosk-btn-primary text-xl px-10 py-6 group"
          onClick={() => setCurrentStep('vehicle')}
        >
          {translations.startButton[language]}
          <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto animate-on-mount opacity-0 transform translate-y-4 transition-all duration-500"
        style={{ transitionDelay: '0.6s' }}
      >
        <h2 className="col-span-2 md:col-span-4 text-2xl font-semibold text-rahimafrooz-blue mb-2">
          {translations.features.title[language]}
        </h2>

        <div className="kiosk-panel">
          <p className="font-medium">{translations.features.vehicle[language]}</p>
        </div>

        <div className="kiosk-panel">
          <p className="font-medium">{translations.features.accessories[language]}</p>
        </div>

        <div className="kiosk-panel">
          <p className="font-medium">{translations.features.details[language]}</p>
        </div>

        <div className="kiosk-panel">
          <p className="font-medium">{translations.features.contacts[language]}</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;