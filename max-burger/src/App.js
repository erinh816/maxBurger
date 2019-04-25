import React, { Component } from 'react';
// import React, { useState } from 'react';
//******above is for hooks******
import './App.css';
import CanbeAnything from './Person/Person';
// the Person after import can be anything

import Radium, { StyleRoot } from 'radium';

class App extends Component {
  //state is an object
  state = {
    ppl: [
      { id: 'hieuhwueh', name: 'Max', age: 28 },
      { id: 'jhweuuweu', name: 'Erin', age: 18 },
      { id: 'hwieuwhue', name: 'Sam', age: 66 }
    ],
    // we set it false initially, we don't want to show it
    //this is for ToggleHandler
    showPersons: false
  }

  //***commented this handler out for lecture 55, how to convert!!!
  // switchNameHandler = (newName) => {
  //   // console.log('was clicked');
  //   //DON"T DO THIS this.state.ppl[0].name = 'Minimum';
  //   this.setState({
  //     ppl: [
  //       { name: newName, age: 28 },
  //       { name: 'Erin', age: 18 },
  //       { name: 'Sam', age: 1000000 }
  //     ]
  //   });
  // }

  deletePersonHandler = (personIndex) => {
    const deletedperson = this.state.ppl;
    //above is bad practice because it mutetes the original copy we could change it to this.state.ppl.slice()
    //but we can also use a es6 feture spread ...
    // const deletedperson = [...this.state.ppl];
    deletedperson.splice(personIndex, 1);
    this.setState({ deletedperson: deletedperson })
  }

  //event is an object, this method we pass to Erin
  nameChangeHandler = (event, id) => {
    const singleIndex = this.state.ppl.findIndex(yay => {
      return yay.id === id; //true or false
    });

    const singlePerson = {
      ...this.state.ppl[singleIndex]
    };

    //alternative way
    // const wow = Object.assign({}, this.state.ppl[singleIndex]);
    singlePerson.name = event.target.value;
    const ppl = [...this.state.ppl];
    // const ppl = [this.state.ppl.slice()];
    ppl[singleIndex] = singlePerson;
    this.setState({
      ppl: ppl
      // ppl: [
      //   { name: 'Max', age: 28 },
      //   { name: event.target.value, age: 18 },
      //   { name: 'Sam', age: 1000000 }
      // ]
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
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    //we can do a regular javaScript syntax here because it's not JSX
    if (this.state.showPersons) {
      persons = (
        //in here we will delete the div of all <CanbeAnything> and copy in hrere
        <div>
          {this.state.ppl.map((wow, indexwow) => {
            return <CanbeAnything
              click={() => this.deletePersonHandler(indexwow)}
              name={wow.name}
              age={wow.age}
              key={wow.id}
              changedErin={(event) => this.nameChangeHandler(event, wow.id)} />
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

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'yellow',
        color: 'black'
      }
    }

    // let classes = ['red', 'bold'].join(' '); //must be a space between''
    //make css dynamic according to the numnber of persons
    const classes = [];  //using const cause we will never setting a new value
    if (this.state.ppl.length <= 2) {
      classes.push('red'); //classes = ['red]
    }
    if (this.state.ppl.length <= 1) {
      classes.push('bold'); //classes=['red','bold']
    }



    return (
      <StyleRoot>
        <div className="App">
          <h1> Hi This is Another Burger App </h1>
          <p className={classes.join(' ')}> This is really working </p>
          <button
            style={style}
            onClick={this.togglePersonsHandler}>NOW I'm Toggle</button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

// export default App;

export default Radium(App); //after we import Radium package


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
