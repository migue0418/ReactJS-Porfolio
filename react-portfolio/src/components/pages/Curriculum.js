import React from 'react';
import '../../App.css';
import Navbar from '../Navbar';
import CurriculumSection from '../CurriculumSection';

export default function Curriculum() {
  return (
    <>
      <header className='header cv-nav'>
        <Navbar />
      </header>
      <main role='main' className='curriculum-page'>
        <CurriculumSection />
      </main>
    </>
  );
}