import { notFound, redirect } from 'next/navigation';
import { isLocale } from '@/lib/i18n';

export default function LocaleEventsPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  redirect(`/${params.locale}/content/changsha-ai-agent-forum`);
}
