import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './main.module.css';


const Main = ({authService}) => {
    const history = useNavigate();
    const goToMaker = (userId) => {
        history.push({
            pathname : '/maker',
            state : {id: userId},
        });

    }
    const onLogin = event => {
        authService.login(event.currentTarget.textContent)
        .then(data => goToMaker(data.user.uid));
    };
    return (
        <section className={styles.all}>
            <Header onLogin={onLogin}/>
            <section className={styles.contents}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur, veritatis ad reiciendis ducimus officiis eligendi. Magnam soluta unde dicta, fuga iusto fugiat dolore maxime sunt id nisi, non culpa.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorum eaque porro ratione nihil at repudiandae deleniti ducimus temporibus unde quasi praesentium, excepturi dolores recusandae labore eum numquam quae fugit?
            </section>
            <Footer/>
        </section>
    );
};
            

export default Main;