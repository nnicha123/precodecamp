import React from 'react';
import classes from './Button.css';

const button = (props) => (
    <div className={classes.Button}>
       <button className={classes.ButtonAdd}
       onClick={props.clicked}>Add Pizza</button>
       <button className={classes.ButtonDel}>Delete Pizza</button>
       <button className={classes.Cheese}
       onClick={props.cheese}>Cheese</button>
    </div>
)

export default button;