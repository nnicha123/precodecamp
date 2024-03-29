import React from 'react';

const validate = (props) => {
    return (
        <div className='validate'>
             <p>Input: {props.userInput}</p>
             <p>Valid: {props.validOK}</p>
             <input className="input" type="text" onChange={props.changed} value={props.userInput} />
        </div>
    )
};

export default validate;