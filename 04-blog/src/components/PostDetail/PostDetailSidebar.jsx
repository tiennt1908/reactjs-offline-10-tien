import PostDetailAuthor from './PostDetailAuthor';
import PostDetailRelatedPosts from './PostDetailRelatedPosts';

function PostDetailSidebar({ author_data }) {
  return (
    <div className="post-detail__side">
      <PostDetailAuthor author_data={author_data} />
      <div className="spacing" />
      <PostDetailRelatedPosts />
    </div>
  );
}

export default PostDetailSidebar;
