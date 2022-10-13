
import styles from './app.module.css';
import Main from './components/main/main';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Connected from './components/maker/connected';

function App({authService}) {
  return  (
  <div className={styles.app}>
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main authService = {authService} />} />
          <Route path="/connected" element={<Connected />} />
        </Routes>
    </BrowserRouter> 
  </div>)
}

export default App;
