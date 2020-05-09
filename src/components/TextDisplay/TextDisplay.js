import React from 'react';
import style from './TextDisplay.module.css';

const TextDisplay = ({lyrics}) => {
    return lyrics ? (
        <p>{lyrics}</p>
    )
    : <></>
}

export default TextDisplay;