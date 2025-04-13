
import React, { useRef } from 'react';
import { useKiosk } from '../context/KioskContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import {
  ChevronLeft,
  Phone,
  MapPin,
  Printer,
  QrCode,
  Calendar,
  Heart,
  Mail
} from 'lucide-react';

const ContactOptions = () => {
  const { language, setCurrentStep, selectedProduct } = useKiosk();
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const checkboxRef = useRef<HTMLButtonElement>(null);
  const { toast } = useToast();

  if (!selectedProduct) {
    setCurrentStep('products');
    return null;
  }

  const translations = {
    title: {
      en: 'Next Steps',
      bn: 'পরবর্তী পদক্ষেপ'
    },
    backToProduct: {
      en: 'Back to Product',
      bn: 'পণ্যের বিবরণে ফিরে যান'
    },
    saveToPhone: {
      en: 'Save to Your Phone',
      bn: 'আপনার ফোনে সংরক্ষণ করুন'
    },
    scanQrCode: {
      en: 'Scan this QR code to save product information to your phone',
      bn: 'পণ্যের তথ্য আপনার ফোনে সংরক্ষণ করতে এই QR কোড স্ক্যান করুন'
    },
    locateStore: {
      en: 'Locate a Store',
      bn: 'স্টোর খুঁজুন'
    },
    findNearestLocation: {
      en: 'Find nearest Rahimafrooz outlet or service center',
      bn: 'নিকটতম রহিমাফরোজ আউটলেট বা সার্ভিস সেন্টার খুঁজুন'
    },
    printInfo: {
      en: 'Print Information',
      bn: 'তথ্য প্রিন্ট করুন'
    },
    printDetails: {
      en: 'Print product details and specifications',
      bn: 'পণ্যের বিবরণ এবং স্পেসিফিকেশন প্রিন্ট করুন'
    },
    requestCallback: {
      en: 'Request a Callback',
      bn: 'কলব্যাক অনুরোধ করুন'
    },
    contactInfo: {
      en: 'Your Contact Information',
      bn: 'আপনার যোগাযোগের তথ্য'
    },
    email: {
      en: 'Email',
      bn: 'ইমেইল'
    },
    phone: {
      en: 'Phone Number',
      bn: 'ফোন নম্বর'
    },
    consentLabel: {
      en: 'I agree to be contacted about this product',
      bn: 'আমি এই পণ্য সম্পর্কে যোগাযোগ করার জন্য সম্মত আছি'
    },
    submit: {
      en: 'Submit Request',
      bn: 'অনুরোধ জমা দিন'
    },
    scheduleVisit: {
      en: 'Schedule a Visit',
      bn: 'ভিজিট শিডিউল করুন'
    },
    visitStore: {
      en: 'Visit a Rahimafrooz store for expert advice',
      bn: 'বিশেষজ্ঞ পরামর্শের জন্য রহিমাফরোজ স্টোর ভিজিট করুন'
    },
    saveProduct: {
      en: 'Save to Favorites',
      bn: 'পছন্দে সংরক্ষণ করুন'
    },
    saveForLater: {
      en: 'Save this product to view later',
      bn: 'পরে দেখার জন্য এই পণ্যটি সংরক্ষণ করুন'
    },
    emailSent: {
      en: 'Request submitted! We\'ll contact you soon.',
      bn: 'অনুরোধ জমা হয়েছে! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।'
    }
  };

  const handleSubmitRequest = () => {
    const email = emailRef.current?.value;
    const phone = phoneRef.current?.value;
    const consent = checkboxRef.current?.getAttribute('data-state') === 'checked';

    if (!email || !phone || !consent) {
      toast({
        title: language === 'en' ? 'Please fill all fields' : 'সব ক্ষেত্র পূরণ করুন',
        description: language === 'en' ? 'All fields are required' : 'সমস্ত ক্ষেত্র প্রয়োজনীয়',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: translations.emailSent[language],
      variant: 'default',
    });
    
    // Reset form
    if (emailRef.current) emailRef.current.value = '';
    if (phoneRef.current) phoneRef.current.value = '';
    if (checkboxRef.current) checkboxRef.current.click();
  };

  return (
    <div className="container mx-auto px-4 py-6 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-rahimafrooz-blue">
          {translations.title[language]}
        </h1>
        <Button 
          variant="outline" 
          onClick={() => setCurrentStep('details')}
        >
          <ChevronLeft className="mr-1" size={16} />
          {translations.backToProduct[language]}
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <Card>
            <CardContent className="p-6 flex items-start space-x-4">
              <QrCode className="h-12 w-12 text-rahimafrooz-blue flex-shrink-0" />
              <div>
                <h2 className="text-xl font-semibold mb-2">{translations.saveToPhone[language]}</h2>
                <p className="text-gray-600">{translations.scanQrCode[language]}</p>
                <div className="mt-4 bg-gray-100 p-4 rounded flex justify-center">
                  <div className="w-32 h-32 bg-white border-2 border-rahimafrooz-blue flex items-center justify-center">
                    <span className="text-xs text-gray-400">QR Code</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex items-start space-x-4">
              <MapPin className="h-12 w-12 text-rahimafrooz-blue flex-shrink-0" />
              <div>
                <h2 className="text-xl font-semibold mb-2">{translations.locateStore[language]}</h2>
                <p className="text-gray-600">{translations.findNearestLocation[language]}</p>
                <Button className="mt-4 kiosk-btn-primary">
                  {translations.locateStore[language]}
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex items-start space-x-4">
              <Printer className="h-12 w-12 text-rahimafrooz-blue flex-shrink-0" />
              <div>
                <h2 className="text-xl font-semibold mb-2">{translations.printInfo[language]}</h2>
                <p className="text-gray-600">{translations.printDetails[language]}</p>
                <Button className="mt-4 kiosk-btn-secondary">
                  {translations.printInfo[language]}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start space-x-4">
                <Phone className="h-12 w-12 text-rahimafrooz-blue flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold mb-2">{translations.requestCallback[language]}</h2>
                  <p className="text-gray-600 mb-4">{translations.contactInfo[language]}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">{translations.email[language]}</Label>
                  <Input id="email" type="email" ref={emailRef} />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">{translations.phone[language]}</Label>
                  <Input id="phone" type="tel" ref={phoneRef} />
                </div>
                
                <div className="flex items-center space-x-2 mt-4">
                  <Checkbox id="consent" ref={checkboxRef} />
                  <Label htmlFor="consent" className="text-sm">
                    {translations.consentLabel[language]}
                  </Label>
                </div>
                
                <Button className="w-full kiosk-btn-primary" onClick={handleSubmitRequest}>
                  {translations.submit[language]}
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex items-start space-x-4">
              <Calendar className="h-12 w-12 text-rahimafrooz-blue flex-shrink-0" />
              <div>
                <h2 className="text-xl font-semibold mb-2">{translations.scheduleVisit[language]}</h2>
                <p className="text-gray-600">{translations.visitStore[language]}</p>
                <Button className="mt-4 kiosk-btn-secondary">
                  {translations.scheduleVisit[language]}
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex items-start space-x-4">
              <Heart className="h-12 w-12 text-rahimafrooz-red flex-shrink-0" />
              <div>
                <h2 className="text-xl font-semibold mb-2">{translations.saveProduct[language]}</h2>
                <p className="text-gray-600">{translations.saveForLater[language]}</p>
                <Button variant="outline" className="mt-4 border-rahimafrooz-red text-rahimafrooz-red hover:bg-red-50">
                  <Heart className="mr-2 h-4 w-4" /> {translations.saveProduct[language]}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactOptions;
