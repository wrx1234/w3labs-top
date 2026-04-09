'use client'
import { useLang } from '@/context/LangContext'

const memberTypes = [
  { zh: 'AI 技术开发者 & 团队', en: 'AI Developers & Teams' },
  { zh: '传统行业企业主', en: 'Industry Business Owners' },
  { zh: '投资人与行业顾问', en: 'Investors & Advisors' },
  { zh: '政府与产业园合作方', en: 'Government & Industrial Parks' },
  { zh: '学生与新入门者', en: 'Students & Beginners' },
]

const testimonials = [
  { name: '张总', role: { zh: '物业公司运营总监', en: 'Property Ops Director' }, text: { zh: '通过 W³ Labs 认识了一个 AI 开发团队，三个月内就把我们的工单系统全面升级了，效率提升非常明显。', en: 'Through W³ Labs, we met an AI dev team that completely upgraded our work order system in 3 months. The efficiency improvement is remarkable.' } },
  { name: '李梅', role: { zh: '影视制作公司创始人', en: 'Film Studio Founder' }, text: { zh: '参加了深圳的养龙虾活动，第一次真正理解了 AI Agent 是什么，现在我们公司已经在用了。', en: 'Attended the Shenzhen event, first time truly understanding AI Agents. Now our company is already using them.' } },
  { name: '王工', role: { zh: '食品产业园技术负责人', en: 'Food Park Tech Lead' }, text: { zh: 'W³ Labs 帮我们找的 AI 团队非常专业，他们真的懂我们的行业，不是来卖概念的。', en: 'The AI team W³ Labs found for us is truly professional. They really understand our industry — not just selling concepts.' } },
  { name: '陈导', role: { zh: '超维影像创始人', en: 'Hyperdim Imaging Founder' }, text: { zh: '长沙活动让我看到了 AI 在音视频行业的真实可能性，回来之后马上开始了第一个 AI 项目。', en: 'The Changsha event showed me the real possibilities of AI in media. Started our first AI project right after.' } },
  { name: 'Marcus L.', role: { zh: 'AI Engineer · OpenGuard', en: 'AI Engineer · OpenGuard' }, text: { zh: 'As an AI developer, W³ Labs connected me with real industry clients who actually understand their pain points. That\'s rare.', en: 'As an AI developer, W³ Labs connected me with real industry clients who actually understand their pain points. That\'s rare.' } },
  { name: '赵创始人', role: { zh: 'AI 创业公司 CEO', en: 'AI Startup CEO' }, text: { zh: '通过这里认识的投资人最终投了我们，W³ Labs 是我见过少有的真正在做资源链接的社区。', en: 'An investor we met here eventually funded us. W³ Labs is one of the few communities truly connecting resources.' } },
  { name: '刘总', role: { zh: '酒店集团数字化总监', en: 'Hotel Group Digital Director' }, text: { zh: 'W³ Labs 的撮合服务帮我节省了大量时间，不用自己去找开发团队，他们帮我筛选了很多坑。', en: 'W³ Labs\' matchmaking saved me a lot of time. No need to find dev teams myself — they filtered out many pitfalls.' } },
  { name: 'David K.', role: { zh: 'Startup Founder · Singapore', en: 'Startup Founder · Singapore' }, text: { zh: 'The community is real — not just a WeChat group, but actual connections that led to actual projects.', en: 'The community is real — not just a WeChat group, but actual connections that led to actual projects.' } },
  { name: '小新', role: { zh: '湖南大学在读学生', en: 'Hunan Univ. Student' }, text: { zh: '参加社区活动之后，我意识到 AI 不是我想象中那么遥远的东西，很多工具已经可以直接用了。', en: 'After community events, I realized AI isn\'t as distant as I thought. Many tools are ready to use right now.' } },
]

const partners = [
  '云上栏山', '马栏山音视频实验室', '湖南大学HFT', '果棠智能', 'OpenGuard',
  'B.News', 'HOH', 'WAVE', 'Openbuild', '众视超媒',
  '麓山人文', 'AI极客松', '破圈计划', 'GNAI', 'CTI Park',
]

export default function PartnersSection() {
  const { lang, t } = useLang()

  return (
    <section id="partners" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-xs font-medium text-[#22C55E] uppercase tracking-wider">Partners & Community</span>
        <h2 className="text-3xl font-bold mt-4">{t('合作伙伴 & 社区成员', 'Partners & Community Members')}</h2>

        {/* Member types */}
        <div className="flex flex-wrap gap-2 mt-8">
          {memberTypes.map((m, i) => (
            <span key={i} className="text-xs px-3 py-1.5 rounded-full bg-card border border-border text-muted-foreground">
              {lang === 'zh' ? m.zh : m.en}
            </span>
          ))}
        </div>

        {/* Testimonials */}
        <div className="relative mt-12">
          <div className="grid md:grid-cols-2 gap-4 max-h-[600px] overflow-hidden">
            {testimonials.map((t, i) => (
              <div key={i} className="p-5 rounded-xl border border-border bg-card">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  &ldquo;{lang === 'zh' ? t.text.zh : t.text.en}&rdquo;
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{lang === 'zh' ? t.role.zh : t.role.en}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Fade mask */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-muted/30 to-transparent pointer-events-none" />
        </div>

        {/* Partner logos */}
        <div className="mt-16">
          <h3 className="text-lg font-semibold mb-6">{t('合作伙伴', 'Partners')}</h3>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
            {partners.map((p, i) => (
              <div key={i} className="flex items-center justify-center h-16 rounded-xl border border-border bg-card text-sm font-medium text-muted-foreground hover:text-foreground hover:border-[#22C55E]/30 transition-colors">
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
