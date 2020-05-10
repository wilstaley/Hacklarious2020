import React, { useState } from 'react';
import axios from 'axios';
import getFakeLyrics from './services/fake.js';
import style from './App.module.css';
import { Header, InputDisplay, TextDisplay } from './components';

const App = () => {
    const [lyrics, setLyrics] = useState(null);
    
    const url = 'https://api.canarado.xyz/lyrics/';
    
    const fetchLyrics = async (title) => {
        setLyrics('Generating Fake Lyrics...');
        const data = await axios.get(`${url}${title}`);
        const fakeLyrics = await getFakeLyrics(data.data.content[0].lyrics);
        setLyrics(fakeLyrics);
        console.log(fakeLyrics);
    }
    
    return(
        <div className={style.wrapper}>
            <Header />
            <InputDisplay fetchLyrics={fetchLyrics}/>
            <TextDisplay lyrics={lyrics} />
        </div>
    );
}

export default App;