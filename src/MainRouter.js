import React from 'react'
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import SearchPage from './Pages/SearchPage';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const MainRouter = () => {
  return (
   
    
   <>
   <Routes>
    <Route path='\' element={<HomePage/>} />
    <Route path='\LoginPage' element={<LoginPage/>}/>
    <Route path='\SearchPage' element={<SearchPage/>}/>

   </Routes>
   </>
 
  )
}

export default MainRouter