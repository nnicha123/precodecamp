import React from 'react';
import './UserInput.css';

const userinput = (props) => {
    return (
        <div className='userInput'>
             <input className="input" type="text" onChange={props.changer} value={props.username} />
        </div>
    )
};

export default userinput;