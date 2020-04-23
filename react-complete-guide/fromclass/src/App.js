import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import ValidationComponent from './Valid/ValidationComponent';
// Assignment part now in day27 folder  
// import UserOutput from './User/UserOutput';
// import UserInput from './User/UserInput';

class App extends Component {

  state = {
    userInput: '',
    validOK: "to short"
  }

  inputChangedHandler = (event) => {
   this.setState({userInput: event.target.value});
    let str = this.state.userInput;
    if(str.length >= 5){
      this.setState({validOK:"too long"})
    }else{
      this.setState({validOK:"too short"})
    }
    
  
  }

  // checkValid = (str) => {
  //   if(str.length >= 5){
  //     this.setState({validOK:"too long"})
  //   }
  // }

  render() {
    return (
      <div className="App">
        <hr/>
        <ValidationComponent
        userInput={this.state.userInput}
        validOK={this.state.validOK}
        changed={this.inputChangedHandler}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
