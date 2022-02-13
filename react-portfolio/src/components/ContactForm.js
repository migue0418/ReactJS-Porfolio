import React from 'react';
import './ContactForm.css';

function ContactForm() {
    return (
        <section className='contact-section'>
          <ul className='contact-list'>
            <li className='contact-item'>
                <i className='fas fa-envelope'/>
                <a href="mailto:miguealguacil@gmail.com" className='contact-link'>miguealguacil@gmail.com</a>
            </li>
            <li className='contact-item'>
                <i className='fas fa-envelope'/>
                <a href="mailto:miguealguacil@gmail.com" className='contact-link'>miguealguacil@gmail.com</a>
            </li>
          </ul>
        </section>
    );
}

export default ContactForm;