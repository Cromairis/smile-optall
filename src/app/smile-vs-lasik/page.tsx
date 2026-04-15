import { Metadata } from 'next'
import Link from 'next/link'
import { CTAButton } from '@/components/ui/CTAButton'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { MedicalWebPageSchema, FAQPageSchema, BreadcrumbSchema } from '@/components/seo/JsonLd'
import { SITE_CONFIG, DOCTOR_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'SMILE vs LASIK: Diferencias, Ventajas y Cuál Elegir | Guía 2025',
  description: 'Comparativa completa SMILE vs LASIK: recuperación, seguridad, precisión y costos. Descubre cuál cirugía refractiva es mejor para ti según tu caso.',
  keywords: 'smile vs lasik, diferencias smile lasik, que es mejor smile o lasik, cirugia refractiva comparativa, lasik o smile',
  alternates: {
    canonical: `${SITE_CONFIG.url}/smile-vs-lasik`,
  },
}

const comparisonFaqs = [
  {
    question: '¿Cuál duele más, SMILE o LASIK?',
    answer: 'Ninguna duele durante el procedimiento gracias a la anestesia tópica. Post-operatoriamente, SMILE suele causar menos molestias porque la incisión es mucho más pequeña (2-4mm vs 20mm). La mayoría de pacientes SMILE solo sienten una ligera sensación arenosa por unas horas.',
  },
  {
    question: '¿Cuál tiene recuperación más rápida?',
    answer: 'SMILE tiene recuperación visual ligeramente más rápida en los primeros días. Sin embargo, ambas técnicas permiten ver bien al día siguiente. La diferencia principal es que SMILE tiene menos restricciones (puedes nadar a las 2 semanas vs 4 semanas con LASIK).',
  },
  {
    question: '¿Por qué SMILE es más caro que LASIK?',
    answer: 'SMILE usa tecnología más reciente (láser femtosegundo de última generación VisuMax de Zeiss), requiere certificación especial del cirujano, y ofrece ventajas como menor ojo seco y mayor estabilidad corneal. La inversión adicional se justifica con los beneficios.',
  },
  {
    question: '¿Puedo hacerme LASIK si no soy candidato a SMILE?',
    answer: 'A veces sí. SMILE requiere córneas con cierto grosor y graduaciones dentro de rangos específicos. Si tu córnea es delgada o tienes hipermetropía, LASIK o PRK podrían ser mejores opciones. La valoración determina qué técnica es ideal para ti.',
  },
  {
    question: '¿SMILE corrige hipermetropía?',
    answer: 'Actualmente SMILE está aprobado principalmente para miopía y astigmatismo. Para hipermetropía, LASIK sigue siendo la opción preferida. Estamos a la espera de aprobaciones para SMILE Pro que ampliarán las indicaciones.',
  },
  {
    question: '¿Qué pasa si necesito un retoque?',
    answer: 'Los retoques son raros en ambas técnicas (menos del 1-2% de casos). En LASIK se puede levantar el mismo flap. En SMILE se puede hacer PRK de superficie o un nuevo SMILE. Ambos están cubiertos en nuestra garantía del primer año.',
  },
]

export default function SmileVsLasikPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Inicio', url: SITE_CONFIG.url },
          { name: 'SMILE vs LASIK', url: `${SITE_CONFIG.url}/smile-vs-lasik` },
        ]}
      />
      <MedicalWebPageSchema
        title="SMILE vs LASIK: Guía Comparativa Completa"
        description="Comparativa detallada entre cirugía SMILE y LASIK"
        url={`${SITE_CONFIG.url}/smile-vs-lasik`}
      />
      <FAQPageSchema faqs={comparisonFaqs} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-500 mb-8">
            <a href="/" className="hover:text-blue-600">Inicio</a>
            <span className="mx-2">/</span>
            <span className="text-gray-900">SMILE vs LASIK</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              <span className="text-blue-600">SMILE</span> vs <span className="text-purple-600">LASIK</span>
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Guía comparativa completa para elegir la mejor cirugía refractiva según tu caso.
              Diferencias reales, no marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Comparison */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Comparativa Rápida
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* SMILE Card */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-blue-600">SMILE</h3>
                <p className="text-gray-600">Small Incision Lenticule Extraction</p>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Incisión:</strong> 2-4mm (mínima invasión)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Flap:</strong> No se crea flap corneal</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Ojo seco:</strong> Menor incidencia post-op</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Estabilidad:</strong> Córnea más resistente</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Deportes:</strong> Menos restricciones</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">•</span>
                  <span><strong>Corrige:</strong> Miopía y astigmatismo</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">•</span>
                  <span><strong>Precio:</strong> Consultar</span>
                </li>
              </ul>
            </div>

            {/* LASIK Card */}
            <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-purple-600">LASIK</h3>
                <p className="text-gray-600">Laser-Assisted In Situ Keratomileusis</p>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">•</span>
                  <span><strong>Incisión:</strong> ~20mm (flap corneal)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">•</span>
                  <span><strong>Flap:</strong> Se crea y reposiciona</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">•</span>
                  <span><strong>Ojo seco:</strong> Mayor incidencia temporal</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">•</span>
                  <span><strong>Estabilidad:</strong> Flap puede desplazarse</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">•</span>
                  <span><strong>Deportes:</strong> Restricciones por flap</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Corrige:</strong> Miopía, hipermetropía y astigmatismo</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Precio:</strong> Consultar</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Tabla Comparativa Detallada
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-4 px-6 text-left font-semibold">Característica</th>
                  <th className="py-4 px-6 text-center font-semibold text-blue-600">SMILE</th>
                  <th className="py-4 px-6 text-center font-semibold text-purple-600">LASIK</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-4 px-6">Tamaño de incisión</td>
                  <td className="py-4 px-6 text-center bg-green-50 text-green-700">2-4mm ✓</td>
                  <td className="py-4 px-6 text-center">~20mm</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">Nervios corneales afectados</td>
                  <td className="py-4 px-6 text-center bg-green-50 text-green-700">~10% ✓</td>
                  <td className="py-4 px-6 text-center">~70%</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">Riesgo de ojo seco</td>
                  <td className="py-4 px-6 text-center bg-green-50 text-green-700">Bajo ✓</td>
                  <td className="py-4 px-6 text-center">Moderado</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">Estabilidad biomecánica</td>
                  <td className="py-4 px-6 text-center bg-green-50 text-green-700">Mayor ✓</td>
                  <td className="py-4 px-6 text-center">Menor</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">Riesgo de complicaciones por flap</td>
                  <td className="py-4 px-6 text-center bg-green-50 text-green-700">Ninguno ✓</td>
                  <td className="py-4 px-6 text-center">Posible</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">Recuperación actividades</td>
                  <td className="py-4 px-6 text-center bg-green-50 text-green-700">1-2 días ✓</td>
                  <td className="py-4 px-6 text-center">1-2 días</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">Nadar/deportes acuáticos</td>
                  <td className="py-4 px-6 text-center bg-green-50 text-green-700">2 semanas ✓</td>
                  <td className="py-4 px-6 text-center">4 semanas</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">Deportes de contacto</td>
                  <td className="py-4 px-6 text-center bg-green-50 text-green-700">2-4 semanas ✓</td>
                  <td className="py-4 px-6 text-center">1-3 meses</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">Corrige hipermetropía</td>
                  <td className="py-4 px-6 text-center">No</td>
                  <td className="py-4 px-6 text-center bg-green-50 text-green-700">Sí ✓</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">Costo</td>
                  <td className="py-4 px-6 text-center">Consultar</td>
                  <td className="py-4 px-6 text-center bg-green-50 text-green-700">Consultar</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">Años en el mercado</td>
                  <td className="py-4 px-6 text-center">~12 años</td>
                  <td className="py-4 px-6 text-center bg-green-50 text-green-700">~30 años ✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Who Should Choose What */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            ¿Cuál es mejor para ti?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-blue-600 mb-4">
                SMILE es ideal si:
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">→</span>
                  Tienes miopía y/o astigmatismo
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">→</span>
                  Practicas deportes de contacto o acuáticos
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">→</span>
                  Tienes tendencia al ojo seco
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">→</span>
                  Quieres la tecnología más reciente
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">→</span>
                  Buscas la menor invasión posible
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">→</span>
                  No te preocupa el costo adicional
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-purple-600 mb-4">
                LASIK es ideal si:
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">→</span>
                  Tienes hipermetropía (SMILE no la corrige)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">→</span>
                  El presupuesto es una prioridad
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">→</span>
                  No practicas deportes de impacto
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">→</span>
                  Prefieres una técnica con más años de historial
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">→</span>
                  Tu oftalmólogo lo recomienda para tu caso
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-xl p-6 max-w-3xl mx-auto">
            <p className="text-center text-gray-700">
              <strong>⚠️ Importante:</strong> La mejor técnica depende de tu caso específico. 
              Solo una valoración completa puede determinar cuál es ideal para ti.
            </p>
          </div>
        </div>
      </section>

      {/* Doctor's Experience */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center">
                <span className="text-3xl">👨‍⚕️</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{DOCTOR_INFO.name}</h3>
                <p className="text-blue-600 mb-4">{DOCTOR_INFO.title}</p>
                <p className="text-gray-700">
                  Con más de 15,000 cirugías realizadas y {DOCTOR_INFO.experience} de experiencia, 
                  el Dr. Sánchez Galeana domina ambas técnicas y realiza 8-12 procedimientos SMILE 
                  al mes con láser VisuMax de Zeiss. Su enfoque es individualizado: evalúa cada 
                  caso para recomendar SMILE o LASIK según las características específicas del 
                  paciente, priorizando siempre el mejor resultado visual a largo plazo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Preguntas Frecuentes
          </h2>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={comparisonFaqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿SMILE o LASIK? Descúbrelo con una valoración
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            La única forma de saber cuál es mejor para ti es con una evaluación completa.
            Agenda tu cita de valoración.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton
              size="lg"
              className="!bg-white !text-blue-600 hover:!bg-blue-50"
            />
            <Link
              href="/precio-smile-cdmx"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Más Información →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
