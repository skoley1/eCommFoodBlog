import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { posts } from '../data/posts';
import { categories } from '../data/categories';
import PostCard from '../components/PostCard';
import './Blog.css';

const ALL = 'all';

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');

  const activeCategory = searchParams.get('category') ?? ALL;

  const filtered = useMemo(() => {
    let result = posts;
    if (activeCategory !== ALL) {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    return result;
  }, [activeCategory, query]);

  function setCategory(slug: string) {
    if (slug === ALL) {
      searchParams.delete('category');
    } else {
      searchParams.set('category', slug);
    }
    setSearchParams(searchParams);
  }

  return (
    <div className="blog-page">
      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <h1>All Recipes</h1>
          <p>Explore our full collection of hand-crafted recipes, from weeknight dinners to weekend feasts.</p>
        </div>
      </div>

      <div className="container blog-layout">
        {/* Sidebar */}
        <aside className="blog-sidebar">
          <div className="sidebar-block">
            <h3>Search</h3>
            <input
              type="search"
              className="search-input"
              placeholder="Search recipes…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div className="sidebar-block">
            <h3>Categories</h3>
            <ul className="category-list">
              <li>
                <button
                  className={`category-btn${activeCategory === ALL ? ' active' : ''}`}
                  onClick={() => setCategory(ALL)}
                >
                  🍽️ All Recipes
                  <span className="cat-count">{posts.length}</span>
                </button>
              </li>
              {categories.map((cat) => {
                const count = posts.filter((p) => p.category === cat.slug).length;
                return (
                  <li key={cat.id}>
                    <button
                      className={`category-btn${activeCategory === cat.slug ? ' active' : ''}`}
                      onClick={() => setCategory(cat.slug)}
                    >
                      {cat.emoji} {cat.name}
                      <span className="cat-count">{count}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="sidebar-block sidebar-featured">
            <h3>Popular Tags</h3>
            <div className="tag-cloud">
              {['italian', 'vegetarian', 'quick', 'indian', 'baking', 'classic', 'brunch', 'healthy'].map(
                (t) => (
                  <button
                    key={t}
                    className="tag tag--btn"
                    onClick={() => setQuery(t)}
                  >
                    {t}
                  </button>
                )
              )}
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="blog-main">
          <div className="blog-results-header">
            <p className="results-count">
              {filtered.length === 0
                ? 'No recipes found'
                : `${filtered.length} recipe${filtered.length !== 1 ? 's' : ''} found`}
              {activeCategory !== ALL && (
                <> in <strong>{categories.find((c) => c.slug === activeCategory)?.name}</strong></>
              )}
              {query && <> matching "<strong>{query}</strong>"</>}
            </p>
            {(activeCategory !== ALL || query) && (
              <button
                className="clear-btn"
                onClick={() => {
                  setCategory(ALL);
                  setQuery('');
                }}
              >
                Clear filters
              </button>
            )}
          </div>

          {filtered.length === 0 ? (
            <div className="no-results">
              <p>😔 No recipes match your search.</p>
              <Link to="/blog" className="btn btn--outline" onClick={() => setQuery('')}>
                Show all recipes
              </Link>
            </div>
          ) : (
            <div className="posts-grid">
              {filtered.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
