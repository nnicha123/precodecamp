import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium from 'radium';
// import ValidationComponent from './Valid/ValidationComponent';
// Assignment part now in day27 folder  
// import UserOutput from './User/UserOutput';
// import UserInput from './User/UserInput';

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

  // state = {
  //   useroutputs:  {username : 'username'}
  // }

  // switchNameHandler = (newName) => {
  //   // console.log('Was clicked!');
  //   // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: 'Manu', age: 29 },
  //       { name: 'Stephanie', age: 27 }
  //     ]
  //   })
  // }

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

    let str = 'one'
    let len = str.length;

    const style = {
      backgroundColor: 'green',
      color:'white',
      font: 'inherit',
      border: '1px solid white',
      boxShadow: '0 2rem 6rem rgba(0,0,0,0.3)',
      padding: '8px',
      cursor: 'pointer',
      // Radium makes sure you can do this
      ':hover':{
        backgroundColor:'lightgreen',
        color:'black'
      }
    }

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
             // React need to know which element has been changed and change only that element
            // To remove warning *more efficient
             key={person.id}
             changed={(event) => this.nameChangedHandler(event,person.id)}/>
          })}
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor:'salmon',
        color:'black'
      }
    }

    // Create new variable to style
    // let classes = ['red','bold'].join(' '); //get "red bold" (valid class declaration);
    let classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold');
    }
    if(this.state.persons.length >2){
      classes.push('green');
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        {/* Assign class string to p className */}
        <p className={classes.join(' ')}>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
        {/* Ternary expression */}
      </div>

    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}
// Component wrapping component to add functionality
export default Radium(App);
