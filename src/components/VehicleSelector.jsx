import React, { useState, useEffect } from 'react';
import { useKiosk } from '../context/KioskContext';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { carMakes, carModels, carYears, popularVehicles } from '../data/vehicles';
import { getCompatibleProducts } from '../data/products';
import { ArrowRight, Car } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const VehicleSelector = () => {
  const { language, setCurrentStep, setSelectedVehicle, setFilteredProducts } = useKiosk();
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState(null);
  const [availableModels, setAvailableModels] = useState([]);
  const [isFormValid, setIsFormValid] = useState(false);
  const [filteredPopularVehicles, setFilteredPopularVehicles] = useState(popularVehicles);

  const translations = {
    title: {
      en: 'Select Your Vehicle',
      bn: 'আপনার গাড়ি নির্বাচন করুন',
    },
    make: {
      en: 'Make',
      bn: 'ব্র্যান্ড',
    },
    model: {
      en: 'Model',
      bn: 'মডেল',
    },
    year: {
      en: 'Year',
      bn: 'বছর',
    },
    popular: {
      en: 'Popular Vehicles',
      bn: 'জনপ্রিয় গাড়ি',
    },
    allPopular: {
      en: 'All Popular Vehicles',
      bn: 'সকল জনপ্রিয় গাড়ি',
    },
    filterPopular: {
      en: 'Popular ${make} Vehicles',
      bn: 'জনপ্রিয় ${make} গাড়ি',
    },
    selectMake: {
      en: 'Select make',
      bn: 'ব্র্যান্ড নির্বাচন করুন',
    },
    selectModel: {
      en: 'Select model',
      bn: 'মডেল নির্বাচন করুন',
    },
    selectYear: {
      en: 'Select year',
      bn: 'বছর নির্বাচন করুন',
    },
    findAccessories: {
      en: 'Find Accessories',
      bn: 'এক্সেসরিজ খুঁজুন',
    },
  };

  const vehicleImages = {
    Toyota: {
      Corolla: 'https://images.unsplash.com/photo-1611859266720-ea487c0b4c7e?w=400&auto=format&fit=crop',
      Camry: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&auto=format&fit=crop',
      Prius: 'https://images.unsplash.com/photo-1622509820102-139f4e339ae5?w=400&auto=format&fit=crop',
      RAV4: 'https://images.unsplash.com/photo-1581540222194-0def2d8ff498?w=400&auto=format&fit=crop',
      'Land Cruiser': 'https://images.unsplash.com/photo-1597007030739-6d2e7172ee5e?w=400&auto=format&fit=crop',
      Hilux: 'https://images.unsplash.com/photo-1597237154674-1a0d2274cef4?w=400&auto=format&fit=crop',
      Fortuner: 'https://images.unsplash.com/photo-1625171515371-1f704e69bea5?w=400&auto=format&fit=crop',
      default: 'https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=400&auto=format&fit=crop',
    },
    Honda: {
      Civic: 'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?w=400&auto=format&fit=crop',
      Accord: 'https://images.unsplash.com/photo-1617624085810-3df2dae0b326?w=400&auto=format&fit=crop',
      'CR-V': 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400&auto=format&fit=crop',
      City: 'https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?w=400&auto=format&fit=crop',
      default: 'https://images.unsplash.com/photo-1600661653561-629509413bfd?w=400&auto=format&fit=crop',
    },
    Mitsubishi: {
      Pajero: 'https://images.unsplash.com/photo-1598550437146-4c152a299c46?w=400&auto=format&fit=crop',
      Outlander: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&auto=format&fit=crop',
      default: 'https://images.unsplash.com/photo-1583267746897-2cf415887172?w=400&auto=format&fit=crop',
    },
    Nissan: {
      'X-Trail': 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&auto=format&fit=crop',
      Patrol: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&auto=format&fit=crop',
      default: 'https://images.unsplash.com/photo-1550841503-60feb104da1c?w=400&auto=format&fit=crop',
    },
    Hyundai: {
      Tucson: 'https://images.unsplash.com/photo-1634066552881-f4ed2a8b5b9f?w=400&auto=format&fit=crop',
      'Santa Fe': 'https://images.unsplash.com/photo-1628996562201-10be08c36cc7?w=400&auto=format&fit=crop',
      Elantra: 'https://images.unsplash.com/photo-1629994562880-926a10a363b8?w=400&auto=format&fit=crop',
      default: 'https://images.unsplash.com/photo-1607853827120-f9759a6f529f?w=400&auto=format&fit=crop',
    },
    Kia: {
      Sportage: 'https://images.unsplash.com/photo-1551515300-2d3b7bb80920?w=400&auto=format&fit=crop',
      Sorento: 'https://images.unsplash.com/photo-1617704548623-340376564e68?w=400&auto=format&fit=crop',
      default: 'https://images.unsplash.com/photo-1652762890470-a66bbab748b2?w=400&auto=format&fit=crop',
    },
    Suzuki: {
      Swift: 'https://images.unsplash.com/photo-1588693273928-92fa26159c82?w=400&auto=format&fit=crop',
      Vitara: 'https://images.unsplash.com/photo-1631865568655-f7bebb2d6d4e?w=400&auto=format&fit=crop',
      default: 'https://images.unsplash.com/photo-1545974452-caa213f76132?w=400&auto=format&fit=crop',
    },
    'Mercedes-Benz': {
      'C-Class': 'https://images.unsplash.com/photo-1570733577524-3a047079e80d?w=400&auto=format&fit=crop',
      'E-Class': 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&auto=format&fit=crop',
      'S-Class': 'https://images.unsplash.com/photo-1563720223523-7304d1128324?w=400&auto=format&fit=crop',
      default: 'https://images.unsplash.com/photo-1629897048514-3dd7414efc45?w=400&auto=format&fit=crop',
    },
    BMW: {
      '3 Series': 'https://images.unsplash.com/photo-1570303278489-041bd897a873?w=400&auto=format&fit=crop',
      '5 Series': 'https://images.unsplash.com/photo-1556800572-1b8aeef2c54f?w=400&auto=format&fit=crop',
      X5: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=400&auto=format&fit=crop',
      default: 'https://images.unsplash.com/photo-1556800572-1b8aeef2c54f?w=400&auto=format&fit=crop',
    },
    Audi: {
      A4: 'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?w=400&auto=format&fit=crop',
      Q5: 'https://images.unsplash.com/photo-1541348263662-e068662d82af?w=400&auto=format&fit=crop',
      default: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=400&auto=format&fit=crop',
    },
    default: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&auto=format&fit=crop',
  };

  const getVehicleImage = (make, model) => {
    if (vehicleImages[make] && vehicleImages[make][model]) {
      return vehicleImages[make][model];
    } else if (vehicleImages[make] && vehicleImages[make]['default']) {
      return vehicleImages[make]['default'];
    }
    return vehicleImages['default'];
  };

  useEffect(() => {
    if (make && carModels[make]) {
      setAvailableModels(carModels[make]);
      setModel('');
      setYear(null);
      if (make) {
        const filtered = popularVehicles.filter(vehicle => vehicle.make === make);
        setFilteredPopularVehicles(filtered);
      } else {
        setFilteredPopularVehicles(popularVehicles);
      }
    } else {
      setAvailableModels([]);
      setFilteredPopularVehicles(popularVehicles);
    }
  }, [make]);

  useEffect(() => {
    setIsFormValid(!!make && !!model && !!year);
  }, [make, model, year]);

  const handlePopularVehicleSelect = (vehicle) => {
    setMake(vehicle.make);
    setTimeout(() => {
      setModel(vehicle.model);
      setYear(vehicle.year);
    }, 10);
  };

  const handleFindAccessories = () => {
    if (isFormValid) {
      const vehicle = { make, model, year: year };
      setSelectedVehicle(vehicle);
      const compatibleProducts = getCompatibleProducts(vehicle);
      setFilteredProducts(compatibleProducts);
      setCurrentStep('products');
    }
  };

  const getPopularHeading = () => {
    if (make) {
      return translations.filterPopular[language].replace('${make}', make);
    }
    return translations.allPopular[language];
  };

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <h1 className="text-3xl font-bold text-center mb-8 text-rahimafrooz-blue">
        {translations.title[language]}
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="kiosk-panel">
          <div className="space-y-6">
            <div>
              <label htmlFor="make" className="block text-sm font-medium text-gray-700 mb-1">
                {translations.make[language]}
              </label>
              <Select value={make} onValueChange={setMake}>
                <SelectTrigger id="make" className="w-full text-lg py-6">
                  <SelectValue placeholder={translations.selectMake[language]} />
                </SelectTrigger>
                <SelectContent className="max-h-80">
                  {carMakes.map((carMake) => (
                    <SelectItem key={carMake} value={carMake} className="text-lg py-2">
                      {carMake}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">
                {translations.model[language]}
              </label>
              <Select 
                value={model} 
                onValueChange={setModel} 
                disabled={!make}
              >
                <SelectTrigger id="model" className="w-full text-lg py-6">
                  <SelectValue placeholder={translations.selectModel[language]} />
                </SelectTrigger>
                <SelectContent className="max-h-80">
                  {availableModels.map((carModel) => (
                    <SelectItem key={carModel} value={carModel} className="text-lg py-2">
                      {carModel}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
                {translations.year[language]}
              </label>
              <Select 
                value={year?.toString() || ''} 
                onValueChange={(value) => setYear(parseInt(value))}
                disabled={!make || !model}
              >
                <SelectTrigger id="year" className="w-full text-lg py-6">
                  <SelectValue placeholder={translations.selectYear[language]} />
                </SelectTrigger>
                <SelectContent className="max-h-80">
                  {carYears.map((year) => (
                    <SelectItem key={year} value={year.toString()} className="text-lg py-2">
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button 
              className="kiosk-btn-primary w-full mt-4 text-lg py-6"
              disabled={!isFormValid}
              onClick={handleFindAccessories}
            >
              {translations.findAccessories[language]}
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">
            {getPopularHeading()}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[500px] overflow-y-auto pr-2">
            {filteredPopularVehicles.map((vehicle, index) => (
              <Card 
                key={`${vehicle.make}-${vehicle.model}-${vehicle.year}-${index}`}
                className="cursor-pointer hover:border-rahimafrooz-blue transition-colors overflow-hidden"
                onClick={() => handlePopularVehicleSelect(vehicle)}
              >
                <div className="h-32 bg-gray-100 overflow-hidden">
                  <img 
                    src={getVehicleImage(vehicle.make, vehicle.model)} 
                    alt={`${vehicle.make} ${vehicle.model}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <p className="font-medium">{vehicle.make} {vehicle.model}</p>
                  <p className="text-sm text-gray-500">{vehicle.year}</p>
                </CardContent>
              </Card>
            ))}
            
            {filteredPopularVehicles.length === 0 && (
              <div className="col-span-2 text-center py-8 text-gray-500">
                {language === 'en' 
                  ? `No popular ${make} vehicles found` 
                  : `কোন জনপ্রিয় ${make} গাড়ি পাওয়া যায়নি`}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleSelector;