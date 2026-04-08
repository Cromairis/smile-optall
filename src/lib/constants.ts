// ============================================
// SMILE Optall Vision - Site Constants
// ============================================

export const SITE_CONFIG = {
  name: 'SMILE Optall Vision',
  domain: 'smile.optallvision.com',
  url: 'https://smile.optallvision.com',
  description: 'Cirugía SMILE en CDMX con el Dr. César Sánchez Galeana. 28 años de experiencia, +15,000 cirugías. Tecnología VisuMax de Zeiss.',
  locale: 'es-MX',
}

export const BUSINESS_INFO = {
  name: 'Optall Vision',
  legalName: 'Optall Vision S.A. de C.V.',
  address: {
    street: 'Periférico Sur 3332',
    floor: 'Piso 11',
    neighborhood: 'Jardines del Pedregal',
    city: 'Ciudad de México',
    state: 'CDMX',
    postalCode: '01900',
    country: 'MX',
  },
  geo: {
    latitude: 19.3116,
    longitude: -99.1873,
  },
  phone: '+5215549168798',
  phoneDisplay: '55 4916 8798',
  whatsapp: 'https://wa.me/5215549168798',
  email: 'contacto@optallvision.com',
  hours: {
    weekdays: 'Mar-Vie 10:30-16:30',
    saturday: 'Sáb 9:00-14:00',
    sunday: 'Cerrado',
  },
  openingHours: [
    'Tu 10:30-16:30',
    'We 10:30-16:30',
    'Th 10:30-16:30',
    'Fr 10:30-16:30',
    'Sa 09:00-14:00',
  ],
}

export const DOCTOR_INFO = {
  name: 'Dr. César Sánchez Galeana',
  fullName: 'César Alejandro Sánchez Galeana',
  title: 'Oftalmólogo y Cirujano Refractivo',
  credentials: 'Médico Cirujano, Especialista en Oftalmología',
  experience: '28 años',
  surgeries: '+15,000',
  smileSurgeries: '+1,500',
  monthlySmile: '8-12',
  certifications: [
    'Certificado por el Consejo Mexicano de Oftalmología',
    'Certificado en SMILE por Zeiss',
    'Miembro de la Sociedad Mexicana de Oftalmología',
  ],
}

export const PRICING = {
  smile: {
    min: 35000,
    max: 55000,
    currency: 'MXN',
    perEye: true,
    msi: 12,
    msiText: 'hasta 12 MSI',
  },
  consultation: {
    regular: 2500,
    promo: 1250,
    discount: '50%',
  },
}

export const EQUIPMENT = {
  laser: 'VisuMax',
  brand: 'Carl Zeiss Meditec',
  technology: 'Femtosegundo',
}

export const ZONES = {
  sur: {
    name: 'Zona Sur CDMX',
    neighborhoods: [
      { slug: 'pedregal', name: 'Pedregal', status: 'ranking' },
      { slug: 'coyoacan', name: 'Coyoacán', status: 'priority' },
      { slug: 'tlalpan', name: 'Tlalpan', status: 'pending' },
      { slug: 'san-angel', name: 'San Ángel', status: 'pending' },
      { slug: 'insurgentes-sur', name: 'Insurgentes Sur', status: 'pending' },
    ],
  },
  poniente: {
    name: 'Zona Poniente CDMX',
    neighborhoods: [
      { slug: 'santa-fe', name: 'Santa Fe', status: 'pending' },
      { slug: 'interlomas', name: 'Interlomas', status: 'pending' },
      { slug: 'lomas', name: 'Lomas de Chapultepec', status: 'pending' },
    ],
  },
}

export const SEO_KEYWORDS = {
  primary: [
    'cirugia smile cdmx',
    'smile laser cdmx',
    'smile cirugia ojos mexico',
    'precio smile mexico',
    'smile vs lasik',
  ],
  secondary: [
    'correccion miopia sin lentes',
    'cirugia refractiva cdmx',
    'operacion ojos laser',
    'oftalmologos cdmx',
    'cirugia laser ojos precio',
  ],
  geo: [
    'smile pedregal',
    'smile coyoacan',
    'smile zona sur cdmx',
    'oftalmologos pedregal',
    'cirugia ojos sur cdmx',
  ],
}
