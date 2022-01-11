import React from 'react';
import {Link} from 'react-router-dom'
import './CurriculumSection.css';

function CurriculumSection() {
    // Hay que hacer display:none en el logo del navbar cuando el ancho de la página sea más de 1500px
    return (
        <>
            <div className='curriculum-section'>
                <section className='cv-left-bar'>
                    <div className='navbar-container'>
                        <Link to="/" className="navbar-logo">Migue Alguacil</Link>
                    </div>
                    <div className='image-section'>
                        <div className='image-container'>
                            <img className='id-image' src='/images/img-1.jpg' alt='Miguel Angel Benitez Alguacil'/>
                        </div>
                        <h1 className='h1-name'>Miguel Ángel<br/>Benítez Alguacil</h1>
                    </div>
                    <div className='career-section'>
                        <span>Ingeniero Informático<br/>Desarrollador Front-End</span>
                    </div>
                    <div className='contact-section'>
                        <h2 className='h2-cv-info'>Contacto</h2>
                        <ul className='contact-info'>
                            <li className='contact-item'>
                                <i className='fas fa-phone'/>
                                <p className='contact-item-text'>(+34) 692448917</p>
                            </li>
                            <li className='contact-item'>
                                <i className='fas fa-envelope'/>
                                <p className='contact-item-text'>miguealguacil@gmail.com</p>
                            </li>
                            <li className='contact-item'>
                                <i className='fas fa-globe'/>
                                <p className='contact-item-text'>La Zubia, Granada (18140)</p>
                            </li>
                            <li className='contact-item'>
                                <i className='fab fa-github'/>
                                <p className='contact-item-text'>Github</p>
                            </li>
                            <li className='contact-item'>
                                <i className='fab fa-linkedin'/>
                                <p className='contact-item-text'>LinkedIn</p>
                            </li>
                        </ul>
                    </div>
                    <div className='languages-section'>
                        <h2 className='h2-cv-info'>Idiomas</h2>
                        <ul className='languages-info'>
                            <li className='languages-item'>
                                <strong className='language-name'>Español</strong>
                                <p className='language-level'>Nativo</p>
                            </li>
                            <li className='languages-item'>
                                <strong className='language-name'>Inglés</strong>
                                <p className='language-level'>Avanzado (B2)</p>
                            </li>
                            <li className='languages-item'>
                                <strong className='language-name'>Francés</strong>
                                <p className='language-level'>Básico</p>
                            </li>
                        </ul>
                    </div>
                    <div className='download-section'>
                        <Link to="/" className="download-cv"><i className='fas fa-cloud-download-alt'/> Descargar Curriculum (PDF)</Link>
                    </div>
                </section>
                <section className='cv-info'>
                    <div className='profile-section'>
                        <div className='cv-section-heading'>
                            <i className='cv-title-icon fas fa-user' />
                            <h2 className='cv-title'>Perfil</h2>
                        </div>
                        <div className='cv-section-content'>
                            <p>Soy un estudiante de último año del Grado de Ingeniería Informática de la Universidad de Granada.</p>
                            <p>Me considero una persona sociable y empática, capaz de gestionar el tiempo y situaciones de estrés de manera eficaz.</p>
                        </div>
                    </div>
                    <div className='education-section'>
                        <div className='cv-section-heading'>
                            <i className='cv-title-icon fas fa-graduation-cap' />
                            <h2 className='cv-title'>Educación</h2>
                        </div>
                        <div className='cv-section-content'>
                            <ul className='cv-list'>
                                <li className='cv-item'>
                                    <strong>Universidad de Granada</strong>
                                    <p>2017 - 2022. Grado en Ingeniería Informática.</p>
                                </li>
                                <li className='cv-item'>
                                    <strong>Åbo Akademi University</strong>
                                    <p>2019 - 2020. Programa Erasmus+ en la ciudad de Turku (Finlandia).</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='work-experience-section'>
                        <div className='cv-section-heading'>
                            <i className='cv-title-icon fas fa-briefcase' />
                            <h2 className='cv-title'>Experiencia Laboral</h2>
                        </div>
                        <div className='cv-section-content'>
                            <ul className='cv-list'>
                                <li className='cv-item'>
                                    <strong>Contrato de prácticas en el Área Web del Centro de Producción de Recursos para la Universidad Digital</strong>
                                    <p>Durante 6 meses he sido becario en el Área Web del CEPRUD realizando tareas de creación de nuevas webs mediante los CMS Drupal y WordPress, así como de migración de contenidos.</p>
                                </li>
                                <li className='cv-item'>
                                    <strong>Diseño y creación de sitios webs en WordPress</strong>
                                    <p>De manera autónoma he realizado proyectos en WordPress para pequeñas y medianas empresas.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='skills-section'>
                        <div className='cv-section-heading'>
                            <i className='cv-title-icon fas fa-lightbulb' />
                            <h2 className='cv-title'>Habilidades</h2>
                        </div>
                        <div className='cv-section-content'>
                            <ul className='cv-list'>
                                <li className='cv-item'>
                                    <strong>Programación y Desarrollo Web:</strong>
                                </li>
                                <li className='cv-item'>
                                    <strong>Lenguajes de Programación:</strong>
                                </li>
                                <li className='cv-item'>
                                    <strong>Software y Frameworks:</strong>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='aptitudes-section'>
                        <div className='cv-section-heading'>
                            <i className='cv-title-icon fas fa-users' />
                            <h2 className='cv-title'>Aptitudes</h2>
                        </div>
                        <div className='cv-section-content'>
                            <ul className='cv-list'>
                                <li className='cv-item'>
                                    <strong>Capacidades de comunicación:</strong> Buenas competencias comunicativas y de adaptación a ambientes multiculturales.
                                </li>
                                <li className='cv-item'>
                                    <strong>Competencias de organización:</strong> Liderazgo y responsabilidad. Capacidad para resolver dificultades bajo presión.
                                </li>
                                <li className='cv-item'>
                                    <strong>Habilidades relacionadas con el trabajo:</strong> Alta iniciativa, compromiso y motivación para el aprendizaje de nuevas habilidades. Capacidad de trabajo en equipo. Proactividad y constancia.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default CurriculumSection;