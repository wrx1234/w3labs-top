'use client'
import { useLang } from '@/context/LangContext'

interface WorkflowNode {
  icon: string
  title: { zh: string; en: string }
  desc: { zh: string; en: string }
}

interface CaseData {
  num: string
  tag: { zh: string; en: string }
  title: { zh: string; en: string }
  desc: { zh: string; en: string }
  result: { zh: string; en: string }
  workflow: WorkflowNode[]
}

const cases: CaseData[] = [
  {
    num: '01',
    tag: { zh: '物业行业', en: 'Property Management' },
    title: { zh: '智慧物业 AI 改造', en: 'Smart Property AI Transformation' },
    desc: {
      zh: '一家物业公司找到 W³ Labs，希望用 AI 提升日常运营效率。我们帮他们匹配了专注楼宇物联网的 AI 开发团队，除了工单系统，还构建了 AI 商城（业主可通过 AI 直接购物）、AI 商家入驻审核、AI 派单等完整生态。',
      en: 'A property company came to W³ Labs wanting to improve operational efficiency with AI. We matched them with an AI team specializing in building IoT, building not just a work order system, but a complete ecosystem including AI mall, merchant review, and AI dispatching.',
    },
    result: { zh: '人工响应成本 ↓40% · 3个月内完成落地', en: 'Manual response cost ↓40% · Deployed in 3 months' },
    workflow: [
      { icon: '💬', title: { zh: '业主请求', en: 'Owner Request' }, desc: { zh: '提交报修/需求', en: 'Submit repair request' } },
      { icon: '⚡', title: { zh: 'AI 派单系统', en: 'AI Dispatch' }, desc: { zh: '智能分配工单', en: 'Smart task assignment' } },
      { icon: '🤖', title: { zh: 'AI 客服机器人', en: 'AI Chatbot' }, desc: { zh: '7×24 自动响应', en: '24/7 auto response' } },
      { icon: '🛒', title: { zh: 'AI 商城', en: 'AI Mall' }, desc: { zh: '业主 AI 购物', en: 'Owner AI shopping' } },
      { icon: '🏪', title: { zh: '商家入驻审核', en: 'Merchant Review' }, desc: { zh: 'AI 自动审核', en: 'AI auto review' } },
      { icon: '📊', title: { zh: '数据看板', en: 'Dashboard' }, desc: { zh: '运营数据可视化', en: 'Ops data visualization' } },
    ],
  },
  {
    num: '02',
    tag: { zh: '影视产业', en: 'Film & Media' },
    title: { zh: 'AI 漫剧全流程制作系统', en: 'AI Comic Drama Production System' },
    desc: {
      zh: '面向食品产业园客户，一套从定向获客到内容制作、交付维护全流程的 AI 漫剧生产系统。同一架构可复用于跨境出海场景。',
      en: 'For food industrial park clients, a complete AI comic drama production system from targeted acquisition to content creation and delivery. The same architecture is reusable for cross-border scenarios.',
    },
    result: { zh: '全流程 AI 自动化 · 人力成本大幅压缩 · 架构可复用', en: 'Full-process AI automation · Significant labor cost reduction · Reusable architecture' },
    workflow: [
      { icon: '🎯', title: { zh: '定向获客', en: 'Targeted Acquisition' }, desc: { zh: '精准客户触达', en: 'Precise client outreach' } },
      { icon: '📝', title: { zh: '脚本生成', en: 'Script Generation' }, desc: { zh: 'AI 自动编剧', en: 'AI auto scripting' } },
      { icon: '🎬', title: { zh: '漫剧制作', en: 'Comic Production' }, desc: { zh: 'AI 画面生成', en: 'AI visual generation' } },
      { icon: '✅', title: { zh: '人工审核', en: 'Human Review' }, desc: { zh: '质量把控', en: 'Quality control' } },
      { icon: '📦', title: { zh: '内容交付', en: 'Content Delivery' }, desc: { zh: '成品输出', en: 'Final output' } },
      { icon: '🔄', title: { zh: '客户维护', en: 'Client Maintenance' }, desc: { zh: '持续服务', en: 'Ongoing service' } },
    ],
  },
]

function WorkflowStrip({ nodes, lang }: { nodes: WorkflowNode[]; lang: 'zh' | 'en' }) {
  return (
    <div className="overflow-x-auto pb-2 -mx-2 px-2">
      <div className="flex gap-3 min-w-max">
        {nodes.map((node, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="bg-card border border-border rounded-xl p-4 w-32 flex-shrink-0">
              <span className="text-2xl">{node.icon}</span>
              <p className="text-xs font-semibold mt-2">{lang === 'zh' ? node.title.zh : node.title.en}</p>
              <p className="text-xs text-muted-foreground mt-1">{lang === 'zh' ? node.desc.zh : node.desc.en}</p>
              <div className="mt-3 h-1 rounded-full bg-[#22C55E]/30">
                <div className="h-full rounded-full bg-[#22C55E]" style={{ width: `${((i + 1) / nodes.length) * 100}%` }} />
              </div>
            </div>
            {i < nodes.length - 1 && (
              <span className="text-muted-foreground text-lg flex-shrink-0">→</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function CasesSection() {
  const { lang, t } = useLang()

  return (
    <section id="cases" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-xs font-medium text-[#22C55E] uppercase tracking-wider">Real Results</span>
        <h2 className="text-3xl font-bold mt-4">{t('真实发生的连接', 'Real Connections, Real Results')}</h2>

        <div className="mt-12 space-y-16">
          {cases.map((c) => (
            <div key={c.num} className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-5xl font-bold text-[#22C55E]/20">{c.num}</span>
                <div>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-muted text-muted-foreground">
                    {lang === 'zh' ? c.tag.zh : c.tag.en}
                  </span>
                  <h3 className="text-xl font-bold mt-2">{lang === 'zh' ? c.title.zh : c.title.en}</h3>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                {lang === 'zh' ? c.desc.zh : c.desc.en}
              </p>

              <p className="text-sm font-semibold text-[#22C55E]">
                {lang === 'zh' ? c.result.zh : c.result.en}
              </p>

              <WorkflowStrip nodes={c.workflow} lang={lang} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
