import React from 'react'
import "./article-item.css"
import ArticleCategory from './ArticleCategory'
import ArticleStats from './ArticleStats'
import ArticleDesc from './ArticleDesc'
import ArticleInfor from './ArticleInfor'
import ArticleTitle from './ArticleTitle'
import { Link } from 'react-router-dom'
export default function ArticleItem({ isStyleCard, isStyleRow, isShowCategory, isShowStats, isShowDesc, isShowAvatar }) {

    let classArticle = "article-item";
    classArticle += isStyleCard ? " style-card" : "";
    classArticle += isStyleRow ? " style-row" : "";

    return (
        <article className={classArticle}>
            <div className="article-item__thumbnail">
                <Link to="/">
                    <img src="assets/images/blog-1.jpg" alt="assets/images/blog-1.jpg" />
                </Link>
            </div>
            <div className="article-item__content">
                {isShowCategory ? <ArticleCategory /> : <></>}
                {isShowStats ? <ArticleStats /> : <></>}
                <ArticleTitle title="Only Someone Who's Seen The Mummy Will Pass This" goto="/" />
                {isShowDesc ? <ArticleDesc /> : <></>}
                <ArticleInfor isShowAvatar={isShowAvatar}></ArticleInfor>
            </div>
        </article>
    )
}
