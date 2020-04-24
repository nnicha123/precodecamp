import React from 'react';

const char = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '1px solid black',
        textAlign: 'center',
        boxShadow:'0 2rem 6rem rgba(0,0,0,0.6)'
    };

    return (
        <div style={style} onClick={props.clicked}>
            {props.character}
        </div>
    );
};

export default char;