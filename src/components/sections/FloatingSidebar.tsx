'use client'

import { useLang } from '@/context/LangContext'
import { useDialog } from '@/context/DialogContext'

export default function FloatingSidebar() {
  const { t } = useLang()
  const { openDialog } = useDialog()

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2">
      <button onClick={() => openDialog('community')} className="bg-foreground text-background px-2 py-6 rounded-l-lg text-xs font-medium hover:opacity-90 transition-opacity" style={{ writingMode: 'vertical-rl' }}>
        {t('加入社群', 'Join Us')}
      </button>
      <button onClick={() => openDialog('business')} className="bg-primary text-primary-foreground px-2 py-6 rounded-l-lg text-xs font-medium hover:opacity-90 transition-opacity" style={{ writingMode: 'vertical-rl' }}>
        {t('商务合作', 'Business')}
      </button>
    </div>
  )
}
