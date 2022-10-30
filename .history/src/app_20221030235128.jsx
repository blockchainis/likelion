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
  const scoreLimit = [initItems.filter((i) => i.collection === 'liarplus').length, initItems.filter((i) => i.collection === 'liarplus').length];
  const [nickname, setNickname] = useState('nickname')
  function editNickname()  {
    const newName = prompt("새로운 닉네임을 입력해주세요", nickname);
    setNickname(newName);
  }

  return  (
  <div className={styles.app}>
    {/* <RouterProvider route={router} />; */}
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main authService={authService}/>} />
          <Route path="/connected" element={<Connected authService={authService} />} />
          <Route path="/shop" element={<Shop authService={authService} nickname={nickname} scoreLimit={scoreLimit}/>}/>
          <Route path="/mypage" element={<MyPage authService={authService} initItems={initItems} nickname={nickname} editNickname={editNickname} scoreLimit={scoreLimit}/>}/>
        </Routes>
    </BrowserRouter> 
  </div>)
}

export default App;