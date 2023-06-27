
import './App.css';
import About from './page/About';
import Home from './page/Home';
import Setting from './page/Setting';

import Sidenav from './components/Sidenav'

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Analytics from './page/Analytics';


function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
  <Route path='/' exact element={<Home/>}></Route>
  <Route path='/about' exact element={<About />}></Route>
  <Route path='/Analytics' exact element={< Analytics />}></Route>
  <Route path='/Setting' exact element={<Setting />}></Route>
  </Routes>
  
  
  </BrowserRouter>
  </>
  )}

export default App;
