'use client'

import { useLang } from '@/context/LangContext'
import { useDialog } from '@/context/DialogContext'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckIcon, Landmark, ShieldCheck, DatabaseZap, LineChart, Layers3 } from 'lucide-react'
import { cn } from '@/lib/utils'

type Locale = 'zh' | 'en'

type FlowNode = {
  title: { zh: string; en: string }
  body: { zh: string; en: string }
  accent: string
}

const structureNodes: FlowNode[] = [
  {
    title: { zh: 'SpaceX', en: 'SpaceX' },
    body: {
      zh: '参考标的，不参与发行、不背书、不承担兑付义务。',
      en: 'Reference asset only. It does not issue, endorse, or owe payouts.',
    },
    accent: 'border-sky-400/40 bg-sky-400/10',
  },
  {
    title: { zh: 'SPV / Support Layer', en: 'SPV / Support Layer' },
    body: {
      zh: '提供经济支撑或风险管理，投资者不直接持有其权益。',
      en: 'Provides economic support or risk management. Investors do not directly own it.',
    },
    accent: 'border-violet-400/40 bg-violet-400/10',
  },
  {
    title: { zh: 'Republic / RepublicX', en: 'Republic / RepublicX' },
    body: {
      zh: '结构设计、合规包装、发行与兑付义务承接方。',
      en: 'The issuer and structuring layer for compliance, issuance, and payouts.',
    },
    accent: 'border-primary/40 bg-primary/10',
  },
  {
    title: { zh: 'Bitget', en: 'Bitget' },
    body: {
      zh: '前端分发入口与 OTC 流通场景，不是底层发行主体。',
      en: 'Distribution and OTC access layer, not the underlying issuer.',
    },
    accent: 'border-amber-400/40 bg-amber-400/10',
  },
  {
    title: { zh: 'Investors', en: 'Investors' },
    body: {
      zh: '持有 mirror token / structured note，对发行人享有债务型权益。',
      en: 'Hold a mirror token / structured note claim against the issuer.',
    },
    accent: 'border-rose-400/40 bg-rose-400/10',
  },
]

const cashflowNodes: FlowNode[] = [
  {
    title: { zh: '1. Bitget 前端认购', en: '1. Bitget subscription flow' },
    body: {
      zh: '用户在前端参与认购，看起来像是在“买 SpaceX pre-IPO”。',
      en: 'Users subscribe through Bitget, which looks like buying “SpaceX pre-IPO”.',
    },
    accent: 'border-primary/40 bg-primary/10',
  },
  {
    title: { zh: '2. 对应 RepublicX 产品', en: '2. RepublicX-issued product' },
    body: {
      zh: '认购的是 RepublicX 的结构化产品，而不是直接拿到底层股权。',
      en: 'What gets subscribed is a RepublicX-issued structured product, not direct equity.',
    },
    accent: 'border-sky-400/40 bg-sky-400/10',
  },
  {
    title: { zh: '3. 资金进入发行体系', en: '3. Capital enters issuer structure' },
    body: {
      zh: '资金进入发行与风险管理体系，不会直接进入 SpaceX cap table。',
      en: 'Capital enters the issuer and risk management structure, not the SpaceX cap table.',
    },
    accent: 'border-violet-400/40 bg-violet-400/10',
  },
  {
    title: { zh: '4. 事件触发后兑付', en: '4. Event-triggered payout' },
    body: {
      zh: 'IPO / 并购 / 流动性事件发生后，由发行人按公式向投资者兑付。',
      en: 'After an IPO, M&A, or liquidity event, payouts are made by the issuer based on formula rules.',
    },
    accent: 'border-amber-400/40 bg-amber-400/10',
  },
]

const viewpoints = [
  {
    zh: '你买的不是 SpaceX 股权，而是对发行人的结构化权益。',
    en: 'What you buy is not SpaceX equity, but a structured claim against the issuer.',
  },
  {
    zh: '这类产品的真实壁垒不在页面，而在结构、合规、准入、流转与兑付规则。',
    en: 'The real moat is not the front-end page, but the structure, compliance, access, transfer, and payout rules.',
  },
  {
    zh: '用户“看到”的资产与法律上“持有”的权益，中间往往隔着一整套产品化体系。',
    en: 'There is often an entire productization stack between the asset users “see” and the rights they legally “hold”.',
  },
]

const capabilityCards = [
  {
    icon: Layers3,
    title: { zh: '产品结构设计', en: 'Asset Structuring' },
    body: {
      zh: '将 pre-IPO、基金份额、债权、票据、贵金属等复杂现实资产设计成可发行的链上产品，明确权利定义、转让限制与事件触发机制。',
      en: 'Design on-chain products for pre-IPO exposure, fund interests, debt, notes, or metals with clear rights, transfer limits, and trigger logic.',
    },
  },
  {
    icon: ShieldCheck,
    title: { zh: '合规协同与落地支持', en: 'Compliance & Legal Coordination' },
    body: {
      zh: '协同律所、持牌机构、SPV 或信托结构，打通披露要求、投资者准入与法律文件流程。',
      en: 'Coordinate counsel, licensed institutions, SPVs, or trusts across disclosures, investor eligibility, and legal documentation.',
    },
  },
  {
    icon: DatabaseZap,
    title: { zh: '技术发行与链上基础设施', en: 'Tokenization Infrastructure' },
    body: {
      zh: '提供 permissioned token、白名单、链上登记、钱包准入、锁仓与稳定币结算接口。',
      en: 'Provide permissioned tokens, whitelists, on-chain registry, wallet access control, lockups, and stablecoin settlement rails.',
    },
  },
  {
    icon: Landmark,
    title: { zh: '分发与交易体验支持', en: 'Distribution & Access Control' },
    body: {
      zh: '支持前端认购页、KYC/KYB、限售流转和 OTC 配置，把复杂资产真正变成可被市场消费的产品。',
      en: 'Support subscription flows, KYC/KYB, restricted transfers, and OTC setups so complex assets become market-ready products.',
    },
  },
  {
    icon: LineChart,
    title: { zh: '发行后的运营中台', en: 'Post-Issuance Operations' },
    body: {
      zh: '覆盖参考价格、企业行为、分红/回款/兑付、投资者台账、报表和对账等持续运营环节。',
      en: 'Cover reference pricing, corporate actions, payouts, investor ledgers, reporting, and reconciliation after issuance.',
    },
  },
]

function FlowCard({ node, lang, compact = false }: { node: FlowNode; lang: Locale; compact?: boolean }) {
  return (
    <div className={cn('rounded-2xl border p-4', node.accent, compact ? 'w-[240px] shrink-0 sm:w-56' : 'w-full')}>
      <p className="text-sm font-semibold">{lang === 'zh' ? node.title.zh : node.title.en}</p>
      <p className="mt-2 text-xs leading-6 text-muted-foreground">{lang === 'zh' ? node.body.zh : node.body.en}</p>
    </div>
  )
}

function ArrowLine() {
  return (
    <svg width="28" height="18" viewBox="0 0 28 18" className="shrink-0 text-muted-foreground">
      <line x1="2" y1="9" x2="22" y2="9" stroke="currentColor" strokeWidth="1.5" />
      <polyline points="18,4 24,9 18,14" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function DownArrow() {
  return (
    <svg width="18" height="28" viewBox="0 0 18 28" className="mx-auto shrink-0 text-muted-foreground">
      <line x1="9" y1="2" x2="9" y2="22" stroke="currentColor" strokeWidth="1.5" />
      <polyline points="4,18 9,24 14,18" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function FilledCheck() {
  return (
    <div className="rounded-full bg-primary p-0.5 text-primary-foreground">
      <CheckIcon className="size-3" strokeWidth={3} />
    </div>
  )
}

export default function RwaSection() {
  const { lang, t } = useLang()
  const { openDialog } = useDialog()

  return (
    <section id="rwa" className="bg-muted/20 py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <span className="text-xs font-medium uppercase tracking-wider text-primary">On-chain Asset Structuring</span>
        <div className="mt-4 max-w-4xl">
          <div className="rounded-3xl border border-primary/20 bg-[linear-gradient(135deg,rgba(34,197,94,0.16),rgba(34,197,94,0.04))] p-5 sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              {t('案例钩子', 'Case Hook')}
            </p>
            <h2 className="mt-3 text-2xl font-bold sm:text-4xl">
              {t('“史上最强融资的 SpaceX 股票，竟然能在加密货币交易所直接买？” 你以为这就是现实资产上链，但可能完全不是一回事。', '"SpaceX, one of the most famous private-market stories in history, can supposedly be bought on a crypto exchange?" It sounds like real-world asset tokenization, but the reality may be very different.')}
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              {t(
                '这个案例最吸引人的地方，不是“买到了 SpaceX”，而是它用一个极具话题性的外壳，把结构化产品、发行义务、参考标的和分发场景揉在了一起。真正值得拆的，是用户到底买到了什么。',
                'What makes this case so compelling is not that people “bought SpaceX”, but that it wrapped a structured product, issuer obligation, reference asset, and distribution flow into one highly marketable story. The real question is what users actually bought.'
              )}
            </p>
          </div>

          <h2 className="mt-8 text-2xl font-bold sm:text-4xl">
            {t('把复杂现实资产，做成可发行、可分发、可交易、可运营的链上产品', 'Turn complex real-world assets into products that can be issued, distributed, traded, and operated on-chain')}
          </h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            {t(
              '现实资产进入链上市场，难点从来不只是 tokenization。真正决定产品能否落地的，是底层资产结构、法律关系、发行路径、投资者准入、流转边界、定价机制与后续兑付运营能否被完整打通。',
              'The challenge of bringing real-world assets on-chain is never just tokenization. What really matters is whether structure, legal relationships, issuance paths, investor access, transfer rules, pricing, and post-issuance operations are all connected.'
            )}
          </p>
        </div>

        <div className="mt-12 space-y-10">
          <div className="rounded-3xl border border-border bg-card/50 p-5 sm:p-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <Badge variant="secondary">Case Breakdown</Badge>
                <h3 className="mt-3 text-xl font-bold sm:text-2xl">{t('Bitget x Republic x SpaceX pre-IPO', 'Bitget x Republic x SpaceX pre-IPO')}</h3>
              </div>
              <p className="max-w-xl text-sm leading-7 text-muted-foreground">
                {t(
                  '这个案例表面上看像是在“卖 SpaceX pre-IPO”，但拆开后会发现，用户真正买到的是一层对发行人的结构化权益，而不是 SpaceX 股权本身。最容易让人误解的，恰恰是它营销得最成功的地方。',
                  'At first glance this looks like “selling SpaceX pre-IPO”, but when you unpack it, users are really buying a structured claim against the issuer, not SpaceX equity itself. The most misunderstood part is exactly the part marketed most successfully.'
                )}
              </p>
            </div>

            <div className="mt-8 space-y-8">
              <div>
                <p className="mb-4 text-sm font-semibold text-foreground">{t('图 1：结构总览', 'Diagram 1: Structure Overview')}</p>
                <div className="flex gap-3 overflow-x-auto pb-3">
                  {structureNodes.map((node, index) => (
                    <div key={node.title.zh} className="flex items-center gap-3">
                      <FlowCard node={node} lang={lang} compact />
                      {index < structureNodes.length - 1 && <ArrowLine />}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-4 text-sm font-semibold text-foreground">{t('图 2：资金流向与兑付路径', 'Diagram 2: Capital Flow & Payout Path')}</p>
                <div className="mx-auto max-w-3xl space-y-2">
                  {cashflowNodes.map((node, index) => (
                    <div key={node.title.zh}>
                      <FlowCard node={node} lang={lang} />
                      {index < cashflowNodes.length - 1 && <DownArrow />}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-4 text-sm font-semibold text-foreground">{t('图 3：最容易被忽略的误区', 'Diagram 3: The Misconceptions Most People Miss')}</p>
                <div className="grid gap-4 md:grid-cols-3">
                  {viewpoints.map((point) => (
                    <div key={point.zh} className="rounded-2xl border border-border bg-background/80 p-5">
                      <p className="text-sm leading-7 text-muted-foreground">{lang === 'zh' ? point.zh : point.en}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-6 max-w-3xl">
              <Badge variant="secondary">{t('W3Labs 可以提供什么', 'What W3Labs Can Provide')}</Badge>
              <h3 className="mt-4 text-2xl font-bold sm:text-3xl">{t('不是单点技术，而是从结构到运营的整套能力', 'Not a single technical module, but end-to-end capability from structure to operations')}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {t(
                  '这类项目真正的壁垒，不在前端页面，而在结构层、合规层和运营层。下面这些能力，是复杂资产进入链上市场时真正会用到的能力栈。',
                  'The real moat is not the front-end page. It lives in the structure layer, the compliance layer, and the operations layer. These are the actual capability blocks needed to bring complex assets on-chain.'
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-8">
              <div className="relative overflow-hidden rounded-md border border-primary/30 lg:col-span-5">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
                <div className="relative flex flex-wrap items-center gap-3 p-4">
                  <Badge variant="secondary">{t('复杂资产链上产品化', 'ON-CHAIN PRODUCTIZATION')}</Badge>
                  <Badge variant="outline" className="hidden lg:flex">{t('核心能力', 'Core Capability')}</Badge>
                  <div className="sm:ml-auto">
                    <Button onClick={() => openDialog('business')}>{t('洽谈合作', 'Contact Us')}</Button>
                  </div>
                </div>
                <div className="relative flex flex-col p-4 lg:flex-row">
                  <div className="pb-4 lg:w-[34%]">
                    <span className="text-3xl font-semibold tracking-tight sm:text-4xl">{t('结构到运营', 'Structure to Ops')}</span>
                    <p className="mt-2 text-sm text-muted-foreground">{t('不是单点 tokenization，而是完整产品能力。', 'Not single-point tokenization, but a full product stack.')}</p>
                  </div>
                  <ul className="grid gap-4 text-sm text-muted-foreground lg:w-[66%]">
                    {[
                      t('权利定义、事件触发与兑付规则设计', 'Rights definition, trigger logic, and payout design'),
                      t('投资者准入、白名单与链上登记体系', 'Investor access control, whitelists, and on-chain registries'),
                      t('发行、分发、OTC 流转与后续运营联动', 'Issuance, distribution, OTC transfer, and post-issuance operations'),
                      t('与律所、持牌机构、SPV / trust 结构协同', 'Coordination with counsel, licensed partners, and SPV / trust structures'),
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <FilledCheck />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {capabilityCards.map((card) => {
                const Icon = card.icon
                return (
                  <div key={card.title.zh} className="relative overflow-hidden rounded-md border border-foreground/10 bg-background lg:col-span-3">
                    <div className="flex items-center gap-3 p-4">
                      <Badge variant="secondary">{lang === 'zh' ? card.title.zh : card.title.en}</Badge>
                    </div>
                    <div className="px-4 py-2">
                      <div className="inline-flex rounded-2xl bg-primary/10 p-2 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="px-4 pb-5">
                      <p className="text-sm leading-7 text-muted-foreground">{lang === 'zh' ? card.body.zh : card.body.en}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 rounded-3xl border border-primary/20 bg-primary/10 p-6">
              <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
                {t(
                  '如果你手上有资产、渠道、牌照或分发能力，但缺少链上产品化与运营基础设施，W3Labs 可以帮助你把项目从结构设计推进到上线与持续运营。',
                  'If you already have assets, channels, licenses, or distribution capability but lack productization and operations infrastructure, W3Labs can help move the project from structure design to launch and ongoing operations.'
                )}
              </p>
              <Button className="mt-4 text-black" onClick={() => openDialog('business')}>
                {t('联系商务咨询获取落地方案', 'Talk to us about a launch plan')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
