import React from 'react'
import { Link } from 'gatsby'
import { render } from 'react-dom'

const Header = () => {
    return (
        <div>
            <h1>Omer Yildiz</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header