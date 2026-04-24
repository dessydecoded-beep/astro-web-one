import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;

export async function getBlogPosts() {
  return getCollection('blog');
}

export async function getSortedBlogPosts() {
  const posts = await getBlogPosts();

  return sortBlogPostsByNewest(posts);
}

export function sortBlogPostsByNewest(posts: BlogPost[]) {
  return [...posts].sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}
