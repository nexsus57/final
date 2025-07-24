import { Product, Category } from './types';
import { PackageIcon, ZapIcon, LayersIcon, ShieldCheckIcon, SparklesIcon, ScissorsIcon } from './components/icons/CategoryIcons';

export const PRODUCTS: Product[] = [
  // Safety Tapes (10)
  {
    id: 'reflective-tape',
    name: 'Reflective Fabric Tape for Sewing',
    image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=400',
    shortDescription: 'High-visibility safety marking for vehicles, signs, and industrial environments.',
    features: ['High retro-reflectivity (up to 500 cd/lx/m²)', 'Weather and solvent resistant', 'Aggressive adhesive'],
    uses: ['Vehicle conspicuity marking', 'Safety signs', 'Factory and warehouse floor marking', 'Work zone safety'],
    category: 'safety-tapes'
  },
  {
    id: 'floor-marking-tape',
    name: 'PVC Floor Marking Tape',
    image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=400',
    shortDescription: 'Durable vinyl tape for marking aisles, walkways, and hazards in warehouses and factories.',
    features: ['Resists abrasion, moisture, and solvents', 'Vibrant colors for high visibility', 'Easy to apply and remove'],
    uses: ['Aisle marking', 'Social distancing guides', 'Marking out work cells and storage zones'],
    category: 'safety-tapes'
  },
  {
    id: 'anti-slip-tape',
    name: 'Anti-Slip Grit Tape',
    image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=400',
    shortDescription: 'Grit-coated tape to provide traction on slippery surfaces, preventing slips and falls.',
    features: ['Durable mineral-coated surface (80 grit)', 'Strong, waterproof adhesive', 'Suitable for indoor and outdoor use'],
    uses: ['Stairs and ramps', 'Loading docks', 'Locker rooms and pool areas', 'Machine shop floors'],
    category: 'safety-tapes'
  },
  {
    id: 'copper-tape',
    name: 'Conductive Copper Foil Tape',
    image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=400',
    shortDescription: 'Provides excellent EMI shielding, electrical conductivity, and grounding for electronics.',
    features: ['High conductivity adhesive', 'Excellent conformability', 'Solderable'],
    uses: ['EMI/RFI shielding in electronic devices', 'Cable wrapping', 'Grounding applications', 'Stained glass artistry'],
    category: 'specialty-tapes'
  },
  {
    id: 'bopp-packing-tape',
    name: 'BOPP Packing Tape',
    image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=400',
    shortDescription: 'The industry standard for reliable carton sealing and general packaging.',
    features: ['Strong Biaxially Oriented Polypropylene (BOPP) backing', 'High tensile strength', 'Available in clear, brown, and custom prints'],
    uses: ['Carton and box sealing', 'Bundling and strapping', 'General purpose packaging in warehouses'],
    category: 'adhesive-tapes'
  },
  {
    id: 'duct-tape',
    name: 'Duct Tape',
    image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=400',
    shortDescription: 'A versatile, strong, and water-resistant tape for general repairs, bundling, and sealing.',
    features: ['Polyethylene-coated cloth scrim', 'Strong, aggressive adhesive', 'Water-resistant and tearable by hand'],
    uses: ['General maintenance and repair', 'Sealing ducts and pipes (temporary)', 'Bundling wires and cables'],
    category: 'adhesive-tapes'
  },
  {
    id: '3m-double-sided-foam-tape',
    name: '3M Double Sided Foam Tape',
    image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=400',
    shortDescription: 'Strong, conformable foam tape for gap filling and mounting on uneven surfaces.',
    features: ['High-strength acrylic adhesive', 'Conformable foam core', 'Absorbs shock and vibration'],
    uses: ['Mounting signs, nameplates, and trims', 'Automotive interior/exterior attachment', 'Appliance assembly'],
    category: 'double-sided-tapes'
  },
  {
    id: 'aluminium-waterproof-tape',
    name: 'Aluminium Waterproof Butyl Tape',
    image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=400',
    shortDescription: 'Durable sealing and insulation for HVAC, roofs, and water pipes.',
    features: ['Highly tacky butyl adhesive for strong waterproofing', 'UV and temperature resistant', 'Flexible and conformable'],
    uses: ['HVAC duct sealing', 'Roof and gutter repair', 'Pipe insulation and sealing', 'Automotive repairs'],
    category: 'adhesive-tapes'
  }
];

export const CATEGORIES: Category[] = [
    { id: 'safety-tapes', name: 'Safety Tapes', icon: ShieldCheckIcon },
    { id: 'adhesive-tapes', name: 'Adhesive Tapes', icon: PackageIcon },
    { id: 'double-sided-tapes', name: 'Double Sided Tapes', icon: LayersIcon },
    { id: 'specialty-tapes', name: 'Specialty Tapes', icon: SparklesIcon },
    { id: 'antistatic-tapes', name: 'Antistatic & ESD Tapes', icon: ZapIcon },
    { id: 'printing-tapes', name: 'Printing Tapes', icon: ScissorsIcon },
];

export const NAV_LINKS = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
];