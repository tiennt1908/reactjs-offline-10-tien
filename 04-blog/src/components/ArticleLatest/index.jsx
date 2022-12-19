import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actAsyncGetLatestPosts } from '../../store/post/actions';
import ArticleItem from '../ArticleItem';
import MainTitle from '../shared/MainTitle';
import './latest-news-list.css';

function ArticleLatest() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actAsyncGetLatestPosts());
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
