'use client'

import React from 'react'
import { useLang } from '@/context/LangContext'
import { motion } from 'framer-motion'

interface Testimonial { text: string; badge: string; name: string; role: string; image?: string }

const testimonials: Testimonial[] = [
  { text: '通过 W³ Labs 认识了一个 AI 开发团队，三个月内就把我们的工单系统全面升级了，效率提升非常明显。', badge: '物', name: '张总', role: '物业公司运营总监', image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=150&h=150' },
  { text: '参加了深圳的活动后，第一次真正理解了 AI Agent 是什么，现在我们已经把它接进了日常业务。', badge: '影', name: '李梅', role: '影视制作公司创始人', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150' },
  { text: 'W³ Labs 帮我们对接的团队很懂行业，不是来卖概念，而是真的能把事情做成。', badge: '园', name: '王工', role: '食品产业园技术负责人', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150' },
  { text: '长沙活动让我看到了 AI 在音视频行业的真实可能性，回来之后马上启动了第一个项目。', badge: '媒', name: '陈导', role: '超维影像创始人', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150' },
  { text: 'W³ Labs connected us with clients who already understood their own workflows, which made delivery much faster.', badge: 'AI', name: 'Terry Chen', role: 'AI Engineer · Delivery Partner', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150' },
  { text: '通过这里认识的投资人与产业伙伴，最终让我们的项目真正往前推进了一大步。', badge: '创', name: '赵创始人', role: 'AI 创业公司 CEO', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150' },
  { text: 'W³ Labs 的撮合服务帮我节省了大量时间，他们把前期筛选和沟通都做得很扎实。', badge: '酒', name: '刘总', role: '酒店集团数字化总监', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150&h=150' },
  { text: 'The community feels practical. It is not just chat noise, but introductions that can actually become projects.', badge: 'SG', name: 'David Khoo', role: 'Startup Founder · Singapore', image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&q=80&w=150&h=150' },
  { text: '参加社区活动之后，我意识到 AI 不是遥远概念，很多工具已经可以直接落到真实工作里。', badge: '学', name: '小新', role: '湖南大学在读学生', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=150&h=150' },
]

const partners = [
  { name: '云上栏山', domain: 'https://www.yunshanglanshan.com' },
  { name: '马栏山音视频实验室', domain: 'https://www.mlspark.com' },
  { name: '湖南大学 HFT', domain: 'https://www.hnu.edu.cn' },
  { name: '果棠智能', domain: 'https://www.guotang.ai' },
  { name: 'OpenGuard', domain: 'https://www.openguard.ai' },
  { name: 'B.News', domain: 'https://bnews.co' },
  { name: 'OpenBuild', domain: 'https://openbuild.xyz' },
  { name: '众视超媒', domain: 'https://www.zhongshi.tv' },
  { name: '麓山人文', domain: 'https://www.lushanrenwen.com' },
  { name: 'AI 极客松', domain: 'https://aigeeksong.com' },
  { name: '破圈计划', domain: 'https://poq.cn' },
  { name: 'GNAI', domain: 'https://gnai.com' },
  { name: 'CTI Park', domain: 'https://ctipark.com' },
  { name: 'WAVE', domain: 'https://wavecn.io' },
  { name: 'HOH', domain: 'https://hohcity.com' },
]

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
                className="w-full max-w-xs cursor-default select-none rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-8"
              >
                <p className="text-muted-foreground leading-relaxed text-sm">{t.text}</p>
                <div className="flex items-center gap-3 mt-4">
                  {t.image ? (
                    <img width={40} height={40} src={t.image} alt={t.name} className="h-10 w-10 rounded-full object-cover ring-2 ring-border" />
                  ) : (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary ring-2 ring-border">
                      {t.badge}
                    </div>
                  )}
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
    <section id="partners" className="overflow-hidden py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <span className="text-xs font-medium text-primary uppercase tracking-wider">Partners & Community</span>
        <h2 className="mt-4 text-2xl font-bold sm:text-3xl">{t('合作伙伴 & 社区成员', 'Partners & Community')}</h2>

        <div className="flex flex-wrap gap-2 mt-6">
          {memberTypes.map((m, i) => (
            <span key={i} className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground">{lang === 'zh' ? m.zh : m.en}</span>
          ))}
        </div>

        {/* Scrolling testimonials */}
        <div className="mt-10 flex justify-center gap-4 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] sm:gap-6 sm:max-h-[740px]">
          <TestimonialColumn items={col1} duration={15} />
          <TestimonialColumn items={col2} className="hidden md:block" duration={19} />
          <TestimonialColumn items={col3} className="hidden lg:block" duration={17} />
        </div>

        {/* Logo wall */}
        <div className="mt-16">
          <h3 className="text-lg font-semibold mb-6">{t('合作伙伴', 'Partners')}</h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {partners.map((p, i) => (
              <div key={i} className="flex min-h-16 items-center justify-center rounded-xl border border-border bg-card px-3 py-3 text-sm font-medium text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-primary/50 hover:text-foreground hover:shadow-md">
                <div className="flex items-center gap-2 text-center">
                  <img
                    src={`https://www.google.com/s2/favicons?sz=128&domain_url=${encodeURIComponent(p.domain)}`}
                    alt={p.name}
                    className="h-5 w-5 rounded-sm"
                  />
                  <span className="text-xs leading-5 sm:text-sm">{p.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
