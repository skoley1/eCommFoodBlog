import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { posts } from '../data/posts';
import './PostDetail.css';

export default function PostDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const related = posts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  // Convert markdown-ish content to simple HTML blocks
  const renderContent = (raw: string) => {
    const lines = raw.trim().split('\n');
    const elements: React.ReactElement[] = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];

      if (line.startsWith('## ')) {
        elements.push(<h2 key={i}>{line.slice(3)}</h2>);
      } else if (line.startsWith('### ')) {
        elements.push(<h3 key={i}>{line.slice(4)}</h3>);
      } else if (line.startsWith('**') && line.endsWith('**')) {
        elements.push(<p key={i}><strong>{line.slice(2, -2)}</strong></p>);
      } else if (line.startsWith('- ')) {
        const items: string[] = [];
        while (i < lines.length && lines[i].startsWith('- ')) {
          items.push(lines[i].slice(2));
          i++;
        }
        elements.push(
          <ul key={`ul-${i}`}>
            {items.map((item, j) => <li key={j} dangerouslySetInnerHTML={{ __html: boldify(item) }} />)}
          </ul>
        );
        continue;
      } else if (line === '---') {
        elements.push(<hr key={i} />);
      } else if (line.trim()) {
        elements.push(<p key={i} dangerouslySetInnerHTML={{ __html: boldify(line) }} />);
      }
      i++;
    }
    return elements;
  };

  return (
    <div className="post-detail-page">
      {/* Cover */}
      <div className="post-detail__cover">
        <img src={post.coverImage} alt={post.title} />
        <div className="post-detail__cover-overlay" />
        <div className="post-detail__cover-content container">
          <span className="post-detail__category">{post.category}</span>
          <h1 className="post-detail__title">{post.title}</h1>
          <div className="post-detail__meta">
            <img src={post.author.avatar} alt={post.author.name} />
            <div>
              <span className="author-name">{post.author.name}</span>
              <span className="meta-sep">·</span>
              <time>
                {new Date(post.publishedAt).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>
              <span className="meta-sep">·</span>
              <span>{post.readingTime} min read</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container post-detail__layout">
        {/* Article body */}
        <article className="post-detail__body">
          <p className="post-detail__excerpt">{post.excerpt}</p>
          <div className="post-detail__content">
            {renderContent(post.content)}
          </div>
          <div className="post-detail__tags">
            {post.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </article>

        {/* Sidebar */}
        <aside className="post-detail__sidebar">
          <div className="sidebar-block author-card">
            <img src={post.author.avatar} alt={post.author.name} className="author-card__avatar" />
            <h4>{post.author.name}</h4>
            <p>{post.author.bio}</p>
          </div>

          {related.length > 0 && (
            <div className="sidebar-block">
              <h3>More {post.category} recipes</h3>
              <ul className="related-list">
                {related.map((r) => (
                  <li key={r.id}>
                    <Link to={`/blog/${r.slug}`} className="related-item">
                      <img src={r.coverImage} alt={r.title} />
                      <span>{r.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>

      {/* Back link */}
      <div className="container post-detail__back">
        <Link to="/blog" className="btn btn--outline">← Back to Recipes</Link>
      </div>
    </div>
  );
}

function boldify(text: string) {
  return text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}
