import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from '../../../FoodBlog/src/components/Footer';

const renderFooter = () =>
  render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );

describe('Footer component', () => {
  it('renders the site brand name', () => {
    renderFooter();
    expect(screen.getAllByText('Savoury Stories').length).toBeGreaterThan(0);
  });

  it('renders the tagline', () => {
    renderFooter();
    expect(screen.getByText('Real recipes. Real flavours. Real joy.')).toBeInTheDocument();
  });

  it('renders "Explore" navigation links', () => {
    renderFooter();
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Recipes' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
  });

  it('renders category quick-links', () => {
    renderFooter();
    expect(screen.getByRole('link', { name: 'Breakfast' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Dinner' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Desserts' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Snacks' })).toBeInTheDocument();
  });

  it('category links point to correct filtered URLs', () => {
    renderFooter();
    expect(screen.getByRole('link', { name: 'Breakfast' })).toHaveAttribute('href', '/blog?category=breakfast');
    expect(screen.getByRole('link', { name: 'Dinner' })).toHaveAttribute('href', '/blog?category=dinner');
    expect(screen.getByRole('link', { name: 'Desserts' })).toHaveAttribute('href', '/blog?category=desserts');
    expect(screen.getByRole('link', { name: 'Snacks' })).toHaveAttribute('href', '/blog?category=snacks');
  });

  it('renders the current year in the copyright notice', () => {
    renderFooter();
    const currentYear = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(currentYear))).toBeInTheDocument();
  });

  it('renders the footer copyright text', () => {
    renderFooter();
    expect(screen.getAllByText(/Savoury Stories/).length).toBeGreaterThan(0);
  });

  it('renders "Explore" section heading', () => {
    renderFooter();
    expect(screen.getByText('Explore')).toBeInTheDocument();
  });

  it('renders "Categories" section heading', () => {
    renderFooter();
    expect(screen.getByText('Categories')).toBeInTheDocument();
  });
});
