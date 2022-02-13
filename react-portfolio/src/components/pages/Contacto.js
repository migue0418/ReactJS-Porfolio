import React from 'react';
import '../../App.css';
import Navbar from '../Navbar';
import ContactForm from '../ContactForm';
import Footer from '../Footer';

export default function Contacto() {
  return (
    <>
      <header className='header'>
        <Navbar />
      </header>
      <main role='main' className='contact-page'>
        <h1>Contacto</h1>
        <h2>Formulario de contacto</h2>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}