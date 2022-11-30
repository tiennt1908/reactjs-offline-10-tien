import React from 'react';
import "./latest-news-list.css";
import ArticleItem from '../ArticleItem';
import MainTitle from "../shared/MainTitle";

export default function ArticleLastest() {

    return (
        <div className="latest-news section">
            <div className="tcl-container">
                <MainTitle buttonName="View More" href="/search">Latest Articles</MainTitle>
                <div className="latest-news__list spacing">
                    <div className="latest-news__card">
                        <ArticleItem isShowAvatar={true} />
                    </div>
                    <div className="latest-news__card">
                        <ArticleItem isShowAvatar={true} />
                    </div>
                    <div className="latest-news__card">
                        <ArticleItem isShowAvatar={true} />
                    </div>
                </div>
            </div>
        </div>
    )

}
