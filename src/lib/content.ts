import type { CollectionEntry } from 'astro:content';

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(words / wordsPerMinute);
  return readingTime;
}

export function getRelatedPosts(
  currentPost: CollectionEntry<'blog'>,
  allPosts: CollectionEntry<'blog'>[],
  limit = 3
): CollectionEntry<'blog'>[] {
  const currentTags = currentPost.data.tags || [];
  
  if (currentTags.length === 0) {
    // If no tags, return most recent posts
    return allPosts
      .filter(post => post.id !== currentPost.id && !post.data.draft)
      .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
      .slice(0, limit);
  }

  // Calculate relevance score based on shared tags
  const postsWithScores = allPosts
    .filter(post => post.id !== currentPost.id && !post.data.draft)
    .map(post => {
      const postTags = post.data.tags || [];
      const sharedTags = currentTags.filter(tag => postTags.includes(tag));
      const score = sharedTags.length;
      return { post, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => {
      // Sort by score first, then by date
      if (a.score !== b.score) {
        return b.score - a.score;
      }
      return b.post.data.date.valueOf() - a.post.data.date.valueOf();
    });

  const relatedPosts = postsWithScores.slice(0, limit).map(({ post }) => post);

  // If we don't have enough related posts, fill with recent posts
  if (relatedPosts.length < limit) {
    const recentPosts = allPosts
      .filter(post => 
        post.id !== currentPost.id && 
        !post.data.draft &&
        !relatedPosts.some(related => related.id === post.id)
      )
      .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
      .slice(0, limit - relatedPosts.length);

    relatedPosts.push(...recentPosts);
  }

  return relatedPosts;
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}

export function groupPostsByYear(posts: CollectionEntry<'blog'>[]): Record<string, CollectionEntry<'blog'>[]> {
  return posts.reduce((acc, post) => {
    const year = post.data.date.getFullYear().toString();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {} as Record<string, CollectionEntry<'blog'>[]>);
}