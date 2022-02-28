import React from 'react';
import './PortfolioCards.css';
import CardItem from './CardItem';

function PortfolioCards() {
    return (
        <div className='portfolio-projects'>
            <h2>Portfolio</h2>
            <p>¿Quieres conocer un poco más mi trabajo? Estos son los últimos proyectos que he realizado.</p>
            <div className='cards--container'>
                <div className='cards--wrapper'>
                    <ul className='cards--items'>
                        <CardItem
                            src='miguealguacil/images/autorecambiosramon-hero.png'
                            alt='Portada de la web de Autorecambios Ramón'
                            text='Web de Autorecambios Ramón'
                            label='WordPress'
                            path='#'
                        />
                        <CardItem
                            src='miguealguacil/images/img-2.jpg'
                            alt='Portada de la web de Migue Alguacil'
                            text='Diseño de Migue Alguacil'
                            label='Adobe XD'
                            path='#'
                        />
                        <CardItem
                            src='miguealguacil/images/img-8.jpg'
                            alt='Portada del videojuego Subject 14'
                            text='Subject 14'
                            label='Videojuego'
                            path='#'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PortfolioCards;