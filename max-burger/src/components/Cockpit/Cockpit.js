import React from 'react';

import classes from './Cockpit.css';



const cockpit = (props) => {

    const classes = [];  //using const cause we will never setting a new value
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }


    if (props.persons.length <= 2) {
        classes.push(classes.red); //classes = ['red]
    }
    if (props.persons.length <= 1) {
        classes.push(classes.bold); //classes=['red','bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1> Hi This is Another Burger App </h1>
            <p className={classes.join(' ')}> This is really working </p>
            <button
                className={btnClass}
                onClick={props.clicked}>NOW I'm Toggle</button>
        </div>
    );
};

export default cockpit;