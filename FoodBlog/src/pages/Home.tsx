import { Link } from 'react-router-dom';
import { posts } from '../data/posts';
import { categories } from '../data/categories';
import PostCard from '../components/PostCard';
import CategoryBadge from '../components/CategoryBadge';
import './Home.css';

const featuredPosts = posts.filter((p) => p.featured);
const recentPosts = posts.slice(0, 4);

export default function Home() {
  return (
    <div className="home-page">
      {/* ── Hero ── */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__content">
            <span className="hero__label">A Food Blog Worth Bookmarking</span>
            <h1 className="hero__title">
              Stories told through<br />
              <em>flavour &amp; fire</em>
            </h1>
            <p className="hero__sub">
              From slow-cooked Italian classics to vibrant Indian curries — explore recipes
              written with love, tested with obsession, and shared with everyone.
            </p>
            <div className="hero__actions">
              <Link to="/blog" className="btn btn--primary">Browse Recipes</Link>
              <Link to="/about" className="btn btn--outline">Meet the Team</Link>
            </div>
          </div>
          <div className="hero__image-grid">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop"
              alt="Delicious food spread"
              className="hero__img hero__img--main"
            />
            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop"
              alt="Fresh ingredients"
              className="hero__img hero__img--accent"
            />
          </div>
        </div>
      </section>

      {/* ── Featured Posts ── */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Featured Recipes</h2>
            <Link to="/blog">View all →</Link>
          </div>
          <div className="posts-grid posts-grid--featured">
            {featuredPosts.map((post) => (
              <PostCard key={post.id} post={post} featured />
            ))}
          </div>
        </div>
      </section>

      {/* ── Categories ── */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-heading">
            <h2>Browse by Category</h2>
          </div>
          <div className="categories-grid">
            {categories.map((cat) => (
              <CategoryBadge key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Latest Posts ── */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Latest Recipes</h2>
            <Link to="/blog">See all →</Link>
          </div>
          <div className="posts-grid">
            {recentPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="section section--alt">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner__text">
              <h2>New recipes every week</h2>
              <p>
                Our contributors cook, photograph and write up fresh recipes regularly.
                Head over to the full recipe collection and find your next favourite dish.
              </p>
            </div>
            <Link to="/blog" className="btn btn--primary">Explore All Recipes</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
