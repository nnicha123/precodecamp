import React from 'react';
import classes from './PizzaIngredient.css';

const pizzaIngredient = (props) => (
    <div>
        <div className={classes.PizzaCrust}></div>
        <div className={classes.Cheese}></div>
        <div className={classes.Pepperoni}></div>
        <div className={classes.Mushroom}></div>
        <div className={classes.Vegetables}></div>
        <div className={classes.Vegetablesone}></div>
        <div className={classes.heart}></div>
    </div>
)

export default pizzaIngredient