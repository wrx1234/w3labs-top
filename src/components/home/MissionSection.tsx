'use client'
import { useLang } from '@/context/LangContext'

const cards = [
  {
    num: '01',
    zhTitle: '链接 Connect',
    enTitle: 'Connect',
    zh: '把传统行业从业者与 AI 技术团队、工具和知识真实地连接起来——不是名片交换，是真正的合作发生。',
    en: 'Truly connecting traditional industry professionals with AI teams, tools, and knowledge — not just exchanging business cards, but making real collaboration happen.',
  },
  {
    num: '02',
    zhTitle: '落地 Deploy',
    enTitle: 'Deploy',
    zh: '不谈概念，只谈能在真实业务场景中跑起来的解决方案。每一个案例都来自真实项目。',
    en: 'No concepts, only solutions that run in real business scenarios. Every case comes from real projects.',
  },
  {
    num: '03',
    zhTitle: '平权 Democratize',
    enTitle: 'Democratize',
    zh: '让 AI 的高级能力不再是少数技术精英的专属，每一个懂行业的人都应该有机会用 AI 颠覆自己的领域。',
    en: 'Making advanced AI accessible to everyone, not just tech elites. Anyone who understands their industry should have the chance to disrupt it with AI.',
  },
]

export default function MissionSection() {
  const { t } = useLang()

  return (
    <section id="mission" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-xs font-medium text-[#22C55E] uppercase tracking-wider">Why We Exist</span>

        <h2 className="text-3xl sm:text-4xl font-bold mt-4 leading-snug max-w-3xl">
          {t(
            <>每个行业颠覆性的 AI 产品，<br/><span className="text-muted-foreground">一定是由本行业的人提出并构造的。</span></>,
            <>The most disruptive AI products in any industry<br/><span className="text-muted-foreground">will be built by the people already inside it.</span></>
          )}
        </h2>

        <p className="mt-6 text-muted-foreground max-w-2xl leading-relaxed">
          {t(
            '能真正用 AI 颠覆一个行业的，不是硅谷工程师，而是那个在餐饮行业摸爬滚打了十年的老板，那个每天跟物业纠纷打交道的从业者，那个在影视剧组里待过的导演。他们最懂行业的痛点，他们缺少的只是一样东西——跟 AI 连接的能力与通道。W³ Labs 做的就是这件事：链接。',
            'The people who can truly disrupt an industry with AI aren\'t Silicon Valley engineers — they\'re the restaurant owner with ten years of experience, the property manager dealing with daily disputes, the director who\'s been on film sets. They understand industry pain points best. All they\'re missing is one thing — the ability and channel to connect with AI. That\'s what W³ Labs does: connect.'
          )}
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {cards.map((card) => (
            <div
              key={card.num}
              className="group p-8 rounded-2xl border border-border bg-card hover:-translate-y-1 transition-all duration-300 hover:shadow-lg"
            >
              <span className="text-5xl font-bold text-[#22C55E]/20 group-hover:text-[#22C55E]/40 transition-colors">
                {card.num}
              </span>
              <h3 className="text-lg font-bold mt-4">
                {t(card.zhTitle, card.enTitle)}
              </h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                {t(card.zh, card.en)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
