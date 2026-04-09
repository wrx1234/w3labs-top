'use client'
import { createContext, useContext, useState, ReactNode } from 'react'
import { useLang } from '@/context/LangContext'
import { X } from 'lucide-react'

type DialogType = 'community' | 'business' | null

interface DialogContextType {
  openDialog: (type: 'community' | 'business') => void
}

const DialogContext = createContext<DialogContextType>({ openDialog: () => {} })

export function DialogProvider({ children }: { children: ReactNode }) {
  const { t } = useLang()
  const [dialog, setDialog] = useState<DialogType>(null)

  return (
    <DialogContext.Provider value={{ openDialog: setDialog }}>
      {children}

      {dialog && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={() => setDialog(null)}>
          <div className="bg-background rounded-2xl p-8 max-w-sm w-full mx-4 relative shadow-2xl border border-border" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setDialog(null)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
              <X size={20} />
            </button>
            {dialog === 'community' ? (
              <div className="text-center space-y-4">
                <h3 className="text-lg font-bold">{t('加入社群', 'Join Community')}</h3>
                <div className="w-48 h-48 mx-auto bg-muted rounded-xl flex items-center justify-center text-muted-foreground text-sm">{t('二维码待补充', 'QR Coming Soon')}</div>
                <p className="text-sm text-muted-foreground">{t('扫码加入，领取免费 AI 学习资料', 'Scan to join & get free AI learning resources')}</p>
              </div>
            ) : (
              <div className="text-center space-y-4">
                <h3 className="text-lg font-bold">{t('商务合作', 'Business')}</h3>
                <div className="w-48 h-48 mx-auto bg-muted rounded-xl flex items-center justify-center text-muted-foreground text-sm">{t('二维码待补充', 'QR Coming Soon')}</div>
                <p className="text-sm text-muted-foreground">{t('AI 咨询 · 撮合合作 · 全球对接', 'AI Consulting · Matching · Global')}</p>
                <p className="text-sm font-medium">xuan13ie@gmail.com</p>
              </div>
            )}
          </div>
        </div>
      )}
    </DialogContext.Provider>
  )
}

export const useDialog = () => useContext(DialogContext)
