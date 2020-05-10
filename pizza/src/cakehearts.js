import React from 'react';
import classes from '../src/CakeHearts.css'

const cake = (props) => (
    <div style={{
        opacity: props.showC ? '1' : '0'
    }}>
        <div className={classes.CakeBase}></div>
        <div className={classes.CakeFill}></div>
        <div className={classes.ChocChip}></div>
    </div>
)

export default cake