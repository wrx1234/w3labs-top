import { notFound, redirect } from 'next/navigation';
import { ContentPage } from '@/components/site/content-page';
import { getEntry } from '@/lib/content';
import { isLocale } from '@/lib/i18n';

export default function ContentDetailPage({ params }: { params: { locale: string; slug: string } }) {
  if (!isLocale(params.locale)) notFound();
  const entry = getEntry('content', params.locale, params.slug);
  if (!entry) notFound();
  if (entry.redirect) redirect(entry.redirect);
  return <ContentPage entry={entry} locale={params.locale} />;
}
