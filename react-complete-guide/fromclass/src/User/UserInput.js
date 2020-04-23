import React from 'react';

const userinput = (props) => {
    return (
        <div className='userInput'>
             <input type="text" onChange={props.changer} value={props.username} />
        </div>
    )
};

export default userinput;