import React, { Fragment } from 'react' 
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '/Users/bethanymitch/block3/travel-fullstack-site/travel-react/src/assets/Card.css'
import Header from './Header';

const Card = (props) => {
    console.log(props)
var items = props.data.map(item => {
    return (
        <Fragment>
        <div className="responsive">
        <div className="gallery">
            <Link to='/travelprofile'><img src={item.image} alt="Travel Images" width="300" height="200"></img></Link>
            <div className="desc">{item.country}
            <button className="button"><span>Delete</span></button></div>
        </div>
        </div>
        </Fragment>
    )
})
    return (
        <Fragment>
        <Header />
        <div className="container">
            <h1 className="wishList">Travel Wish List:</h1>
            { items }
        </div>
        </Fragment>
    )
}

export default Card