'use client'

import { useLang } from '@/context/LangContext'
import { useDialog } from '@/context/DialogContext'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckIcon, SparklesIcon, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

function FilledCheck() {
  return (
    <div className="bg-primary text-primary-foreground rounded-full p-0.5">
      <CheckIcon className="size-3" strokeWidth={3} />
    </div>
  )
}

export default function ServicesSection() {
  const { t } = useLang()
  const { openDialog } = useDialog()

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold">{t('服务报价', 'Our Services')}</h2>
        <p className="mt-2 text-muted-foreground">{t('社区是我们的根，但我们也帮真实的业务发生。', 'The community is our foundation. Real business is what grows from it.')}</p>

        <div className="mt-12 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-8">
          {/* Featured card */}
          <div className={cn("relative w-full overflow-hidden rounded-md border border-primary/30 lg:col-span-5")}>
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none" />
            {/* Grid decoration */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            <div className="relative flex items-center gap-3 p-4">
              <Badge variant="secondary">{t('AI 落地撮合', 'AI MATCHMAKING')}</Badge>
              <Badge variant="outline" className="hidden lg:flex"><SparklesIcon className="me-1 size-3" />{t('核心服务', 'Featured')}</Badge>
              <div className="ml-auto"><Button onClick={() => openDialog('business')}>{t('洽谈合作', 'Contact Us')}</Button></div>
            </div>
            <div className="relative flex flex-col p-4 lg:flex-row">
              <div className="pb-4 lg:w-[30%]">
                <span className="font-mono text-5xl font-semibold tracking-tight">¥20K</span>
                <span className="text-muted-foreground text-sm">/case</span>
              </div>
              <ul className="text-muted-foreground grid gap-4 text-sm lg:w-[70%]">
                {[
                  t('需求深度梳理', 'Deep requirement analysis'),
                  t('精准团队匹配', 'Precise team matching'),
                  t('全程项目陪跑', 'Full project support'),
                  t('落地效果保障', 'Delivery guarantee'),
                ].map((f, i) => (
                  <li key={i} className="flex items-center gap-3"><FilledCheck /><span className="leading-relaxed">{f}</span></li>
                ))}
              </ul>
            </div>
            <div className="relative px-4 pb-4">
              <p className="text-xs text-muted-foreground border-t border-border pt-3">
                {t('适合：传统企业、创业公司', 'For: Traditional businesses & startups')}
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-background border-foreground/10 relative overflow-hidden rounded-md border lg:col-span-3">
            <div className="flex items-center gap-3 p-4">
              <Badge variant="secondary">{t('AI 培训咨询', 'AI TRAINING')}</Badge>
              <div className="ml-auto"><Button variant="outline" onClick={() => openDialog('business')}>{t('洽谈合作', 'Contact Us')}</Button></div>
            </div>
            <div className="flex items-end gap-2 px-4 py-2">
              <span className="font-mono text-5xl font-semibold tracking-tight">¥500</span>
              <span className="text-muted-foreground text-sm">/hour</span>
            </div>
            <ul className="text-muted-foreground grid gap-4 p-4 text-sm">
              {[t('管理层 AI 认知课', 'Executive AI awareness'), t('行业定制内训', 'Industry training'), t('工具选型建议', 'Tool selection')].map((f, i) => (
                <li key={i} className="flex items-center gap-3"><FilledCheck /><span>{f}</span></li>
              ))}
            </ul>
            <div className="px-4 pb-4">
              <p className="text-xs text-muted-foreground border-t border-border pt-3">
                {t('适合：企业管理层与团队', 'For: Executive teams')}
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-background border-foreground/10 relative overflow-hidden rounded-md border lg:col-span-4">
            <div className="flex items-center gap-3 p-4">
              <Badge variant="secondary">{t('AI 定制开发', 'CUSTOM AI')}</Badge>
              <div className="ml-auto"><Button variant="outline" onClick={() => openDialog('business')}>{t('洽谈合作', 'Contact Us')}</Button></div>
            </div>
            <div className="flex items-end gap-2 px-4 py-2">
              <span className="font-mono text-5xl font-semibold tracking-tight">¥50K</span>
              <span className="text-muted-foreground text-sm">/case</span>
            </div>
            <ul className="text-muted-foreground grid gap-4 p-4 text-sm">
              {[t('AI 智能客服系统', 'AI customer service'), t('业务自动化流程', 'Business automation'), t('行业专属 AI 工具', 'Industry AI tools')].map((f, i) => (
                <li key={i} className="flex items-center gap-3"><FilledCheck /><span>{f}</span></li>
              ))}
            </ul>
            <div className="px-4 pb-4">
              <p className="text-xs text-muted-foreground border-t border-border pt-3">
                {t('适合：有明确AI需求的企业', 'For: Enterprises with defined AI needs')}
              </p>
            </div>
          </div>

          {/* Card 4 - Contact CTA */}
          <div className="bg-background border-foreground/10 relative overflow-hidden rounded-md border lg:col-span-4 flex items-center justify-center p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none" />
            <div className="relative text-center space-y-4">
              <p className="text-lg font-semibold">{t('有合作想法？', 'Have a project in mind?')}</p>
              <p className="text-sm text-muted-foreground">{t('和我们聊聊你的需求，获取免费评估方案', 'Tell us your needs and get a free assessment')}</p>
              <Button size="lg" onClick={() => openDialog('business')}>
                {t('立即咨询', 'Get in Touch')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
