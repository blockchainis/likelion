import React from 'react';
import Login from './components/login/login';
import styles from './app.module.css'
import Maker from './components/maker/maker';
import { BrowserRouter, Route, Routes} from 'react-router-dom';



function App({authService}) {
  return(  
  <div className={styles.app}>
    {/* <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login authService = {authService} />} />
        <Route path="/maker" element={<Maker />} />
      </Routes>
    </BrowserRouter> */}
    <>
    <Login authService = {authService} />
    <Maker />

    </>
  
  </div>
  )
}

export default App;
