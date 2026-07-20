import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner container">
        <div className="footer-brand">
          <Link to="/" className="logo">
            <span className="logo-icon">🍴</span>
            <span className="logo-text">Savoury Stories</span>
          </Link>
          <p className="footer-tagline">Real recipes. Real flavours. Real joy.</p>
        </div>

        <div className="footer-links">
          <h4>Explore</h4>
          <Link to="/">Home</Link>
          <Link to="/blog">Recipes</Link>
          <Link to="/about">About</Link>
        </div>

        <div className="footer-links">
          <h4>Categories</h4>
          <Link to="/blog?category=breakfast">Breakfast</Link>
          <Link to="/blog?category=dinner">Dinner</Link>
          <Link to="/blog?category=desserts">Desserts</Link>
          <Link to="/blog?category=snacks">Snacks</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Savoury Stories. Made with ❤️ and good food.</p>
      </div>
    </footer>
  );
}
