import React ,{ useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage"
import AddServices from './Pages/AddServices';
// import AddTax from './Pages/AddTax';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/addservices" element={<AddServices />} />
      {/* <Route path="/addservices/addtaxes" element={<AddTax />} /> */}
    </Routes>
  </BrowserRouter>
  )
}

export default App
