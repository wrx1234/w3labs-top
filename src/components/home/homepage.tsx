"use client";

import Link from "next/link";
import { ArrowRight, Globe2, Sparkles, Orbit, Building2, Cpu, ChevronRight } from "lucide-react";
import { siteCopy } from "@/data/site-copy";
import { useSite } from "@/components/providers/site-provider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="mb-4 inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-primary">{children}</div>;
}

function GlobeWireframe() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px] overflow-hidden rounded-[2rem] border border-primary/20 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.16),transparent_58%)]">
      <div className="absolute inset-8 rounded-full border border-primary/40" />
      <div className="absolute inset-16 rounded-full border border-primary/25" />
      <div className="absolute left-1/2 top-8 h-[calc(100%-4rem)] w-px -translate-x-1/2 bg-primary/40" />
      <div className="absolute left-8 top-1/2 h-px w-[calc(100%-4rem)] -translate-y-1/2 bg-primary/40" />
      <div className="absolute inset-x-14 top-1/3 h-px bg-primary/25" />
      <div className="absolute inset-x-14 bottom-1/3 h-px bg-primary/25" />
      <div className="absolute left-1/2 top-1/2 h-[82%] w-[48%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/25" />
      <div className="absolute left-1/2 top-1/2 h-[82%] w-[26%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/25" />
      <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-2xl" />
      <div className="absolute left-10 top-10 rounded-full border border-primary/20 bg-background/70 px-3 py-1 text-xs font-semibold text-muted-foreground backdrop-blur">
        Shenzhen → Global
      </div>
      <div className="absolute bottom-10 right-10 flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-black text-black shadow-lg">
        <Globe2 className="h-4 w-4" />
        W³ Signal Network
      </div>
    </div>
  );
}

export function HomePage() {
  const { t } = useSite();

  return (
    <main className="space-y-6 pb-20">
      <section className="grid min-h-[82vh] items-center gap-10 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
        <div>
          <SectionLabel>{t(siteCopy.hero.eyebrow)}</SectionLabel>
          <h1 className="max-w-4xl text-5xl font-black tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            {t(siteCopy.hero.title)}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{t(siteCopy.hero.description)}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {siteCopy.hero.hints.map((hint) => (
              <span key={hint.zh} className="rounded-full bg-primary px-3 py-1 text-sm font-black text-black">
                {t(hint)}
              </span>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/events"><Button size="lg" className="text-black">{t(siteCopy.hero.primary)}<ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <Link href="#services"><Button size="lg" variant="outline">{t(siteCopy.hero.secondary)}</Button></Link>
          </div>
        </div>
        <GlobeWireframe />
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {siteCopy.stats.map((item) => (
          <Card key={item.value} className="border-primary/15 bg-card/70">
            <CardContent>
              <div className="text-4xl font-black text-primary">{item.value}</div>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{t(item.label)}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section id="mission" className="grid gap-6 rounded-[2rem] border border-border bg-card/40 p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
        <div>
          <SectionLabel>{t({ zh: "Mission", en: "Mission" })}</SectionLabel>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">{t(siteCopy.mission.title)}</h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">{t(siteCopy.mission.description)}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {siteCopy.mission.cards.map((card, index) => (
            <Card key={card.title.zh}>
              <CardContent className="space-y-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  {index === 0 ? <Orbit className="h-5 w-5" /> : index === 1 ? <Building2 className="h-5 w-5" /> : <Cpu className="h-5 w-5" />}
                </div>
                <h3 className="text-lg font-bold">{t(card.title)}</h3>
                <p className="text-sm leading-7 text-muted-foreground">{t(card.body)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="content" className="py-8">
        <SectionLabel>{t({ zh: "Content", en: "Content" })}</SectionLabel>
        <h2 className="text-3xl font-black tracking-tight sm:text-4xl">{t(siteCopy.content.title)}</h2>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {siteCopy.content.items.map((item) => (
            <Card key={item.title.zh}>
              <CardContent>
                <h3 className="text-xl font-bold">{t(item.title)}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{t(item.body)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="services" className="py-8">
        <SectionLabel>{t({ zh: "Services", en: "Services" })}</SectionLabel>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">{t(siteCopy.services.title)}</h2>
          <p className="max-w-xl text-sm leading-7 text-muted-foreground">{t({ zh: "四条主线互相协同, 形成从认知、增长到交付的完整飞轮。", en: "Four coordinated service lines build a flywheel from awareness to growth to delivery." })}</p>
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {siteCopy.services.items.map((item) => (
            <Card key={item.id} className="group border-border transition hover:-translate-y-1 hover:border-primary/40">
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-black text-black">{t(item.badge)}</span>
                  <ChevronRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1" />
                </div>
                <h3 className="text-2xl font-black">{t(item.title)}</h3>
                <p className="text-sm leading-7 text-muted-foreground">{t(item.body)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="cases" className="py-8">
        <SectionLabel>{t({ zh: "Cases", en: "Cases" })}</SectionLabel>
        <h2 className="text-3xl font-black tracking-tight sm:text-4xl">{t(siteCopy.cases.title)}</h2>
        <div className="mt-8 grid gap-4 xl:grid-cols-3">
          {siteCopy.cases.items.map((item) => (
            <Card key={item.title.zh} className="bg-[linear-gradient(180deg,rgba(34,197,94,0.08),transparent_35%)]">
              <CardContent>
                <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-bold text-primary">{t(item.tag)}</span>
                <h3 className="mt-4 text-xl font-black">{t(item.title)}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{t(item.body)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="partners" className="py-8">
        <SectionLabel>{t({ zh: "Partners", en: "Partners" })}</SectionLabel>
        <div className="grid gap-4 rounded-[2rem] border border-border bg-card/40 p-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">{t(siteCopy.partners.title)}</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">{t({ zh: "持续对接全球模型、云基础设施与生态伙伴, 为活动和项目交付建立更稳的支撑。", en: "Working with model, cloud, and ecosystem partners to build stronger support for events and delivery." })}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {siteCopy.partners.items.map((item) => (
              <div key={item} className="flex min-h-28 items-center justify-center rounded-3xl border border-border bg-background px-4 text-center text-lg font-bold text-foreground">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-primary/20 bg-[linear-gradient(135deg,rgba(34,197,94,0.16),rgba(34,197,94,0.04))] p-8 lg:p-12">
        <div className="max-w-3xl">
          <SectionLabel>{t({ zh: "CTA", en: "CTA" })}</SectionLabel>
          <h2 className="text-3xl font-black tracking-tight sm:text-5xl">{t(siteCopy.cta.title)}</h2>
          <p className="mt-5 text-base leading-8 text-muted-foreground">{t(siteCopy.cta.body)}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="mailto:hello@w3labs.top"><Button size="lg" className="text-black">{t(siteCopy.cta.primary)}</Button></Link>
            <Link href="/events"><Button variant="outline" size="lg">{t(siteCopy.cta.secondary)}</Button></Link>
          </div>
        </div>
      </section>

      <footer className="rounded-[2rem] border border-border bg-card/40 p-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-2xl font-black">{siteCopy.brand}</p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">{t(siteCopy.footer.governmentBody)}</p>
            <div className="mt-4 inline-flex rounded-full bg-primary px-3 py-1 text-sm font-black text-black">{t(siteCopy.footer.government)}</div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {siteCopy.footer.links.map((item) => (
              <div key={item.value} className="rounded-3xl border border-border bg-background p-4">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">{t(item.label)}</p>
                <p className="mt-3 text-sm font-medium text-muted-foreground">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex items-center gap-2 border-t border-border pt-6 text-sm text-muted-foreground">
          <Sparkles className="h-4 w-4 text-primary" />
          {t(siteCopy.footer.copyright)}
        </div>
      </footer>
    </main>
  );
}
