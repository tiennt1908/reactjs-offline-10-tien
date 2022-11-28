import React from 'react'
import { Link } from 'react-router-dom'
export default function ArticleTitle({ title, goto }) {
    return (
        <h2 className="article-item__title">
            <Link to={goto} >{title}</Link>
        </h2>
    )
}
