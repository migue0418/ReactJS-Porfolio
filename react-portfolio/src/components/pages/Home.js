import React from 'react';
import '../../App.css'
import HeroSection from '../HeroSection'
import { PortfolioCards } from '../PortfolioCards';
import Navbar from '../Navbar';

function Home() {
    return(
        <>
            <header className='header'>
                <Navbar />
                <section className='hero-section'>
                    <HeroSection />
                </section>
            </header>
            <section className='portfolio-section'>
                <h2>Portfolio</h2>
                <p>¿Quieres conocer un poco más mi trabajo? Estos son algunos de los últimos proyectos que he reaizado.</p>
                <div className='portfolio-projects'>
                    <PortfolioCards urlLink={'miguealguacil'} title={'Migue Alguacil'}>
                        Diseño y desarrollo de mi página web personal usando ReactJS para exponer tanto mi 
                        portfolio con todos los trabajos realizados hasta el momento así como los próximos, 
                        además de un espacio para mi Curriculum.
                    </PortfolioCards>
                    <PortfolioCards urlLink={'autorecambiosramon'} title={'Autorecambios Ramón'} img={'autorecambiosramon-hero.png'}>
                    Diseño y desarrollo de página web en WordPress para una pequeña empresa de Granada. 
                    Ramón quería crear desde cero una página web para su negocio de autorecambios.
                    </PortfolioCards>
                </div>
            </section>
            <section className='contact-section'>
                <h2>Contacta conmigo!</h2>
                {/* Formulario de contacto */}
            </section>
        </>
    );
}

export default Home;
