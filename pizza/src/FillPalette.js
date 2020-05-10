import React from 'react';
import classes from '../src/FillPalette.css'

const fillCake = (props) => (
    <div>
        <h2>Choose Color from Palette</h2>
        <button className={classes.pink}></button>
        <button className={classes.red}></button>
        <button className={classes.orange}></button>
        <button className={classes.yellow}></button>
        <button className={classes.green}></button>
        <button className={classes.blue}></button>
    </div>
)

export default fillCake