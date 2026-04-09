import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { RegisterUserPage } from './pages/RegisterUser/RegisterUserPage'
import { LoginPage } from './pages/Login/LoginPage'
import { GetProductsPage } from './pages/Products/GetProductsPage'
import { HomePage } from './pages/Home/HomePage'
import './App.css'
import { InsertProduct } from './pages/InsertProduct/InsertProduct'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/register' element={<RegisterUserPage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/products' element={<GetProductsPage />}></Route>
        <Route path='/products/insert' element={<InsertProduct />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

