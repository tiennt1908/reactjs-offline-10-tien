import { useSelector } from "react-redux";

export default function ArticleItemCategories({ categoriesId }) {
  const categories = useSelector(state => state.category.categories);
  const categoryComponent = categoriesId.map((id) => {
    const category = categories.find(e => e.id === id);
    return (
      <li key={id}>
        <a href={category?.link} className="btn btn-category">
          {category?.name}
        </a>
      </li>
    )
  })
  return (
    <ul className="article-item__categories">
      {categoryComponent}
    </ul>
  );
}
