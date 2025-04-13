import React from 'react';
import { useKiosk } from '../context/KioskContext';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getProductsByCategory } from '../data/products';
import { Badge } from '@/components/ui/badge';
import {
  Battery,
  Radio,
  Droplets,
  Lightbulb,
  Monitor,
  ChevronLeft,
} from 'lucide-react';

const ProductList = () => {
  const {
    language,
    setCurrentStep,
    selectedVehicle,
    filteredProducts,
    setSelectedProduct,
    selectedCategory,
    setSelectedCategory,
  } = useKiosk();

  const translations = {
    title: {
      en: 'Compatible Accessories',
      bn: 'উপযুক্ত এক্সেসরিজ',
    },
    backToVehicle: {
      en: 'Back to Vehicle Selection',
      bn: 'গাড়ি নির্বাচনে ফিরে যান',
    },
    categories: {
      all: { en: 'All', bn: 'সবগুলো' },
      battery: { en: 'Batteries', bn: 'ব্যাটারি' },
      tires: { en: 'Tires', bn: 'টায়ার' },
      lubricants: { en: 'Lubricants', bn: 'লুব্রিকেন্ট' },
      lights: { en: 'Lights', bn: 'লাইট' },
      electronics: { en: 'Electronics', bn: 'ইলেকট্রনিক্স' },
    },
    inStock: {
      en: 'In Stock',
      bn: 'মজুদ আছে',
    },
    outOfStock: {
      en: 'Out of Stock',
      bn: 'মজুদ নেই',
    },
    viewDetails: {
      en: 'View Details',
      bn: 'বিস্তারিত দেখুন',
    },
    noProducts: {
      en: 'No compatible products found',
      bn: 'কোন উপযুক্ত পণ্য পাওয়া যায়নি',
    },
    price: {
      en: 'Price',
      bn: 'মূল্য',
    },
    taka: {
      en: 'Tk',
      bn: '৳',
    },
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setCurrentStep('details');
  };

  const categoryIcons = {
    battery: <Battery className="mr-1" />,
    tires: <Radio className="mr-1" />,
    lubricants: <Droplets className="mr-1" />,
    lights: <Lightbulb className="mr-1" />,
    electronics: <Monitor className="mr-1" />,
  };

  const displayProducts = selectedCategory
    ? filteredProducts.filter((product) => product.category === selectedCategory)
    : filteredProducts;

  return (
    <div className="container mx-auto px-4 py-6 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-rahimafrooz-blue mb-2">
            {translations.title[language]}
          </h1>
          <p className="text-gray-600">
            {selectedVehicle?.make} {selectedVehicle?.model} ({selectedVehicle?.year})
          </p>
        </div>

        <Button
          variant="outline"
          className="mt-4 md:mt-0"
          onClick={() => setCurrentStep('vehicle')}
        >
          <ChevronLeft className="mr-1" size={16} />
          {translations.backToVehicle[language]}
        </Button>
      </div>

      <div className="flex overflow-x-auto pb-2 mb-6 gap-2">
        <Button
          variant={selectedCategory === null ? 'default' : 'outline'}
          className={`whitespace-nowrap ${
            selectedCategory === null ? 'bg-rahimafrooz-blue' : ''
          }`}
          onClick={() => handleCategoryFilter(null)}
        >
          {translations.categories.all[language]}
        </Button>

        {Object.entries(translations.categories)
          .slice(1)
          .map(([category, labels]) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              className={`whitespace-nowrap flex items-center ${
                selectedCategory === category ? 'bg-rahimafrooz-blue' : ''
              }`}
              onClick={() => handleCategoryFilter(category)}
            >
              {categoryIcons[category]}
              {labels[language]}
            </Button>
          ))}
      </div>

      {displayProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayProducts.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain p-4"
                />
              </div>

              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <Badge
                    variant={product.inStock ? 'default' : 'outline'}
                    className={product.inStock ? 'bg-green-500' : ''}
                  >
                    {product.inStock
                      ? translations.inStock[language]
                      : translations.outOfStock[language]}
                  </Badge>
                </div>
                <CardDescription>
                  {product.specs.slice(0, 2).join(' • ')}
                </CardDescription>
              </CardHeader>

              <CardContent className="pb-2">
                <p className="font-semibold text-lg">
                  {translations.price[language]}: {translations.taka[language]}{' '}
                  {product.price.toLocaleString()}
                </p>
              </CardContent>

              <CardFooter>
                <Button
                  className="w-full kiosk-btn-primary"
                  onClick={() => handleProductSelect(product)}
                >
                  {translations.viewDetails[language]}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="kiosk-panel text-center py-16">
          <p className="text-xl text-gray-500">
            {translations.noProducts[language]}
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductList;