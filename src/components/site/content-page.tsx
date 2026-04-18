import Link from 'next/link';
import type { ContentEntry } from '@/lib/content';
import type { Locale } from '@/lib/i18n';
import { withLocale } from '@/lib/i18n';

export function ContentPage({ entry, locale }: { entry: ContentEntry; locale: Locale }) {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <Link href={withLocale(locale)} className="text-sm font-bold text-primary">← {locale === 'zh' ? '返回首页' : 'Back to home'}</Link>
      <article className="mt-6 rounded-[2rem] border border-border bg-card/40 p-8 sm:p-10">
        <div className="text-xs font-bold uppercase tracking-[0.24em] text-primary">{entry.type}</div>
        <h1 className="mt-3 text-4xl font-black tracking-tight">{entry.title}</h1>
        <p className="mt-4 text-base leading-8 text-muted-foreground">{entry.description}</p>
        <div className="prose prose-neutral mt-10 max-w-none dark:prose-invert prose-headings:font-black prose-p:leading-8" dangerouslySetInnerHTML={{ __html: entry.html }} />
      </article>
    </div>
  );
}
