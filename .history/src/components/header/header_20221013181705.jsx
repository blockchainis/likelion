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
                    {authService.user && (<button className={styles.button}>shop</button>)}
                    {1 && (<button className={styles.button}>my page</button>)}
                    {1 || (<button className={styles.button} onClick={onLogin}>● login</button>)}
                    {1 && (<button className={styles.logoutButton} onClick={onLogout}>● connected</button>)}
        
                </div>

                
            </header>
    );

export default Header;