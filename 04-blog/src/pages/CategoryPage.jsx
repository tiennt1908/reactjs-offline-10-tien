import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ArticleItem from '../components/ArticleItem';
import Button from '../components/shared/Button';
import { actAsyncGetPostsByCategoryId } from '../store/post/actions';

function CategoryPage() {
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const getPost = (p) => {
    setLoading(true);
    dispatch(actAsyncGetPostsByCategoryId(categoryId, p)).then((data) => {
      setLoading(false);
    })
  }

  useEffect(() => {
    getPost(1);
    setPage(1);
  }, [categoryId])

  const loadMore = () => {
    if (!loading) {
      const nextPage = page + 1;
      getPost(nextPage);
      setPage(nextPage);
    }
  }

  const posts = useSelector(state => state.post.categoryPosts) || [];
  const totalPage = useSelector(state => state.post.totalPage);
  const isLastPage = page >= totalPage;

  const loadingBtn = isLastPage && !loading ?
    <></> : <Button type="primary" size="large" loading={loading} onClick={() => { loadMore() }}>
      Tải thêm
    </Button>;

  return (
    <div className="articles-list section">
      <div className="tcl-container">
        {/* <MainTitle type="search">{posts.length} kết quả tìm kiếm với từ khóa "{searchValue}"</MainTitle> */}

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

export default CategoryPage;
