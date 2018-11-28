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
            <div>
                <p>{items.country}</p>
            </div>
            </Fragment>
        )
    
}

export default TravelProfile