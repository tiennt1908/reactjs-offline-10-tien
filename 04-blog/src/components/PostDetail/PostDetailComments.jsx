import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getTimeSince } from '../../helpers';
import { actAsyncGetChildComments, actAsyncGetComments } from '../../store/comment/action';
import './comments.css';

function PostDetailComments({ handleLoadComments }) {
  const comment = useSelector(state => state.comment.comments);
  // const reply = useSelector(state => state.comment.child);
  const post = useSelector(state => state.post.detailPost)
  const dispatch = useDispatch();
  const [replyLoading, setReplyLoading] = useState(false);

  const handleLoadReply = (commentId, nextPage) => {
    if (!replyLoading) {
      setReplyLoading(true);
      dispatch(actAsyncGetChildComments(post.id, commentId, nextPage)).then((res) => {
        setReplyLoading(false);
      })
    }
  }

  const remainComments = comment.totalComment - comment.data.length;
  const renderComment = (listComment) => {
    return (
      <ul className="comments">
        {
          listComment?.map((e) => {
            return (
              <li className="item" key={e.id}>
                <div className="comments__section">
                  <div className="comments__section--avatar">
                    <a href="/">
                      <img src={e.author.avatar ?? "/assets/images/avatar1.jpg"} alt="" />
                    </a>
                  </div>
                  <div className="comments__section--content">
                    <a href="/" className="comments__section--user">
                      {e.author.nickname}
                    </a>
                    <p className="comments__section--time">{getTimeSince(e.date)}</p>
                    <p className="comments__section--text" dangerouslySetInnerHTML={{ __html: e.content }}></p>
                    {/* <i className="ion-reply comments__section--reply"></i> */}
                  </div>
                </div>
                {
                  renderComment(e.child.data)
                }
                {
                  [e.commentReplyCount - (e.child?.data?.length ?? 0)] > 0 && (
                    <div className="comments__hidden">
                      <div>
                        <span style={{ cursor: "pointer", color: "#007bff", fontSize: "0.9rem" }} onClick={() => { handleLoadReply(e.id, e.child.currentPage + 1) }}>
                          <i className="icons ion-ios-undo" /> Xem thêm {e.commentReplyCount - (e.child?.data?.length || 0)} câu trả lời
                        </span>
                      </div>
                    </div>
                  )
                }
                {/* Reply form */}
                {/* <div className="comments__form">
                  <div className="comments__form--control">
                    <div className="comments__section--avatar">
                      <a href="/">
                        <img src="/assets/images/avatar1.jpg" alt="" />
                      </a>
                    </div>
                    <textarea />
                  </div>
                  <div className="text-right">
                    <button className="btn btn-default">Submit</button>
                  </div>
                </div> */}
              </li>
            )
          })
        }
      </ul>
    )
  }
  return (
    <div className="post-detail__comments">
      <div className="comments__form">
        <div className="comments__form--control">
          <div className="comments__section--avatar">
            <a href="/">
              <img src="/assets/images/avatar1.jpg" alt="" />
            </a>
          </div>
          <textarea />
        </div>
        <div className="text-right">
          <button className="btn btn-default">Submit</button>
        </div>
      </div>
      <p>{comment.totalComment} Comments</p>
      {renderComment(comment.data)}
      {
        remainComments > 0 && (
          <div>
            <div onClick={() => { handleLoadComments(post.id, comment.currentPage + 1) }} style={{ textAlign: "center", cursor: "pointer", color: "#007bff" }}>Xem thêm {remainComments} câu trả lời</div>
          </div>
        )
      }
    </div>
  );
}

export default PostDetailComments;
