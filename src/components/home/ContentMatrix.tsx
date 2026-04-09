'use client'
import { useLang } from '@/context/LangContext'

const cards = [
  {
    type: { zh: '活动', en: 'Event' },
    typeColor: 'bg-[#22C55E] text-white',
    subtype: { zh: '主办', en: 'Hosted' },
    city: { zh: '深圳', en: 'Shenzhen' },
    title: { zh: 'OpenClaw 养龙虾 · AI Agent 工程化实战', en: 'OpenClaw · AI Agent Engineering Workshop' },
    desc: { zh: '5天报名 2,000+，千人现场。覆盖量化交易、法律合规、物联网、AI 员工系统等真实落地场景。', en: '2,000+ registrations in 5 days, 1,000+ onsite. Covering quantitative trading, legal compliance, IoT, AI employee systems.' },
    stat: '2000+',
    statLabel: { zh: '参与者', en: 'Attendees' },
    date: '2026.03',
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600',
  },
  {
    type: { zh: '活动', en: 'Event' },
    typeColor: 'bg-[#22C55E] text-white',
    subtype: { zh: '主办', en: 'Hosted' },
    city: { zh: '长沙', en: 'Changsha' },
    title: { zh: 'OpenClaw 养龙虾 · AI 赋能产业升级', en: 'OpenClaw · AI Industry Upgrade' },
    desc: { zh: '300+ 到场。联合主办：云上栏山、马栏山音视频实验室。', en: '300+ attendees. Co-hosted with Yunshanlanshan, Malan Mountain AV Lab.' },
    stat: '300+',
    statLabel: { zh: '参与者', en: 'Attendees' },
    date: '2026.03',
    img: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600',
  },
  {
    type: { zh: '活动', en: 'Event' },
    typeColor: 'bg-[#22C55E] text-white',
    subtype: { zh: '嘉宾支持', en: 'Guest Speaker' },
    city: { zh: '全国', en: 'National' },
    title: { zh: '香港 · 顺德 · 多城巡回演讲', en: 'HK · Shunde · Multi-city Tour' },
    desc: { zh: 'W³ Labs 团队作为演讲嘉宾，持续支持全国各城市 AI 社区活动。', en: 'W³ Labs team as guest speakers, continuously supporting AI community events across cities.' },
    stat: '5万+',
    statLabel: { zh: '累计参与', en: 'Total Attendees' },
    date: { zh: '持续进行', en: 'Ongoing' },
    img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600',
  },
  {
    type: { zh: '文章', en: 'Article' },
    typeColor: 'bg-foreground text-background',
    subtype: { zh: '补位', en: 'Content' },
    city: null,
    title: { zh: '为什么传统行业的人更能做出颠覆性 AI 产品', en: 'Why Industry Veterans Build Better AI Products' },
    desc: { zh: '行业知识是 AI 落地的核心壁垒，懂行的人才能提出真正有价值的需求。', en: 'Industry knowledge is the core barrier to AI deployment. Only insiders can identify truly valuable requirements.' },
    stat: null,
    statLabel: null,
    date: null,
    img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600',
  },
]

export default function ContentMatrix() {
  const { lang, t } = useLang()

  return (
    <section id="events" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-xs font-medium text-[#22C55E] uppercase tracking-wider">Events & Content</span>
        <h2 className="text-3xl font-bold mt-4">{t('过往活动 & 内容', 'Events & Content')}</h2>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {cards.map((card, i) => (
            <div key={i} className="group rounded-2xl overflow-hidden border border-border bg-card hover:shadow-lg transition-shadow">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={card.img}
                  alt={lang === 'zh' ? card.title.zh : card.title.en}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${card.typeColor}`}>
                    {lang === 'zh' ? card.type.zh : card.type.en}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                {card.city && (
                  <p className="text-2xl font-bold">
                    {lang === 'zh' ? card.city.zh : card.city.en}
                  </p>
                )}
                <h3 className="font-semibold text-lg leading-tight">
                  {lang === 'zh' ? card.title.zh : card.title.en}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {lang === 'zh' ? card.desc.zh : card.desc.en}
                </p>
                <div className="flex items-center justify-between pt-2">
                  {card.stat && (
                    <span className="text-sm font-bold text-[#22C55E]">
                      {card.stat} {card.statLabel && (lang === 'zh' ? card.statLabel.zh : card.statLabel.en)}
                    </span>
                  )}
                  {card.date && (
                    <span className="text-xs text-muted-foreground">
                      {typeof card.date === 'string' ? card.date : (lang === 'zh' ? card.date.zh : card.date.en)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
