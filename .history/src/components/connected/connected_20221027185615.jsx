import React from 'react';
import styles from './connected.module.css';
import Footer from '../footer/footer';
import Header from '../header/header';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Team from '../team/team';
import HowToPlay from '../howToPlay/howToPlay';


const Connected = ({authService}) =>{
    //login용 기본 함수
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
    <section className="all">
        <Header authService={authService} onLogout={onLogout} />
        <section className={styles.mobileContents}>모바일 환경에서는 접속이 되지 않습니다. <br />데스크탑 환경에서 접속해주세요.
        <img src="./images/nomobile.png" alt="no mobile" />
        </section>
        <section className={styles.contents}>
            <HowToPlay/>
            <div >게임 방법소개</div>
            <div>각 페이지 및 메뉴소개</div>
            <Team />
        </section>
        <Footer/>
    </section>
    );
};
        

export default Connected;