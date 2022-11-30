import React from 'react';
import ButtonCustom from '../shared/Button';

export default function ArticleCategory() {

  return (
    <ul className="article-item__categories">
      <li><ButtonCustom isTagA={true} colorStyle="category" href="/" >News</ButtonCustom></li>
      <li><ButtonCustom isTagA={true} colorStyle="category" href="/" >Music</ButtonCustom></li>
    </ul>
  )

}
