import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Header from '../../../FoodBlog/src/components/Header';

const renderHeader = () =>
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

describe('Header component', () => {
  it('renders the site logo text', () => {
    renderHeader();
    expect(screen.getByText('Food@eComm')).toBeInTheDocument();
  });

  it('renders the logo icon', () => {
    renderHeader();
    expect(screen.getByText('🍴')).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    renderHeader();
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Recipes' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
  });

  it('navigation links point to correct routes', () => {
    renderHeader();
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'Recipes' })).toHaveAttribute('href', '/blog');
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about');
  });

  it('renders the mobile menu toggle button', () => {
    renderHeader();
    expect(screen.getByRole('button', { name: /toggle menu/i })).toBeInTheDocument();
  });

  it('mobile menu is closed by default (nav does not have open class)', () => {
    const { container } = renderHeader();
    expect(container.querySelector('.main-nav.open')).not.toBeInTheDocument();
  });

  it('opens mobile menu when toggle is clicked', async () => {
    const user = userEvent.setup();
    const { container } = renderHeader();
    const toggle = screen.getByRole('button', { name: /toggle menu/i });
    await user.click(toggle);
    expect(container.querySelector('.main-nav.open')).toBeInTheDocument();
  });

  it('closes mobile menu on a second toggle click', async () => {
    const user = userEvent.setup();
    const { container } = renderHeader();
    const toggle = screen.getByRole('button', { name: /toggle menu/i });
    await user.click(toggle);
    await user.click(toggle);
    expect(container.querySelector('.main-nav.open')).not.toBeInTheDocument();
  });

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup();
    const { container } = renderHeader();
    const toggle = screen.getByRole('button', { name: /toggle menu/i });
    await user.click(toggle);
    expect(container.querySelector('.main-nav.open')).toBeInTheDocument();
    const homeLink = screen.getByRole('link', { name: 'Home' });
    await user.click(homeLink);
    expect(container.querySelector('.main-nav.open')).not.toBeInTheDocument();
  });

  it('toggle button gets "open" class when menu is open', async () => {
    const user = userEvent.setup();
    const { container } = renderHeader();
    const toggle = screen.getByRole('button', { name: /toggle menu/i });
    await user.click(toggle);
    expect(container.querySelector('.menu-toggle.open')).toBeInTheDocument();
  });

  it('logo link points to "/"', () => {
    renderHeader();
    const logoLink = screen.getAllByRole('link').find(
      (el) => el.getAttribute('href') === '/' && el.classList.contains('logo')
    );
    expect(logoLink).toBeInTheDocument();
  });
});
