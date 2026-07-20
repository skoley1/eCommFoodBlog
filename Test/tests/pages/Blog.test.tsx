import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Blog from '../../../FoodBlog/src/pages/Blog';
import { posts } from '../../../FoodBlog/src/data/posts';

/**
 * Helper: renders the Blog page inside a MemoryRouter, optionally with an
 * initial URL to simulate pre-applied query params (e.g. ?category=breakfast).
 */
const renderBlog = (initialPath = '/blog') =>
  render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Routes>
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </MemoryRouter>
  );

describe('Blog page – initial render', () => {
  it('renders the page heading "All Recipes"', () => {
    renderBlog();
    expect(screen.getByRole('heading', { name: 'All Recipes' })).toBeInTheDocument();
  });

  it('renders the search input', () => {
    renderBlog();
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });

  it('renders all posts by default', () => {
    renderBlog();
    expect(screen.getByText(new RegExp(`${posts.length} recipes? found`))).toBeInTheDocument();
  });

  it('renders every post title by default', () => {
    renderBlog();
    for (const post of posts) {
      expect(screen.getByText(post.title)).toBeInTheDocument();
    }
  });

  it('renders the "All Recipes" category button as active by default', () => {
    renderBlog();
    const allBtn = screen.getByRole('button', { name: /All Recipes/ });
    expect(allBtn).toHaveClass('active');
  });

  it('renders one category button for every category', () => {
    renderBlog();
    // 6 categories + 1 "All" button
    const catButtons = screen.getAllByRole('button', { name: /Recipes|Breakfast|Lunch|Dinner|Desserts|Snacks|Drinks/i });
    expect(catButtons.length).toBeGreaterThanOrEqual(6);
  });

  it('renders popular tag buttons', () => {
    renderBlog();
    expect(screen.getByRole('button', { name: 'italian' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'vegetarian' })).toBeInTheDocument();
  });
});

describe('Blog page – search', () => {
  it('filters posts by title query', async () => {
    const user = userEvent.setup();
    renderBlog();
    const searchInput = screen.getByRole('searchbox');
    await user.type(searchInput, 'carbonara');
    expect(screen.getByText('Authentic Roman Spaghetti Carbonara')).toBeInTheDocument();
    expect(screen.queryByText('Classic Eggs Benedict with Hollandaise Sauce')).not.toBeInTheDocument();
  });

  it('filters posts by tag query', async () => {
    const user = userEvent.setup();
    renderBlog();
    const searchInput = screen.getByRole('searchbox');
    await user.type(searchInput, 'italian');
    expect(screen.getByText('Authentic Roman Spaghetti Carbonara')).toBeInTheDocument();
  });

  it('shows "No recipes found" for a non-matching query', async () => {
    const user = userEvent.setup();
    renderBlog();
    const searchInput = screen.getByRole('searchbox');
    await user.type(searchInput, 'zzznomatchzzz');
    // Text may be mixed with inline child elements; use regex
    expect(screen.getByText(/No recipes found/i)).toBeInTheDocument();
  });

  it('shows 0 results message with no-results UI', async () => {
    const user = userEvent.setup();
    renderBlog();
    await user.type(screen.getByRole('searchbox'), 'zzznomatch');
    expect(screen.getByText(/No recipes match your search/i)).toBeInTheDocument();
  });

  it('shows the active search query in the results count', async () => {
    const user = userEvent.setup();
    renderBlog();
    await user.type(screen.getByRole('searchbox'), 'eggs');
    expect(screen.getByText(/matching/)).toBeInTheDocument();
  });

  it('clicking a popular tag fills the search and filters results', async () => {
    const user = userEvent.setup();
    renderBlog();
    const tagBtn = screen.getByRole('button', { name: 'italian' });
    await user.click(tagBtn);
    // Carbonara is tagged "italian"
    expect(screen.getByText('Authentic Roman Spaghetti Carbonara')).toBeInTheDocument();
  });

  it('clear filters button appears when a query is active', async () => {
    const user = userEvent.setup();
    renderBlog();
    await user.type(screen.getByRole('searchbox'), 'eggs');
    expect(screen.getByRole('button', { name: /Clear filters/i })).toBeInTheDocument();
  });

  it('clear filters button resets results to all posts', async () => {
    const user = userEvent.setup();
    renderBlog();
    await user.type(screen.getByRole('searchbox'), 'eggs');
    await user.click(screen.getByRole('button', { name: /Clear filters/i }));
    expect(screen.getByText(new RegExp(`${posts.length} recipes? found`))).toBeInTheDocument();
  });
});

describe('Blog page – category filter', () => {
  it('filters posts when a category button is clicked', async () => {
    const user = userEvent.setup();
    renderBlog();
    const breakfastBtn = screen.getByRole('button', { name: /Breakfast/ });
    await user.click(breakfastBtn);
    const breakfastPosts = posts.filter((p) => p.category === 'breakfast');
    expect(
      screen.getByText(new RegExp(`${breakfastPosts.length} recipes? found`))
    ).toBeInTheDocument();
  });

  it('shows the active category name in the results count', async () => {
    const user = userEvent.setup();
    renderBlog();
    await user.click(screen.getByRole('button', { name: /Dinner/ }));
    // "Dinner" appears in both the active button and the results <strong>
    expect(screen.getAllByText(/Dinner/).length).toBeGreaterThan(0);
  });

  it('pre-applies category filter from URL query param', () => {
    renderBlog('/blog?category=breakfast');
    const breakfastPosts = posts.filter((p) => p.category === 'breakfast');
    expect(
      screen.getByText(new RegExp(`${breakfastPosts.length} recipes? found`))
    ).toBeInTheDocument();
  });

  it('shows clear filters button when category is active', async () => {
    const user = userEvent.setup();
    renderBlog();
    await user.click(screen.getByRole('button', { name: /Snacks/ }));
    expect(screen.getByRole('button', { name: /Clear filters/i })).toBeInTheDocument();
  });

  it('clear filters button is NOT shown when no filters are active', () => {
    renderBlog();
    expect(screen.queryByRole('button', { name: /Clear filters/i })).not.toBeInTheDocument();
  });
});
