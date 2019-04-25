import React from 'react';
import './Person.css';
// import Radium from 'radium';


const person = (props) => {

    // const style = {
    //     '@media(min-width:500px)': {
    //         width: '450px'
    //     }
    // };
    //500px is a threshold, if we go above it(the window), it'll stay fixed 450px
    //if we go below it, it'll be the 60% of the window width(changing)

    return (
        //style will overwrite className
        <div className="Person" >
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changedErin} value={props.name} />
        </div>
    )
};

// export default Radium(person);
export default person;