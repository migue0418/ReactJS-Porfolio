import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Curriculum from './components/pages/Curriculum';
import Projects from './components/pages/Projects';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/curriculum' element={<Curriculum/>} />
          <Route path='/projects' element={<Projects/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
