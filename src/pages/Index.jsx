
import React from 'react';
import { KioskProvider } from '../context/KioskContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WelcomeScreen from '../components/WelcomeScreen';
import VehicleSelector from '../components/VehicleSelector';
import ProductList from '../components/ProductList';
import ProductDetail from '../components/ProductDetail';
import ContactOptions from '../components/ContactOptions';
import { useKiosk } from '../context/KioskContext';

// Internal component that uses the context
const KioskContent = () => {
  const { currentStep } = useKiosk();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {currentStep === 'welcome' && <WelcomeScreen />}
        {currentStep === 'vehicle' && <VehicleSelector />}
        {currentStep === 'products' && <ProductList />}
        {currentStep === 'details' && <ProductDetail />}
        {currentStep === 'contact' && <ContactOptions />}
      </main>
      <Footer />
    </div>
  );
};

// Wrapper component that provides the context
const Index = () => {
  return (
    <KioskProvider>
      <KioskContent />
    </KioskProvider>
  );
};

export default Index;
