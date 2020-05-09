import React, { useState } from 'react';
import axios from 'axios';
import getFakeLyrics from './services/fake.js';
import style from './App.module.css';
import { InputDisplay, TextDisplay } from './components';

const App = () => {
    const [lyrics, setLyrics] = useState(null);
    
    const url = 'https://api.canarado.xyz/lyrics/';
    
    const fetchLyrics = async (title) => {
        const data = await axios.get(`${url}${title}`);
        const fakeLyrics = await getFakeLyrics(data.data.content[0].lyrics);
        setLyrics(fakeLyrics);
        console.log(fakeLyrics);
    }
    
    return(
        <div>
            <h1>App</h1>
            <InputDisplay fetchLyrics={fetchLyrics}/>
            <TextDisplay lyrics={lyrics} />
        </div>
    );
}

export default App;