
import { popularVehicles } from './vehicles';

// Helper function to get random vehicles for compatibility
const getRandomCompatibleVehicles = (count) => {
  const shuffled = [...popularVehicles].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Randomize inStock and rating
const getRandomInStock = () => Math.random() > 0.2;
const getRandomRating = () => Math.round((3 + Math.random() * 2) * 10) / 10; // Rating between 3.0 and 5.0

export const products = [
  {
    id: 'bat-001',
    name: 'Rahimafrooz Gold Battery',
    category: 'battery',
    description: 'Premium battery with extended lifespan and superior performance. Ideal for modern vehicles with high electrical demands.',
    price: 12500,
    image: 'https://images.unsplash.com/photo-1605511729566-456e7e8e014e?w=600&auto=format&fit=crop',
    specs: ['Capacity: 60Ah', 'Cold Cranking Amps: 540', 'Warranty: 24 months', 'Maintenance-free'],
    inStock: getRandomInStock(),
    location: 'Gulshan Service Center',
    compatibleVehicles: getRandomCompatibleVehicles(10),
    rating: getRandomRating()
  },
  {
    id: 'bat-002',
    name: 'Rahimafrooz Silver Battery',
    category: 'battery',
    description: 'Reliable performance battery for everyday use. Balanced power output and dependability.',
    price: 9800,
    image: 'https://images.unsplash.com/photo-1605511738861-101b9fb3f239?w=600&auto=format&fit=crop',
    specs: ['Capacity: 45Ah', 'Cold Cranking Amps: 420', 'Warranty: 18 months', 'Maintenance-free'],
    inStock: getRandomInStock(),
    location: 'Dhanmondi Outlet',
    compatibleVehicles: getRandomCompatibleVehicles(12),
    rating: getRandomRating()
  },
  {
    id: 'bat-003',
    name: 'Rahimafrooz Heavy Duty Battery',
    category: 'battery',
    description: 'Designed for commercial vehicles and heavy-duty applications. Maximum durability in challenging conditions.',
    price: 18500,
    image: 'https://images.unsplash.com/photo-1560259324-e31af5fd6340?w=600&auto=format&fit=crop',
    specs: ['Capacity: 75Ah', 'Cold Cranking Amps: 650', 'Warranty: 36 months', 'Enhanced vibration resistance'],
    inStock: getRandomInStock(),
    location: 'Mohakhali Service Center',
    compatibleVehicles: getRandomCompatibleVehicles(8),
    rating: getRandomRating()
  },
  // Additional product entries go here...
];

// Helper to get products by category
export const getProductsByCategory = (category) => {
  return products.filter(product => product.category === category);
};

// Helper to get products compatible with a specific vehicle
export const getCompatibleProducts = (vehicle) => {
  if (!vehicle) return [];
  
  return products.filter(product => 
    product.compatibleVehicles.some(v => 
      v.make === vehicle.make && 
      v.model === vehicle.model && 
      v.year === vehicle.year
    )
  );
};

// Get product by ID
export const getProductById = (id) => {
  return products.find(product => product.id === id);
};
