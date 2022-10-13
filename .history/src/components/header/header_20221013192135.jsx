import React from 'react';
import { useEffect } from 'react';
import styles from './header.module.css'
useEffect

const Header = ({authService, onLogin, goToConnected,onLogout}) => {
    const userex = false;
    useEffect(()=> {
        authService
        .onAuthChange(user => {
            user && (userex == true);
        });
      });


    return(
            <header className={styles.header}>
                <div className={styles.logoTitle}>
                    <img className={styles.logo} src="/images/logo.png" alt='logo' />
                    <h1 className={styles.title}>PHONY</h1>
                </div>
                <div className={styles.buttons}>
                    {authService.state || (<button className={styles.button}>shop</button>)}
                    {authService.state || (<button className={styles.button}>my page</button>)}
                    {authService.state && (<button className={styles.button} onClick={onLogin}>login</button>)}
                    {authService.state || (<button className={styles.logoutButton} onClick={onLogout}>● connected</button>)}
        
                </div>

                
            </header>
    );
}

export default Header;