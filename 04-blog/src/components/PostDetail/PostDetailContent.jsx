import './post-detail.css';
import PostDetailComments from './PostDetailComments';
import PostDetailRichText from './PostDetailRichText';
import PostDetailTags from './PostDetailTags';

function PostDetailContent({ featured_media_url, content }) {
  return (
    <div className="post-detail__content">
      <div className="thumbnail">
        <img src={featured_media_url} alt="blog-title" />
      </div>
      <div className="content-padding">
        <PostDetailRichText content={content} />

        <PostDetailTags />

        <PostDetailComments />
      </div>
    </div>
  );
}

export default PostDetailContent;
