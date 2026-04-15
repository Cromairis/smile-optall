import { Metadata } from 'next'
import { CTAButton } from '@/components/ui/CTAButton'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { MedicalWebPageSchema, FAQPageSchema, ServiceSchema, BreadcrumbSchema } from '@/components/seo/JsonLd'
import { PRICING, DOCTOR_INFO, EQUIPMENT, SITE_CONFIG, BUSINESS_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Precio Cirugía SMILE CDMX 2025 | Consulta y Financiamiento',
  description: 'Cirugía SMILE en CDMX con tecnología VisuMax de Zeiss. Consulta el precio en tu valoración. Financiamiento hasta 12 MSI disponible.',
  keywords: 'precio smile mexico, costo cirugia smile cdmx, cirugia laser ojos precio, financiamiento cirugia ojos',
  alternates: {
    canonical: `${SITE_CONFIG.url}/precio-smile-cdmx`,
  },
}

const pricingFaqs = [
  {
    question: '¿Qué incluye el precio de la cirugía SMILE?',
    answer: 'El precio incluye: consulta de valoración completa, estudios pre-quirúrgicos (topografía, paquimetría, aberrometría), la cirugía SMILE con láser VisuMax de Zeiss, medicamentos post-operatorios, y todas las citas de seguimiento durante 3 meses.',
  },
  {
    question: '¿Aceptan meses sin intereses?',
    answer: `Sí, ofrecemos hasta ${PRICING.smile.msi} meses sin intereses con tarjetas participantes. También aceptamos efectivo, transferencia y tarjeta de débito. Consulta las opciones disponibles al momento de tu cita.`,
  },
  {
    question: '¿Hay costos adicionales después de la cirugía?',
    answer: 'No. El precio cubre todo el proceso incluyendo seguimiento por 3 meses. Si requieres un retoque (muy raro, menos del 1% de casos), está cubierto sin costo adicional dentro del primer año.',
  },
  {
    question: '¿Cómo puedo agendar mi valoración?',
    answer: 'Puedes agendar tu valoración por WhatsApp o llamando directamente. En la consulta te damos todos los detalles sobre el precio y las opciones de financiamiento.',
  },
]

export default function PrecioSmilePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Inicio', url: SITE_CONFIG.url },
          { name: 'Precio SMILE CDMX', url: `${SITE_CONFIG.url}/precio-smile-cdmx` },
        ]}
      />
      <MedicalWebPageSchema
        title="Precio Cirugía SMILE CDMX 2025"
        description="Precio de cirugía SMILE en CDMX actualizado a 2025"
        url={`${SITE_CONFIG.url}/precio-smile-cdmx`}
      />
      <ServiceSchema
        serviceName="Cirugía SMILE"
        description="Cirugía refractiva SMILE para corrección de miopía y astigmatismo con láser VisuMax de Zeiss"
        priceMin={PRICING.smile.price}
        priceMax={PRICING.smile.price}
        url={`${SITE_CONFIG.url}/precio-smile-cdmx`}
      />
      <FAQPageSchema faqs={pricingFaqs} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-500 mb-8">
            <a href="/" className="hover:text-blue-600">Inicio</a>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Precio SMILE CDMX</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Precio Cirugía <span className="text-blue-600">SMILE</span> en CDMX 2025
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Inversión transparente con {PRICING.smile.msiText}. Sin costos ocultos.
              Incluye valoración, cirugía y seguimiento completo.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-8 shadow-xl">
              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-2">Cirugía SMILE</h2>
                <p className="text-blue-100 mb-6">Tecnología {EQUIPMENT.laser} de {EQUIPMENT.brand}</p>
                
                <div className="text-4xl font-bold mb-2">
                  Consulta el precio en tu valoración
                </div>
                <div className="text-xl text-blue-100 mb-6">
                  Financiamiento disponible
                </div>

                <div className="bg-white/10 rounded-lg p-4 mb-6">
                  <p className="font-semibold">{PRICING.smile.msiText}</p>
                  <p className="text-sm text-blue-100">con tarjetas participantes</p>
                </div>

                <CTAButton
                  size="lg"
                  className="!bg-white !text-blue-600 hover:!bg-blue-50 w-full"
                  text="Agenda tu Valoración"
                />
              </div>
            </div>

            {/* CTA Valoración */}
            <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-6 text-center">
              <p className="text-lg font-semibold text-gray-800 mb-2">¿Eres candidato a SMILE?</p>
              <p className="text-sm text-gray-500">
                Agenda tu valoración y te damos todos los detalles
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            ¿Qué incluye el precio?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: '🔬', title: 'Estudios Pre-quirúrgicos', desc: 'Topografía, paquimetría, aberrometría y más' },
              { icon: '⚡', title: 'Cirugía SMILE', desc: `Con láser ${EQUIPMENT.laser} de ${EQUIPMENT.brand}` },
              { icon: '💊', title: 'Medicamentos', desc: 'Gotas y medicinas post-operatorias' },
              { icon: '📋', title: 'Seguimiento 3 Meses', desc: 'Todas las citas de control incluidas' },
              { icon: '🛡️', title: 'Garantía de Retoque', desc: 'Primer año sin costo adicional' },
              { icon: '👨‍⚕️', title: 'Atención Personalizada', desc: `Por el ${DOCTOR_INFO.name}` },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm flex items-start gap-4">
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Comparison */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Comparativa de Precios en CDMX
          </h2>
          <div className="max-w-3xl mx-auto overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="py-4 px-4">Procedimiento</th>
                  <th className="py-4 px-4">Características</th>
                  <th className="py-4 px-4">Recuperación</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b bg-blue-50">
                  <td className="py-4 px-4 font-semibold text-blue-600">SMILE</td>
                  <td className="py-4 px-4">Incisión mínima 2-4mm, sin flap</td>
                  <td className="py-4 px-4">24-48 horas</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">LASIK</td>
                  <td className="py-4 px-4">Flap corneal 20mm</td>
                  <td className="py-4 px-4">24-48 horas</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">PRK/LASEK</td>
                  <td className="py-4 px-4">Sin flap, remoción de epitelio</td>
                  <td className="py-4 px-4">5-7 días</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">Lentes ICL</td>
                  <td className="py-4 px-4">Implante intraocular, reversible</td>
                  <td className="py-4 px-4">24-48 horas</td>
                </tr>
              </tbody>
            </table>
            <p className="text-sm text-gray-500 mt-4">
              Consulta cuál procedimiento es mejor para ti en tu valoración.
            </p>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Formas de Pago
          </h2>
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {[
              { icon: '💳', label: 'Tarjeta de Crédito', sub: 'Hasta 12 MSI' },
              { icon: '💰', label: 'Efectivo', sub: 'Pago en clínica' },
              { icon: '🏦', label: 'Transferencia', sub: 'SPEI/Depósito' },
              { icon: '💳', label: 'Tarjeta de Débito', sub: 'Un solo pago' },
            ].map((method, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm w-40">
                <span className="text-3xl block mb-2">{method.icon}</span>
                <p className="font-semibold text-gray-900">{method.label}</p>
                <p className="text-sm text-gray-500">{method.sub}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600">
            Consulta tarjetas participantes y promociones vigentes al momento de tu cita.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Preguntas sobre Precios
          </h2>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={pricingFaqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para ver sin lentes?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Agenda tu valoración y conoce el precio exacto para tu caso.
          </p>
          <CTAButton
            size="lg"
            className="!bg-white !text-blue-600 hover:!bg-blue-50"
          />
          <p className="mt-4 text-blue-200 text-sm">
            📞 {BUSINESS_INFO.phoneDisplay} • {BUSINESS_INFO.hours.weekdays}
          </p>
        </div>
      </section>
    </>
  )
}
