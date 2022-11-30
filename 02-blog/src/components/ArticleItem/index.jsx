import React from 'react';
import "./article-item.css";
import ArticleCategory from './ArticleCategory';
import ArticleStats from './ArticleStats';
import ArticleDesc from './ArticleDesc';
import ArticleInfor from './ArticleInfor';
import ArticleTitle from './ArticleTitle';
import { Link } from 'react-router-dom';
import cls from "classnames";

export default function ArticleItem({ isStyleCard, isStyleRow, isShowCategory, isShowStats, isShowDesc, isShowAvatar }) {

    const articleClass = cls("article-item", { "style-card": isStyleCard, "style-row": isStyleRow });

    return (
        <article className={articleClass}>
            <div className="article-item__thumbnail">
                <Link to="/detail">
                    <img src="assets/images/blog-1.jpg" alt="assets/images/blog-1.jpg" />
                </Link>
            </div>
            <div className="article-item__content">
                {isShowCategory && <ArticleCategory />}
                {isShowStats && <ArticleStats />}
                <ArticleTitle to="/detail">Only Someone Who's Seen The Mummy Will Pass This</ArticleTitle>
                {isShowDesc && <ArticleDesc />}
                <ArticleInfor isShowAvatar={isShowAvatar}></ArticleInfor>
            </div>
        </article>
    )

}
