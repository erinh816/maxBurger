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
    ],
    // we set it false initially, we don't want to show it
    //this is for ToggleHandler
    showPersons: false
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

  //event is an object, this method we pass to Erin
  nameChangeHandler = (event) => {
    this.setState({
      ppl: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 18 },
        { name: 'Sam', age: 1000000 }
      ]
    })

  }

  togglePersonsHandler = () => {
    // const doesShow = this.state.showPersons;
    // this.setState({ showPersons: !doesShow })
    // or just
    this.setState({ showPersons: !this.state.showPersons });

  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    //we can do a regular javaScript syntax here because it's not JSX
    if (this.state.showPersons) {
      persons = (
        //in here we will delete the div of all <CanbeAnything> and copy in hrere
        <div>
          {this.state.ppl.map(wow => {
            return <CanbeAnything
              name={wow.name}
              age={wow.age} />
          })}

          {/* so now we can get rid of below */}
          {/* <CanbeAnything
            name={this.state.ppl[0].name}
            age={this.state.ppl[0].age} />

          <CanbeAnything
            name={this.state.ppl[1].name}
            age={this.state.ppl[1].age}
            click={this.switchNameHandler.bind(this, 'MAXXXXX2.0')}
            changedErin={this.nameChangeHandler} />

          <CanbeAnything
            name={this.state.ppl[2].name}
            age={this.state.ppl[2].age}>My Hobbies:Rave</CanbeAnything>

          <CanbeAnything
            name="Lucy"
            age="22" /> */}
        </div>
      );
    }

    return (
      <div className="App">
        <h1> Hi This is Another Burger App </h1>
        <p> This is really working </p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>NOW I'm Toggle</button>
        {persons}
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



//********find the alternative here (a bit messy, removed for lecture 52)
// { //if this.state.showPersons is true, we will show the inner div
//   // this.state.showPersons ?
//   //or this.state.showPersons === true ?
//   // <div>
//   //   <CanbeAnything
//   //     name={this.state.ppl[0].name}
//   //     age={this.state.ppl[0].age} />
//   {/* this refers to class App */ }
//   // <CanbeAnything
//   //   name={this.state.ppl[1].name}
//   //   age={this.state.ppl[1].age}
//   //   click={this.switchNameHandler.bind(this, 'MAXXXXX2.0')}
//   //   changedErin={this.nameChangeHandler} />

//   // <CanbeAnything
//   //   name={this.state.ppl[2].name}
//   //   age={this.state.ppl[2].age}>My Hobbies:Rave</CanbeAnything>
//   // {/* down is an example of hard coded one without using state */ }
//     //   <CanbeAnything
//     //     name="Lucy"
//     //     age="22" />
//     // </div> : null
// // }
