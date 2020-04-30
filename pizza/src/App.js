import React, { Component } from 'react';
import PizzaIngredient from './Pizza/PizzaIngredient';
import PizzaTwo from './Pizzatwo';
import classes from './App.css';
import Heart from './heart';
import Button from './Button';
class App extends Component {
  state = {
      showPizza:false,
      Cheese:false
  };

  addPizza = () => {
    this.setState({showPizza:true});
  }

  removeCheese = () => {
    this.setState({Cheese:false})
  }

  render() {
    return (
      <div>

        <div className={classes.App}>
          <Button clicked={this.addPizza}/>
          <div className={classes.Pizza}>
            <PizzaIngredient cheese={this.state.Cheese}/>
          </div>
          <div className={classes.PizzaTwo}>
            <PizzaTwo show={this.state.showPizza}/>
          </div>
          <Heart className={classes.Heart} />
        </div>
      </div>
    );

  }
}

export default App;
