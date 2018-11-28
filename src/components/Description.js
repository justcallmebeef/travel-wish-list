import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '/Users/bethanymitch/block3/travel-fullstack-site/travel-react/src/assets/Description.css' 

const Description = () => {
    return (
        <Fragment>
        <div className="headBackground">
        <div className="wordButtonContainer">
        <h1 className="where">Where would you go?</h1>
        <button className="planning"><span><Link to='/wishlist'>Plan Trip</Link></span></button>
        </div>
        </div>
        </Fragment>
    )
}

export default Description