import React from 'react';
import styles from './connected.module.css';

import Footer from '../footer/footer';
import Header from '../header/header';


const Connected = ({authService, onLogin, goToConnected,onLogout}) =>{

return (
    <section className={styles.all}>
        <Header authService={authService} onLogin={onLogin} goToConnected={goToConnected} onLogout={onLogout}/>
        <section className={styles.contents}>
            로그인이되엇엉
        </section>
        <Footer/>
    </section>
    );
};
        

export default Connected;