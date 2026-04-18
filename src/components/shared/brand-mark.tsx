'use client'

type BrandMarkProps = {
  className?: string
  imageClassName?: string
  textClassName?: string
}

export default function BrandMark({
  className = '',
  imageClassName = 'h-10 w-auto',
  textClassName = 'text-xl font-semibold tracking-tight',
}: BrandMarkProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span className="relative inline-flex items-center">
        <img
          src="/assets/brand/logo-square-black.png"
          alt="W3Labs"
          className={`${imageClassName} dark:hidden`}
        />
        <img
          src="/assets/brand/logo-square-white.png"
          alt="W3Labs"
          className={`${imageClassName} hidden dark:block`}
        />
      </span>
      <span className={`${textClassName} text-foreground`}>
        W3Labs
      </span>
    </span>
  )
}
