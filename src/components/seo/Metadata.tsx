import { Metadata } from 'next'
import { SITE_CONFIG, BUSINESS_INFO, DOCTOR_INFO } from '@/lib/constants'

// ============================================
// SEO Metadata Generator
// ============================================

interface GenerateMetadataProps {
  title: string
  description: string
  path: string
  keywords?: string[]
  image?: string
  noIndex?: boolean
}

export function generateSEOMetadata({
  title,
  description,
  path,
  keywords = [],
  image = '/og-image.jpg',
  noIndex = false,
}: GenerateMetadataProps): Metadata {
  const url = `${SITE_CONFIG.url}${path}`
  const fullTitle = path === '/' ? title : `${title} | ${SITE_CONFIG.name}`
  
  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: DOCTOR_INFO.name }],
    creator: DOCTOR_INFO.name,
    publisher: BUSINESS_INFO.name,
    robots: noIndex ? 'noindex, nofollow' : 'index, follow',
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: `${SITE_CONFIG.url}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'es_MX',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [`${SITE_CONFIG.url}${image}`],
    },
    verification: {
      google: 'TU_CODIGO_VERIFICACION_GOOGLE', // TODO: Agregar código real
    },
    other: {
      'geo.region': 'MX-CMX',
      'geo.placename': 'Ciudad de México',
      'geo.position': `${BUSINESS_INFO.geo.latitude};${BUSINESS_INFO.geo.longitude}`,
      'ICBM': `${BUSINESS_INFO.geo.latitude}, ${BUSINESS_INFO.geo.longitude}`,
    },
  }
}

// Metadata preconfiguradas para páginas principales
export const homeMetadata = generateSEOMetadata({
  title: 'Cirugía SMILE en CDMX | Dr. César Sánchez Galeana | Optall Vision',
  description: 'Cirugía SMILE con el Dr. César Sánchez Galeana en CDMX. 28 años de experiencia, +15,000 cirugías. Tecnología VisuMax de Zeiss. Consulta de valoración $1,250.',
  path: '/',
  keywords: [
    'cirugia smile cdmx',
    'smile laser mexico',
    'correccion miopia cdmx',
    'dr cesar sanchez galeana',
    'optall vision',
    'cirugia refractiva cdmx',
  ],
})

export const precioMetadata = generateSEOMetadata({
  title: 'Precio Cirugía SMILE CDMX 2025 | $35,000-$55,000 por ojo',
  description: 'Precio cirugía SMILE en CDMX: $35,000 a $55,000 por ojo. Incluye valoración, cirugía con VisuMax de Zeiss y seguimiento. Hasta 12 MSI disponibles.',
  path: '/precio-smile-cdmx',
  keywords: [
    'precio smile mexico',
    'costo cirugia smile cdmx',
    'smile precio por ojo',
    'cirugia laser ojos precio',
    'financiamiento cirugia ojos',
  ],
})

export const smileVsLasikMetadata = generateSEOMetadata({
  title: 'SMILE vs LASIK: Diferencias, Ventajas y Cuál Elegir | Guía 2025',
  description: 'Comparativa completa SMILE vs LASIK: recuperación, seguridad, precisión y costos. Descubre cuál cirugía refractiva es mejor para ti según tu caso.',
  path: '/smile-vs-lasik',
  keywords: [
    'smile vs lasik',
    'diferencias smile lasik',
    'que es mejor smile o lasik',
    'cirugia refractiva comparativa',
    'lasik o smile',
  ],
})
