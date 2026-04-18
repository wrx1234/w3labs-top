'use client'

import { useLang } from '@/context/LangContext'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRef, useState } from 'react'

const tabs = [
  { key: 'events', zh: '活动', en: 'Events' },
  { key: 'courses', zh: '课程', en: 'Courses' },
  { key: 'tutorials', zh: '教程', en: 'Tutorials' },
] as const

type TabKey = (typeof tabs)[number]['key']

const eventItems = [
  { id: 'a', city: '深圳', cityEn: 'Shenzhen', title: 'OpenClaw 养龙虾 · AI Agent 工程化实战', titleEn: 'OpenClaw · AI Agent Engineering Workshop', desc: '5天报名 2,000+，千人现场。覆盖量化交易、法律合规、物联网、AI 员工系统等真实落地场景。', descEn: '2,000+ registrations in 5 days. Real-world AI across fintech, legal, IoT.', stat: '2000+', date: '2026.03', img: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&q=80&w=900' },
  { id: 'b', city: '长沙', cityEn: 'Changsha', title: 'OpenClaw 养龙虾 · AI 赋能产业升级', titleEn: 'OpenClaw · AI Industry Upgrade', desc: '300+ 到场。联合主办：云上栏山、马栏山音视频实验室。', descEn: '300+ attendees. Co-hosted with Yueshang Lanshan.', stat: '300+', date: '2026.03', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=900' },
  { id: 'c', city: '全国', cityEn: 'National', title: '香港 · 顺德 · 多城巡回演讲', titleEn: 'HK · Shunde · Multi-city Tour', desc: 'W³ Labs 团队作为演讲嘉宾，持续支持全国各城市 AI 社区活动。', descEn: 'W³ Labs as guest speakers across cities.', stat: '5万+', date: '持续进行', img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=900' },
]

const courseItems = [
  { id: 'c1', title: 'AI Agent 实战课', titleEn: 'AI Agent Hands-on Course', desc: '从零到一构建企业级 AI Agent，覆盖主流框架与真实项目部署。', descEn: 'Build enterprise-grade AI Agents from scratch. Covers mainstream frameworks and real deployment.', img: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=900' },
  { id: 'c2', title: '企业AI认知课', titleEn: 'Enterprise AI Awareness', desc: '面向管理层的 AI 认知升级课程，帮助决策者理解 AI 的能力边界与落地路径。', descEn: 'AI awareness course for executives. Understand AI capabilities and deployment paths.', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=900' },
  { id: 'c3', title: '行业定制AI内训', titleEn: 'Industry-specific AI Training', desc: '根据企业实际业务场景定制的 AI 培训方案，直接对接痛点。', descEn: 'Customized AI training tailored to your specific business scenarios.', img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=900' },
]

const tutorialItems = [
  { id: 't1', title: 'AI 工具入门', titleEn: 'Getting Started with AI Tools', desc: '零基础入门 AI 工具使用指南，涵盖 ChatGPT、Claude、MidJourney 等主流工具。', descEn: 'Beginner-friendly guide to popular AI tools including ChatGPT, Claude, and MidJourney.', img: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&q=80&w=900' },
  { id: 't2', title: 'Prompt 工程', titleEn: 'Prompt Engineering', desc: '系统化学习 Prompt 技巧，从基础到高级，让 AI 输出更精准。', descEn: 'Systematic prompt engineering from basics to advanced techniques.', img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=900' },
  { id: 't3', title: 'AI 自动化工作流', titleEn: 'AI Automation Workflows', desc: '使用 AI 构建自动化工作流，提升团队效率 10 倍。', descEn: 'Build automation workflows with AI to 10x your team productivity.', img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=900' },
]

const contentByTab: Record<TabKey, typeof eventItems | typeof courseItems | typeof tutorialItems> = {
  events: eventItems,
  courses: courseItems,
  tutorials: tutorialItems,
}

export default function ContentSection() {
  const { lang, t } = useLang()
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState<TabKey>('events')

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === 'left' ? -400 : 400, behavior: 'smooth' })
    }
  }

  const items = contentByTab[activeTab]

  return (
    <section id="events" className="bg-muted/30 py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-8 flex flex-col justify-between md:flex-row md:items-end">
          <div>
            <span className="text-xs font-medium text-primary uppercase tracking-wider">Events & Content</span>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">{t('过往活动 & 内容', 'What We\'ve Built & Shared')}</h2>
          </div>
          <div className="mt-4 flex gap-2">
            <Button size="icon" variant="outline" onClick={() => scroll('left')}><ArrowLeft className="size-5" /></Button>
            <Button size="icon" variant="outline" onClick={() => scroll('right')}><ArrowRight className="size-5" /></Button>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8 flex gap-1 overflow-x-auto border-b border-border pb-1">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative shrink-0 px-4 py-2.5 text-sm font-medium transition-colors sm:px-5 ${
                activeTab === tab.key
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {t(tab.zh, tab.en)}
              {activeTab === tab.key && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t" />
              )}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div ref={scrollRef} className="scrollbar-hide flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
          {items.map((item) => (
            <a
              key={item.id}
              href="#"
              className="group flex min-w-[280px] max-w-[320px] snap-start flex-shrink-0 flex-col no-underline text-inherit sm:min-w-[350px] sm:max-w-[450px]"
            >
              <div className="relative aspect-[3/2] overflow-hidden rounded-xl">
                <img
                  src={item.img}
                  alt={lang === 'zh' ? item.title : item.titleEn}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 text-xs px-2 py-1 rounded-full font-medium bg-primary text-primary-foreground">
                  {t(
                    tabs.find((tb) => tb.key === activeTab)!.zh,
                    tabs.find((tb) => tb.key === activeTab)!.en
                  )}
                </span>
              </div>
              {'city' in item && (item as typeof eventItems[number]).city && (
                <p className="mt-3 text-lg font-bold">
                  {lang === 'zh' ? (item as typeof eventItems[number]).city : (item as typeof eventItems[number]).cityEn}
                </p>
              )}
              <p className="mt-1 text-lg font-medium line-clamp-2">{lang === 'zh' ? item.title : item.titleEn}</p>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{lang === 'zh' ? item.desc : item.descEn}</p>
              {'stat' in item && (item as typeof eventItems[number]).stat && (
                <p className="mt-2 text-sm font-bold text-primary">
                  {(item as typeof eventItems[number]).stat} {t('参与者', 'Attendees')}
                </p>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
