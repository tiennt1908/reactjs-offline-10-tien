import React from 'react'
import Comment from './Comment';
import CommentForm from './CommentForm';
import "./comments.css";
import CommentViewMore from './CommentViewMore';

export default function PostComment() {

    return (
        <div className="post-detail__comments">
            <CommentForm />
            <p>20 Comments</p>
            <ul className="comments">
                <li className="item">
                    <Comment />
                    <ul className="comments">
                        <li className="item">
                            <Comment />
                        </li>
                        <li className="item">
                            <Comment />
                        </li>
                    </ul>
                    <CommentForm />
                </li>
                <li className="item">
                    <Comment />
                    <CommentViewMore />
                </li>
                <li className="item">
                    <Comment />
                </li>
            </ul>
        </div>
    )

}
