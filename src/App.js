import './App.css';
import { useState } from 'react';
import Signup from './components/Signup';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Navbar from './components/Navbar';
// import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
      </Routes>
      
      {/* <Form/> */}
    </div>
  );
}

export default App;
