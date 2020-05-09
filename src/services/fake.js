import axios from 'axios';

const getNumSyllables = word => {
    word = word.toLowerCase();
    if(word.length <= 3) return 1;
    word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
    word = word.replace(/^y/, '');
    return word.match(/[aeiouy]{1,2}/g).length;
}

const getFakeLyrics = async (realLyrics) => {
    const url = 'https://api.datamuse.com/words';
    realLyrics = realLyrics.replace(/\[.*\]/g, '') //Remove song sections
    realLyrics = realLyrics.replace(/[^a-zA-Z\s]/g, ""); //Remove non-alphabetical chars
    realLyrics = realLyrics.split(/[\n\s]+/)
    
    let fakeLyrics = [];
    
    for(let idx in realLyrics){
        let word = realLyrics[idx];
        let numSyllables = getNumSyllables(word);
        if(numSyllables > 1){
            let rhymes = await axios.get(`${url}?rel_rhy=${word}&max=20&md=s`);
            rhymes = rhymes.data.filter(word => {
                return word.numSyllables === numSyllables && !word.word.includes(' ');
            });
            if(rhymes.length > 0){
                const rhyme = rhymes[Math.floor(Math.random() * rhymes.length)].word;
                fakeLyrics.push(rhymes[0].word);
            }
            else fakeLyrics.push(word);
        }
        else fakeLyrics.push(word)
    }
    return fakeLyrics.join(' ');
}

export default getFakeLyrics;