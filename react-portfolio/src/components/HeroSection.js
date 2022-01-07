import React from 'react';
import '../App.css';
import './HeroSection.css';
import {Button} from './Button';

function HeroSection() {
    return (
        <div className='hero-container'>
            <span className='greetings'>Bienvenido, soy Miguel!</span>
            <h1 className='title'>Diseño y Desarrollo de Páginas Web</h1>
            <p className='description'>
                Soy un Ingeniero Informático con interés en el diseño web. 
                Actualmente estoy haciendo mi Trabajo de Fin de Grado sobre Inteligencia Artificial y Software.
            </p>
            <Button buttonStyle='btn--secondary' buttonSize='btn--large' roundedStyle='btn--rounded' url='/curriculum'>Conóceme</Button>
        </div>
    );
}

export default HeroSection
