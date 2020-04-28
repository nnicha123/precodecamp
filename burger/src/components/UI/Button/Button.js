import React from 'react';
import classes from'./Button.css';
// Set btnType from outside so need to pass array of strings and then join to have 2 classes 'class1 class2'
const button = (props) => (
    <button
    className={[classes.Button,classes[props.btnType]].join(' ')}
    onClick={props.clicked}>{props.children}</button>
)

export default button;