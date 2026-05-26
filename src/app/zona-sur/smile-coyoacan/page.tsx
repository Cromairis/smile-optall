import { Metadata } from 'next'
import { CTAButton } from '@/components/ui/CTAButton'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { LocalBusinessSchema, FAQPageSchema, BreadcrumbSchema } from '@/components/seo/JsonLd'
import { SITE_CONFIG, PRICING, BUSINESS_INFO, EQUIPMENT } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Cirugía SMILE cerca de Coyoacán | Dr. César Sánchez Galeana | Optall Vision',
  description: 'Cirugía SMILE cerca de Coyoacán, CDMX. Clínica en Periférico Sur, a 12 minutos del Centro de Coyoacán. Dr. César Sánchez Galeana, 28 años de experiencia.',
  keywords: 'smile coyoacan, cirugia ojos coyoacan, oftalmologos coyoacan, lasik coyoacan, cirugia refractiva coyoacan cdmx',
  alternates: {
    canonical: `${SITE_CONFIG.url}/zona-sur/smile-coyoacan`,
  },
}

const coyoacanFaqs = [
  {
    question: '¿Qué tan lejos está la clínica de Coyoacán Centro?',
    answer: `Estamos a aproximadamente 12-15 minutos en auto desde el Centro de Coyoacán, sobre Periférico Sur 3332 en Jardines del Pedregal. Es una de las clínicas de SMILE más cercanas a Coyoacán con tecnología de punta.`,
  },
  {
    question: '¿Cómo llego desde el Centro de Coyoacán?',
    answer: 'La ruta más rápida es tomar Av. Universidad hacia el sur y luego incorporarte a Periférico Sur. El edificio está del lado poniente de Periférico, cerca del cruce con Insurgentes Sur. En hora valle son 12 minutos, en hora pico puede ser 20-25 minutos.',
  },
  {
    question: '¿Hay transporte público cercano?',
    answer: 'La estación de metro más cercana es General Anaya (Línea 2) con conexión a taxi o Uber. También puedes tomar el Metrobús hasta Perisur y de ahí un taxi corto. Sin embargo, recomendamos llegar en auto particular o taxi el día de la cirugía.',
  },
  {
    question: '¿Atienden pacientes de toda la zona de Coyoacán?',
    answer: 'Sí, atendemos pacientes de todas las colonias de Coyoacán incluyendo El Carmen, La Concepción, Del Valle Sur, Prado Churubusco, CTM Culhuacán, Villa Coapa, y colonias aledañas. Nuestra ubicación en Periférico Sur nos hace accesibles desde toda la zona.',
  },
]

export default function SmileCoyoacanPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Inicio', url: SITE_CONFIG.url },
          { name: 'Zona Sur', url: `${SITE_CONFIG.url}/zona-sur` },
          { name: 'SMILE Coyoacán', url: `${SITE_CONFIG.url}/zona-sur/smile-coyoacan` },
        ]}
      />
      <LocalBusinessSchema neighborhood="coyoacan" areaName="Coyoacán" />
      <FAQPageSchema faqs={coyoacanFaqs} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-50 to-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-500 mb-8">
            <a href="/" className="hover:text-blue-600">Inicio</a>
            <span className="mx-2">/</span>
            <a href="/zona-sur" className="hover:text-blue-600">Zona Sur</a>
            <span className="mx-2">/</span>
            <span className="text-gray-900">SMILE Coyoacán</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                📍 A 12 min de Coyoacán Centro
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Cirugía <span className="text-blue-600">SMILE</span> cerca de Coyoacán
              </h1>
              <p className="mt-4 text-xl text-gray-600">
                La mejor opción en cirugía refractiva para residentes de Coyoacán y alrededores.
                Tecnología {EQUIPMENT.laser} de Zeiss y atención personalizada.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <CTAButton size="lg" text="💬 Agenda tu Cita" />
                <a
                  href={`https://maps.google.com/?q=${BUSINESS_INFO.geo.latitude},${BUSINESS_INFO.geo.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  🗺️ Cómo llegar
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
                <p className="text-sm text-gray-600 mb-2"><strong>Tiempos desde Coyoacán:</strong></p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Centro de Coyoacán: 12-15 min en auto</li>
                  <li>• Del Carmen: 15 min en auto</li>
                  <li>• Del Valle Sur: 10 min en auto</li>
                  <li>• Villa Coapa: 15 min en auto</li>
                  <li>• CTM Culhuacán: 18 min en auto</li>
                </ul>
              </div>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-4xl">🗺️</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Come to Us */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            ¿Por qué venir desde Coyoacán?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Aunque hay oftalmólogos más cerca, nuestra clínica ofrece algo que pocos tienen:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-semibold mb-2">Tecnología SMILE</h3>
              <p className="text-sm text-gray-600">
                Muy pocas clínicas en CDMX tienen el láser {EQUIPMENT.laser} para SMILE.
                La mayoría solo ofrece LASIK.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <div className="text-4xl mb-4">👨‍⚕️</div>
              <h3 className="font-semibold mb-2">+15,000 Cirugías</h3>
              <p className="text-sm text-gray-600">
                El Dr. Sánchez Galeana realiza 8-12 cirugías SMILE al mes
                con láser VisuMax de Zeiss.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-semibold mb-2">Alta Tasa de Éxito</h3>
              <p className="text-sm text-gray-600">
                Retoque sin costo adicional el primer año.
                98%+ de satisfacción.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="font-semibold mb-2">Precios Justos</h3>
              <p className="text-sm text-gray-600">
                Precio competitivo, sin costos ocultos.
                Diferentes formas de pago.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Colonias de Coyoacán que atendemos
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              'Centro de Coyoacán',
              'Del Carmen',
              'La Concepción',
              'Del Valle Sur',
              'Prado Churubusco',
              'CTM Culhuacán',
              'Villa Coapa',
              'El Reloj',
              'Santa Úrsula Coapa',
              'Ajusco',
              'Cafetales',
              'Huipulco',
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

      {/* Comparison */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            ¿Por qué SMILE y no LASIK?
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 mb-6">
              Si vives en Coyoacán, probablemente encontrarás varias clínicas que ofrecen LASIK.
              Sin embargo, SMILE ofrece ventajas importantes:
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <span><strong>Incisión 80% más pequeña:</strong> Solo 2-4mm vs 20mm de LASIK</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <span><strong>Menos ojo seco:</strong> Preserva más nervios corneales</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <span><strong>Córnea más fuerte:</strong> No se crea flap, mayor estabilidad</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <span><strong>Menos restricciones:</strong> Puedes nadar en 2 semanas (vs 4 con LASIK)</span>
              </li>
            </ul>
            <div className="mt-8 text-center">
              <a href="/smile-vs-lasik" className="text-blue-600 hover:underline font-medium">
                Ver comparativa completa SMILE vs LASIK →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para ver sin lentes?</h2>
          <div className="text-3xl font-bold mb-2">
            Consulta el precio en tu valoración
          </div>
          <p className="text-blue-100 mb-8">Diferentes formas de pago disponibles</p>
          <p className="mb-8 text-blue-100">
            Agenda tu valoración y descubre si eres candidato
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
            Preguntas de pacientes de Coyoacán
          </h2>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={coyoacanFaqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Listo para ver sin lentes?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Agenda tu valoración y descubre si eres candidato a SMILE.
            El viaje desde Coyoacán vale la pena.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton size="lg" />
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              📞 {BUSINESS_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
