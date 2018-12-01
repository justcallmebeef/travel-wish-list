import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import Header from './components/Header'
import Card from './components/Card'
import Description from './components/Description'
import TravelProfile from './components/TravelProfile';
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [], 
      selected: '',
      city: '', 
      country: '', 
      countryList: []
    }
  }

  async componentDidMount() {
    fetch('https://travel-list-db.herokuapp.com/')
    .then(response => response.json())
    .then(response => this.setState({data: response}))    
    // fetch('https://pkgstore.datahub.io/core/country-list/data_json/data/8c458f2d15d9f2119654b29ede6e45b8/data_json.json')
    // .then(response => response.json())
    // .then(response => {
    //   console.log(response)
    //   this.setState({countryList: response})
    // })
  }

  postLocation = (event) => {
    event.preventDefault()
    let post = {
      city: this.state.city, 
      country: this.state.country, 
      image: "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a36d82aa17ef299a3bef2946c9bd9e49&auto=format&fit=crop&w=1050&q=80", 
    }
    fetch('https://travel-list-db.herokuapp.com/', {
      method: 'POST', 
      body: JSON.stringify(post), 
      headers: {
        'Content-Type': 'application/json', 
      }
    })
    .then (response => response.json())
    .then ((response) => {
      this.setState({
        data: [...this.state.data, response]
      })
    })
  }

  getProfile = (id) => {
    this.setState({
      selected: id
    })
  }

  getCity = (event) => {
    this.setState ({
      city: event.target.value
    })
  }

  getCountry = (event) => {
    this.setState ({
      country: event.target.value
    })
  }

  deleteLocation = (event) => {
    event.preventDefault()
    let filtered = this.state.data.filter(item => {
      return item.id != event.target.id
    })
    fetch("https://travel-list-db.herokuapp.com/" + event.target.id, {
      method: 'DELETE'
    })
    .then(this.setState({
      data: filtered 
    }))
  }


  render() {
    return (
      <Fragment>
      <Router>
      <div className="App">
        <Route path="/" exact component={Description} />
        <Route path="/wishlist" render={() => (<Card deleteLocation={this.deleteLocation} getCity={this.getCity} getCountry={this.getCountry} postLocation={this.postLocation} data={this.state.data} getProfile={this.getProfile} />
        )}
        />
        <Route path="/travelprofile/:id" render={() => (<TravelProfile data={this.state.data} selected={this.state.selected}/>
        )}
        />
      </div>
      </Router>
      </Fragment>
    );
  }
}

export default App;
