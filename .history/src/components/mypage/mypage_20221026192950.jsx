import React from 'react';
import styles from './mypage.module.css';
import Footer from '../footer/footer';
import Header from '../header/header';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Item from '../item/item';


const MyPage = ({authService}) =>{
    const mypage = true;
    //login용 기본 함수
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
        <Header authService={authService} onLogout={onLogout} mypage={mypage}/>
        <section className={styles.mobileContents}>모바일 환경에서는 접속이 되지 않습니다. <br />데스크탑 환경에서 접속해주세요.
        <img src="./images/nomobile.png" alt="no mobile" />
        </section>
        <section className={styles.contents}>
            <div className={styles.profileStatus}>
                <div className={styles.profile}>
                    <img className={styles.profileImg} src="https://media.istockphoto.com/vectors/dabbing-unicorn-vector-design-vector-id954726306?k=20&m=954726306&s=612x612&w=0&h=2Icz09Ktm0giiVDTwodFwueZ1Cc1g8aFdWQGS7SCjoc=" />
                    <div className={styles.profileName}>nickname <button>edit</button></div>
                </div>
                
                <div className={styles.status}>
                    <div className={styles.wallet}>
                        <div className={styles.address}>지갑주소 : 0xF5c1DedC9E25473820b676087EFfd4Fe859C8311</div>
                        <div className={styles.ownedCoin}>232342coin</div>
                    </div>
                        <div className={styles.activeItems}>
                            <a href="#" class={styles.activeItem} >
                                <img class={styles.activeItemImg} src="./images/logo.png" alt="description" />
                                <div class={styles.activeItemText}>
                                    <span>착용해제</span>
                                </div>
                            </a>
                            <a href="#" class={styles.activeItem} >
                                <img class={styles.activeItemImg} src="./images/logo.png" alt="description" />
                                <div class={styles.activeItemText}>
                                    <span>착용해제</span>
                                </div>
                            </a>
                            <a href="#" class={styles.activeItem} >
                                <img class={styles.activeItemImg} src="./images/logo.png" alt="description" />
                                <div class={styles.activeItemText}>
                                    <span>착용해제</span>
                                </div>
                            </a>
                            <a href="#" class={styles.activeItem} >
                                <img class={styles.activeItemImg} src="./images/logo.png" alt="description" />
                                <div class={styles.activeItemText}>
                                    <span>착용해제</span>
                                </div>
                            </a>     
                        </div>
                        <span className={styles.activeItemDes}>Active Item</span>     
                        
                </div>

            </div>
            <div className={styles.menubar}>
                <a href="#" data-filter="*">all</a>
                <a href="#" data-filter="active">active</a>
                <a href="#" data-filter="deactive">deactive</a>
                
                </div>
                <div className={styles.allItems}>
                    <Item/>
                    

            </div>


        </section>
        <Footer/>
    </section>
    );
};

// <h2>❕프로필사진은 NFT</h2>
// - nft : 한정수량 발급 <br />
// - default character(nft x) - 무료 <br/>
// 프로필 네임 설정 코인으로 구매가능 <br />
// <h2>❕프로필 사진- 착용아이템칸</h2> 
// - active 아이템목록 : 직관적으로 확인은 불가능하나 개발이 쉬움 <br />
        

export default MyPage;