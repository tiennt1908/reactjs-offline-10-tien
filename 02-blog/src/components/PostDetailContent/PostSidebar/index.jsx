import React from 'react';
import PostAuthor from './PostAuthor';
import PostsRelated from './RelatedPosts';
import "./postSidebar.css";

export default function PostSidebar() {

    return (
        <div className="post-detail__side">
            <PostAuthor />
            <div className="spacing" />
            <PostsRelated />
        </div>
    )

}
