import React from 'react';
import styles from './mypage.module.css';
import Footer from '../footer/footer';
import Header from '../header/header';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const MyPage = ({authService}) =>{
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
            <h2>프로필사진은 NFT가 될 것인지 아니면 이미지파일이 될 것인지</h2>
            
            사진(간단! 간편, 하지만 프로퍼티가 적음), nft(프로퍼티가 충분히 많지만 유저 수 제한 있음- 주로 엔에프티 발급은 한정된 수량으로 이루어지기 때문)
            /<br />
            내프로필사진 - wearable NFT(내가 active 시킨 아이템이 뭔지 직관적으로 확인가능)
            / active 아이템목록(직관적으로 확인은 불가능하나 개발이 쉬움)<br />
            내가 가지고 있는 nft 목록 <br />


        </section>
        <Footer/>
    </section>
    );
};
        

export default MyPage;