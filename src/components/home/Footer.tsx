'use client'
import { useLang } from '@/context/LangContext'
import BrandMark from '@/components/shared/brand-mark'
import { rootAnchors, siteResources } from '@/data/site-resources'

const footerNav = [
  {
    title: { zh: '社区', en: 'Community' },
    links: [
      { zh: '社区介绍', en: 'About Community', href: rootAnchors.mission },
      { zh: 'RWA 能力', en: 'RWA Capability', href: rootAnchors.rwa },
      { zh: '过往活动', en: 'Past Events', href: rootAnchors.events },
      { zh: '合作伙伴', en: 'Partners', href: rootAnchors.partners },
    ],
  },
  {
    title: { zh: '服务', en: 'Services' },
    links: [
      { zh: 'AI 落地撮合', en: 'AI Matchmaking', href: rootAnchors.services },
      { zh: 'AI 培训咨询', en: 'AI Training', href: rootAnchors.services },
      { zh: 'AI 定制开发', en: 'AI Development', href: rootAnchors.services },
      { zh: '政府合作 / AI 治理方案', en: 'Government / AI Enablement', href: '/pitch' },
      { zh: '品牌资料包', en: 'Media Kit', href: siteResources.mediaKit.href, download: true },
    ],
  },
  {
    title: { zh: '近期活动', en: 'Upcoming' },
    links: [
      { zh: '即将举办', en: 'Coming Soon', href: '/events', isNew: true },
      { zh: '申请在你的城市办活动', en: 'Host in Your City', href: rootAnchors.cta },
    ],
  },
  {
    title: { zh: '联系', en: 'Contact' },
    links: [
      { zh: '政府合作 & 活动联办', en: 'Government & Co-hosting', href: 'mailto:hello@w3labs.top' },
      { zh: '查看政府方案页', en: 'Open Gov / AI Deck', href: '/pitch' },
      { zh: 'xuan13ie@gmail.com', en: 'xuan13ie@gmail.com', href: 'mailto:xuan13ie@gmail.com' },
    ],
  },
]

export default function Footer() {
  const { lang } = useLang()

  return (
    <footer className="border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-4">
            <BrandMark imageClassName="h-10 w-auto" textClassName="text-xl font-semibold tracking-tight" />
          </div>
          {footerNav.map((group, i) => (
            <div key={i}>
              <h4 className="font-semibold text-sm mb-4">
                {lang === 'zh' ? group.title.zh : group.title.en}
              </h4>
              <ul className="space-y-2">
                {group.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      {...('download' in link && link.download ? { download: true } : {})}
                    >
                      {lang === 'zh' ? link.zh : link.en}
                      {'isNew' in link && link.isNew && (
                        <span className="ml-2 text-xs px-1.5 py-0.5 rounded bg-[#22C55E] text-white font-medium">
                          NEW
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; 2026 W³ Labs. All rights reserved.</p>
          <p>
            {lang === 'zh'
              ? '全球合作 · 赞助支持 · xuan13ie@gmail.com'
              : 'Global Partnerships · Sponsorship · xuan13ie@gmail.com'}
          </p>
        </div>
      </div>
    </footer>
  )
}
