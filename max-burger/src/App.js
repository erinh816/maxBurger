import React, { Component } from 'react';
import './App.css';
import CanbeAnything from './Person/Person';
// the Person after import can be anything

class App extends Component {
  //state is an object
  state = {
    ppl: [
      { name: 'Max', age: 28 },
      { name: 'Erin', age: 18 },
      { name: 'Sam', age: 66 }
    ]
  }

  switchNameHandler = () => {
    // console.log('was clicked');
    //DON"T DO THIS this.state.ppl[0].name = 'Minimum';
    this.setState({
      ppl: [
        { name: 'Minimum', age: 28 },
        { name: 'Erin', age: 18 },
        { name: 'Sam', age: 1000000 }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1> Hi This is Another Burger App </h1>
        <p> This is really working </p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <CanbeAnything name={this.state.ppl[0].name} age={this.state.ppl[0].age} />
        {/* this refers to class App */}
        <CanbeAnything name={this.state.ppl[1].name} age={this.state.ppl[1].age} />
        <CanbeAnything name={this.state.ppl[2].name} age={this.state.ppl[2].age}>My Hobbies:Rave</CanbeAnything>
        {/* down is an example of hard coded one without using state */}
        <CanbeAnything name="Lucy" age="22" />
      </div>
    );
  }
}

export default App;
