import React from 'react';
import styles from './header.module.css'

const Header = ({onLogout, onLogin}) => (
            <header className={styles.header}>
                {onLogout && (<button className={styles.logout} onClick={onLogout}>Logout</button>)}
                <img className={styles.logo} src="/images/logo.png" alt='logo' />
                <h1 className={styles.title}>PHONY</h1>
                <button className={styles.button} onClick={onLogin}>Google</button></li>
            </header>
    );

export default Header;