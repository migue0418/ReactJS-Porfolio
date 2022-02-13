import React from 'react';
import {Link} from 'react-router-dom'
import './CurriculumSection.css';
import ProgressBar from './ProgressBar';

function CurriculumSection() {
    return (
        <>
            <div className='curriculum-section'>
                <section className='cv-left-bar'>
                    <div className='navbar-container aside-navbar'>
                        <Link to="/" className="navbar-logo">Migue Alguacil</Link>
                    </div>
                    <div className='image-section'>
                        <div className='image-container'>
                            <img className='id-image' src='/images/img-1.jpg' alt='Miguel Angel Benitez Alguacil'/>
                        </div>
                        <h1 className='h1-name'>Miguel Ángel<br className='cv-name'/> Benítez Alguacil</h1>
                    </div>
                    <div className='career-section'>
                        <span>Ingeniero Informático<br/>Desarrollador Front-End</span>
                    </div>
                    <div className='contact-section'>
                        <h2 className='h2-cv-info'>Contacto</h2>
                        <ul className='contact-info'>
                            <li className='contact-item'>
                                <i className='fas fa-phone'/>
                                <a href="tel:+34692448917" className='contact-link'>(+34) 692448917</a>
                            </li>
                            <li className='contact-item'>
                                <i className='fas fa-envelope'/>
                                <a href="mailto:miguealguacil@gmail.com" className='contact-link'>miguealguacil@gmail.com</a>
                            </li>
                            <li className='contact-item'>
                                <i className='fas fa-globe'/>
                                <p className='contact-item-text'>La Zubia, Granada (18140)</p>
                            </li>
                            <li className='contact-item'>
                                <a href="https://github.com/migue0418" className='contact-link'>
                                    <i className='fab fa-github'/>
                                    Github
                                </a>
                            </li>
                            <li className='contact-item'>
                                <a href="https://www.linkedin.com/in/miguealguacil/" className='contact-link'>
                                    <i className='fab fa-linkedin'/>
                                    LinkedIn
                                </a>
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
                                <p className='language-level'>B2 (Cambridge)</p>
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
                                    <a href='https://www.ugr.es/' className='uni-link'>Universidad de Granada</a>
                                    <p>2017 - 2022. Grado en Ingeniería Informática.</p>
                                </li>
                                <li className='cv-item'>
                                    <a href='https://www.abo.fi/en/' className='uni-link'>Åbo Akademi University</a>
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
                                    <ul className='skills-list'>
                                        <li className='skill-item'>
                                            <ProgressBar name="HTML" content="80%"/>
                                        </li>
                                        <li className='skill-item'>
                                            <ProgressBar name="CSS" content="70%"/>
                                        </li>
                                        <li className='skill-item'>
                                            <ProgressBar name="JavaScript" content="70%"/>
                                        </li>
                                        <li className='skill-item'>
                                            <ProgressBar name="PHP" content="60%"/>
                                        </li>
                                        <li className='skill-item'>
                                            <ProgressBar name="WordPress" content="50%"/>
                                        </li>
                                        <li className='skill-item'>
                                            <ProgressBar name="Drupal" content="60%"/>
                                        </li>
                                    </ul>
                                </li>
                                <li className='cv-item'>
                                    <strong>Lenguajes de Programación:</strong>
                                    <ul className='skills-list'>
                                        <li className='skill-item'>
                                            <ProgressBar name="C++" content="80%"/>
                                        </li>
                                        <li className='skill-item'>
                                            <ProgressBar name="Java" content="70%"/>
                                        </li>
                                        <li className='skill-item'>
                                            <ProgressBar name="Python" content="70%"/>
                                        </li>
                                        <li className='skill-item'>
                                            <ProgressBar name="C#" content="60%"/>
                                        </li>
                                        <li className='skill-item'>
                                            <ProgressBar name="SQL" content="40%"/>
                                        </li>
                                        <li className='skill-item'>
                                            <ProgressBar name="NoSQL" content="40%"/>
                                        </li>
                                    </ul>
                                </li>
                                <li className='cv-item'>
                                    <strong>Software y Frameworks:</strong>
                                    <ul className='skills-list'>
                                        <li className='skill-item'>
                                            <ProgressBar name="Photoshop" content="80%"/>
                                        </li>
                                        <li className='skill-item'>
                                            <ProgressBar name="Adobe Xd" content="70%"/>
                                        </li>
                                        <li className='skill-item'>
                                            <ProgressBar name="Git" content="75%"/>
                                        </li>
                                        <li className='skill-item'>
                                            <ProgressBar name="Django" content="60%"/>
                                        </li>
                                        <li className='skill-item'>
                                            <ProgressBar name="Flask" content="50%"/>
                                        </li>
                                        <li className='skill-item'>
                                            <ProgressBar name="ReactJS" content="60%"/>
                                        </li>
                                    </ul>
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