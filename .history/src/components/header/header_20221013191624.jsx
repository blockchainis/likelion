import React from 'react';
import styles from './header.module.css'

const Header = ({authService, onLogin, goToConnected,onLogout}) => (
            <header className={styles.header}>
                <div className={styles.logoTitle}>
                    <img className={styles.logo} src="/images/logo.png" alt='logo' />
                    <h1 className={styles.title}>PHONY</h1>
                </div>
                <div className={styles.buttons}>
                    {authService.state.user || (<button className={styles.button}>shop</button>)}
                    {authService.state.user || (<button className={styles.button}>my page</button>)}
                    {authService.state.user && (<button className={styles.button} onClick={onLogin}>login</button>)}
                    {authService.state.user || (<button className={styles.logoutButton} onClick={onLogout}>● connected</button>)}
        
                </div>

                
            </header>
    );

export default Header;