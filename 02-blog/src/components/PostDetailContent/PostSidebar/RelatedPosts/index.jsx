import React from 'react';
import PostRelated from './PostRelated';
import "./related-posts.css";
export default function PostsRelated() {
    return (
        <div className="related-post">
            <h2 className="related-post__head">Related Posts</h2>
            <PostRelated/>
            <PostRelated/>
            <PostRelated/>
        </div>
    )
}
