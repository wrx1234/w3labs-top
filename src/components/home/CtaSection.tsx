'use client'
import { useState } from 'react'
import { useLang } from '@/context/LangContext'

export default function CtaSection() {
  const { t } = useLang()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', city: '', org: '', contact: '', reason: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="cta" className="bg-foreground text-background py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold">
            {t(
              <>下一步，<span className="text-[#22C55E]">由你决定</span></>,
              <>The next step is <span className="text-[#22C55E]">yours</span></>
            )}
          </h2>
          <p className="mt-4 text-lg opacity-70">
            {t(
              <>北京 · 上海 · 新加坡 · 旧金山<br/>你来定地点，我们来提供资源</>,
              <>Beijing · Shanghai · Singapore · San Francisco<br/>You pick the place, we bring the resources</>
            )}
          </p>
          <div className="flex items-center justify-center gap-4 mt-8">
            <button className="px-8 py-3 rounded-full bg-[#22C55E] text-white font-medium hover:opacity-90 transition-opacity">
              {t('加入社群', 'Join Community')}
            </button>
            <button className="px-8 py-3 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-colors">
              {t('商务合作', 'Business')}
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="max-w-xl mx-auto">
          <span className="text-xs font-medium text-[#22C55E] uppercase tracking-wider">
            {t('全球活动申请', 'Global Event Application')}
          </span>
          <h3 className="text-2xl font-bold mt-3">
            {t('在你的城市办一场 AI 社区活动', 'Host an AI Community Event in Your City')}
          </h3>
          <p className="text-sm opacity-60 mt-2">
            {t(
              '这是申请组织活动，而非参与活动。W³ Labs 提供内容、嘉宾与资源支持。',
              'This is to organize an event, not to attend one. W³ Labs provides content, speakers, and resource support.'
            )}
          </p>

          {submitted ? (
            <div className="mt-8 p-8 rounded-2xl bg-white/10 text-center">
              <span className="text-4xl">✅</span>
              <p className="text-lg font-semibold mt-4">
                {t('申请已提交！', 'Application Submitted!')}
              </p>
              <p className="text-sm opacity-70 mt-2">
                {t('我们会在 3 个工作日内与你联系。', 'We\'ll contact you within 3 business days.')}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div>
                <label className="text-sm opacity-70">{t('姓名', 'Name')} *</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full mt-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#22C55E]/50"
                />
              </div>
              <div>
                <label className="text-sm opacity-70">{t('目标城市', 'Target City')} *</label>
                <input
                  required
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  placeholder={t('如：北京、新加坡', 'e.g., Beijing, Singapore')}
                  className="w-full mt-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#22C55E]/50"
                />
              </div>
              <div>
                <label className="text-sm opacity-70">{t('组织 / 公司', 'Organization / Company')}</label>
                <input
                  value={form.org}
                  onChange={(e) => setForm({ ...form, org: e.target.value })}
                  className="w-full mt-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#22C55E]/50"
                />
              </div>
              <div>
                <label className="text-sm opacity-70">{t('联系方式（微信 / 邮件）', 'Contact (WeChat / Email)')} *</label>
                <input
                  required
                  value={form.contact}
                  onChange={(e) => setForm({ ...form, contact: e.target.value })}
                  className="w-full mt-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#22C55E]/50"
                />
              </div>
              <div>
                <label className="text-sm opacity-70">{t('申请理由', 'Reason for Application')} *</label>
                <textarea
                  required
                  rows={4}
                  value={form.reason}
                  onChange={(e) => setForm({ ...form, reason: e.target.value })}
                  className="w-full mt-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#22C55E]/50 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-full bg-[#22C55E] text-white font-medium hover:opacity-90 transition-opacity"
              >
                {t('提交申请', 'Submit Application')}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
