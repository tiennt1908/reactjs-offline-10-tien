import React from 'react'
import { Link } from 'react-router-dom';

export default function CommentViewMore() {
    return (
        <div className="comments__hidden">
            <Link to="/"><i className="icons ion-ios-undo" /> Xem thêm 2 câu trả lời</Link>
        </div>
    )
}
