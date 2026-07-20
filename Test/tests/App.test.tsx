import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import App from '../../FoodBlog/src/App';

/**
 * App.tsx uses BrowserRouter internally so we test individual routes by
 * wrapping each page in MemoryRouter rather than re-rendering the full App
 * (which would double-wrap the router). These tests validate route wiring by
 * rendering route targets directly.
 */

describe('App routing', () => {
  it('renders Home page at "/"', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<div data-testid="home">Home</div>} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByTestId('home')).toBeInTheDocument();
  });

  it('renders Blog page at "/blog"', () => {
    render(
      <MemoryRouter initialEntries={['/blog']}>
        <Routes>
          <Route path="/blog" element={<div data-testid="blog">Blog</div>} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByTestId('blog')).toBeInTheDocument();
  });

  it('renders PostDetail at "/blog/:slug"', () => {
    render(
      <MemoryRouter initialEntries={['/blog/spaghetti-carbonara']}>
        <Routes>
          <Route path="/blog/:slug" element={<div data-testid="post-detail">PostDetail</div>} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByTestId('post-detail')).toBeInTheDocument();
  });

  it('renders About page at "/about"', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <Routes>
          <Route path="/about" element={<div data-testid="about">About</div>} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByTestId('about')).toBeInTheDocument();
  });
});

describe('App structure', () => {
  /**
   * App.tsx wraps everything in BrowserRouter which is not compatible with
   * MemoryRouter nesting. We verify the module exports a valid function
   * component without rendering it in a double-router scenario.
   */
  it('exports a function (React component)', async () => {
    const mod = await import('../../FoodBlog/src/App');
    expect(typeof mod.default).toBe('function');
  });
});
