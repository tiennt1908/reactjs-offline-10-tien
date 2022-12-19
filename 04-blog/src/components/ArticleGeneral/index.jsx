import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actAsyncGetNewsPosts } from '../../store/post/actions';
import ArticleItem from '../ArticleItem';
import Button from '../shared/Button';
import MainTitle from '../shared/MainTitle';

function ArticleGeneral() {

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const getPost = (p) => {
      setLoading(true);
      dispatch(actAsyncGetNewsPosts(p)).then((data) => {
        setLoading(false);
      });
    }
    getPost(page);
  }, [page]);

  const loadMore = () => {
    if (!loading)
      setPage(page + 1)
  }

  const newsPosts = useSelector(state => state.post.newsPosts);
  const totalPage = useSelector(state => state.post.totalPageNewsPosts);

  const loadingBtn = page === totalPage && !loading ?
    <></> : <Button type="primary" size="large" loading={loading} onClick={() => { loadMore() }}>
      Tải thêm
    </Button>

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
          {
            loadingBtn
          }
        </div>
      </div>
    </div>
  );
}

export default ArticleGeneral;
