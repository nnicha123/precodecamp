import React, { Component } from 'react';
import './App.css';
// Name has to have uppercase characters (lowercase preserved for html)
// Add component
import Person from './Person/Person'

class App extends Component {

  // state available in component that extends from class
  state = {
    persons: [
      {name:'Max', age:28},
      {name:'Manu', age:29},
      {name:'Stephanie', age:26}
    ]
  }
  switchNameHandler = () => {
    // DONT DO THIS this.state.persons[0].name = 'Maximillian'
    this.setState({persons: [
      {name:'Maximillan', age:28},
      {name:'Manu', age:29},
      {name:'Stephanie', age:27}
    ]})
  };
  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi I\'m a React App'));
  }
}

export default App;
