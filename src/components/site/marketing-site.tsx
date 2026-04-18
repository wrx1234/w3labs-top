import Link from 'next/link';
import Image from 'next/image';
import type { Locale } from '@/lib/i18n';
import { getCollection } from '@/lib/content';
import { pick, withLocale } from '@/lib/i18n';
import { siteConfig } from '@/data/site-config';

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="max-w-3xl">
      <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-primary">{eyebrow}</div>
      <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-8 text-muted-foreground">{description}</p> : null}
    </div>
  );
}

function LogoLockup() {
  return (
    <div className="flex items-center gap-3">
      <Image src="/assets/brand/logo-square-black.png" alt="W3Labs logo" width={44} height={44} className="block dark:hidden" />
      <Image src="/assets/brand/logo-square-white.png" alt="W3Labs logo" width={44} height={44} className="hidden dark:block" />
      <div className="leading-none">
        <div className="text-lg font-black tracking-[0.2em]">W3Labs</div>
        <div className="text-xs uppercase tracking-[0.24em] text-muted-foreground">AI + RWA</div>
      </div>
    </div>
  );
}

export function MarketingSite({ locale }: { locale: Locale }) {
  const contentEntries = getCollection(locale, 'content');
  const caseEntries = getCollection(locale, 'cases');
  const communityQr = pick(locale, siteConfig.contactAssets.community);
  const businessQr = pick(locale, siteConfig.contactAssets.business);

  return (
    <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 py-4">
          <Link href={withLocale(locale)}><LogoLockup /></Link>
          <nav className="hidden items-center gap-6 text-sm text-muted-foreground lg:flex">
            {siteConfig.nav.map((item) => (
              <a key={item.key} href={item.href} className="transition-colors hover:text-foreground">{pick(locale, item.label)}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link href={withLocale(locale, '/content/changsha-ai-agent-forum')} className="hidden rounded-full border border-border px-4 py-2 text-sm font-medium sm:inline-flex">{pick(locale, siteConfig.hero.primary)}</Link>
            <a href={siteConfig.mediaKitHref} className="rounded-full bg-primary px-4 py-2 text-sm font-bold text-black">{pick(locale, siteConfig.hero.secondary)}</a>
          </div>
        </div>
      </header>

      <main className="space-y-20 pt-10">
        <section className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:py-10">
          <div>
            <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-primary">{pick(locale, siteConfig.hero.eyebrow)}</div>
            <h1 className="mt-6 max-w-5xl text-5xl font-black tracking-tight sm:text-6xl">{pick(locale, siteConfig.hero.title)}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{pick(locale, siteConfig.hero.description)}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={withLocale(locale, '/content/changsha-ai-agent-forum')} className="rounded-full bg-primary px-5 py-3 font-bold text-black">{pick(locale, siteConfig.hero.primary)}</Link>
              <a href={siteConfig.mediaKitHref} className="rounded-full border border-border px-5 py-3 font-bold">{pick(locale, siteConfig.hero.secondary)}</a>
            </div>
          </div>
          <div className="rounded-[2rem] border border-primary/20 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.18),transparent_35%)] p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {Array.from({ length: 16 }).map((_, index) => (
                <div key={index} className="rounded-2xl border border-border/70 bg-card/60 p-4 text-sm text-muted-foreground">
                  {index % 4 === 0 ? 'Shenzhen' : index % 4 === 1 ? 'Hong Kong' : index % 4 === 2 ? 'Singapore' : 'Global'}
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">{locale === 'zh' ? '地球连线第一阶段先加密到 16 个连接节点，后续可以替换成真实交互 globe。' : 'Phase one densifies the globe motif into 16 connection nodes, leaving room for a richer interactive globe later.'}</p>
          </div>
        </section>

        <section id="mission" className="grid gap-4 lg:grid-cols-3">
          {siteConfig.mission.items.map((item) => (
            <div key={item.title.zh} className="rounded-[1.75rem] border border-border bg-card/50 p-6">
              <h3 className="text-xl font-bold">{pick(locale, item.title)}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{pick(locale, item.body)}</p>
            </div>
          ))}
        </section>

        <section id="rwa" className="space-y-8 rounded-[2rem] border border-primary/20 bg-card/50 p-8">
          <SectionTitle eyebrow={pick(locale, siteConfig.rwa.eyebrow)} title={pick(locale, siteConfig.rwa.title)} description={pick(locale, siteConfig.rwa.intro)} />
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-[1.5rem] border border-border bg-background/70 p-6">
              <h3 className="text-xl font-black">{pick(locale, siteConfig.rwa.caseTitle)}</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{pick(locale, siteConfig.rwa.caseBody)}</p>
              <Link href={withLocale(locale, '/cases/spacex-pre-ipo')} className="mt-5 inline-flex text-sm font-bold text-primary">{locale === 'zh' ? '查看案例详情' : 'Open case detail'}</Link>
            </div>
            <div className="grid gap-4">
              {siteConfig.rwa.flow.map((item) => (
                <div key={item.title.zh} className="rounded-[1.25rem] border border-border bg-background/70 p-5">
                  <h4 className="font-bold">{pick(locale, item.title)}</h4>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{pick(locale, item.body)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="content" className="space-y-8">
          <SectionTitle eyebrow={locale === 'zh' ? 'Content System' : 'Content System'} title={locale === 'zh' ? '活动与内容系统骨架' : 'Content and event system'} description={locale === 'zh' ? '先把独立子页面、Markdown 支持与 SEO 路由打通，再逐步对接后台配置、外链模式和表单流转。' : 'Phase one opens dedicated subpages, markdown support, and SEO routes, with admin controls, redirects, and forms to follow.'} />
          <div className="grid gap-4 lg:grid-cols-3">
            {contentEntries.map((entry) => (
              <Link key={entry.slug} href={withLocale(locale, `/content/${entry.slug}`)} className="rounded-[1.5rem] border border-border bg-card/50 p-6 transition hover:-translate-y-1 hover:border-primary/30">
                <div className="text-xs font-bold uppercase tracking-[0.24em] text-primary">{entry.type}</div>
                <h3 className="mt-3 text-xl font-black">{entry.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{entry.description}</p>
              </Link>
            ))}
            <div className="rounded-[1.5rem] border border-dashed border-border bg-card/40 p-6">
              <div className="text-xs font-bold uppercase tracking-[0.24em] text-primary">{locale === 'zh' ? '待补素材' : 'Asset placeholder'}</div>
              <h3 className="mt-3 text-xl font-black">{locale === 'zh' ? '中文人物图占位' : 'Chinese audience imagery placeholder'}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{locale === 'zh' ? '本阶段先留出结构，后续替换成更符合中文语境的人物图或 logo 卡片。' : 'A replaceable slot is reserved for more Chinese-market-friendly imagery or logo cards in the next pass.'}</p>
            </div>
          </div>
        </section>

        <section id="services" className="space-y-8">
          <SectionTitle eyebrow={locale === 'zh' ? 'Services' : 'Services'} title={pick(locale, siteConfig.services.title)} />
          <div className="grid gap-4 md:grid-cols-2">
            {siteConfig.services.items.map((item) => (
              <div key={item.title.zh} className="rounded-[1.5rem] border border-border bg-card/50 p-6">
                <h3 className="text-xl font-black">{pick(locale, item.title)}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{pick(locale, item.body)}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="cases" className="space-y-8">
          <SectionTitle eyebrow={locale === 'zh' ? 'Cases' : 'Cases'} title={pick(locale, siteConfig.cases.title)} />
          <div className="grid gap-4 lg:grid-cols-2">
            {siteConfig.cases.items.map((item) => (
              <Link key={item.slug} href={withLocale(locale, `/cases/${item.slug}`)} className="rounded-[1.5rem] border border-border bg-card/50 p-6">
                <div className="text-sm font-bold text-primary">{pick(locale, item.kicker)}</div>
                <h3 className="mt-2 text-2xl font-black">{pick(locale, item.name)}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{pick(locale, item.summary)}</p>
              </Link>
            ))}
            {caseEntries.length > 0 ? null : <div />}
          </div>
        </section>

        <section id="partners" className="space-y-8 rounded-[2rem] border border-border bg-card/40 p-8">
          <SectionTitle eyebrow={locale === 'zh' ? 'Network' : 'Network'} title={pick(locale, siteConfig.partners.title)} description={pick(locale, siteConfig.partners.note)} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.partners.items.map((item) => (
              <div key={item} className="rounded-[1.25rem] border border-border bg-background/70 p-5 text-sm font-semibold text-muted-foreground">{item}</div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          {[{ title: locale === 'zh' ? '加入社群' : 'Join community', image: communityQr }, { title: locale === 'zh' ? '商务合作' : 'Business inquiry', image: businessQr }].map((card) => (
            <div key={card.title} className="rounded-[2rem] border border-border bg-card/50 p-6">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-2xl font-black">{card.title}</h3>
                <a href={siteConfig.mediaKitHref} className="text-sm font-bold text-primary">Media Kit</a>
              </div>
              <div className="relative mt-5 overflow-hidden rounded-[1.5rem] border border-border bg-white/90 p-3">
                <Image src={card.image} alt={card.title} width={1200} height={1600} className="h-auto w-full rounded-xl object-contain" />
              </div>
            </div>
          ))}
        </section>
      </main>

      <footer className="mt-20 border-t border-border/70 py-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <LogoLockup />
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">{pick(locale, siteConfig.mission.description)}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: 'Media Kit', href: siteConfig.mediaKitHref },
              { label: locale === 'zh' ? '活动与内容' : 'Content', href: withLocale(locale, '/content/changsha-ai-agent-forum') },
              { label: 'RWA', href: withLocale(locale, '/#rwa') },
              { label: locale === 'zh' ? '案例详情' : 'Case detail', href: withLocale(locale, '/cases/spacex-pre-ipo') },
            ].map((item) => (
              <Link key={item.label} href={item.href} className="rounded-[1.25rem] border border-border bg-card/50 p-4 text-sm font-semibold text-muted-foreground">{item.label}</Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
