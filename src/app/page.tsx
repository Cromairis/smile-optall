import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CTAButton } from '@/components/ui/CTAButton'
import { StatCard, StatGrid } from '@/components/ui/StatCard'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { MedicalWebPageSchema, FAQPageSchema } from '@/components/seo/JsonLd'
import { DOCTOR_INFO, PRICING, EQUIPMENT, BUSINESS_INFO, SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Cirugía SMILE en CDMX | Dr. César Sánchez Galeana | Optall Vision',
  description: 'Cirugía SMILE con el Dr. César Sánchez Galeana en CDMX. 28 años de experiencia, +15,000 cirugías. Tecnología VisuMax de Zeiss. Agenda tu valoración.',
  keywords: 'cirugia smile cdmx, smile laser mexico, correccion miopia cdmx, dr cesar sanchez galeana, optall vision',
  alternates: {
    canonical: SITE_CONFIG.url,
  },
}

const homeFaqs = [
  {
    question: '¿Qué es la cirugía SMILE?',
    answer: 'SMILE (Small Incision Lenticule Extraction) es la técnica más avanzada de cirugía refractiva. Utiliza un láser femtosegundo para crear una pequeña lente dentro de la córnea que se extrae por una incisión de solo 2-4mm, corrigiendo miopía y astigmatismo sin crear un flap corneal.',
  },
  {
    question: '¿Cuánto cuesta la cirugía SMILE en CDMX?',
    answer: `Consulta el precio en tu valoración. Ofrecemos financiamiento hasta ${PRICING.smile.msi} meses sin intereses.`,
  },
  {
    question: '¿Cuánto dura la recuperación de SMILE?',
    answer: 'La recuperación de SMILE es más rápida que LASIK. La mayoría de pacientes ven bien al día siguiente y pueden regresar a actividades normales en 24-48 horas. La visión se estabiliza completamente en 1-3 semanas.',
  },
  {
    question: '¿Soy candidato para SMILE?',
    answer: 'Eres candidato si tienes entre 18 y 40 años, graduación estable por al menos 1 año, miopía de hasta -10.00 dioptrías y/o astigmatismo de hasta -5.00 dioptrías. La valoración confirma si tu córnea y ojos son aptos.',
  },
]

export default function HomePage() {
  return (
    <>
      <MedicalWebPageSchema
        title="Cirugía SMILE en CDMX"
        description="Cirugía SMILE con el Dr. César Sánchez Galeana en CDMX"
        url={SITE_CONFIG.url}
      />
      <FAQPageSchema faqs={homeFaqs} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Cirugía <span className="text-blue-600">SMILE</span> en CDMX
              </h1>
              <p className="mt-4 text-xl text-gray-600">
                Deja tus lentes con la técnica más avanzada de cirugía refractiva.
                {DOCTOR_INFO.experience} de experiencia y +{DOCTOR_INFO.surgeries} cirugías exitosas.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <CTAButton size="lg" />
                <CTAButton
                  variant="secondary"
                  size="lg"
                  text="Más Información →"
                  href="/precio-smile-cdmx"
                />
              </div>
              <div className="mt-6 flex items-center gap-4 text-sm text-gray-500">
                <span>✓ Sencilla</span>
                <span>✓ 15 minutos</span>
                <span>✓ Recuperación 24h</span>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden">
                <Image
                  src="/martha-debayle.jpg"
                  alt="Dr. César Sánchez Galeana en Martha Debayle"
                  width={800}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-blue-600">{EQUIPMENT.laser}</div>
                <div className="text-sm text-gray-600">Tecnología {EQUIPMENT.brand}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StatGrid>
            <StatCard value={DOCTOR_INFO.experience} label="de Experiencia" icon="🏥" />
            <StatCard value={DOCTOR_INFO.surgeries} label="Cirugías Realizadas" icon="✨" />
            <StatCard value="8-12" label="SMILE al Mes" icon="📅" />
            <StatCard value="24 hrs" label="Recuperación Visual" icon="👁️" />
          </StatGrid>
        </div>
      </section>

      {/* Why SMILE Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            ¿Por qué elegir <span className="text-blue-600">SMILE</span>?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Mínima Invasión</h3>
              <p className="text-gray-600">
                Incisión de solo 2-4mm vs 20mm de LASIK. Sin crear flap corneal.
                Menor riesgo de ojo seco post-operatorio.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Recuperación Rápida</h3>
              <p className="text-gray-600">
                Visión funcional al día siguiente. Puedes regresar al trabajo
                en 24-48 horas. Sin restricciones severas.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-2">Mayor Estabilidad</h3>
              <p className="text-gray-600">
                Córnea más resistente post-cirugía. Ideal para deportistas
                y estilos de vida activos. Resultados duraderos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {DOCTOR_INFO.name}
              </h2>
              <p className="text-lg text-blue-600 mb-4">{DOCTOR_INFO.title}</p>
              <p className="text-gray-600 mb-6">
                Con {DOCTOR_INFO.experience} de experiencia y más de {DOCTOR_INFO.surgeries} cirugías 
                realizadas, el Dr. Sánchez Galeana es uno de los cirujanos refractivos más 
                experimentados de México. Certificado por Zeiss para realizar cirugías SMILE 
                con tecnología {EQUIPMENT.laser}.
              </p>
              <ul className="space-y-2 text-gray-700">
                {DOCTOR_INFO.certifications.map((cert, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    {cert}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <CTAButton text="Agenda con el Dr. Sánchez" />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-square bg-gray-200 rounded-2xl overflow-hidden">
                <Image
                  src="/dr-cesar-sanchez.jpg"
                  alt="Dr. César Sánchez Galeana con Martha Debayle"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para ver sin lentes?</h2>
          <div className="text-3xl font-bold mb-2">
            Consulta el precio en tu valoración
          </div>
          <p className="text-blue-100 mb-8">Financiamiento disponible • {PRICING.smile.msiText}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/precio-smile-cdmx"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Más Información
            </Link>
            <CTAButton
              variant="secondary"
              size="lg"
              text="Agenda tu Valoración"
              className="!bg-transparent !border-white !text-white hover:!bg-white/10"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Preguntas Frecuentes
          </h2>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={homeFaqs} />
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Ubicación
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">{BUSINESS_INFO.name}</h3>
              <p className="text-gray-600 mb-4">
                📍 {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.floor}
                <br />
                {BUSINESS_INFO.address.neighborhood}, {BUSINESS_INFO.address.city}
              </p>
              <p className="text-gray-600 mb-4">
                📞 {BUSINESS_INFO.phoneDisplay}
                <br />
                📧 {BUSINESS_INFO.email}
              </p>
              <p className="text-gray-600 mb-6">
                <strong>Horarios:</strong>
                <br />
                {BUSINESS_INFO.hours.weekdays}
                <br />
                {BUSINESS_INFO.hours.saturday}
              </p>
              <CTAButton />
            </div>
            <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.5!2d-99.1873!3d19.3116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce00f9b5e0f3c1%3A0x2b6c4e3f1a2b3c4d!2sPerif%C3%A9rico%20Sur%203332%2C%20Jardines%20del%20Pedregal%2C%20CDMX!5e0!3m2!1ses!2smx!4v1680000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Optall Vision - Periférico Sur 3332"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
