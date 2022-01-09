import React from 'react';
import '../../App.css';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function Contacto() {
  return(
    <>
        <header className='header'>
            <Navbar />
        </header>
        <section className='contacto'>
            <h1>CONTACTO</h1>
        </section>
        <Footer />
    </>
);
}