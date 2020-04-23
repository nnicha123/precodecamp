import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './Valid/ValidationComponent';

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
 
  }
}

export default App;
