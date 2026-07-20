import { Link } from 'react-router-dom';
import type { Post } from '../types';
import './PostCard.css';

interface Props {
  post: Post;
  featured?: boolean;
}

export default function PostCard({ post, featured = false }: Props) {
  return (
    <article className={`post-card${featured ? ' post-card--featured' : ''}`}>
      <Link to={`/blog/${post.slug}`} className="post-card__image-wrap">
        <img src={post.coverImage} alt={post.title} className="post-card__image" loading="lazy" />
        <span className="post-card__category">{post.category}</span>
      </Link>
      <div className="post-card__body">
        <div className="post-card__meta">
          <img src={post.author.avatar} alt={post.author.name} className="post-card__avatar" />
          <span className="post-card__author">{post.author.name}</span>
          <span className="post-card__dot">·</span>
          <time className="post-card__date">
            {new Date(post.publishedAt).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            })}
          </time>
          <span className="post-card__dot">·</span>
          <span className="post-card__reading-time">{post.readingTime} min read</span>
        </div>
        <h2 className="post-card__title">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>
        <p className="post-card__excerpt">{post.excerpt}</p>
        <div className="post-card__tags">
          {post.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
