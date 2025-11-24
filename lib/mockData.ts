// Mock data for showcase version - replaces database

export interface Realtor {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  bio: string | null;
  image: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  propertyType: string;
  listingType: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  lotSize: number | null;
  yearBuilt: number | null;
  parking: number | null;
  garage: boolean;
  pool: boolean;
  garden: boolean;
  balcony: boolean;
  furnished: boolean;
  images: string[];
  mainImage: string | null;
  published: boolean;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date | null;
  realtorId: string | null;
  realtor?: Realtor;
  blockchainHash?: string;
  blockchainVerified?: boolean;
  nftTokenId?: string;
  smartContractAddress?: string;
}

export interface Favorite {
  id: string;
  userId: string;
  propertyId: string;
  createdAt: Date;
  property?: Property;
}

export interface TourAvailability {
  id: string;
  propertyId: string;
  date: Date;
  timeSlots: string;
  isAvailable: boolean;
  createdAt: Date;
  property?: Property;
}

export interface TourBooking {
  id: string;
  propertyId: string;
  date: Date;
  timeSlot: string;
  visitorName: string;
  visitorEmail: string;
  visitorPhone: string | null;
  status: string;
  notes: string | null;
  createdAt: Date;
  property?: Property;
}

export interface ContactMessage {
  id: string;
  propertyId: string;
  propertyTitle: string;
  realtorEmail: string | null;
  senderName: string;
  senderEmail: string;
  senderPhone: string | null;
  message: string;
  isRead: boolean;
  isReplied: boolean;
  createdAt: Date;
}

export interface PropertyView {
  id: string;
  userId: string;
  propertyId: string;
  viewedAt: Date;
  property?: Property;
}

// Mock Realtors
export const mockRealtors: Realtor[] = [
  {
    id: '101',
    name: 'Matti Virtanen',
    email: 'matti.virtanen@kotiketju.fi',
    phone: '+358 40 123 4567',
    bio: 'Kokenut kiinteistönvälittäjä yli 15 vuoden kokemuksella pääkaupunkiseudulta.',
    image: '/realtors/matti.jpg',
    createdAt: new Date('2023-01-15'),
    updatedAt: new Date('2024-11-20'),
  },
  {
    id: '102',
    name: 'Liisa Korhonen',
    email: 'liisa.korhonen@kotiketju.fi',
    phone: '+358 50 987 6543',
    bio: 'Erikoistunut luksuskiinteistöihin ja uudiskohteisiin.',
    image: '/realtors/liisa.jpg',
    createdAt: new Date('2023-03-20'),
    updatedAt: new Date('2024-11-18'),
  },
  {
    id: '103',
    name: 'Jari Nieminen',
    email: 'jari.nieminen@kotiketju.fi',
    phone: '+358 45 555 1234',
    bio: 'Asiantuntija rivitaloissa ja omakotitaloissa.',
    image: '/realtors/jari.jpg',
    createdAt: new Date('2023-05-10'),
    updatedAt: new Date('2024-11-15'),
  },
];

// Mock Properties
export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Moderni Keskustan Asunto Panoraamanäkymillä',
    description: 'Upea ja avara 3h+k asunto Helsingin ytimessä. Korkealaatuiset materiaalit, lattiasta kattoon ulottuvat ikkunat ja henkeäsalpaavat kaupunkinäkymät. Asunto on äskettäin remontoitu ja täysin kalustettu. Rauhallinen sijainti hyvien kulkuyhteyksien varrella.',
    price: 450000,
    address: 'Mannerheimintie 45 A 15',
    city: 'Helsinki',
    state: 'Uusimaa',
    zipCode: '00100',
    country: 'Finland',
    propertyType: 'Asunto',
    listingType: 'Myynnissä',
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 95,
    lotSize: null,
    yearBuilt: 2020,
    parking: 1,
    garage: false,
    pool: false,
    garden: false,
    balcony: true,
    furnished: true,
    images: ['/images/properties/prop-1.jpg'],
    mainImage: '/images/properties/prop-1.jpg',
    published: true,
    featured: true,
    createdAt: new Date('2024-10-01'),
    updatedAt: new Date('2024-11-20'),
    publishedAt: new Date('2024-10-05'),
    realtorId: '1',
  },
  {
    id: '2',
    title: 'Viihtyisä Omakotitalo Rauhallisella Alueella',
    description: 'Kaunis ja tilava omakotitalo perheen tarpeisiin. Suuri piha, moderni keittiö ja avara olohuone. Lähellä kouluja ja päiväkoteja.',
    price: 550000,
    address: 'Koivukuja 12',
    city: 'Espoo',
    state: 'Uusimaa',
    zipCode: '02100',
    country: 'Finland',
    propertyType: 'House',
    listingType: 'Sale',
    bedrooms: 4,
    bathrooms: 2.5,
    squareFeet: 150,
    lotSize: 800,
    yearBuilt: 2015,
    parking: 2,
    garage: true,
    pool: false,
    garden: true,
    balcony: false,
    furnished: false,
    images: ['/images/properties/prop-2.jpg'],
    mainImage: '/images/properties/prop-2.jpg',
    published: true,
    featured: true,
    createdAt: new Date('2024-09-15'),
    updatedAt: new Date('2024-11-18'),
    publishedAt: new Date('2024-09-20'),
    realtorId: '102',
    blockchainHash: '0x8a1b2c3d4e5f6789abcdef0123456789abcdef0123456789abcdef0123456789',
    blockchainVerified: true,
    nftTokenId: 'PROP-NFT-002',
    smartContractAddress: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
  },
  {
    id: '3',
    title: 'Tyylikäs Kaupunkikoti Keskustassa',
    description: 'Modernisti remontoitu 2h+k asunto erinomaisella sijainnilla. Kävelymatkan päässä kaikista palveluista.',
    price: 320000,
    address: 'Hämeenkatu 78 B 22',
    city: 'Tampere',
    state: 'Pirkanmaa',
    zipCode: '33100',
    country: 'Finland',
    propertyType: 'Apartment',
    listingType: 'Sale',
    bedrooms: 2,
    bathrooms: 1,
    squareFeet: 65,
    lotSize: null,
    yearBuilt: 2018,
    parking: 1,
    garage: false,
    pool: false,
    garden: false,
    balcony: true,
    furnished: false,
    images: [
      '/images/properties/prop-3.jpg',
     
    ],
    mainImage: '/images/properties/prop-3.jpg',
    published: true,
    featured: false,
    createdAt: new Date('2024-10-10'),
    updatedAt: new Date('2024-11-15'),
    publishedAt: new Date('2024-10-12'),
    realtorId: '103',
    blockchainHash: '0x2468ace13579bdf02468ace13579bdf02468ace13579bdf02468ace13579bdf0',
    blockchainVerified: true,
    nftTokenId: 'PROP-NFT-003',
    smartContractAddress: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
  },
  {
    id: '4',
    title: 'Luksushuoneisto Merinäköalalla',
    description: 'Eksklusiivinen penthouse-asunto panoraamanäkymillä merelle. Ylimmän luokan varustelu ja ainutlaatuinen suunnittelu.',
    price: 890000,
    address: 'Merikatu 5 A 45',
    city: 'Helsinki',
    state: 'Uusimaa',
    zipCode: '00150',
    country: 'Finland',
    propertyType: 'Penthouse',
    listingType: 'Sale',
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 180,
    lotSize: null,
    yearBuilt: 2022,
    parking: 2,
    garage: true,
    pool: true,
    garden: false,
    balcony: true,
    furnished: true,
    images: ['/images/properties/prop-4.jpg'],
    mainImage: '/images/properties/prop-4.jpg',
    published: true,
    featured: true,
    createdAt: new Date('2024-08-20'),
    updatedAt: new Date('2024-11-22'),
    publishedAt: new Date('2024-08-25'),
    realtorId: '102',
    blockchainHash: '0xfedcba9876543210fedcba9876543210fedcba9876543210fedcba9876543210',
    blockchainVerified: true,
    nftTokenId: 'PROP-NFT-004',
    smartContractAddress: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
  },
  {
    id: '5',
    title: 'Charmia ja Historiaa Vanhassa Puutalossa',
    description: 'Kauniisti kunnostettu historiallinen puutalo alkuperäisyyttä kunnioittaen. Ainutlaatuinen tunnelma ja huolellisesti valitut yksityiskohdat.',
    price: 420000,
    address: 'Puistokatu 23',
    city: 'Turku',
    state: 'Varsinais-Suomi',
    zipCode: '20100',
    country: 'Finland',
    propertyType: 'House',
    listingType: 'Sale',
    bedrooms: 3,
    bathrooms: 1.5,
    squareFeet: 120,
    lotSize: 500,
    yearBuilt: 1920,
    parking: 1,
    garage: false,
    pool: false,
    garden: true,
    balcony: false,
    furnished: false,
    images: ['/images/properties/prop-5.jpg'],
    mainImage: '/images/properties/prop-5.jpg',
    published: true,
    featured: false,
    createdAt: new Date('2024-09-05'),
    updatedAt: new Date('2024-11-10'),
    publishedAt: new Date('2024-09-08'),
    realtorId: '101',
    blockchainHash: '0x1357924680ace1357924680ace1357924680ace1357924680ace135792468',
    blockchainVerified: true,
    nftTokenId: 'PROP-NFT-005',
    smartContractAddress: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
  },
  {
    id: '6',
    title: 'Kompakti Yksiö Opiskelijalle tai Nuorelle',
    description: 'Käytännöllinen ja hyvin suunniteltu yksiö lähellä yliopistoa. Hyvät kulkuyhteydet ja palvelut lähellä.',
    price: 145000,
    address: 'Yliopistonkatu 34 C 8',
    city: 'Tampere',
    state: 'Pirkanmaa',
    zipCode: '33100',
    country: 'Finland',
    propertyType: 'Studio',
    listingType: 'Sale',
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: 28,
    lotSize: null,
    yearBuilt: 2019,
    parking: 0,
    garage: false,
    pool: false,
    garden: false,
    balcony: false,
    furnished: false,
    images: ['/images/properties/prop-6.jpg'],
    mainImage: '/images/properties/prop-6.jpg',
    published: true,
    featured: false,
    createdAt: new Date('2024-10-20'),
    updatedAt: new Date('2024-11-12'),
    publishedAt: new Date('2024-10-22'),
    realtorId: '103',
    blockchainHash: '0xabcdef123456789abcdef123456789abcdef123456789abcdef123456789abc',
    blockchainVerified: false,
    nftTokenId: 'PROP-NFT-006',
    smartContractAddress: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
  },
  {
    id: '7',
    title: 'Tilava Rivitaloasunto Perhealueella',
    description: 'Väljä ja valoisa rivitaloasunto turvallisella perhealueella. Oma piha, kaksi tasoa ja hyvät säilytystilat.',
    price: 385000,
    address: 'Perhekuja 8',
    city: 'Vantaa',
    state: 'Uusimaa',
    zipCode: '01300',
    country: 'Finland',
    propertyType: 'Townhouse',
    listingType: 'Sale',
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 110,
    lotSize: 200,
    yearBuilt: 2016,
    parking: 2,
    garage: true,
    pool: false,
    garden: true,
    balcony: true,
    furnished: false,
    images: ['/images/properties/prop-7.jpg'],
    mainImage: '/images/properties/prop-7.jpg',
    published: true,
    featured: false,
    createdAt: new Date('2024-09-25'),
    updatedAt: new Date('2024-11-08'),
    publishedAt: new Date('2024-09-28'),
    realtorId: '102',
    blockchainHash: '0x9876543210fedcba9876543210fedcba9876543210fedcba9876543210fedcb',
    blockchainVerified: true,
    nftTokenId: 'PROP-NFT-007',
    smartContractAddress: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
  },
  {
    id: '8',
    title: 'Uudisrakennus Energiatehokkaalla Tekniikalla',
    description: 'Valmistuu 2025. Modernein ratkaisuin varustettu uudiskohde. Maalämpö, aurinkopaneelit ja A-energialuokka.',
    price: 475000,
    address: 'Uusikuja 15',
    city: 'Espoo',
    state: 'Uusimaa',
    zipCode: '02230',
    country: 'Finland',
    propertyType: 'House',
    listingType: 'Sale',
    bedrooms: 4,
    bathrooms: 2,
    squareFeet: 140,
    lotSize: 700,
    yearBuilt: 2025,
    parking: 2,
    garage: true,
    pool: false,
    garden: true,
    balcony: false,
    furnished: false,
    images: ['/images/properties/prop-8.jpg'],
    mainImage: '/images/properties/prop-8.jpg',
    published: true,
    featured: true,
    createdAt: new Date('2024-10-01'),
    updatedAt: new Date('2024-11-20'),
    publishedAt: new Date('2024-10-05'),
    realtorId: '101',
    blockchainHash: '0x3c9f2a8b7e6d5c4f3a2b1e9d8c7f6e5d4c3b2a1f9e8d7c6b5a4f3e2d1c0b9a8',
    blockchainVerified: true,
    nftTokenId: 'PROP-NFT-008',
    smartContractAddress: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
  },
  {
    id: 'espoo-kauklahti-omakotitalo',
    title: 'Tunnelmallinen puutalo Kauklahdessa',
    description: 'Viihtyisä puutalo omalla vehreällä tontilla. Iso terassi, pihasauna ja perheystävällinen sijainti.',
    price: 459000,
    address: 'Kauklahdentie 88',
    city: 'Espoo',
    state: 'Uusimaa',
    zipCode: '02780',
    country: 'Suomi',
    propertyType: 'omakotitalo',
    listingType: 'myynti',
    bedrooms: 5,
    bathrooms: 2.0,
    squareFeet: 140,
    lotSize: 920,
    yearBuilt: 1985,
    parking: 2,
    garage: true,
    pool: false,
    garden: true,
    balcony: false,
    furnished: false,
    images: ['https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f?q=80&w=1171&auto=format&fit=crop'],
    mainImage: 'https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f?q=80&w=1171&auto=format&fit=crop',
    published: true,
    featured: true,
    createdAt: new Date('2025-11-13T12:00:00'),
    updatedAt: new Date('2025-11-13T12:00:00'),
    publishedAt: new Date('2025-11-13T12:00:00'),
    realtorId: '102',
    blockchainHash: '0x3c9f2a8b7e6d5c4f35a823d8c7f6e5d4c3b2a1f9e8d7c6b5a4f3e2d1c0b9a8',
    blockchainVerified: true,
    nftTokenId: 'PROP-NFT-008',
    smartContractAddress: '0x742d35Cc6685CD925a3b844Bc454e4438f44e',
  },
  {
    id: 'espoo-tapiola-3h',
    title: 'Moderni perheasunto Tapiolassa',
    description: 'Valoisa ja hyväpohjainen kolmio puistomaisessa Tapiolassa. Lasitettu parveke ilta-aurinkoon, laadukkaat materiaalit ja lyhyt kävelymatka metroasemalle.',
    price: 425000,
    address: 'Itätuulentie 5 B 21',
    city: 'Espoo',
    state: 'Uusimaa',
    zipCode: '02100',
    country: 'Suomi',
    propertyType: 'kerrostalo',
    listingType: 'myynti',
    bedrooms: 3,
    bathrooms: 1.0,
    squareFeet: 76,
    lotSize: null,
    yearBuilt: 2016,
    parking: 1,
    garage: true,
    pool: false,
    garden: false,
    balcony: true,
    furnished: false,
    images: ['https://images.unsplash.com/photo-1723748972084-4124765e0a55?q=80&w=1171&auto=format&fit=crop'],
    mainImage: 'https://images.unsplash.com/photo-1723748972084-4124765e0a55?q=80&w=1171&auto=format&fit=crop',
    published: true,
    featured: true,
    createdAt: new Date('2025-11-13T12:00:00'),
    updatedAt: new Date('2025-11-13T12:00:00'),
    publishedAt: new Date('2025-11-13T12:00:00'),
    realtorId: '101',
       blockchainHash: '0x3c9f2a8b7e6d5c4f35ad8c7f66752a1f9e8d7c6b5a4f3e2d1c0b9a8',
    blockchainVerified: true,
    nftTokenId: 'PROP-NFT-008',
    smartContractAddress: '0x742d35Cc6685CDASD6a3b844Bc454e4438f44e',
  },
  {
    id: 'hanko-rantahuvila',
    title: 'Rantahuvila Hangon hiekkarannoilla',
    description: 'Valoisa rantahuvila pitkän hiekkarannan tuntumassa. Suuret ikkunat, korkea olohuone ja kesäkeittiö terassilla.',
    price: 1390000,
    address: 'Rantakaari 10',
    city: 'Hanko',
    state: 'Uusimaa',
    zipCode: '10900',
    country: 'Suomi',
    propertyType: 'huvila',
    listingType: 'myynti',
    bedrooms: 5,
    bathrooms: 3.0,
    squareFeet: 220,
    lotSize: 3800,
    yearBuilt: 2016,
    parking: 3,
    garage: true,
    pool: true,
    garden: true,
    balcony: true,
    furnished: false,
    images: ['https://images.unsplash.com/photo-1592694844266-5c03865c7bc5?q=80&w=687&auto=format&fit=crop'],
    mainImage: 'https://images.unsplash.com/photo-1592694844266-5c03865c7bc5?q=80&w=687&auto=format&fit=crop',
    published: true,
    featured: false,
    createdAt: new Date('2025-11-13T12:00:00'),
    updatedAt: new Date('2025-11-13T12:00:00'),
    publishedAt: new Date('2025-11-13T12:00:00'),
    realtorId: '103',
       blockchainHash: '0x3c9f8A37e6d5c4f35a823d8c7f6e5d4c3b2a1f9e8d7c6b5a4f3e2d1c0b9a8',
    blockchainVerified: true,
    nftTokenId: 'PROP-NFT-008',
    smartContractAddress: '0x742d35Cc665A52sd25a3b844Bc454e4438f44e',
  },
];

// Add realtor data to properties
mockProperties.forEach(property => {
  if (property.realtorId) {
    property.realtor = mockRealtors.find(r => r.id === property.realtorId);
  }
});

// Mock Favorites (for showcase, use a demo user ID)
export const mockFavorites: Favorite[] = [
  {
    id: 'fav1',
    userId: 'demo-user',
    propertyId: '1',
    createdAt: new Date('2024-11-10'),
  },
  {
    id: 'fav2',
    userId: 'demo-user',
    propertyId: '4',
    createdAt: new Date('2024-11-12'),
  },
];

// Mock Tour Availability
export const mockTourAvailability: TourAvailability[] = [
  {
    id: 'tour1',
    propertyId: '1',
    date: new Date('2024-12-01'),
    timeSlots: '["09:00", "10:00", "14:00", "16:00"]',
    isAvailable: true,
    createdAt: new Date('2024-11-20'),
  },
  {
    id: 'tour2',
    propertyId: '1',
    date: new Date('2024-12-02'),
    timeSlots: '["10:00", "11:00", "15:00"]',
    isAvailable: true,
    createdAt: new Date('2024-11-20'),
  },
  {
    id: 'tour3',
    propertyId: '2',
    date: new Date('2024-12-01'),
    timeSlots: '["09:00", "13:00", "15:00"]',
    isAvailable: true,
    createdAt: new Date('2024-11-20'),
  },
];

// Mock Tour Bookings
export const mockTourBookings: TourBooking[] = [
  {
    id: 'booking1',
    propertyId: '1',
    date: new Date('2024-11-28'),
    timeSlot: '10:00',
    visitorName: 'Jussi Mäkinen',
    visitorEmail: 'jussi.makinen@example.com',
    visitorPhone: '+358 40 111 2222',
    status: 'confirmed',
    notes: 'Kiinnostunut näkemään asunnon',
    createdAt: new Date('2024-11-22'),
  },
  {
    id: 'booking2',
    propertyId: '2',
    date: new Date('2024-11-29'),
    timeSlot: '14:00',
    visitorName: 'Anna Virtanen',
    visitorEmail: 'anna.virtanen@example.com',
    visitorPhone: '+358 50 333 4444',
    status: 'pending',
    notes: null,
    createdAt: new Date('2024-11-23'),
  },
];

// Mock Contact Messages
export const mockContactMessages: ContactMessage[] = [
  {
    id: 'msg1',
    propertyId: '1',
    propertyTitle: 'Moderni Keskustan Asunto Panoraamanäkymillä',
    realtorEmail: 'matti.virtanen@kotiketju.fi',
    senderName: 'Mikko Lahtinen',
    senderEmail: 'mikko.lahtinen@example.com',
    senderPhone: '+358 40 555 6666',
    message: 'Hei! Olen kiinnostunut tästä asunnosta. Voisinko tulla katsomaan sitä ensi viikolla?',
    isRead: false,
    isReplied: false,
    createdAt: new Date('2024-11-23'),
  },
  {
    id: 'msg2',
    propertyId: '4',
    propertyTitle: 'Luksushuoneisto Merinäköalalla',
    realtorEmail: 'liisa.korhonen@kotiketju.fi',
    senderName: 'Sanna Nieminen',
    senderEmail: 'sanna.nieminen@example.com',
    senderPhone: null,
    message: 'Kiinnostava kohde! Haluaisin lisätietoja rahoitusmahdollisuuksista.',
    isRead: true,
    isReplied: false,
    createdAt: new Date('2024-11-21'),
  },
];

// Mock Property Views
export const mockPropertyViews: PropertyView[] = [
  {
    id: 'view1',
    userId: 'demo-user',
    propertyId: '1',
    viewedAt: new Date('2024-11-23'),
  },
  {
    id: 'view2',
    userId: 'demo-user',
    propertyId: '3',
    viewedAt: new Date('2024-11-22'),
  },
  {
    id: 'view3',
    userId: 'demo-user',
    propertyId: '4',
    viewedAt: new Date('2024-11-20'),
  },
];

// Helper functions to simulate database operations
export const mockDb = {
  property: {
    findMany: (options?: any) => {
      let results = [...mockProperties];
      
      // Apply where filters
      if (options?.where) {
        const where = options.where;
        results = results.filter(prop => {
          if (where.published !== undefined && prop.published !== where.published) return false;
          if (where.featured !== undefined && prop.featured !== where.featured) return false;
          if (where.city && prop.city !== where.city) return false;
          if (where.propertyType && prop.propertyType !== where.propertyType) return false;
          if (where.listingType && prop.listingType !== where.listingType) return false;
          
          // Price range
          if (where.price?.gte && prop.price < where.price.gte) return false;
          if (where.price?.lte && prop.price > where.price.lte) return false;
          
          // Bedrooms range
          if (where.bedrooms?.gte && prop.bedrooms < where.bedrooms.gte) return false;
          if (where.bedrooms?.lte && prop.bedrooms > where.bedrooms.lte) return false;
          
          return true;
        });
      }
      
      // Apply orderBy
      if (options?.orderBy) {
        const orderBy = Array.isArray(options.orderBy) ? options.orderBy[0] : options.orderBy;
        const key = Object.keys(orderBy)[0] as keyof Property;
        const direction = orderBy[key];
        
        results.sort((a, b) => {
          const aVal = a[key];
          const bVal = b[key];
          // Handle null/undefined values
          if (aVal == null && bVal == null) return 0;
          if (aVal == null) return 1;
          if (bVal == null) return -1;
          if (aVal < bVal) return direction === 'asc' ? -1 : 1;
          if (aVal > bVal) return direction === 'asc' ? 1 : -1;
          return 0;
        });
      }
      
      // Apply take and skip
      if (options?.skip) results = results.slice(options.skip);
      if (options?.take) results = results.slice(0, options.take);
      
      // Apply select
      if (options?.select) {
        results = results.map(prop => {
          const selected: any = {};
          Object.keys(options.select).forEach(key => {
            if (options.select[key]) {
              selected[key] = prop[key as keyof Property];
            }
          });
          return selected;
        });
      }
      
      // Apply distinct
      if (options?.distinct) {
        const seen = new Set();
        results = results.filter(item => {
          const key = options.distinct.map((field: string) => (item as any)[field]).join('|');
          if (seen.has(key)) return false;
          seen.add(key);
          return true;
        });
      }
      
      // Apply include
      if (options?.include?.realtor) {
        results = results.map(prop => ({
          ...prop,
          realtor: mockRealtors.find(r => r.id === prop.realtorId)
        }));
      }
      
      return Promise.resolve(results);
    },
    
    findUnique: (options: any) => {
      const property = mockProperties.find(p => p.id === options.where.id);
      if (!property) return Promise.resolve(null);
      
      let result = { ...property };
      if (options?.include?.realtor && property.realtorId) {
        result.realtor = mockRealtors.find(r => r.id === property.realtorId);
      }
      
      return Promise.resolve(result);
    },
    
    count: (options?: any) => {
      let results = [...mockProperties];
      
      if (options?.where) {
        const where = options.where;
        results = results.filter(prop => {
          if (where.published !== undefined && prop.published !== where.published) return false;
          if (where.featured !== undefined && prop.featured !== where.featured) return false;
          return true;
        });
      }
      
      return Promise.resolve(results.length);
    },
    
    aggregate: (options: any) => {
      const results = mockProperties.filter(p => p.published);
      const prices = results.map(p => Number(p.price));
      
      return Promise.resolve({
        _avg: {
          price: prices.reduce((a, b) => a + b, 0) / prices.length
        }
      });
    },
    
    groupBy: (options: any) => {
      const grouped = new Map();
      
      mockProperties.forEach(prop => {
        if (options.where?.published !== undefined && prop.published !== options.where.published) return;
        
        const key = options.by.map((field: string) => prop[field as keyof Property]).join('|');
        if (!grouped.has(key)) {
          const groupObj: any = { _count: { _all: 0 } };
          options.by.forEach((field: string) => {
            groupObj[field] = prop[field as keyof Property];
          });
          grouped.set(key, groupObj);
        }
        grouped.get(key)._count._all++;
      });
      
      let results = Array.from(grouped.values());
      
      if (options.orderBy?._count?._all) {
        results.sort((a, b) => {
          return options.orderBy._count._all === 'desc' 
            ? b._count._all - a._count._all 
            : a._count._all - b._count._all;
        });
      }
      
      if (options.take) results = results.slice(0, options.take);
      
      return Promise.resolve(results);
    },
    
    create: (options: any) => {
      const newProperty = {
        id: `prop-${Date.now()}`,
        ...options.data,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      mockProperties.push(newProperty as Property);
      return Promise.resolve(newProperty);
    },
    
    update: (options: any) => {
      const index = mockProperties.findIndex(p => p.id === options.where.id);
      if (index === -1) throw new Error('Property not found');
      
      mockProperties[index] = {
        ...mockProperties[index],
        ...options.data,
        updatedAt: new Date(),
      };
      return Promise.resolve(mockProperties[index]);
    },
    
    delete: (options: any) => {
      const index = mockProperties.findIndex(p => p.id === options.where.id);
      if (index === -1) throw new Error('Property not found');
      
      const deleted = mockProperties[index];
      mockProperties.splice(index, 1);
      return Promise.resolve(deleted);
    },
  },
  
  realtor: {
    findMany: (options?: any) => Promise.resolve([...mockRealtors]),
  },
  
  favorite: {
    findMany: (options: any) => {
      let results = mockFavorites.filter(f => f.userId === options.where.userId);
      
      if (options?.include?.property) {
        return Promise.resolve(results.map(fav => ({
          ...fav,
          property: mockProperties.find(p => p.id === fav.propertyId)
        })));
      }
      
      return Promise.resolve(results);
    },
    
    count: (options: any) => {
      return Promise.resolve(
        mockFavorites.filter(f => f.userId === options.where.userId).length
      );
    },
    
    create: (options: any) => {
      const newFav = {
        id: `fav-${Date.now()}`,
        ...options.data,
        createdAt: new Date(),
      };
      mockFavorites.push(newFav);
      return Promise.resolve(newFav);
    },
    
    delete: (options: any) => {
      const index = mockFavorites.findIndex(
        f => f.userId === options.where.userId_propertyId.userId && 
             f.propertyId === options.where.userId_propertyId.propertyId
      );
      if (index === -1) throw new Error('Favorite not found');
      
      const deleted = mockFavorites[index];
      mockFavorites.splice(index, 1);
      return Promise.resolve(deleted);
    },
  },
  
  tourAvailability: {
    findMany: (options: any) => {
      return Promise.resolve(
        mockTourAvailability.filter(t => t.propertyId === options.where.propertyId)
      );
    },
    
    createMany: (options: any) => {
      options.data.forEach((item: any) => {
        mockTourAvailability.push({
          id: `tour-${Date.now()}-${Math.random()}`,
          ...item,
          createdAt: new Date(),
        });
      });
      return Promise.resolve({ count: options.data.length });
    },
    
    update: (options: any) => {
      const index = mockTourAvailability.findIndex(t => t.id === options.where.id);
      if (index === -1) throw new Error('Tour not found');
      
      mockTourAvailability[index] = {
        ...mockTourAvailability[index],
        ...options.data,
      };
      return Promise.resolve(mockTourAvailability[index]);
    },
    
    delete: (options: any) => {
      const index = mockTourAvailability.findIndex(t => t.id === options.where.id);
      if (index === -1) throw new Error('Tour not found');
      
      const deleted = mockTourAvailability[index];
      mockTourAvailability.splice(index, 1);
      return Promise.resolve(deleted);
    },
  },
  
  tourBooking: {
    findFirst: (options: any) => {
      return Promise.resolve(
        mockTourBookings.find(
          b => b.propertyId === options.where.propertyId && 
               b.date.getTime() === options.where.date.getTime() &&
               b.timeSlot === options.where.timeSlot
        ) || null
      );
    },
    
    create: (options: any) => {
      const newBooking = {
        id: `booking-${Date.now()}`,
        ...options.data,
        createdAt: new Date(),
      };
      mockTourBookings.push(newBooking);
      return Promise.resolve(newBooking);
    },
  },
  
  contactMessage: {
    findMany: (options?: any) => {
      let results = [...mockContactMessages];
      
      if (options?.where?.realtorEmail) {
        results = results.filter(m => m.realtorEmail === options.where.realtorEmail);
      }
      
      if (options?.orderBy) {
        const orderBy = Array.isArray(options.orderBy) ? options.orderBy[0] : options.orderBy;
        const key = Object.keys(orderBy)[0] as keyof ContactMessage;
        const direction = orderBy[key];
        
        results.sort((a, b) => {
          const aVal = a[key];
          const bVal = b[key];
          // Handle null/undefined values
          if (aVal == null && bVal == null) return 0;
          if (aVal == null) return 1;
          if (bVal == null) return -1;
          if (aVal < bVal) return direction === 'asc' ? -1 : 1;
          if (aVal > bVal) return direction === 'asc' ? 1 : -1;
          return 0;
        });
      }
      
      return Promise.resolve(results);
    },
    
    count: (options: any) => {
      return Promise.resolve(
        mockContactMessages.filter(m => m.isRead === options.where.isRead).length
      );
    },
    
    create: (options: any) => {
      const newMessage = {
        id: `msg-${Date.now()}`,
        ...options.data,
        isRead: false,
        isReplied: false,
        createdAt: new Date(),
      };
      mockContactMessages.push(newMessage);
      return Promise.resolve(newMessage);
    },
  },
  
  propertyView: {
    findMany: (options: any) => {
      let results = mockPropertyViews.filter(v => v.userId === options.where.userId);
      
      if (options?.include?.property) {
        return Promise.resolve(results.map(view => ({
          ...view,
          property: mockProperties.find(p => p.id === view.propertyId)
        })));
      }
      
      if (options?.orderBy) {
        results.sort((a, b) => {
          return options.orderBy.viewedAt === 'desc'
            ? b.viewedAt.getTime() - a.viewedAt.getTime()
            : a.viewedAt.getTime() - b.viewedAt.getTime();
        });
      }
      
      if (options?.take) results = results.slice(0, options.take);
      
      return Promise.resolve(results);
    },
    
    findFirst: (options: any) => {
      return Promise.resolve(
        mockPropertyViews.find(
          v => v.userId === options.where.userId && v.propertyId === options.where.propertyId
        ) || null
      );
    },
    
    create: (options: any) => {
      const newView = {
        id: `view-${Date.now()}`,
        ...options.data,
        viewedAt: new Date(),
      };
      mockPropertyViews.push(newView);
      return Promise.resolve(newView);
    },
  },
};

// Mock user for showcase (no real auth)
export const mockUser = {
  id: 'demo-user',
  email: 'demo@kotiketju.fi',
  name: 'Demo Käyttäjä',
  user_metadata: {
    name: 'Demo Käyttäjä',
  }
};
