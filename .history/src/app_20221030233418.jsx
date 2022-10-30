import styles from './app.module.css';
import Main from './pages/main/main';
import Shop from './pages/shop/shop';
import MyPage from './pages/mypage/mypage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Connected from './pages/connected/connected';
import './app.css'



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

  ]
  // const router = createBrowserRouter(
  //   {
  //     path:'/',
  //     element: <NotFound />,
  //     errorElement: <NotFound/>,
  //     children: [{index: true, element: <Main />},
  //     {path:'/connected', element:<Connected />},
  //     {path:'/shop', element:<Shop />},
  //     {path:'/mypage', element:<MyPage />},

  //     ]
  //   },)

  return  (
  <div className={styles.app}>
    {/* <RouterProvider route={router} />; */}
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main authService={authService}/>} />
          <Route path="/connected" element={<Connected authService={authService} />} />
          <Route path="/shop" element={<Shop authService={authService}/>}/>
          <Route path="/mypage" element={<MyPage authService={authService} initItems={initItems}/>}/>
        </Routes>
    </BrowserRouter> 
  </div>)
}

export default App;
