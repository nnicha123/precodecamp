import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import ValidationComponent from './Valid/ValidationComponent';
// Assignment part now in day27 folder  
// import UserOutput from './User/UserOutput';
// import UserInput from './User/UserInput';

class App extends Component {

  state = {
    userInput: ''
  }

  inputChangedHandler = (event) => {
    this.setState({userInput: event.target.value})
    
  }

  render() {
    return (
      <div className="App">
        <hr/>
        <ValidationComponent
        userInput={this.state.userInput}
        changed={this.inputChangedHandler}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
