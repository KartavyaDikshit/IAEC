export interface Country {
  name: string;
  path: string;
  image: string;
  flag: string;
  description: string;
  popularity: number;
}

export const studyAbroadCountries: Country[] = [
  {
    name: 'Australia',
    path: '/study-abroad/australia',
    image: '/images/countries_strip/Australia.png',
    flag: '🇦🇺',
    description: 'Study in Australia - World-class education Down Under',
    popularity: 95
  },
  {
    name: 'Canada',
    path: '/study-abroad/canada',
    image: '/images/countries_strip/Canada.png',
    flag: '🇨🇦',
    description: 'Study in Canada - Quality education in a multicultural society',
    popularity: 92
  },
  {
    name: 'Ireland',
    path: '/study-abroad/ireland',
    image: '/images/countries_strip/Ireland.png',
    flag: '🇮🇪',
    description: 'Study in Ireland - Gateway to Europe with English education',
    popularity: 78
  },
  {
    name: 'New Zealand',
    path: '/study-abroad/new-zealand',
    image: '/images/countries_strip/New Zealand.png',
    flag: '🇳🇿',
    description: 'Study in New Zealand - Adventure meets academic excellence',
    popularity: 82
  },
  {
    name: 'United Kingdom',
    path: '/study-abroad/uk',
    image: '/images/countries_strip/UK.png',
    flag: '🇬🇧',
    description: 'Study in UK - Home of world-renowned universities',
    popularity: 98
  },
  {
    name: 'United States',
    path: '/study-abroad/usa',
    image: '/images/countries_strip/USA.png',
    flag: '🇺🇸',
    description: 'Study in USA - Land of opportunities and innovation',
    popularity: 100
  },
  {
    name: 'Germany',
    path: '/study-abroad/europe/germany',
    image: '/images/countries_strip/Germany.png',
    flag: '🇩🇪',
    description: 'Study in Germany - Engineering excellence and research',
    popularity: 88
  },
  {
    name: 'France',
    path: '/study-abroad/europe/france',
    image: '/images/countries_strip/France.png',
    flag: '🇫🇷',
    description: 'Study in France - Art, culture, and academic prestige',
    popularity: 85
  },
  {
    name: 'Italy',
    path: '/study-abroad/europe/italy',
    image: '/images/countries_strip/Italy.png',
    flag: '🇮🇹',
    description: 'Study in Italy - Renaissance meets modern education',
    popularity: 79
  },
  {
    name: 'Spain',
    path: '/study-abroad/europe/spain',
    image: '/images/countries_strip/Spain.png',
    flag: '🇪🇸',
    description: 'Study in Spain - Vibrant culture and quality universities',
    popularity: 76
  },
  {
    name: 'Latvia',
    path: '/study-abroad/europe/latvia',
    image: '/images/countries_strip/Latvia.png',
    flag: '🇱🇻',
    description: 'Study in Latvia - Affordable European education',
    popularity: 65
  },
  {
    name: 'Malta',
    path: '/study-abroad/europe/malta',
    image: '/images/countries_strip/Malta.png',
    flag: '🇲🇹',
    description: 'Study in Malta - English education in Mediterranean paradise',
    popularity: 70
  }
];

export const certificationLogos = [
  {
    id: 1,
    name: 'ICEF Certified',
    image: '/images/certifications/cert1.jpg',
    alt: 'ICEF - International Consultants for Education and Fairs'
  },
  {
    id: 2,
    name: 'British Council',
    image: '/images/certifications/cert2.jpg',
    alt: 'British Council Certified Education Agent'
  },
  {
    id: 3,
    name: 'IDP Education',
    image: '/images/certifications/cert3.jpg',
    alt: 'IDP Education Certified Partner'
  },
  {
    id: 4,
    name: 'IELTS',
    image: '/images/certifications/cert4.jpg',
    alt: 'IELTS Official Test Center'
  },
  {
    id: 5,
    name: 'NAFSA',
    image: '/images/certifications/cert5.jpg',
    alt: 'NAFSA - Association of International Educators'
  },
  {
    id: 6,
    name: 'Nafsa',
    image: '/images/certifications/Nafsa.png',
    alt: 'Nafsa Certification'
  }
];