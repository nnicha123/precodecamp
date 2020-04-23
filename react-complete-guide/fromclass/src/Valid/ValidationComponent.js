import React from 'react';

const validate = (props) => {
    return (
        <div className='validate'>
             <p>Input: {props.userInput}</p>
             <input className="input" type="text" onChange={props.changed} value={props.userInput} />
        </div>
    )
};

export default validate;