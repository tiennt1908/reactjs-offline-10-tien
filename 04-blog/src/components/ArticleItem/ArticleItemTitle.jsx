// import { Link } from 'react-router-dom';

export default function ArticleItemTitle({ children, ...restProps }) {
  return (
    <h2 className="article-item__title">
      <a {...restProps}>{children}</a>
    </h2>
  );
}
