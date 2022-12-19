// import { Link } from 'react-router-dom';

import { Link } from "react-router-dom";

export default function ArticleItemTitle({ children, ...restProps }) {
  return (
    <h2 className="article-item__title">
      <Link {...restProps}>{children}</Link>
    </h2>
  );
}
