import React from 'react';
import styles from './header.module.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StartGameButton from '../startGameButton/startGameButton';


const Header = ({authService, onLogin, mypage, shop,onLogout}) => {
    const [userex, setuserex] = useState(false);
    useEffect(()=> {
        authService
        .onAuthChange(user => {
            user && setuserex(true);
        });
      });


    return(
        <div id="header">
            <header className={styles.header}>
                <Link to="/shop">
                <div className={styles.logoTitle}>
                    <img className={styles.logo} src="/images/logo.png" alt='logo' />
                    <h1 className={styles.title}>PHONY</h1>
                </div>
                </Link>
                <div className={styles.buttons}>
                    {userex && (<Link to="/shop"><button className={shop ? styles.active : styles.button} >shop</button></Link>)}
                    {userex && (<Link to="/mypage"><button className={mypage ? styles.active : styles.button}>my page</button></Link>)}
                    {userex || (<button className={styles.button} onClick={onLogin}>login</button>)}
                    {userex && (<button className={styles.logoutButton} onClick={onLogout}>● connected</button>)}
        
                </div>

            </header>
            <div className={styles.startGame}>{userex && <StartGameButton />}</div>
            
        </div>

    );
}

export default Header;