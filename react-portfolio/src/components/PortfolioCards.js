import React from 'react';
import './PortfolioCards.css';
import {Link} from 'react-router-dom';

const STYLES = ['card--primary', 'card--outline'];

const SIZES = ['card--medium', 'card--large'];

export const PortfolioCards = ({
    children, 
    title,
    img,
    type, 
    onClick, 
    cardStyle, 
    cardSize,
    urlLink
}) => {
    const checkCardStyle = STYLES.includes(cardStyle) ? cardStyle : STYLES[0];
    const checkCardSize = SIZES.includes(cardSize) ? cardSize : SIZES[0];

    return(
        <div className={`card ${checkCardStyle} ${checkCardSize}`}>
            <div className='card-info'>
                <Link to={`/portfolio/${urlLink}`} className='card-title'>
                    {title}
                </Link>
                <p className='card-description'>{children}</p>
            </div>
            <img className='card-image' src={`/images/${img}`} alt={title}/>
            {/* <img src="/images/autorecambiosramon-hero.png" alt={title}/> */}
        </div>
    )
};