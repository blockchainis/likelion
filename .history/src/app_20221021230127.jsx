import styles from './app.module.css';
import Main from './components/main/main';
import Shop from './components/shop/shop';
import MyPage from './components/mypage/mypage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Connected from './components/connected/connected';
import './app.css'


function App({authService}) {

  return  (
  <div className={styles.app}>
    <BrowserRouter>
        <Routes>
          <div className="hye">dd</div>
          <Route exact path="/" element={<Main authService={authService}/>} />
          <Route path="/connected" element={<Connected authService={authService} />} />
          <Route path="/shop" element={<Shop authService={authService}/>}/>
          <Route path="/mypage" element={<MyPage authService={authService}/>}/>
        </Routes>
    </BrowserRouter> 
  </div>)
}

export default App;
