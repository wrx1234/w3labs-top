'use client'

import dynamic from 'next/dynamic'
import { useLang } from '@/context/LangContext'
import { useDialog } from '@/context/DialogContext'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const Globe = dynamic(() => import('@/components/ui/cobe-globe').then(m => ({ default: m.Globe })), { ssr: false })

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }
const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

export default function HeroSection() {
  const { t } = useLang()
  const { openDialog } = useDialog()

  return (
    <section className="relative w-full overflow-hidden bg-background text-foreground">
      <motion.div
        className="container mx-auto flex min-h-[80vh] items-center justify-between px-6 py-20 lg:flex-row flex-col gap-12"
        initial="hidden" animate="visible" variants={containerVariants}
      >
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:w-1/2">
          <motion.div variants={itemVariants}>
            <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
              {t('中国最活跃的 AI 产业落地社区', "China's Most Active Community for Real-World AI")}
            </span>
          </motion.div>
          <motion.h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl" variants={itemVariants}>
            {t(
              <>链接人，链接 AI，<br/>链接<span className="text-primary">下一个</span>可能</>,
              <>Connecting People,<br/>Industries, and the<br/><span className="text-primary">Future</span> of AI</>
            )}
          </motion.h1>
          <motion.p className="mt-6 max-w-xl text-lg text-muted-foreground" variants={itemVariants}>
            {t('AI 不是技术圈的事，是你的事。', 'Connecting people, industries, and the future of AI.')}
          </motion.p>
          <motion.div variants={itemVariants} className="mt-8 flex gap-4">
            <Button size="lg" onClick={() => openDialog('community')}>{t('加入社区', 'Join Community')}<ArrowRight className="ml-2 h-5 w-5" /></Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#events">{t('了解我们做了什么 →', 'See What We\'ve Built →')}</a>
            </Button>
          </motion.div>
        </div>

        <div className="relative lg:w-1/2 w-full flex items-center justify-center">
          <Globe
            markers={[
              { id: 'sz', location: [22.5431, 114.0579], label: '深圳' },
              { id: 'cs', location: [28.2282, 112.9388], label: '长沙' },
              { id: 'hk', location: [22.3193, 114.1694], label: '香港' },
              { id: 'sg', location: [1.3521, 103.8198], label: 'Singapore' },
              { id: 'sf', location: [37.7749, -122.4194], label: 'San Francisco' },
            ]}
            arcs={[
              { id: 'sz-sg', from: [22.5431, 114.0579], to: [1.3521, 103.8198] },
              { id: 'sz-sf', from: [22.5431, 114.0579], to: [37.7749, -122.4194] },
            ]}
            markerColor={[0.13, 0.77, 0.37]}
            arcColor={[0.13, 0.77, 0.37]}
            className="max-w-lg"
          />
          {/* Floating cards */}
          <div className="absolute bottom-8 left-4 bg-background/90 backdrop-blur border border-border rounded-xl px-4 py-3 shadow-lg">
            <p className="text-2xl font-bold text-primary">20000+</p>
            <p className="text-xs text-muted-foreground">{t('活动累计参与者', 'Total Attendees')}</p>
          </div>
          <div className="absolute top-8 right-4 bg-background/90 backdrop-blur border border-border rounded-xl px-4 py-3 shadow-lg">
            <p className="text-sm font-bold">{t('深圳 · 上海 · 新加坡 · 加州', 'SZ · SH · SG · CA')}</p>
            <p className="text-xs text-muted-foreground">{t('全球巡回进行中', 'Global Tour Ongoing')}</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
