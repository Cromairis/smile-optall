import { BUSINESS_INFO, PRICING } from '@/lib/constants'

interface CTAButtonProps {
  variant?: 'primary' | 'secondary' | 'whatsapp'
  size?: 'sm' | 'md' | 'lg'
  text?: string
  showPrice?: boolean
  className?: string
}

export function CTAButton({
  variant = 'whatsapp',
  size = 'md',
  text,
  showPrice = false,
  className = '',
}: CTAButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-300',
    whatsapp: 'bg-green-500 hover:bg-green-600 text-white',
  }

  const defaultText = variant === 'whatsapp' 
    ? '💬 Agenda tu Valoración' 
    : 'Conoce más'

  return (
    <a
      href={variant === 'whatsapp' ? BUSINESS_INFO.whatsapp : '#'}
      target={variant === 'whatsapp' ? '_blank' : undefined}
      rel={variant === 'whatsapp' ? 'noopener noreferrer' : undefined}
      className={`
        inline-flex items-center justify-center gap-2
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        rounded-lg font-semibold transition-all duration-200
        shadow-sm hover:shadow-md
        ${className}
      `}
    >
      <span>{text || defaultText}</span>
      {showPrice && (
        <span className="text-sm opacity-90">
          (${PRICING.consultation.promo.toLocaleString()} MXN)
        </span>
      )}
    </a>
  )
}

// Componente de CTA flotante para móvil
export function FloatingCTA() {
  return (
    <div className="fixed bottom-4 left-4 right-4 md:hidden z-40">
      <a
        href={BUSINESS_INFO.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-semibold shadow-lg transition-all"
      >
        <span className="text-xl">💬</span>
        <span>Agenda tu Cita - ${PRICING.consultation.promo.toLocaleString()} MXN</span>
      </a>
    </div>
  )
}
