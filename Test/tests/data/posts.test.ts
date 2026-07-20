import { describe, it, expect } from 'vitest';
import { posts } from '../../../FoodBlog/src/data/posts';

describe('posts data', () => {
  it('exports an array of posts', () => {
    expect(Array.isArray(posts)).toBe(true);
    expect(posts.length).toBeGreaterThan(0);
  });

  it('every post has all required fields', () => {
    for (const post of posts) {
      expect(post.id).toBeTruthy();
      expect(post.slug).toBeTruthy();
      expect(post.title).toBeTruthy();
      expect(post.excerpt).toBeTruthy();
      expect(post.content).toBeTruthy();
      expect(post.category).toBeTruthy();
      expect(Array.isArray(post.tags)).toBe(true);
      expect(post.author).toBeTruthy();
      expect(post.author.name).toBeTruthy();
      expect(post.author.avatar).toBeTruthy();
      expect(post.author.bio).toBeTruthy();
      expect(post.publishedAt).toBeTruthy();
      expect(typeof post.readingTime).toBe('number');
      expect(post.readingTime).toBeGreaterThan(0);
      expect(post.coverImage).toBeTruthy();
      expect(typeof post.featured).toBe('boolean');
    }
  });

  it('all post ids are unique', () => {
    const ids = posts.map((p) => p.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it('all post slugs are unique', () => {
    const slugs = posts.map((p) => p.slug);
    const uniqueSlugs = new Set(slugs);
    expect(uniqueSlugs.size).toBe(slugs.length);
  });

  it('all slugs are URL-safe (lowercase, hyphens only)', () => {
    for (const post of posts) {
      expect(post.slug).toMatch(/^[a-z0-9-]+$/);
    }
  });

  it('publishedAt dates are valid ISO date strings', () => {
    for (const post of posts) {
      const date = new Date(post.publishedAt);
      expect(date.toString()).not.toBe('Invalid Date');
    }
  });

  it('at least one post is featured', () => {
    const featured = posts.filter((p) => p.featured);
    expect(featured.length).toBeGreaterThan(0);
  });

  it('can find a post by slug', () => {
    const post = posts.find((p) => p.slug === 'classic-eggs-benedict');
    expect(post).toBeDefined();
    expect(post?.title).toBe('Classic Eggs Benedict with Hollandaise Sauce');
  });

  it('can filter posts by category', () => {
    const breakfastPosts = posts.filter((p) => p.category === 'breakfast');
    expect(breakfastPosts.length).toBeGreaterThan(0);
    for (const post of breakfastPosts) {
      expect(post.category).toBe('breakfast');
    }
  });

  it('every post has at least one tag', () => {
    for (const post of posts) {
      expect(post.tags.length).toBeGreaterThan(0);
    }
  });

  it('cover image URLs use https', () => {
    for (const post of posts) {
      expect(post.coverImage).toMatch(/^https:\/\//);
    }
  });

  it('contains posts for expected categories', () => {
    const categories = new Set(posts.map((p) => p.category));
    expect(categories.has('breakfast')).toBe(true);
    expect(categories.has('dinner')).toBe(true);
    expect(categories.has('desserts')).toBe(true);
    expect(categories.has('drinks')).toBe(true);
    expect(categories.has('snacks')).toBe(true);
    expect(categories.has('lunch')).toBe(true);
  });
});
