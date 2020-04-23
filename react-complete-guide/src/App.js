import React, { useState } from 'react';
import './App.css';
// Name has to have uppercase characters (lowercase preserved for html)
// Add component
import Person from './Person/Person'

const app = props => {
  const [personState, setPersonsState] = useState({
       persons: [
         {name:'Max', age:28},
         {name:'Manu', age:29},
         {name:'Stephanie', age:26}
       ]
     });

     const [otherState,setOtherState] = useState('new other value');
     console.log(personState,otherState);

     const switchNameHandler = (newname) => {
        // DONT DO THIS this.state.persons[0].name = 'Maximillian'
        setPersonsState({persons: [
          {name:newname, age:28},
          {name:'Manu', age:29},
          {name:'Stephanie', age:27}
        ]
      });
    }

    let nameChangedHandler = (event) => {
      this.setState({
        persons:[
          {name:'Max', age:28},
          {name:event.target.value, age:29},
          {name:'Stephanie', age:26}
        ]
      })
    }
    
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={switchNameHandler.bind(this,'Maximillian')}>Switch Name</button>
        <Person 
          name={personState.persons[0].name} 
          age={personState.persons[0].age}/>
        <Person 
          name={personState.persons[1].name} 
          age={personState.persons[1].age}
          click={switchNameHandler.bind(this,'Macy!')}
          changed={nameChangedHandler}>My Hobbies: Racing</Person>
        <Person 
          name={personState.persons[2].name} 
          age={personState.persons[2].age}/>
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi I\'m a React App'));
}

export default app;

// state = {
//   persons: [
//     {name:'Max', age:28},
//     {name:'Manu', age:29},
//     {name:'Stephanie', age:26}
//   ]
// }
// switchNameHandler = () => {
//   // DONT DO THIS this.state.persons[0].name = 'Maximillian'
//   this.setState({persons: [
//     {name:'Maximillan', age:28},
//     {name:'Manu', age:29},
//     {name:'Stephanie', age:27}
//   ]})
// }
