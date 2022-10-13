import React from 'react';
import styles from './header.module.css'

const Header = ({authService, onLogin, goToConnected,onLogout}) => (
            <header className={styles.header}>
                <div className={styles.logoTitle}>
                    <img className={styles.logo} src="/images/logo.png" alt='logo' />
                    <h1 className={styles.title}>PHONY</h1>
                </div>
                <div className={styles.buttons}>
                    {onLogout && (<button className={styles.button}>shop</button>)}
                    {onLogout && (<button className={styles.button}>my page</button>)}
                    {onLogout || (<button className={styles.button} onClick={onLogin}>login</button>)}
                    {onLogout && (<button className={styles.logoutButton} onClick={onLogout}>● connected</button>)}
        
                </div>

                
            </header>
    );

export default Header;