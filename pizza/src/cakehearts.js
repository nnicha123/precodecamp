import React from 'react';
import classes from './cakehearts.css';

const cake = (props) => (
    <div style={{
        opacity: props.show ? '1' : '0'
    }}>>
        <div className={classes.cakeBase}></div>
        <div className={classes.Cheese}
        style={{
            opacity:props.cheese ? '1':'0'
        }}></div>
        <div className={classes.Pepperoni}></div>
        <div className={classes.Mushroom}></div>
        <div className={classes.heart}></div>
        <div className={classes.Vegetablesone}></div>
        <div className={classes.heart}></div>
    </div>
)

export default cake