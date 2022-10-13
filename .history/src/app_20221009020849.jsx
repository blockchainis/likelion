import React from 'react';
import Login from './components/login/login';
import styles from './app.module.css'
import Maker from './components/maker/maker';
import { BrowserRouter, Route, Routes} from 'react-router-dom';



function App({authService}) {
  return(  
  <div className={styles.app}>
    <BrowserRouter>
      <Routes>
        < exact path="/" element={<Login authService = {authService} />} />
        <Route path="/maker" element={<Maker />}>
          <Maker />
        </Route>
      </Routes>
    </BrowserRouter>
  
  </div>
  )
}

export default App;