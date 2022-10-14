import React from 'react';
import styles from './shop.module.css';
import Footer from '../footer/footer';
import Header from '../header/header';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Shop = ({authService}) =>{
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
            <h2>프로필사진 active item, 구매페이지</h2>
            <h2>?구매페이지</h2>
            구매 형식: 한정수량아이템(민팅) vs 비한정수량<br />
            구매 코인: 자체코인 = 자체코인 소각 가능. 코인가치 상승<br />
            아이템 종류: 라이어티켓, 라이어확률 낮추는 티켓....앞으로 업데이트 된다는 사인만 주어도 좋지 않을지 <br />
            <br />
        </section>
        <Footer/>
    </section>
    );
};
        

export default Shop;