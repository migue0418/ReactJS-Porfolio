import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--secondary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

const ROUNDED = ['btn--square', 'btn--rounded']

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize,
    roundedStyle,
    url
}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    const checkRoundedStyle = ROUNDED.includes(roundedStyle) ? roundedStyle : ROUNDED[0];

    return(
        <Link to={url} className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkRoundedStyle}`} onClick={onClick} type={type}>
                {children}
            </button>
        </Link>
    )
};