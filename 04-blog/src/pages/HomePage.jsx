import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ArticleGeneral from '../components/ArticleGeneral';
import ArticleLatest from '../components/ArticleLatest';
import ArticlePopular from '../components/ArticlePopular';
import { actGetCategories } from '../store/category/actions';

function HomePage() {

  const dispatch = useDispatch();
  useEffect(() => {
    fetch("http://wp-api.test/wp-json/wp/v2/categories?per_page=100&page=1")
      .then(res => res.json())
      .then((data) => {
        dispatch(actGetCategories(data));
      })
  }, [])

  return (
    <>
      <ArticleLatest />
      <ArticlePopular />
      <ArticleGeneral />
    </>
  );
}

export default HomePage;
