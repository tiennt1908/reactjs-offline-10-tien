import React from 'react'
import { Link } from 'react-router-dom';

export default function Comment() {
    return (
        <div className="comments__section">
            <div className="comments__section--avatar">
                <Link to="/">
                    <img src="./assets/images/avatar1.jpg" alt="Avatar" />
                </Link>
            </div>
            <div className="comments__section--content">
                <Link to="/" className="comments__section--user">John Smith</Link>
                <p className="comments__section--time">2 minutes ago</p>
                <p className="comments__section--text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nesciunt sequi odit exercitationem maiores, iusto unde quibusdam! Ullam nisi iste
                    reprehenderit, expedita nam ad. Nisi hic at voluptate sint incidunt aut?</p>
            </div>
        </div>
    )
}
