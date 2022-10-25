import React from 'react';
import styles from './shop.module.css';
import Footer from '../footer/footer';
import Header from '../header/header';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Shop = ({authService}) =>{
    const shop = true;
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
        <div className="hye">dd</div>
        <Header authService={authService} onLogout={onLogout} shop={shop}/>
        <section className={styles.mobileContents}>모바일 환경에서는 접속이 되지 않습니다. <br />데스크탑 환경에서 접속해주세요.
        <img src="./images/nomobile.png" alt="no mobile" />
        </section>
        <section className="contents">
            <h1>shop</h1>
            <h1>❕프로필사진(3D) active item, 구매페이지</h1>
            <h1>❓구매페이지</h1>
            <h1>
            ❓구매 형식:민팅, 오픈씨 연동<br />
            ❓구매 코인: 자체코인, (자체코인 소각 가능. 코인가치 상승), klay(난이도 낮음)<br />
            ❓아이템 종류: 라이어티켓, 라이어확률 낮추는 티켓++, 닉네임 변경권, 앞으로 업데이트 된다는 사인줌 <br />

            <br />
            </h1>
        </section>
        <Footer/>
    </section>
    );
};
        

export default Shop;