import React from 'react'
import { Routes, Route } from "react-router-dom";
import Contact from './Pages/Contact';
import Home from './Pages/Home';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
  )
}
