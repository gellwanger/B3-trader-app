import React, { Component } from 'react';
import Header from './pages/Header';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <div
        className="principal"
      >
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;