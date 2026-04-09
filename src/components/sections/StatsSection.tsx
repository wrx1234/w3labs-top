'use client'

import { useLang } from '@/context/LangContext'
import { Card, CardContent } from '@/components/ui/card'

const smallCards = [
  { num: '20000+', zh: '累计活动报名', en: 'Registrations' },
  { num: '10+', zh: '落地AI改造案例', en: 'AI Cases' },
  { num: '5000+', zh: '培训覆盖人次', en: 'Training' },
  { num: '300+', zh: '合作技术团队', en: 'AI Teams' },
]

function MiniChart() {
  return (
    <svg viewBox="0 0 200 80" className="w-full h-24 text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 70 Q20 65 40 55 T80 40 T120 30 T160 18 T200 5"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M0 70 Q20 65 40 55 T80 40 T120 30 T160 18 T200 5 V80 H0 Z"
        fill="url(#chartGrad)"
      />
    </svg>
  )
}

export default function StatsSection() {
  const { t } = useLang()

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          {/* Left large card */}
          <Card className="lg:col-span-1 bg-muted p-6 overflow-hidden flex flex-col min-h-[340px] justify-between">
            <CardContent className="p-0 flex flex-col gap-4">
              <MiniChart />
              <div>
                <p className="text-6xl font-bold text-primary tracking-tight">20000+</p>
                <p className="text-lg text-muted-foreground mt-2">{t('累计活动参与', 'Total Event Participation')}</p>
              </div>
            </CardContent>
          </Card>

          {/* Right 4 small cards */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-3">
            {smallCards.map((card, i) => (
              <Card key={i} className="bg-muted p-6 flex flex-col justify-between hover:shadow-lg transition-shadow">
                <CardContent className="p-0 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <p className="text-4xl font-bold tracking-tight">{card.num}</p>
                    <span className="text-green-500 text-2xl font-bold">↑</span>
                  </div>
                  <p className="text-sm font-medium">{t(card.zh, card.en)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
