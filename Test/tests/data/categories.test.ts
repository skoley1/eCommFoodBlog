import { describe, it, expect } from 'vitest';
import { categories } from '../../../FoodBlog/src/data/categories';

describe('categories data', () => {
  it('exports an array of categories', () => {
    expect(Array.isArray(categories)).toBe(true);
    expect(categories.length).toBeGreaterThan(0);
  });

  it('contains the 6 expected categories', () => {
    expect(categories.length).toBe(6);
  });

  it('every category has all required fields', () => {
    for (const cat of categories) {
      expect(cat.id).toBeTruthy();
      expect(cat.name).toBeTruthy();
      expect(cat.slug).toBeTruthy();
      expect(cat.description).toBeTruthy();
      expect(cat.emoji).toBeTruthy();
    }
  });

  it('all category ids are unique', () => {
    const ids = categories.map((c) => c.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('all category slugs are unique', () => {
    const slugs = categories.map((c) => c.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('all slugs are lowercase URL-safe strings', () => {
    for (const cat of categories) {
      expect(cat.slug).toMatch(/^[a-z0-9-]+$/);
    }
  });

  it('includes breakfast, lunch, dinner, desserts, snacks, drinks', () => {
    const slugs = categories.map((c) => c.slug);
    expect(slugs).toContain('breakfast');
    expect(slugs).toContain('lunch');
    expect(slugs).toContain('dinner');
    expect(slugs).toContain('desserts');
    expect(slugs).toContain('snacks');
    expect(slugs).toContain('drinks');
  });

  it('can find a category by slug', () => {
    const cat = categories.find((c) => c.slug === 'dinner');
    expect(cat).toBeDefined();
    expect(cat?.name).toBe('Dinner');
    expect(cat?.emoji).toBeTruthy();
  });

  it('all descriptions are non-empty strings', () => {
    for (const cat of categories) {
      expect(typeof cat.description).toBe('string');
      expect(cat.description.length).toBeGreaterThan(0);
    }
  });
});
