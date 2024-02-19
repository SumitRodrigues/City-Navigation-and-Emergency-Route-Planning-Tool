import React from 'react';
import NavbarElements from './components/Navbar/NavbarElements'; 
import './App.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import ShortestPath from './components/ShortestPath/ShortestPath';
import Blockers from './components/Blockers/Blockers'
import Footer from './components/Footer/Footer'; 

function App() { 

  return ( 
    //Routing through all the components
    <Router> 
      <Navbar /> 
      <Routes> 
        <Route path='/blockers' element={<Blockers />} /> 
        <Route path='/maps' element={<ShortestPath />} /> 
      </Routes> 
      <Footer />
    </Router> 
    
  ); 
} 

export default App;