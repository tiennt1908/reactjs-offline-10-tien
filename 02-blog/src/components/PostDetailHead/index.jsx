import React from 'react';
import "./postDetailHead.css";
import { Link } from 'react-router-dom';
export default function PostDetailHead() {
    return (
        <div className="post-detail__head">
            <div className="tcl-container">
                <h1 className="post-detail__title">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h1>
                <ul className="post-detail__info">
                    <li className="item author">
                        By <Link to="/"><strong>John Smith</strong></Link>
                    </li>
                    <li className="item date">
                        May 15, 2021
                    </li>
                    <li className="item views">
                        2 <i className="icons ion-ios-eye" />
                    </li>
                    <li className="item comments">
                        20 <i className="icons ion-ios-chatbubble" />
                    </li>
                </ul>
            </div>
        </div>
    )
}
