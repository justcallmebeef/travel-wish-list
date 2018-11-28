import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Card from './components/Card'
import Description from './components/Description'
import TravelProfile from './components/TravelProfile';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  async componentDidMount() {
    let result = await fetch('https://travel-wish.herokuapp.com/travel')
    let data = await result.json() 
    this.setState({
      data: data.data
    })
    console.log(this.state.data)
  }


  render() {
    return (
      <Fragment>
      <Router>
      <div className="App">
        <Route path="/" exact component={Description} />
        <Route path="/wishlist" render={() => (<Card data={this.state.data} />
        )}
        />
        <Route path="/travelprofile" component={TravelProfile} />
      </div>
      </Router>
      </Fragment>
    );
  }
}

export default App;
