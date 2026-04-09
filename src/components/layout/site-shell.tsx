"use client";

import Link from "next/link";
import { MoonStar, Languages, SunMedium, ArrowUpRight } from "lucide-react";
import { useTheme } from "next-themes";
import { siteCopy } from "@/data/site-copy";
import { useSite } from "@/components/providers/site-provider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function FloatingRail() {
  const { locale, toggleLocale, t } = useSite();
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
      <button
        onClick={toggleLocale}
        className="flex items-center gap-2 rounded-full border border-border bg-background/90 px-4 py-3 text-xs font-semibold shadow-lg backdrop-blur"
        aria-label="toggle locale"
      >
        <Languages className="h-4 w-4 text-primary" />
        {locale.toUpperCase()}
      </button>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="flex items-center gap-2 rounded-full border border-border bg-background/90 px-4 py-3 text-xs font-semibold shadow-lg backdrop-blur"
        aria-label="toggle theme"
      >
        {theme === "dark" ? <SunMedium className="h-4 w-4 text-primary" /> : <MoonStar className="h-4 w-4 text-primary" />}
        {t({ zh: "主题", en: "Theme" })}
      </button>
      <Link
        href="/events"
        className="group flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-xs font-black text-primary-foreground shadow-lg"
      >
        {t({ zh: "活动报名", en: "Join event" })}
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </Link>
    </div>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FloatingRail />
      <div className="mx-auto min-h-screen max-w-[1600px] px-4 sm:px-6 lg:px-8">{children}</div>
    </>
  );
}

export function Banner() {
  const { t } = useSite();

  return (
    <div className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex max-w-[1600px] items-center justify-center gap-3 px-4 py-3 text-center text-sm text-muted-foreground sm:px-6 lg:px-8">
        <span className="rounded-full bg-primary px-2.5 py-1 text-xs font-black uppercase tracking-[0.24em] text-black">
          {t(siteCopy.banner.badge)}
        </span>
        <p>{t(siteCopy.banner.text)}</p>
      </div>
    </div>
  );
}

export function NavBar() {
  const { locale, toggleLocale, t } = useSite();
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-[53px] z-30 py-4">
      <div className="flex items-center justify-between rounded-full border border-border bg-background/85 px-4 py-3 shadow-sm backdrop-blur">
        <Link href="/" className="text-lg font-black tracking-tight">
          {siteCopy.brand}
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
          {siteCopy.nav.items.map((item) => (
            <Link key={item.href} href={item.href} className="text-muted-foreground transition-colors hover:text-foreground">
              {t(item.label)}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={toggleLocale} className="rounded-full">
            <Languages className="mr-2 h-4 w-4 text-primary" />
            {locale.toUpperCase()}
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="rounded-full">
            {theme === "dark" ? <SunMedium className="h-4 w-4 text-primary" /> : <MoonStar className="h-4 w-4 text-primary" />}
          </Button>
          <Link href="/events" className={cn("rounded-full bg-primary px-4 py-2 text-sm font-black text-black shadow-sm transition hover:opacity-90", "hidden sm:inline-flex")}>
            {t({ zh: "立即报名", en: "Register now" })}
          </Link>
        </div>
      </div>
    </header>
  );
}
