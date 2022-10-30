import React from 'react';
import styles from './shop.module.css';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Item from '../../components/item/item';


const Shop = (props) =>{
    const {authService, shopItems,setShopItems, scoreLimit,nickname,myStatus,setMystatus, updateScoreLimit} = props
    const shop = true;
    const [maxScore, minScore]= scoreLimit;
    //login용 기본 함수
    const history = useNavigate();
    useEffect(()=> {
        authService
        .onAuthChange(user => {
            user || history('/');
        });
         // 점수 조작 시도시 강제 로그아웃. 
      if (minScore<myStatus.myScore || maxScore<myStatus.myScore) {
        alert('스코어 조작시도가 발견되었습니다. 관리자에게 문의해주세요.')
        onLogout()
        }
    });
    const onLogout = () => {
        authService.logout();
  };
  //shop item


  const handleUpdate = (updated) =>{setShopItems(shopItems.map((t) => (t.id === updated.id ? updated : t)));}
  const handleBuy = (item) =>{
    setShopItems(shopItems.map((i) => (i.id === item.id ? {...item, remain: item.remain -1} : i)));
    setMystatus({myItems:[...myStatus.myItems,{id:crypto.randomUUID(), src:item.src, collection:item.collection, status: 'deactive'}], myScore: myStatus.myScore});
    updateScoreLimit();
    console.log(scoreLimit);
    }
    useEffect(() => {
        updateScoreLimit(); 
        console.log(scoreLimit);
      },[myStatus.myItems])
  

return (
    <section className="all">
        <Header authService={authService} onLogout={onLogout} shop={shop}/>
        <section className={styles.mobileContents}>모바일 환경에서는 접속이 되지 않습니다. <br />데스크탑 환경에서 접속해주세요.
        <img src="./images/nomobile.png" alt="no mobile" />
        </section>
        <section className={styles.contents}>
            <div id={styles.shop}>
                <div className={styles.myStatus}>
                    <div className={styles.status}>
                        <div className={styles.profile}>
                            <img className={styles.profileImg} src="./images/profile.png" alt="profile" />
                            <div className={styles.nickname}>{nickname}</div>
                        </div>
                        <div className={styles.address}>지갑주소</div>
                        <div className={styles.coin}>보유코인</div>
                        <div className={styles.others}>others</div>

                    </div>
                </div>
                <div className={styles.buyItems}>
                    <div className={styles.namebar}>On Sale</div>
                    <div className={styles.Items}>
                        {shopItems.map((i)=> <Item key={i.id} item={i} handleUpdate={handleUpdate} handleBuy={handleBuy}/>)}
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </section>
    );
};
        

export default Shop;