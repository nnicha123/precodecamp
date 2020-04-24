import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
class App extends Component {
  state = {
    persons: [
      {id:'123', name: 'Max', age: 28 },
      {id:'456', name: 'Manu', age: 29 },
      {id:'789', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    toolow: false
  }

  deletePersonHandler = (personIndex) => {
    // Should update state without changing the original state
        // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons});
    // React need to know which element has been changed and change only that element
  }

  nameChangedHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons:persons});

    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    let persons = null;
    let btnClass = [classes.Button];

    if(this.state.showPersons){
      persons = (
        <div>
          <Persons persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>   
        </div>
      );

      btnClass.push(classes.Red);
    }


    let assignedClasses = [];
    if(this.state.persons.length <= 2){
      assignedClasses.push('red');
    }
    if(this.state.persons.length <= 1){
      assignedClasses.push('bold');
    }
    if(this.state.persons.length >2){
      assignedClasses.push('green');
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className={btnClass.join(' ')}
          onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}

      </div>
    );
  }
}
// Component wrapping component to add functionality
export default App;
