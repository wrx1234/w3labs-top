'use client'

import React from 'react'
import { useLang } from '@/context/LangContext'
import { motion } from 'framer-motion'

interface Testimonial { text: string; image: string; name: string; role: string }

const testimonials: Testimonial[] = [
  { text: '通过 W³ Labs 认识了一个 AI 开发团队，三个月内就把我们的工单系统全面升级了，效率提升非常明显。', image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=150&h=150', name: '张总', role: '物业公司运营总监' },
  { text: '参加了深圳的养龙虾活动，第一次真正理解了 AI Agent 是什么，现在我们公司已经在用了。', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150', name: '李梅', role: '影视制作公司创始人' },
  { text: 'W³ Labs 帮我们找的 AI 团队非常专业，他们真的懂我们的行业，不是来卖概念的。', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150', name: '王工', role: '食品产业园技术负责人' },
  { text: '长沙活动让我看到了 AI 在音视频行业的真实可能性，回来之后马上开始了第一个 AI 项目。', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150', name: '陈导', role: '超维影像创始人' },
  { text: 'As an AI developer, W³ Labs connected me with real industry clients who actually understand their pain points. That\'s rare.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150', name: 'Marcus L.', role: 'AI Engineer · OpenGuard' },
  { text: '通过这里认识的投资人最终投了我们，W³ Labs 是我见过少有的真正在做资源链接的社区。', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150', name: '赵创始人', role: 'AI 创业公司 CEO' },
  { text: 'W³ Labs 的撮合服务帮我节省了大量时间，不用自己去找开发团队，他们帮我筛选了很多坑。', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150&h=150', name: '刘总', role: '酒店集团数字化总监' },
  { text: 'The community is real — not just a WeChat group, but actual connections that led to actual projects.', image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&q=80&w=150&h=150', name: 'David K.', role: 'Startup Founder · Singapore' },
  { text: '参加社区活动之后，我意识到 AI 不是我想象中那么遥远的东西，很多工具已经可以直接用了。', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=150&h=150', name: '小新', role: '湖南大学在读学生' },
]

const partners = ['云上栏山', '马栏山音视频实验室', '湖南大学HFT', '果棠智能', 'OpenGuard', 'B.News', 'HOH', 'WAVE', 'Openbuild', '众视超媒', '麓山人文', 'AI极客松', '破圈计划', 'GNAI', 'CTI Park']

const memberTypes = [
  { zh: 'AI 技术开发者 & 团队', en: 'AI Developers & Teams' },
  { zh: '传统行业企业主', en: 'Industry Founders' },
  { zh: '投资人与行业顾问', en: 'Investors & Advisors' },
  { zh: '政府与产业园合作方', en: 'Government Partners' },
  { zh: '学生与新入门者', en: 'Students & Newcomers' },
]

function TestimonialColumn({ items, duration = 15, className = '' }: { items: Testimonial[]; duration?: number; className?: string }) {
  return (
    <div className={className}>
      <motion.ul
        animate={{ translateY: '-50%' }}
        transition={{ duration, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
        className="flex flex-col gap-6 pb-6 list-none m-0 p-0"
      >
        {[0, 1].map((_, idx) => (
          <React.Fragment key={idx}>
            {items.map((t, i) => (
              <motion.li
                key={`${idx}-${i}`}
                whileHover={{ scale: 1.03, y: -8, transition: { type: 'spring', stiffness: 400, damping: 17 } }}
                className="p-8 rounded-2xl border border-border shadow-sm max-w-xs w-full bg-card cursor-default select-none"
              >
                <p className="text-muted-foreground leading-relaxed text-sm">{t.text}</p>
                <div className="flex items-center gap-3 mt-4">
                  <img width={40} height={40} src={t.image} alt={t.name} className="h-10 w-10 rounded-full object-cover ring-2 ring-border" />
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.li>
            ))}
          </React.Fragment>
        ))}
      </motion.ul>
    </div>
  )
}

export default function PartnersSection() {
  const { lang, t } = useLang()
  const col1 = testimonials.slice(0, 3)
  const col2 = testimonials.slice(3, 6)
  const col3 = testimonials.slice(6, 9)

  return (
    <section id="partners" className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <span className="text-xs font-medium text-primary uppercase tracking-wider">Partners & Community</span>
        <h2 className="text-3xl font-bold mt-4">{t('合作伙伴 & 社区成员', 'Partners & Community')}</h2>

        <div className="flex flex-wrap gap-2 mt-6">
          {memberTypes.map((m, i) => (
            <span key={i} className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground">{lang === 'zh' ? m.zh : m.en}</span>
          ))}
        </div>

        {/* Scrolling testimonials */}
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialColumn items={col1} duration={15} />
          <TestimonialColumn items={col2} className="hidden md:block" duration={19} />
          <TestimonialColumn items={col3} className="hidden lg:block" duration={17} />
        </div>

        {/* Logo wall */}
        <div className="mt-16">
          <h3 className="text-lg font-semibold mb-6">{t('合作伙伴', 'Partners')}</h3>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
            {partners.map((p, i) => (
              <div key={i} className="flex items-center justify-center h-14 rounded-xl border border-border bg-card text-sm font-medium text-muted-foreground hover:text-foreground hover:scale-110 hover:shadow-md hover:border-primary/50 hover:-translate-y-1 transition-all duration-300">
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
