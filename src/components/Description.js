import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Description = () => {
    return (
        <Fragment>
        <div className="headBackground">
        <div className="wordButtonContainer">
        <h1 className="where">Where would you go?</h1>
        <button className="planning"><span id="planbutton"><Link to='/wishlist'>Plan Trip</Link></span></button>
        </div>
        </div>
        </Fragment>
    )
}

export default Description