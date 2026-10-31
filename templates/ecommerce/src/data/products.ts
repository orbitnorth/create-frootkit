export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  rating: number;
  reviewsCount: number;
  image: string;
  description: string;
  features: string[];
  inStock: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 'nordic-mechanical-keyboard',
    name: 'Nordic Minimal Mechanical Keyboard',
    price: 149.0,
    category: 'Keyboards',
    rating: 4.9,
    reviewsCount: 128,
    // Clean minimal anodized aluminum keyboard
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80',
    description: 'Aircraft-grade CNC anodized aluminum chassis with custom factory-lubed linear switches and sound-dampening silicone base.',
    features: ['Hot-swappable switches', 'Bluetooth 5.3 & 2.4GHz wireless', 'CNC Aluminum Unibody', 'PBT Dye-Sub Keycaps'],
    inStock: true,
  },
  {
    id: 'studio-monitor-headphones',
    name: 'Studio Master Pro Headphones',
    price: 289.0,
    category: 'Audio',
    rating: 4.8,
    reviewsCount: 94,
    // Clean matte dark studio headphones on neutral background (no bright yellow!)
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80',
    description: 'Precision 50mm dynamic drivers engineered for ultra-flat frequency response, critical mixing, and executive focus.',
    features: ['Planar Magnetic Drivers', 'Memory Foam Cushions', 'Detachable Braided Cable', 'Hard Travel Case'],
    inStock: true,
  },
  {
    id: 'ergo-master-mouse',
    name: 'ErgoMaster Wireless Precision Mouse',
    price: 89.0,
    category: 'Peripherals',
    rating: 4.7,
    reviewsCount: 210,
    // Matte dark ergonomic mouse on neutral slate background
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&auto=format&fit=crop&q=80',
    description: 'Sculpted ergonomic contour designed to eliminate wrist fatigue during extended development sessions.',
    features: ['26,000 DPI Optical Sensor', '70-day Battery Life', 'Infinite Magnetic Scroll Wheel', 'Silent Click Switches'],
    inStock: true,
  },
  {
    id: 'walnut-monitor-riser',
    name: 'Solid Walnut Monitor Riser Stand',
    price: 119.0,
    category: 'Desk Setup',
    rating: 5.0,
    reviewsCount: 62,
    // Clean handcrafted wooden desk setup
    image: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=800&auto=format&fit=crop&q=80',
    description: 'Handcrafted from single-origin American walnut with cork feet and an integrated aluminum tray for desk accessories.',
    features: ['Sustainable American Walnut', 'Holds up to 60 lbs', 'Integrated Cable Troughs', 'Hand-finished Matte Oil'],
    inStock: true,
  },
  {
    id: 'titanium-desk-pad',
    name: 'Matte Slate Vegan Leather Desk Mat',
    price: 49.0,
    category: 'Desk Setup',
    rating: 4.6,
    reviewsCount: 175,
    // Clean desk surface mat
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80',
    description: 'Water-resistant, stain-proof premium desk surface that provides effortless mouse tracking and protects your workspace.',
    features: ['Water-resistant PU Leather', 'Anti-slip Suede Backing', '90cm x 45cm Large Size', 'Easy to Clean'],
    inStock: true,
  },
  {
    id: 'usb-c-magnetic-cable',
    name: '240W Braided Kevlar Charging Cable',
    price: 29.0,
    category: 'Accessories',
    rating: 4.9,
    reviewsCount: 340,
    // Minimalist braided cable / tech accessory
    image: 'https://images.unsplash.com/photo-1622434641406-a158123450f9?w=800&auto=format&fit=crop&q=80',
    description: 'Ultra-durable Kevlar-reinforced charging cable supporting up to 240W Power Delivery and 40Gbps Thunderbolt data transfer.',
    features: ['240W Power Delivery', 'E-Marker Smart Chip', 'Braided Kevlar Weave', '2-meter Length'],
    inStock: true,
  },
];
