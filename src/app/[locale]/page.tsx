import { notFound } from 'next/navigation';
import { MarketingSite } from '@/components/site/marketing-site';
import { isLocale } from '@/lib/i18n';

export default function LocaleHomePage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  return <MarketingSite locale={params.locale} />;
}
