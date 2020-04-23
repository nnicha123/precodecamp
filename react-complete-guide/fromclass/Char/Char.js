import React from 'react';

const char = (props) => {
    const style = {
        display:'inline-block',
        padding:'16px',
        margin:'16px',
        border:'1px solid black',
        textAlign:'center',
        color:'black'
    };

    return (
        <div style={style} onClick={props.clicked}>
            {props.charactor}
        </div>
    )
};

export default char;