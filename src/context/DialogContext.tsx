'use client'
import { createContext, useContext, useState, ReactNode } from 'react'
import { useLang } from '@/context/LangContext'
import { X } from 'lucide-react'
import { siteResources } from '@/data/site-resources'

type DialogType = 'community' | 'business' | null

interface DialogContextType {
  openDialog: (type: 'community' | 'business') => void
}

const DialogContext = createContext<DialogContextType>({ openDialog: () => {} })

export function DialogProvider({ children }: { children: ReactNode }) {
  const { lang } = useLang()
  const [dialog, setDialog] = useState<DialogType>(null)
  const localized =
    dialog === 'community'
      ? siteResources.contacts.community[lang]
      : dialog === 'business'
        ? siteResources.contacts.business[lang]
        : null

  return (
    <DialogContext.Provider value={{ openDialog: setDialog }}>
      {children}

      {dialog && localized && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={() => setDialog(null)}>
          <div className="bg-background rounded-2xl p-6 max-w-sm w-full mx-4 relative shadow-2xl border border-border" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setDialog(null)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
              <X size={20} />
            </button>
            <div className="text-center space-y-4">
              <h3 className="text-lg font-bold">{localized.title}</h3>
              <div className="mx-auto w-full max-w-[220px] overflow-hidden rounded-xl border border-border bg-muted/30 p-3">
                <img
                  src={localized.image}
                  alt={localized.title}
                  className="h-auto w-full rounded-lg object-contain"
                />
              </div>
              <p className="text-sm leading-6 text-muted-foreground">{localized.subtitle}</p>
              <p className="text-sm font-medium text-foreground">{localized.contact}</p>
            </div>
          </div>
        </div>
      )}
    </DialogContext.Provider>
  )
}

export const useDialog = () => useContext(DialogContext)
