import React from 'react';
import "./latest-news-list.css";
import ArticleItem from '../ArticleItem';
import MainTitle from "../shared/MainTitle";

export default function ArticleLastest() {
    return (
        <div className="latest-news section">
            <div className="tcl-container">
                <MainTitle title="Latest Articles" isShowButtonCustom={true} buttonName="View More" goto="/" />
                <div className="latest-news__list spacing">
                    <div className="latest-news__card">
                        <ArticleItem isShowAvatar={true}></ArticleItem>
                    </div>
                    <div className="latest-news__card">
                        <ArticleItem isShowAvatar={true}></ArticleItem>
                    </div>
                    <div className="latest-news__card">
                        <ArticleItem isShowAvatar={true}></ArticleItem>
                    </div>
                </div>
            </div>
        </div>
    )
}
