import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { RegisterUserPage } from './pages/RegisterUser/RegisterUserPage'
import { LoginPage } from './pages/Login/LoginPage'
import { GetProductsPage } from './pages/Products/GetProductsPage'
import { HomePage } from './pages/Home/HomePage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'></Route>
        <Route path='/register' element={<RegisterUserPage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/home' element={<HomePage />}></Route>
        <Route path='/products' element={<GetProductsPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

