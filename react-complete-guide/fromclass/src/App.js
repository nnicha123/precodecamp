import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
// Assignment part
import UserOutput from './User/UserOutput';
import UserInput from './User/UserInput';


class App extends Component {
  // state = {
  //   persons: [
  //     { name: 'Max', age: 28 },
  //     { name: 'Manu', age: 29 },
  //     { name: 'Stephanie', age: 26 }
  //   ],
  //   otherState: 'some other value'
  // }

  state = {
    useroutputs:  {username : 'username'}
  }

  // switchNameHandler = (newName) => {
  //   // console.log('Was clicked!');
  //   // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
  //   this.setState( {
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: 'Manu', age: 29 },
  //       { name: 'Stephanie', age: 27 }
  //     ]
  //   } )
  // }

  // nameChangedHandler = (event) => {
  //   this.setState( {
  //     persons: [
  //       { name: 'Max', age: 28 },
  //       { name: event.target.value, age: 29 },
  //       { name: event.target.value, age: 26 }
  //     ]
  //   } )
  // }

  // Add event handler method to manipulate output
  userNameHandler = (event) => {
    this.setState({
      useroutputs:{username : event.target.value}
    })
  }

  render () {

    const style = {
      backgroundColor: 'white',
      font:'inherit',
      border: '1px solid white',
      boxShadow:'0 2rem 6rem rgba(0,0,0,0.3)',
      padding: '8px',
      cursor:'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        {/* <button 
        style={style}
        onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} 
          changed={this.nameChangedHandler}/> */}
          {/* Pass using props */}
        <UserOutput username="nnicha123"/>
        {/* Pass using state */}
        <UserOutput 
        username={this.state.useroutputs.username}
        />
        <UserInput
        username={this.state.useroutputs.username}
        changer={this.userNameHandler}/>
      </div>
  
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
