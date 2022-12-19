import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ArticleGeneral from '../components/ArticleGeneral';
import ArticleLatest from '../components/ArticleLatest';
import ArticlePopular from '../components/ArticlePopular';
import { actAsyncGetCategories, actGetCategories } from '../store/category/actions';

function HomePage() {
  //bt PAGE search -> Search by keyword - thay doi URL
  //page detail bai viet lien quan getlistpostbyauthor
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actAsyncGetCategories())
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
