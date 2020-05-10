import React from 'react';
import classes from './PizzaIngredient.css';

const pizzaIngredient = (props) => (
    <div style={{
        opacity: props.show ? '1' : '0'
    }}>
        <div className={classes.PizzaCrust}></div>
        <div className={classes.Cheese}
        style={{
            opacity:props.cheese ? '1':'0'
        }}></div>
        <div style={{opacity:props.pepperoni ? '1' : '0'}} className={classes.Pepperoni}></div>
        <div style={{opacity:props.mushroom ? '1' : '0'}} className={classes.Mushroom}></div>
        <div style={{opacity:props.vegetables ? '1' : '0'}} className={classes.Vegetables}></div>
        <div style={{opacity:props.vegetables ? '1' : '0'}} className={classes.Vegetablesone}></div>
        <div style={{opacity:props.sausage ? '1' : '0'}} className={classes.Sausage}></div>
        <div className={classes.heart}></div>
    </div>
)

export default pizzaIngredient