import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { RegisterUserPage } from './pages/RegisterUser/RegisterUserPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<RegisterUserPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
