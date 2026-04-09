'use client'
import { useState } from 'react'
import { useLang } from '@/context/LangContext'
import { Menu, X } from 'lucide-react'

const navItems = [
  { zh: '社区', en: 'Community', href: '#mission' },
  { zh: '活动', en: 'Events', href: '#events' },
  { zh: '案例', en: 'Cases', href: '#cases' },
  { zh: '服务', en: 'Services', href: '#services' },
  { zh: '关于', en: 'About', href: '#partners' },
]

export default function NavBar() {
  const { lang, toggle, t } = useLang()
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="text-xl font-bold tracking-tight">
            W³ Labs
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
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
              href="#cta"
              className="text-sm px-4 py-2 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
            >
              {t('加入社群', 'Join Community')}
            </a>
            <a
              href="#services"
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
              <a href="#cta" className="text-sm px-4 py-2 rounded-full bg-foreground text-background font-medium">
                {t('加入社群', 'Join')}
              </a>
              <a href="#services" className="text-sm px-4 py-2 rounded-full bg-[#22C55E] text-white font-medium">
                {t('商务合作', 'Business')}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
