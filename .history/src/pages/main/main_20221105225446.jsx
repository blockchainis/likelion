import React from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import styles from './main.module.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Team from '../../components/team/team';
import HowToPlay from '../../components/howToPlay/howToPlay';


const Main = () => {
    //login용 기본 함수
    const {user} = useAuth();
    const history = useNavigate();
    useEffect(()=> {
        if (user && localStorage.getItem('_user')){
            history('/connected');
        }
    },);

    return (
        <section className="all">
            <Header/>
            <section className={styles.mobileContents}>모바일 환경에서는 접속이 되지 않습니다. <br />데스크탑 환경에서 접속해주세요.
            <img src="./images/nomobile.png" alt="no mobile" />
            </section>
            <section className={styles.contents}>
                <h2>❕지갑연결 안내(안전한지갑연결):기획의도 연결, 로그인후에는 안내없음</h2>
                <HowToPlay />
                <Team />
            </section>
            <Footer/>
        </section>
    );
};
            

export default Main;