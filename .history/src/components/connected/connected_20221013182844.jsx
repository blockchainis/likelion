import React from 'react';
import styles from './connected.module.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import AuthService from '../../service/auth_service';

const Connected = () =>{
const history = useNavigate();
const onLogin() => {
    AuthService.login();
}
const onLogout = () => {
    AuthService.logout();
};
return (
    <section className={styles.all}>
        <Header authService={authService} onLogin={onLogin} onLogout={onLogout}/>
        <section className={styles.contents}>
            로그인이되엇엉
        </section>
        <Footer/>
    </section>
    );
};
        

export default Connected;