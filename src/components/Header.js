import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
        <nav>
            <ul class="topnav">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/wishlist'>Wish List</Link></li>
            </ul>
        </nav>
        </div>
    )
}

export default Header