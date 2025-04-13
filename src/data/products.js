
import { Product, Vehicle } from '../context/KioskContext';
import { popularVehicles } from './vehicles';

// Helper function to get random vehicles for compatibility
const getRandomCompatibleVehicles = (count): Vehicle[] => {
  const shuffled = [...popularVehicles].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Randomize inStock and rating
const getRandomInStock = () => Math.random() > 0.2;
const getRandomRating = () => Math.round((3 + Math.random() * 2) * 10) / 10; // Rating between 3.0 and 5.0

export const products: Product[] = [
  // Batteries
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

  // Tires
  {
    id: 'tire-001',
    name: 'Rahimafrooz All-Season Tires',
    category: 'tires',
    description: 'Versatile tires for year-round performance in city and highway driving conditions.',
    price: 8500,
    image: 'https://images.unsplash.com/photo-1604999333679-b86d54738315?w=600&auto=format&fit=crop',
    specs: ['Size: 205/65R15', 'Tread life: 60,000 km', 'All-season grip', 'Reduced road noise'],
    inStock: getRandomInStock(),
    location: 'Uttara Service Center',
    compatibleVehicles: getRandomCompatibleVehicles(15),
    rating: getRandomRating()
  },
  {
    id: 'tire-002',
    name: 'Rahimafrooz Premium Sport Tires',
    category: 'tires',
    description: 'Performance tires designed for enhanced grip and handling on dry and wet roads.',
    price: 12800,
    image: 'https://images.unsplash.com/photo-1578844251478-cc2f8cc6b659?w=600&auto=format&fit=crop',
    specs: ['Size: 225/45R17', 'Tread life: 50,000 km', 'Superior handling', 'Enhanced cornering stability'],
    inStock: getRandomInStock(),
    location: 'Banani Premium Outlet',
    compatibleVehicles: getRandomCompatibleVehicles(10),
    rating: getRandomRating()
  },
  {
    id: 'tire-003',
    name: 'Rahimafrooz SUV All-Terrain Tires',
    category: 'tires',
    description: 'Durable tires for SUVs and crossovers, providing excellent traction on various terrains.',
    price: 15500,
    image: 'https://images.unsplash.com/photo-1621371827634-e8dce70cc980?w=600&auto=format&fit=crop',
    specs: ['Size: 265/70R16', 'Tread life: 70,000 km', 'All-terrain capability', 'Reinforced sidewalls'],
    inStock: getRandomInStock(),
    location: 'Mirpur Outlet',
    compatibleVehicles: getRandomCompatibleVehicles(8),
    rating: getRandomRating()
  },

  // Lubricants
  {
    id: 'lub-001',
    name: 'Rahimafrooz Synthetic Engine Oil',
    category: 'lubricants',
    description: 'Full synthetic oil delivering superior engine protection and improved fuel efficiency.',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1635173545999-20130c6841a7?w=600&auto=format&fit=crop',
    specs: ['Grade: 5W-30', 'Capacity: 4L', 'Fully synthetic', 'Extended drain intervals'],
    inStock: getRandomInStock(),
    location: 'Available at all outlets',
    compatibleVehicles: getRandomCompatibleVehicles(18),
    rating: getRandomRating()
  },
  {
    id: 'lub-002',
    name: 'Rahimafrooz Semi-Synthetic Oil',
    category: 'lubricants',
    description: 'Balanced formula providing good protection at an affordable price point.',
    price: 2200,
    image: 'https://images.unsplash.com/photo-1621902549862-bf8ac2f0e5ff?w=600&auto=format&fit=crop',
    specs: ['Grade: 10W-40', 'Capacity: 4L', 'Semi-synthetic blend', 'Standard drain intervals'],
    inStock: getRandomInStock(),
    location: 'Available at all outlets',
    compatibleVehicles: getRandomCompatibleVehicles(20),
    rating: getRandomRating()
  },
  {
    id: 'lub-003',
    name: 'Rahimafrooz Transmission Fluid',
    category: 'lubricants',
    description: 'Specialized fluid for automatic transmissions, ensuring smooth gear shifts and component protection.',
    price: 2800,
    image: 'https://images.unsplash.com/photo-1633707307211-2af1170d35de?w=600&auto=format&fit=crop',
    specs: ['ATF Dexron VI', 'Capacity: 1L', 'Enhanced friction durability', 'Temperature stability'],
    inStock: getRandomInStock(),
    location: 'Available at service centers',
    compatibleVehicles: getRandomCompatibleVehicles(16),
    rating: getRandomRating()
  },

  // Lights
  {
    id: 'light-001',
    name: 'Rahimafrooz LED Headlights',
    category: 'lights',
    description: 'Bright, energy-efficient LED headlights providing better visibility and modern appearance.',
    price: 5500,
    image: 'https://images.unsplash.com/photo-1601393671744-748bb5676a36?w=600&auto=format&fit=crop',
    specs: ['6000K color temperature', '4000 lumens per bulb', 'Lifespan: 30,000 hours', 'Plug & play installation'],
    inStock: getRandomInStock(),
    location: 'Gulshan and Dhanmondi outlets',
    compatibleVehicles: getRandomCompatibleVehicles(12),
    rating: getRandomRating()
  },
  {
    id: 'light-002',
    name: 'Rahimafrooz Fog Lights',
    category: 'lights',
    description: 'Specialized fog lights for improved visibility in adverse weather conditions.',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1591119233666-76d04a76df7d?w=600&auto=format&fit=crop',
    specs: ['3000K warm yellow light', '1800 lumens per bulb', 'Weather-sealed housing', 'Reduced glare design'],
    inStock: getRandomInStock(),
    location: 'Available at all outlets',
    compatibleVehicles: getRandomCompatibleVehicles(14),
    rating: getRandomRating()
  },
  {
    id: 'light-003',
    name: 'Rahimafrooz Interior LED Kit',
    category: 'lights',
    description: 'Complete LED upgrade kit for interior lighting, including dome lights, map lights, and trunk light.',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1620454737340-fe275bcd9997?w=600&auto=format&fit=crop',
    specs: ['6000K bright white', 'Complete set for interior', 'Easy installation', 'Low power consumption'],
    inStock: getRandomInStock(),
    location: 'Available at all outlets',
    compatibleVehicles: getRandomCompatibleVehicles(20),
    rating: getRandomRating()
  },

  // Electronics
  {
    id: 'elec-001',
    name: 'Rahimafrooz Dash Cam',
    category: 'electronics',
    description: 'High-definition dash camera with night vision and motion detection for continuous recording and driving security.',
    price: 7800,
    image: 'https://images.unsplash.com/photo-1618941377565-a7921223329a?w=600&auto=format&fit=crop',
    specs: ['1080p Full HD', '170° wide-angle lens', '32GB SD card included', 'Parking mode surveillance'],
    inStock: getRandomInStock(),
    location: 'Premium outlets only',
    compatibleVehicles: getRandomCompatibleVehicles(22),
    rating: getRandomRating()
  },
  {
    id: 'elec-002',
    name: 'Rahimafrooz Parking Sensors',
    category: 'electronics',
    description: 'Reliable parking sensor system with audible alerts to prevent collisions while parking.',
    price: 5500,
    image: 'https://images.unsplash.com/photo-1567518070396-126d574103a3?w=600&auto=format&fit=crop',
    specs: ['4 ultrasonic sensors', 'Audible distance warning', 'Simple installation', 'Weather-resistant'],
    inStock: getRandomInStock(),
    location: 'Available at all service centers',
    compatibleVehicles: getRandomCompatibleVehicles(18),
    rating: getRandomRating()
  },
  {
    id: 'elec-003',
    name: 'Rahimafrooz Bluetooth Car Kit',
    category: 'electronics',
    description: 'Hands-free calling and music streaming solution for vehicles without built-in Bluetooth.',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1558962729-d532afce5694?w=600&auto=format&fit=crop',
    specs: ['Bluetooth 5.0', 'Dual USB charging ports', 'Voice assistant support', 'FM transmitter function'],
    inStock: getRandomInStock(),
    location: 'Available at all outlets',
    compatibleVehicles: getRandomCompatibleVehicles(25),
    rating: getRandomRating()
  }
];

// Helper to get products by category
export const getProductsByCategory = (category): Product[] => {
  return products.filter(product => product.category === category);
};

// Helper to get products compatible with a specific vehicle
export const getCompatibleProducts = (vehicle: Vehicle): Product[] => {
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
export const getProductById = (id): Product | undefined => {
  return products.find(product => product.id === id);
};
