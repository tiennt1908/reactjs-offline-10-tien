import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actAsyncGetPagingPosts } from '../store/post/actions';
import Button from '../components/shared/Button';
function usePostPaging({extraParam={}}) {

  const {search} = {...extraParam};

  const posts = useSelector(state => state.post.pagingPosts.posts);
  const currentPage = useSelector(state=>state.post.pagingPosts.currentPage);
  const totalPost = useSelector(state=>state.post.pagingPosts.totalPost);
  const totalPage = useSelector(state => state.post.pagingPosts.totalPage);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();


  const getPost = (p) => {
    setLoading(true);
    dispatch(actAsyncGetPagingPosts(p, extraParam)).then((data) => {
      setLoading(false);
    });
  }
  useEffect(() => {
    getPost(1);
  }, [search]);

  const loadMore = () => {
    if (!loading) {
      const nextPage = currentPage + 1;
      getPost(nextPage);
    }
  }

  const isLastPage = currentPage === totalPage;
  
  const buttonLoadMore = isLastPage && !loading ?
    <></> : <Button type="primary" size="large" loading={loading} onClick={loadMore}>
      Tải thêm
    </Button>

  return {
    buttonLoadMore,
    posts,
    totalPost
  }
}

export default usePostPaging;
