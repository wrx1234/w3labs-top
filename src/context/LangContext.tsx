'use client'
import { createContext, useContext, useState, ReactNode } from 'react'
type Lang = 'zh' | 'en'
interface LangContextType { lang: Lang; toggle: () => void; t: <T extends ReactNode>(zh: T, en: T) => T }
const LangContext = createContext<LangContextType>({ lang: 'zh', toggle: () => {}, t: (zh) => zh })
export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('zh')
  const toggle = () => setLang(l => l === 'zh' ? 'en' : 'zh')
  const t = <T extends ReactNode>(zh: T, en: T): T => lang === 'zh' ? zh : en
  return <LangContext.Provider value={{ lang, toggle, t }}>{children}</LangContext.Provider>
}
export const useLang = () => useContext(LangContext)
