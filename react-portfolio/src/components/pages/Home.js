import React from 'react';
import '../../App.css'
import HeroSection from '../HeroSection'
import PortfolioCards from '../PortfolioCards';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function Home() {
    return(
        <>
            <header className='header'>
                <Navbar />
            </header>
            <main role='main'>
                <section className='hero-section'>
                    <HeroSection />
                </section>
                <section className='portfolio-section'>
                    <PortfolioCards />
                </section>
            </main>
            <Footer />
        </>
    );
}
