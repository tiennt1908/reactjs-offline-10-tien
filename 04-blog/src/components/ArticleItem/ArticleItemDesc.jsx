export default function ArticleItemDesc({ excerpt }) {
  return (
    <p className="article-item__desc" dangerouslySetInnerHTML={{ __html: excerpt }}></p>
  );
}
