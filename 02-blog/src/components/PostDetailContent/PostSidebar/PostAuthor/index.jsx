import React from 'react';
import "./post-author.css";
import { Link } from 'react-router-dom';
export default function PostAuthor() {
    return (
        <div className="post-author">
            <div className="post-author__bg-avatar">
                <Link to="/" className="post-author__avatar">
                    <img src="./assets/images/blog-detail.jpg" alt="blog" />
                </Link>
            </div>
            <div className="post-author__nickname">
                <Link to="/">John Smith</Link>
            </div>
            <p className="post-author__desc">Lorem ipsum, dolor sit amet conse ctetur adipi sicing elit. Necessitatibus,
                vel vero vel vero vel vero vel vero!</p>
        </div>
    )
}
