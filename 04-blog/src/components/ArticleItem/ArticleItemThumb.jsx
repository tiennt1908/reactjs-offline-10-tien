export default function ArticleItemThumb({ featured_media_url, link }) {
  return (
    <div className="article-item__thumbnail">
      <a href={link}>
        <img src={featured_media_url} alt={featured_media_url} />
      </a>
    </div>
  );
}
