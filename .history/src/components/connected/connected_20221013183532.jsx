import React from 'react';
import styles from './connected.module.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import AuthService from '../../service/auth_service';

const Connected = ({authService}) =>{
const history = useNavigate();
const goToConnected = (userId) => {
        history({
            pathname : '/connected',
            state : {id: userId},
        });
    }
const onLogin = () => {
    authService.login()
    .then(data => goToConnected(data.user.uid));
};

const onLogout = () => {
    AuthService.logout();
};
return (
    <section className={styles.all}>
        <Header authService={authService} onLogin={onLogin} goToConnected={goToConnected} onLogout={onLogout}/>
        <section className={styles.contents}>
            로그인이되엇엉
        </section>
        <Footer/>
    </section>
    );
};
        

export default Connected;