import React from 'react';
import styles from './mypage.module.css';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Item from '../../components/item/item';
import ActiveItem from '../../components/activeItem/activeItem';
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
    // 닉네임바꾸기
    const [nickname, setNickname] = useState('nickname')
    function editNickname()  {
      const newName = prompt("새로운 닉네임을 입력해주세요", nickname);
      setNickname(newName);
    }
  // 가지고 있는 items 
  // 내가 불러온 블록체인에서 리스트
  //{id : crypto.randomUUID(), src : './images/logo.png',collection: 'liarplus'.....}
  //=> {+status}
  //maxScore, minScore => blockchain에서 불러와야 함. 조작시도 막아야 하니까 최대최소점수.
  const initItems = [
    {id : crypto.randomUUID(), src : './images/logo.png',collection: 'liarplus', status: 'active' },
    {id : crypto.randomUUID(), src : './images/logo.png',collection: 'liarplus', status: 'deactive' },
    {id : crypto.randomUUID(), src : './images/logo.png',collection: 'liarplus', status: 'deactive' },
    {id : crypto.randomUUID(), src : './images/logo.png',collection: 'liarplus', status: 'deactive' },
    {id : crypto.randomUUID(), src : './images/logo.png',collection: 'liarplus', status: 'deactive' },
    {id : crypto.randomUUID(), src : './images/profile.png',collection: 'liarminus', status: 'deactive' },
    {id : crypto.randomUUID(), src : './images/profile.png',collection: 'liarminus', status: 'deactive' },
    {id : crypto.randomUUID(), src : './images/profile.png',collection: 'liarminus', status: 'active' },
    {id : crypto.randomUUID(), src : './images/profile.png',collection: 'liarminus', status: 'active' },
    {id : crypto.randomUUID(), src : './images/profile.png',collection: 'liarminus', status: 'active' },

  ]
  const maxScore = initItems.filter((i) => i.collection === 'liarplus').length;
  const minScore = initItems.filter((i) => i.collection === 'liarplus').length;
  
  const [myStatus, setMystatus] = useState({myItems:initItems, myScore: initItems.filter((i) => i.status === 'active').filter((i) => i.collection === 'liarplus').length - initItems.filter((i) => i.status === 'active').filter((i) => i.collection === 'liarminus').length
  })
  // activeitem
  const activeItems = myStatus.myItems.filter((i) => i.status === 'active');
  const filters = ['all','active','deactive'];
  const [filter, setFilter] = useState(filters[0]);
  function getFilteredItem(myStatus, filter) {
    if (filter === 'all') {
      return myStatus.myItems;
    }
    return myStatus.myItems.filter((i) => i.status === filter); 
}
  const filtered = getFilteredItem(myStatus, filter);




  //updatestatus- active item <=> deactive item
  // handle Active가 한발작 늦게 처리되는 문제. 꼭 같이 묶어줘야하나
  const handleUpdate = (updated) =>{
    setMystatus({ myItems : myStatus.myItems.map((t) => (t.id === updated.id ? updated : t)), myScore: myStatus.myItems.filter((i) => i.collection === 'liarplus'&& i.status === 'active').length-myStatus.myItems.filter((i) => i.collection === 'liarminus'&& i.status === 'active').length} );
  }
  const updateScore =() =>{
    setMystatus({myItems:myStatus.myItems, myScore:myStatus.myItems.filter((i) => i.collection === 'liarplus'&& i.status === 'active').length-myStatus.myItems.filter((i) => i.collection === 'liarminus'&& i.status === 'active').length});
  }
useEffect(() => {updateScore(); 
if (minScore<myStatus.myScore || maxScore<myStatus.myScore || true) {
  throw Error();
  console.log(error);

}
},[myStatus.myItems])

return (
    <section className="all">
        <Header authService={authService} onLogout={onLogout} mypage={mypage}/>
        <section className={styles.mobileContents}>모바일 환경에서는 접속이 되지 않습니다. <br />데스크탑 환경에서 접속해주세요.
        <img src="./images/nomobile.png" alt="no mobile" />
        </section>
        <section className={styles.contents}>
            <div className={styles.profileStatus}>
                <div className={styles.profile}>
                    <img className={styles.profileImg} src="./images/profile.png" />
                    <div className={styles.profileName}>{nickname} <button onClick={editNickname}>edit</button></div>
                </div>
                
                <div className={styles.status}>
                    <div className={styles.wallet}>
                        <div className={styles.address}>liar Score : {myStatus.myScore}</div>
                        <div className={styles.ownedCoin}>23342coin</div>
                    </div>
                        <div className={styles.activeItems}>
                            {activeItems.length===0 && <div className={styles.noitem}>착용 아이템 없음</div>}
                            {activeItems.map(i => <ActiveItem key={i.id} item={i} handleUpdate={handleUpdate}/>)}
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
                    {filtered.length===0 && 
                    <div className={styles.noitem}>아이템없음</div>}
                    {filtered.map((i)=> <Item key={i.id} item={i} handleUpdate={handleUpdate}/>)}
                 </div>


        </section>
        <Footer/>
    </section>
    );
};

export default MyPage;

// <h2>❕프로필사진은 NFT</h2>
// - nft : 한정수량 발급 <br />
// - default character(nft x) - 무료 <br/>
// 프로필 네임 설정 코인으로 구매가능 <br />


{/* ❕개발 시 문의 및 주의사항

❓로그인한 지갑의 , 해 사이트에서 발급한 nft만 데이터베이스로 불러올 수 있나?
=> 컬렉션으로 소팅(발급한 nft가 세가지라면 세개 다 내 지갑에서 볼 수 있고, 그 종류가 데이터 베이스에 들어이써야함)

 ❕아아템 목록 = [] =>불러온 데이터 베이스(해 사이트에서 발급한 nft) + 사이트 서버에 저장된 active및 deactive상태 
ex) [id: token-id, src=img , collection=(어떤아이템인지,컬렉션이름),status: active/deactive]
     id, src,collection from blockchain, status from server data.
 불러온 데이터 베이스의 상태는 우리 서버에 저장(코인 소모 안하게 하기 위해)

❕active 상태가 된 아이템은 나의 능력치를 변화시킴
❓maxScore, minScore픽스: 내가가지고 있는 nft보다 더 많은스코어로 조작시도 시 막을 수 있는 방법
 ❓닉네임변경건 사용: edit시 코인 소모 후 서버에 기록. (현재 개발된 상황과 가까움.)or 아이템 구매 후 사용하기 => 어느것이 더욱 직관적이고 쉬울지 
*/}


        

