import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actAsyncGetGeneralPosts } from '../../store/post/actions';
import ArticleItem from '../ArticleItem';
import Button from '../shared/Button';
import MainTitle from '../shared/MainTitle';

function ArticleGeneral() {

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const getPost = (p) => {
    setLoading(true);
    dispatch(actAsyncGetGeneralPosts(p)).then((data) => {
      setLoading(false);
    });
  }
  useEffect(() => {
    getPost(page);
  }, []);

  const loadMore = () => {
    if (!loading) {
      const nextPage = page + 1;
      getPost(nextPage);
      setPage(nextPage);
    }
  }

  const posts = useSelector(state => state.post.generalPosts);
  const totalPage = useSelector(state => state.post.totalPage);
  const isLastPage = page === totalPage;


  const loadingBtn = isLastPage && !loading ?
    <></> : <Button type="primary" size="large" loading={loading} onClick={loadMore}>
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
            posts.map((p) => {
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
