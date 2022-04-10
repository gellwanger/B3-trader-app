import React, { Component } from 'react';
import Header from './pages/Header';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Home />
      </>
    );
  }
}

export default App;