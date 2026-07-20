import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import PostDetail from '../../../FoodBlog/src/pages/PostDetail';
import { posts } from '../../../FoodBlog/src/data/posts';

/**
 * Renders PostDetail inside a MemoryRouter with the given slug in the URL.
 */
const renderDetail = (slug: string) =>
  render(
    <MemoryRouter initialEntries={[`/blog/${slug}`]}>
      <Routes>
        <Route path="/blog/:slug" element={<PostDetail />} />
        <Route path="/blog" element={<div data-testid="blog-page">Blog Page</div>} />
      </Routes>
    </MemoryRouter>
  );

describe('PostDetail page – valid slug', () => {
  const post = posts[0]; // classic-eggs-benedict

  it('renders the post title', () => {
    renderDetail(post.slug);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(post.title);
  });

  it('renders the post excerpt', () => {
    renderDetail(post.slug);
    expect(screen.getByText(post.excerpt)).toBeInTheDocument();
  });

  it('renders the author name', () => {
    renderDetail(post.slug);
    // Author name appears in both the cover meta and the sidebar card
    expect(screen.getAllByText(post.author.name).length).toBeGreaterThan(0);
  });

  it('renders the category label', () => {
    renderDetail(post.slug);
    // category appears in cover overlay
    expect(screen.getAllByText(post.category).length).toBeGreaterThan(0);
  });

  it('renders the reading time', () => {
    renderDetail(post.slug);
    expect(screen.getByText(new RegExp(`${post.readingTime} min read`))).toBeInTheDocument();
  });

  it('renders the post tags', () => {
    renderDetail(post.slug);
    for (const tag of post.tags) {
      expect(screen.getByText(tag)).toBeInTheDocument();
    }
  });

  it('renders a "Back to Recipes" link pointing to /blog', () => {
    renderDetail(post.slug);
    expect(
      screen.getByRole('link', { name: /Back to Recipes/i })
    ).toHaveAttribute('href', '/blog');
  });

  it('renders the author bio in the sidebar', () => {
    renderDetail(post.slug);
    expect(screen.getByText(post.author.bio)).toBeInTheDocument();
  });

  it('renders parsed markdown content — h2 headings appear', () => {
    renderDetail(post.slug);
    // Content starts with "## The Ultimate Weekend Brunch"
    expect(screen.getByRole('heading', { name: 'The Ultimate Weekend Brunch' })).toBeInTheDocument();
  });

  it('renders parsed markdown content — h3 headings appear', () => {
    renderDetail(post.slug);
    expect(screen.getByRole('heading', { name: /Ingredients/i })).toBeInTheDocument();
  });
});

describe('PostDetail page – invalid slug', () => {
  it('redirects to /blog when slug does not exist', () => {
    renderDetail('this-slug-does-not-exist');
    expect(screen.getByTestId('blog-page')).toBeInTheDocument();
  });
});

describe('PostDetail page – related posts', () => {
  it('shows related posts sidebar when same-category posts exist', () => {
    // post id=2 is spaghetti-carbonara (dinner), and butter-chicken id=5 is also dinner
    renderDetail('spaghetti-carbonara');
    expect(screen.getByText(/More dinner recipes/i)).toBeInTheDocument();
  });

  it('shows related post links in the sidebar', () => {
    renderDetail('spaghetti-carbonara');
    // Butter chicken is in dinner too
    expect(
      screen.getByRole('link', { name: /Restaurant-Style Butter Chicken/i })
    ).toBeInTheDocument();
  });
});
