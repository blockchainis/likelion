import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './main.module.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Main = ({authService}) => {
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
                    <div>게임 방법소개</div>
                    <div>각 페이지 및 메뉴소개</div>
                <h2>❕팀소개</h2>
                    <div>한줄에 네명 아이콘과 이름 , 그리고 한줄소개</div>
                <p></p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur, veritatis ad reiciendis ducimus officiis eligendi. Magnam soluta unde dicta, fuga iusto fugiat dolore maxime sunt id nisi, non culpa.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorum eaque porro ratione nihil at repudiandae deleniti ducimus temporibus unde quasi praesentium, excepturi dolores recusandae labore eum numquam quae fugit?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nihil enim eius unde saepe earum, dicta ex, nesciunt amet debitis, animi sunt ab itaque. Dicta consectetur quod eos officia odit!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et ipsam porro alias saepe amet corrupti architecto illo tempora provident atque maiores quibusdam, id at possimus laudantium temporibus aut iste dicta!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur, veritatis ad reiciendis ducimus officiis eligendi. Magnam soluta unde dicta, fuga iusto fugiat dolore maxime sunt id nisi, non culpa.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorum eaque porro ratione nihil at repudiandae deleniti ducimus temporibus unde quasi praesentium, excepturi dolores recusandae labore eum numquam quae fugit?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nihil enim eius unde saepe earum, dicta ex, nesciunt amet debitis, animi sunt ab itaque. Dicta consectetur quod eos officia odit!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et ipsam porro alias saepe amet corrupti architecto illo tempora provident atque maiores quibusdam, id at possimus laudantium temporibus aut iste dicta!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur, veritatis ad reiciendis ducimus officiis eligendi. Magnam soluta unde dicta, fuga iusto fugiat dolore maxime sunt id nisi, non culpa.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorum eaque porro ratione nihil at repudiandae deleniti ducimus temporibus unde quasi praesentium, excepturi dolores recusandae labore eum numquam quae fugit?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nihil enim eius unde saepe earum, dicta ex, nesciunt amet debitis, animi sunt ab itaque. Dicta consectetur quod eos officia odit!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et ipsam porro alias saepe amet corrupti architecto illo tempora provident atque maiores quibusdam, id at possimus laudantium temporibus aut iste dicta!
                
            </section>
            <Footer/>
        </section>
    );
};
            

export default Main;