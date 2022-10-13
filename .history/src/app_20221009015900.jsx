import React from 'react';
import Login from './components/login/login';
import styles from './app.module.css'
import { BrowserRouter } from 'react-router-dom';

function App({authService}) {
  return(  
  <div className={styles.app}>
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
      <Login authService = {authService} />
      </Route>
      <Route path="/maker">

      </Route>
    </Switch>
    </BrowserRouter>
  
  </div>
  )
}

export default App;
