import React from 'react';
import styles from './connected.module.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';

const Connected = ({authService}) =>{
const history = useNavigate();
const onLogout = () => {
    authService.logout();
};
return (
    <section className={styles.all}>
        <Header onLogout={onLogout}/>
        <section className={styles.contents}>
            로그인이되엇엉
        </section>
        <Footer/>
    </section>
    );
};
        

export default Connected;