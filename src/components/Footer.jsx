
import React from 'react';
import { useKiosk } from '../context/KioskContext';

const Footer = () => {
  const { language } = useKiosk();

  const translations = {
    copyright: {
      en: '© 2025 Rahimafrooz Bangladesh Ltd. All rights reserved.',
      bn: '© ২০২৫ রহিমাফরোজ বাংলাদেশ লিমিটেড। সর্বস্বত্ব সংরক্ষিত।'
    },
    helpText: {
      en: 'Need assistance? Tap the screen to continue or ask our staff for help.',
      bn: 'সাহায্য প্রয়োজন? স্ক্রিনে আলতো চাপ দিন অথবা আমাদের কর্মীদের সাহায্য চান।'
    }
  };

  return (
    <footer className="bg-gray-100 py-4 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-2 md:mb-0">
            {translations.copyright[language]}
          </p>
          <p className="text-sm text-rahimafrooz-blue">
            {translations.helpText[language]}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
