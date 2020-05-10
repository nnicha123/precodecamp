import React from 'react';
import classes from '../src/FillPalette.css'

const fillCake = (props) => (
    <div>
        <h2>Choose Color from Palette</h2>
        <div className={classes.pink}></div>
        <div className={classes.red}></div>
        <div className={classes.orange}></div>
        <div className={classes.yellow}></div>
        <div className={classes.green}></div>
        <div className={classes.blue}></div>
    </div>
)

export default fillCake