import React, { createContext, useContext, useState } from 'react';

const KioskContext = createContext(undefined);

export const KioskProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [currentStep, setCurrentStep] = useState('welcome');
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <KioskContext.Provider
      value={{
        language,
        setLanguage,
        currentStep,
        setCurrentStep,
        selectedVehicle,
        setSelectedVehicle,
        selectedProduct,
        setSelectedProduct,
        filteredProducts,
        setFilteredProducts,
        selectedCategory,
        setSelectedCategory
      }}
    >
      {children}
    </KioskContext.Provider>
  );
};

export const useKiosk = () => {
  const context = useContext(KioskContext);
  if (context === undefined) {
    throw new Error('useKiosk must be used within a KioskProvider');
  }
  return context;
};