import React from 'react';
import styles from './mypage.module.css';
import Footer from '../footer/footer';
import Header from '../header/header';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Item from '../item/item';
import ActiveItem from '../activeItem/activeItem';
import { useState } from 'react';


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
  // 가지고 있는 items 
  const initItems = [
    {id : crypto.randomUUID(), src : './images/logo.png', status: 'active' },
    {id : crypto.randomUUID(), src : './images/logo.png', status: 'deactive' },
    {id : crypto.randomUUID(), src : '', status: 'deactive' },
    {id : crypto.randomUUID(), src : './images/logo.png', status: 'active' },
    {id : crypto.randomUUID(), src : './images/logo.png', status: 'deactive' },
    {id : crypto.randomUUID(), src : './images/logo.png', status: 'deactive' },
    {id : crypto.randomUUID(), src : './images/logo.png', status: 'active' },
    {id : crypto.randomUUID(), src : './images/logo.png', status: 'active' },
    {id : crypto.randomUUID(), src : './images/logo.png', status: 'deactive' },
    {id : crypto.randomUUID(), src : './images/logo.png', status: 'deactive' },

  ]
  const [myItems, setMyItems] =useState(initItems)
  //아이템 필터

  const filters = ['all','active','deactive'];
  const [filter, setFilter] = useState(filters[0]);
  function getFilteredItem(myItems, filter) {
    if (filter === 'all') {
      return myItems;
    }
    return myItems.filter((i) => i.status === filter); 
}
  const filtered = getFilteredItem(myItems, filter);


  // activeitem
  const activeItems = myItems.filter((i) => i.status === 'active');
  // 닉네임바꾸기
  const [nickname, setNickname] = useState('nickname')
  function editNickname()  {
    const newName = prompt('새로운 이름을 임력하세요');
    setNickname(newName);
  }
  //updatestatus
  const handleUpdate = (updated) =>
  setMyItems(myItems.map((t) => (t.id === updated.id ? updated : t)));


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
                    <div className={styles.profileName}>{nickname} <button onClick={editNickname}>edit</button></div>
                </div>
                
                <div className={styles.status}>
                    <div className={styles.wallet}>
                        <div className={styles.address}>지갑주소 : 0xF5c1DedC9E25473820b676087EFfd4Fe859C8311</div>
                        <div className={styles.ownedCoin}>232342coin</div>
                    </div>
                        <div className={styles.activeItems}>
                            {activeItems.map(i => <ActiveItem key={i.id} id={i.id} src={i.src} handleUpdate={handleUpdate}/>)}
                        </div>
                        <span className={styles.activeItemDes}>Active Item</span>     
                </div>

            </div>
            <div className={styles.filterButton}>
            {filters.map((value,index) => <li key={index}>
                <button className={`${styles.filter} ${filter ===value && styles.selected }`}  onClick={()=>setFilter(value)}>{value}</button>
            </li>)}
                
                </div>
                <div className={styles.allItems}>
                    {filtered.map((i)=> <Item key={i.id} id={i.id} src={i.src} status={i.status} handleUpdate={handleUpdate}/>)}
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