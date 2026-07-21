import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import About from '../../../FoodBlog/src/pages/About';
import { authors } from '../../../FoodBlog/src/data/authors';
import { posts } from '../../../FoodBlog/src/data/posts';

const renderAbout = () =>
  render(
    <MemoryRouter>
      <About />
    </MemoryRouter>
  );

describe('About page', () => {
  it('renders the page heading', () => {
    renderAbout();
    expect(screen.getByRole('heading', { name: 'About Food@eComm' })).toBeInTheDocument();
  });

  it('renders the sub-headline', () => {
    renderAbout();
    expect(
      screen.getByText('Five cooks, one blog, and a shared passion for putting great food on the table.')
    ).toBeInTheDocument();
  });

  it('renders the "How it started" section', () => {
    renderAbout();
    expect(screen.getByRole('heading', { name: 'How it started' })).toBeInTheDocument();
  });

  it('renders the "Meet the Contributors" section', () => {
    renderAbout();
    expect(screen.getByRole('heading', { name: 'Meet the Contributors' })).toBeInTheDocument();
  });

  it('renders every author name', () => {
    renderAbout();
    for (const author of Object.values(authors)) {
      expect(screen.getByText(author.name)).toBeInTheDocument();
    }
  });

  it('renders every author bio', () => {
    renderAbout();
    for (const author of Object.values(authors)) {
      expect(screen.getByText(author.bio)).toBeInTheDocument();
    }
  });

  it('renders author recipe counts', () => {
    renderAbout();
    for (const author of Object.values(authors)) {
      const count = posts.filter((p) => p.author.name === author.name).length;
      // Multiple authors may share the same count value; use getAllByText
      expect(screen.getAllByText(count.toString()).length).toBeGreaterThan(0);
    }
  });

  it('renders the "What we stand for" section', () => {
    renderAbout();
    expect(screen.getByRole('heading', { name: 'What we stand for' })).toBeInTheDocument();
  });

  it('renders all four value cards', () => {
    renderAbout();
    expect(screen.getByText('Quality Ingredients')).toBeInTheDocument();
    expect(screen.getByText('Precise Measurements')).toBeInTheDocument();
    expect(screen.getByText('Honest Photography')).toBeInTheDocument();
    expect(screen.getByText('Minimal Waste')).toBeInTheDocument();
  });

  it('renders the CTA banner with "Ready to cook something great?"', () => {
    renderAbout();
    expect(screen.getByRole('heading', { name: 'Ready to cook something great?' })).toBeInTheDocument();
  });

  it('renders the "Explore Recipes" CTA link pointing to /blog', () => {
    renderAbout();
    expect(screen.getByRole('link', { name: 'Explore Recipes' })).toHaveAttribute('href', '/blog');
  });

  it('CTA banner mentions the total number of posts', () => {
    renderAbout();
    expect(screen.getByText(new RegExp(`${posts.length}`))).toBeInTheDocument();
  });

  it('renders the story philosophy quote', () => {
    renderAbout();
    expect(screen.getByText(/cook with intention, eat with joy/i)).toBeInTheDocument();
  });
});
