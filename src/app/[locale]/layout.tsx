import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale, type Locale } from '@/lib/i18n';
import { siteConfig } from '@/data/site-config';

export function generateStaticParams() {
  return [{ locale: 'zh' }, { locale: 'en' }];
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const seo = siteConfig.seo[params.locale as Locale];
  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: `/${params.locale}`,
      languages: {
        'zh-CN': '/zh',
        en: '/en',
      },
    },
  };
}

export default function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: { locale: string } }>) {
  if (!isLocale(params.locale)) notFound();
  return children;
}
