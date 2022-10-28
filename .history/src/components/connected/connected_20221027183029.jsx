import React from 'react';
import styles from './connected.module.css';
import Footer from '../footer/footer';
import Header from '../header/header';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Team from '../team/team';


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
            <h2>❕게임에 대한 소개페이지</h2>
            <div>게임 방법소개</div>
            <div>각 페이지 및 메뉴소개</div>
            <h2>❕팀소개</h2>
            <Team />
            <div>한줄에 네명 아이콘과 이름 , 그리고 한줄소개</div>
        </section>
        <Footer/>
    </section>
    );
};
        

export default Connected;