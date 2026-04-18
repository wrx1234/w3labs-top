import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';
import type { Locale } from '@/lib/i18n';

const contentDir = path.join(process.cwd(), 'src', 'content');

export type ContentCollection = 'content' | 'cases';

export type ContentEntry = {
  slug: string;
  locale: Locale;
  collection: ContentCollection;
  title: string;
  description: string;
  type: string;
  date?: string;
  cover?: string;
  redirect?: string;
  html: string;
};

function entryPath(collection: ContentCollection, locale: Locale, slug: string) {
  return path.join(contentDir, collection, locale, `${slug}.md`);
}

function parseEntry(filePath: string, collection: ContentCollection, locale: Locale): ContentEntry {
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  const slug = path.basename(filePath, '.md');

  return {
    slug,
    locale,
    collection,
    title: data.title ?? slug,
    description: data.description ?? '',
    type: data.type ?? collection,
    date: data.date,
    cover: data.cover,
    redirect: data.redirect,
    html: marked.parse(content) as string,
  };
}

export function getCollection(locale: Locale, collection: ContentCollection) {
  const dir = path.join(contentDir, collection, locale);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => parseEntry(path.join(dir, file), collection, locale));
}

export function getEntry(collection: ContentCollection, locale: Locale, slug: string) {
  const filePath = entryPath(collection, locale, slug);
  if (!fs.existsSync(filePath)) return null;
  return parseEntry(filePath, collection, locale);
}
