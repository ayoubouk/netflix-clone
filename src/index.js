import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Main from './main';
import Signin from './sign-in';
import Home from './home';
import { BrowserRouter , Routes, Route } from  "react-router-dom";
import HomeAll from './HomeaLL'
import Film from './films'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/signin' element={<Signin/>} />
      <Route path='/home' element={<Home/>}>

      <Route path='/home' element={<HomeAll/>}/>
      <Route path='/home/films' element={<Film/>} />
      <Route path='/home/serie' element={<h2 className='text-center mt-2 '>SERIES</h2>}/> 
      <Route path='/home/mylist' element={<h2 className='text-center mt-2 '>MY LIST</h2>}/> 
        </Route>
      </Routes>
    </BrowserRouter>      
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
