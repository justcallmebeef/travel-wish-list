import React, { Fragment } from 'react' 
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Header from './Header';
import Form from './Form'; 

const Card = (props) => {
var items = props.data.map(item => {
    return (
        <Fragment>
        <div className="responsive">
        <div className="gallery" onClick={() => props.getProfile(item.id) }>
            <Link to={`/travelprofile/${item.country}`}><img src={item.image} alt="Travel Images" width="300" height="200"></img></Link>
            <div className="desc">{item.country}
            <button onClick={props.deleteLocation} className="button"><span id={item.id}>Delete</span></button></div>
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
            <Form getCountryList={props.getCountryList} postLocation={props.postLocation} getCity={props.getCity} getCountry={props.getCountry}/>
            { items }
        </div>
        </Fragment>
    )
}

export default Card