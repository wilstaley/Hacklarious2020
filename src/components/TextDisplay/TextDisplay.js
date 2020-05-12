import React from 'react';
import style from './TextDisplay.module.css';

const TextDisplay = ({lyrics}) => {
    if( !lyrics ) return <></>;
    else if( lyrics === 'Generating Fake Lyrics...'){
        return <p className={style.loading}>{lyrics}</p>;
    }
    else return <p className={style.lyrics}>"{lyrics}"</p>;
}

export default TextDisplay;