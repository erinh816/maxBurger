//we will still do Persons as a functional component, that will never be wrong
import React from 'react';
import CanbeAnything from './Person/Person';

// const persons = (props) => {
//     return ();
// }

//above, we always return something in there
//but if we only want to return something inside of the function body
//we can shorten it to just ()

const persons = (props) => props.ppl.map((wow, indexwow) => {
    return <CanbeAnything
        click={() => props.clicked(indexwow)}
        name={wow.name}
        age={wow.age}
        key={wow.id}
        changedErin={(event) => props.changed(event, wow.id)} />
});

export default persons;

//why does it have to be props.clicked and props.changed???

//I tried different names after props, not working

//BECAUSE in App.js, inside of render, we have cliked and changed
{/* <Persons
            ppl={this.state.ppl}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler} /> */}

//above replaces the original <CanbeAnything /> in App.js which are line 13 -20
