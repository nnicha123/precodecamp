import React from 'react';
import classes from '../src/PizzaTopping.css';

const topping = (props) => (
    <div>
        <h2 className={classes.h2Topping}>Choose Pizza Toppings</h2>
        <button className={classes.Pepperoni} onClick={props.addPepperoni}></button>
        <button className={classes.Mushroom} onClick={props.addMushroom}></button>
        <button className={classes.Vegetables} onClick={props.addVegetables}></button>
        <button className={classes.Vegetablesone} onClick={props.addVegetables}></button>
        <button className={classes.Sausage} onClick={props.addSausage}></button>
    </div>
)

export default topping