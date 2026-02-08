
import { Product } from '../types/product';

export const products: Product[] = [
  // Phones
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    price: 159900,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop',
    category: 'phones',
    description: 'The ultimate iPhone with titanium design, A17 Pro chip, and the most powerful camera system ever in an iPhone.',
    specs: ['Titanium design', 'A17 Pro chip', '48MP Main | Ultra Wide | Telephoto', 'Up to 29 hours video playback'],
    featured: true,
    rating: 4.8,
    reviews: 245
  },
  {
    id: '4',
    name: 'Samsung Galaxy S24 Ultra',
    price: 129999,
    image: 'https://images.unsplash.com/photo-1707227184837-97d812239d2c?q=80&w=800&auto=format&fit=crop',
    category: 'phones',
    description: 'Unleash your creativity, productivity, and possibility with the new Samsung Galaxy S24 Ultra.',
    specs: ['Snapdragon 8 Gen 3', '200MP Main Camera', 'Titanium Frame', 'Galaxy AI'],
    featured: true,
    rating: 4.7,
    reviews: 189
  },
  {
    id: '17',
    name: 'Google Pixel 8 Pro',
    price: 106999,
    image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=800&auto=format&fit=crop',
    category: 'phones',
    description: 'The most powerful Pixel yet, with Gemini Nano built-in.',
    specs: ['Google Tensor G3', 'Super Actua Display', 'Pro controls', 'Best Take'],
    featured: false,
    rating: 4.5,
    reviews: 120
  },
  {
    id: '18',
    name: 'OnePlus 12',
    price: 64999,
    image: 'https://images.unsplash.com/photo-1678911820864-fbdd34deaf1d?q=80&w=800&auto=format&fit=crop',
    category: 'phones',
    description: 'Smooth beyond belief. A true flagship experience.',
    specs: ['Snapdragon 8 Gen 3', '4th Gen Hasselblad Camera', '5400mAh Battery', '100W Charging'],
    featured: false,
    rating: 4.4,
    reviews: 95
  },

  // Laptops
  {
    id: '2',
    name: 'MacBook Pro M3',
    price: 169900,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=800&auto=format&fit=crop',
    category: 'laptops',
    description: 'Mind-blowing. Head-turning. With the M3 family of chips, MacBook Pro is more capable than ever.',
    specs: ['M3 Pro or M3 Max chip', 'Liquid Retina XDR display', 'Up to 22 hours battery life', '1080p FaceTime HD camera'],
    featured: true,
    rating: 4.9,
    reviews: 312
  },
  {
    id: '6',
    name: 'Dell XPS 13',
    price: 119990,
    image: 'https://images.unsplash.com/photo-1593642632823-8f78536788c6?q=80&w=800&auto=format&fit=crop',
    category: 'laptops',
    description: 'Our most powerful 13-inch XPS laptop is up to twice as powerful as before.',
    specs: ['13.4-inch FHD+', 'Intel Core i7', '16GB RAM', '512GB SSD'],
    featured: false,
    rating: 4.3,
    reviews: 87
  },
  {
    id: '19',
    name: 'ASUS ROG Zephyrus G14',
    price: 149990,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=800&auto=format&fit=crop',
    category: 'laptops',
    description: 'The world\'s most powerful 14-inch gaming laptop.',
    specs: ['AMD Ryzen 9', 'RTX 4060', 'OLED Display', 'Anime Matrix'],
    featured: false,
    rating: 4.6,
    reviews: 156
  },
  {
    id: '20',
    name: 'HP Spectre x360',
    price: 135990,
    image: 'https://images.unsplash.com/photo-1544731612-de7f96afe55f?q=80&w=800&auto=format&fit=crop',
    category: 'laptops',
    description: 'Crafted to transform the way you create.',
    specs: ['Intel Core Ultra 7', '2.8K OLED Touch', 'Nightfall Black', 'AI Built-in'],
    featured: false,
    rating: 4.4,
    reviews: 78
  },

  // Watches
  {
    id: '7',
    name: 'Samsung Watch 6',
    price: 27999,
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=800&auto=format&fit=crop',
    category: 'watches',
    description: 'Advanced smartwatch with comprehensive health tracking.',
    specs: ['Exynos W930', 'Super AMOLED display', 'Health sensors', 'Wear OS'],
    featured: false,
    rating: 4.2,
    reviews: 134
  },
  {
    id: '21',
    name: 'Apple Watch Ultra 2',
    price: 89900,
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?q=80&w=800&auto=format&fit=crop',
    category: 'watches',
    description: 'The most rugged and capable Apple Watch. Designed for outdoor adventure.',
    specs: ['Titanium Case', '100m Water Resistance', 'Double Tap Gesture', '3000 Nits Brightness'],
    featured: true,
    rating: 4.8,
    reviews: 201
  },
  {
    id: '22',
    name: 'Garmin Fenix 7',
    price: 72990,
    image: 'https://images.unsplash.com/photo-1551817958-c1e8c1f939e6?q=80&w=800&auto=format&fit=crop',
    category: 'watches',
    description: 'Long-running multisport GPS watch with scratch-resistant Power Sapphire lens.',
    specs: ['Solar Charging', 'Touchscreen', 'Topo Maps', 'Endurance Score'],
    featured: false,
    rating: 4.7,
    reviews: 89
  },

  // Earphones
  {
    id: '3',
    name: 'Sony WH-1000XM5',
    price: 29990,
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=800&auto=format&fit=crop',
    category: 'earphones',
    description: 'Industry-leading noise cancellation, exceptional sound quality, and crystal-clear calls.',
    specs: ['Industry-leading noise canceling', 'Up to 30-hour battery life', 'Crystal clear hands-free calling', 'Ultra-comfortable design'],
    featured: true,
    rating: 4.8,
    reviews: 450
  },
  {
    id: '23',
    name: 'Apple AirPods Pro 2',
    price: 24900,
    image: 'https://images.unsplash.com/photo-1603351154351-5cf99bd0f16c?q=80&w=800&auto=format&fit=crop',
    category: 'earphones',
    description: 'Pro-level Active Noise Cancellation and Adaptive Transparency.',
    specs: ['H2 Chip', 'Personalized Spatial Audio', 'MagSafe Charging', 'Precision Finding'],
    featured: false,
    rating: 4.7,
    reviews: 380
  },
  {
    id: '24',
    name: 'Bose QuietComfort Ultra',
    price: 35900,
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop',
    category: 'earphones',
    description: 'World-class noise cancellation, quieter than ever before.',
    specs: ['Immersive Audio', 'CustomTune technology', '24-hour battery', 'Comfort fit'],
    featured: false,
    rating: 4.5,
    reviews: 210
  },

  // Tablets
  {
    id: '5',
    name: 'iPad Air M1',
    price: 59900,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800&auto=format&fit=crop',
    category: 'tablets',
    description: 'Light. Bright. Full of might. Supercharged by the Apple M1 chip.',
    specs: ['M1 chip', '10.9-inch Liquid Retina display', '12MP Ultra Wide front camera', '5G capable'],
    featured: false,
    rating: 4.6,
    reviews: 145
  },
  {
    id: '9',
    name: 'iPad Pro M2',
    price: 81900,
    image: 'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?q=80&w=800&auto=format&fit=crop',
    category: 'tablets',
    description: 'The ultimate iPad experience with the breakthrough M2 chip.',
    specs: ['M2 chip', '12.9-inch Liquid Retina XDR', 'Face ID', '5G cellular'],
    featured: true,
    rating: 4.9,
    reviews: 289
  },
  {
    id: '25',
    name: 'Samsung Galaxy Tab S9',
    price: 72999,
    image: 'https://images.unsplash.com/photo-1589739900894-39c8114be26f?q=80&w=800&auto=format&fit=crop',
    category: 'tablets',
    description: 'Crystal clear Dynamic AMOLED 2X display.',
    specs: ['Snapdragon 8 Gen 2', 'IP68 S Pen', 'Vision Booster', 'Armor Aluminum'],
    featured: false,
    rating: 4.5,
    reviews: 98
  },

  // Gaming
  {
    id: '11',
    name: 'PlayStation 5',
    price: 54990,
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=800&auto=format&fit=crop',
    category: 'gaming',
    description: 'Experience lightning fast loading with an ultra-high speed SSD.',
    specs: ['4K graphics', 'Ray tracing', 'Haptic feedback', '3D Audio'],
    featured: true,
    rating: 4.8,
    reviews: 560
  },
  {
    id: '26',
    name: 'Xbox Series X',
    price: 49990,
    image: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?q=80&w=800&auto=format&fit=crop',
    category: 'gaming',
    description: 'The fastest, most powerful Xbox ever.',
    specs: ['12 Teraflops', 'True 4K Gaming', '120 FPS', '1TB SSD'],
    featured: false,
    rating: 4.7,
    reviews: 410
  },
  {
    id: '27',
    name: 'Nintendo Switch OLED',
    price: 31990,
    image: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?q=80&w=800&auto=format&fit=crop',
    category: 'gaming',
    description: 'Play at home on the TV or on-the-go with a vibrant OLED screen.',
    specs: ['7-inch OLED screen', 'Wide adjustable stand', 'Wired LAN port', '64GB storage'],
    featured: false,
    rating: 4.6,
    reviews: 320
  },

  // Cameras
  {
    id: '10',
    name: 'Sony Alpha 7 IV',
    price: 214990,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop',
    category: 'cameras',
    description: 'Full-frame mirrorless camera for professionals.',
    specs: ['33MP sensor', '4K 60p video', 'Real-time Eye AF', 'Vari-angle LCD'],
    featured: false,
    rating: 4.7,
    reviews: 85
  },
  {
    id: '28',
    name: 'Canon EOS R6 Mark II',
    price: 219990,
    image: 'https://images.unsplash.com/photo-1519638831568-d9897f54ed69?q=80&w=800&auto=format&fit=crop',
    category: 'cameras',
    description: 'Master stills and motion with high-speed performance.',
    specs: ['24.2MP Full-Frame', '40 fps shooting', '4K 60p oversampled', 'In-body IS'],
    featured: false,
    rating: 4.6,
    reviews: 62
  },
  {
    id: '29',
    name: 'Fujifilm X-T5',
    price: 169999,
    image: 'https://images.unsplash.com/photo-1517260739337-6799d2eb9adb?q=80&w=800&auto=format&fit=crop',
    category: 'cameras',
    description: 'Photography first. A classic refined.',
    specs: ['40MP X-Trans 5', '5-axis stabilization', 'Three-way tilt LCD', 'Classic Dial operation'],
    featured: false,
    rating: 4.8,
    reviews: 94
  },

  // Drones
  {
    id: '13',
    name: 'DJI Mini 4 Pro',
    price: 99990,
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=800&auto=format&fit=crop',
    category: 'drones',
    description: 'Mini camera drone with omnidirectional obstacle sensing.',
    specs: ['4K/60fps HDR', '34-min flight time', '20km video transmission', 'ActiveTrack 360'],
    featured: false,
    rating: 4.5,
    reviews: 112
  },
  {
    id: '30',
    name: 'DJI Avata 2',
    price: 115990,
    image: 'https://images.unsplash.com/photo-1506947411487-a56738267384?q=80&w=800&auto=format&fit=crop',
    category: 'drones',
    description: 'The sky is your playground. FPV drone experience.',
    specs: ['4K/60fps Super-Wide', 'Built-in Propeller Guard', 'Intuitive Motion Control', 'Binocular Fisheye'],
    featured: false,
    rating: 4.7,
    reviews: 78
  },

  // Smart Home & Networking
  {
    id: '12',
    name: 'Google Nest Audio',
    price: 7999,
    image: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?q=80&w=800&auto=format&fit=crop',
    category: 'smart-home',
    description: 'Fill your room with rich sound and get help from Google.',
    specs: ['Google Assistant', 'Whole-home audio', 'Privacy switch', 'Voice match'],
    featured: false,
    rating: 4.3,
    reviews: 156
  },
  {
    id: '16',
    name: 'TP-Link Archer AXE75',
    price: 14999,
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bbc7c?q=80&w=800&auto=format&fit=crop',
    category: 'networking',
    description: 'Tri-Band Wi-Fi 6E router for Gigabit speeds.',
    specs: ['5400 Mbps speed', '6GHz band', 'Quad-core CPU', 'VPN client'],
    featured: false,
    rating: 4.4,
    reviews: 89
  },
  {
    id: '31',
    name: 'Netgear Orbi 960',
    price: 69999,
    image: 'https://images.unsplash.com/photo-1634913759978-685324398327?q=80&w=800&auto=format&fit=crop',
    category: 'networking',
    description: 'Quad-band WiFi 6E Mesh System.',
    specs: ['10.8Gbps Speed', 'Coverage up to 9000 sq. ft.', '10 Gig Internet Port', 'Exclusive Backhaul'],
    featured: false,
    rating: 4.6,
    reviews: 45
  },

  // Accessories & Monitors
  {
    id: '14',
    name: 'Anker 737 Charger',
    price: 9999,
    image: 'https://images.unsplash.com/photo-1622643048696-7649d52b9046?q=80&w=800&auto=format&fit=crop',
    category: 'accessories',
    description: 'High-speed charging for laptops, tablets, and phones.',
    specs: ['120W output', 'USB-C x2, USB-A x1', 'GaNPrime technology', 'Compact design'],
    featured: false,
    rating: 4.7,
    reviews: 234
  },
  {
    id: '32',
    name: 'Logitech MX Master 3S',
    price: 9495,
    image: 'https://images.unsplash.com/photo-1616763355548-1b606f439f86?q=80&w=800&auto=format&fit=crop',
    category: 'accessories',
    description: 'An icon remastered. Quiet clicks and 8K DPI tracking.',
    specs: ['8K DPI Sensor', 'MagSpeed Scrolling', 'Quiet Clicks', 'Flow Cross-Computer'],
    featured: false,
    rating: 4.9,
    reviews: 512
  },
  {
    id: '15',
    name: 'LG UltraGear 27"',
    price: 32999,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=800&auto=format&fit=crop',
    category: 'monitors',
    description: 'Nano IPS gaming monitor with 1ms response time.',
    specs: ['144Hz refresh rate', 'NVIDIA G-SYNC', 'HDR10', 'QHD resolution'],
    featured: false,
    rating: 4.5,
    reviews: 167
  },
  {
    id: '33',
    name: 'Samsung Odyssey G9',
    price: 124999,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop',
    category: 'monitors',
    description: '49" Curved Gaming Monitor with 240Hz refresh rate.',
    specs: ['Dual QHD', '240Hz Refresh Rate', '1ms Response Time', '1000R Curvature'],
    featured: true,
    rating: 4.6,
    reviews: 143
  },

  // Others
  {
    id: '34',
    name: 'Kindle Paperwhite',
    price: 14999,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop',
    category: 'others',
    description: 'Now with a 6.8" display and adjustable warm light.',
    specs: ['300 ppi glare-free', 'USB-C charging', 'Battery life up to 10 weeks', 'Waterproof'],
    featured: false,
    rating: 4.8,
    reviews: 322
  },
  {
    id: '35',
    name: 'Fujifilm Instax Mini 12',
    price: 7499,
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=800&auto=format&fit=crop',
    category: 'others',
    description: 'Credit card-sized prints with built-in selfie lens.',
    specs: ['Auto Exposure', 'Close-up mode', 'Parallax Correction', 'Selfie Mirror'],
    featured: false,
    rating: 4.5,
    reviews: 189
  },
  {
    id: '36',
    name: 'Philips Hue Starter Kit',
    price: 10999,
    image: 'https://images.unsplash.com/photo-1558000143-a7a584a742a5?q=80&w=800&auto=format&fit=crop',
    category: 'others',
    description: 'White and Color Ambiance Smart Bulb starter kit.',
    specs: ['16 million colors', 'Sync with music', 'Smart control', 'Automated schedules'],
    featured: false,
    rating: 4.6,
    reviews: 145
  }
];
