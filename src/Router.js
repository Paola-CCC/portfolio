import { Contact, Home, Pathway, Projects } from 'pages';
import React from 'react'
import { Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <Routes>
      <Route path='/' index element={<Home/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/projects' element={<Projects/>} />
      <Route path='/parcours' element={<Pathway/>} />

    </Routes>
  )
}

export default Router;