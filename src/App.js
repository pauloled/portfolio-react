import React from 'react';
import './App.css';
import Navbar from './components/Navbar'; // Barra de navegación
import Header from './components/Header';
import Main from './components/Main';
import Estudios from './components/Estudios';
import SoftSkills from './components/SoftSkills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Main />
      <Estudios />
      <SoftSkills />
      <Footer />
    </div>
  );
}

export default App;
