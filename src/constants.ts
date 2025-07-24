import { Product, Category } from './types';
import { PackageIcon, ZapIcon, LayersIcon, ShieldCheckIcon, SparklesIcon, ScissorsIcon } from './components/icons/CategoryIcons';


export const PRODUCTS: Product[] = [
  // Safety Tapes (10)
  {
    id: 'reflective-tape',
    name: 'Reflective Fabric Tape for Sewing',
    image: 'https://picsum.photos/seed/reflective-tape/400/400',
    shortDescription: 'High-visibility safety marking for vehicles, signs, and industrial environments.',
    features: ['High retro-reflectivity (up to 500 cd/lx/m²)', 'Weather and solvent resistant', 'Aggressive adhesive'],
    uses: ['Vehicle conspicuity marking', 'Safety signs', 'Factory and warehouse floor marking', 'Work zone safety'],
    category: 'safety-tapes'
  },
  {
    id: 'floor-marking-tape',
    name: 'PVC Floor Marking Tape',
    image: 'https://picsum.photos/seed/floor-marking-tape/400/400',
    shortDescription: 'Durable vinyl tape for marking aisles, walkways, and hazards in warehouses and factories.',
    features: ['Resists abrasion, moisture, and solvents', 'Vibrant colors for high visibility', 'Easy to apply and remove'],
    uses: ['Aisle marking', 'Social distancing guides', 'Marking out work cells and storage zones'],
    category: 'safety-tapes'
  },
  {
    id: 'anti-slip-tape',
    name: 'Anti-Slip Grit Tape',
    image: 'https://picsum.photos/seed/anti-slip-tape/400/400',
    shortDescription: 'Grit-coated tape to provide traction on slippery surfaces, preventing slips and falls.',
    features: ['Durable mineral-coated surface (80 grit)', 'Strong, waterproof adhesive', 'Suitable for indoor and outdoor use'],
    uses: ['Stairs and ramps', 'Loading docks', 'Locker rooms and pool areas', 'Machine shop floors'],
    category: 'safety-tapes'
  },
  {
    id: 'hazard-tape',
    name: 'Hazard Warning Tape',
    image: 'https://picsum.photos/seed/hazard-tape/400/400',
    shortDescription: 'Brightly colored for visual warning and marking of hazardous areas.',
    features: ['High visibility diagonal stripes (Yellow/Black)', 'Durable PVC film', 'Strong rubber-based adhesive'],
    uses: ['Marking physical hazards', 'Aisle marking for traffic', 'Identifying safety equipment locations'],
    category: 'safety-tapes'
  },
  {
    id: 'high-reflective-cloth-tape',
    name: 'High Reflective Cloth Tape',
    image: 'https://picsum.photos/seed/high-reflective-cloth-tape/400/400',
    shortDescription: 'Durable, high-visibility tape for harsh environments.',
    features: ['Cloth backing for strength', 'High retro-reflectivity', 'Weather and abrasion resistant'],
    uses: ['Marking outdoor hazards', 'Safety clothing enhancement', 'Emergency vehicle marking'],
    category: 'safety-tapes'
  },
  {
    id: 'pvc-prismatic-tape',
    name: 'PVC Prismatic Reflective Tape',
    image: 'https://picsum.photos/seed/pvc-prismatic-tape/400/400',
    shortDescription: 'High-intensity prismatic tape for superior long-distance visibility.',
    features: ['Micro-prismatic technology', 'Highly resistant to abrasion', 'Waterproof and dustproof'],
    uses: ['Motorcycle/bicycle vests', 'Safety workwear', 'Tents and outdoor gear'],
    category: 'safety-tapes'
  },
  {
    id: 'glow-in-dark-marking-tape',
    name: 'Glow in Dark Marking Tape',
    image: 'https://picsum.photos/seed/glow-in-dark-marking-tape/400/400',
    shortDescription: 'Photoluminescent tape that glows for hours to mark emergency exits and pathways.',
    features: ['Absorbs and stores ambient light', 'Glows for 6-8 hours', 'Peel and stick application', 'UV Stable'],
    uses: ['Emergency evacuation routes', 'Stairways and handrails', 'Door frames in low-light environments'],
    category: 'safety-tapes'
  },
  {
    id: 'flame-retardant-silver-tape',
    name: 'Flame Retardant Silver Reflective Tape',
    image: 'https://picsum.photos/seed/flame-retardant-silver-tape/400/400',
    shortDescription: 'Reflective tape with added flame retardancy for high-risk workwear.',
    features: ['FR-treated cotton backing', 'Reflectivity over 450 cd/lx.m²', 'Withstands 50 domestic washes'],
    uses: ['High-visibility clothing for firefighters', 'Industrial workwear in harsh environments', 'Personal protective equipment (PPE)'],
    category: 'safety-tapes'
  },
  {
    id: 'anti-slip-bath-shower-tape',
    name: 'Anti-Slip Tape for Bath and Shower',
    image: 'https://picsum.photos/seed/anti-slip-bath-shower-tape/400/400',
    shortDescription: 'Transparent, waterproof tape to prevent falls in moist and slippery environments.',
    features: ['Waterproof acrylic adhesive', 'Transparent and discreet', 'Resists cracking and peeling', 'Temperature resistant up to 50°C'],
    uses: ['Bathtubs and showers', 'Tubs and stairs', 'Pool areas and spas'],
    category: 'safety-tapes'
  },
  {
    id: 'woven-reflective-ribbon',
    name: 'Woven Reflective Ribbon',
    image: 'https://picsum.photos/seed/woven-reflective-ribbon/400/400',
    shortDescription: 'Woven tape with reflective strip sewn on, for safety garments.',
    features: ['Dacron backing material', 'Reflectivity >300cd/lux. m^2', 'Available in multiple colors'],
    uses: ['High visibility sportswear', 'Caps, bags, and accessories', 'Safety jackets and belts'],
    category: 'safety-tapes'
  },

  // Adhesive Tapes (12)
  {
    id: 'bopp-packing-tape',
    name: 'BOPP Packing Tape',
    image: 'https://picsum.photos/seed/bopp-packing-tape/400/400',
    shortDescription: 'The industry standard for reliable carton sealing and general packaging.',
    features: ['Strong Biaxially Oriented Polypropylene (BOPP) backing', 'High tensile strength', 'Available in clear, brown, and custom prints'],
    uses: ['Carton and box sealing', 'Bundling and strapping', 'General purpose packaging in warehouses'],
    category: 'adhesive-tapes'
  },
  {
    id: 'duct-tape',
    name: 'Duct Tape',
    image: 'https://picsum.photos/seed/duct-tape/400/400',
    shortDescription: 'A versatile, strong, and water-resistant tape for general repairs, bundling, and sealing.',
    features: ['Polyethylene-coated cloth scrim', 'Strong, aggressive adhesive', 'Water-resistant and tearable by hand'],
    uses: ['General maintenance and repair', 'Sealing ducts and pipes (temporary)', 'Bundling wires and cables'],
    category: 'adhesive-tapes'
  },
  {
    id: 'masking-tape',
    name: 'Masking Tape',
    image: 'https://picsum.photos/seed/masking-tape/400/400',
    shortDescription: 'General-purpose paper tape for painting, labeling, and light bundling.',
    features: ['Crepe paper backing', 'Easy to tear', 'Removes cleanly within hours'],
    uses: ['Non-critical painting', 'Labeling containers', 'Light-duty bundling and packaging'],
    category: 'adhesive-tapes'
  },
  {
    id: 'filament-tape',
    name: 'Filament Tape',
    image: 'https://picsum.photos/seed/filament-tape/400/400',
    shortDescription: 'High-strength tape reinforced with fiberglass filaments for heavy-duty applications.',
    features: ['Extremely high tensile strength', 'Resistant to tears and abrasion', 'Aggressive adhesive'],
    uses: ['Heavy box reinforcing', 'Palletizing and unitizing loads', 'Metal coil tabbing'],
    category: 'adhesive-tapes'
  },
  {
    id: 'aluminium-waterproof-tape',
    name: 'Aluminium Waterproof Butyl Tape',
    image: 'https://picsum.photos/seed/aluminium-waterproof-tape/400/400',
    shortDescription: 'Durable sealing and insulation for HVAC, roofs, and water pipes.',
    features: ['Highly tacky butyl adhesive for strong waterproofing', 'UV and temperature resistant', 'Flexible and conformable'],
    uses: ['HVAC duct sealing', 'Roof and gutter repair', 'Pipe insulation and sealing', 'Automotive repairs'],
    category: 'adhesive-tapes'
  },
  {
    id: 'adhesive-cloth-tape',
    name: 'Adhesive Cloth Tape',
    image: 'https://picsum.photos/seed/adhesive-cloth-tape/400/400',
    shortDescription: 'Durable and flexible cloth-backed tape for various sealing and repair tasks.',
    features: ['Flexible cloth backing', 'High breaking strength', 'Available in black and milk white'],
    uses: ['Sealing heavy weight cartons', 'Barrel sealing', 'Textile screen printing', 'Protecting polished surfaces'],
    category: 'adhesive-tapes'
  },
  {
    id: 'pink-rayon-tape',
    name: 'Pink Rayon Tape',
    image: 'https://picsum.photos/seed/pink-rayon-tape/400/400',
    shortDescription: 'Insulating tape with excellent holding power for electrical applications.',
    features: ['Outstanding insulation capability (up to 2000 volts)', 'Printable surface', 'Easy to tear'],
    uses: ['Core insulation in transformers and solenoid coils', 'Coil winding and holding wires in motors', 'Telephone and telecommunication equipment'],
    category: 'adhesive-tapes'
  },
  {
    id: 'pvc-pipe-wrapping-tape',
    name: 'PVC Pipe Wrapping Tape (With Adhesive)',
    image: 'https://picsum.photos/seed/pvc-pipe-wrapping-tape/400/400',
    shortDescription: 'Anti-corrosive and moisture-resistant tape for protecting pipelines.',
    features: ['Polyvinyl chloride film', 'Synthetic rubber adhesive', 'Excellent peel strength', 'Moisture resistant'],
    uses: ['Air condition duct wrapping', 'Pipeline protection from corrosion', 'Moisture proofing'],
    category: 'adhesive-tapes'
  },
  {
    id: 'pvc-pipe-wrapping-tape-no-adhesive',
    name: 'PVC Pipe Wrapping Tape (Without Adhesive)',
    image: 'https://picsum.photos/seed/pvc-pipe-wrapping-tape-no-adhesive/400/400',
    shortDescription: 'Non-adhesive PVC tape known for its flexibility and binding strength.',
    features: ['High quality plasticized PVC film', 'Excellent binding strength', 'Flame retardant', 'Waterproof'],
    uses: ['Electrical insulation', 'Strong fixation for temporary bundling', 'Easy to tear'],
    category: 'adhesive-tapes'
  },
  {
    id: 'kraft-paper-tape',
    name: 'Kraft Paper Tape (Self-Adhesive)',
    image: 'https://picsum.photos/seed/kraft-paper-tape/400/400',
    shortDescription: 'Eco-friendly, biodegradable paper tape for carton sealing.',
    features: ['Biodegradable and biocompostable', 'Plastic-free alternative', 'Printable up to 3 colors'],
    uses: ['Carton sealing', 'Eco-friendly packaging', 'Replacing single-use plastic tapes'],
    category: 'adhesive-tapes'
  },
  {
    id: 'water-activated-kraft-tape',
    name: 'Water Activated Kraft Paper Tape',
    image: 'https://picsum.photos/seed/water-activated-kraft-tape/400/400',
    shortDescription: 'Reinforced, recyclable tape that creates a permanent bond for heavy-duty packaging.',
    features: ['90% fully recyclable / biocompostable', 'Water-activated adhesive', 'High tensile strength with reinforcement'],
    uses: ['Light and heavy-duty packaging', 'Tamper-evident sealing', 'Easy recycling with the box'],
    category: 'adhesive-tapes'
  },
  {
    id: 'tamper-proof-security-tape',
    name: 'Tamper Proof / Security Packing Tape',
    image: 'https://picsum.photos/seed/tamper-proof-security-tape/400/400',
    shortDescription: 'Provides superior authentication and tamper evidence for valuable products.',
    features: ['Reveals a "VOID OPEN" message when removed', 'High-tack adhesive', 'Deters theft and tampering'],
    uses: ['Packing high-value industrial products', 'Securing confidential shipments', 'Pharmaceutical packaging'],
    category: 'adhesive-tapes'
  },

  // Double Sided Tapes (9)
  {
    id: '3m-double-sided-foam-tape',
    name: '3M Double Sided Foam Tape',
    image: 'https://picsum.photos/seed/3m-double-sided-foam-tape/400/400',
    shortDescription: 'Strong, conformable foam tape for gap filling and mounting on uneven surfaces.',
    features: ['High-strength acrylic adhesive', 'Conformable foam core', 'Absorbs shock and vibration'],
    uses: ['Mounting signs, nameplates, and trims', 'Automotive interior/exterior attachment', 'Appliance assembly'],
    category: 'double-sided-tapes'
  },
  {
    id: 'vhb-tape',
    name: 'VHB (Very High Bond) Tape',
    image: 'https://picsum.photos/seed/vhb-tape/400/400',
    shortDescription: 'A strong alternative to rivets, welds, and screws for permanent bonding.',
    features: ['Durable viscoelastic acrylic foam', 'Creates a permanent seal against water', 'Absorbs shock and distributes stress'],
    uses: ['Panel to frame bonding', 'Stiffener to panel attachment', 'Mounting decorative materials'],
    category: 'double-sided-tapes'
  },
  {
    id: 'double-sided-tissue-tape',
    name: 'Double Sided Tissue Tape',
    image: 'https://picsum.photos/seed/double-sided-tissue-tape/400/400',
    shortDescription: 'Lightweight tissue paper tape coated with adhesive for general mounting and laminating.',
    features: ['Hot melt or solvent based adhesive', 'High initial tack', 'Good for soft and flexible materials'],
    uses: ['Splicing of films and papers', 'Mounting nameplates and posters', 'Laminating textiles, cork, and paper'],
    category: 'double-sided-tapes'
  },
  {
    id: 'double-sided-cloth-tape',
    name: 'Double Sided Cloth Tape',
    image: 'https://picsum.photos/seed/double-sided-cloth-tape/400/400',
    shortDescription: 'A woven cotton cloth tape with aggressive adhesive for temporary mounting.',
    features: ['Aggressive natural rubber adhesive', 'Woven cotton cloth backing', 'Easy-release paper liner'],
    uses: ['Temporary mounting for assembly', 'Carpet installation', 'Print plate mounting'],
    category: 'double-sided-tapes'
  },
  {
    id: 'acrylic-foam-tape',
    name: 'Acrylic Foam Tape',
    image: 'https://picsum.photos/seed/acrylic-foam-tape/400/400',
    shortDescription: 'Strong double-sided tape for permanent fixing of trims and emblems.',
    features: ['High-performance adhesive', 'Available in multiple thicknesses (0.4mm to 2mm)', 'Used for fixing GI Panels, MS Sheets'],
    uses: ['Mounting automotive trims and emblems', 'Body side moldings', 'Construction applications'],
    category: 'double-sided-tapes'
  },
  {
    id: 'acrylic-gel-tape',
    name: 'Acrylic Gel Tape',
    image: 'https://picsum.photos/seed/acrylic-gel-tape/400/400',
    shortDescription: 'Crystal clear acrylic foam tape with long term stability.',
    features: ['Crystal clear appearance', 'High adhesion and elasticity', 'Polyethylene release liner'],
    uses: ['Automotive exterior and interior trim', 'Body side moldings, claddings, rock panel trim', 'Wheel flares and bumper trim'],
    category: 'double-sided-tapes'
  },
  {
    id: 'nano-gel-tape',
    name: 'Nano Gel Tape',
    image: 'https://picsum.photos/seed/nano-gel-tape/400/400',
    shortDescription: 'Washable, reusable, and traceless tape for hanging lightweight items.',
    features: ['Washable and reusable', 'Traceless removal with no residue', 'Strong gel grip'],
    uses: ['Hanging pictures and decorative items', 'Mounting items on smooth walls without punching holes'],
    category: 'double-sided-tapes'
  },
  {
    id: 'xlpe-foam-tape',
    name: 'XLPE Foam Tape',
    image: 'https://picsum.photos/seed/xlpe-foam-tape/400/400',
    shortDescription: 'Flexible foam tape ideal for hot or cold piping and fittings insulation.',
    features: ['High flexibility and conformability', 'Excellent for thermal insulation', 'Duct gasket application'],
    uses: ['Insulating hot or cold piping and fittings', 'General purpose holding and patching', 'Sealing applications indoor and outdoor'],
    category: 'double-sided-tapes'
  },
  {
    id: 'eva-foam-tape',
    name: 'EVA Foam Tape',
    image: 'https://picsum.photos/seed/eva-foam-tape/400/400',
    shortDescription: 'Soft and protective adhesive tape for sealing, bonding, and cushioning.',
    features: ['Great bonding strength with high adhesion', 'Heat resistance capabilities', 'Protects from dust, water, and moisture'],
    uses: ['Sealing, bonding, cushioning', 'Permanent fixing of spare parts in refrigerators', 'Mounting electronic goods'],
    category: 'double-sided-tapes'
  },

  // Specialty Tapes (14)
  {
    id: 'copper-tape',
    name: 'Conductive Copper Foil Tape',
    image: 'https://picsum.photos/seed/copper-tape/400/400',
    shortDescription: 'Provides excellent EMI shielding, electrical conductivity, and grounding for electronics.',
    features: ['High conductivity adhesive', 'Excellent conformability', 'Solderable'],
    uses: ['EMI/RFI shielding in electronic devices', 'Cable wrapping', 'Grounding applications', 'Stained glass artistry'],
    category: 'specialty-tapes'
  },
  {
    id: 'fine-line-masking-tape',
    name: 'Fine Line Masking Tape',
    image: 'https://picsum.photos/seed/fine-line-masking-tape/400/400',
    shortDescription: 'Creates sharp, clean paint lines for precision masking in automotive and industrial painting.',
    features: ['Ultra-thin for sharp lines', 'Resists paint bleed-through', 'Conformable for curves'],
    uses: ['Automotive custom paint jobs', 'Industrial painting', 'Architectural design', 'Pinstriping'],
    category: 'specialty-tapes'
  },
  {
    id: 'silicone-splicing-tape',
    name: 'Silicone Splicing Tape',
    image: 'https://picsum.photos/seed/silicone-splicing-tape/400/400',
    shortDescription: 'Heat resistant and non-stick, ideal for high-temperature splicing and sealing.',
    features: ['High-temperature resistance (up to 260°C)', 'Non-stick silicone adhesive', 'Clean removal'],
    uses: ['Splicing of silicone-coated papers and films', 'Powder coating masking', 'High-temp sealing applications'],
    category: 'specialty-tapes'
  },
  {
    id: 'powder-coating-tape',
    name: 'Powder Coating Tape',
    image: 'https://picsum.photos/seed/powder-coating-tape/400/400',
    shortDescription: 'High-temperature polyester tape for masking surfaces during powder coating processes.',
    features: ['Resists high temperatures (up to 204°C)', 'Sharp paint lines', 'Removes cleanly without residue'],
    uses: ['Masking parts for powder coating', 'E-coating', 'Anodizing processes'],
    category: 'specialty-tapes'
  },
  {
    id: 'high-temp-resistant-sealing-tape',
    name: 'High Temp Resistant Sealing Tape',
    image: 'https://picsum.photos/seed/high-temp-resistant-sealing-tape/400/400',
    shortDescription: 'For thermal insulation and sealing in high heat zones.',
    features: ['Withstands extreme temperatures', 'Excellent sealing properties', 'Durable and long-lasting'],
    uses: ['Sealing high-temperature ovens and furnaces', 'Exhaust system repairs', 'Industrial insulation wrapping'],
    category: 'specialty-tapes'
  },
  {
    id: 'glass-cloth-tape',
    name: 'Glass Cloth Tape',
    image: 'https://picsum.photos/seed/glass-cloth-tape/400/400',
    shortDescription: 'High-temperature tape with excellent mechanical strength for demanding applications.',
    features: ['Withstands high temperatures', 'High abrasion resistance', 'Conformable woven backing'],
    uses: ['Permanent sealing of high-temp ducts', 'Electrical insulation', 'Aircraft maintenance'],
    category: 'specialty-tapes'
  },
  {
    id: 'polyimide-tape',
    name: 'Polyimide Tape',
    image: 'https://picsum.photos/seed/polyimide-tape/400/400',
    shortDescription: 'High-temperature masking for electronics, ideal for wave soldering.',
    features: ['Wide temperature range (-40°C to 350°C)', 'Excellent dielectric strength', 'Removes cleanly with no residue'],
    uses: ['Masking circuit boards during wave soldering', 'Powder coating and anodizing', 'Insulation of aircraft and spacecraft wings'],
    category: 'specialty-tapes'
  },
  {
    id: 'ptfe-teflon-tape',
    name: 'PTFE Teflon Adhesive Tape',
    image: 'https://picsum.photos/seed/ptfe-teflon-tape/400/400',
    shortDescription: 'Non-stick, low friction tape for heat sealing and packaging machines.',
    features: ['High tensile strength glass cloth reinforcement', 'Non-stick, low friction surface', 'High heat and chemical resistance'],
    uses: ['Heat sealing machines', 'Packaging applications', 'Lining chutes and guide rails'],
    category: 'specialty-tapes'
  },
  {
    id: 'thermal-conductive-tape',
    name: 'Thermal Conductive Tape',
    image: 'https://picsum.photos/seed/thermal-conductive-tape/400/400',
    shortDescription: 'Glass fabric tape to dissipate heat from electronic components and heat sinks.',
    features: ['Double-sided thermally conductive adhesive', 'Preferential heat dissipation path', 'Efficiently mounts heat sinks'],
    uses: ['Mounting heat sinks on microprocessors', 'LED Array (Metal PCB)', 'Timing Controller components'],
    category: 'specialty-tapes'
  },
  {
    id: 'lamination-tape',
    name: 'Lamination Tape',
    image: 'https://picsum.photos/seed/lamination-tape/400/400',
    shortDescription: 'Pressure-sensitive adhesive tape for binding film to substrates without heat.',
    features: ['OPP laminating film', 'No pre-heating or after-drying required', 'Available in transparent & matt film'],
    uses: ['Protecting printed media and digital prints', 'Creating a more exquisite printing surface'],
    category: 'specialty-tapes'
  },
  {
    id: 'bag-sealing-tape',
    name: 'Bag Sealing Tape',
    image: 'https://picsum.photos/seed/bag-sealing-tape/400/400',
    shortDescription: 'Well-suited for soft packaging materials, providing a secure seal.',
    features: ['Polythene material', 'Highly adhesive', 'Weatherproof'],
    uses: ['Sealing bags and soft packages', 'Ensuring safety packed contents'],
    category: 'specialty-tapes'
  },
  {
    id: 'surface-protection-tape',
    name: 'Surface Protection Tape',
    image: 'https://picsum.photos/seed/surface-protection-tape/400/400',
    shortDescription: 'Prevents surfaces from scratches and marks during handling and transit.',
    features: ['Available in various adhesive strengths', 'Acrylic or rubber base adhesive', 'Available from 25 to 150 microns thickness'],
    uses: ['Protecting color coated steel sheets', 'Decorative laminates', 'Stainless steel sheets and UPVC profiles'],
    category: 'specialty-tapes'
  },
  {
    id: 'air-vent-tape',
    name: 'Air Vent Tape',
    image: 'https://picsum.photos/seed/air-vent-tape/400/400',
    shortDescription: 'Non-Woven porous tape for foaming insulation processes in home appliances.',
    features: ['Excellent permeability for high air/gases', 'Allows hot gasses to pass through', 'Creates a barrier for hot liquid foam'],
    uses: ['Applied on air-vents of foam filling machines', 'PIR and PU foam filling', 'Ensuring uniform foam structure'],
    category: 'specialty-tapes'
  },
  {
    id: 'acetate-cloth-tape',
    name: 'Acetate Cloth Tape',
    image: 'https://picsum.photos/seed/acetate-cloth-tape/400/400',
    shortDescription: 'Waterproof composite tape for packing, banding, and sealing in various industries.',
    features: ['Composite of polyethylene and cloth', 'Waterproof and anti-aging', 'Strong peel strength'],
    uses: ['Packing, banding, sealing, splicing', 'Auto and machine industry', 'Automobile cabins and equipment cabinets'],
    category: 'specialty-tapes'
  },

  // Antistatic Tapes (6)
  {
    id: 'conductive-grid-tape',
    name: 'Conductive Grid Tape',
    image: 'https://picsum.photos/seed/conductive-grid-tape/400/400',
    shortDescription: 'Anti-static protection for sensitive electronics and components.',
    features: ['Creates a Faraday Cage effect', 'Low static generation', 'Clear for visibility'],
    uses: ['Sealing ESD bags and containers', 'Use in cleanrooms and static-sensitive areas', 'Grounding work surfaces'],
    category: 'antistatic-tapes'
  },
  {
    id: 'antistatic-shielding-tape',
    name: 'Antistatic Shielding Tape',
    image: 'https://picsum.photos/seed/antistatic-shielding-tape/400/400',
    shortDescription: 'Metalized polyester tape providing a static shielding layer for ESD protection.',
    features: ['Four-layer construction', 'Creates Faraday Cage', 'Used for sealing shielding bags'],
    uses: ['Sealing ESD shielding bags', 'Securing components in ESD-safe environments'],
    category: 'antistatic-tapes'
  },
  {
    id: 'green-polyester-tape',
    name: 'Green Polyester Tape',
    image: 'https://picsum.photos/seed/green-polyester-tape/400/400',
    shortDescription: 'High temp tape for masking in powder coating, plating, and painting.',
    features: ['Withstands 230°C for 30 mins', 'Clean removal, no residue', 'High tensile strength', 'ROHS compliant'],
    uses: ['Powder coating and plating', 'Anodizing and general painting', 'Joining silicon liners'],
    category: 'antistatic-tapes'
  },
  {
    id: 'green-polyester-tape-liner',
    name: 'Green Polyester Tape With Liner',
    image: 'https://picsum.photos/seed/green-polyester-tape-liner/400/400',
    shortDescription: 'Polyester tape with a liner, ideal for die-cutting in high-temperature applications.',
    features: ['Silicone adhesive', 'Temperature range -50°C to 204°C', 'Liner for easy die-cutting', 'Clean removal'],
    uses: ['Difficult masking operations', 'Surfaces during powder coating', 'Chemical processes and anodizing'],
    category: 'antistatic-tapes'
  },
  {
    id: 'yellow-polyester-tape',
    name: 'Yellow Polyester Tape',
    image: 'https://picsum.photos/seed/yellow-polyester-tape/400/400',
    shortDescription: 'Film-backed tape for insulating protection of electrical parts and wires.',
    features: ['Thermosetting rubber pressure-sensitive adhesive', 'Temperature range -40°C to 130°C', 'No separator needed'],
    uses: ['Insulating protection of electrical parts and wires', 'General electrical applications'],
    category: 'antistatic-tapes'
  },
  {
    id: 'tin-plated-copper-tape',
    name: 'Tin Plated Copper Tape',
    image: 'https://picsum.photos/seed/tin-plated-copper-tape/400/400',
    shortDescription: 'Embossed tin-plated copper for reliable metal-to-metal contact and shielding.',
    features: ['Embossed dead soft tin-plated copper foil', 'Aggressive pressure-sensitive acrylic adhesive', 'Good weld-ability and corrosion resistance'],
    uses: ['High-end electronic equipment grounding', 'EMI shielding'],
    category: 'antistatic-tapes'
  },

  // Printing Tapes (4)
  {
    id: 'lohmann-duploflex-tape',
    name: 'Lohmann Duploflex Tape',
    image: 'https://picsum.photos/seed/lohmann-duploflex-tape/400/400',
    shortDescription: 'High-tack foam adhesive designed for flexographic printing plate mounting.',
    features: ['Consistent thickness for print quality', 'High adhesion and residue-free removal', 'Absorbs vibrations'],
    uses: ['Mounting photopolymer plates in flexo printing', 'Wide-web and narrow-web printing'],
    category: 'printing-tapes'
  },
  {
    id: 'double-sided-pvc-tape-flexo',
    name: 'Double Sided PVC Tape for Flexo Printing',
    image: 'https://picsum.photos/seed/double-sided-pvc-tape-flexo/400/400',
    shortDescription: 'Green-transparent PVC tape for mounting photopolymer plates.',
    features: ['300 µm / 12 mil thickness', 'High adhesion and shear resistance', 'Easily repositioned during mounting'],
    uses: ['Mounting photopolymer plates in flexographic printing', 'Corrugated board postprint'],
    category: 'printing-tapes'
  },
  {
    id: 'double-sided-repulpable-tape',
    name: 'Double Sided Repulpable Tapes',
    image: 'https://picsum.photos/seed/double-sided-repulpable-tape/400/400',
    shortDescription: 'Repulpable tape for splicing paper webs in production and printing industries.',
    features: ['Repulpable paper liner', 'Center-slit liner', 'Removable non-repulpable masking tape strip'],
    uses: ['Flying splices at high speed on off-line coaters', 'Heatset web offset presses', 'Splicing any paper from light to heavyweight'],
    category: 'printing-tapes'
  },
  {
    id: 'ez-application-tape',
    name: 'EZ Application Tape (Transfer Tape)',
    image: 'https://picsum.photos/seed/ez-application-tape/400/400',
    shortDescription: 'For transfer and orientation of colored vinyl label words and graphic cuttings.',
    features: ['Resistance to UV Light', 'Excellent Chemical & Abrasion Resistance', 'Extremely smooth unwinding'],
    uses: ['Transferring colored vinyl labels', 'Positioning graphic pattern cuttings', 'Wwl & Nwl Industries'],
    category: 'printing-tapes'
  },

  // HVAC Tapes (7)
  {
    id: 'aluminium-foil-tape',
    name: 'Aluminium Foil Tape',
    image: 'https://picsum.photos/seed/aluminium-foil-tape/400/400',
    shortDescription: 'For seams and joints of fiberglass and aluminum backed duct board.',
    features: ['Rubber based pressure sensitive adhesive', 'Excellent barrier to vapor', 'Conforms to irregular surfaces'],
    uses: ['Shielding and covering thermal insulation', 'Sealing off conditioning and cool/warm air flow', 'High/low temperature applications'],
    category: 'hvac-tapes'
  },
  {
    id: 'aluminium-foil-scrim-kraft-tape',
    name: 'Aluminium Foil Scrim Kraft Tape (FSK)',
    image: 'https://picsum.photos/seed/aluminium-foil-scrim-kraft-tape/400/400',
    shortDescription: '3-layered laminate tape for insulation in demanding temperature and humidity.',
    features: ['3-layered (Al foil, Scrim, Kraft paper)', 'Low emissivity for good reflective insulation', 'Tear and puncture resistance from scrim reinforcement'],
    uses: ['Lamination for glass wool or rock wool', 'Roofing applications like flashing joints', 'Protection against vapor moisture'],
    category: 'hvac-tapes'
  },
  {
    id: 'aluminium-pet-tape',
    name: 'Aluminium Pet tape (ALUPET)',
    image: 'https://picsum.photos/seed/aluminium-pet-tape/400/400',
    shortDescription: 'Laminate strip of aluminum foil & PET film for a good sealant.',
    features: ['Low moisture content', 'Excellent reflection to heat and light', 'Excellent barrier to vapor'],
    uses: ['Joints & XLPE foam /NBR foam on ducts', 'Air conditioning ducting systems', 'Duct sealing and joining for refrigerator'],
    category: 'hvac-tapes'
  },
  {
    id: 'aluminium-glass-tape-fr-grade',
    name: 'Aluminium Glass Tape – FR Grade',
    image: 'https://picsum.photos/seed/aluminium-glass-tape-fr-grade/400/400',
    shortDescription: 'High tensile strength tape for specialized HVAC insulation applications.',
    features: ['Aluminum foil + glass fiber cloth reinforcement', 'High performance adhesive', 'Easy release silicone paper liner'],
    uses: ['Closing foil-faced fiber glass & mineral wool insulation', 'Sealing aluminum-faced fiber glass duct boards', 'Refrigeration applications'],
    category: 'hvac-tapes'
  },
  {
    id: 'glass-cloth-tape-fr-grade',
    name: 'GLASS CLOTH TAPE – FR Grade',
    image: 'https://picsum.photos/seed/glass-cloth-tape-fr-grade/400/400',
    shortDescription: 'Pressure sensitive thermal insulation joining tape.',
    features: ['Glass cloth mesh face (5 mil and 7 mil)', 'Excellent vapor barrier', 'Service temperature: -20°C to +120°C'],
    uses: ['Joining or finishing tape to seal edges', 'Sealing joins in duct and pipe insulation'],
    category: 'hvac-tapes'
  },
  {
    id: 'double-sided-scrim-tape',
    name: 'Double-Sided Scrim Tape',
    image: 'https://picsum.photos/seed/double-sided-scrim-tape/400/400',
    shortDescription: 'Polyester film reinforced with fiberglass yarn for strong tensile strength.',
    features: ['Reinforced with cross-wave fiberglass yarn', 'Extremely strong holding power', 'Perfect adhesion even on rough surfaces'],
    uses: ['Works effectively with foam tape strips in windows and doors', 'Reinforcement for foam tapes'],
    category: 'hvac-tapes'
  },
  {
    id: 'spacer-tape',
    name: 'Spacer Tapes',
    image: 'https://picsum.photos/seed/spacer-tape/400/400',
    shortDescription: 'Technical quality foam coated with acrylic adhesive for structural glazing.',
    features: ['Exclusive acrylic adhesive', 'Highly suitable for thermal insulation', 'Seals against water, vapor, and noise'],
    uses: ['Aluminum doors, windows, steel, and panel fixing', 'Structural glazing as a spacer'],
    category: 'hvac-tapes'
  }
];

export const CATEGORIES: Category[] = [
    { id: 'safety-tapes', name: 'Safety Tapes', icon: ShieldCheckIcon },
    { id: 'adhesive-tapes', name: 'Adhesive Tapes', icon: PackageIcon },
    { id: 'double-sided-tapes', name: 'Double Sided Tapes', icon: LayersIcon },
    { id: 'specialty-tapes', name: 'Specialty Tapes', icon: SparklesIcon },
    { id: 'antistatic-tapes', name: 'Antistatic & ESD Tapes', icon: ZapIcon },
    { id: 'printing-tapes', name: 'Printing Tapes', icon: ScissorsIcon },
    { id: 'hvac-tapes', name: 'HVAC Tapes', icon: PackageIcon }, // Using package for now
];

export const NAV_LINKS = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
];