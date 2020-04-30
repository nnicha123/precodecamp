import React, { Component } from 'react';
import PizzaIngredient from './Pizza/PizzaIngredient';
import PizzaTwo from './Pizzatwo';
import classes from './App.css';
import Heart from './heart';
import Button from './Button';
class App extends Component {

  render() {
    return (
      <div>

        <div className={classes.App}>
          <Button />
          <div className={classes.Pizza}>
            <PizzaIngredient />
          </div>
          <div className={classes.PizzaTwo}>
            <PizzaTwo />
          </div>
          <Heart className={classes.Heart} />
        </div>
      </div>
    );

  }
}

export default App;
