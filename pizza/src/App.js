import React, { Component } from 'react';
import PizzaIngredient from './Pizza/PizzaIngredient';
import PizzaTwo from './Pizzatwo';
import classes from './App.css';
import Heart from './heart';
import Button from './Button';
import ButtonCheese from './ButtonCheese';
import CakeHearts from './CakeHearts';
class App extends Component {
  state = {
      showPizza:false,
      Cheese:false
  };

  addPizza = () => {
    if(this.state.showPizza){
      this.setState({showPizza:false})
    }else{
      this.setState({showPizza:true});
    }
  }

  removeCheese = () => {
    if(this.state.Cheese){
      this.setState({Cheese:false})
    }else{
      this.setState({Cheese:true});
    }
  }

  render() {
    return (
      <div>
        <div className={classes.App}>
          <Button clicked={this.addPizza}/>
          <ButtonCheese clicked={this.removeCheese}/>
          <div className={classes.Pizza}>
            <PizzaIngredient cheese={this.state.Cheese}/>
          </div>
          <div className={classes.PizzaTwo}>
            <PizzaTwo show={this.state.showPizza}
            cheese={this.state.Cheese}/>
          </div>
          <div className={classes.CakeHearts1}>
            <CakeHearts show={this.state.showPizza}/>
          </div>
          <div className={classes.CakeHearts2}>
            <CakeHearts show={this.state.showPizza}/>
          </div>
          <div className={classes.Hearts}>
            <Heart className={classes.Heart} />
          </div>
          <div className={classes.Hearts2}>
            <Heart className={classes.Heart} />
          </div>
          
        </div>
      </div>
    );

  }
}

export default App;
