import React from 'react';
import classes from './Button.css';

const button = (props) => (
    <div className={classes.Button}>
       <button className={classes.ButtonAdd}>Add Pizza</button>
       <button className={classes.ButtonDel}>Delete Pizza</button>
    </div>
)

export default button;