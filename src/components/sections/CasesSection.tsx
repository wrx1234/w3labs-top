'use client'

import { useLang } from '@/context/LangContext'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'

const colorMap: Record<string, string> = {
  emerald: 'border-emerald-400/40 bg-emerald-400/10',
  blue: 'border-blue-400/40 bg-blue-400/10',
  purple: 'border-purple-400/40 bg-purple-400/10',
  amber: 'border-amber-400/40 bg-amber-400/10',
  indigo: 'border-indigo-400/40 bg-indigo-400/10',
  rose: 'border-rose-400/40 bg-rose-400/10',
  cyan: 'border-cyan-400/40 bg-cyan-400/10',
  teal: 'border-teal-400/40 bg-teal-400/10',
}

interface WfNode {
  icon: string
  title: string
  titleEn: string
  desc: string
  descEn: string
  color: string
}

function NodeCard({ node, lang }: { node: WfNode; lang: 'zh' | 'en' }) {
  return (
    <Card className={`w-28 shrink-0 border-2 bg-background/70 p-3 sm:w-32 ${colorMap[node.color]}`}>
      <p className="flex items-start gap-1 text-xs font-semibold leading-tight">
        <span className="text-base leading-none">{node.icon}</span>
        <span>{lang === 'zh' ? node.title : node.titleEn}</span>
      </p>
      <p className="text-[10px] text-muted-foreground mt-1">{lang === 'zh' ? node.desc : node.descEn}</p>
    </Card>
  )
}

function ArrowRight() {
  return (
    <svg width="24" height="16" viewBox="0 0 24 16" className="text-muted-foreground shrink-0">
      <line x1="0" y1="8" x2="20" y2="8" stroke="currentColor" strokeWidth="1.5" />
      <polyline points="16,3 21,8 16,13" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function ArrowDown() {
  return (
    <svg width="16" height="24" viewBox="0 0 16 24" className="text-muted-foreground shrink-0 mx-auto">
      <line x1="8" y1="0" x2="8" y2="20" stroke="currentColor" strokeWidth="1.5" />
      <polyline points="3,16 8,21 13,16" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function BranchConnector() {
  return (
    <svg width="40" height="120" viewBox="0 0 40 120" className="text-muted-foreground shrink-0 hidden md:block">
      <line x1="0" y1="60" x2="20" y2="60" stroke="currentColor" strokeWidth="1.5" />
      <line x1="20" y1="10" x2="20" y2="110" stroke="currentColor" strokeWidth="1.5" />
      <line x1="20" y1="10" x2="40" y2="10" stroke="currentColor" strokeWidth="1.5" />
      <polyline points="36,6 41,10 36,14" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <line x1="20" y1="60" x2="40" y2="60" stroke="currentColor" strokeWidth="1.5" />
      <polyline points="36,56 41,60 36,64" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <line x1="20" y1="110" x2="40" y2="110" stroke="currentColor" strokeWidth="1.5" />
      <polyline points="36,106 41,110 36,114" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

// Case 1: Property - branching workflow
const case1Entry: WfNode[] = [
  { icon: '💬', title: '业主请求', titleEn: 'Owner Request', desc: '提交报修/需求', descEn: 'Submit requests', color: 'emerald' },
  { icon: '⚡', title: 'AI智能分流', titleEn: 'AI Smart Routing', desc: '智能分类派发', descEn: 'Smart classification', color: 'blue' },
]

const case1PathA: WfNode[] = [
  { icon: '🤖', title: 'AI客服机器人', titleEn: 'AI Chatbot', desc: '7x24 自动响应', descEn: '24/7 response', color: 'purple' },
  { icon: '📋', title: '工单处理', titleEn: 'Ticket Process', desc: '自动分配跟踪', descEn: 'Auto assignment', color: 'blue' },
  { icon: '📊', title: '数据看板', titleEn: 'Dashboard', desc: '运营数据可视化', descEn: 'Data visualization', color: 'emerald' },
]

const case1PathB: WfNode[] = [
  { icon: '🛒', title: 'AI商城', titleEn: 'AI Mall', desc: '业主 AI 购物', descEn: 'AI shopping', color: 'amber' },
  { icon: '🏪', title: '商家入驻审核', titleEn: 'Merchant Review', desc: 'AI 自动审核', descEn: 'Auto review', color: 'indigo' },
  { icon: '📦', title: '订单管理', titleEn: 'Order Mgmt', desc: '全流程管理', descEn: 'Full lifecycle', color: 'blue' },
]

const case1PathC: WfNode[] = [
  { icon: '📢', title: 'AI投诉处理', titleEn: 'AI Complaints', desc: '智能分级处理', descEn: 'Smart triage', color: 'rose' },
  { icon: '🔺', title: '自动升级', titleEn: 'Auto Escalate', desc: '超时自动上报', descEn: 'Auto escalation', color: 'amber' },
  { icon: '😊', title: '满意度回访', titleEn: 'Satisfaction', desc: 'AI 自动回访', descEn: 'Auto follow-up', color: 'teal' },
]

// Case 2: Film - with feedback loops
const case2Nodes: WfNode[] = [
  { icon: '📈', title: '市场调研', titleEn: 'Market Research', desc: '行业数据分析', descEn: 'Industry analysis', color: 'emerald' },
  { icon: '🎯', title: '定向获客', titleEn: 'Lead Targeting', desc: '精准客户触达', descEn: 'Precise outreach', color: 'blue' },
  { icon: '💬', title: '需求沟通', titleEn: 'Requirements', desc: '深入了解需求', descEn: 'Deep understanding', color: 'cyan' },
  { icon: '📝', title: '脚本生成', titleEn: 'Script Gen', desc: 'AI 自动编剧', descEn: 'AI scripting', color: 'purple' },
  { icon: '🎬', title: '漫剧制作', titleEn: 'Production', desc: 'AI 画面生成', descEn: 'AI visuals', color: 'indigo' },
  { icon: '✅', title: '人工审核', titleEn: 'QC Review', desc: '质量把控', descEn: 'Quality check', color: 'amber' },
  { icon: '📦', title: '内容交付', titleEn: 'Delivery', desc: '成品输出', descEn: 'Final output', color: 'blue' },
  { icon: '🤝', title: '客户维护', titleEn: 'Client Care', desc: '持续服务', descEn: 'Ongoing service', color: 'emerald' },
  { icon: '🔄', title: '数据反馈', titleEn: 'Data Feedback', desc: '效果追踪', descEn: 'Performance tracking', color: 'teal' },
]

function Case1Workflow({ lang }: { lang: 'zh' | 'en' }) {
  return (
    <div className="space-y-4">
      {/* Entry flow */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {case1Entry.map((node, i) => (
          <div key={i} className="flex items-center gap-2">
            <NodeCard node={node} lang={lang} />
            {i < case1Entry.length - 1 && <ArrowRight />}
          </div>
        ))}
      </div>

      {/* Branch indicator */}
      <div className="flex items-start gap-0 overflow-x-auto pb-2">
        <div className="w-32 shrink-0" /> {/* spacer for alignment */}
        <BranchConnector />

        {/* Three parallel paths */}
        <div className="flex flex-col gap-4 md:gap-3">
          {/* Path A label + nodes */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-semibold text-purple-400 bg-purple-400/10 px-2 py-0.5 rounded shrink-0">A</span>
            {case1PathA.map((node, i) => (
              <div key={i} className="flex items-center gap-2">
                <NodeCard node={node} lang={lang} />
                {i < case1PathA.length - 1 && <ArrowRight />}
              </div>
            ))}
          </div>
          {/* Path B */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-semibold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded shrink-0">B</span>
            {case1PathB.map((node, i) => (
              <div key={i} className="flex items-center gap-2">
                <NodeCard node={node} lang={lang} />
                {i < case1PathB.length - 1 && <ArrowRight />}
              </div>
            ))}
          </div>
          {/* Path C */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-semibold text-rose-400 bg-rose-400/10 px-2 py-0.5 rounded shrink-0">C</span>
            {case1PathC.map((node, i) => (
              <div key={i} className="flex items-center gap-2">
                <NodeCard node={node} lang={lang} />
                {i < case1PathC.length - 1 && <ArrowRight />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: show paths vertically */}
      <div className="md:hidden space-y-3">
        <p className="text-xs text-muted-foreground font-semibold">{lang === 'zh' ? '分流为三条路径:' : 'Branches into 3 paths:'}</p>
        {[
          { label: 'A', nodes: case1PathA, color: 'text-purple-400' },
          { label: 'B', nodes: case1PathB, color: 'text-amber-400' },
          { label: 'C', nodes: case1PathC, color: 'text-rose-400' },
        ].map((path) => (
          <div key={path.label} className="space-y-1">
            <span className={`text-[10px] font-semibold ${path.color}`}>{lang === 'zh' ? '路径' : 'Path'} {path.label}</span>
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {path.nodes.map((node, i) => (
                <div key={i} className="flex items-center gap-2">
                  <NodeCard node={node} lang={lang} />
                  {i < path.nodes.length - 1 && <ArrowRight />}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Case2Workflow({ lang }: { lang: 'zh' | 'en' }) {
  // Row 1: nodes 0-4 (market research -> production)
  const row1 = case2Nodes.slice(0, 5)
  // Row 2: nodes 5-8 (QC review -> data feedback), displayed right to left to show the loop
  const row2 = case2Nodes.slice(5)

  return (
    <div className="space-y-3">
      {/* Row 1: left to right */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {row1.map((node, i) => (
          <div key={i} className="flex items-center gap-2">
            <NodeCard node={node} lang={lang} />
            {i < row1.length - 1 && <ArrowRight />}
          </div>
        ))}
      </div>

      {/* Connection: down arrow from last of row1 to first of row2 */}
      <div className="flex justify-end pr-4">
        <ArrowDown />
      </div>

      {/* Row 2: right-aligned, with loop indicators */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 flex-row-reverse justify-end">
        {[...row2].reverse().map((node, i) => (
          <div key={i} className="flex items-center gap-2 flex-row-reverse">
            <NodeCard node={node} lang={lang} />
            {i < row2.length - 1 && (
              <svg width="24" height="16" viewBox="0 0 24 16" className="text-muted-foreground shrink-0 rotate-180">
                <line x1="0" y1="8" x2="20" y2="8" stroke="currentColor" strokeWidth="1.5" />
                <polyline points="16,3 21,8 16,13" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            )}
          </div>
        ))}
      </div>

      {/* Feedback loops */}
      <div className="flex flex-col sm:flex-row gap-4 mt-2">
        <div className="flex items-center gap-2 text-xs text-amber-400 bg-amber-400/10 border border-amber-400/30 rounded-lg px-3 py-2">
          <span className="text-base">🔁</span>
          <span>{lang === 'zh' ? '人工审核不通过 -> 回到脚本生成' : 'QC Review failed -> Back to Script Gen'}</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-teal-400 bg-teal-400/10 border border-teal-400/30 rounded-lg px-3 py-2">
          <span className="text-base">🔁</span>
          <span>{lang === 'zh' ? '数据反馈 -> 回到市场调研' : 'Data Feedback -> Back to Market Research'}</span>
        </div>
      </div>
    </div>
  )
}

export default function CasesSection() {
  const { lang, t } = useLang()

  return (
    <section id="cases" className="py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <span className="text-xs font-medium text-primary uppercase tracking-wider">Real Cases</span>
        <h2 className="mt-4 text-2xl font-bold sm:text-3xl">{t('落地案例', 'Real Cases')}</h2>

        <div className="mt-12 space-y-16">
          {/* Case 1 */}
          <div className="space-y-6">
            <div className="flex items-start gap-3 sm:gap-4">
              <span className="text-4xl font-bold text-primary/20 sm:text-5xl">01</span>
              <div>
                <Badge variant="secondary">{t('物业行业', 'Property Management')}</Badge>
                <h3 className="text-xl font-bold mt-2">{t('智慧物业服务工作流', 'Smart Property Service Workflow')}</h3>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              {t(
                '一家物业公司找到 W\u00B3 Labs，希望用 AI 提升日常运营效率。我们帮他们匹配了专注楼宇物联网的 AI 开发团队，除了工单系统，还构建了 AI 商城（业主可通过 AI 直接购物）、AI 商家入驻审核、AI 派单等完整生态。',
                'A property company came to W\u00B3 Labs wanting to improve operational efficiency with AI. We matched them with an AI team specializing in building IoT, creating a complete ecosystem.'
              )}
            </p>
            <p className="text-sm font-semibold text-primary">{t('人工响应成本 \u2193 40% \u00B7 3个月内完成落地', 'Manual response cost \u2193 40% \u00B7 Deployed in 3 months')}</p>
            <Case1Workflow lang={lang} />
          </div>

          {/* Case 2 */}
          <div className="space-y-6">
            <div className="flex items-start gap-3 sm:gap-4">
              <span className="text-4xl font-bold text-primary/20 sm:text-5xl">02</span>
              <div>
                <Badge variant="secondary">{t('影视产业', 'Film & Media')}</Badge>
                <h3 className="text-xl font-bold mt-2">{t('AI 媒体内容生产工作流', 'AI Media Production Workflow')}</h3>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              {t(
                '面向食品产业园客户，一套从定向获客到内容制作、交付维护全流程的 AI 漫剧生产系统。同一架构可复用于跨境出海场景。',
                'A full-cycle AI comic production system for a food industry park client. Reusable for cross-border outreach.'
              )}
            </p>
            <p className="text-sm font-semibold text-primary">{t('全流程 AI 自动化 \u00B7 人力成本大幅压缩 \u00B7 架构可复用', 'Full-process automation \u00B7 Cost reduction \u00B7 Reusable architecture')}</p>
            <Case2Workflow lang={lang} />
          </div>
        </div>
      </div>
    </section>
  )
}
