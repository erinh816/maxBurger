//we will still do Persons as a functional component, that will never be wrong
import React from 'react';
import CanbeAnything from './Person/Person';

const persons = (props) => props.ppl.map((wow, indexwow) => {
    return <CanbeAnything
        click={() => props.clicked(indexwow)}
        name={wow.name}
        age={wow.age}
        key={wow.id}
        changedErin={(event) => props.changed(event, wow.id)} />
});

export default persons;
