import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actGetLatestPosts } from '../../store/post/actions';
import ArticleItem from '../ArticleItem';
import MainTitle from '../shared/MainTitle';
import './latest-news-list.css';

function ArticleLatest() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('http://wp-api.test/wp-json/wp/v2/posts?per_page=3&page=1&lang=vi')
      .then((response) => response.json())
      .then((data) => {
        dispatch(actGetLatestPosts(data))
      });
  }, [])

  const latestPost = useSelector(state => state.post.latestPosts);
  return (
    <div className="latest-news section">
      <div className="tcl-container">
        <MainTitle>Bài viết mới nhất</MainTitle>

        <div className="latest-news__list spacing">
          {
            latestPost.map((p) => {
              return <div className="latest-news__card" key={p.id}>
                <ArticleItem post={p} />
              </div>
            })
          }
        </div>
      </div>
    </div>
  );
}

export default ArticleLatest;
