import React, { useState } from 'react';
import axios from 'axios';
import getFakeLyrics from './services/fake.js';
import style from './App.module.css';
import { InputDisplay } from './components';

const App = () => {
    const [lyrics, setLyrics] = useState(null);
    
    const url = 'https://api.canarado.xyz/lyrics/';
    
    const fetchLyrics = async (title) => {
        const data = await axios.get(`${url}${title}`);
        setLyrics(data.data.content[0].lyrics);
        console.log(lyrics);
        console.log(getFakeLyrics(lyrics));
    }
    return(
        <div>
            <h1>App</h1>
            <InputDisplay fetchLyrics={fetchLyrics}/>
        </div>
    );
}

export default App;