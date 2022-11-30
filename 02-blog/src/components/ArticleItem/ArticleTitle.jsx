import React from 'react';
import { Link } from 'react-router-dom';

export default function ArticleTitle({ children, ...restProp }) {

    return (
        <h2 className="article-item__title">
            <Link {...restProp}>{children}</Link>
        </h2>
    )

}
