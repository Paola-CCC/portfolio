import { Contact, Home, Projects } from 'pages';
import React from 'react'
import { Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <Routes>
      <Route path='/' index element={<Home/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/projects' element={<Projects/>} />
    </Routes>
  )
}

export default Router;