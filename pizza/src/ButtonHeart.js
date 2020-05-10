import React from 'react';
import classes from './ButtonHeart.css'
const buttons = (props) => (
    <div>
       <button className={classes.Heart}
       onClick={props.clicked}>Add Heart</button>
    </div>
)

export default buttons;