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
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&h=450&fit=crop',
    description: 'Aircraft-grade anodized aluminum body with custom hot-swappable linear switches and sound-dampening silicone base.',
    features: ['Hot-swappable switches', 'Bluetooth 5.3 & 2.4GHz', 'CNC Aluminum Chassis', 'PBT Dye-Sub Keycaps'],
    inStock: true,
  },
  {
    id: 'studio-monitor-headphones',
    name: 'Studio Master Pro Headphones',
    price: 289.0,
    category: 'Audio',
    rating: 4.8,
    reviewsCount: 94,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=450&fit=crop',
    description: 'Precision 50mm dynamic drivers engineered for ultra-flat frequency response, critical mixing, and executive focus.',
    features: ['Planar Magnetic Sound', 'Memory Foam Cushions', 'Detachable Silver Cable', 'Hard Travel Case'],
    inStock: true,
  },
  {
    id: 'ergo-master-mouse',
    name: 'ErgoMaster Wireless Precision Mouse',
    price: 89.0,
    category: 'Peripherals',
    rating: 4.7,
    reviewsCount: 210,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=450&fit=crop',
    description: 'Sculpted ergonomic contour designed to eliminate wrist fatigue during extended development sessions.',
    features: ['26,000 DPI Optical Sensor', '70-day Battery Life', 'Infinite Scroll Wheel', 'Quiet Click Switches'],
    inStock: true,
  },
  {
    id: 'walnut-monitor-riser',
    name: 'Solid Walnut Monitor Riser Stand',
    price: 119.0,
    category: 'Desk Setup',
    rating: 5.0,
    reviewsCount: 62,
    image: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=600&h=450&fit=crop',
    description: 'Handcrafted from single-origin American walnut with cork feet and an integrated aluminum tray for accessories.',
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
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&h=450&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600&h=450&fit=crop',
    description: 'Ultra-durable Kevlar-reinforced charging cable supporting up to 240W Power Delivery and 40Gbps Thunderbolt data transfer.',
    features: ['240W Power Delivery', 'E-Marker Smart Chip', 'Braided Kevlar Weave', '2-meter Length'],
    inStock: true,
  },
];
