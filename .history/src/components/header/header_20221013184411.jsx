import React from 'react';
import styles from './header.module.css'

const Header = ({authService, onLogin, goToConnected,onLogout}) => (
            <header className={styles.header}>
                {authService.state && (<button className={styles.logout} onClick={onLogout}>Logout</button>)}
                <div className={styles.logoTitle}>
                    <img className={styles.logo} src="/images/logo.png" alt='logo' />
                    <h1 className={styles.title}>PHONY</h1>
                </div>
                <div className={styles.buttons}>
                    {1 && (<button className={styles.button}>shop</button>)}
                    {1 && (<button className={styles.button}>my page</button>)}
                    {0 || (<button className={styles.button}>● login</button>)}
                    {1 && (<button className={styles.logoutButton}>● connected</button>)}
        
                </div>

                
            </header>
    );

export default Header;