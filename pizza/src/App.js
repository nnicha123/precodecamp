import React, { Component } from 'react';
import PizzaIngredient from './Pizza/PizzaIngredient';
import PizzaTwo from './Pizzatwo';
import classes from './App.css';
import Heart from './heart';
import Button from './Button';
import ButtonCheese from './ButtonCheese';
import CakeHearts from './CakeHearts';
import ButtonHeart from './ButtonHeart';
import ButtonCake from './ButtonCake';
class App extends Component {
  state = {
      showPizza:false,
      Cheese:false,
      Hearts:false,
      showCake:false,
      topping:"linear-gradient(to bottom, rgb(206, 96, 178),rgb(218, 129, 195))"
  };

  addHeart = () => {
    if(this.state.Hearts){
      this.setState({Hearts:false})
    }else{
      this.setState({Hearts:true});
    }
  }

  addPizza = () => {
    if(this.state.showPizza){
      this.setState({showPizza:false})
      this.setState({Cheese:false})
    }else{
      this.setState({showPizza:true});
    }
  }
  addCake = () => {
    if(this.state.showCake){
      this.setState({showCake:false})
      this.setState({Hearts:false})
    }else{
      this.setState({showCake:true})
    }
  }
  addPinkTopping = () => {
    this.setState({topping:"linear-gradient(to bottom, rgb(206, 96, 178),rgb(218, 129, 195))"})
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
          <ButtonHeart clicked={this.addHeart}/>
          <ButtonCake clicked={this.addCake}/>
          <div className={classes.Pizza}>
            <PizzaIngredient show={this.state.showPizza}
            cheese={this.state.Cheese}/>
          </div>
          <div className={classes.PizzaTwo}>
            <PizzaTwo show={this.state.showPizza}
            cheese={this.state.Cheese}/>
          </div>
          <div className={classes.CakeHearts1}>
            <CakeHearts showC={this.state.showCake}
            topping={this.state.topping}/>
          </div>
          <div className={classes.CakeHearts2}>
            <CakeHearts showC={this.state.showCake}/>
          </div>
          <div className={classes.Hearts}>
            <Heart show={this.state.Hearts}/>
          </div>
          <div className={classes.Hearts2}>
            <Heart show={this.state.Hearts}/>
          </div>
          <div className={classes.Hearts3}>
            <Heart show={this.state.Hearts}/>
          </div>
          <div className={classes.Hearts4}>
            <Heart show={this.state.Hearts}/>
          </div>
          
        </div>
      </div>
    );

  }
}

export default App;
