import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './main.module.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Team from '../team/team';
import HowToPlay from '../howToPlay/howToPlay';


const Main = ({authService}) => {
    //login용 기본 함수
    const history = useNavigate();
    const goToConnected = (userId) => {history({pathname : '/connected', state : {id: userId},})};
    useEffect(()=> {
      authService
      .onAuthChange(user => {
          user && goToConnected(user.uid);
      });
    });
  
    const onLogin = () => {
      authService.login()
      .then(data => goToConnected(data.user.uid));
  };
    return (
        <section className="all">
            <Header authService={authService} onLogin={onLogin} goToConnected={goToConnected}/>
            <section className={styles.mobileContents}>모바일 환경에서는 접속이 되지 않습니다. <br />데스크탑 환경에서 접속해주세요.
            <img src="./images/nomobile.png" alt="no mobile" />
            </section>
            <section className={styles.contents}>
                <h2>❕지갑연결 안내(안전한지갑연결):기획의도 연결, 로그인후에는 안내없음</h2>
                <h2>❕게임에 대한 소개페이지</h2>
                    <HowToPlay />
                <h2>❕팀소개</h2>
                    <Team />
                <p></p>
            </section>
            <Footer/>
        </section>
    );
};
            

export default Main;