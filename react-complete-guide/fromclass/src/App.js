import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
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

    let str = 'one'
    let len = str.length;
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
    }

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
        <button className='button'
          // style={style}
          onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
        {/* Ternary expression */}
      </div>
    );
  }
}
// Component wrapping component to add functionality
export default App;
