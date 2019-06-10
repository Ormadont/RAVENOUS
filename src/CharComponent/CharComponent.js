import React from 'react';

const CharComponent = props => {
    const style = {
        display: "inline-block", 
        padding: "16px", 
        textAlign: "center", 
        margin: "16px", 
        height: "20px",
        width: "20px",
        border: "1px solid green",
    }
    return (
        <span 
            style={style}
            onClick={props.click}
        >
            {props.ch}
        </span>
    )
}

export default CharComponent;