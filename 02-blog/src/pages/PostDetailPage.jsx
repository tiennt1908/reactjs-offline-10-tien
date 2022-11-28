import React from 'react';
import PostDetailContent from '../components/PostDetailContent';
import PostDetailHead from '../components/PostDetailHead';

export default function PostDetailPage() {
    return (
        <main className="post-detail">
            <div className="spacing" />
            <PostDetailHead/>
            <div className="spacing" />
            <PostDetailContent/>
        </main>

    )
}
