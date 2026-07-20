import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CategoryBadge from '../../../FoodBlog/src/components/CategoryBadge';
import type { Category } from '../../../FoodBlog/src/types';

const mockCategory: Category = {
  id: '1',
  name: 'Breakfast',
  slug: 'breakfast',
  description: 'Start your day right with wholesome morning recipes.',
  emoji: '🥞',
};

const renderBadge = (cat = mockCategory) =>
  render(
    <MemoryRouter>
      <CategoryBadge category={cat} />
    </MemoryRouter>
  );

describe('CategoryBadge component', () => {
  it('renders the category name', () => {
    renderBadge();
    expect(screen.getByText('Breakfast')).toBeInTheDocument();
  });

  it('renders the category description', () => {
    renderBadge();
    expect(screen.getByText('Start your day right with wholesome morning recipes.')).toBeInTheDocument();
  });

  it('renders the category emoji', () => {
    renderBadge();
    expect(screen.getByText('🥞')).toBeInTheDocument();
  });

  it('links to the correct category filter URL', () => {
    renderBadge();
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/blog?category=breakfast');
  });

  it('renders different category data correctly', () => {
    const dinnerCat: Category = {
      id: '3',
      name: 'Dinner',
      slug: 'dinner',
      description: 'Hearty and comforting evening feasts.',
      emoji: '🍝',
    };
    renderBadge(dinnerCat);
    expect(screen.getByText('Dinner')).toBeInTheDocument();
    expect(screen.getByText('🍝')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/blog?category=dinner');
  });

  it('applies the category-badge class to the link', () => {
    const { container } = renderBadge();
    expect(container.querySelector('.category-badge')).toBeInTheDocument();
  });

  it('renders emoji inside the category-badge__emoji span', () => {
    const { container } = renderBadge();
    const emojiSpan = container.querySelector('.category-badge__emoji');
    expect(emojiSpan).toBeInTheDocument();
    expect(emojiSpan?.textContent).toBe('🥞');
  });
});
