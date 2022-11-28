import React from 'react'
import ButtonCustom from '../shared/Button'

export default function PostTags() {
    return (
        <div className="post-detail__tags">
            <h2>Tags</h2>
            <ul>
                <li className="item">
                    <ButtonCustom buttonName="HTML" goto="/" />
                </li>
                <li className="item">
                    <ButtonCustom buttonName="CSS3" goto="/" />
                </li>
                <li className="item">
                    <ButtonCustom buttonName="React" goto="/" />
                </li>
                <li className="item">
                    <ButtonCustom buttonName="Vue" goto="/" />
                </li>
            </ul>
        </div>
    )
}
