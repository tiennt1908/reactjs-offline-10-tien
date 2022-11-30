import React from 'react'
import ButtonCustom from '../shared/Button'

export default function PostTags() {

    return (
        <div className="post-detail__tags">
            <h2>Tags</h2>
            <ul>
                <li className="item">
                    <ButtonCustom isTagA={true} colorStyle="default" href="/" >HTML</ButtonCustom>
                </li>
                <li className="item">
                    <ButtonCustom isTagA={true} colorStyle="default" href="/" >CSS3</ButtonCustom>
                </li>
                <li className="item">
                    <ButtonCustom isTagA={true} colorStyle="default" href="/" >React</ButtonCustom>
                </li>
                <li className="item">
                    <ButtonCustom isTagA={true} colorStyle="default" href="/" >Vue</ButtonCustom>
                </li>
            </ul>
        </div>
    )

}
