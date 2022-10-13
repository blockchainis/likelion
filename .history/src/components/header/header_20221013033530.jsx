import React from 'react';
import styles from './header.module.css'

const Header = ({onLogout, onLogin}) => (
            <header className={styles.header}>
                {onLogout && (<button className={styles.logout} onClick={onLogout}>Logout</button>)}
                <div className={styles.logoTitle}>
                    <img className={styles.logo} src="/images/logo.png" alt='logo' />
                    <h1 className={styles.title}><i class="fa-light fa-pegasus"></i>PHONY</h1>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.button}>shop</button>
                    <button className={styles.button}>my page</button>
                    <button className={styles.button} onClick={onLogin}>Google</button>
                </div>

                
            </header>
    );

export default Header;