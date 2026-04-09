'use client'

import { useLang } from '@/context/LangContext'
import { MagicText } from '@/components/ui/magic-text'
import { Card } from '@/components/ui/card'
import { Target, Sparkles, Globe } from 'lucide-react'
import { motion } from 'framer-motion'

const cards = [
  { num: '01', icon: Target, zhTitle: '链接 Connect', enTitle: 'Connect', zh: '把传统行业从业者与 AI 技术团队、工具和知识真实地连接起来——不是名片交换，是真正的合作发生。', en: 'Bridging industry insiders with AI teams, tools, and knowledge. Not just exchanging cards — making real collaboration happen.' },
  { num: '02', icon: Sparkles, zhTitle: '落地 Deploy', enTitle: 'Deploy', zh: '不谈概念，只谈能在真实业务场景中跑起来的解决方案。每一个案例都来自真实项目。', en: 'No hype. Only solutions that run in real business environments. Every case study comes from a real project.' },
  { num: '03', icon: Globe, zhTitle: '平权 Democratize', enTitle: 'Democratize', zh: '让 AI 的高级能力不再是少数技术精英的专属，每一个懂行业的人都应该有机会用 AI 颠覆自己的领域。', en: 'Making advanced AI capabilities accessible to everyone — not just the tech elite.' },
]

export default function MissionSection() {
  const { t } = useLang()

  return (
    <section id="mission" className="py-24">
      <div className="container mx-auto px-6">
        <span className="text-xs font-medium text-primary uppercase tracking-wider">Why We Exist</span>

        {/* Prominent animated Chinese title */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mt-6 leading-snug max-w-4xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            {t(
              '每个行业颠覆性的 AI 产品，一定是由本行业的人提出并构造的。',
              'The most disruptive AI products in any industry will be built by the people already inside it.'
            )}
          </span>
        </motion.h2>

        {/* Muted English equivalent */}
        <motion.p
          className="mt-3 text-lg text-muted-foreground max-w-3xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {t(
            'The most disruptive AI products in any industry will be built by the people already inside it.',
            '每个行业颠覆性的 AI 产品，一定是由本行业的人提出并构造的。'
          )}
        </motion.p>

        <div className="mt-8 max-w-3xl">
          <MagicText text={t(
            '能真正用 AI 颠覆一个行业的，不是硅谷工程师，而是那个在餐饮行业摸爬滚打了十年的老板，那个每天跟物业纠纷打交道的从业者，那个在影视剧组里待过的导演。他们最懂行业的痛点，他们缺少的只是一样东西——跟 AI 连接的能力与通道。W³ Labs 做的就是这件事：链接。',
            'The people who will truly transform industries with AI aren\'t engineers in Silicon Valley. They\'re the restaurant owner with ten years in the game, the property manager drowning in daily disputes, the filmmaker who knows exactly what\'s broken. They understand their industries deeply. What they need is a bridge to AI. That\'s what W³ Labs builds.'
          )} />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <Card key={card.num} className="overflow-hidden p-6 group hover:-translate-y-1 transition-all duration-300">
                <Icon className="text-primary size-5" />
                <span className="text-5xl font-bold text-primary/40 group-hover:text-primary/60 transition-colors block mt-2">{card.num}</span>
                <h3 className="text-lg font-semibold mt-2">{t(card.zhTitle, card.enTitle)}</h3>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{t(card.zh, card.en)}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
