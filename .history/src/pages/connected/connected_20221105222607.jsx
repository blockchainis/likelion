import React from 'react';
import styles from './connected.module.css';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Team from '../../components/team/team';
import HowToPlay from '../../components/howToPlay/howToPlay';


const Connected = ({authService}) =>{
    //login용 기본 함수
    const history = useNavigate();
    useEffect(()=> {
        if (!user || !localStorage.getItem('_user')){
            history('/');
        }

    },);
    const onLogout = () => {
        console.log('logout');
  };
return (
    <section className="all">
        <Header authService={authService} onLogout={onLogout} />
        <section className={styles.mobileContents}>모바일 환경에서는 접속이 되지 않습니다. <br />데스크탑 환경에서 접속해주세요.
        <img src="./images/nomobile.png" alt="no mobile" />
        </section>
        <section className={styles.contents}>
            <HowToPlay/>
            <Team />
        </section>
        <Footer/>
    </section>
    );
};
        

export default Connected;