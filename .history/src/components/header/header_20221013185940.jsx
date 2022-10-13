import React from 'react';
import styles from './header.module.css'

const Header = ({authService, onLogin, goToConnected,onLogout}) => (
            <header className={styles.header}>
                <div className={styles.logoTitle}>
                    <img className={styles.logo} src="/images/logo.png" alt='logo' />
                    <h1 className={styles.title}>PHONY</h1>
                </div>
                <div className={styles.buttons}>
                    {onLogin && (<button className={styles.button}>shop</button>)}
                    {onLogin && (<button className={styles.button}>my page</button>)}
                    {onLogin || (<button className={styles.button}>● login</button>)}
                    {onLogin && (<button className={styles.logoutButton}>● connected</button>)}
        
                </div>

                
            </header>
    );

export default Header;