import styles from './app.module.css';
import Main from './pages/main/main';
import Shop from './pages/shop/shop';
import MyPage from './pages/mypage/mypage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Connected from './pages/connected/connected';
import './app.css'
import { useState } from 'react';
import { useAuth } from './context/AuthContext';

const klaytn = window.klaytn;


function App({authService}) {

  const {user, setUser} = useAuth();
  // 홈페이지에 접속 했을시, localStorage user id있고, 카이카스 계정과 비교. 동일할 경우 로그인 계속 유지. 액션은 다른 effect에서
  useEffect(()=>{
    // 지갑 없을 시 이 이팩트.
    if (!klaytn) {
      return ;
    }
    const account = localStorage.getItem('_user');
    const currentKlaytnAccount = klaytn?.selectedAddress;

    if (!account || currentKlaytnAccount) {
      setUser("");
      localStorage.removeItem('_user');
    }
    if (account === currentKlaytnAccount) {
      setUser(account);
      localStorage.setItem('user',account)
    }
    if (account !== currentKlaytnAccount){
      //
    }
  },[setUser])

  // 로그인이 된 상태에서 계정을 변경했을 시.

  useEffect(() => { 
    if(!klaytn) {
      return;
    }

    const handleChangeAccounts = () => {
      if(!user){
        return;
      }
      const changedAccount = klaytn?.selectedAddress;
      if (user !== changedAccount){
        toast.success(`${changedAccount.slice(0,5)}...${changedAccount.slice(-5)}님 으로 변경되었습니다.`);
        setUser(changedAccount);
        localStorage.setItem('_user',changedAccount);
      }
    }

    klaytn?.on("accountsChanged", handleChangeAccounts)

    return () => {klaytn.off("accountsChanged", handleChangeAccounts)}

  },[user, setUser])

  useEffect(() => {
    if (!klaytn) {
      return;
    }

    const networkObj = {
      1001: "바오밥 테스트넷",
      8217: "메인넷",
    };

    const handleNetworkChanged = () => {
      setUser("");
      localStorage.removeItem("_user");
      toast.warn(
        `네트워크가 ${
          networkObj[klaytn.networkVersion]
        }으로 바뀌었군요! 다시 로그인 해주세요~`
      );
    };

    klaytn?.on("networkChanged", handleNetworkChanged);
    return () => {
      klaytn?.removeListener("networkChanged", handleNetworkChanged);
    };
  }, [setUser]);
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
  //같은거 구매시 같은 uuid => 일단 구매 시, 다른 랜덤 uuid부여. nft에서는 id가 토큰넘버+collection으로 들어가니 문제 없을것.
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

  ];
  const initscoreLimit = [initItems.filter((i) => i.collection === 'liarplus').length, initItems.filter((i) => i.collection === 'liarplus').length];
  const [scoreLimit,setScoreLimit] = useState(initscoreLimit);
  const updateScoreLimit = () =>{
    setScoreLimit([myStatus.myItems.filter((i) => i.collection === 'liarplus').length, myStatus.myItems.filter((i) => i.collection === 'liarminus').length])

  }
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
          <Route path="/shop" element={<Shop authService={authService} nickname={nickname} scoreLimit={scoreLimit} myStatus={myStatus} setMystatus={setMystatus} initShopItems={initShopItems} shopItems={shopItems} setShopItems={setShopItems} updateScoreLimit={updateScoreLimit}/>}/>
          <Route path="/mypage" element={<MyPage authService={authService} initItems={initItems} nickname={nickname} editNickname={editNickname} scoreLimit={scoreLimit} myStatus={myStatus} setMystatus={setMystatus} updateScoreLimit={updateScoreLimit}/>}/>
        </Routes>
    </BrowserRouter> 
  </div>)
}

export default App;
