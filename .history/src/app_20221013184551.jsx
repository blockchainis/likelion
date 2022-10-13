
import styles from './app.module.css';
import Main from './components/main/main';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Connected from './components/connected/connected';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function App({authService}) {
  const history = useNavigate();
  const goToConnected = (userId) => {
      history({
          pathname : '/connected',
          state : {id: userId},
      });
  }

  useEffect(()=> {
      authService
      .onAuthChange(user => {
          user && goToConnected(user.uid);
      });
  });
  
  const onLogin = () => {
    authService.login()
      .then(data => goToConnected(data.user.uid));
  };
  const onLogout = () => {
    authService.logout();
  }
  return  (
  <div className={styles.app}>
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main authService={authService}/>} />
          <Route path="/connected" element={<Connected authService={authService}/>} />
        </Routes>
    </BrowserRouter> 
  </div>)
}

export default App;
