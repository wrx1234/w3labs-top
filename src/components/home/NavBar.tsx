'use client'
import { useState } from 'react'
import { useLang } from '@/context/LangContext'
import { Download, Menu, X } from 'lucide-react'
import BrandMark from '@/components/shared/brand-mark'
import { rootAnchors, siteResources } from '@/data/site-resources'

const navItems = [
  { zh: '社区', en: 'Community', href: rootAnchors.mission },
  { zh: 'RWA', en: 'RWA', href: rootAnchors.rwa },
  { zh: '活动', en: 'Events', href: rootAnchors.events },
  { zh: '案例', en: 'Cases', href: rootAnchors.cases },
  { zh: '服务', en: 'Services', href: rootAnchors.services },
  { zh: '伙伴', en: 'Partners', href: rootAnchors.partners },
  { zh: '下载', en: 'Media Kit', href: siteResources.mediaKit.href, download: true },
]

export default function NavBar() {
  const { lang, toggle, t } = useLang()
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="inline-flex items-center">
            <BrandMark imageClassName="h-10 w-auto" textClassName="text-lg font-semibold tracking-tight" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                {...(item.download ? { download: true } : {})}
              >
                {item.download && <Download size={14} />}
                {t(item.zh, item.en)}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggle}
              className="text-sm px-3 py-1.5 rounded-full border border-border hover:bg-muted transition-colors"
            >
              {lang === 'zh' ? 'EN' : '中'}
            </button>
            <a
              href={rootAnchors.cta}
              className="text-sm px-4 py-2 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
            >
              {t('加入社群', 'Join Community')}
            </a>
            <a
              href={rootAnchors.services}
              className="text-sm px-4 py-2 rounded-full bg-[#22C55E] text-white font-medium hover:opacity-90 transition-opacity"
            >
              {t('商务合作', 'Business')}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-sm text-muted-foreground hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {t(item.zh, item.en)}
              </a>
            ))}
            <hr className="border-border" />
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={toggle}
                className="text-sm px-3 py-1.5 rounded-full border border-border"
              >
                {lang === 'zh' ? 'EN' : '中'}
              </button>
              <a href={siteResources.mediaKit.href} download className="text-sm px-4 py-2 rounded-full bg-foreground text-background font-medium inline-flex items-center gap-2">
                <Download size={14} />
                {t('下载资料', 'Media Kit')}
              </a>
              <a href={rootAnchors.cta} className="text-sm px-4 py-2 rounded-full bg-foreground text-background font-medium">
                {t('加入社群', 'Join')}
              </a>
              <a href={rootAnchors.services} className="text-sm px-4 py-2 rounded-full bg-[#22C55E] text-white font-medium">
                {t('商务合作', 'Business')}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
