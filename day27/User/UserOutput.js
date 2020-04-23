import React from 'react';
import './UserOutput.css';

const useroutput = ( props ) => {
    return (
        <div className='userOutput'>
            <p >I am paragraph 1</p>
            <p>I am paragraph 2</p>
            <p>Username: {props.username}</p>
           
        </div>
    )
};

export default useroutput;