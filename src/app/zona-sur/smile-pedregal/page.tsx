import { Metadata } from 'next'
import { CTAButton } from '@/components/ui/CTAButton'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { LocalBusinessSchema, FAQPageSchema, BreadcrumbSchema } from '@/components/seo/JsonLd'
import { SITE_CONFIG, DOCTOR_INFO, PRICING, BUSINESS_INFO, EQUIPMENT } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Cirugía SMILE en Pedregal | Dr. César Sánchez Galeana | Optall Vision',
  description: 'Cirugía SMILE cerca del Pedregal, CDMX. Clínica en Periférico Sur, a 5 minutos de Jardines del Pedregal. Dr. César Sánchez Galeana, 28 años de experiencia.',
  keywords: 'smile pedregal, cirugia ojos pedregal, oftalmologos pedregal, lasik pedregal, cirugia refractiva zona sur cdmx',
  alternates: {
    canonical: `${SITE_CONFIG.url}/zona-sur/smile-pedregal`,
  },
}

const pedregaFaqs = [
  {
    question: '¿Dónde está ubicada la clínica respecto al Pedregal?',
    answer: `Estamos en Periférico Sur 3332, Piso 11, en Jardines del Pedregal. A solo 5 minutos de Pedregal de San Ángel y 10 minutos de Pedregal de Santa Úrsula. Contamos con estacionamiento y fácil acceso desde Insurgentes Sur.`,
  },
  {
    question: '¿Hay estacionamiento disponible?',
    answer: 'Sí, el edificio cuenta con estacionamiento para visitantes. Las primeras 2 horas son cortesía cuando vienes a consulta.',
  },
  {
    question: '¿Qué tan cerca están de la estación de metro?',
    answer: 'La estación más cercana es Villa Olímpica (Línea 12) a 15 minutos caminando. Sin embargo, recomendamos llegar en auto o taxi/Uber para mayor comodidad, especialmente el día de la cirugía.',
  },
  {
    question: '¿Puedo regresar manejando después de la cirugía?',
    answer: 'No recomendamos manejar el mismo día de la cirugía. Aunque muchos pacientes ven bien a las pocas horas, es mejor que alguien te acompañe. Al día siguiente de tu revisión post-operatoria, puedes retomar el manejo si tu visión está estable.',
  },
]

export default function SmilePedregalPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Inicio', url: SITE_CONFIG.url },
          { name: 'Zona Sur', url: `${SITE_CONFIG.url}/zona-sur` },
          { name: 'SMILE Pedregal', url: `${SITE_CONFIG.url}/zona-sur/smile-pedregal` },
        ]}
      />
      <LocalBusinessSchema neighborhood="pedregal" areaName="Pedregal" />
      <FAQPageSchema faqs={pedregaFaqs} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-50 to-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-500 mb-8">
            <a href="/" className="hover:text-blue-600">Inicio</a>
            <span className="mx-2">/</span>
            <a href="/zona-sur" className="hover:text-blue-600">Zona Sur</a>
            <span className="mx-2">/</span>
            <span className="text-gray-900">SMILE Pedregal</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                📍 A 5 min del Pedregal
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Cirugía <span className="text-blue-600">SMILE</span> cerca del Pedregal
              </h1>
              <p className="mt-4 text-xl text-gray-600">
                La clínica de cirugía refractiva más cercana a Pedregal de San Ángel.
                Tecnología {EQUIPMENT.laser} de Zeiss y {DOCTOR_INFO.experience} de experiencia.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <CTAButton size="lg" text="💬 Agenda tu Cita" />
                <a
                  href={`https://maps.google.com/?q=${BUSINESS_INFO.geo.latitude},${BUSINESS_INFO.geo.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  🗺️ Ver en Google Maps
                </a>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-6">
              <h3 className="font-semibold text-gray-900 mb-4">📍 Ubicación</h3>
              <p className="text-gray-700 mb-4">
                <strong>{BUSINESS_INFO.name}</strong><br />
                {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.floor}<br />
                {BUSINESS_INFO.address.neighborhood}<br />
                {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.postalCode}
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-600 mb-2"><strong>Distancias aproximadas:</strong></p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Pedregal de San Ángel: 5 min en auto</li>
                  <li>• Jardines del Pedregal: 3 min en auto</li>
                  <li>• Pedregal de Santa Úrsula: 10 min en auto</li>
                  <li>• Coyoacán Centro: 12 min en auto</li>
                </ul>
              </div>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-4xl">🗺️</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            ¿Por qué elegirnos en la Zona Sur?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-semibold mb-2">Ubicación Premium</h3>
              <p className="text-gray-600">
                Edificio corporativo en Periférico Sur con estacionamiento, 
                fácil acceso y todas las comodidades.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">👨‍⚕️</div>
              <h3 className="text-xl font-semibold mb-2">{DOCTOR_INFO.name}</h3>
              <p className="text-gray-600">
                {DOCTOR_INFO.experience} de experiencia y más de {DOCTOR_INFO.surgeries} 
                cirugías. Certificado por Zeiss para SMILE.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Tecnología de Punta</h3>
              <p className="text-gray-600">
                Láser {EQUIPMENT.laser} de {EQUIPMENT.brand}, el mismo equipo 
                usado en las mejores clínicas del mundo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods Served */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Colonias cercanas que atendemos
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              'Pedregal de San Ángel',
              'Jardines del Pedregal',
              'Pedregal de Santa Úrsula',
              'San Jerónimo',
              'Tizapán',
              'Villa Olímpica',
              'Pedregal de Carrasco',
              'Héroes de Padierna',
            ].map((colonia) => (
              <div
                key={colonia}
                className="bg-white p-4 rounded-lg text-center text-gray-700 shadow-sm"
              >
                {colonia}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Precio SMILE en nuestra clínica</h2>
          <div className="text-5xl font-bold mb-2">
            ${PRICING.smile.min.toLocaleString()} - ${PRICING.smile.max.toLocaleString()} MXN
          </div>
          <p className="text-blue-100 mb-8">por ojo • {PRICING.smile.msiText}</p>
          <p className="mb-8 text-blue-100">
            Valoración: <span className="line-through">${PRICING.consultation.regular.toLocaleString()}</span>{' '}
            <span className="text-white font-bold">${PRICING.consultation.promo.toLocaleString()} MXN</span>
          </p>
          <CTAButton
            size="lg"
            className="!bg-white !text-blue-600 hover:!bg-blue-50"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Preguntas sobre nuestra ubicación
          </h2>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={pedregaFaqs} />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contáctanos
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>📍 Dirección:</strong><br />
                  {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.floor}<br />
                  {BUSINESS_INFO.address.neighborhood}, {BUSINESS_INFO.address.city}
                </p>
                <p>
                  <strong>📞 Teléfono:</strong><br />
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="text-blue-600 hover:underline">
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                </p>
                <p>
                  <strong>⏰ Horarios:</strong><br />
                  {BUSINESS_INFO.hours.weekdays}<br />
                  {BUSINESS_INFO.hours.saturday}
                </p>
              </div>
              <div className="mt-8">
                <CTAButton text="💬 WhatsApp" />
              </div>
            </div>
            <div className="aspect-square bg-gray-200 rounded-xl flex items-center justify-center">
              <span className="text-6xl">🗺️</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
