interface Props {
  title: string
  value: number
  icon: string
  color: string
}

export default function StatsCard({ title, value, icon, color }: Props) {
  const colorClasses = {
    blue: 'text-blue-600',
    green: 'text-green-600', 
    purple: 'text-purple-600'
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center">
        <div className="text-2xl mr-3">{icon}</div>
        <div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className={`text-3xl font-bold ${colorClasses[color as keyof typeof colorClasses]}`}>
            {value}
          </p>
        </div>
      </div>
    </div>
  )
}