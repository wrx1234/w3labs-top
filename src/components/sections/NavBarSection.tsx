'use client'

import { useLang } from '@/context/LangContext'
import { useDialog } from '@/context/DialogContext'
import { Menu, Sun, Moon, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { useTheme } from 'next-themes'

const navItems = [
  { zh: '社区', en: 'Community', href: '#mission' },
  { zh: '活动', en: 'Events', href: '#events' },
  { zh: '案例', en: 'Cases', href: '#cases' },
  { zh: '服务', en: 'Services', href: '#services' },
  { zh: '关于', en: 'About', href: '#partners' },
  { zh: '下载', en: 'Download', href: '/w3labs-brand-kit.zip', icon: true },
]

export default function NavBarSection() {
  const { lang, toggle, t } = useLang()
  const { openDialog } = useDialog()
  const { theme, setTheme } = useTheme()

  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <img src="/w3labs-logo.png" alt="W³ Labs" className="h-8" />
          </a>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1" {...(item.icon ? { download: true } : {})}>
                {item.icon && <Download className="size-3" />}
                {t(item.zh, item.en)}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
              {theme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </Button>
            <Button variant="ghost" size="sm" onClick={toggle}>{lang === 'zh' ? 'EN' : '中'}</Button>
            <Button variant="outline" size="sm" onClick={() => openDialog('community')}>{t('加入社群', 'Join')}</Button>
            <Button size="sm" onClick={() => openDialog('business')}>{t('商务合作', 'Business')}</Button>
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
              {theme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon"><Menu className="size-4" /></Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle><img src="/w3labs-logo.png" alt="W³ Labs" className="h-8" /></SheetTitle>
                </SheetHeader>
                <div className="my-6 flex flex-col gap-4">
                  {navItems.map((item) => (
                    <a key={item.href} href={item.href} className="font-semibold flex items-center gap-2" {...(item.icon ? { download: true } : {})}>
                      {item.icon && <Download className="size-4" />}
                      {t(item.zh, item.en)}
                    </a>
                  ))}
                  <hr className="border-border" />
                  <div className="flex flex-col gap-3">
                    <Button variant="ghost" size="sm" onClick={toggle}>{lang === 'zh' ? 'EN' : '中'}</Button>
                    <Button variant="outline" onClick={() => openDialog('community')}>{t('加入社群', 'Join')}</Button>
                    <Button onClick={() => openDialog('business')}>{t('商务合作', 'Business')}</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
