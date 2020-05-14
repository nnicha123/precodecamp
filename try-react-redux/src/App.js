import React,{Component} from 'react';
// to connect state from reducer to app
import {connect} from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>Name : {this.props.name}</div>
    </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    name:state.name,
    age:state.age
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch({type:AGE_UP}),
    onAgeDown: () => dispatch({type:AGE_DOWN}),
    onChangeName: () => dispatch({type:CHANGE_NAME})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
