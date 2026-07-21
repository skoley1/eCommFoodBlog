import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/blog', label: 'Recipes' },
  { to: '/about', label: 'About' },
];

function BobLogo() {
  return (
    <a
      href="https://www.ibm.com/products/watsonx/bob"
      target="_blank"
      rel="noopener noreferrer"
      className="bob-badge"
      title="Powered by IBM Bob"
    >
      {/* IBM Bob "B" monogram */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="28"
        height="28"
        aria-label="IBM Bob"
        role="img"
      >
        <rect width="32" height="32" rx="6" fill="#0f62fe" />
        <text
          x="50%"
          y="50%"
          dominantBaseline="central"
          textAnchor="middle"
          fill="#ffffff"
          fontFamily="'IBM Plex Sans', Arial, sans-serif"
          fontWeight="700"
          fontSize="18"
        >
          B
        </text>
      </svg>
      <span className="bob-badge-label">IBM Bob</span>
    </a>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner container">
        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
          <span className="logo-icon">🍴</span>
          <span className="logo-text">Food@eComm</span>
        </Link>

        <button
          className={`menu-toggle${menuOpen ? ' open' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`main-nav${menuOpen ? ' open' : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <BobLogo />
      </div>
    </header>
  );
}
