'use client'

import { useLang } from '@/context/LangContext'
import BrandMark from '@/components/shared/brand-mark'
import { rootAnchors, siteResources } from '@/data/site-resources'

export default function FooterSection() {
  const { t } = useLang()

  const menuItems = [
    { title: t('社区', 'Community'), links: [
      { text: t('社区介绍', 'About'), url: rootAnchors.mission },
      { text: t('RWA 能力', 'RWA Capability'), url: rootAnchors.rwa },
      { text: t('过往活动', 'Past Events'), url: rootAnchors.events },
      { text: t('合作伙伴', 'Partners'), url: rootAnchors.partners },
    ]},
    { title: t('服务', 'Services'), links: [
      { text: t('AI 落地撮合', 'AI Matchmaking'), url: rootAnchors.services },
      { text: t('AI 培训咨询', 'AI Training'), url: rootAnchors.services },
      { text: t('AI 定制开发', 'AI Development'), url: rootAnchors.services },
      { text: t('政府合作 / AI 治理方案', 'Government / AI Enablement'), url: '/pitch' },
      { text: t('品牌资料包', 'Media Kit'), url: siteResources.mediaKit.href, download: true },
    ]},
    { title: t('近期活动', 'Upcoming'), links: [
      { text: t('即将举办', 'Coming Soon'), url: '/events', badge: 'NEW' },
      { text: t('申请办活动', 'Host in Your City'), url: rootAnchors.cta },
    ]},
    { title: t('联系', 'Contact'), links: [
      { text: t('政府合作 & 活动联办', 'Government & Co-hosting'), url: 'mailto:hello@w3labs.top' },
      { text: t('查看政府方案页', 'Open Gov / AI Deck'), url: '/pitch' },
      { text: 'xuan13ie@gmail.com', url: 'mailto:xuan13ie@gmail.com' },
    ]},
  ]

  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
          <div className="col-span-2 mb-8 lg:mb-0">
            <BrandMark imageClassName="h-11 w-auto" textClassName="text-xl font-semibold tracking-tight" />
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              {t(
                'W³ Labs 是领先的 AI 应用与产业落地社区。我们链接传统行业与 AI 能力，帮助真正懂行业的人用 AI 颠覆自己的领域。',
                'W³ Labs is a leading community for applied AI and industry transformation.'
              )}
            </p>
          </div>
          {menuItems.map((section, i) => (
            <div key={i}>
              <h3 className="mb-4 font-bold text-sm">{section.title}</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {section.links.map((link, j) => (
                  <li key={j} className="hover:text-primary transition-colors">
                    <a href={link.url} {...('download' in link && link.download ? { download: true } : {})}>
                      {link.text}
                      {'badge' in link && link.badge && (
                        <span className="ml-2 text-xs px-1.5 py-0.5 rounded bg-primary text-primary-foreground font-medium">{link.badge}</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground">
          <p>&copy; 2026 W³ Labs. All rights reserved.</p>
          <p>{t('全球合作 · 赞助支持 · xuan13ie@gmail.com', 'Global Partnerships · Sponsorship · xuan13ie@gmail.com')}</p>
        </div>
      </div>
    </footer>
  )
}
