import { Link } from "react-router-dom";

export default function ArticleItemThumb({ featured_media_url, ...restProps }) {
  return (
    <div className="article-item__thumbnail">
      <Link {...restProps}>
        <img src={featured_media_url} alt={featured_media_url} />
      </Link>
    </div>
  );
}
