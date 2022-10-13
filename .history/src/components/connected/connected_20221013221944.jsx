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
            <div>게임 방법소개</div>
            <div>각 페이지 및 메뉴소개</div>
            <h2>❕팀소개</h2>
            <div>한줄에 네명 아이콘과 이름 , 그리고 한줄소개</div>
        </section>
        <Footer/>
    </section>
    );
};
        

export default Connected;