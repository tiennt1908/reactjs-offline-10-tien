import React from 'react';
import ArticleItem from '../ArticleItem';
import './popular-news-list.css';
import MainTitle from "../shared/MainTitle";

export default function ArticlePopular() {
    return (
        <div className="popular-news section bg-white-blue">
            <div className="tcl-container">
                <MainTitle title="Popular Articles" isShowButtonCustom={true} buttonName="View More" goto="/" />
                <div className="popular-news__list spacing">
                    <div className="popular-news__list--left">
                        <div className="popular-news__list--row">
                            <div className="popular-news__list--card">
                                <ArticleItem isStyleCard={true} isShowAvatar={true} isShowCategory={true} />
                            </div>
                            <div className="popular-news__list--card">
                                <ArticleItem isStyleCard={true} isShowAvatar={true} isShowCategory={true} />
                            </div>
                        </div>
                    </div>
                    <div className="popular-news__list--right">
                        <div className="popular-news__list--row">
                            <div className="popular-news__list--card">
                                <ArticleItem isStyleCard={true} isStyleRow={true} isShowAvatar={true} isShowCategory={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
