import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import BuyBooks from './pages/BuyBooks';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Main App component
// This component sets up the routes and renders the Navbar and Footer
const App = () => {
  return (
    <div className='min-h-screen bg-slate-50'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/buy' element={<BuyBooks/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;