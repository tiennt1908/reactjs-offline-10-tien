import { formatPostDate } from "../../helpers/index";
function PostDetailHead({ title, author_data, view_count, comment_count, date }) {
  return (
    <div className="post-detail__head">
      <div className="tcl-container">
        <h1 className="post-detail__title">
          {title}
        </h1>
        <ul className="post-detail__info">
          <li className="item author">
            By{' '}
            <a href="/">
              <strong>{author_data?.nickname}</strong>
            </a>
          </li>
          <li className="item date">{formatPostDate(date)}</li>
          <li className="item views">
            {view_count} <i className="icons ion-ios-eye" />
          </li>
          <li className="item comments">
            {comment_count} <i className="icons ion-ios-chatbubble" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PostDetailHead;
