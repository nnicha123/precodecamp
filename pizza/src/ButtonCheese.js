import React from 'react';
import classes from './ButtonCheese.css'
const buttons = (props) => (
    <div>
       <button className={classes.Cheese}
       onClick={props.clicked}>Add Cheese</button>
    </div>
)

export default buttons;