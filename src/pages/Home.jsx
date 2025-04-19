import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Estudios from '../components/Estudios';
import SoftSkills from '../components/SoftSkills';
import Idiomas from '../components/Idiomas';
import Experiencia from '../components/Experiencia';
import Proyectos from '../components/Proyectos';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Main />
      <Estudios />
      <Experiencia />
      <Idiomas />
      <SoftSkills />
      <Proyectos />
      <Footer />
    </div>
  );
}

export default Home;