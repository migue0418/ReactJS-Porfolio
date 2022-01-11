import React from 'react';
import '../../App.css';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function Portfolio() {
  return (
    <>
      <header className='header'>
        <Navbar />
      </header>
      <main role='main'>
        <h1>Portfolio</h1>
      </main>
      <Footer />
    </>
  );
}