import React from 'react';
import { Link } from 'react-router-dom';
import { useDarkMode } from './DarkModeContext';
import Landing from './img/LogoTN.png';
import ODS from './img/Group.png';
import About from './img/About.png';
import Login from './img/Login - button.png';
import Registrar from './img/Register - button.png';


const AuthNavbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
      <nav style={{ backgroundColor: darkMode ? '#666' : '#ff0000', color: darkMode ? '#ff0000' : '#333' }}>
    <Link to="/"><img src={Landing} alt="LandingPage" /></Link>
    <Link to="/about"><img src={About} alt="About" /></Link>
    <Link to="/ods3"><img src={ODS} alt="ODS" /></Link>
    <Link to="/login"><img src={Login} alt="Login" /></Link>
    <Link to="/register"><img src={Registrar} alt="Registrar" /></Link>
    <button onClick={toggleDarkMode}>{darkMode ? 'Modo Claro' : 'Modo Escuro'}</button>
    </nav>
  );
};

export default AuthNavbar;