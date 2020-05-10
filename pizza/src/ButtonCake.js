import React from 'react';
import classes from './ButtonCake.css'

const buttoncake = (props) => (
    <div>
       <button className={classes.ButtonCake}
       onClick={props.clicked}>Add Cake</button>
    </div>
)

export default buttoncake;