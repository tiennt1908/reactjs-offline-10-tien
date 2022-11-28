import React from 'react'
import PostComment from './PostComment';
import PostContent from './PostContent';
import "./postDetailContent.css";
import PostSidebar from './PostSidebar';
import PostTags from './PostTags';
import PostThumbnail from './PostThumbnail';

export default function PostDetailContent() {
    return (
        <div className="post-detail__fluid">
            <div className="tcl-container">
                <div className="post-detail__wrapper">
                    <div className="post-detail__content">
                        <PostThumbnail/>
                        <div className="content-padding">
                            <PostContent/>
                            <PostTags/>
                            <PostComment/>
                        </div>
                    </div>
                    <PostSidebar/>
                </div>
            </div>
        </div>
    )
}
