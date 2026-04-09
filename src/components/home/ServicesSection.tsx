'use client'
import { useLang } from '@/context/LangContext'

const services = [
  {
    featured: true,
    label: { zh: 'AI 落地撮合', en: 'AI Implementation Matchmaking' },
    price: '¥20,000 / case',
    desc: {
      zh: '你懂你的行业，我们帮你找到合适的 AI 技术团队。从需求梳理、团队匹配到项目落地，W³ Labs 全程陪跑。',
      en: 'You know your industry — we help you find the right AI team. From requirement analysis, team matching to project delivery, W³ Labs walks with you the whole way.',
    },
    fit: { zh: '适合：传统企业、创业公司', en: 'Best for: Traditional enterprises, startups' },
    features: {
      zh: ['需求深度梳理', '精准团队匹配', '全程项目陪跑', '落地效果保障'],
      en: ['Deep Requirement Analysis', 'Precise Team Matching', 'Full Project Support', 'Delivery Guarantee'],
    },
    btn: { zh: '洽谈合作', en: 'Contact Us' },
    btnStyle: 'bg-foreground text-background',
  },
  {
    featured: false,
    label: { zh: 'AI 培训与咨询', en: 'AI Training & Consulting' },
    price: '¥500 / hour',
    desc: {
      zh: '面向企业管理层、团队内训、行业工作坊。帮助你的团队真正理解 AI 能做什么、不能做什么。',
      en: 'For executive teams, internal training, and industry workshops. Help your team truly understand what AI can and cannot do.',
    },
    fit: { zh: '适合：企业管理层与团队', en: 'Best for: Executive teams' },
    features: {
      zh: ['管理层 AI 认知课', '行业定制内训', '工具选型建议'],
      en: ['Executive AI Awareness', 'Industry-specific Training', 'Tool Selection Advisory'],
    },
    btn: { zh: '了解详情', en: 'Learn More' },
    btnStyle: 'border border-border text-foreground hover:bg-muted',
  },
  {
    featured: false,
    label: { zh: 'AI 解决方案定制开发', en: 'Custom AI Solutions' },
    price: '¥50,000 / case',
    desc: {
      zh: '通过技术合作团队，承接定制化 AI 系统开发。智能客服、自动化流程、行业专属 AI 工具——从需求到交付。',
      en: 'Through our tech partner network, we deliver custom AI systems. Smart customer service, automation, industry-specific tools — from requirement to delivery.',
    },
    fit: { zh: '适合：有明确 AI 需求的企业', en: 'Best for: Enterprises with clear AI needs' },
    features: {
      zh: ['AI 智能客服系统', '业务自动化流程', '行业专属 AI 工具'],
      en: ['AI Customer Service', 'Business Automation', 'Industry-specific AI Tools'],
    },
    btn: { zh: '了解详情', en: 'Learn More' },
    btnStyle: 'border border-border text-foreground hover:bg-muted',
  },
]

export default function ServicesSection() {
  const { lang, t } = useLang()

  return (
    <section id="services" className="py-24 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-xs font-medium text-[#22C55E] uppercase tracking-wider">What We Do</span>
        <h2 className="text-3xl font-bold mt-4">{t('我们能帮你做什么', 'What We Can Do For You')}</h2>

        <div className="grid lg:grid-cols-3 gap-6 mt-12">
          {services.map((s, i) => (
            <div
              key={i}
              className={`rounded-2xl p-8 flex flex-col ${
                s.featured
                  ? 'bg-background text-foreground lg:row-span-1'
                  : 'bg-background/10 border border-white/10'
              }`}
            >
              <span className={`text-xs font-medium px-3 py-1 rounded-full self-start ${
                s.featured ? 'bg-[#22C55E]/10 text-[#22C55E]' : 'bg-white/10 text-white/70'
              }`}>
                {lang === 'zh' ? s.label.zh : s.label.en}
              </span>

              <p className={`text-3xl font-bold mt-4 ${s.featured ? 'text-[#22C55E]' : 'text-white'}`}>
                {s.price}
              </p>

              <p className={`text-sm mt-4 leading-relaxed ${s.featured ? 'text-muted-foreground' : 'text-white/70'}`}>
                {lang === 'zh' ? s.desc.zh : s.desc.en}
              </p>

              <p className={`text-xs mt-3 ${s.featured ? 'text-muted-foreground' : 'text-white/50'}`}>
                {lang === 'zh' ? s.fit.zh : s.fit.en}
              </p>

              <ul className="mt-6 space-y-2 flex-1">
                {(lang === 'zh' ? s.features.zh : s.features.en).map((f, j) => (
                  <li key={j} className={`text-sm flex items-center gap-2 ${s.featured ? '' : 'text-white/80'}`}>
                    <span className="text-[#22C55E]">✓</span> {f}
                  </li>
                ))}
              </ul>

              <button className={`mt-8 w-full py-3 rounded-full text-sm font-medium transition-opacity hover:opacity-90 ${s.btnStyle}`}>
                {lang === 'zh' ? s.btn.zh : s.btn.en}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
