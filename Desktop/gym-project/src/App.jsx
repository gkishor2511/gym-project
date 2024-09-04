import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Register from './pages/Register';

import Success from './pages/Success';
import Pricing from './pages/Pricing';
import Team from './pages/Team';
import Training from './pages/Training';


function App() {
  return (
    <Router>
      <Header />
    
      <Routes>
        <Route path="/" element={<Home />} />
      
        <Route path="/about" element={<About />} />
        <Route path="/Pricing" element={<Pricing />}/>
        <Route path="/register" element={<Register />} />
       
        <Route path="/success" element={<Success />} />
        <Route path="/Training" element={<Training />}/>
        <Route path="/Team" element={<Team />}/>
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;




