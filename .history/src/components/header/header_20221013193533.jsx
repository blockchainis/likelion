import React from 'react';
import styles from './header.module.css'
import { useState, useEffect } from 'react';

const Header = ({authService, onLogin, goToConnected,onLogout}) => {
    const [userex, setuserex] = useState(false);
    useEffect(()=> {
        authService
        .onAuthChange(user => {
            user && setuserex(true);
        });
      });


    return(
            <header className={styles.header}>
                <div className={styles.logoTitle}>
                    <img className={styles.logo} src="/images/logo.png" alt='logo' />
                    <h1 className={styles.title}>PHONY</h1>
                </div>
                <div className={styles.buttons}>
                    {1 && (<button className={styles.button}>shop</button>)}
                    {userex && (<button className={styles.button}>my page</button>)}
                    {userex || (<button className={styles.button} onClick={onLogin}>login</button>)}
                    {userex && (<button className={styles.logoutButton} onClick={onLogout}>● connected</button>)}
        
                </div>

                
            </header>
    );
}

export default Header;