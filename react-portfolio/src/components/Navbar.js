import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css';

function Navbar(page) {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className={`${click ? 'navbar active' : 'navbar'}`}>
                <div className="navbar-container">
                    <Link to="/miguealguacil" className="navbar-logo" onClick={closeMobileMenu}>
                        Migue Alguacil
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/miguealguacil' className='nav-links' onClick={closeMobileMenu}>
                                Inicio
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/miguealguacil/curriculum' className='nav-links' onClick={closeMobileMenu}>
                                Curriculum
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/miguealguacil/portfolio' className='nav-links' onClick={closeMobileMenu}>
                                Portfolio
                            </Link>
                        </li>
                        {/* <li className='nav-item'>
                            <Link to='/contacto' className='nav-links' onClick={closeMobileMenu}>
                                Contacto
                            </Link>
                        </li> */}
                        <li className='nav-item'>
                            <a href='https://github.com/migue0418' className='nav-links' onClick={closeMobileMenu}>
                                <p className={click ? 'nav-links-text' : 'nav-links-text hidden'}>Github</p>
                                <i className={click ? 'nav-links-text hidden' : 'nav-links-text fab fa-github'}/>
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href='https://www.linkedin.com/in/miguealguacil/' className='nav-links' onClick={closeMobileMenu}>
                                <p className={click ? 'nav-links-text' : 'nav-links-text hidden'}>LinkedIn</p>
                                <i className={click ? 'nav-links-text hidden' : 'nav-links-text fab fa-linkedin'}/>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar