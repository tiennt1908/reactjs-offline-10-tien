import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actGetNewsPosts } from '../../store/post/actions';
import ArticleItem from '../ArticleItem';
import Button from '../shared/Button';
import MainTitle from '../shared/MainTitle';

function ArticleGeneral() {
  const [loadMoreIsError, setLoadMoreIsError] = useState(false);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const getPost = (p) => {
      fetch(`http://wp-api.test/wp-json/wp/v2/posts?per_page=2&page=${p}&lang=vi`)
        .then((res) => res.json())
        .then((data) => {
          dispatch(actGetNewsPosts(data));
        })
        .catch((err) => {
          setLoadMoreIsError(true);
          console.log(err)
        })
    }
    getPost(page);
  }, [page]);

  const newsPosts = useSelector(state => state.post.newsPosts);

  return (
    <div className="articles-list section">
      <div className="tcl-container">
        {/* Main Title */}
        <MainTitle btnLabel="Xem them">Bai Viet Tong Hop</MainTitle>
        {/* End Main Title */}
        {/* End Row News List */}
        <div className="tcl-row">
          {
            newsPosts.map((p) => {
              return (
                <div className="tcl-col-12 tcl-col-md-6" key={p.id}>
                  <ArticleItem post={p} isStyleCard isShowAvatar={false} />
                </div>
              )
            })
          }
        </div>
        {/* End Row News List */}
        <div className="text-center">
          <Button type="primary" size="large" loading={true} hidden={loadMoreIsError} onClick={() => { setPage(page + 1) }}>
            Tải thêm
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ArticleGeneral;
