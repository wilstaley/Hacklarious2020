import React from 'react';
import style from './Header.module.css'; 

const Header = () => {
    return(
        <div className={style.header}>
            <h1 className={style.title}>Lyrical Miracle 🎶</h1>
            <h4 className={style.subtitle}>Remixing lyrics since 2020</h4>
            <p className={style.info}>
                <span className={style.question} >What is Lyrical Miracle?</span>
                Have you ever had song lyrics in your head that you thought were
                the correct lyrics, just to find out later that you were wrong? 
                Lyrical Miracle is a site that intentionally generates fake 
                lyrics for any song your heart desires. It replaces words in the
                original lyrics with words that sound similar (but are 
                definitely wrong).
            </p>
            <p className={style.info}>
                <span className={style.question} >Why Though?</span>
                This site was originally created for <a href='https://hacklarious.devpost.com/' target='_blank'>
                Hacklarious 2020</a>: a hackathon for creating something funny 
                and/or pointless.
            </p>
        </div>
    );
}

export default Header;