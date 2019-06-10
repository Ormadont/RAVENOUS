import React from 'react';

const ValidationComponent = props => {
    const msg = (props.length<5) ? "Слишком коротко!" : "Слишмком длинно!";
    return (
        <p>
            <span>{msg}</span>
        </p>
    )
}

export default ValidationComponent;