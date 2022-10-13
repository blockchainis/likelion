import React from 'react';
import styles from './header.module.css'

const Header = ({onLogout, onLogin, authService}) => (
            <header className={styles.header}>
                {onLogout && (<button className={styles.logout} onClick={onLogout}>Logout</button>)}
                <div className={styles.logoTitle}>
                    <img className={styles.logo} src="/images/logo.png" alt='logo' />
                    <h1 className={styles.title}>PHONY</h1>
                </div>
                <div className={styles.buttons}>
                    {1 || (<button className={styles.button}>shop</button>
                    <button className={styles.button}>my page</button>)}
                    
                    <button className={styles.loginButton} onClick={onLogin}>● Google</button>}
                </div>

                
            </header>
    );

export default Header;