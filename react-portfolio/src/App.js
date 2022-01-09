import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Curriculum from './components/pages/Curriculum';
import Portfolio from './components/pages/Portfolio';
import Contacto from './components/pages/Contacto';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/curriculum' element={<Curriculum/>} />
          <Route path='/portfolio' element={<Portfolio/>} />
          <Route path='/contacto' element={<Contacto/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
