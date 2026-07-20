import { Link } from 'react-router-dom';
import type { Category } from '../types';
import './CategoryBadge.css';

interface Props {
  category: Category;
}

export default function CategoryBadge({ category }: Props) {
  return (
    <Link to={`/blog?category=${category.slug}`} className="category-badge">
      <span className="category-badge__emoji">{category.emoji}</span>
      <div className="category-badge__info">
        <span className="category-badge__name">{category.name}</span>
        <span className="category-badge__desc">{category.description}</span>
      </div>
    </Link>
  );
}
