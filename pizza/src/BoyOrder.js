import React from 'react';
import classes from '../src/BoyOrder.css';

const boy = (props) => (
    <div>
        <div className={classes.Face}></div>
        <div className={classes.Hair}></div>
        <div className={classes.Eyes}></div>
        <div className={classes.Pupil}></div>
        <div className={classes.Mouth}></div>
        <div style={{transform:'scale(1.5)'}} className={classes.Shirt}></div>
        <div className={classes.Pant}></div>
        <div className={classes.Arm} ></div>
    </div>
)

export default boy