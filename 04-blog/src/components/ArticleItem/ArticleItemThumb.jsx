import { Link } from "react-router-dom";

export default function ArticleItemThumb({ mediaURL, ...restProps }) {
  return (
    <div className="article-item__thumbnail">
      <Link {...restProps}>
        <img src={mediaURL} alt={mediaURL} />
      </Link>
    </div>
  );
}
