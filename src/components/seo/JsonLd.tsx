import { BUSINESS_INFO, DOCTOR_INFO, SITE_CONFIG } from '@/lib/constants'

// ============================================
// Schema.org JSON-LD Components for Medical SEO
// ============================================

interface JsonLdProps {
  children: object
}

export function JsonLd({ children }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(children) }}
    />
  )
}

// MedicalBusiness Schema - Para la clínica
export function MedicalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': `${SITE_CONFIG.url}/#organization`,
    name: BUSINESS_INFO.name,
    legalName: BUSINESS_INFO.legalName,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    image: `${SITE_CONFIG.url}/og-image.jpg`,
    description: SITE_CONFIG.description,
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${BUSINESS_INFO.address.street}, ${BUSINESS_INFO.address.floor}`,
      addressLocality: BUSINESS_INFO.address.neighborhood,
      addressRegion: BUSINESS_INFO.address.state,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: BUSINESS_INFO.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_INFO.geo.latitude,
      longitude: BUSINESS_INFO.geo.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:30',
        closes: '16:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00',
      },
    ],
    priceRange: '$$$',
    currenciesAccepted: 'MXN',
    paymentAccepted: 'Efectivo, Tarjeta de Crédito, Tarjeta de Débito, Transferencia',
    medicalSpecialty: {
      '@type': 'MedicalSpecialty',
      name: 'Ophthalmology',
    },
    availableService: {
      '@type': 'MedicalProcedure',
      name: 'Cirugía SMILE',
      procedureType: 'SurgicalProcedure',
      bodyLocation: 'Eyes',
      howPerformed: 'Incisión mínima con láser femtosegundo VisuMax de Zeiss',
    },
    areaServed: {
      '@type': 'City',
      name: 'Ciudad de México',
    },
    sameAs: [
      'https://www.facebook.com/optallvision',
      'https://www.instagram.com/optallvision',
    ],
  }

  return <JsonLd>{schema}</JsonLd>
}

// Physician Schema - Para el Dr. César
export function PhysicianSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    '@id': `${SITE_CONFIG.url}/#physician`,
    name: DOCTOR_INFO.name,
    givenName: 'César Alejandro',
    familyName: 'Sánchez Galeana',
    jobTitle: DOCTOR_INFO.title,
    description: `${DOCTOR_INFO.title} con ${DOCTOR_INFO.experience} de experiencia y más de ${DOCTOR_INFO.surgeries} cirugías realizadas. Especialista en SMILE y cirugía refractiva.`,
    image: `${SITE_CONFIG.url}/dr-cesar-sanchez.jpg`,
    url: SITE_CONFIG.url,
    telephone: BUSINESS_INFO.phone,
    medicalSpecialty: [
      {
        '@type': 'MedicalSpecialty',
        name: 'Ophthalmology',
      },
      {
        '@type': 'MedicalSpecialty',
        name: 'Refractive Surgery',
      },
    ],
    worksFor: {
      '@type': 'MedicalBusiness',
      '@id': `${SITE_CONFIG.url}/#organization`,
      name: BUSINESS_INFO.name,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${BUSINESS_INFO.address.street}, ${BUSINESS_INFO.address.floor}`,
      addressLocality: BUSINESS_INFO.address.neighborhood,
      addressRegion: BUSINESS_INFO.address.state,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: BUSINESS_INFO.address.country,
    },
    hasCredential: DOCTOR_INFO.certifications.map((cert) => ({
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Medical Certification',
      name: cert,
    })),
  }

  return <JsonLd>{schema}</JsonLd>
}

// MedicalWebPage Schema - Para páginas de contenido médico
interface MedicalWebPageSchemaProps {
  title: string
  description: string
  url: string
  datePublished?: string
  dateModified?: string
}

export function MedicalWebPageSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
}: MedicalWebPageSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: title,
    description: description,
    url: url,
    inLanguage: 'es-MX',
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${SITE_CONFIG.url}/#website`,
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    about: {
      '@type': 'MedicalProcedure',
      name: 'Cirugía SMILE',
      procedureType: 'SurgicalProcedure',
    },
    author: {
      '@type': 'Physician',
      '@id': `${SITE_CONFIG.url}/#physician`,
      name: DOCTOR_INFO.name,
    },
    publisher: {
      '@type': 'MedicalBusiness',
      '@id': `${SITE_CONFIG.url}/#organization`,
      name: BUSINESS_INFO.name,
    },
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
  }

  return <JsonLd>{schema}</JsonLd>
}

// FAQPage Schema - Para páginas de preguntas frecuentes
interface FAQ {
  question: string
  answer: string
}

interface FAQPageSchemaProps {
  faqs: FAQ[]
}

export function FAQPageSchema({ faqs }: FAQPageSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return <JsonLd>{schema}</JsonLd>
}

// Service Schema con precios - Para páginas de precios
interface ServiceSchemaProps {
  serviceName: string
  description: string
  priceMin: number
  priceMax: number
  url: string
}

export function ServiceSchema({
  serviceName,
  description,
  priceMin,
  priceMax,
  url,
}: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: description,
    url: url,
    provider: {
      '@type': 'MedicalBusiness',
      '@id': `${SITE_CONFIG.url}/#organization`,
      name: BUSINESS_INFO.name,
    },
    areaServed: {
      '@type': 'City',
      name: 'Ciudad de México',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'MXN',
      lowPrice: priceMin,
      highPrice: priceMax,
      offerCount: 1,
      availability: 'https://schema.org/InStock',
    },
  }

  return <JsonLd>{schema}</JsonLd>
}

// LocalBusiness Schema para páginas geolocalizadas
interface LocalBusinessSchemaProps {
  neighborhood: string
  areaName: string
}

export function LocalBusinessSchema({ neighborhood, areaName }: LocalBusinessSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: `${BUSINESS_INFO.name} - SMILE ${areaName}`,
    description: `Cirugía SMILE cerca de ${areaName}, CDMX. Dr. César Sánchez Galeana, ${DOCTOR_INFO.experience} de experiencia. A minutos de ${neighborhood}.`,
    url: `${SITE_CONFIG.url}/zona-sur/smile-${neighborhood}`,
    telephone: BUSINESS_INFO.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${BUSINESS_INFO.address.street}, ${BUSINESS_INFO.address.floor}`,
      addressLocality: BUSINESS_INFO.address.neighborhood,
      addressRegion: BUSINESS_INFO.address.state,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: BUSINESS_INFO.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_INFO.geo.latitude,
      longitude: BUSINESS_INFO.geo.longitude,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Ciudad de México',
      },
      {
        '@type': 'Place',
        name: areaName,
      },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:30',
        closes: '16:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00',
      },
    ],
  }

  return <JsonLd>{schema}</JsonLd>
}

// BreadcrumbList Schema
interface Breadcrumb {
  name: string
  url: string
}

interface BreadcrumbSchemaProps {
  items: Breadcrumb[]
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return <JsonLd>{schema}</JsonLd>
}
