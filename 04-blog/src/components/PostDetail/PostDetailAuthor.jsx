import './post-author.css';

function PostDetailAuthor({ author_data }) {
  return (
    <div className="post-author">
      <div className="post-author__bg-avatar">
        <a href="/" className="post-author__avatar">
          <img src={author_data?.avatar || "/assets/images/blog-detail.jpg"} alt="" />
        </a>
      </div>
      <div className="post-author__nickname">
        <a href="/">{author_data?.nickname}</a>
      </div>
      <p className="post-author__desc">
        {author_data?.description}
      </p>
    </div>
  );
}

export default PostDetailAuthor;
