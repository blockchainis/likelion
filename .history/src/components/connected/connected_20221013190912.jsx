import React from 'react';
import styles from './connected.module.css';
import Footer from '../footer/footer';
import Header from '../header/header';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Connected = ({authService}) =>{
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
    const onLogout = () => {
        authService.logout();
  };

return (
    <section className={styles.all}>
        <Header authService={authService} onLogout={onLogout} onLogin={onLogin} goToConnected={goToConnected}/>
        <section className={styles.contents}>
            로그인이되엇엉<button onClick={alert}>click</button>
        </section>
        <Footer/>
    </section>
    );
};
        

export default Connected;