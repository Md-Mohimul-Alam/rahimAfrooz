import React from 'react';
import { useKiosk } from '../context/KioskContext';
import { Home } from 'lucide-react';

const Header = () => {
  const { currentStep, setCurrentStep, selectedVehicle, language } = useKiosk();

  const resetToWelcome = () => {
    setCurrentStep('welcome');
  };

  const translations = {
    title: {
      en: 'AutoParts',
      bn: 'অটোপার্টস'
    },
    step: {
      en: 'Step',
      bn: 'ধাপ'
    },
    steps: {
      welcome: { en: 'Welcome', bn: 'স্বাগতম' },
      vehicle: { en: 'Vehicle Selection', bn: 'গাড়ি নির্বাচন' },
      products: { en: 'Accessories', bn: 'এক্সেসরিজ' },
      details: { en: 'Product Details', bn: 'পণ্যের বিবরণ' },
      contact: { en: 'Next Steps', bn: 'পরবর্তী পদক্ষেপ' }
    }
  };

  const getStepClass = (step) => {
    const steps = ['welcome', 'vehicle', 'products', 'details', 'contact'];
    const currentIndex = steps.indexOf(currentStep);
    const stepIndex = steps.indexOf(step);

    if (stepIndex === currentIndex) return 'bg-rahimafrooz-blue text-white';
    if (stepIndex < currentIndex) return 'bg-rahimafrooz-lightblue text-white';
    return 'bg-gray-200 text-gray-500';
  };

  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button
            onClick={resetToWelcome}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Home"
          >
            <Home className="text-rahimafrooz-blue" size={24} />
          </button>
          <h1 className="text-2xl font-bold text-rahimafrooz-blue">
            {translations.title[language]}
          </h1>
        </div>

        {currentStep !== 'welcome' && (
          <div className="hidden md:flex items-center space-x-2">
            {['welcome', 'vehicle', 'products', 'details', 'contact'].map((step, index) => (
              <div
                key={step}
                className={`px-3 py-1 rounded-full text-sm font-medium ${getStepClass(step)}`}
              >
                {index + 1}. {translations.steps[step][language]}
              </div>
            ))}
          </div>
        )}

        {selectedVehicle && currentStep !== 'welcome' && (
          <div className="hidden sm:block text-sm bg-gray-100 px-3 py-1 rounded-lg">
            {selectedVehicle.make} {selectedVehicle.model} ({selectedVehicle.year})
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;