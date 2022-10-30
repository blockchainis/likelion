import styles from './app.module.css';
import Main from './pages/main/main';
import Shop from './pages/shop/shop';
import MyPage from './pages/mypage/mypage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Connected from './pages/connected/connected';
import './app.css'
import { useState } from 'react';



function App({authService}) {
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

  ];
  const initShopItems = [
    {id : crypto.randomUUID(), src : './images/logo.png', collection:'liarplus', remain : 1000 },
    {id : crypto.randomUUID(), src : './images/logo.png', collection:'liarplus', remain : 1000 },
    {id : crypto.randomUUID(), src : './images/logo.png', collection:'liarplus', remain : 1000 },
    {id : crypto.randomUUID(), src : './images/logo.png', collection:'liarplus', remain : 1000 },
    {id : crypto.randomUUID(), src : './images/logo.png', collection:'liarplus', remain : 1000 },
    {id : crypto.randomUUID(), src : './images/logo.png', collection:'liarplus', remain : 1000 },
    {id : crypto.randomUUID(), src : './images/logo.png', collection:'liarplus', remain : 1000 },
    {id : crypto.randomUUID(), src : './images/logo.png', collection:'liarplus', remain : 1000 },
    {id : crypto.randomUUID(), src : './images/logo.png', collection:'liarplus', remain : 1000 },
    {id : crypto.randomUUID(), src : './images/logo.png', collection:'liarplus', remain : 1000 },
    {id : crypto.randomUUID(), src : './images/logo.png', collection:'liarplus', remain : 1000 },
    {id : crypto.randomUUID(), src : './images/logo.png', collection:'liarplus', remain : 1000 },

  ]
  const initscoreLimit = [initItems.filter((i) => i.collection === 'liarplus').length, initItems.filter((i) => i.collection === 'liarplus').length];
  const [scoreLimit,setScoreLimit] = useState(initscoreLimit)
  const [nickname, setNickname] = useState('nickname')
  function editNickname()  {
    const newName = prompt("새로운 닉네임을 입력해주세요", nickname);
    setNickname(newName);
  }
  const [myStatus, setMystatus] = useState({myItems:initItems, myScore: initItems.filter((i) => i.status === 'active').filter((i) => i.collection === 'liarplus').length - initItems.filter((i) => i.status === 'active').filter((i) => i.collection === 'liarminus').length})
  const [shopItems, setShopItems] =useState(initShopItems);

  return  (
  <div className={styles.app}>
    {/* <RouterProvider route={router} />; */}
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main authService={authService}/>} />
          <Route path="/connected" element={<Connected authService={authService} />} />
          <Route path="/shop" element={<Shop authService={authService} nickname={nickname} scoreLimit={scoreLimit} myStatus={myStatus} setMystatus={setMystatus} initShopItems={initShopItems} shopItems={shopItems} setShopItems={setShopItems}/>}/>
          <Route path="/mypage" element={<MyPage authService={authService} initItems={initItems} nickname={nickname} editNickname={editNickname} scoreLimit={scoreLimit} myStatus={myStatus} setMystatus={setMystatus}/>}/>
        </Routes>
    </BrowserRouter> 
  </div>)
}

export default App;
