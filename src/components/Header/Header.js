import React from 'react';
import style from './Header.module.css'; 

const Header = () => {
    return(
        <div className={style.header}>
            <h1 className={style.title}>Lyrical Miracle</h1>
            <h4 className={style.subtitle}>Remixing lyrics since 2020</h4>
        </div>
    );
}

export default Header;