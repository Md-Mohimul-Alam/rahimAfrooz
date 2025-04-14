import React from 'react';
import { useKiosk } from '../context/KioskContext';
import { Home } from 'lucide-react';
import logo from '../../public/Logo.jpg'; // Update with your actual path

const Header = () => {
  const { currentStep, setCurrentStep, selectedVehicle, language } = useKiosk();

  const resetToWelcome = () => {
    setCurrentStep('welcome');
  };

  const translations = {
    title: {
      en: 'Rahimafrooz SmartAdvisor',
      bn: 'রহিমাফরুজ স্মার্টপার্টস'
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
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center gap-3">

        {/* Logo and Title */}
        <div className="flex items-center gap-4 w-full md:w-auto">
          <button
            onClick={resetToWelcome}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Home"
          >
            <Home className="text-rahimafrooz-blue" size={24} />
          </button>

          <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200 shadow-sm bg-white">
            <img
              src="../../public/Logo.jpg" // Update with your actual path
              alt="Rahimafrooz Logo"
              className="object-contain w-full h-full"
            />
          </div>

          <h1 className="text-xl md:text-2xl font-bold text-rahimafrooz-blue whitespace-nowrap">
            {translations.title[language]}
          </h1>
        </div>

        {/* Steps Tracker */}
        {currentStep !== 'welcome' && (
          <div className="flex items-center flex-wrap justify-center gap-2">
            {['welcome', 'vehicle', 'products', 'details', 'contact'].map((step, index) => (
              <span
                key={step}
                className={`px-3 py-1 text-xs md:text-sm rounded-full font-medium transition-colors ${getStepClass(step)}`}
              >
                {index + 1}. {translations.steps[step][language]}
              </span>
            ))}
          </div>
        )}

        {/* Vehicle Info */}
        {selectedVehicle && currentStep !== 'welcome' && (
          <div className="text-sm bg-gray-100 px-3 py-1 rounded-md text-gray-700 shadow-sm">
            🚗 {selectedVehicle.make} {selectedVehicle.model} ({selectedVehicle.year})
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;