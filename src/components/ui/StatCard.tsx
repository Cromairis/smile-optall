interface StatCardProps {
  value: string
  label: string
  icon?: string
}

export function StatCard({ value, label, icon }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
      {icon && <span className="text-3xl mb-2 block">{icon}</span>}
      <div className="text-3xl font-bold text-blue-600">{value}</div>
      <div className="text-gray-600 mt-1">{label}</div>
    </div>
  )
}

export function StatGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {children}
    </div>
  )
}
