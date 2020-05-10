import React from 'react';
import classes from './heart.css';

const heart = (props) => (
    <div className={classes.heart}
    style={{
        opacity: props.show ? '1' : '0'
    }}>
    </div>
)

export default heart;