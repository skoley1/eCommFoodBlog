import { authors } from '../data/authors';
import { posts } from '../data/posts';
import { Link } from 'react-router-dom';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <h1>About Food@eComm</h1>
          <p>Three cooks, one blog, and a shared passion for putting great food on the table.</p>
        </div>
      </div>

      {/* Our Story */}
      <section className="section">
        <div className="container about-story">
          <div className="about-story__text">
            <h2>How it started</h2>
            <p>
              Food@eComm was born in 2020 when Sofia, Marco and Priya — three food lovers from
              different corners of the world — decided to stop keeping their best recipes to themselves.
              What began as a shared notes document quickly grew into a full-blown food blog with a
              mission: to make genuinely good cooking accessible to everyone.
            </p>
            <p>
              We believe that great food doesn't require a Michelin star kitchen or rare ingredients.
              It requires curiosity, patience, and a willingness to taste as you go. Every recipe on
              this site has been made in a home kitchen, eaten enthusiastically, and tweaked until it
              earned its place here.
            </p>
            <p>
              Our philosophy is simple — <strong>cook with intention, eat with joy</strong>.
            </p>
          </div>
          <div className="about-story__image">
            <img
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&auto=format&fit=crop"
              alt="Cooking together"
            />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-heading">
            <h2>Meet the Contributors</h2>
          </div>
          <div className="team-grid">
            {Object.values(authors).map((author) => {
              const authorPosts = posts.filter((p) => p.author.name === author.name);
              return (
                <div key={author.name} className="author-profile">
                  <img
                    src={author.avatar}
                    alt={author.name}
                    className={`author-profile__avatar${
                      author.name === 'Sudeep Koley' ? ' avatar--sudeep' :
                      author.name === 'Javeed Shaik'  ? ' avatar--javeed'  : ''
                    }`}
                  />
                  <h3>{author.name}</h3>
                  <p>{author.bio}</p>
                  <div className="author-profile__stat">
                    <span>{authorPosts.length}</span> recipe{authorPosts.length !== 1 ? 's' : ''} published
                  </div>
                  <div className="author-profile__links">
                    {authorPosts.slice(0, 2).map((p) => (
                      <Link key={p.id} to={`/blog/${p.slug}`} className="tag">
                        {p.title.split(' ').slice(0, 3).join(' ')}…
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>What we stand for</h2>
          </div>
          <div className="values-grid">
            {[
              { emoji: '🥩', title: 'Quality Ingredients', desc: 'We always recommend the best ingredients available to you. Substitutions are offered but we never compromise on fundamentals.' },
              { emoji: '📏', title: 'Precise Measurements', desc: 'Every recipe is tested with exact quantities. We use both metric and descriptive measures so you can cook confidently.' },
              { emoji: '📸', title: 'Honest Photography', desc: 'Our photos show the real dish — no food styling trickery, no unachievable perfection. What you see is what you get.' },
              { emoji: '♻️', title: 'Minimal Waste', desc: 'We love recipes that use the whole ingredient. Expect tips on using up leftovers, scraps, and batch cooking.' },
            ].map((v) => (
              <div key={v.title} className="value-card">
                <span className="value-card__emoji">{v.emoji}</span>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--alt">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner__text">
              <h2>Ready to cook something great?</h2>
              <p>Browse over {posts.length} tried-and-tested recipes waiting for you in the kitchen.</p>
            </div>
            <Link to="/blog" className="btn btn--primary">Explore Recipes</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
