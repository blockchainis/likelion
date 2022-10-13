import React from 'react';
import styles from './header.module.css'

const Header = ({onLogout, onLogin}) => (
            <header className={styles.header}>
                {onLogout && (<button className={styles.logout} onClick={onLogout}>Logout</button>)}
                <div className={styles.logoTitle}>
                    <img className={styles.logo} src="/images/logo.png" alt='logo' />
                    <h1 className={styles.title}>PHONY</h1>
                </div>

                <button className={styles.button} onClick={onLogin}>Google</button>
            </header>
    );

export default Header;