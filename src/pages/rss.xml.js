import rss from '@astrojs/rss';
import { byNewest } from '../data/site';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const entries = (await getCollection('log')).sort(byNewest);
  return rss({
    title: 'Paul Alejo: working log',
    description: 'What I built, tested and learned on my way into AWS cloud engineering.',
    site: context.site,
    items: entries.map((e) => ({
      title: e.data.title,
      pubDate: e.data.date,
      description: e.data.summary,
      link: `/log/${e.id}/`,
    })),
  });
}
