import React, { useState } from 'react';
import style from './InputDisplay.module.css';

const InputDisplay = ({fetchLyrics}) => {
    const [term, setTerm] = useState('');
    
    const submitSong = (e) => {
        e.preventDefault();
        fetchLyrics(term);
        console.log('term: ', term);
    }
    
    return(
        <form className={style.form} onSubmit={submitSong}>
            <input 
                type='text'
                value={term}
                placeholder='Find a song...'
                className={style.song_input}
                onChange={(e) => setTerm(e.target.value)}
            />
        </form>
    )
}

export default InputDisplay;