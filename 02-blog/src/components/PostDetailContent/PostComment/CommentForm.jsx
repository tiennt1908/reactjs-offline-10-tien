import React from 'react'
import { Link } from 'react-router-dom';

export default function CommentForm() {
    return (
        <div className="comments__form">
            <div className="comments__form--control">
                <div className="comments__section--avatar">
                    <Link to="/">
                        <img src="./assets/images/avatar1.jpg" alt="avatar" />
                    </Link>
                </div>
                <textarea />
            </div>
            <div className="text-right">
                <button className="btn btn-default">Submit</button>
            </div>
        </div>
    )
}
