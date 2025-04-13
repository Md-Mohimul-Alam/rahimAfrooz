// Car makes with popular models in Bangladesh
export const carMakes = [
  'Toyota',
  'Honda',
  'Mitsubishi',
  'Nissan',
  'Hyundai',
  'Kia',
  'Suzuki',
  'Mercedes-Benz',
  'BMW',
  'Audi'
];

export const carModels = {
  Toyota: ['Corolla', 'Camry', 'Prius', 'RAV4', 'Land Cruiser', 'Hilux', 'Vios', 'Fortuner', 'Innova'],
  Honda: ['Civic', 'Accord', 'CR-V', 'HR-V', 'City', 'Jazz', 'Vezel'],
  Mitsubishi: ['Pajero', 'Outlander', 'ASX', 'Lancer', 'L200'],
  Nissan: ['X-Trail', 'Patrol', 'Sunny', 'Navara', 'Qashqai'],
  Hyundai: ['Tucson', 'Santa Fe', 'i30', 'i10', 'Elantra', 'Sonata', 'Creta'],
  Kia: ['Sportage', 'Sorento', 'Rio', 'Cerato', 'Picanto'],
  Suzuki: ['Swift', 'Vitara', 'Alto', 'Jimny', 'APV', 'Wagon R'],
  'Mercedes-Benz': ['C-Class', 'E-Class', 'S-Class', 'GLC', 'GLE', 'A-Class'],
  BMW: ['3 Series', '5 Series', '7 Series', 'X3', 'X5'],
  Audi: ['A4', 'A6', 'Q5', 'Q7', 'A3']
};

// Years from current back 20 years
export const carYears = Array.from({ length: 21 }, (_, i) => 2025 - i);

// Popular vehicle combinations in Bangladesh
export const popularVehicles = [
  { make: 'Toyota', model: 'Corolla', year: 2022 },
  { make: 'Toyota', model: 'Corolla', year: 2018 },
  { make: 'Toyota', model: 'Corolla', year: 2015 },
  { make: 'Toyota', model: 'Land Cruiser', year: 2020 },
  { make: 'Toyota', model: 'Prius', year: 2019 },
  { make: 'Toyota', model: 'Hilux', year: 2021 },
  { make: 'Honda', model: 'Civic', year: 2020 },
  { make: 'Honda', model: 'Civic', year: 2017 },
  { make: 'Honda', model: 'City', year: 2021 },
  { make: 'Mitsubishi', model: 'Pajero', year: 2019 },
  { make: 'Nissan', model: 'X-Trail', year: 2020 },
  { make: 'Hyundai', model: 'Tucson', year: 2021 },
  { make: 'Kia', model: 'Sportage', year: 2022 },
  { make: 'Suzuki', model: 'Swift', year: 2020 },
  { make: 'Suzuki', model: 'Swift', year: 2017 },
  { make: 'Mercedes-Benz', model: 'C-Class', year: 2022 },
  { make: 'BMW', model: '3 Series', year: 2021 },
  { make: 'Audi', model: 'A4', year: 2020 }
];