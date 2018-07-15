import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  state = {
    status: 'Loading',
  };

  componentDidMount = () => {
    axios.get('/api/testRoute')
    .then(res => this.setState({ status: res.data }))
    .catch(res => console.warn(res));
  };

  render() {
    return (
      <div>
        <h1>Express/React boilerplate</h1>
        <h3>Status: { this.state.status }</h3>
      </div>
    );
  }
}

export default App;
