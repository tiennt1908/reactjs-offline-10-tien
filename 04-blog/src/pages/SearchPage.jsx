import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ArticleItem from '../components/ArticleItem';
import Button from '../components/shared/Button';
import MainTitle from '../components/shared/MainTitle';
import { actAsyncSearchPosts } from '../store/post/actions';

function SearchPage() {

  const { searchValue } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const getPost = (p) => {
    setLoading(true);
    dispatch(actAsyncSearchPosts(searchValue, p)).then((data) => {
      setLoading(false);
    })
  }

  useEffect(() => {
    getPost(1);
    setPage(1);
  }, [searchValue])

  const loadMore = () => {
    if (!loading) {
      const nextPage = page + 1;
      getPost(nextPage);
      setPage(nextPage);
    }
  }

  const posts = useSelector(state => state.post.searchPosts) || [];
  const totalPage = useSelector(state => state.post.totalPageSearchPosts);

  const loadingBtn = page === totalPage && !loading ?
    <></> : <Button type="primary" size="large" loading={loading} onClick={() => { loadMore() }}>
      Tải thêm
    </Button>;

  return (
    <div className="articles-list section">
      <div className="tcl-container">
        <MainTitle type="search">{posts.length} kết quả tìm kiếm với từ khóa "{searchValue}"</MainTitle>

        <div className="tcl-row tcl-jc-center">
          {posts.map((e) => {
            return <div className="tcl-col-12 tcl-col-md-8" key={e.id}>
              <ArticleItem isStyleCard isShowCategoies isShowAvatar={false} isShowDesc={false} post={e} />
            </div>
          })}

        </div>

        <div className="text-center">
          {
            loadingBtn
          }
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
