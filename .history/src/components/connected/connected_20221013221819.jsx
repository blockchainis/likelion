import React from 'react';
import styles from './connected.module.css';
import Footer from '../footer/footer';
import Header from '../header/header';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Connected = ({authService}) =>{
    const history = useNavigate();
    useEffect(()=> {
        authService
        .onAuthChange(user => {
            user || history('/');
        });
    });
  

    const onLogout = () => {
        authService.logout();
  };

return (
    <section className={styles.all}>
        <Header authService={authService} onLogout={onLogout} />
        <section className={styles.contents}>
            <h2>❕게임에 대한 소개페이지</h2>
            <br />
            <h2>❕팀소개</h2>
            <div></div>
            <br />
        </section>
        <Footer/>
    </section>
    );
};
        

export default Connected;