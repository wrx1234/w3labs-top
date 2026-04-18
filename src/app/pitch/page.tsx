import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'W3Labs Pitch',
  description: 'W3Labs pitch deck and supporting materials.',
}

export default function PitchPage() {
  return (
    <main className="min-h-screen bg-background">
      <iframe
        src="/pitch-static/index.html"
        title="W3Labs Pitch"
        className="h-[100dvh] w-full border-0"
      />
    </main>
  )
}
