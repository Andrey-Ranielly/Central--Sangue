import React from 'react';
import { Link } from 'react-router-dom';
import { useDarkMode } from './DarkModeContext';
import Exit from './img/Exit.png';
import Schedule from './img/IconA.png';
import Profile from './img/IconP.png';
import LogoTN from './img/LogoTN.png';


const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <nav style={{ backgroundColor: darkMode ? '#666' : '#ff0000', color: darkMode ? '#ff0000' : '#333' }}>
      <Link to="/home"><img src ={LogoTN} alt="Home" /></Link>
      <Link to="/profile"><img src={Profile} alt="Perfil" /></Link>
      <Link to="/schedule"><img src={Schedule} alt="Agendamento" /></Link>
      <Link to="/"><img src={Exit} alt="Sair" /></Link>
      <button onClick={toggleDarkMode}>{darkMode ? 'Modo Claro' : 'Modo Escuro'}</button>
    </nav>
  );
};

export default Navbar;
