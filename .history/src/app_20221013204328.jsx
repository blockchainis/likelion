import './app.css'
import styles from './app.module.css';
import Main from './components/main/main';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Connected from './components/connected/connected';


function App({authService}) {

  return  (
  <div className='app'>
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main authService={authService}/>} />
          <Route path="/connected" element={<Connected authService={authService} />} />
        </Routes>
    </BrowserRouter> 
  </div>)
}

export default App;