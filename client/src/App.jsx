import React ,{ useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage"
import AddServices from './Pages/AddServices';
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/addservices" element={<AddServices />} />

    </Routes>
  </BrowserRouter>
  )
}

export default App
