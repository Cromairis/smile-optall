import Link from 'next/link'
import { BUSINESS_INFO, DOCTOR_INFO } from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Columna 1: Sobre */}
          <div>
            <h3 className="text-lg font-semibold mb-4">SMILE Optall Vision</h3>
            <p className="text-gray-400 text-sm">
              Cirugía SMILE con tecnología VisuMax de Zeiss. {DOCTOR_INFO.experience} de experiencia
              y más de {DOCTOR_INFO.surgeries} cirugías exitosas.
            </p>
          </div>

          {/* Columna 2: Enlaces */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/precio-smile-cdmx" className="hover:text-white transition-colors">
                  Precio SMILE CDMX
                </Link>
              </li>
              <li>
                <Link href="/smile-vs-lasik" className="hover:text-white transition-colors">
                  SMILE vs LASIK
                </Link>
              </li>
              <li>
                <Link href="/zona-sur/smile-pedregal" className="hover:text-white transition-colors">
                  SMILE Pedregal
                </Link>
              </li>
              <li>
                <Link href="/zona-sur/smile-coyoacan" className="hover:text-white transition-colors">
                  SMILE Coyoacán
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>📍 {BUSINESS_INFO.address.street}</li>
              <li>{BUSINESS_INFO.address.floor}, {BUSINESS_INFO.address.neighborhood}</li>
              <li>📞 {BUSINESS_INFO.phoneDisplay}</li>
              <li>📧 {BUSINESS_INFO.email}</li>
            </ul>
          </div>

          {/* Columna 4: Horarios */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Horarios</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>{BUSINESS_INFO.hours.weekdays}</li>
              <li>{BUSINESS_INFO.hours.saturday}</li>
              <li>{BUSINESS_INFO.hours.sunday}</li>
            </ul>
            <a
              href={BUSINESS_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              💬 Agendar Cita
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {currentYear} {BUSINESS_INFO.name}. Todos los derechos reservados.</p>
          <p className="mt-2">
            {DOCTOR_INFO.name} - Cédula Profesional: XXXXXXX
          </p>
        </div>
      </div>
    </footer>
  )
}
