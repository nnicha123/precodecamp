import React, { Component } from 'react';
import PizzaIngredient from './Pizza/PizzaIngredient';
import PizzaTwo from './Pizzatwo';
import classes from './App.css';
import Heart from './heart';
class App extends Component {

  render() {
    return (
      <div className={classes.App}>
        <div className={classes.Pizza}>
          <PizzaIngredient />
        </div>
        <div className={classes.PizzaTwo}>
          <PizzaTwo />
        </div>
        <Heart className={classes.Heart} />
      </div>
    );

  }
}

export default App;
