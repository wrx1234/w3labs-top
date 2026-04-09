"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export interface MagicTextProps {
  text: string
}

interface ClauseProps {
  children: string
  progress: ReturnType<typeof useScroll>['scrollYProgress']
  range: number[]
}

const highlightKeywords = (text: string) => {
  const keywords = ['链接', '从业者', '痛点', 'AI', 'W³ Labs']
  const regex = new RegExp(`(${keywords.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g')
  const parts = text.split(regex)

  return parts.map((part, i) => {
    if (keywords.includes(part)) {
      return <span key={i} className="text-primary font-bold">{part}</span>
    }
    return <React.Fragment key={i}>{part}</React.Fragment>
  })
}

const Clause: React.FC<ClauseProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1])
  return (
    <span className="relative mt-[12px] mr-1 text-3xl font-semibold">
      <span className="absolute opacity-20">{highlightKeywords(children)}</span>
      <motion.span style={{ opacity }}>{highlightKeywords(children)}</motion.span>
    </span>
  )
}

const splitIntoClauses = (text: string): string[] => {
  // Check if text contains Chinese characters
  const hasChinese = /[\u4e00-\u9fff]/.test(text)

  if (hasChinese) {
    // Split by Chinese punctuation, keeping the punctuation attached to the preceding clause
    const clauses = text.split(/(?<=[，。！？；、：])/g).filter(c => c.trim().length > 0)
    return clauses.length > 0 ? clauses : [text]
  }

  // For English, split by spaces as before
  return text.split(" ")
}

export const MagicText: React.FC<MagicTextProps> = ({ text }) => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  })
  const clauses = splitIntoClauses(text)

  return (
    <p ref={container} className="flex flex-wrap leading-[0.5] p-4">
      {clauses.map((clause, i) => {
        const start = i / clauses.length
        const end = start + 1 / clauses.length
        return <Clause key={i} progress={scrollYProgress} range={[start, end]}>{clause}</Clause>
      })}
    </p>
  )
}
