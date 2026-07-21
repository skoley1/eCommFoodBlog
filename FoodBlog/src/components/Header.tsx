import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import bobLogo from '../assets/Boblogo.png';
import './Header.css';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/blog', label: 'Recipes' },
  { to: '/about', label: 'About' },
];

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

        <a href="https://bob.ibm.com/?utm_content=SRCWW&p1=Search&p4=2447864445311&p5=e&p9=191260675850&gclsrc=aw.ds&gad_source=1&gad_campaignid=23808941956&gclid=CjwKCAjwsfzSBhB5EiwAOGyqSa8n9lX0HU8KJq17hQd0C4pBHy-d7O0-3QlMzoCF10kyHhwIj96CYhoCnfgQAvD_BwE" target="_blank" rel="noopener noreferrer">
          <img src={bobLogo} alt="IBM Bob" className="bob-logo" />
        </a>
      </div>
    </header>
  );
}
