import React from 'react';
import styles from './header.module.css'
import { Link } from 'react-router-dom';
import StartGameButton from '../startGameButton/startGameButton';
import { useAuth } from '../../context/AuthContext';
import { toast } from 'react-toastify';

const klaytn = window.klaytn;

const Header = ({mypage, shop}) => {
    const {user, setUser} = useAuth();
    async function loginWithKaikas() {
      if (!klaytn) {
        toast.error("Kaikas를 설치해주세요!",{ position : toast.POSITION.TOP_CENTER});
        return;
        //밑에 나오는 로그인 로직이 실행되지 않게
      }
      try {
        const accounts = await toast.promise(klaytn.enable(), {pending: "kaikas 지갑연동 중"}, {closeButton : true});
        setUser(accounts[0]);
        localStorage.setItem('_user',accounts[0])
        toast.success(`${accounts[0].slice(0,5)}...${accounts[0].slice(-5)}님 환영합니다.`)
  
      }catch {
        toast.error("로그인 실패!",{ position : toast.POSITION.TOP_CENTER})
      }
  
    }
        
    function handleLogin () {
      loginWithKaikas();
    }
    async function handleDone () {
      const isAvailable = await isKaikasAvailable();
      if (isAvailable) {
        toast.error("logined");
        return;
      }
      toast.warn("logout");
      setUser("");
      localStorage.removeItem('_user');
    }
  
    async function isKaikasAvailable() {
      const klaytn = window?.klaytn;
      if (!klaytn) {
        return false;
      }
    
      const results = await Promise.all([
        klaytn._kaikas.isApproved(),
        klaytn._kaikas.isEnabled(),
        klaytn._kaikas.isUnlocked(),
      ]);
    
    
      return results.every((res) => res);
    }
    const logout = () => {
        setUser("");
        localStorage.removeItem('_user')
        //카이카스 로그아웃은 따로 안되나요?
    }



    return(
        <div id="header">
            <header className={styles.header}>
                <Link to="/">
                <div className={styles.logoTitle}>
                    <img className={styles.logo} src="/images/logo.png" alt='logo' />
                    <h1 className={styles.title}>PHONY</h1>
                </div>
                </Link>
                <div className={styles.buttons}>
                    {user && (<Link to="/shop"><button className={shop ? styles.active : styles.button} >shop</button></Link>)}
                    {user && (<Link to="/mypage"><button className={mypage ? styles.active : styles.button}>my page</button></Link>)}
                    {user ?'': (<button className={styles.button} onClick={handleLogin}>login</button>)}
                    {user && (<button className={styles.logoutButton} onClick={logout}>● {user.slice(0,5)}..{user.slice(-5)}</button>)}
        
                </div>

            </header>
            <div className={styles.startGame}>{user && <StartGameButton />}</div>
            
        </div>

    );
}

export default Header;