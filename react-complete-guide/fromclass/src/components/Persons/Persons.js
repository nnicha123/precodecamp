import React from 'react';
import Person from './Person/Person'

const persons = (props) => props.persons.map((person,index) => {
        return <Person 
        click={() => props.clicked(index)}
        name={person.name}
        age={person.age}
         // React need to know which element has been changed and change only that element
        // To remove warning *more efficient
         key={person.id}
         changed={(event) => props.changed(event,person.id)}/>
      });

export default persons;