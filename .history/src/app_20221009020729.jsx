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
        <Route exact path="/">
        <Login authService = {authService} />
        </Route>
        <Route path="/maker">
          <Maker />
        </Route>
      </Routes>
    </BrowserRouter>
  
  </div>
  )
}

export default App;
