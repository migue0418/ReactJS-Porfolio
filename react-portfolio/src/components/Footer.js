import React from 'react'
// import {Link} from 'react-router-dom'
import './Footer.css';

function Footer() {
    return (
        <>
           <footer className='footer'>
                {/* <div className='footer-info'>
                    <ul className='footer-menu'>
                        <li className='footer-menu-item'>
                            <Link to='/' className='footer-links'>Home</Link>
                        </li>
                        <li className='footer-menu-item'>
                            <Link to='/curriculum' className='footer-links'>Curriculum</Link>
                        </li>
                        <li className='footer-menu-item'>
                            <Link to='/portfolio' className='footer-links'>Portfolio</Link>
                        </li>
                        <li className='footer-menu-item'>
                            <Link to='/contacto' className='footer-links'>Contacto</Link>
                        </li>
                    </ul>
                </div> */}
                <div className='footer-copyright'>
                    <p className='copyright-text'><i className='fas fa-copyright'/> Copyright 2022</p>
                </div>
           </footer>
        </>
    )
}

export default Footer