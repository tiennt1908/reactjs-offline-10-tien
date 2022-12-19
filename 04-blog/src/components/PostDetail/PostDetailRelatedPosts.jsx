import { useSelector } from 'react-redux';
import ArticleRelated from '../ArticleItem/ArticleRelated';

function PostDetailRelatedPosts() {

  const postsRelated = useSelector(state => state.postDetail.postsRelated);

  return (
    <div className="related-post">
      <h2 className="related-post__head">Related Posts</h2>
      {
        postsRelated.map((e) => {
          return (<ArticleRelated key={e.id} post={e} />)
        })
      }

    </div>
  );
}

export default PostDetailRelatedPosts;
