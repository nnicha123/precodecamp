import React from 'react';
import classes from '../src/FillPalette.css'

const fillCake = (props) => (
    <div style={{
        opacity: props.showC ? '1' : '0'
    }}>
        <div className={classes.CakeFill} style={{backgroundImage: props.fill}}></div>
    </div>
)

export default fillCake