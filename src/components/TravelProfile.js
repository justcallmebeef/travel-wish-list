import React, { Fragment } from 'react'
import Header from './Header';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '/Users/bethanymitch/block3/travel-fullstack-site/travel-react/src/assets/Description.css' 

const TravelProfile = (props) => {
    var [items] = props.data.filter(item => {
        return item.id == props.selected })
        console.log(items)
        return (
            <Fragment>
            <Header />
            <div className="responsive">
            <div className="gallery">
            <img src={items.image} alt="Travel Images" width="300" height="200"></img>
            <div className="desc">{items.country}</div>
            </div>
            </div>
            </Fragment>
        )
    
}

export default TravelProfile