import React, { Component } from 'react';
// import React, { useState } from 'react';
//******above is for hooks******
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

  switchNameHandler = (newName) => {
    // console.log('was clicked');
    //DON"T DO THIS this.state.ppl[0].name = 'Minimum';
    this.setState({
      ppl: [
        { name: newName, age: 28 },
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
        <button onClick={this.switchNameHandler.bind(this, 'MAXXXX1.0')}>Switch Name</button>
        <CanbeAnything
          name={this.state.ppl[0].name}
          age={this.state.ppl[0].age} />
        {/* this refers to class App */}
        <CanbeAnything
          name={this.state.ppl[1].name}
          age={this.state.ppl[1].age}
          click={this.switchNameHandler.bind(this, 'MAXXXXX2.0')} />

        <CanbeAnything
          name={this.state.ppl[2].name}
          age={this.state.ppl[2].age}>My Hobbies:Rave</CanbeAnything>
        {/* down is an example of hard coded one without using state */}
        <CanbeAnything
          name="Lucy"
          age="22" />
      </div>
    );
  }
}

export default App;

//******how to use the new feature hooks******
// const app = props => {
//   const [pplState, setPplState] = useState({
//     ppl: [
//       { name: 'Max', age: 28 },
//       { name: 'Erin', age: 18 },
//       { name: 'Sam', age: 66 }
//     ]
//   });

//   const switchNameHandler = () => {
//     // console.log('was clicked');
//     //DON"T DO THIS this.state.ppl[0].name = 'Minimum';
//     setPplState({
//       ppl: [
//         { name: 'Minimum', age: 28 },
//         { name: 'Erin', age: 18 },
//         { name: 'Sam', age: 1000000 }
//       ]
//     });
//   }

//   return (
//     <div className="App">
//       <h1> Hi This is Another Burger App </h1>
//       <p> This is really working </p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <CanbeAnything name={pplState.ppl[0].name} age={pplState.ppl[0].age} />
//       {/* this refers to class App */}
//       <CanbeAnything name={pplState.ppl[1].name} age={pplState.ppl[1].age} />
//       <CanbeAnything name={pplState.ppl[2].name} age={pplState.ppl[2].age}>My Hobbies:Rave</CanbeAnything>
//       {/* down is an example of hard coded one without using state */}
//       <CanbeAnything name="Lucy" age="22" />
//     </div>
//   );

// }

// export default app;
