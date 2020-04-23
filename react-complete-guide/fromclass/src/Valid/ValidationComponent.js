import React from 'react';

const validate = (props) => {
    let valid = "Too short"

    if( props.inputLength >= 5){
        valid = "Long enough";
    }
    return (
        <div className='validate'>
             <p>{valid}</p>
        </div>
    )
};

export default validate;