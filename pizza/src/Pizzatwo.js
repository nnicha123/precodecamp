import React from 'react';
import classes from './Pizzatwo.css';

const pizzaIngredient = (props) => (
    <div style={{
        opacity: props.show ? '1' : '0'
    }}>
        <div className={classes.PizzaCrust}></div>
        <div className={classes.Cheese}
        style={{
            opacity:props.cheese ? '1':'0'
        }}></div>
        <div className={classes.Pepperoni}></div>
        <div className={classes.Mushroom}></div>
        <div className={classes.Vegetables}></div>
        <div className={classes.Vegetablesone}></div>
        <div className={classes.heart}></div>
    </div>
)

export default pizzaIngredient