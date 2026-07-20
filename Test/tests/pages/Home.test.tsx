import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../../../FoodBlog/src/pages/Home';
import { posts } from '../../../FoodBlog/src/data/posts';
import { categories } from '../../../FoodBlog/src/data/categories';

const renderHome = () =>
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

describe('Home page', () => {
  it('renders the hero headline', () => {
    renderHome();
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders the hero label text', () => {
    renderHome();
    expect(screen.getByText('A Food Blog Worth Bookmarking')).toBeInTheDocument();
  });

  it('renders the hero sub-heading description', () => {
    renderHome();
    expect(screen.getByText(/From slow-cooked Italian classics/)).toBeInTheDocument();
  });

  it('renders "Browse Recipes" CTA button', () => {
    renderHome();
    expect(screen.getByRole('link', { name: 'Browse Recipes' })).toHaveAttribute('href', '/blog');
  });

  it('renders "Meet the Team" CTA button', () => {
    renderHome();
    expect(screen.getByRole('link', { name: 'Meet the Team' })).toHaveAttribute('href', '/about');
  });

  it('renders the "Featured Recipes" section heading', () => {
    renderHome();
    expect(screen.getByRole('heading', { name: 'Featured Recipes' })).toBeInTheDocument();
  });

  it('renders all featured posts', () => {
    renderHome();
    const featuredPosts = posts.filter((p) => p.featured);
    for (const post of featuredPosts) {
      // A post may appear in both Featured and Latest sections
      expect(screen.getAllByText(post.title).length).toBeGreaterThan(0);
    }
  });

  it('renders the "Browse by Category" section heading', () => {
    renderHome();
    expect(screen.getByRole('heading', { name: 'Browse by Category' })).toBeInTheDocument();
  });

  it('renders all category badges', () => {
    renderHome();
    for (const cat of categories) {
      expect(screen.getByText(cat.name)).toBeInTheDocument();
    }
  });

  it('renders the "Latest Recipes" section heading', () => {
    renderHome();
    expect(screen.getByRole('heading', { name: 'Latest Recipes' })).toBeInTheDocument();
  });

  it('renders the first 4 posts as recent posts', () => {
    renderHome();
    const recentPosts = posts.slice(0, 4);
    for (const post of recentPosts) {
      // A post may appear in both Featured and Latest sections
      expect(screen.getAllByText(post.title).length).toBeGreaterThan(0);
    }
  });

  it('renders the CTA banner section', () => {
    renderHome();
    expect(screen.getByRole('heading', { name: 'New recipes every week' })).toBeInTheDocument();
  });

  it('renders "Explore All Recipes" link in CTA banner pointing to /blog', () => {
    renderHome();
    expect(screen.getByRole('link', { name: 'Explore All Recipes' })).toHaveAttribute('href', '/blog');
  });
});
