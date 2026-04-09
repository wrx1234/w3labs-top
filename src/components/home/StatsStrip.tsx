'use client'
import { useEffect, useRef, useState } from 'react'
import { useLang } from '@/context/LangContext'

const stats = [
  { value: '5万+', enValue: '50K+', zh: '活动参与者', en: 'Attendees' },
  { value: '10+', enValue: '10+', zh: '覆盖城市', en: 'Cities' },
  { value: '10+', enValue: '10+', zh: '覆盖行业', en: 'Industries' },
  { value: '2年+', enValue: '2Y+', zh: '深耕 AI 社区', en: 'Years Building' },
  { value: '300+', enValue: '300+', zh: 'AI 技术团队', en: 'AI Teams' },
  { value: '5+', enValue: '5+', zh: '城市主办活动', en: 'Events Hosted' },
]

function AnimatedNumber({ text, inView }: { text: string; inView: boolean }) {
  const numMatch = text.match(/^(\d+)(.*)$/)
  const [count, setCount] = useState(0)
  const target = numMatch ? parseInt(numMatch[1]) : 0
  const suffix = numMatch ? numMatch[2] : text

  useEffect(() => {
    if (!inView || !numMatch) return
    let start = 0
    const duration = 1500
    const startTime = performance.now()

    const animate = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      start = Math.floor(eased * target)
      setCount(start)
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [inView, target, numMatch])

  if (!numMatch) return <span>{text}</span>
  return <span>{inView ? count : 0}{suffix}</span>
}

export default function StatsStrip() {
  const { lang, t } = useLang()
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <p className="text-3xl font-bold">
                {i === 0 && <span className="text-[#22C55E]"><AnimatedNumber text={lang === 'zh' ? s.value : s.enValue} inView={inView} /></span>}
                {i !== 0 && <AnimatedNumber text={lang === 'zh' ? s.value : s.enValue} inView={inView} />}
              </p>
              <p className="text-sm opacity-70 mt-1">{t(s.zh, s.en)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
