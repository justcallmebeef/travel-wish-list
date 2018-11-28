import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import Header from './components/Header'
import Card from './components/Card'
import Description from './components/Description'
import TravelProfile from './components/TravelProfile';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [], 
      selected: ''
    }
  }

  async componentDidMount() {
    let result = await fetch('https://travel-list-db.herokuapp.com/')
    let data = await result.json() 
    this.setState({
      data: data
    })
    console.log(this.state.data)
  }

  getProfile = (id) => {
    console.log(id)
    this.setState({
      selected: id
    })
  }


  render() {
    return (
      <Fragment>
      <Router>
      <div className="App">
        <Route path="/" exact component={Description} />
        <Route path="/wishlist" render={() => (<Card data={this.state.data} getProfile={this.getProfile} />
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
