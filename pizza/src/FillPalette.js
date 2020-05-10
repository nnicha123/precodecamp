import React from 'react';
import classes from '../src/FillPalette.css'

const fillCake = (props) => (
    <div>
        <h2>Choose Color from Palette</h2>
        <button className={classes.pink} onClick={props.clickPink}></button>
        <button className={classes.red} onClick={props.clickRed}></button>
        <button className={classes.orange} onClick={props.clickOrange}></button>
        <button className={classes.yellow} onClick={props.clickYellow}></button>
        <button className={classes.green} onClick={props.clickGreen}></button>
        <button className={classes.blue} onClick={props.clickBlue}></button>
    </div>
)

export default fillCake