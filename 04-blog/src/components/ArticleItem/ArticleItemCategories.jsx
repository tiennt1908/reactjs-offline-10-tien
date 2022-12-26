import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ArticleItemCategories({ categoriesId }) {
  const categories = useSelector(state => state.category.categories);
  const categoryComponent = categoriesId.map((id) => {
    const category = categories[id];
    return (
      <li key={id}>
        <Link to={`/category/${id}`} className="btn btn-category">
          {category?.name}
        </Link>
      </li>
    )
  })
  return (
    <ul className="article-item__categories">
      {categoryComponent}
    </ul>
  );
}
