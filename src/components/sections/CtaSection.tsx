'use client'

import { useState, FormEvent } from 'react'
import { useLang } from '@/context/LangContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default function CtaSection() {
  const { t } = useLang()
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const name = formData.get('name') as string
    const city = formData.get('city') as string
    const org = formData.get('org') as string
    const contact = formData.get('contact') as string
    const reason = formData.get('reason') as string

    const subject = encodeURIComponent(`W³ Labs 活动申请 - ${city} - ${name}`)
    const body = encodeURIComponent(
      `姓名 / Name: ${name}\n目标城市 / City: ${city}\n组织 / Org: ${org}\n联系方式 / Contact: ${contact}\n申请理由 / Reason:\n${reason}`
    )
    window.open(`mailto:xuan13ie@gmail.com?subject=${subject}&body=${body}`)
    setSubmitted(true)
  }

  return (
    <section id="cta" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* CTA */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold">
            {t(<>下一站，<span className="text-primary">由你决定</span></>, <>The next stop is <span className="text-primary">yours</span></>)}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t(<>北京 · 上海 · 新加坡 · 旧金山<br/>你来定地点，我们来提供资源</>, <>Beijing · Shanghai · Singapore · San Francisco<br/>You pick the place, we bring the resources</>)}
          </p>
        </div>

        {/* Contact Form */}
        <div className="mx-auto max-w-screen-xl flex flex-col lg:flex-row gap-10 lg:gap-20">
          <div className="max-w-sm mx-auto lg:mx-0">
            <span className="text-xs font-medium text-primary uppercase tracking-wider">{t('全球活动申请', 'Global Event Application')}</span>
            <h3 className="text-3xl font-semibold mt-2">{t('在你的城市办一场 AI 社区活动', 'Host an AI Event in Your City')}</h3>
            <p className="mt-4 text-muted-foreground text-sm">
              {t('这是申请组织活动，而非参与活动。W³ Labs 提供内容、嘉宾与资源支持。', 'This is to organize an event, not attend. W³ Labs provides content, speakers, and resources.')}
            </p>
            <div className="mt-6">
              <p className="font-bold">{t('联系方式', 'Contact')}</p>
              <p className="text-sm text-muted-foreground mt-2">xuan13ie@gmail.com</p>
            </div>
          </div>

          {submitted ? (
            <div className="flex-1 flex items-center justify-center p-12 rounded-lg border">
              <div className="text-center">
                <span className="text-4xl">&#x2705;</span>
                <p className="text-lg font-semibold mt-4">{t('申请已提交！', 'Submitted!')}</p>
                <p className="text-sm text-muted-foreground mt-2">{t('我们会在 3 个工作日内与你联系。', 'We\'ll contact you within 3 business days.')}</p>
              </div>
            </div>
          ) : (
            <form className="flex-1 flex flex-col gap-6 rounded-lg border p-8" onSubmit={handleSubmit}>
              <div className="flex gap-4">
                <div className="grid w-full gap-1.5">
                  <Label htmlFor="name">{t('姓名', 'Name')} *</Label>
                  <Input id="name" name="name" required placeholder={t('你的姓名', 'Your name')} />
                </div>
                <div className="grid w-full gap-1.5">
                  <Label htmlFor="city">{t('目标城市', 'Target City')} *</Label>
                  <Input id="city" name="city" required placeholder={t('如：北京、新加坡', 'e.g., Beijing')} />
                </div>
              </div>
              <div className="grid w-full gap-1.5">
                <Label htmlFor="org">{t('组织 / 公司', 'Organization')}</Label>
                <Input id="org" name="org" placeholder={t('你的组织或公司', 'Your organization')} />
              </div>
              <div className="grid w-full gap-1.5">
                <Label htmlFor="contact">{t('联系方式（微信 / 邮件）', 'Contact (WeChat / Email)')} *</Label>
                <Input id="contact" name="contact" required placeholder={t('微信号或邮箱', 'WeChat or email')} />
              </div>
              <div className="grid w-full gap-1.5">
                <Label htmlFor="reason">{t('申请理由', 'Reason')} *</Label>
                <Textarea id="reason" name="reason" required placeholder={t('为什么想在你的城市办活动？', 'Why host in your city?')} />
              </div>
              <Button className="w-full">{t('提交申请', 'Submit Application')}</Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
