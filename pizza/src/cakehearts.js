import React from 'react';
import classes from '../src/CakeHearts.css';
import FillPalette from '../src/FillPalette';

const cake = (props) => (
    <div style={{
        opacity: props.showC ? '1' : '0'
    }}>
        <div className={classes.CakeBase}></div>
        <FillPalette fill={props.topping}/>
        {/* <div className={classes.CakeFill} style={{backgroundImage: props.topping}}></div> */}
        <div className={classes.ChocChip}></div>
    </div>
)

export default cake