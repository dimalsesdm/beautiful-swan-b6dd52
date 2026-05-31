import { createFileRoute } from '@tanstack/react-router'
import { WeatherDashboard } from '~/components/weather/WeatherDashboard'

export const Route = createFileRoute('/weather')({
  component: WeatherPage,
  head: () => ({
    meta: [
      { title: 'Weather Dashboard — Alex Rivera' },
      {
        name: 'description',
        content:
          'Real-time weather dashboard with forecasts powered by Open-Meteo API',
      },
    ],
  }),
})

function WeatherPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-3">
            Weather Dashboard
          </h1>
          <p className="text-lg text-muted-foreground">
            Real-time weather data and 7-day forecasts for any location worldwide
          </p>
        </div>

        <WeatherDashboard />
      </div>
    </div>
  )
}
