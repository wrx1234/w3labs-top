'use client'
import dynamic from 'next/dynamic'
import { useLang } from '@/context/LangContext'

const Globe = dynamic(() => import('./Globe'), { ssr: false })

export default function HeroSection() {
  const { t } = useLang()

  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div className="space-y-6">
            <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-[#22C55E]/10 text-[#22C55E] border border-[#22C55E]/20">
              {t('中国最活跃的 AI 产业落地社区', 'China\'s Most Active AI Industry Community')}
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              {t(
                <>链接人，链接 AI，<br/>链接<span className="text-[#22C55E]">下一个</span>可能</>,
                <>Connecting People,<br/>Industries, and the<br/><span className="text-[#22C55E]">Future</span> of AI</>
              )}
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg">
              {t(
                'AI 不是技术圈的事，是你的事。',
                'AI isn\'t just for tech — it\'s for you.'
              )}
            </p>
            <p className="text-sm text-muted-foreground/70">
              Connecting people, industries, and the future of AI.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="#cta"
                className="px-6 py-3 rounded-full bg-[#22C55E] text-white font-medium hover:opacity-90 transition-opacity"
              >
                {t('加入社区', 'Join Community')}
              </a>
              <a
                href="#events"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                {t('了解我们做了什么', 'See what we\'ve done')} <span className="group-hover:translate-x-1 inline-block transition-transform">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Right - Globe + floating cards */}
          <div className="relative flex items-center justify-center">
            <Globe />

            {/* Floating card - bottom left */}
            <div className="absolute bottom-8 left-0 bg-background/90 backdrop-blur border border-border rounded-xl px-4 py-3 shadow-lg">
              <p className="text-2xl font-bold text-[#22C55E]">2000+</p>
              <p className="text-xs text-muted-foreground">{t('深圳站参与者', 'Shenzhen Attendees')}</p>
            </div>

            {/* Floating card - top right */}
            <div className="absolute top-8 right-0 bg-background/90 backdrop-blur border border-border rounded-xl px-4 py-3 shadow-lg">
              <p className="text-sm font-bold">{t('深圳 · 长沙 · 香港', 'SZ · CS · HK')}</p>
              <p className="text-xs text-muted-foreground">{t('全国巡回进行中', 'National Tour Ongoing')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
