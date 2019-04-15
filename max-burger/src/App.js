import React, { Component } from 'react';
import './App.css';
import IcanbeAnything from './Person/Person';
// the Person after import can be anything

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hi This is Another Burger App </h1>
        <p> This is really working </p>
        <IcanbeAnything />
        <IcanbeAnything />
        <IcanbeAnything />
      </div>
    );
  }
}

export default App;
