import React from 'react';
import classes from '../src/GirlOrder.css';

const girl = (props) => (
    <div>
        <div className={classes.Face}></div>
        <div className={classes.Hair}></div>
        <div className={classes.Eyes}></div>
        <div className={classes.Mouth}></div>
        <div style={{transform:'scale(1.5)'}} className={classes.Skirt}></div>
    </div>
)

export default girl