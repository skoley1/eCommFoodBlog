import { describe, it, expect } from 'vitest';
import { authors } from '../../../FoodBlog/src/data/authors';

describe('authors data', () => {
  it('exports an object map of authors', () => {
    expect(typeof authors).toBe('object');
    expect(authors).not.toBeNull();
  });

  it('contains the three expected authors', () => {
    expect(Object.keys(authors)).toContain('sofia');
    expect(Object.keys(authors)).toContain('marco');
    expect(Object.keys(authors)).toContain('priya');
    expect(Object.keys(authors).length).toBe(3);
  });

  it('every author has name, avatar and bio', () => {
    for (const author of Object.values(authors)) {
      expect(author.name).toBeTruthy();
      expect(author.avatar).toBeTruthy();
      expect(author.bio).toBeTruthy();
    }
  });

  it('all author names are non-empty strings', () => {
    for (const author of Object.values(authors)) {
      expect(typeof author.name).toBe('string');
      expect(author.name.trim().length).toBeGreaterThan(0);
    }
  });

  it('all avatar URLs use https', () => {
    for (const author of Object.values(authors)) {
      expect(author.avatar).toMatch(/^https:\/\//);
    }
  });

  it('sofia has correct name', () => {
    expect(authors.sofia.name).toBe('Sofia Hartley');
  });

  it('marco has correct name', () => {
    expect(authors.marco.name).toBe('Marco Ricci');
  });

  it('priya has correct name', () => {
    expect(authors.priya.name).toBe('Priya Nair');
  });

  it('all bios are descriptive (>20 chars)', () => {
    for (const author of Object.values(authors)) {
      expect(author.bio.length).toBeGreaterThan(20);
    }
  });
});
