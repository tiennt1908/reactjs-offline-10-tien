import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PostDetailContent from '../components/PostDetail/PostDetailContent';
import PostDetailHead from '../components/PostDetail/PostDetailHead';
import PostDetailSidebar from '../components/PostDetail/PostDetailSidebar';
import { actAsyncGetPostDetail, actAsyncGetPostRelated } from '../store/postDetail/actions';

function PostDetailPage() {

  const dispatch = useDispatch();
  const { slug } = useParams();

  useEffect(() => {
    dispatch(actAsyncGetPostDetail(slug)).then((res) => {
      dispatch(actAsyncGetPostRelated(res.data.author, res.data.id));
    })
  }, [slug]);

  const postDetail = useSelector(state => state.postDetail.postDetail);
  if (Object.keys(postDetail).length === 0) {
    return <></>
  }
  return (
    <main className="post-detail">
      <div className="spacing" />

      <PostDetailHead view_count={postDetail.view_count} comment_count={postDetail.comment_count} date={postDetail.date} author_data={postDetail.author_data} title={postDetail.title?.rendered} />

      <div className="spacing" />

      <div className="post-detail__fluid">
        <div className="tcl-container">
          <div className="post-detail__wrapper">
            <PostDetailContent featured_media_url={postDetail.featured_media_url} content={postDetail.content?.rendered} />
            <PostDetailSidebar author_data={postDetail.author_data} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default PostDetailPage;
