import React from 'react';
import style from './TextDisplay.module.css';

const TextDisplay = ({lyrics}) => {
    return lyrics ? (
        <p className={style.lyrics}>{lyrics}</p>
    )
    : <p className={style.loading}></p>
}

export default TextDisplay;