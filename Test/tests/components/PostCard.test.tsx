import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PostCard from '../../../FoodBlog/src/components/PostCard';
import type { Post } from '../../../FoodBlog/src/types';

const mockPost: Post = {
  id: '1',
  slug: 'test-recipe',
  title: 'Test Recipe Title',
  excerpt: 'A delicious test excerpt.',
  content: '## Test content\nSome content here.',
  category: 'breakfast',
  tags: ['eggs', 'brunch', 'classic'],
  author: {
    name: 'Sofia Hartley',
    avatar: 'https://i.pravatar.cc/150?img=47',
    bio: 'Passionate home cook.',
  },
  publishedAt: '2026-03-15',
  readingTime: 6,
  coverImage: 'https://example.com/cover.jpg',
  featured: false,
};

const renderCard = (featured = false) =>
  render(
    <MemoryRouter>
      <PostCard post={mockPost} featured={featured} />
    </MemoryRouter>
  );

describe('PostCard component', () => {
  it('renders the post title', () => {
    renderCard();
    expect(screen.getByText('Test Recipe Title')).toBeInTheDocument();
  });

  it('renders the post excerpt', () => {
    renderCard();
    expect(screen.getByText('A delicious test excerpt.')).toBeInTheDocument();
  });

  it('renders the author name', () => {
    renderCard();
    expect(screen.getByText('Sofia Hartley')).toBeInTheDocument();
  });

  it('renders the reading time', () => {
    renderCard();
    expect(screen.getByText('6 min read')).toBeInTheDocument();
  });

  it('renders the category label', () => {
    renderCard();
    expect(screen.getByText('breakfast')).toBeInTheDocument();
  });

  it('renders the cover image with correct alt text', () => {
    renderCard();
    const img = screen.getByAltText('Test Recipe Title') as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toContain('cover.jpg');
  });

  it('renders the author avatar with correct alt text', () => {
    renderCard();
    expect(screen.getByAltText('Sofia Hartley')).toBeInTheDocument();
  });

  it('renders up to 3 tags', () => {
    renderCard();
    expect(screen.getByText('eggs')).toBeInTheDocument();
    expect(screen.getByText('brunch')).toBeInTheDocument();
    expect(screen.getByText('classic')).toBeInTheDocument();
  });

  it('does not render a 4th tag when only 3 tags are shown', () => {
    const postWith5Tags: Post = { ...mockPost, tags: ['a', 'b', 'c', 'd', 'e'] };
    render(
      <MemoryRouter>
        <PostCard post={postWith5Tags} />
      </MemoryRouter>
    );
    expect(screen.queryByText('d')).not.toBeInTheDocument();
    expect(screen.queryByText('e')).not.toBeInTheDocument();
  });

  it('links title to correct post URL', () => {
    renderCard();
    const links = screen.getAllByRole('link', { name: 'Test Recipe Title' });
    expect(links.length).toBeGreaterThan(0);
    expect(links[0]).toHaveAttribute('href', '/blog/test-recipe');
  });

  it('applies post-card--featured class when featured=true', () => {
    const { container } = renderCard(true);
    expect(container.querySelector('.post-card--featured')).toBeInTheDocument();
  });

  it('does not apply post-card--featured class when featured=false', () => {
    const { container } = renderCard(false);
    expect(container.querySelector('.post-card--featured')).not.toBeInTheDocument();
  });

  it('renders a formatted publish date', () => {
    renderCard();
    // 2026-03-15 → "15 Mar 2026" in en-GB locale
    expect(screen.getByText(/Mar 2026/)).toBeInTheDocument();
  });
});
