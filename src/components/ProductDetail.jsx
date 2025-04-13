
import React from 'react';
import { useKiosk } from '../context/KioskContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ChevronLeft, 
  Clock, 
  MapPin, 
  Star, 
  Phone,
  ShoppingCart,
  Share2,
  FileText
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const ProductDetail = () => {
  const { 
    language, 
    setCurrentStep, 
    selectedProduct,
    selectedVehicle
  } = useKiosk();

  if (!selectedProduct) {
    setCurrentStep('products');
    return null;
  }

  const translations = {
    backToProducts: {
      en: 'Back to Products',
      bn: 'পণ্য তালিকায় ফিরে যান'
    },
    productDetails: {
      en: 'Product Details',
      bn: 'পণ্যের বিবরণ'
    },
    specifications: {
      en: 'Specifications',
      bn: 'বিশেষ বৈশিষ্ট্য'
    },
    compatibleWith: {
      en: 'Compatible with',
      bn: 'সামঞ্জস্যপূর্ণ'
    },
    price: {
      en: 'Price',
      bn: 'মূল্য'
    },
    taka: {
      en: 'Tk',
      bn: '৳'
    },
    inStock: {
      en: 'In Stock',
      bn: 'মজুদ আছে'
    },
    outOfStock: {
      en: 'Out of Stock',
      bn: 'মজুদ নেই'
    },
    location: {
      en: 'Location',
      bn: 'অবস্থান'
    },
    rating: {
      en: 'Customer Rating',
      bn: 'গ্রাহক রেটিং'
    },
    nextSteps: {
      en: 'Next Steps',
      bn: 'পরবর্তী পদক্ষেপ'
    },
    findInStore: {
      en: 'Find in Store',
      bn: 'স্টোরে খুঁজুন'
    },
    callForInquiry: {
      en: 'Call for Inquiry',
      bn: 'তথ্যের জন্য কল করুন'
    },
    share: {
      en: 'Share Product',
      bn: 'পণ্য শেয়ার করুন'
    },
    technicalDetails: {
      en: 'Technical Details',
      bn: 'কারিগরি বিবরণ'
    }
  };

  const handleNextSteps = () => {
    setCurrentStep('contact');
  };

  return (
    <div className="container mx-auto px-4 py-6 animate-fade-in">
      <Button 
        variant="outline" 
        className="mb-6"
        onClick={() => setCurrentStep('products')}
      >
        <ChevronLeft className="mr-1" size={16} />
        {translations.backToProducts[language]}
      </Button>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg p-6 shadow-md flex items-center justify-center">
          <img 
            src={selectedProduct.image} 
            alt={selectedProduct.name} 
            className="max-w-full max-h-80 object-contain"
          />
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-rahimafrooz-blue">
              {selectedProduct.name}
            </h1>
            <p className="text-gray-600 mt-2">
              {selectedProduct.description}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">{translations.price[language]}</p>
              <p className="text-2xl font-bold">
                {translations.taka[language]} {selectedProduct.price.toLocaleString()}
              </p>
            </div>
            <Badge variant={selectedProduct.inStock ? "default" : "outline"} className={`text-base py-1 px-3 ${selectedProduct.inStock ? "bg-green-500" : ""}`}>
              {selectedProduct.inStock 
                ? translations.inStock[language] 
                : translations.outOfStock[language]
              }
            </Badge>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <MapPin className="text-rahimafrooz-red mr-2" size={20} />
              <div>
                <p className="text-sm text-gray-500">{translations.location[language]}</p>
                <p className="font-medium">{selectedProduct.location}</p>
              </div>
            </div>
            
            {selectedProduct.rating && (
              <div className="flex items-center">
                <Star className="text-yellow-500 mr-2" size={20} fill="currentColor" />
                <div>
                  <p className="text-sm text-gray-500">{translations.rating[language]}</p>
                  <p className="font-medium">{selectedProduct.rating}/5.0</p>
                </div>
              </div>
            )}
          </div>

          <Separator />

          <div>
            <h2 className="font-bold text-lg mb-2">
              {translations.specifications[language]}
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              {selectedProduct.specs.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-2">
              {translations.compatibleWith[language]}
            </h2>
            <p className="text-gray-800">
              {selectedVehicle?.make} {selectedVehicle?.model} ({selectedVehicle?.year})
              {selectedProduct.compatibleVehicles.length > 1 && 
                ` ${language === 'en' ? 'and' : 'এবং'} ${selectedProduct.compatibleVehicles.length - 1} ${language === 'en' ? 'more' : 'আরও'}`
              }
            </p>
          </div>

          <Button 
            className="w-full kiosk-btn-primary text-lg py-6"
            onClick={handleNextSteps}
          >
            {translations.nextSteps[language]}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
        <Button variant="outline" className="p-6 h-auto flex flex-col items-center text-center gap-2">
          <ShoppingCart className="h-8 w-8 mb-2 text-rahimafrooz-blue" />
          <span className="text-base">{translations.findInStore[language]}</span>
        </Button>

        <Button variant="outline" className="p-6 h-auto flex flex-col items-center text-center gap-2">
          <Phone className="h-8 w-8 mb-2 text-rahimafrooz-blue" />
          <span className="text-base">{translations.callForInquiry[language]}</span>
        </Button>

        <Button variant="outline" className="p-6 h-auto flex flex-col items-center text-center gap-2">
          <Share2 className="h-8 w-8 mb-2 text-rahimafrooz-blue" />
          <span className="text-base">{translations.share[language]}</span>
        </Button>

        <Button variant="outline" className="p-6 h-auto flex flex-col items-center text-center gap-2">
          <FileText className="h-8 w-8 mb-2 text-rahimafrooz-blue" />
          <span className="text-base">{translations.technicalDetails[language]}</span>
        </Button>
      </div>
    </div>
  );
};

export default ProductDetail;
