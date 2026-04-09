'use client'
import { useState } from 'react'
import { useLang } from '@/context/LangContext'
import { X } from 'lucide-react'

type DialogType = 'community' | 'business' | null

export default function FloatingSidebar() {
  const { t } = useLang()
  const [dialog, setDialog] = useState<DialogType>(null)

  return (
    <>
      {/* Sidebar buttons */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2 hidden lg:flex">
        <button
          onClick={() => setDialog('community')}
          className="bg-foreground text-background px-2 py-6 rounded-l-lg text-xs font-medium hover:opacity-90 transition-opacity"
          style={{ writingMode: 'vertical-rl' }}
        >
          {t('加入社群', 'Join Us')}
        </button>
        <button
          onClick={() => setDialog('business')}
          className="bg-[#22C55E] text-white px-2 py-6 rounded-l-lg text-xs font-medium hover:opacity-90 transition-opacity"
          style={{ writingMode: 'vertical-rl' }}
        >
          {t('商务合作', 'Business')}
        </button>
      </div>

      {/* Dialog overlay */}
      {dialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={() => setDialog(null)}>
          <div
            className="bg-background rounded-2xl p-8 max-w-sm w-full mx-4 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setDialog(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              <X size={20} />
            </button>

            {dialog === 'community' ? (
              <div className="text-center space-y-4">
                <h3 className="text-lg font-bold">{t('加入社群', 'Join Community')}</h3>
                <div className="w-48 h-48 mx-auto bg-muted rounded-xl flex items-center justify-center text-muted-foreground text-sm">
                  {t('二维码待补充', 'QR Code Coming Soon')}
                </div>
                <p className="text-sm text-muted-foreground">
                  {t('扫码加入，领取免费 AI 学习资料', 'Scan to join and get free AI learning resources')}
                </p>
              </div>
            ) : (
              <div className="text-center space-y-4">
                <h3 className="text-lg font-bold">{t('商务合作', 'Business Cooperation')}</h3>
                <div className="w-48 h-48 mx-auto bg-muted rounded-xl flex items-center justify-center text-muted-foreground text-sm">
                  {t('二维码待补充', 'QR Code Coming Soon')}
                </div>
                <p className="text-sm text-muted-foreground">
                  {t('AI 咨询 · 撮合合作 · 全球对接', 'AI Consulting · Matchmaking · Global Connections')}
                </p>
                <p className="text-sm font-medium">xuan13ie@gmail.com</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export { FloatingSidebar }
