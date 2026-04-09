export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background">
      <div className="relative">
        <div className="h-16 w-16 rounded-full border-4 border-muted animate-spin border-t-primary" />
      </div>
      <p className="mt-6 text-xl font-semibold tracking-tight">W³ Labs</p>
      <p className="mt-2 text-sm text-muted-foreground animate-pulse">Loading...</p>
    </div>
  )
}
